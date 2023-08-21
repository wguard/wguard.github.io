---
title: Java自定义注解的用法
date: 2021-12-18
sidebar: 'auto'
categories:
 - JAVA
tags:
 - JAVA
---

::: tip
Java自定义注解的用法
:::

## Java自定义注解的用法

###   1.  Java注解介绍

Java 注解（Annotation）又称 `Java 标注`，是 JDK5.0 引入的一种注释机制。Java 语言中的类、方法、变量、参数和包等都可以被标注。和 Javadoc 不同，Java 标注可以通过反射获取标注内容。在编译器生成类文件时，标注可以被嵌入到字节码中。Java 虚拟机可以保留标注内容，在运行时可以获取到标注内容 。 当然它也支持自定义 Java 标注。

###   2.  内置注解

Java定义了一套注解，共有7个，3个在java.lang包下，剩下4个在java.lang.annotation中。

`作用在代码的注解：`

- @Override : 检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误。 
- @Deprecated : 标记过时的方法。如果使用该方法，会报编译异常。
- @SuppressWarnings : 指示编译器去忽略注解中声明的警告。

`作用在其他注解上的注解（元注解）：`

- @Retention : 标识这个注解如何保存。
- @Documented : 标记这些注解是否保存在用户文档中。
- @Target : 标记这个注解应该是哪种 Java 成员。
- @Inherited : 标记这个注解是继承于哪个注解类(默认 注解并没有继承于任何子类)

###   3.  内置注解

Java定义了一套注解，共有7个，3个在java.lang包下，剩下4个在java.lang.annotation中。

