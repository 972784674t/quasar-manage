(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"5f22":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"q-pa-md base-markdown-content",staticStyle:{transform:"translateY(20%)"}},[s("q-card",{attrs:{flat:""}},[s("q-skeleton",{attrs:{height:"150px",square:""}}),s("q-card-section",[s("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text"}}),s("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text",width:"50%"}}),s("q-skeleton",{staticClass:"text-caption",attrs:{type:"text"}})],1)],1)],1):t._e()},o=[],n={name:"SkeletonDemo",props:["show"]},a=n,r=s("2877"),l=s("f09f"),c=s("293e"),d=s("a370"),u=s("eebe"),h=s.n(u),f=Object(r["a"])(a,i,o,!1,null,null,null);e["a"]=f.exports;h()(f,"components",{QCard:l["a"],QSkeleton:c["a"],QCardSection:d["a"]})},6914:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-content",[s("skeleton-demo",{attrs:{show:t.isLoadingVisible}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoadingVisible,expression:"!isLoadingVisible"}],staticClass:"base-markdown-content"},[s("v-md-editor",{attrs:{value:t.content,mode:"preview"}})],1)],1)},o=[],n=s("b0dd"),a=s("5f22"),r={name:"keepaliveDoc",components:{SkeletonDemo:a["a"],BaseContent:n["a"]},data:function(){return{content:"",isLoadingVisible:!1}},methods:{getMsg:function(){var t=this;this.isLoadingVisible=!this.isLoadingVisible;var e={url:this.$PUBLIC_PATH+"data/keepAliveData.md",method:"get",responseType:"text"};this.$fetchData(e).then((function(e){t.content=e.data,t.isLoadingVisible=!t.isLoadingVisible})).catch((function(t){console.log(t)}))}},created:function(){this.getMsg()}},l=r,c=s("2877"),d=Object(c["a"])(l,i,o,!1,null,null,null);e["default"]=d.exports},b0dd:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"100%"},attrs:{"thumb-style":t.thumbStyle,visible:!1}},[t._t("default")],2)],1)},o=[],n=(s("dca8"),s("ffbe")),a={name:"BaseContent",data:function(){return{thumbStyle:n["a"],BasePath:""}},props:["position"],methods:{ScrollToPosition:function(t){this.$refs.scrollArea.setScrollPosition(t,300)},getPosition:function(){return this.$refs.scrollArea.getScrollPosition()}},mounted:function(){this.BasePath=this.$route.path,Object.freeze(this.BasePath);var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},deactivated:function(){window.sessionStorage.setItem(this.BasePath,JSON.stringify({listScrollTop:this.getPosition()}))},activated:function(){var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},destroyed:function(){sessionStorage.removeItem(this.BasePath)}},r=a,l=s("2877"),c=s("4983"),d=s("eebe"),u=s.n(d),h=Object(l["a"])(r,i,o,!1,null,null,null);e["a"]=h.exports;u()(h,"components",{QScrollArea:c["a"]})},ffbe:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return o}));var i={right:"5px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},o={borderRadius:"5px",backgroundColor:"rgba(144,147,153,0.9)",padding:"10px;",margin:"10px;",width:"3px"}}}]);