---
title: 设计模式---简介
date: 2022-12-18
sidebar: 'auto'
categories:
 - 设计模式
tags:
 - 设计模式
---

::: tip
设计模式---七大设计原则
:::

## 设计模式---简介

###   1.  介绍

设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

###   2.  分类

设计模式总共有23种，这些可以分为三大类：创建型模式、结构型模式、行为型模式。

|                   模式                    | 描述                                                         | 包括                                                         |
| :---------------------------------------: | :----------------------------------------------------------- | ------------------------------------------------------------ |
| <div style="width:50px" >创建型模式</div> | 这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。 | <div style="width: 200px"></br>工厂模式<br/>抽象工厂模式<br/>单例模式<br/>建造者模式<br/>原型模式</div> |
|                结构型模式                 | 这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。 | <div style="width: 200px"></br>适配器模式<br/>桥接模式<br/>过滤器模式<br/>组合模式<br/>装饰器模式<br/>外观模式<br/>亨元模式<br/>代理模式</div> |
|                行为型模式                 | 这些设计模式特别关注对象之间的通信。                         | <div style="width: 200px"></br>责任链模式<br/>命令模式<br/>解释器模式<br/>迭代器模式<br/>中介者模式<br/>备忘录模式<br/>观察者模式<br/>状态模式<br/>空对象模式<br/>策略模式<br/>模板模式<br/>访问者模式</div> |



###   3.  常用的七大原则

- ###### 单一职责原则

  对类来说的，即一个类只负责一项职责。如A类负责两个不同的职责：职责1、职责2。当职责需求变更而改变A时，可能会造成职责2执行错误，所有要讲类A的粒度分解为A1、A2。

- ###### 接口隔离原则

  使用多个隔离的接口，比使用单个接口要好。（降低类之前的耦合度）

- ###### 依赖倒转（倒置）原则

  

- ###### 里氏替换原则

  

- ###### 开闭原则

  `对扩展开放，对修改关闭。`在程序需要进行拓展的时候，不能去修改原有代码，实现一个热插拔的效果

- ###### 迪米特法则

  

- ###### 合成复用原则
