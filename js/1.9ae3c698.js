(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"74a4":function(t,e,a){"use strict";a("bf73")},9982:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-content",[a("div",{staticClass:"base-markdown-content"},[a("h2",[t._v("1")]),a("p",[t._v("2020 恍如隔世，或许这是给 22 岁的自己一个交代吧。ambitions 架构师，冲！")]),a("p",[t._v("如果您觉得这个项目对您有帮助，可以请作者吃一碗螺蛳粉表示鼓励")]),a("div",{staticClass:"row justify-center"},[a("q-img",{attrs:{width:"450px",src:this.$PUBLIC_PATH+"data/pay.png"}})],1),a("p",[t._v("972784674@qq.com")]),a("q-parallax",{attrs:{height:150},scopedSlots:t._u([{key:"media",fn:function(){return[a("video",{attrs:{width:"720",height:"450",poster:"https://cdn.quasar.dev/img/polina.jpg",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{type:"video/webm",src:"https://cdn.quasar.dev/img/polina.webm"}}),a("source",{attrs:{type:"video/mp4",src:"https://cdn.quasar.dev/img/polina.mp4"}})])]},proxy:!0}])},[a("h3",{staticClass:"text-white"},[t._v("CIMO")])]),a("h2",[t._v("2")]),a("h5",[t._v("作者的其他项目")]),a("h5",[t._v("2.1 cimo 音乐播放器 （Android）"),a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"https://github.com/972784674t/Experiment08"}},[t._v("Github地址")])]),a("p",[t._v("Service + BroadcastReceiver 实现")]),a("div",{staticClass:"row justify-center"},[a("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=625498947&bvid=BV1Bt4y1y7zF&cid=183527309&page=1",width:"400px",height:"850px",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}})]),a("h5",[t._v("2.2 CimoGallery （Android Material Design 组件集合Demo) "),a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"https://github.com/972784674t/CimoShop"}},[t._v("Github地址")])]),a("p",[a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"https://www.bilibili.com/video/BV1w4411t7UQ?p=1"}},[t._v("longway777")]),t._v(" 这位大佬用 kotlin 写了一个简易版的画廊Demo，我就想能不能用 Java 也实现一个 Demo ，顺便加上自己喜欢的元素")]),a("p",[t._v("于是就对着 Kotlin 把 Java 代码敲出来了，还加了很多额外的功能。")]),a("div",{staticClass:"row justify-center"},[a("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=926946918&bvid=BV1vT4y1w7zf&cid=229851898&page=1",width:"400px",height:"850px",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}})]),a("p"),a("h2",[t._v("3")]),a("p",[t._v("小技巧：")]),a("p",[t._v("- 当你在网络上找不到答案时，不妨去试试"),a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"https://cn.vuejs.org/v2/api/"}},[t._v(" Vue API ")]),t._v("，自己探寻原理，找到解决方法。")]),a("p",[t._v("- 搞 IT，想要得到更及时的信息，或者不同的体验，科学上网尤为重要。")]),a("p",[t._v("- 感觉没有美感？不妨去看一看某个开源 ui 框架的设计规范")]),a("p",[t._v("- 请善用开发工具，比如 idea 用 ctrl + shift + f，全局搜索 tagView 就能找到相关代码。")]),a("p",[t._v("- icon 图标也是 svg 生成的文字，因此可以通过设置文字颜色来设置图标的颜色。")]),a("p",[t._v("- css投影应该是比较虚的，切勿太实，最好投影中融入一些背景色，比如这样：")]),a("p",[t._v("-")]),a("div",{staticClass:"row justify-center"},[a("q-btn",{staticClass:"logon-btn bg-logon-card-input",staticStyle:{"font-size":"large"},attrs:{align:"center","text-color":"white",unelevated:"",label:""}},[t._v("注意投影变化\n    ")])],1),a("h1")],1)])},o=[],s=a("b0dd"),r={name:"cimo",components:{BaseContent:s["a"]}},n=r,l=(a("74a4"),a("2877")),c=a("068f"),p=a("639d"),d=a("9c40"),h=a("eebe"),u=a.n(h),v=Object(l["a"])(n,i,o,!1,null,"21ded470",null);e["default"]=v.exports;u()(v,"components",{QImg:c["a"],QParallax:p["a"],QBtn:d["a"]})},b0dd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"100%"},attrs:{"thumb-style":t.thumbStyle,visible:!1}},[t._t("default")],2)],1)},o=[],s=(a("dca8"),a("ffbe")),r={name:"BaseContent",data:function(){return{thumbStyle:s["a"],BasePath:""}},props:["position"],methods:{ScrollToPosition:function(t){this.$refs.scrollArea.setScrollPosition(t,300)},getPosition:function(){return this.$refs.scrollArea.getScrollPosition()}},mounted:function(){this.BasePath=this.$route.path,Object.freeze(this.BasePath);var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},deactivated:function(){window.sessionStorage.setItem(this.BasePath,JSON.stringify({listScrollTop:this.getPosition()}))},activated:function(){var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},destroyed:function(){sessionStorage.removeItem(this.BasePath)}},n=r,l=a("2877"),c=a("4983"),p=a("eebe"),d=a.n(p),h=Object(l["a"])(n,i,o,!1,null,null,null);e["a"]=h.exports;d()(h,"components",{QScrollArea:c["a"]})},bf73:function(t,e,a){},ffbe:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i={right:"5px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},o={borderRadius:"5px",backgroundColor:"rgba(144,147,153,0.9)",padding:"10px;",margin:"10px;",width:"3px"}}}]);