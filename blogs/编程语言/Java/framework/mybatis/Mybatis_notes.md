---
title: Mybatis随记
date: 2022-05-05
sidebar: 'auto'
categories:
 - 随记
tags:
 - 随记
---

::: tip 介绍
Mybatis随记
:::

##### #{}与${}的区别是什么？

#{}是预编译处理，${}是字符串替换。

mybatis在处理#{}时，会将sql中的#{}替换为？号，调用PreparedStatement的set方法来赋值。

Mybatis在处理${}时，就是把${}替换为变量的值。

使用#{}可以有效的防止SQL注入，提高系统安全性。

##### MyBatis的工作原理

1. 读取Mybatis配置文件：mybatis-config.xml为全局配置文件，配置了Mybatis的运行环境等信息，例如数据库连接信息。
2. 加载映射文件：映射文件即SQL映射文件，该文件中配置了操作数据库的SQL语句，需要