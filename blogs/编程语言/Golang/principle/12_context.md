---
title: 12-Context实现原理
date: 2023-06-13
sidebar: 'auto'
categories:
 - Golang
tags:
 - Golang实现原理
---

## Context是什么

context是Golang1.7才引入的，它表示的是goroutine的上下文，包含着goroutine的运行状态、环境、现场等信息。主要用来：取消信号、超时时间、截止日期、传递请求相关值等。

## 接口与实现

context接口定义了四个需要实现的方法

1. **Deadline() (deadline time.Time, ok bool)**—返回context取消的时间，也就是完成工作的截止日期。

2. **Done() <-chan struct{}**—返回一个channel，这个channel会在当前工作完成或者上下文被取消后关闭，多个调用返回的都为同一个channel

3. **Err() error**—返回context结束的原因，它只会在Done方法对应的Channel关闭时返回非空的值。

   a) 如果context被取消，会返回`Canceled`错误。

   b) 如果context超时，会返回`DeadlineExceeded`错误。

4. **Value(key any) any**—从 `context`中获取键对应的值，对于同一个上下文来说，多次调用 `Value` 并传入相同的 `Key` 会返回相同的结果，该方法可以用来传递请求特定的数据；

```
type Context interface {
	Deadline() (deadline time.Time, ok bool)
	Done() <-chan struct{}
	Err() error
	Value(key interface{}) interface{}
}
```

context的常用方法

[`context.Background`](https://draveness.me/golang/tree/context.Background) 

[`context.TODO`](https://draveness.me/golang/tree/context.TODO)

[`context.WithDeadline`](https://draveness.me/golang/tree/context.WithDeadline) 

[`context.WithValue`](https://draveness.me/golang/tree/context.WithValue) 

## 设计原理



## 默认上下文

context中最常用的还是`context.Background`、`context.Todo`，这两个方法都会返回



## 取消信号

[`context.WithCancel`](https://draveness.me/golang/tree/context.WithCancel) 

## 传递请求相关值

context.Withvalue
