(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{5485:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return s(1266)}])},6147:function(t,e,s){"use strict";var n=s(5893),r=s(5396),a=s(1664),c=s.n(a);e.Z=t=>{let{post:e}=t;return(0,n.jsx)(c(),{href:"/posts/".concat(e._raw.flattenedPath),children:(0,n.jsxs)("div",{className:"mb-10 pl-10",children:[(0,n.jsx)("h1",{className:"text-lg md:text-2xl",children:e.title}),(0,n.jsxs)("h2",{className:"text-[gray] text-sm md:text-lg",children:[e.description," | ",(0,r._)(e.date)]})]})},e._id)}},2148:function(t,e,s){"use strict";var n=s(5893),r=s(1664),a=s.n(r);e.Z=t=>{let{tag:e}=t;return(0,n.jsx)(a(),{href:{pathname:"/tags",query:{tag:e}},children:(0,n.jsxs)("span",{className:"text-[gray] mx-1 hover:underline hover:cursor-pointer whitespace-nowrap text-sm md:text-lg",children:["#",e]})},e)}},1266:function(t,e,s){"use strict";s.r(e);var n=s(5893),r=s(6147),a=s(2148),c=s(8721),i=s(1163),l=s(7294);e.default=()=>{const[t,e]=(0,l.useState)(c.$),{tag:s}=(0,i.useRouter)().query;return(0,l.useEffect)((()=>{s&&e(c.$.filter((t=>{var e;return null===(e=t.tags)||void 0===e?void 0:e.includes(String(s))})))}),[s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("section",{className:"m-5 p-3 flex-wrap flex",children:c.NJ.map((t=>(0,n.jsx)(a.Z,{tag:t},t)))}),(0,n.jsx)("section",{className:"mt-10",children:t.map((t=>(0,n.jsx)(r.Z,{post:t},t._id)))})]})}},1163:function(t,e,s){t.exports=s(6885)}},function(t){t.O(0,[774,888,179],(function(){return e=5485,t(t.s=e);var e}));var e=t.O();_N_E=e}]);