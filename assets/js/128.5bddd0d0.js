(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{527:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"mac下移动硬盘中文件灰色无法操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac下移动硬盘中文件灰色无法操作"}},[s._v("#")]),s._v(" Mac下移动硬盘中文件灰色无法操作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("xattr -d com.apple.FinderInfo 文件全路径\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/img/System/Mac/006y8mN6ly1g78gcqy9vcj31kw03omxx.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"使修改的bash-profile立即生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使修改的bash-profile立即生效"}},[s._v("#")]),s._v(" 使修改的bash_profile立即生效")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" --login\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"mac多网卡同时上网方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac多网卡同时上网方法"}},[s._v("#")]),s._v(" Mac多网卡同时上网方法")]),s._v(" "),t("p",[s._v("通过netstat -rt命令查看路由信息")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/System/Mac/006y8mN6ly1g78gde2o29j31kw0b1jt2.jpg",alt:""}})]),s._v(" "),t("p",[s._v("上面的图片中，en0是无线网卡（外网），en4是有线连接的网卡（内网）\n将内网使用的IP添加到192.168.16.1这个路由上\nsudo route -n add -net 192.168.16.0/240 192.168.16.1")]),s._v(" "),t("h2",{attrs:{id:"mac查看端口占用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac查看端口占用情况"}},[s._v("#")]),s._v(" Mac查看端口占用情况")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:8080  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#杀死进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 进程ID\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"mac的finder中出现一个小白条"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac的finder中出现一个小白条"}},[s._v("#")]),s._v(" Mac的finder中出现一个小白条")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/System/Mac/006y8mN6ly1g78gdnnk57j31kw05aq31.jpg",alt:""}})]),s._v(" "),t("p",[s._v("鼠标点击这个白条，然后按esc键即可")]),s._v(" "),t("h2",{attrs:{id:"使mac系统不睡眠下载东西"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使mac系统不睡眠下载东西"}},[s._v("#")]),s._v(" 使Mac系统不睡眠下载东西")]),s._v(" "),t("p",[s._v("打开终端输入")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("caffeinate\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"mac中用excel打开csv文件乱码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac中用excel打开csv文件乱码"}},[s._v("#")]),s._v(" Mac中用Excel打开csv文件乱码")]),s._v(" "),t("p",[s._v("例如：3.csv文件，用文本编辑打开是正常的。但是用Excel打开中文就是乱码的\n解决方案：iconv -f UTF8 -t GB18030 源文件.csv >新文件.csv")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("iconv -f UTF8 -t GB18030 3.csv >4.csv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果想查看文件编码，可以用vi打开文件然后: set fileencoding")]),s._v(" "),t("h2",{attrs:{id:"mac中递归删除当前目录及子目录下的所有-ds-store文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac中递归删除当前目录及子目录下的所有-ds-store文件"}},[s._v("#")]),s._v(" Mac中递归删除当前目录及子目录下的所有.DS_Store文件")]),s._v(" "),t("p",[s._v("DS_Store 是给Finder用来存储这个文件夹的显示属性的：比如文件图标的摆放位置。删除以后的副作用就是这些信息的失去。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('步骤一：删除所有隐藏.DS_store文件，打开命令行窗口\nsudo find / -name ".DS_Store" -depth -exec rm {} \\;\n步骤二： 设置不再产生选项, 执行如下命令\ndefaults write com.apple.desktopservices DSDontWriteNetworkStores true\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"mac自带截图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac自带截图"}},[s._v("#")]),s._v(" Mac自带截图")]),s._v(" "),t("ul",[t("li",[s._v("Cmd + Shift + 3 截取整个屏幕，并保存截图至桌面")]),s._v(" "),t("li",[s._v("Cmd + Shift + 4 截取区域，并保存截图至桌面")]),s._v(" "),t("li",[s._v("Cmd + Ctrl + Shift + 3 截取整个屏幕并复制")]),s._v(" "),t("li",[s._v("Cmd + Ctrl + Shift + 4 截取区域并复制")])]),s._v(" "),t("h2",{attrs:{id:"finder中显示隐藏文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finder中显示隐藏文件"}},[s._v("#")]),s._v(" Finder中显示隐藏文件")]),s._v(" "),t("h4",{attrs:{id:"方法1-使用快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法1-使用快捷键"}},[s._v("#")]),s._v(" 方法1：使用快捷键")]),s._v(" "),t("p",[s._v("Command+Shift+. 可以显示隐藏文件、文件夹，再按一次，恢复隐藏；\nfinder下使用Command+Shift+G 可以前往任何文件夹，包括隐藏文件夹。")]),s._v(" "),t("h4",{attrs:{id:"方法2-使用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法2-使用命令"}},[s._v("#")]),s._v(" 方法2：使用命令")]),s._v(" "),t("p",[t("strong",[s._v("显示隐藏文件：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("defaults "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" com.apple.finder AppleShowAllFiles -boolean "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" Finder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("不显示隐藏文件：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("defaults "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" com.apple.finder AppleShowAllFiles -boolean "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" Finder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"解决安全与隐私里没有-任何来源-选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决安全与隐私里没有-任何来源-选项"}},[s._v("#")]),s._v(' 解决安全与隐私里没有"任何来源"选项')]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/System/Mac/006y8mN6ly1g78gdxsppgj30yz0u0tal.jpg",alt:""}})]),s._v(" "),t("p",[s._v("命令行执行如下命令即可")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" spctl --master-disable\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"mac下批量修改文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac下批量修改文件内容"}},[s._v("#")]),s._v(" mac下批量修改文件内容")]),s._v(" "),t("p",[s._v("最近测试服务器搬家，用于托管代码的地址也相应变更，最坑爹的是老代码里配置的podspec文件里的路径都是固定死ip的。一个个改过去费时费力，那只能通过工具进行批量修改。我使用的grep和sed命令行。")]),s._v(" "),t("p",[t("strong",[s._v("顺序如下:")])]),s._v(" "),t("h3",{attrs:{id:"_1、先cd到要修改的文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、先cd到要修改的文件夹"}},[s._v("#")]),s._v(" 1、先cd到要修改的文件夹")]),s._v(" "),t("h3",{attrs:{id:"_2、运行命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、运行命令行"}},[s._v("#")]),s._v(" 2、运行命令行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -rl "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168"')]),s._v(" --include"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*podspec"')]),s._v(" ./ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/192.168/10.100/g"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v('grep -rl "192.168"')]),s._v(" 表示搜索含有192.168内容的文件")])]),s._v(" "),t("li",[t("p",[t("code",[s._v('--include="*podspec"')]),s._v(" 表示文件后缀为podspec。如果不加这行，命令也会替换掉git或者svn等相关隐藏文件里的内容，造成提交代码失败。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("./")]),s._v(" 表示递归搜索该目录下的全部子文件夹")])]),s._v(" "),t("li",[t("p",[t("code",[s._v('xargs sed -i "" "s/192.168/10.100/g"')]),s._v("      表示替换 192.168  为  10.100")])])]),s._v(" "),t("h2",{attrs:{id:"macos安装homebrew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos安装homebrew"}},[s._v("#")]),s._v(" MacOS安装Homebrew")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);