(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{60082:function(e,t,s){Promise.resolve().then(s.t.bind(s,65887,23)),Promise.resolve().then(s.t.bind(s,8920,23)),Promise.resolve().then(s.bind(s,74)),Promise.resolve().then(s.bind(s,61589))},74:function(e,t,s){"use strict";s.r(t);var r=s(9268),l=s(35846),n=s.n(l);t.default=e=>{let{collections:t}=e;return(0,r.jsxs)("section",{className:"my-2 shadowBottom mb-5 p-3 box-border",children:[(0,r.jsx)("h1",{className:" my-2",children:"Collection"}),(0,r.jsx)("article",{className:"text-[#65737E] dark:text-[#848484] ",children:t.map(e=>(0,r.jsxs)("article",{className:"",children:[(0,r.jsxs)("h1",{className:"text-highlight pb-2 flex justify-between items-center font-bold hover:underline",children:[(0,r.jsx)(n(),{href:"/collection/"+e._raw.flattenedPath,children:(0,r.jsx)("span",{children:e.title})}),(0,r.jsx)("div",{className:"text-highlight",onClick:()=>{var t;null===(t=document.querySelector("#".concat(e.collection)))||void 0===t||t.classList.toggle("hidden")},children:e.posts.length})]}),(0,r.jsx)("div",{id:e.collection,className:"border-l-[1px] border-l-solid border-l-[#65737E] ml-1 pb-5",children:e.posts.map(e=>(0,r.jsx)(n(),{href:"/collection/"+e._raw.flattenedPath,children:(0,r.jsx)("h1",{className:"pl-2 pb-2 hover:underline",children:e.title})},e._id))})]},e._id))})]})}},25941:function(e,t,s){"use strict";var r=s(9268),l=s(86006);t.Z=()=>{let[e,t]=(0,l.useState)(void 0),s=()=>{t(e=>!e)};return(0,l.useEffect)(()=>{if(void 0!==e){var s,r;e?(null===(s=document.querySelector("html"))||void 0===s||s.classList.add("dark"),localStorage.setItem("isDark","true")):(null===(r=document.querySelector("html"))||void 0===r||r.classList.remove("dark"),localStorage.setItem("isDark","false"))}else"true"===localStorage.getItem("isDark")?t(!0):window.matchMedia("(prefers-color-scheme: dark)").matches&&"false"!==localStorage.getItem("isDark")?t(!0):t(!1)},[e]),(0,r.jsx)(r.Fragment,{children:void 0!==e&&(e?(0,r.jsx)("i",{className:"bi bi-brightness-high text-2xl",onClick:s}):(0,r.jsx)("i",{className:"bi bi-moon text-2xl",onClick:s}))})}},61589:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var r=s(9268),l=s(35846),n=s.n(l),i=s(25941);function o(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("nav",{className:"flex items-center justify-between text-[1rem] p-[0.5em]",children:[(0,r.jsx)(n(),{href:"//",children:(0,r.jsx)("h1",{className:"font-bebas-neue text-[2em] font-bold mx-[20px]",children:"Teal's Log"})}),(0,r.jsxs)("div",{className:"flex items-center justify-center items-center mx-[10px] [&>*]:mx-[10px] text-[20px]",children:[(0,r.jsx)(n(),{href:"/collection",children:(0,r.jsx)("i",{className:"bi bi-book"})}),(0,r.jsx)(n(),{href:"/tags",children:(0,r.jsx)("i",{className:"bi bi-tags "})}),(0,r.jsx)(i.Z,{})]})]})})}},65887:function(){},83177:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=s(86006),l=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var r,n={},a=null,d=null;for(r in void 0!==s&&(a=""+s),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:l,type:e,key:a,ref:d,props:n,_owner:o.current}}t.Fragment=n,t.jsx=a,t.jsxs=a},9268:function(e,t,s){"use strict";e.exports=s(83177)},35846:function(e,t,s){e.exports=s(8920)}},function(e){e.O(0,[920,667,488,744],function(){return e(e.s=60082)}),_N_E=e.O()}]);