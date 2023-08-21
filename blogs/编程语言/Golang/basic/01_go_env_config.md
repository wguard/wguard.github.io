---
title: Golang环境配置
date: 2022-04-07
sidebar: 'auto'
categories:
 - Golang
tags:
 - GoLang语言基础
---

::: tip介绍

GoLang学习笔记

:::

# 环境配置

##### 设置环境变量

```go
// 设置系统 linux windows drawin ...
SET GOOS=linux
// 设置架构
SET GOARCH=amd64
```

##### Go Mod 常用指令

```go
// 设置代理
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn

go env -w GOPROXY=https://goproxy.cn,https://goproxy.io,direct
```

##### 