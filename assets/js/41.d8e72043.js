(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{410:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("本次将zookeeper安装至"),t("code",[s._v("/usr/local/hadoop/zookeeper-3.4.10/")]),s._v("目录下")]),s._v(" "),t("p",[s._v("下载：")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://www-us.apache.org/dist/zookeeper/zookeeper-3.4.10/zookeeper-3.4.10.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("zookeeper3.4.10下载"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("linux环境准备：")]),s._v(" "),t("p",[t("strong",[s._v("注意：准备服务器台数的时候要注意，一定要是奇数（1，3，5，7台机器）")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("序号")]),s._v(" "),t("th",[s._v("IP")]),s._v(" "),t("th",[s._v("hostname")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("1")]),s._v(" "),t("td",[s._v("192.168.56.121")]),s._v(" "),t("td",[s._v("mini1")])]),s._v(" "),t("tr",[t("td",[s._v("2")]),s._v(" "),t("td",[s._v("192.168.56.122")]),s._v(" "),t("td",[s._v("mini2")])]),s._v(" "),t("tr",[t("td",[s._v("3")]),s._v(" "),t("td",[s._v("192.168.56.123")]),s._v(" "),t("td",[s._v("mini3")])])])]),s._v(" "),t("h2",{attrs:{id:"上传并解压zookeeper-3-4-10包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传并解压zookeeper-3-4-10包"}},[s._v("#")]),s._v(" 上传并解压zookeeper-3.4.10包")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 soft"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zxvf zookeeper-3.4.10.tar.gz")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"配置zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置zookeeper"}},[s._v("#")]),s._v(" 配置zookeeper")]),s._v(" "),t("p",[s._v("修改zoo.cfg文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 soft"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/local/hadoop/zookeeper-3.4.10/conf/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制一份zoo.cfg配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp zoo_sample.cfg zoo.cfg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置zoo.cfg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi zoo.cfg")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("zoo.cfg配置文件如下："),t("strong",[s._v("中文的地方需要修改")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of milliseconds of each tick")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tickTime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of ticks that the initial")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# synchronization phase can take")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("initLimit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of ticks that can pass between")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sending a request and getting an acknowledgement")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("syncLimit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the directory where the snapshot is stored.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# do not use /tmp for storage, /tmp here is just")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example sakes.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dataDir <span style='color:red;'>需要修改，自行创建zkdata目录</span>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataDir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/hadoop/zookeeper-3.4.10/zkdata\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the port at which the clients will connect")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("clientPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the maximum number of client connections.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# increase this if you need to handle more clients")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#maxClientCnxns=60")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Be sure to read the maintenance section of the")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# administrator guide before turning on autopurge.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of snapshots to retain in dataDir")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#autopurge.snapRetainCount=3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Purge task interval in hours")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Set to "0" to disable auto purge feature')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#autopurge.purgeInterval=1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <span style='color:red;'>这里的机器台数一定要是奇数</span>")]),s._v("\nserver.1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mini1:2888:3888\nserver.2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mini2:2888:3888\nserver.3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mini3:2888:3888\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("p",[s._v("创建节点myid文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建/usr/local/hadoop/zookeeper-3.4.10/zkdata目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir /usr/local/hadoop/zookeeper-3.4.10/zkdata")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/local/hadoop/zookeeper-3.4.10/zkdata")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 zkdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 1 >myid")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"在mini2和mini3上安装zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在mini2和mini3上安装zookeeper"}},[s._v("#")]),s._v(" 在mini2和mini3上安装zookeeper")]),s._v(" "),t("p",[s._v("使用scp命令将mini1上配置的zookeeper复制到mini2和mini3机器上")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp -r /usr/local/hadoop/ mini2:/usr/local/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp -r /usr/local/hadoop/ mini3:/usr/local/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("修改mini2上的myid文件内容为2")]),s._v(" "),t("p",[s._v("修改mini3上的myid文件内容为3")]),s._v(" "),t("h2",{attrs:{id:"启动zookeeper集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动zookeeper集群"}},[s._v("#")]),s._v(" 启动zookeeper集群")]),s._v(" "),t("p",[s._v("分别在三台机器上执行zkServer.sh start命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zkServer.sh start")]),s._v("\nZooKeeper JMX enabled by default\nUsing config: /usr/local/hadoop/zookeeper-3.4.10/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/zoo.cfg\nStarting zookeeper "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". STARTED\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zkServer.sh status")]),s._v("\nZooKeeper JMX enabled by default\nUsing config: /usr/local/hadoop/zookeeper-3.4.10/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/zoo.cfg\nMode: follower\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mini1 conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录")]),s._v(" "),t("h3",{attrs:{id:"启动zookeeper集群脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动zookeeper集群脚本"}},[s._v("#")]),s._v(" 启动zookeeper集群脚本")]),s._v(" "),t("p",[t("strong",[s._v("start-zk.sh")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动zookeeper集群脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start zookeeper..."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" mini"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source /etc/profile;/usr/local/hadoop/zookeeper-3.4.10/bin/zkServer.sh start"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);