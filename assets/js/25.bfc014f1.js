(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{394:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("参考"),a("a",{attrs:{href:"https://blog.csdn.net/hjw199089/article/details/79048411",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hive中desc和show create table中文注释乱码解决方案"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"_1-修改hive-site-xml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改hive-site-xml文件"}},[s._v("#")]),s._v(" 1. 修改hive-site.xml文件")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("javax.jdo.option.ConnectionURL"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jdbc:mysql://你的IP:3306/hive?createDatabaseIfNotExsit=true"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[s._v("&amp;")]),s._v("characterEncoding=UTF-8"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-修改hive元数据存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改hive元数据存储"}},[s._v("#")]),s._v(" 2. 修改hive元数据存储")]),s._v(" "),a("h3",{attrs:{id:"_2-1-修改字段注释字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-修改字段注释字符集"}},[s._v("#")]),s._v(" 2.1 修改字段注释字符集")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" COLUMNS_V2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-2-修改表注释字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改表注释字符集"}},[s._v("#")]),s._v(" 2.2 修改表注释字符集")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" TABLE_PARAMS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" PARAM_VALUE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-3-修改分区表参数支持中文表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-修改分区表参数支持中文表示"}},[s._v("#")]),s._v(" 2.3 修改分区表参数支持中文表示")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" PARTITION_PARAMS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" PARAM_VALUE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" PARTITION_KEYS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" PKEY_COMMENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-4-修改索引注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-修改索引注解"}},[s._v("#")]),s._v(" 2.4 修改索引注解")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" INDEX_PARAMS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" PARAM_VALUE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("最后新建一张表，注释为中文。测试一下desc是否乱码")])])}),[],!1,null,null,null);t.default=r.exports}}]);