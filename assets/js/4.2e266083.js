(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,e,a){},245:function(t,e,a){"use strict";var n=a(197);a.n(n).a},310:function(t,e,a){"use strict";a.r(e);a(95),a(24),a(73);String.prototype.formatTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{0}年{1}月{2}日 {3}时{4}分{5}秒",e=this.match(/\d+/g);return t.replace(/{(\d+)\}/g,(function(t,a){var n=e[a]||"0";return n.length<2&&(n="0"+n),n}))};var n={data:function(){return{dateStr:(new Date).toLocaleString().formatTime("{1}-{2} {3}:{4}"),i:null,dateArr:[]}},mounted:function(){this.i=setInterval(this.getNewDate,1e3),this.dateArr=this.dateStr.split(" ")},methods:{getNewDate:function(){this.dateStr=(new Date).toLocaleString().formatTime("{1}-{2} {3}:{4}")}}},r=(a(245),a(1)),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dateContent"},[a("h1",[t._v("鸿图之志，蝼蚁之行")]),t._v(" "),a("div",{attrs:{id:"app"}},[a("div",{staticClass:"time"},[a("p",[t._v(t._s(t.dateArr[1]?t.dateArr[1]:"时间"))])]),t._v(" "),a("div",{staticClass:"date"},[a("p",[t._v(t._s(t.dateArr[0]?t.dateArr[0]:"日期"))])])])])}),[],!1,null,null,null);e.default=i.exports}}]);