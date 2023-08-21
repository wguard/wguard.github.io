---
title: 03-Channel的实现原理
date: 2023-08-21
sidebar: 'auto'
categories:
 - Golang
tags:
 - Golang实现原理
---

# channel实现原理

## 前言

channel是一个**线程安全的FIFO的队列**，主要用来多协程之间的通讯，也可以用来当做取消信号。

## 设计思想

Do not communicate by sharing memory; instead, share memory by communicating.

<u>CSP主要的设计思想是：不要通过共享内存的方式来通信，而是要通过通信的方式来共享内存。</u>

## 数据结构

Go语言的Channel在运行时的结构使用runtime.hchan表示。

```go
type hchan struct {
	qcount   uint // channel的元素个数
	dataqsiz uint // channel的循环队列的长度
	buf      unsafe.Pointer // 缓冲区数据指针
	elemsize uint16 // 元素的长度
	closed   uint32
	elemtype *_type // 元素的大小
	sendx    uint
	recvx    uint
	recvq    waitq // 获取数据G的队列
	sendq    waitq // 发送数据G的队列

	lock mutex
}


type waitq struct {
	first *sudog // 表示一个在等待列表中的 Goroutine,该结构中存储了两个分别指向前后 runtime.sudog 的指针以构成链表。
	last  *sudog
}
```

## 发送数据

### 编译过程

当我们往channel中发送数据时，就要使用到**channel <- data**语句，在编译的时候将它解析成OSEND节点，并转换成[`runtime.chansend1`](https://draveness.me/golang/tree/runtime.chansend1)

```go
func walkexpr(n *Node, init *Nodes) *Node {
	switch n.Op {
	case OSEND:
		n1 := n.Right
		n1 = assignconv(n1, n.Left.Type.Elem(), "chan send")
		n1 = walkexpr(n1, init)
		n1 = nod(OADDR, n1, nil)
		n = mkcall1(chanfn("chansend1", 2, n.Left.Type), nil, init, n.Left, n1)
	}
}
```

runtime.chansend1只是调用了[`runtime.chansend`](https://draveness.me/golang/tree/runtime.chansend) 并传入了Channel和需要发送的数据。[`runtime.chansend`](https://draveness.me/golang/tree/runtime.chansend) 是向 Channel 中发送数据时一定会调用的函数，该函数包含了发送数据的全部逻辑，如果我们在调用时将 `block` 参数设置成 `true`，那么表示当前发送操作是阻塞的。

```go
func chansend(c *hchan, ep unsafe.Pointer, block bool, callerpc uintptr) bool {
	lock(&c.lock)

	if c.closed != 0 {
		unlock(&c.lock)
		panic(plainError("send on closed channel"))
	}
```

在发送数据的逻辑执行之前会先为当前 Channel 加锁，防止多个线程并发修改数据。如果 Channel 已经关闭，那么向该 Channel 发送数据时会报 “send on closed channel” 错误并中止程序。

[`runtime.chansend`](https://draveness.me/golang/tree/runtime.chansend)函数主要可分为三个部分

1. 当存在接受者时，通过runtime.send 直接将数据发送给堵塞的接受者。
2. 当缓冲区还有空间时，将发送的数据写入channel的缓冲区。
3. 当不存在缓冲区或者缓冲区容量不足时，则将G放入sendq中。

## 接收数据

## 关闭通道

golang中关闭管道主要调用close函数，它会在程序编译的时候转换为 `OCLOSE` 节点以及 [`runtime.closechan`](https://draveness.me/golang/tree/runtime.closechan) 函数。当channel是个空指针或者已经被关闭了，则会触发panic。

```go
func closechan(c *hchan) {
	if c == nil {
		panic(plainError("close of nil channel"))
	}

	lock(&c.lock)
	if c.closed != 0 {
		unlock(&c.lock)
		panic(plainError("close of closed channel"))
	}
	........
```