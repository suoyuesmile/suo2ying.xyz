(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-0e99c249":"f1dc2372","chunk-e273ba0c":"a0c47aa0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0e99c249":1,"chunk-e273ba0c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-0e99c249":"a5e46f88","chunk-e273ba0c":"786134ca"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"23f6":function(e,t,n){"use strict";var r=n("36e3"),a=n.n(r);a.a},"36e3":function(e,t,n){},"44db":function(e,t,n){e.exports=n.p+"static/img/fly.77827b81.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("transition",{attrs:{name:e.slide}},[n("router-view",{staticClass:"routers"})],1)],1)],1)},o=[],i={data:function(){return{slide:""}},watch:{$route:function(e,t){this.slide="slide-top"}}},s=i,c=(n("034f"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"entrance",staticClass:"entrance"},[r("div",{staticClass:"love",staticStyle:{"font-size":"16px",color:"#aaa"},attrs:{id:"love"}}),r("div",{staticClass:"star comet"}),e._l(160,(function(t){return r("div",{key:t,staticClass:"star",class:t%20==0?"star--big":t%9==0?"star--medium":"",style:{top:Math.round(Math.random()*e.windowHeight)+"px",left:Math.round(Math.random()*e.windowWidth)+"px",animationDuration:Math.round(3e3*Math.random())+3e3+"ms",animationDelay:Math.round(3e3*Math.random())+"ms"}})})),r("div",{staticClass:"spaceboat"},[r("img",{staticClass:"spaceboat__icon",attrs:{src:n("44db")}}),r("div",{staticClass:"spaceboat__opt"},[r("div",{staticClass:"spaceboat__opt--start",on:{click:function(t){return e.$router.push({name:"start"})}}},[e._v("启动时光机")]),r("div",{staticClass:"spaceboat__opt--skip",on:{click:function(t){return e.$router.push({name:"index"})}}},[e._v("回家")])])])],2)},p=[],h=(n("0d03"),n("c293"),function(e){var t=Math.floor(e/864e5),n=e%864e5,r=Math.floor(n/36e5),a=n%36e5,o=Math.floor(a/6e4),i=a%6e4,s=Math.round(i/1e3);return{days:t,hours:r,minutes:o,seconds:s}}),m=n("01e8"),v=n.n(m);r["a"].use(v.a);var g={mounted:function(){this.generateLoveTime(),this.ufofly()},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth,loveTime:{},playMemory:!0,words:["你看这星空，它就像我对你的爱","无穷无尽！","2020 我们也要好好在一起！"]}},methods:{setLoveDate:function(e){var t=(new Date).getTime(),n=t-e+1e3;this.loveTime=h(n)},generateLoveTime:function(){var e=new Date("2014-07-12 00:00:00").getTime();this.setLoveDate(e)},handleConfirm:function(){},ufofly:function(){var e=document.querySelectorAll("div.spaceboat"),t=document.body.clientHeight;this.$anime({targets:e,translateY:t-150,translateX:200,scale:[.2,1],delay:1e3,loop:!1,duration:2e4})},handleCancel:function(){}}},b=g,y=(n("6dda"),Object(c["a"])(b,f,p,!1,null,"19330ed2",null)),w=y.exports;r["a"].use(d["a"]);var _=[{path:"/",name:"entrance",component:w},{path:"/start",name:"start",component:function(){return n.e("chunk-e273ba0c").then(n.bind(null,"f994"))}},{path:"/index",name:"index",components:function(){return n.e("chunk-0e99c249").then(n.bind(null,"37f9"))}}],k=new d["a"]({mode:"history",base:"/",routes:_}),C=k,x=n("2f62");r["a"].use(x["a"]);var M=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=(n("6861"),n("d11f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-dialog",e._g(e._b({},"van-dialog",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),j=[],S=n("2241");r["a"].use(S["a"]);var T={name:"app-dialog"},E=T,L=(n("23f6"),Object(c["a"])(E,O,j,!1,null,"3ded7408",null)),P=L.exports;r["a"].component("sy-dialog",P),r["a"].config.productionTip=!1,new r["a"]({router:C,store:M,render:function(e){return e(l)}}).$mount("#app")},6861:function(e,t,n){},"6dda":function(e,t,n){"use strict";var r=n("97b8"),a=n.n(r);a.a},"85ec":function(e,t,n){},"97b8":function(e,t,n){},d11f:function(e,t){var n=420;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("html"),t=window.innerWidth/10;t=t>n?n:t,e.style.fontSize=t+"px"}))}});