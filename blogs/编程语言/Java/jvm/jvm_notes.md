---
title: JVM随记
date: 2022-03-03
sidebar: 'auto'
categories:
 - 随记
tags:
 - 随记
---

::: tip 介绍
JVM知识点
:::

#### jvm去除类校验参数

```java
java  -Xverify:none -jar  /opt/portable-web.jar 
```

#### 腾讯jdk（Tencent Kona 8）的两个特性

```
github地址: https://github.com/Tencent/TencentKona-8

Default CDS Archive
这个特性用于提高 JVM 的启动速度， 默认为打开状态，可以通过以下命令启动打开/关闭该特性：
java -Xshare:off 

Java Flight Recorder（JFR）
这个特性用于采集 Java 应用程序的诊断信息，默认为关闭状态。

启动的时候可以通过以下命令启用 JFR：
java -XX:+FlightRecorder
```

