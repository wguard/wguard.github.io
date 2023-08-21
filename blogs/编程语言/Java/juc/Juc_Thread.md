---
title: Java线程
date: 2022-07-05
sidebar: 'auto'
categories:
 - 并发
tags:
 - 并发
---

::: tip 介绍
Java线程
:::

### **1  Java线程的创建方式**

&emsp;&emsp; java线程创建方式有四种：继承Thread类、实现Runnable接口、实现Callable接口、基于线程池。

#### **1.1  继承Thread类**

&emsp;&emsp;Thread类实现了Runnable接口并定义了操作线程的一些方法，我们可以通过继承Thread类的方式创建一个线程。具体实现为创建一个类并继承Thread接口，然后实例化线程对象并调用start方法启动线程。start方法是一个native方法，通过在操作系统上启动一个新线程，并最终执行run方法来启动一个线程。run方法内的代码是线程类的具体实现逻辑。

#### 1.2 实现Runnable接口

#### 1.3 实现Callable接口

#### 1.4 基于线程池

### **2  线程的生命周期**

### **3  线程的基本方法**

### **4  线程池的工作原理**