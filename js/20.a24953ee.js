(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{a260:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("base-content",[o("h5",[t._v(t._s(t.msg))])])},n=[],i=o("b0dd"),r={name:"tableDetail",components:{BaseContent:i["a"]},data:function(){return{msg:""}},created:function(){this.msg=this.$route.query}},a=r,l=o("2877"),c=Object(l["a"])(a,s,n,!1,null,null,null);e["default"]=c.exports},b0dd:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"100%"},attrs:{"thumb-style":t.thumbStyle,visible:!1}},[t._t("default")],2)],1)},n=[],i=(o("dca8"),o("ffbe")),r={name:"BaseContent",data:function(){return{thumbStyle:i["a"],BasePath:""}},props:["position"],methods:{ScrollToPosition:function(t){this.$refs.scrollArea.setScrollPosition(t,300)},getPosition:function(){return this.$refs.scrollArea.getScrollPosition()}},mounted:function(){this.BasePath=this.$route.path,Object.freeze(this.BasePath);var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},deactivated:function(){window.sessionStorage.setItem(this.BasePath,JSON.stringify({listScrollTop:this.getPosition()}))},activated:function(){var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},destroyed:function(){sessionStorage.removeItem(this.BasePath)}},a=r,l=o("2877"),c=o("4983"),u=o("eebe"),d=o.n(u),h=Object(l["a"])(a,s,n,!1,null,null,null);e["a"]=h.exports;d()(h,"components",{QScrollArea:c["a"]})},ffbe:function(t,e,o){"use strict";o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return n}));var s={right:"5px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},n={borderRadius:"5px",backgroundColor:"rgba(144,147,153,0.9)",padding:"10px;",margin:"10px;",width:"3px"}}}]);