(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,m=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c3af70b7"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/cubing/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0650":function(t,e,n){},"130b":function(t,e,n){},2457:function(t,e,n){},2857:function(t,e,n){"use strict";var r=n("806c"),i=n.n(r);i.a},"2db9":function(t,e,n){"use strict";var r=n("d239"),i=n.n(r);i.a},"3ea3":function(t,e,n){"use strict";var r=n("8860"),i=n.n(r);i.a},"4cde":function(t,e,n){"use strict";var r=n("0650"),i=n.n(r);i.a},"511c":function(t,e,n){"use strict";var r=n("130b"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},a=[],s=n("2877"),u={},c=Object(s["a"])(u,o,a,!1,null,null,null),l=c.exports,f=(n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-layout"},[n("div",{staticClass:"home-section"},[n("app-bar")],1),n("div",{staticClass:"home-section"},[n("two-look")],1),n("div",{staticClass:"home-section"},[n("oll")],1),n("div",{staticClass:"home-section"},[n("pll")],1),n("div",{staticClass:"home-section"},[n("timer")],1),n("div",{staticClass:"home-section"},[n("scores")],1)])},d=[],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"logo",attrs:{src:n("cf05")}})])}],p=(n("7223"),{}),v=Object(s["a"])(p,h,A,!1,null,"2d2896d3",null),b=v.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ui-container",[n("ui-h1",[t._v("2 Look")])],1)],1)},g=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ui-columns",style:{"justify-content":t.justify,"align-items":t.align}},[t._t("default")],2)},E=[],y={name:"UiColumns",props:{justify:String,align:String}},S=y,O=(n("3ea3"),Object(s["a"])(S,C,E,!1,null,"c361db4a",null)),_=(O.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-container"},[t._t("default")],2)}),T=[],U=(n("511c"),{}),L=Object(s["a"])(U,_,T,!1,null,"d14801d4",null),j=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._t("default")],2)},k=[],x=(n("4cde"),{}),P=Object(s["a"])(x,R,k,!1,null,"695a413a",null),D=P.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.timerClass},[t._v(" "+t._s(t.timestring)+" ")])},H=[];function Q(t){return t>=10?"".concat(t):"0"+t}var I=null,B=700,N=function(){return I?Date.now()-I:0},$={IDLE:"IDLE",HOLD:"HOLD",START:"START",RUN:"RUN",STOP:"STOP"},J={name:"UiCubeTimer",data:function(){return{timerState:$.IDLE,timeElapsed:0}},mounted:function(){window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup)},beforeDestroy:function(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup)},methods:{keydown:function(t){if(32===t.keyCode)return this.timerState===$.RUN?(this.stop(),void(this.timerState=$.STOP)):this.timerState===$.IDLE?(I=Date.now(),void(this.timerState=$.HOLD)):void(this.timerState===$.HOLD&&N()>=B&&(this.timerState=$.START))},keyup:function(t){32===t.keyCode&&(this.timerState===$.START?(this.start(),this.timerState=$.RUN):(this.timerState=$.IDLE,this.$bus.$emit("scramble")))},start:function(){var t=this;if(this.timerState!==$.RUN){this.timeElapsed=0;var e=Date.now();r=setInterval((function(){t.timeElapsed=Date.now()-e}),10)}},stop:function(){this.timerState===$.RUN&&(r&&clearInterval(r),r=null)}},computed:{timestring:function(){var t=Math.floor(this.timeElapsed/10),e=t-100*Math.floor(t/100);t=Math.floor(t/100);var n=t-60*Math.floor(t/60);t=Math.floor(t/60);var r=t-60*Math.floor(t/60);t=Math.floor(t/60);var i=t;return(i?Q(i)+":":"")+(r?Q(r)+":":"")+Q(n)+":"+Q(e)},timerClass:function(){return{"ui-stop-watch":!0,red:this.timerState===$.HOLD||this.timerState===$.STOP,green:this.timerState===$.START}}}},Y=J,K=(n("2db9"),Object(s["a"])(Y,M,H,!1,null,"4ebcc63b",null)),F=K.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-scramble-panel",on:{click:t.scramble}},[t._v(" "+t._s(t.algo)+" ")])},z=[];function V(t){return Math.floor(Math.random()*t)}function q(t,e){for(var n,r="",i=0;i<t.length-1;i++){0!==i&&(r+=" ");var o=t[i]>>2;e<=5?r+="DLBURFdlburf".charAt(o):(n=o%6,o=(o-n)/6,r+="DLBURF".charAt(n),o&&(r+="<sub>".concat(o+1,"</sub>"))),n=3&t[i],0!==n&&(r+=" 2'".charAt(n))}return r}function Z(t,e){(!t||t<0)&&(t=3),(!e||e<0)&&(e=30);var n=!1,r=[],i=1&t?t-1:t,o=new Array(i),a=[0,0,0],s=-1;while(r.length<e){var u=void 0;do{u=V(3)}while(u===s);for(var c=0;c<i;c++)o[c]=0;a[0]=a[1]=a[2]=0;var l=0;do{var f=void 0;do{f=V(i)}while(0!==o[f]);var m=V(3);(n||i!==t||2*(a[m]+1)<i||2*(a[m]+1)===i&&a[0]+a[1]+a[2]-a[m]===0)&&(a[m]++,l++,o[f]=m+1)}while(0===V(3)&&l<i&&l+r.length<e);for(var d=0;d<i;d++)if(o[d]){var h=o[d]-1,A=u,p=d;d+d+1>=i&&(A+=3,p=i-1-p,h=2-h),r[r.length]=4*(6*p+A)+h}s=u}return q(r,t)}var W=Z,X={name:"UiScramblePanel",data:function(){return{algo:W(3,30)}},mounted:function(){this.$bus.$on("scramble",this.scramble)},methods:{scramble:function(){this.algo=W(3,30)}}},tt=X,et=(n("b7e4"),Object(s["a"])(tt,G,z,!1,null,"62b804be",null)),nt=et.exports,rt={name:"TwoLook",components:{UiContainer:j,UiH1:D}},it=rt,ot=Object(s["a"])(it,w,g,!1,null,null,null),at=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ui-container",[n("ui-h1",[t._v("OLL")])],1)],1)},ut=[],ct={name:"Oll",components:{UiContainer:j,UiH1:D}},lt=ct,ft=Object(s["a"])(lt,st,ut,!1,null,null,null),mt=ft.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ui-container",[n("ui-h1",[t._v("PLL")])],1)],1)},ht=[],At={name:"Pll",components:{UiContainer:j,UiH1:D}},pt=At,vt=Object(s["a"])(pt,dt,ht,!1,null,null,null),bt=vt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ui-container",[n("ui-h1",[t._v("Timer")]),n("ui-scramble-panel"),n("ui-cube-timer")],1)],1)},gt=[],Ct={name:"Timer",components:{UiContainer:j,UiH1:D,UiCubeTimer:F,UiScramblePanel:nt}},Et=Ct,yt=Object(s["a"])(Et,wt,gt,!1,null,null,null),St=yt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ui-container",[n("ui-h1",[t._v("Scores")])],1)],1)},_t=[],Tt={name:"Scores",components:{UiContainer:j,UiH1:D}},Ut=Tt,Lt=Object(s["a"])(Ut,Ot,_t,!1,null,null,null),jt=Lt.exports,Rt={name:"Home",components:{AppBar:b,TwoLook:at,Oll:mt,Pll:bt,Timer:St,Scores:jt}},kt=Rt,xt=(n("2857"),Object(s["a"])(kt,m,d,!1,null,"58cd1c66",null)),Pt=xt.exports;i["a"].use(f["a"]);var Dt=[{path:"/",name:"Home",component:Pt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Mt=new f["a"]({mode:"history",base:"/cubing/",routes:Dt}),Ht=Mt,Qt=n("2f62");i["a"].use(Qt["a"]);var It=new Qt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("db43");i["a"].config.productionTip=!1,i["a"].prototype.$bus=new i["a"],new i["a"]({router:Ht,store:It,render:function(t){return t(l)}}).$mount("#app")},7223:function(t,e,n){"use strict";var r=n("2457"),i=n.n(r);i.a},"806c":function(t,e,n){},8860:function(t,e,n){},a079:function(t,e,n){},b7e4:function(t,e,n){"use strict";var r=n("a079"),i=n.n(r);i.a},cf05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBAsKLCUcIujKAAABkUlEQVRIx+3VP4gTURCA8V9yieh5/imieChIQAURsVCx00YQ1Ctt01rG7rAL2NhemfYaIW2wksNCOaxEEERFUARRUE9ESCR6Poskt9lkd7M5LJ2p9u18H495s2/JimNa1py2rditoSsIfmk6MBtcUPNRGMkNdaW8+HnrMXiYL12dDh+26k8i3s8HTqbDuyz7kQH3s2fF3iR8ydup8DA/q5sbhYvu5YaHeT/e1HkNndxwz4p9EbzgljKOTGlg1MhTmHPTob5gv+C16+CCJ5nwK9fAJc8E1UgQmYtqPiXC3yzbEdvpmCDoaapgQcPPGLxp1cFBr7pbqxOCIPg6OKLjWltrD51BwQ3vYrWJgiB44Qq47Ln3auCcxxN1qYIgaKuibCcWNW0m1GQKgo47Sgpupw74FEEQVJQy3lYpznZRTMZ/wT8SdK1ti123ET0seTPTHHxQU4j7yuq+5xJ03LUneVOLmn5PEbSHA5wWZz1KFTx1MU9zRr/7SPBl/CrPjvnBT6YvGLuF88ZRLRUlbSfSi/4CkSig44UCfQsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTFUMTA6NDQ6MzcrMDA6MDCjLzohAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTExVDEwOjQ0OjM3KzAwOjAw0nKCnQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},d239:function(t,e,n){},db43:function(t,e,n){}});
//# sourceMappingURL=app.d5888fc0.js.map