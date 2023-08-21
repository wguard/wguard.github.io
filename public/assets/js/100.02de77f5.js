(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{549:function(a,t,s){"use strict";s.r(t);var r=s(1),v=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("本文的Go源码基于go1.19")])]),a._v(" "),t("h1",{attrs:{id:"gpm调度模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpm调度模型"}},[a._v("#")]),a._v(" GPM调度模型")]),a._v(" "),t("h2",{attrs:{id:"进程与线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[a._v("#")]),a._v(" 进程与线程")]),a._v(" "),t("p",[a._v("在理解GPM调度模型时，我们要先弄清楚进程与线程的概念。在多数操作系统当中，线程属于进程。典型的UNIX进程可以看做只有一个控制线程：一个进程在某一时刻只能干一件事情。")]),a._v(" "),t("h2",{attrs:{id:"设计原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[a._v("#")]),a._v(" 设计原理")]),a._v(" "),t("p",[a._v("如今的Go语言的调度器有着优异的性能，但是发展非常艰辛。调度器经过几个大版本的迭代才有今天的优异性能，历史上几个不同版本的调度器引入了不同的改进，也存在着不同的缺陷。")]),a._v(" "),t("h3",{attrs:{id:"单线程调度器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单线程调度器"}},[a._v("#")]),a._v(" 单线程调度器")]),a._v(" "),t("p",[a._v("GM模型")]),a._v(" "),t("h3",{attrs:{id:"多线程调度器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多线程调度器"}},[a._v("#")]),a._v(" 多线程调度器")]),a._v(" "),t("h3",{attrs:{id:"任务窃取调度器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务窃取调度器"}},[a._v("#")]),a._v(" 任务窃取调度器")]),a._v(" "),t("h3",{attrs:{id:"抢占式调度器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抢占式调度器"}},[a._v("#")]),a._v(" 抢占式调度器")]),a._v(" "),t("h3",{attrs:{id:"非均匀存储访问调度器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非均匀存储访问调度器"}},[a._v("#")]),a._v(" 非均匀存储访问调度器")]),a._v(" "),t("h2",{attrs:{id:"数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[a._v("#")]),a._v(" 数据结构")]),a._v(" "),t("h3",{attrs:{id:"g"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g"}},[a._v("#")]),a._v(" G")]),a._v(" "),t("p",[a._v("G表示"),t("strong",[a._v("Goroutine")]),a._v("，只存在于Go语言运行时，表示一个待执行的任务。它是Go在用户态提供的线程，占用了更小的内存空间，也大大降低了上下文的切换。")]),a._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"m"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#m"}},[a._v("#")]),a._v(" M")]),a._v(" "),t("p",[a._v("M表示"),t("strong",[a._v("操作系统的线程")]),a._v("，它由操作系统的调度器调度和管理。")]),a._v(" "),t("h3",{attrs:{id:"p"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p"}},[a._v("#")]),a._v(" P")]),a._v(" "),t("p",[a._v("P表示"),t("strong",[a._v("处理器")]),a._v("，它被用来在M上调度G。")]),a._v(" "),t("h2",{attrs:{id:"调度器启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调度器启动"}},[a._v("#")]),a._v(" 调度器启动")]),a._v(" "),t("h3",{attrs:{id:"执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行过程"}},[a._v("#")]),a._v(" 执行过程")]),a._v(" "),t("p",[a._v("虚拟地址空间")]),a._v(" "),t("p",[a._v("程序入口：go语言的程序入口不是main.main，在不同平台下go的执行入口不同。经过一系列的检查和初始化等准备工作后，会创建main goroutine，执行成功后才调用main.main。")])])}),[],!1,null,null,null);t.default=v.exports}}]);