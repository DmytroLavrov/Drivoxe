!function(){"use strict";var e,t={},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+".bundle.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},o.l=function(t,n,r,i){if(e[t])e[t].push(n);else{var c,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),a=0;a<u.length;a++){var s=u[a];if(s.getAttribute("src")==t){c=s;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=t),e[t]=[n];var d=function(n,o){c.onerror=c.onload=null,clearTimeout(f);var r=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(o)})),n)return n(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),l&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={155:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var c=o.p+o.u(t),l=new Error;o.l(c,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",l.name="ChunkLoadError",l.type=i,l.request=c,r[1](l)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,c=n[0],l=n[1],u=n[2],a=0;if(c.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);u&&u(o)}for(t&&t(n);a<c.length;a++)i=c[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon");e.onclick=function(){e.classList.toggle("mobile-nav-btn--active"),t.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")};const o=document.querySelector(".mobile-nav__list"),r=document.querySelectorAll(".nav__list li"),i=document.querySelectorAll(".nav__login li");r.forEach((e=>{const t=e.cloneNode(!0);o.appendChild(t)})),i.forEach((e=>{const t=e.cloneNode(!0);o.appendChild(t)}))})(),function(){const e=document.querySelectorAll(".anim");if(e.length>0){function t(){for(let t=0;t<e.length;t++){const o=e[t],r=o.offsetHeight,i=n(o).top,c=4;let l=window.innerHeight-r/c;r>window.innerHeight&&(l=window.innerHeight-window.innerHeight/c),pageYOffset>i-l&&pageYOffset<i+r?o.classList.add("active"):o.classList.contains("anim")||o.classList.remove("active")}}function n(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}window.addEventListener("scroll",t),t()}}(),document.querySelector(".footer__scroll-top").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("load",(()=>{window.scrollTo(0,0)})),Promise.all([o.e(468),o.e(367)]).then(o.bind(o,679)).then((({default:e})=>e())),Promise.all([o.e(468),o.e(675)]).then(o.bind(o,675)).then((({setupCatalogSwiper:e})=>e()))}();