(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{385:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"安装jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk"}},[a._v("#")]),a._v(" 安装JDK")]),a._v(" "),t("h3",{attrs:{id:"卸载已经安装的jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载已经安装的jdk"}},[a._v("#")]),a._v(" 卸载已经安装的JDK")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" jdk\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" gcj\nyum -y remove java java-1.4.2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".115\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"安装sun公司的jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装sun公司的jdk"}},[a._v("#")]),a._v(" 安装sun公司的JDK")]),a._v(" "),t("ol",[t("li",[a._v("解压jdk-6u24-linux-i586.bin文件到"),t("code",[a._v("/opt/modules/")]),a._v("下。解压完成后会出现一个jdk1.6.0_24的文件夹")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./jdk-6u24-linux-i586.bin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("配置环境变量："),t("code",[a._v("vi /etc/profile")]),a._v("\n在最后一行增加如下内容")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# JAVA_HOME")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/modules/jdk1.6.0_24\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASS_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/rt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/tools.jar\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"安装hadoop-本地方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装hadoop-本地方式"}},[a._v("#")]),a._v(" 安装Hadoop（本地方式）")]),a._v(" "),t("h3",{attrs:{id:"解压并安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压并安装"}},[a._v("#")]),a._v(" 解压并安装")]),a._v(" "),t("ol",[t("li",[a._v("解压hadoop-1.1.2.tar.gz到"),t("code",[a._v("/opt/modules/")]),a._v("下。解压完成后会出现一个hadoop-1.1.2的文件夹")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf hadoop-1.1.2.tar.gz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("配置环境变量：vi /etc/profile\n在最后一行增加如下内容")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HADOOP_HOME")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/modules/hadoop-1.1.2\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HADOOP_HOME")]),a._v("/bin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"启动测试程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动测试程序"}},[a._v("#")]),a._v(" 启动测试程序")]),a._v(" "),t("p",[a._v("拷贝"),t("code",[a._v("hadoop_home/conf/*.xml")]),a._v("文件到"),t("code",[a._v("/opt/data/input")]),a._v("目录下")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /opt/modules/hadoop-1.1.2/conf/*.xml /opt/data/input/\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("运行如下代码\n必须存在："),t("code",[a._v("/opt/data/input")]),a._v("\n必须不存在："),t("code",[a._v("/opt/data/output/")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("hadoop jar hadoop-examples-1.1.2.jar "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" /opt/data/input /opt/data/output/ "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dfs[a-z.]+'")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("查看"),t("code",[a._v("/opt/data/output/")]),a._v("目录下内容\n会出现两个文件part-00000和_SUCCESS\n其中_SUCCESS是空的，而part-00000文件中只有如下一行内容")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("       dfsadmin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);