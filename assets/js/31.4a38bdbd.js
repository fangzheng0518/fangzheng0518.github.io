(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{402:function(t,_,e){"use strict";e.r(_);var i=e(19),v=Object(i.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("参考链接")]),t._v(" "),e("ol",[e("li",[t._v("官网"),e("a",{attrs:{href:"http://kylin.apache.org/cn/docs/howto/howto_optimize_build.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("优化Cube构建"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://lxw1234.com/archives/2017/04/849.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("lxw的大数据田地-Cube的高级设置"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("Kylin将Cube构建任务分解为几个依次执行的步骤，这些步骤包括Hive操作、MapReduce操作和其他类型的操作。如果你有很多Cube构建任务需要每天运行，那么你肯定想要减少其中消耗的时间。")]),t._v(" "),e("p",[t._v("下文按照Cube构建步骤顺序提供了一些优化经验。")]),t._v(" "),e("h2",{attrs:{id:"model的优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model的优化"}},[t._v("#")]),t._v(" Model的优化")]),t._v(" "),e("h3",{attrs:{id:"_1-创建hive中间表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建hive中间表"}},[t._v("#")]),t._v(" 1. 创建Hive中间表")]),t._v(" "),e("p",[t._v("Kylin的Model是依据Hive的维度和指标表来生成的，而Kylin只支持星型模型，如果把Hive的维度和指标表处理成一张大宽表，这样Kylin在读取该表的时候不用扫描其他事实或者维度表不需要的字段，并且使用了中间表后，可以配置不同的Model来自于同一张中间表。")]),t._v(" "),e("p",[t._v("这一步将数据从源Hive表提取出来(和所有join的表一起)并插入到一个中间表中。如果Cube是分区的，Kylin会加上一个时间条件以确保只有在时间范围内的数据才会被提取。")]),t._v(" "),e("p",[t._v("如果cube的分区列与Hive表的分区列相同，那么根据它过滤数据能让Hive聪明地跳过不匹配的分区。因此强烈建议用Hive的分区列（如果它是日期列）作为cube的分区列。这对于那些数据量很大的表来说几乎是必须的，否则Hive不得不每次在这步扫描全部文件，消耗非常长的时间。")]),t._v(" "),e("h2",{attrs:{id:"cube的设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cube的设计"}},[t._v("#")]),t._v(" Cube的设计")]),t._v(" "),e("p",[t._v("正常情况下，Kylin在构建cube的时候，会根据新建cube的时候设置的维度和事实列，将维度和事实列全部组合起来就达成预计算的效果，这样不管用什么维度(筛选字段)查询都已经提前计算好了，直接从Hbase中返回即可。也就是所谓的空间换时间。")]),t._v(" "),e("p",[t._v("但是，随着维度数目的增加，Cuboid 的数量会爆炸式地增长。为了缓解 Cube 的构建压力，Apache Kylin 引入了一系列的高级设置，帮助用户筛选出真正需要的 Cuboid。这些高级设置包括")]),t._v(" "),e("ol",[e("li",[t._v("聚合组（Aggregation Group）")]),t._v(" "),e("li",[t._v("联合维度（Joint Dimension）")]),t._v(" "),e("li",[t._v("层级维度（Hierachy Dimension）")]),t._v(" "),e("li",[t._v("必要维度（Mandatory Dimension）")])]),t._v(" "),e("p",[t._v("以下是在新建Cube的时候，各种类型维度的位置\n"),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"/img/BigData/Kylin/006tNc79ly1g23iecoa8rj31an0u0jwz.jpg"}}),t._v(" "),e("p",[t._v("（维度设置图例）")])])],1),t._v(" "),e("h3",{attrs:{id:"_1-层级维度-hierarchy-dimension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-层级维度-hierarchy-dimension"}},[t._v("#")]),t._v(" 1. 层级维度（Hierarchy Dimension）")]),t._v(" "),e("p",[t._v("理论上，对于N维，你最终会得到2 ^ N维组合。但是对于某些维度组，不需要创建这么多组合。例如，如果您有三个维度："),e("strong",[t._v("国家，省，市")]),t._v("（"),e("span",{staticStyle:{color:"red"}},[t._v('在层级结构中，"最大"级的维度应该首先出现，这里是国家')]),t._v("）。在深入分析时，您只需要以下三种组合组合：")]),t._v(" "),e("ol",[e("li",[t._v("国家")]),t._v(" "),e("li",[t._v("国家，省")]),t._v(" "),e("li",[t._v("国家，省，市")])]),t._v(" "),e("p",[t._v("在这种情况下，组合计数从2 ^ 3 = 8减少到3，这是一个很好的优化。\n同理，如果你有日期层次结构的维度：YEAR，QUATER，MONTH，DATE也可以如此设计。")]),t._v(" "),e("h4",{attrs:{id:"层级维度应用实例-参考至lwx的大数据田地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层级维度应用实例-参考至lwx的大数据田地"}},[t._v("#")]),t._v(" 层级维度应用实例(参考至lwx的大数据田地)")]),t._v(" "),e("p",[t._v("假设一个交易数据的 Cube，它具有很多普通的维度，像是交易的城市 city，交易的省 province，交易的国家 country， 和支付类型 pay_type等。分析师可以通过按照交易城市、交易省份、交易国家和支付类型来聚合，获取不同层级的地理位置消费者的支付偏好。在上述的实例中，建议在已有的聚合组中建立一组层级维度（国家country／省province／城市city），包含的维度和组合方式如图9：")]),t._v(" "),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"http://img.lxw1234.com/20170424-5.jpg"}}),t._v(" "),e("p",[t._v("（图9）")])]),t._v("\n聚合组：[country, province, city，pay_type]\n"),e("p",[t._v("层级维度： [country, province, city]")]),t._v(" "),e("p",[e("strong",[t._v("Case 1")]),t._v(" "),e("strong",[t._v("当分析师想从城市维度获取消费偏好时：")])]),t._v(" "),e("p",[e("em",[t._v("SELECT city, pay_type, count(*) FROM table GROUP BY city, pay_type")]),t._v(" 则它将从 Cuboid [country, province, city, pay_type] 中获取数据。")]),t._v(" "),e("p",[e("strong",[t._v("Case 2")]),t._v(" "),e("strong",[t._v("当分析师想从省级维度获取消费偏好时：")])]),t._v(" "),e("p",[e("em",[t._v("SELECT province, pay_type, count(*) FROM table GROUP BY province, pay_type")]),t._v(" 则它将从Cuboid [country, province, pay_type] 中获取数据。")]),t._v(" "),e("p",[e("strong",[t._v("Case 3")]),t._v(" "),e("strong",[t._v("当分析师想从国家维度获取消费偏好时")]),t._v("：")]),t._v(" "),e("p",[e("em",[t._v("SELECT country, pay_type, count(*) FROM table GROUP BY country, pay_type")]),t._v(" 则它将从Cuboid [country, pay_type] 中获取数据。")]),t._v(" "),e("p",[e("strong",[t._v("Case 4")]),t._v(" "),e("strong",[t._v("如果分析师想获取不同粒度地理维度的聚合结果时：")])]),t._v(" "),e("p",[t._v("无一例外都可以由图 3 中的 cuboid 提供数据 。")]),t._v(" "),e("p",[t._v("例如，"),e("em",[t._v("SELECT country, city, count(*) FROM table GROUP BY country, city")]),t._v(" 则它将从 Cuboid [country, province, city] 中获取数据。")]),t._v(" "),e("h3",{attrs:{id:"_2-必要维度-mandatory-dimension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-必要维度-mandatory-dimension"}},[t._v("#")]),t._v(" 2. 必要维度（Mandatory Dimension）")]),t._v(" "),e("p",[t._v("必要维度很好理解，就是所有的查询中都包括这个维度。")]),t._v(" "),e("p",[t._v("例如：")]),t._v(" "),e("ol",[e("li",[t._v("所有的查询都带了日期dt字段，dt是必要维度")]),t._v(" "),e("li",[t._v("所有的查询都带了机构orgid字段，那orgid就是必要维度")])]),t._v(" "),e("p",[t._v("例如下面图10的Cube，共有A,B,C,D四个维度，如果A是必要维度，则不包括A的那些维度都不会组合起来，也就不会构建。\n"),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"http://img.lxw1234.com/20170424-6.jpg"}}),t._v(" "),e("p",[t._v("（图10）")])]),t._v("\n这样的话维度数目就从原来的2 ^ 4 = 16 个减少至9个(图中没有红X的9个)")],1),t._v(" "),e("h3",{attrs:{id:"_3-联合维度-joint-dimension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-联合维度-joint-dimension"}},[t._v("#")]),t._v(" 3. 联合维度（Joint Dimension）")]),t._v(" "),e("p",[t._v("用户有时并不关心维度之间各种细节的组合方式，例如用户的查询语句中仅仅会出现 group by A, B, C，而不会出现 group by A, B 或者 group by C 等等这些细化的维度组合。这一类问题就是联合维度所解决的问题。例如将维度 A、B 和 C 定义为联合维度，Apache Kylin 就仅仅会构建 Cuboid ABC，而 Cuboid AB、BC、A 等等Cuboid 都不会被生成。最终的 Cube 结果如图5所示，Cuboid 数目从 16 减少到 4。")]),t._v(" "),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"http://img.lxw1234.com/20170424-1.jpg"}}),t._v(" "),e("p",[t._v("（图5）")])]),t._v(" "),e("h4",{attrs:{id:"联合维度应用实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联合维度应用实例"}},[t._v("#")]),t._v(" 联合维度应用实例")]),t._v(" "),e("p",[t._v("假设创建一个交易数据的Cube，它具有很多普通的维度，像是交易日期 cal_dt，交易的城市 city，顾客性别 sex_id 和支付类型 pay_type 等。分析师常用的分析方法为通过按照交易时间、交易地点和顾客性别来聚合，获取不同城市男女顾客间不同的消费偏好，例如同时聚合交易日期 cal_dt、交易的城市 city 和顾客性别 sex_id来分组。在上述的实例中，推荐在已有的聚合组中建立一组联合维度，包含的维度和组合方式如图6：")]),t._v(" "),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"http://img.lxw1234.com/20170424-2.jpg"}}),t._v(" "),e("p",[t._v("（图6）")])]),t._v(" "),e("p",[t._v("聚合组：[cal_dt, city, sex_id，pay_type]")]),t._v(" "),e("p",[t._v("联合维度： [cal_dt, city, sex_id]")]),t._v(" "),e("p",[e("strong",[t._v("Case 1")]),t._v("**：**")]),t._v(" "),e("p",[e("em",[t._v("SELECT cal_dt, city, sex_id, count(*) FROM table GROUP BY cal_dt, city, sex_id")]),t._v(" 则它将从Cuboid [cal_dt, city, sex_id]中获取数据")]),t._v(" "),e("p",[e("strong",[t._v("Case2****如果有一条不常用的查询：")])]),t._v(" "),e("p",[e("em",[t._v("SELECT cal_dt, city, count(*) FROM table GROUP BY cal_dt, city")]),t._v(" 则没有现成的完全匹配的 Cuboid，Apache Kylin 会通过在线计算的方式，从现有的 Cuboid 中计算出最终结果。")]),t._v(" "),e("h3",{attrs:{id:"_4-聚合组-aggregation-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-聚合组-aggregation-group"}},[t._v("#")]),t._v(" 4. 聚合组（Aggregation Group）")]),t._v(" "),e("p",[t._v("**用户根据自己关注的维度组合，可以划分出自己关注的组合大类，这些大类在Apache Kylin里面被称为聚合组。**例如图 1 中展示的 Cube，如果用户仅仅关注维度 AB 组合和维度 CD 组合，那么该 Cube 则可以被分化成两个聚合组，分别是聚合组 AB 和聚合组 CD。")]),t._v(" "),e("p",[t._v("如图 2 所示，生成的 Cuboid 数目从 16 个缩减成了 8 个。")]),t._v(" "),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"http://img.lxw1234.com/20170401-2.jpg"}}),t._v(" "),e("p",[t._v("（图2）")])]),t._v(" "),e("p",[t._v("用户关心的聚合组之间可能包含相同的维度，例如聚合组 ABC 和聚合组 BCD 都包含维度 B 和维度 C。这些聚合组之间会衍生出相同的 Cuboid，例如聚合组 ABC 会产生 Cuboid BC，聚合组 BCD 也会产生 Cuboid BC。这些 Cuboid不会被重复生成，一份 Cuboid 为这些聚合组所共有，如图 3 所示。")]),t._v(" "),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"http://img.lxw1234.com/20170401-3.jpg"}}),t._v(" "),e("p",[t._v("（图3）")])]),t._v(" "),e("p",[t._v("有了聚合组用户就可以"),e("strong",[t._v("粗粒度")]),t._v("地对 Cuboid 进行筛选，获取自己想要的维度组合。")]),t._v(" "),e("h4",{attrs:{id:"聚合组应用实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合组应用实例"}},[t._v("#")]),t._v(" 聚合组应用实例")]),t._v(" "),e("p",[t._v("假设创建一个交易数据的 Cube，它包含了以下一些维度：顾客 ID buyer_id 交易日期 cal_dt、付款的方式 pay_type 和买家所在的城市 city。有时候，分析师需要通过分组聚合 city、cal_dt 和 pay_type 来获知不同消费方式在不同城市的应用情况；有时候，分析师需要通过聚合 city 、cal_dt 和 buyer_id，来查看顾客在不同城市的消费行为。在上述的实例中，推荐建立两个聚合组，包含的维度和方式如图 4 ：")]),t._v(" "),e("center",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"http://img.lxw1234.com/20170401-4.jpg"}}),t._v(" "),e("p",[t._v("（图4）")])]),t._v(" "),e("p",[t._v("聚合组 1： [cal_dt, city, pay_type]")]),t._v(" "),e("p",[t._v("聚合组 2： [cal_dt, city, buyer_id]")]),t._v(" "),e("p",[t._v("在不考虑其他干扰因素的情况下，这样的聚合组将节省不必要的 3 个 Cuboid: [pay_type, buyer_id]、[city, pay_type, buyer_id] 和 [cal_dt, pay_type, buyer_id] 等，节省了存储资源和构建的执行时间。")]),t._v(" "),e("p",[e("strong",[t._v("Case 1:")])]),t._v(" "),e("p",[e("em",[t._v("SELECT cal_dt, city, pay_type, count(*) FROM table GROUP BY cal_dt, city, pay_type")]),t._v(" 则将从 Cuboid [cal_dt, city, pay_type] 中获取数据。")]),t._v(" "),e("p",[e("strong",[t._v("Case2:")])]),t._v(" "),e("p",[e("em",[t._v("SELECT cal_dt, city, buy_id, count(*) FROM table GROUP BY cal_dt, city, buyer_id")]),t._v(" 则将从 Cuboid [cal_dt, city, pay_type] 中获取数据。")]),t._v(" "),e("p",[e("strong",[t._v("Case3")]),t._v(" "),e("strong",[t._v("如果有一条不常用的查询:")])]),t._v(" "),e("p",[e("em",[t._v("SELECT pay_type, buyer_id, count(*) FROM table GROUP BY pay_type, buyer_id")]),t._v(" 则没有现成的完全匹配的 Cuboid。")]),t._v(" "),e("p",[t._v("此时，Apache Kylin 会通过在线计算的方式，从现有的 Cuboid 中计算出最终结果。")])],1)}),[],!1,null,null,null);_.default=v.exports}}]);