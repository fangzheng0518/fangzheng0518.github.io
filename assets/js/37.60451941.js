(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{406:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://www-us.apache.org/dist/sqoop/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www-us.apache.org/dist/sqoop/"),t("OutboundLink")],1),s._v("\n打开以上链接，开始下载sqoop2\n"),t("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tNc79ly1fz7ns4oq2aj30vk090jse.jpg",alt:"img"}}),s._v(" "),t("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79ly1fz7nse9yp4j30zy0iwgp8.jpg",alt:"img"}}),s._v("\n下载后得到：sqoop-1.99.7-bin-hadoop200.tar.gz文件")]),s._v(" "),t("p",[s._v("其中sqoop1和sqoop2区别可以参考以下链接\n"),t("a",{attrs:{href:"http://blog.csdn.net/gamer_gyt/article/details/55225700",target:"_blank",rel:"noopener noreferrer"}},[s._v("重拾初心——Sqoop1和Sqoop2的刨析对比 "),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("安装步骤参考"),t("a",{attrs:{href:"http://sqoop.apache.org/docs/1.99.7/admin/Installation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"解压tar包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压tar包"}},[s._v("#")]),s._v(" 解压tar包")]),s._v(" "),t("p",[s._v("将sqoop-1.99.7-bin-hadoop200.tar.gz上传至服务器中，这里安装到/usr/local/hadoop/sqoop-1.99.7目录中")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝tar包到/usr/local/hadoop/中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" sqoop-1.99.7-bin-hadoop200.tar.gz /usr/local/hadoop/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压tar包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf sqoop-1.99.7-bin-hadoop200.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为文件夹重命名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" sqoop-1.99.7-bin-hadoop200 sqoop-1.99.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"配置sqoop2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置sqoop2"}},[s._v("#")]),s._v(" 配置sqoop2")]),s._v(" "),t("ol",[t("li",[s._v("确保sqoop2所依赖的环境变量\nsqoop2需要hadoop的依赖(HADOOP_COMMON, HADOOP_HDFS, HADOOP_MAPRED, HADOOP_YARN)，所以你的环境变量中需要存在如下的环境变量")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_COMMON_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_HDFS_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_MAPRED_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_YARN_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("如果配置了HADOOP_HOME，则sqoop会自动寻找$HADOOP_HOME/share/common相应的目录。")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("配置sqoop2的环境变量")])]),s._v(" "),t("p",[s._v("在/etc/profire文件中增加如下配置，"),t("strong",[s._v("注意SQOOP2_HOME的位置")])])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Sqoop配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SQOOP2_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/hadoop/sqoop-1.99.7\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATALINA_BASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SQOOP2_HOME")]),s._v("/server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Sqoop外部jar包存放路径，以后mysql-**.jar，odbc*.jar文件都放到extra-lib中即可")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SQOOP_SERVER_EXTRA_LIB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SQOOP2_HOME")]),s._v("/server/lib/extra-lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SQOOP2_HOME")]),s._v("/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("sqoop访问hdfs的配置")]),s._v("\nsqoop需要模拟用户访问hdfs，所以需要在hadoop的core-site.xml中配置相应的访问地址和组\n在hadoop的core-site.xml中增加如下配置")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hadoop.proxyuser.sqoop2.hosts"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("*"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("hadoop.proxyuser.sqoop2.groups"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("*"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("配置sqoop访问的hadoop配置文件的位置")]),s._v("\n在/usr/local/hadoop/sqoop-1.99.7/conf/sqoop.properties文件中，修改如下变量的值为你hadoop配置文件目录\n"),t("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79ly1fz7nsbgvepj31kg02qdgo.jpg",alt:"img"}})])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("org.apache.sqoop.submission.engine.mapreduce.configuration.directory=/usr/local/hadoop/hadoop-2.7.4/etc/hadoop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"初始化sqoop仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化sqoop仓库"}},[s._v("#")]),s._v(" 初始化sqoop仓库")]),s._v(" "),t("p",[s._v("因为sqoop2中存储着元数据信息，所以首次安装时需要初始化仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sqoop2-tool upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("初始化完成后，可以做一次验证")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqoop2-tool verify\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当出现Verification was successful.字样时，表示初始化成功。")]),s._v(" "),t("h2",{attrs:{id:"启动sqoop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动sqoop"}},[s._v("#")]),s._v(" 启动sqoop")]),s._v(" "),t("p",[s._v("执行sqoop2-server start启动sqoop，同理。执行sqoop2-server stop会停止sqoop")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqoop2-server start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行完以上命令后，启动信息如下。  "),t("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79ly1fz7ns8vtruj31j809cdjp.jpg",alt:"img"}}),s._v("\n然后执行jps命令查看启动了哪些进程，可以看到sqoop server只启动了SqoopJettyServer进程。\n"),t("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79ly1fz7ns5oq3aj30dw056mxp.jpg",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"启动sqoop客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动sqoop客户端"}},[s._v("#")]),s._v(" 启动sqoop客户端")]),s._v(" "),t("p",[s._v("由于我现在是伪分布式，所以sqoop server和sqoop client都在一台机器上，直接执行sqoop2-shell命令即可启动sqoop客户端\n"),t("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79ly1fz7nsad4xsj30vg07iabu.jpg",alt:"img"}}),s._v("\n可以查看sqoop2的版本，执行show version --all命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqoop:000> show version --all\nclient version:\n  Sqoop 1.99.7 source revision 435d5e61b922a32d7bce567fe5fb1a9c0d9b1bbb\n  Compiled by abefine on Tue Jul 19 16:08:27 PDT 2016\n0    [main] WARN  org.apache.hadoop.util.NativeCodeLoader  - Unable to load native-hadoop library for your platform... using builtin-java classes where applicable\nserver version:\n  Sqoop 1.99.7 source revision 435d5e61b922a32d7bce567fe5fb1a9c0d9b1bbb\n  Compiled by abefine on Tue Jul 19 16:08:27 PDT 2016\nAPI versions:\n  [v1]\nsqoop:000>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);