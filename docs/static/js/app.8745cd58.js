(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1da7":function(e,t,n){},3518:function(e,t,n){"use strict";var r=n("1da7"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("transition",{attrs:{name:e.slide}},[n("router-view",{staticClass:"routers"})],1)],1)],1)},a=[],i={data:function(){return{slide:""}},watch:{$route:function(e,t){this.slide="slide-top"}}},s=i,u=(n("034f"),n("2877")),c=Object(u["a"])(s,o,a,!1,null,null,null),l=c.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mine"})},p=[],h=(n("b255"),{}),m=Object(u["a"])(h,f,p,!1,null,"2cc59e1e",null),v=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"home",staticClass:"home"},[n("div",{staticClass:"love",staticStyle:{"font-size":"16px",color:"#aaa"},attrs:{id:"love"}}),n("div",{staticClass:"star comet"}),e._l(160,(function(t){return n("div",{key:t,class:t%20==0?"star star--big":t%9==0?"star star--medium":"star",style:{top:Math.round(Math.random()*e.wH)+"px",left:Math.round(Math.random()*e.wW)+"px",animationDuration:Math.round(3e3*Math.random())+3e3+"ms",animationDelay:Math.round(3e3*Math.random())+"ms"}})}))],2)},b=[],w=(n("0d03"),n("c293")),g={mounted:function(){var e=new Date("2014-07-12 00:00:00").getTime();this.setLoveDate(e);var t=this;Object(w["a"])("#love",{strings:["今天是锁与颖相爱的"+this.loveTime.days+"天","我们的爱就像这星空","无穷无尽！","愿我们能永远幸福快乐的在一起！","2020 我们也要好好在一起！"],typeSpeed:220,backSpeed:100,startDelay:1e3,backDelay:500,loop:!1,showCursor:!1,cursorChar:"|",onFinished:function(){setTimeout((function(){t.$router.push({name:"mine"})}),1e3)}})},data:function(){return{wH:window.innerHeight,wW:window.innerWidth,loveTime:{}}},methods:{calcLoveDays:function(e){var t=Math.floor(e/864e5),n=e%864e5,r=Math.floor(n/36e5),o=n%36e5,a=Math.floor(o/6e4),i=o%6e4,s=Math.round(i/1e3);return{days:t,hours:r,minutes:a,seconds:s}},setLoveDate:function(e){var t=(new Date).getTime(),n=t-e+1e3;this.loveTime=this.calcLoveDays(n)}},computed:{},components:{}},M=g,O=(n("3518"),Object(u["a"])(M,y,b,!1,null,"72d1ab05",null)),j=O.exports;r["a"].use(d["a"]);var x=[{path:"/",name:"home",component:j},{path:"/mine",name:"mine",component:v}],_=new d["a"]({mode:"history",base:"",routes:x}),D=_,S=n("2f62");r["a"].use(S["a"]);var T=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("6861"),n("d11f");r["a"].config.productionTip=!1,new r["a"]({router:D,store:T,render:function(e){return e(l)}}).$mount("#app")},6861:function(e,t,n){},"85ec":function(e,t,n){},9742:function(e,t,n){},b255:function(e,t,n){"use strict";var r=n("9742"),o=n.n(r);o.a},d11f:function(e,t){var n=420;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("html"),t=window.innerWidth/10;t=t>n?n:t,e.style.fontSize=t+"px"}))}});