---
title: HashMap集合
date: 2021-12-18
sidebar: 'auto'
categories:
 - JAVA
tags:
 - JAVA

---

::: tip 介绍
ArrayList集合底层原理
:::

## HashMap集合

###   1.  介绍

在JDK1.8之前，HashMap采用桶+链表实现，本质就是采用数组+单向链表组合型的数据结构。它之所以有相当快的查询速度主要是因为它是通过计算散列码来决定存储的位置。HashMap通过key的hashCode来计算hash值，不同的hash值就存在数组中不同的位置，当多个元素的hash值相同时（所谓hash冲突），就采用链表将它们串联起来（链表解决冲突），放置在该hash值所对应的数组位置上。 在JDK1.8中，HashMap的存储结构已经发生变化，它采用**数组+链表/红黑树**这种组合型数据结构。当hash值发生冲突时，会采用链表或者红黑树解决冲突。使用这样做的结果会更好，是O(logn)，而不是糟糕的O(n)。

### 2. 线程安全性

###  3. 主要成员变量

DEFAULT_INITIAL_CAPACITY：默认hash表的容量，为1<<4 (16)。

MAXIMUM_CAPACITY：hash表最大的容量，为1<<30 (2的30次方)。

 DEFAULT_LOAD_FACTOR：默认负载因子为0.75。

