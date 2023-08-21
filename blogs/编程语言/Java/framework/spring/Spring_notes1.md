---
title: （一）Spring--底层核心原理解析
date: 2022-07-09
sidebar: 'auto'
categories:
 - Spring
tags:
 - Spring
---

### （一）Spring源码---Spring底层核心原理解析

对Spring的底层有一个整体的大致了解：

1. Bean的生命周期底层原理
2. 依赖注入的底层原理
3. 初始化底层原理
4. 推断构造方法底层原理
5. AOP底层原理
6. Spring事务底层原理

#### Spring Bean创建的生命周期

Class类对象 —》无参构造方法—》对象—》依赖注入—》初始化前（@PostConstruct）—》初始化( InitializingBean )—》初始化后（AOP）—》代理对象—》Bean

#### 构造方法

1. 若存在一个无参构造方法，多个有参构造方法，使用无参构造方法
2. 若存在两个有参构造的方法，Spring无法知道使用哪个构造方法，会报错
3. 若只存在一个有参构造的方法，则使用当前构造方法

#### 构造方法参数

Spring会根据入参的类型和入参的名字去Spring中找Bean对象

1. 先根据入参类型去查找，如果只存在一个则直接使用
2. 如果根据类型找到多个，则根据名称查找
3. 若不存在spring则直接会报错

#### AOP流程

cglib：代理类继承原始类，重写原始类的方法,在方法中执行target.xxxx()方法

初始化后判断当前Bean是否进行需要AOP

1. 找到所有的切面Bean 
2. 遍历每一个切面Bean的方法，查看当前方法是否与代理方法是否匹配，缓存map

#### 事务处理

1. 判断当前是否存在@Transction
2. 创建一个数据库连接（事务管理器 dataSource）
3. coon.autocommit  = false

#### Spring底层推断构造方法



