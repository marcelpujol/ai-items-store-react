var remote;(()=>{"use strict";var e,r,t={658:(e,r,t)=>{var o={"./CustomComponent":()=>t.e(950).then((()=>()=>t(950)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,n.c=o,n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+"."+e+"."+n.h()+".js",n.miniCssF=e=>{},n.h=()=>"6d7b8f918e9920dafc73",n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="remote:",n.l=(t,o,a,i)=>{if(e[t])e[t].push(o);else{var l,d;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){l=f;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",r+a),l.src=t),e[t]=[o];var c=(r,o)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),r)return r(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),d&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n.S={};var e={},r={};n.I=(t,o)=>{o||(o=[]);var a=r[t];if(a||(a=r[t]={}),!(o.indexOf(a)>=0)){if(o.push(a),e[t])return e[t];n.o(n.S,t)||(n.S[t]={}),n.S[t];var i=[];return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),n.p="/",(()=>{var e={697:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=a);var i=n.p+n.u(r),l=new Error;n.l(i,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,a,[i,l,d]=t,s=0;if(i.some((r=>0!==e[r]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);d&&d(n)}for(r&&r(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkremote=self.webpackChunkremote||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=n(658);remote=a})();