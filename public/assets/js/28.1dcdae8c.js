(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{474:function(t,_,a){"use strict";a.r(_);var v=a(1),s=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"并发测试手册"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并发测试手册"}},[t._v("#")]),t._v(" 并发测试手册")]),t._v(" "),_("h3",{attrs:{id:"字符测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符测试"}},[t._v("#")]),t._v(" 字符测试")]),t._v(" "),_("h3",{attrs:{id:"_1-环境准备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[t._v("#")]),t._v(" 1. 环境准备")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("环境")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("堡垒机")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("3-5台运维电脑")]),t._v(" "),_("td",[t._v("具体数量可根据测试并发数决定，需要安装ui_agent")])]),t._v(" "),_("tr",[_("td",[t._v("10台linux目标设备")]),t._v(" "),_("td",[t._v("具体数量可由测试并发数决定")])])])]),t._v(" "),_("h3",{attrs:{id:"_2-测试步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试步骤"}},[t._v("#")]),t._v(" 2. 测试步骤")]),t._v(" "),_("ol",[_("li",[t._v("系统管理-》系统配置-》安全配置-》登录会话配置，将同一用户在线会话数设置为0（不限制）。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"%E5%B9%B6%E5%8F%91%E6%B5%8B%E8%AF%95%E6%89%8B%E5%86%8C/image-20230630143013461.png",alt:"image-20230630143013461"}})]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[t._v("策略管理-》运维策略中清除所有的策略，并将字符的设备账号配置给admin。")])]),t._v(" "),_("li",[_("p",[t._v("在运维电脑上传"),_("strong",[t._v("ui_agent")]),t._v("，并在程序同级目录下增加配置文件"),_("strong",[t._v("settings.toml")]),t._v("。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("配置项")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("url")]),t._v(" "),_("td",[t._v("堡垒机访问地址")])]),t._v(" "),_("tr",[_("td",[t._v("username")]),t._v(" "),_("td",[t._v("堡垒机账号")])]),t._v(" "),_("tr",[_("td",[t._v("password")]),t._v(" "),_("td",[t._v("堡垒机密码")])]),t._v(" "),_("tr",[_("td",[t._v("task_max_workers")]),t._v(" "),_("td",[t._v("任务数量，即打开n个浏览器，阈值为50，并发数：策略关联设备账号数*任务数量")])]),t._v(" "),_("tr",[_("td",[t._v("headless")]),t._v(" "),_("td",[t._v("是否保持浏览器静默，1 开启 0 关闭")])])])]),t._v(" "),_("div",{staticClass:"language-html line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-html"}},[_("code",[t._v('url = "https://192.168.1.125"\nusername = "admin"\npassword = "admin@123"\ntask_max_workers = 3\nheadless = 1\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])])]),t._v(" "),_("li",[_("p",[t._v("启动"),_("strong",[t._v("ui_agent")]),t._v("，并在堡垒机审计管理-》实时会话查看实时在线会话，在线会话数即为并发数。")])]),t._v(" "),_("li",[_("p",[t._v("观察并记录堡垒机cpu、内存使用情况。")])])]),t._v(" "),_("h2",{attrs:{id:"图形测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图形测试"}},[t._v("#")]),t._v(" 图形测试")]),t._v(" "),_("h3",{attrs:{id:"_1-环境准备-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备-2"}},[t._v("#")]),t._v(" 1. 环境准备")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("环境")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("堡垒机")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("3-5台运维电脑")]),t._v(" "),_("td",[t._v("具体数量可根据测试并发数决定")])]),t._v(" "),_("tr",[_("td",[t._v("3台windows目标设备")]),t._v(" "),_("td",[t._v("需要安装win_agent，并且开启多用户访问会话，具体数量可根据测试并发数决定")])])])]),t._v(" "),_("h3",{attrs:{id:"_2-测试步骤-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试步骤-2"}},[t._v("#")]),t._v(" 2. 测试步骤")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("windows目标设备采用应用发布机配置域用户模式，并手动添加账户录入至堡垒机中。")])]),t._v(" "),_("li",[_("p",[t._v('windows目标设备配置rdp会话开启时启动win_agent。打开"运行"对话框，可以使用快捷键Win + R。输入"gpedit.msc"并按Enter键，打开本地组策略编辑器。导航到计算机配置-》管理模版-》Windows组件-》远程桌面服务-》远程桌面会话主机-》远程会话环境中，配置连接时启动应用程序为win_agent.exe。')]),t._v(" "),_("p",[_("img",{attrs:{src:"%E5%B9%B6%E5%8F%91%E6%B5%8B%E8%AF%95%E6%89%8B%E5%86%8C/image-20230630171704447.png",alt:"image-20230630171704447"}})])]),t._v(" "),_("li",[_("p",[t._v("在运维电脑上传"),_("strong",[t._v("ui_agent")]),t._v("，并在程序同级目录下增加配置文件"),_("strong",[t._v("settings.toml")]),t._v("与字符会话配置一致。")])]),t._v(" "),_("li",[_("p",[t._v("启动"),_("strong",[t._v("ui_agent")]),t._v("，并在堡垒机审计管理-》实时会话查看实时在线会话，在线会话数即为并发数。")])]),t._v(" "),_("li",[_("p",[t._v("观察并记录堡垒机cpu、内存使用情况。")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);