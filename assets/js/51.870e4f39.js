(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{420:function(s,a,t){"use strict";t.r(a);var n=t(19),_=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("做数据的同学经常会遇到"),t("code",[s._v("导数")]),s._v("需求，各种临时导数.")]),s._v(" "),t("p",[s._v("本文主要也是本人工作中遇到的各种各样的导数需求导致的一些思考，也算是零零散散的解决方案吧。")]),s._v(" "),t("p",[s._v("本文也是从What、Why、How三个方面来总结。欢迎留言交流....😄")]),s._v(" "),t("h2",{attrs:{id:"what-什么是导数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-什么是导数"}},[s._v("#")]),s._v(" What：什么是导数？")]),s._v(" "),t("p",[s._v("首先需要确定的是"),t("code",[s._v("导数")]),s._v("是什么意思?")]),s._v(" "),t("p",[t("code",[s._v("导数")]),s._v("是数据仓库工程师、ETL工程师、数据工程师等日常工作中比较频繁的一部分。")]),s._v(" "),t("p",[s._v("简单的说")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("导数：就是根据数据需求方提出的需求，去数据仓库中提取数据（export），然后把结果提供给需求方")])]),s._v(" "),t("p",[s._v("但是:")]),s._v(" "),t("ol",[t("li",[s._v("导数是一件很烦的事")]),s._v(" "),t("li",[s._v("比较复杂的导数需求相当于做一张报表")]),s._v(" "),t("li",[s._v("一些数据提供给业务方后，对他们真的有价值吗？")])]),s._v(" "),t("h2",{attrs:{id:"why-为什么会有这么多导数需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-为什么会有这么多导数需求"}},[s._v("#")]),s._v(" Why：为什么会有这么多导数需求？")]),s._v(" "),t("p",[s._v("首先思考为什么会有这么多导数需求，他们业务方怎么就知道要数据呢？")]),s._v(" "),t("p",[s._v("这个我们要站在业务方的角度考虑问题，他们为什么问我们要数据?")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("我们现有的系统（报表系统）不足以支撑他们的业务需求")])]),s._v(" "),t("li",[t("p",[s._v("可能有相应的报表可以满足该导数需求，但是不同的业务部门不同权限，不知道这张报表")])]),s._v(" "),t("li",[t("p",[s._v("业务方的问题：业务方需求判断不成熟，有一些价值不大的数据没必要一股脑问开发人员要数据")])])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("毕竟，我们是做"),t("strong",[s._v("数据仓库")]),s._v('的!!    不仅仅是你们口中"你们就是个写SQL导数的..."!!')])]),s._v(" "),t("h2",{attrs:{id:"how-如何减少"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-如何减少"}},[s._v("#")]),s._v(" How：如何减少？")]),s._v(" "),t("p",[s._v("既然导数需求较多，那就在数据需求方和导数工作之间加一层过滤。。。")]),s._v(" "),t("p",[s._v("下图是一个导数流程图，主要是在需求方 和 开发人员中间加了一层过滤（数据产品经理、邮件申请等）\n"),t("center",[t("img",{attrs:{src:"/img/DatawareHouse/export_data.jpg"}}),s._v(" "),t("br"),s._v(" "),t("div",{staticClass:"imgtext"},[s._v("导数流程")]),s._v(" "),t("br")])],1),s._v(" "),t("h3",{attrs:{id:"_1-制定提数邮件模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-制定提数邮件模板"}},[s._v("#")]),s._v(" 1. 制定提数邮件模板")]),s._v(" "),t("p",[s._v("首先需要拟定一份邮件模板，所有的导数需求都需要通过邮件的形式来提出申请，并且相应的得到审批后，开发人员才可进行导数。")]),s._v(" "),t("p",[s._v("直接当面找数据开发人员导数的均不回复，增加导数需求的难度。")]),s._v(" "),t("p",[t("strong",[s._v("模板参考")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("数据需求规范：\n1、邮件标题：\n\t数据需求_部门_需求名称_YYYYmmdd\n\t例如：数据需求_分析部_2018年到店次数共大于5次客户数据_20181218\n2、邮件抄送：\n\t收件人必须是data_support@qq.com , 并必须抄送a@qq.com，不可直接发给data_support组的某一位同事\n2、需求背景：\n\t说明本次导数原因，涉及敏感信息(客户个人信息等)的需要走相应的流程审批方可向data_support@qq.com申请导数\n\t提数据需求之前，请先查看应用系统是否有相应的报表可满足数据需求，如果实在无法满足再提数据需求，以免不必要的导数工作。\n3、导数条件：\n\t机构：说明数据限定的机构id\n\t时间：说明数据的有效时间YYYYmmdd\n\t其他过滤条件：例如：不包含散客的所有消费过的客户数据\n4、指标口径：\n\t如果某些指标计算判断逻辑较复杂，请务必提供详细的计算口径。\n\t例如：到店次数大于5次  (只要到店一次就算做到店，还是到店消费且每次消费金额>0算做一次)\n5、数据期望提供时间：YYYYmmdd 之前提供\n\t（具体提供时间依据实际data_support组工作安排）\n6、数据表头：请按附件模板中格式提供详细表头字段\n\t如果某些指标判断条件较复杂，请提供详细的计算口径\n7、其他：\n\t不可直接找数据组同事要求导数据，所有数据需求均须走邮件流程。\n\t如果是提前已经当面找数据组同事沟通了数据是否可提供后，还需要按本邮件规范发送数据需求邮件审批通过后，数据组同事才会提供数据。\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[t("strong",[s._v("示例：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("邮件标题：数据需求_分析部_2018年到店次数共大于5次客户数据_20181218\n邮件正文：\nDear data_support:\n\t需求背景：为了**分析,需要统计2018年到店次数共大于5次客户数据，由于现应用系统没有该部分指标数据，需要数据组支持导出如下条件数据。\n\t导数条件：\n\t1、机构：xx品牌下所有机构\n\t2、时间：20180101至今\n\t指标口径：\n\t1、到店次数：每个客户到店消费且每次消费金额>0算做一次到店\n\t数据期望提供时间：20181223日之前\n\t数据表头：见附件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("导数邮件必须提供明确的表头（期望得到数据的样例）")])]),s._v(" "),t("h3",{attrs:{id:"_2-利用现有系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-利用现有系统"}},[s._v("#")]),s._v(" 2. 利用现有系统")]),s._v(" "),t("p",[s._v("利用现有的应用系统（报表系统、分析系统），数据组产品经理（如果没有产品经理，则负责人代替）需要判断该需求是否有类似的报表可满足该需求。")]),s._v(" "),t("ol",[t("li",[s._v("有报表且需求方有报表查看权限：直接回复让其查看报表")]),s._v(" "),t("li",[s._v("有报表但需求方没有报表查看权限：可内部沟通是否可开通报表权限")]),s._v(" "),t("li",[s._v("有报表但不方便给该需求方开通报表权限：数据组同学利用该报表数据导出反馈给需求方")])]),s._v(" "),t("h3",{attrs:{id:"_3-邮件审批机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-邮件审批机制"}},[s._v("#")]),s._v(" 3. 邮件审批机制")]),s._v(" "),t("p",[s._v("对于敏感数据的申请（客户信息）必须加大邮件审批机制（部门领导之类的），让"),t("code",[s._v("导数")]),s._v("工作不再随随便便，让大家各部门都重视起数据的价值。")]),s._v(" "),t("h3",{attrs:{id:"_4-自助取数系统-成本高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-自助取数系统-成本高"}},[s._v("#")]),s._v(" 4. 自助取数系统（成本高）")]),s._v(" "),t("p",[s._v("可根据团队力量，成本预算等开发一套自助分析系统，可让业务人员自助提取数据。")]),s._v(" "),t("p",[s._v("对外提供一些中间表接口，让分析人员、业务人员可根据中间表字段结构，自助的提取自己想要的数据。")]),s._v(" "),t("p",[s._v("不过，该方案成本较高可根据自身公司实际情况来做。")]),s._v(" "),t("p",[t("strong",[s._v("如果要开发一套自助分析系统，需要考虑的东西还是很多的：")])]),s._v(" "),t("ol",[t("li",[s._v("数据的开放程度")]),s._v(" "),t("li",[s._v("数据的权限")]),s._v(" "),t("li",[s._v("该系统的价值？")])]),s._v(" "),t("p",[s._v("可参考如下链接：")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://lxw1234.com/archives/2017/08/877.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("谈谈”取数”的那些事儿"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://lxw1234.com/archives/2016/12/819.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("【邀请体验】数阅–数据管理、OLAP分析与可视化平台"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"_5-分享的理念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-分享的理念"}},[s._v("#")]),s._v(" 5. 分享的理念")]),s._v(" "),t("p",[s._v("分享的理念，就是让数据组的同学一起把自己导过数的脚本共享起来。以后有类似需求的时候可直接查看参考以前导过数的脚本，达到代码复用的效果。")]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("├── 导数记录\n│   ├── "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("\n│   │   ├── 20181010_张三_3月消费客户数汇总\n│   │   │   ├── 20181010_张三_3月消费客户数汇总.sql\n│   │   │   ├── result.xlsx\n│   │   ├── 20181010_李四_4月消费客户频次分析\n│   ├── "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("\n│   │   ├── 20181010_王五_分析部2018年新客数量\n│   │   ├── 20181010_王五_分析部2018年新客数量\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("RouterLink",{attrs:{to:"/DatawareHouse/3.DataWarehouse-Specification.html#分享的理念"}},[s._v("分享的理念")])],1)])}),[],!1,null,null,null);a.default=_.exports}}]);