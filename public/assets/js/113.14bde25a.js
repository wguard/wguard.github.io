(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{567:function(a,s,t){"use strict";t.r(s);var h=t(1),_=Object(h.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[a._v("介绍")]),s("p",[a._v("ArrayList集合底层原理")])]),s("h2",{attrs:{id:"hashmap集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashmap集合"}},[a._v("#")]),a._v(" HashMap集合")]),a._v(" "),s("h3",{attrs:{id:"_1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[a._v("#")]),a._v(" 1.  介绍")]),a._v(" "),s("p",[a._v("在JDK1.8之前，HashMap采用桶+链表实现，本质就是采用数组+单向链表组合型的数据结构。它之所以有相当快的查询速度主要是因为它是通过计算散列码来决定存储的位置。HashMap通过key的hashCode来计算hash值，不同的hash值就存在数组中不同的位置，当多个元素的hash值相同时（所谓hash冲突），就采用链表将它们串联起来（链表解决冲突），放置在该hash值所对应的数组位置上。 在JDK1.8中，HashMap的存储结构已经发生变化，它采用"),s("strong",[a._v("数组+链表/红黑树")]),a._v("这种组合型数据结构。当hash值发生冲突时，会采用链表或者红黑树解决冲突。使用这样做的结果会更好，是O(logn)，而不是糟糕的O(n)。")]),a._v(" "),s("h3",{attrs:{id:"_2-线程安全性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程安全性"}},[a._v("#")]),a._v(" 2. 线程安全性")]),a._v(" "),s("h3",{attrs:{id:"_3-主要成员变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-主要成员变量"}},[a._v("#")]),a._v(" 3. 主要成员变量")]),a._v(" "),s("p",[a._v("DEFAULT_INITIAL_CAPACITY：默认hash表的容量，为1<<4 (16)。")]),a._v(" "),s("p",[a._v("MAXIMUM_CAPACITY：hash表最大的容量，为1<<30 (2的30次方)。")]),a._v(" "),s("p",[a._v("DEFAULT_LOAD_FACTOR：默认负载因子为0.75。")])])}),[],!1,null,null,null);s.default=_.exports}}]);