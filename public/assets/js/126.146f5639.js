(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{579:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"poetry的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#poetry的使用"}},[t._v("#")]),t._v(" Poetry的使用")]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("mac、linux下载：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mac：brew install poetry\n\nmac、linux：curl -sSL https://install.python-poetry.org | python3 -\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("Windows（Powershell）下载")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Invoke-WebRequest "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Uri")]),t._v(" https://install.python-poetry.org -UseBasicParsing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".Content "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" py -\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),e("p",[t._v("具体可以看"),e("a",{attrs:{href:"https://python-poetry.org/docs/cli/",target:"_blank",rel:"noopener noreferrer"}},[t._v("poetry命令文档"),e("OutboundLink")],1)]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("命令")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("poetry new project_name")]),t._v(" "),e("td",[t._v("创建poetry项目，poetry new --src my-package 可以指定文件夹，poetry new my-folder --name my-package 以不同于文件夹的方式命名。")])]),t._v(" "),e("tr",[e("td",[t._v("poetry  init")]),t._v(" "),e("td",[t._v("初始化poetry项目")])]),t._v(" "),e("tr",[e("td",[t._v("poetry  install")]),t._v(" "),e("td",[t._v("下载依赖")])]),t._v(" "),e("tr",[e("td",[t._v("poetry update")]),t._v(" "),e("td",[t._v("更新依赖")])]),t._v(" "),e("tr",[e("td",[t._v("poetry add name")]),t._v(" "),e("td",[t._v("将所需的包添加到您的"),e("code",[t._v("pyproject.toml")]),t._v("并安装")])]),t._v(" "),e("tr",[e("td",[t._v("poetry remove name")]),t._v(" "),e("td",[t._v("删除指定的包")])]),t._v(" "),e("tr",[e("td",[t._v("poetry run my-script")]),t._v(" "),e("td",[t._v("该"),e("code",[t._v("run")]),t._v("命令在项目的 virtualenv 内执行给定的命令。例如：poetry run pyinstaller -F main.py 。也可以在"),e("code",[t._v("pyproject.toml")]),t._v("中定义tool.poetry.scripts执行指定的脚本。")])]),t._v(" "),e("tr",[e("td",[t._v("poetry shell")]),t._v(" "),e("td",[t._v("该"),e("code",[t._v("shell")]),t._v("命令根据"),e("code",[t._v("$SHELL")]),t._v("环境变量在虚拟环境中生成一个 shell")])]),t._v(" "),e("tr",[e("td",[t._v("poetry search requests pendulum")]),t._v(" "),e("td",[t._v("此命令搜索远程索引上的包。")])]),t._v(" "),e("tr",[e("td",[t._v("poetry export -f requirements.txt --output requirements.txt")]),t._v(" "),e("td",[t._v("此命令将锁定文件导出为其他格式。")])])])]),t._v(" "),e("h2",{attrs:{id:"配置下载源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置下载源"}},[t._v("#")]),t._v(" 配置下载源")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('常见的源\n豆瓣 https://pypi.doubanio.com/simple/\n网易 https://mirrors.163.com/pypi/simple/\n阿里云 https://mirrors.aliyun.com/pypi/simple/\n清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/\n\n\n在配置文件pyproject.toml最后增加配置\n#设置poetry包管理工具的自定义pypi镜像源配置\n[[tool.poetry.source]]\nname = "aliyun"\nurl = "http://mirrors.aliyun.com/pypi/simple"\ndefault = true\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);