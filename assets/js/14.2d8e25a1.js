(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{383:function(a,t,e){"use strict";e.r(t);var s=e(19),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-hdfs中的一些概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-hdfs中的一些概念"}},[a._v("#")]),a._v(" 1. HDFS中的一些概念")]),a._v(" "),e("p",[a._v("HDFS（Hadoop Distributed File System）：分布式文件系统，将一个文件分成多个块，分别存储(拷贝)到不同的节点上，它是Hadoop体系中数据存储管理的基础。它是一个高度容错的系统，能检测和应对硬件故障，用于在低成本的通用硬件上运行。HDFS简化了文件的一致性模型，通过流式数据访问，提供高吞吐量应用程序数据访问功能，适合带有大型数据集的应用程序。")]),a._v(" "),e("h3",{attrs:{id:"_1-1-数据块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据块"}},[a._v("#")]),a._v(" 1.1 数据块")]),a._v(" "),e("p",[a._v("每个磁盘都有"),e("strong",[a._v("数据块")]),a._v("的概念，在HDFS中也有数据块的概念，HDFS中的所有文件都是分割成块存储在Datanode上的，每个块默认64M。。每个块都有多个副本存储在不同的机器上：默认有3个副本，3个副本不可能存放在同一个机器上。")]),a._v(" "),e("p",[e("strong",[a._v("HDFS副本存放策略")]),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7oufy230j30go0bdq4d.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("HDFS副本存放策略")]),a._v(" "),e("br")])],1),a._v(" "),e("p",[e("strong",[a._v("以下是HDFS文件存储架构图")])]),a._v(" "),e("ul",[e("li",[a._v("黄色：表示每台机器")]),a._v(" "),e("li",[a._v("绿色：文件被分割出的块\n"),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7ot1voh7j30go0a3dgq.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("HDFS文件存储架构图")]),a._v(" "),e("br")])],1)]),a._v(" "),e("p",[a._v("例如：\n上图中part-0文件，有2个块。块1和块3只在2个机器上分别出现过2次。\n上图中part-1文件，有3个块。块2,4,5分别在不同的机器上各出现3次")]),a._v(" "),e("p",[a._v("HDFS中也可以显示块信息，使用fsck命令\n例如：下面的命令将列出文件系统中各个文件由哪些块构成")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v(" $ hadoop "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("fsck")]),a._v(" / -files -blocks\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-2-namenode和datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-namenode和datanode"}},[a._v("#")]),a._v(" 1.2 NameNode和DataNode")]),a._v(" "),e("p",[a._v("HDFS的设计是主（Master）从（Slave）结构的。也就是，一个管理者（NameNode）和多个工作者（DataNode）组成。")]),a._v(" "),e("h4",{attrs:{id:"_1-2-1-管理者-namenode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-管理者-namenode"}},[a._v("#")]),a._v(" 1.2.1 管理者：Namenode")]),a._v(" "),e("p",[a._v("NameNode是主节点，它是一个中心服务器，负责管理整个文件系统的命名空间和控制着客户端对文件的访问。它不保存文件的内容，而是保存着文件的元数据（文件名称，所在目录，文件权限，文件拥有者，文件有多少块，每个块有多少副本，块都存在哪些节点上）。\nNamenode负责文件的元数据操作，Datanode处理文件内容的读写请求。\n跟文件相关的流不经过Namenode，只会询问该文件跟哪个Datanode有关系。\n副本存放在哪些Datanode上是由Namenode来控制。读取文件时，Namenode尽量让用户先读取最近的副本。\nNamenode全权管理数据块的复制，周期性的从集群中的每个Datanode接收心跳信号和块状态报告。\nNamenode和Datanode就是通过这两种方式来进行通信：\n心跳信号：意味着该Datanode节点工作正常\n块状态报告：包含了一个该Datanode上所有数据块的列表")]),a._v(" "),e("p",[e("strong",[a._v("元数据保存在内存中")]),a._v("\nNamenode维护着整个文件系统树以及树内的所有文件。这些信息以两个文件的形式永久保存在磁盘上。命名空间镜像文件（fsimage）和操作日志（fsedits）文件\n​     "),e("strong",[a._v("1. fsimage是什么？")]),a._v("\n​        fsimage是元数据镜像文件：Namenode启动后，文件的元数据被加载到内存中，加载到内存后也会把这些元数据写入到本地的磁盘中，这个文件就是fsimage文件。\n​        元数据镜像在内存中保存一份最新的，内存中的镜像=fsimage+fsedit\n​     "),e("strong",[a._v("2. fsedits是什么？")]),a._v("\n​        fsedits是元数据操作日志文件：客户端要对文件进行读写操作，在这些操作产生的日志就存在了fsedit文件中。")]),a._v(" "),e("h4",{attrs:{id:"_1-2-1-工作者-datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-工作者-datanode"}},[a._v("#")]),a._v(" 1.2.1 工作者：Datanode")]),a._v(" "),e("p",[a._v("DataNode是从节点，它的作用很简单，就是存储文件的块数据。以及块数据的校验和。\n一个数据块在Ddtanode以文件存储在磁盘上，包括两个文件：数据本身和元数据（数据块的长度，块数据的校验和，时间戳）\nDatanode启动后向Namenode注册，通过后，周期性（1小时）的向Namenode上报所有块信息。\n心跳是3秒一次，如果超过10分钟没有收到某个Datanode的心跳。则认为该节点不可用。")]),a._v(" "),e("h3",{attrs:{id:"_1-3-secondary-namenode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-secondary-namenode"}},[a._v("#")]),a._v(" 1.3 Secondary Namenode")]),a._v(" "),e("p",[a._v("Secondary Namenode：Secondary表示助手的意思，也就是说Secondary Namenode表示NameNode的助手，辅助NameNode工作的一个节点。要了解Secondary Namenode节点都辅助NameNode做了哪些工作，我们需要先回顾下NameNode是做什么的？\nNameNode是HDFS中的一个主节点，主要是来管理其他DataNode从节点。它存储了HDFS系统的namespace和控制着客户端对HDFS文件系统的访问。NameNode在维护整个文件系统树的时候是以两个文件的形式永久保存在磁盘上。镜像文件(fsimage)和操作日志文件（fsedits）。考虑以下，这两个文件一直这样运行存在着有什么问题？")]),a._v(" "),e("ol",[e("li",[a._v("fsedits操作日志文件会越来越大，因为它保存着客户端对HDFS文件系统的访问日志。")]),a._v(" "),e("li",[a._v("只有在NameNode重启后，edits logs才会合并到fsimage中，产生一个新的文件系统快照。但是NameNode是很少重启的。\n为了保证edit logs文件不会太大和fsimage是一个最新的文件，此时需要一个节点来备份这些文件。定期的合并这两个文件然后再推送给NameNode，这样就减轻NameNode工作的压力，同时也保证了假如Namenode节点宕机后数据无法恢复问题。虽然可能不会把所有的数据全部恢复出来，但是至少丢失的很少。")])]),a._v(" "),e("p",[a._v("所以，Secondary Namenode做的就是这些辅助工作")]),a._v(" "),e("ol",[e("li",[a._v("Secondary NameNode所做的不过是在文件系统中设置一个检查点来帮助NameNode更好的工作。它不是要取代掉NameNode也不是NameNode的备份。")]),a._v(" "),e("li",[a._v("SecondaryNameNode有两个作用，一是镜像备份，二是日志与镜像的定期合并。两个过程同时进行，称为checkpoint")])]),a._v(" "),e("p",[a._v("在core-site.xml配置文件中有2个参数可配置，但一般来说我们不做修改。fs.checkpoint.period表示多长时间记录一次hdfs的镜像。默认是1小时。fs.checkpoint.size表示一次记录多大的size，默认64M。")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("fs.checkpoint.period"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("3600"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("The number of seconds between two periodic checkpoints.\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("fs.checkpoint.size"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("67108864"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("The size of the current edit log (in bytes) that triggers a periodic checkpoint even if the fs.checkpoint.period hasn’t expired.\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("p",[a._v("可以参考这篇博客，写的还是很详细的"),e("a",{attrs:{href:"http://blog.csdn.net/xh16319/article/details/31375197",target:"_blank",rel:"noopener noreferrer"}},[a._v("Secondary NameNode:它究竟有什么作用？"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"_1-4-hdfs的优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-hdfs的优缺点"}},[a._v("#")]),a._v(" 1.4 HDFS的优缺点")]),a._v(" "),e("p",[e("strong",[a._v("优点：")])]),a._v(" "),e("ol",[e("li",[a._v("高容错性\n数据自动保存多个副本\n副本丢失后，自动恢复")]),a._v(" "),e("li",[a._v("适合批处理\n移动计算而非数据\n数据位置暴露给计算框架")]),a._v(" "),e("li",[a._v("适合大数据处理\nGB、TB、甚至PB级数据\n百万规模以上的文件数量\n10K+节点规模")]),a._v(" "),e("li",[a._v("流式文件访问\n一次性写入，多次读取\n保证数据一致性")]),a._v(" "),e("li",[a._v("可构建在廉价机器上\n通过多副本提高可靠性\n提供了容错和恢复机制")])]),a._v(" "),e("p",[e("strong",[a._v("缺点：")])]),a._v(" "),e("ol",[e("li",[a._v("低延迟与高吞吐率的数据访问 ，比如毫秒级")]),a._v(" "),e("li",[a._v("小文件存取\n占用NameNode大量内存\n寻道时间超过读取时间")]),a._v(" "),e("li",[a._v("并发写入、文件随机修改\n一个文件同一个时间只能有一个写者\n仅支持append")])]),a._v(" "),e("h2",{attrs:{id:"_2-hdfs的架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-hdfs的架构"}},[a._v("#")]),a._v(" 2. HDFS的架构")]),a._v(" "),e("p",[a._v("HDFS以流式数据访问（一次写入，多次读取）模式来存储超大文件，运行于商用硬件集群上。超大文件是指GB,TB,PB的文件。目前已经有存储到PB级别的Hadoop集群了。")]),a._v(" "),e("p",[e("strong",[a._v("计算机字节关系")])]),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7ot3brltj308t09faa4.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("计算机字节关系")]),a._v(" "),e("br")]),a._v(" "),e("p",[e("strong",[a._v("Hadoop1.x HDFS官方架构图")]),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7ot4oxmij30go0b7my2.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("Hadoop1.x HDFS官方架构图")]),a._v(" "),e("br")])],1),a._v(" "),e("h3",{attrs:{id:"_2-1-hdfs架构之namenode和datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-hdfs架构之namenode和datanode"}},[a._v("#")]),a._v(" 2.1 HDFS架构之NameNode和DataNode")]),a._v(" "),e("p",[e("strong",[a._v("HDFS架构图")])]),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7ow1viz4j30h60ajwfp.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("HDFS架构图")]),a._v(" "),e("br")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("客户端（HDFS Client）：如果想对文件进行读写的话，首先需要通过Namenode来获取一些信息。Namenode存储着命名空间（namespace）和元数据（metadata）")]),a._v(" "),e("p",[a._v("客户端有如下工作：")]),a._v(" "),e("ol",[e("li",[a._v("文件的切分")]),a._v(" "),e("li",[a._v("与Namenode交互，获取文件位置信息")]),a._v(" "),e("li",[a._v("与Datanode交互，读取或者写入数据")]),a._v(" "),e("li",[a._v("管理HDFS")]),a._v(" "),e("li",[a._v("访问HDFS（浏览器，Shell命令，JavaAPI）")])])]),a._v(" "),e("li",[e("p",[a._v("辅助节点（Secondary）：用于辅助Namenode工作，分担其工作量。主要工作是nameSpace的冷备份工作，并非热备份。定期将Namenode的镜像文件（fsimage）和操作日志（fsedit）进行合并，然后推送给Namenode\n"),e("strong",[a._v("1. fsimage是什么？")]),a._v("\n​    是元数据镜像文件：Namenode启动后，文件的元数据被加载到内存中，加载到内存后也会把这些元数据写入到本地的磁盘中，这个文件就是fsimage文件。\n​    元数据镜像在内存中保存一份最新的，内存中的镜像=fsimage+fsedit\n"),e("strong",[a._v("2. fsedits是什么？")]),a._v("\n​    是元数据操作日志文件：客户端要对文件进行读写操作，在这些操作产生的日志就存在了fsedit文件中。")])]),a._v(" "),e("li",[e("p",[a._v("数据节点（Datanode）：Namenode和Datanode通信是通过心跳和块报告。每个文件被分割成不同的块，存在不同的机器的本地磁盘上。")])])]),a._v(" "),e("h3",{attrs:{id:"_2-2-namenode和secondary-namenode运行关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-namenode和secondary-namenode运行关系"}},[a._v("#")]),a._v(" 2.2 Namenode和Secondary Namenode运行关系")]),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7ownlnl2j30iu0b7ab3.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("Secondarynamenode工作原理图")]),a._v(" "),e("br")]),a._v(" "),e("p",[e("strong",[a._v("Secondarynamenode工作原理")]),a._v("\n日志与镜像的定期合并总共分以下五步：")]),a._v(" "),e("ol",[e("li",[a._v("Secondary Namenode通知Namenode切换editlog")]),a._v(" "),e("li",[a._v("Secondary Namenode通过Http方式从Namenode获取fsimage和editlog")]),a._v(" "),e("li",[a._v("Secondary Namenode将fsimage载入内存，然后开始合并editlog")]),a._v(" "),e("li",[a._v("Secondary Namenode将新的fsimage发回给Namenode")]),a._v(" "),e("li",[a._v("Namenode收到fsiamge后将新的fsimage替换旧的fsimage")])]),a._v(" "),e("h2",{attrs:{id:"_3-hdfs文件的读写流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-hdfs文件的读写流程"}},[a._v("#")]),a._v(" 3. HDFS文件的读写流程")]),a._v(" "),e("h3",{attrs:{id:"_3-1-hdfs文件的读取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-hdfs文件的读取"}},[a._v("#")]),a._v(" 3.1 HDFS文件的读取")]),a._v(" "),e("p",[e("strong",[a._v("HDFS文件读取：")]),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7ot5jcn3j30jm0bejsb.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("HDFS文件读取流程图")]),a._v(" "),e("br")])],1),a._v(" "),e("ol",[e("li",[a._v("首先调用FileSystem对象的open方法，其实是一个DistributedFileSystem的实例")]),a._v(" "),e("li",[a._v("DistributedFileSystem通过rpc获得文件的第一批个block的locations，同一block按照重复数会返回多个locations，这些locations按照hadoop拓扑结构排序，距离客户端近的排在前面.")]),a._v(" "),e("li",[a._v("前两步会返回一个FSDataInputStream对象，该对象会被封装成DFSInputStream对象，DFSInputStream可以方便的管理datanode和namenode数据流。客户端调用read方法，DFSInputStream最会找出离客户端最近的datanode并连接。")]),a._v(" "),e("li",[a._v("数据从datanode源源不断的流向客户端。")]),a._v(" "),e("li",[a._v("如果第一块的数据读完了，就会关闭指向第一块的datanode连接，接着读取下一块。这些操作对客户端来说是透明的，客户端的角度看来只是读一个持续不断的流。")]),a._v(" "),e("li",[a._v("如果第一批block都读完了，DFSInputStream就会去namenode拿下一批blocks的location，然后继续读，如果所有的块都读完，这时就会关闭掉所有的流。")])]),a._v(" "),e("h3",{attrs:{id:"_3-2-hdfs文件的写入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-hdfs文件的写入"}},[a._v("#")]),a._v(" 3.2 HDFS文件的写入")]),a._v(" "),e("p",[e("strong",[a._v("HDFS文件写入：")])]),a._v(" "),e("center",[e("img",{attrs:{src:"/img/BigData/Hadoop/006tNc79ly1fz7ot2u6xsj30ir0aw0tr.jpg"}}),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"imgtext"},[a._v("HDFS文件写入流程图")]),a._v(" "),e("br")]),a._v(" "),e("ol",[e("li",[a._v("客户端通过调用DistributedFileSystem的create方法创建新文件")]),a._v(" "),e("li",[a._v("DistributedFileSystem通过RPC调用namenode去创建一个没有blocks关联的新文件，创建前，namenode会做各种校验，比如文件是否存在，客户端有无权限去创建等。如果校验通过，namenode就会记录下新文件，否则就会抛出IO异常.")]),a._v(" "),e("li",[a._v("前两步结束后会返回FSDataOutputStream的对象，和读文件的时候相似，FSDataOutputStream被封装成DFSOutputStream，DFSOutputStream可以协调namenode和datanode。客户端开始写数据到DFSOutputStream,DFSOutputStream会把数据切成一个个小packet，然后排成队列data quene。")]),a._v(" "),e("li",[a._v("DataStreamer会去处理接受data quene，他先问询namenode这个新的block最适合存储的在哪几个datanode里，比如重复数是3，那么就找到3个最适合的datanode，把他们排成一个pipeline.DataStreamer把packet按队列输出到管道的第一个datanode中，第一个datanode又把packet输出到第二个datanode中，以此类推。")]),a._v(" "),e("li",[a._v("DFSOutputStream还有一个对列叫ack quene，也是有packet组成，等待datanode的收到响应，当pipeline中的所有datanode都表示已经收到的时候，这时akc quene才会把对应的packet包移除掉。")]),a._v(" "),e("li",[a._v("客户端完成写数据后调用close方法关闭写入流")]),a._v(" "),e("li",[a._v("DataStreamer把剩余得包都刷到pipeline里然后等待ack信息，收到最后一个ack后，通知datanode把文件标示为已完成。")])]),a._v(" "),e("p",[a._v("读写流程参考自："),e("a",{attrs:{href:"http://blog.csdn.net/woshiwanxin102213/article/details/19990487",target:"_blank",rel:"noopener noreferrer"}},[a._v("HDFS笔记（特点、原理与基本架构）"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"_4-hdfs常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-hdfs常用命令"}},[a._v("#")]),a._v(" 4. HDFS常用命令")]),a._v(" "),e("h3",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),e("p",[a._v("官方文档：\n"),e("a",{attrs:{href:"http://hadoop.apache.org/docs/r1.0.4/cn/hdfs_shell.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://hadoop.apache.org/docs/r1.0.4/cn/hdfs_shell.html"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("mkdir 创建目录（不支持级联创建目录）")])]),a._v(" "),e("li",[e("p",[a._v("rm 删除非空目录和文件")])]),a._v(" "),e("li",[e("p",[a._v("rmr 递归删除，可以删除非空目录")]),a._v(" "),e("p",[a._v("例：删除test目录中的hadoop-2.7.4.tar.gz文件\n"),e("code",[a._v("hadoop fs -rmr /test/hadoop-2.7.4.tar.gz")])]),a._v(" "),e("p",[a._v("例：删除test目录及目录中的所有文件\n"),e("code",[a._v("hadoop fs -rmr /test")])])]),a._v(" "),e("li",[e("p",[a._v("put 上传文件到HDFS")]),a._v(" "),e("p",[a._v("例：上传jdk-8u131-linux-i586.rpm文件到HDFS的/test目录中\n"),e("code",[a._v("hadoop fs -put jdk-8u131-linux-i586.rpm /test")])])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);