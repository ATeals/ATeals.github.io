(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{568:function(){},5485:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return s(1266)}])},6147:function(e,t,s){"use strict";var n=s(5893),r=s(5396),a=s(1664),i=s.n(a);t.Z=e=>{let{post:t}=e;return(0,n.jsx)(i(),{href:"/posts/".concat(t._raw.flattenedPath),children:(0,n.jsxs)("div",{className:"mb-10 pl-10",children:[(0,n.jsx)("h1",{className:"text-lg md:text-2xl",children:t.title}),(0,n.jsxs)("h2",{className:"text-[gray] text-sm md:text-lg",children:[t.description," | ",(0,r._)(t.date)]})]})},t._id)}},2148:function(e,t,s){"use strict";var n=s(5893),r=s(1664),a=s.n(r);t.Z=e=>{let{tag:t}=e;return(0,n.jsx)(a(),{href:{pathname:"/tags",query:{tag:t}},children:(0,n.jsxs)("span",{className:"text-[gray] mx-1 hover:underline hover:cursor-pointer whitespace-nowrap text-sm md:text-lg",children:["#",t]})},t)}},1266:function(e,t,s){"use strict";s.r(t);var n=s(5893),r=s(6147),a=s(2148),i=s(7178),c=s(1163),l=s(7294);t.default=()=>{let[e,t]=(0,l.useState)(i.$),{tag:s}=(0,c.useRouter)().query;return(0,l.useEffect)(()=>{s&&t(i.$.filter(e=>{var t;return null===(t=e.tags)||void 0===t?void 0:t.includes(String(s))}))},[s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("section",{className:"m-5 p-3 flex-wrap flex",children:i.NJ.map(e=>(0,n.jsx)(a.Z,{tag:e},e))}),(0,n.jsx)("section",{className:"mt-10",children:e.map(e=>(0,n.jsx)(r.Z,{post:e},e._id))})]})}},1163:function(e,t,s){e.exports=s(6885)}},function(e){e.O(0,[178,774,888,179],function(){return e(e.s=5485)}),_N_E=e.O()}]);