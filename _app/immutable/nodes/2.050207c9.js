import{s as g,f as v,l as m,g as $,h as b,m as p,d as _,i as x,y as c,n as h,H as d,I as y}from"../chunks/scheduler.cc165195.js";import{S as E,i as H}from"../chunks/index.3c97b3dd.js";import{p as S}from"../chunks/stores.b66ebf5f.js";function q(n){var f;let e,s=n[0].status+"",r,o,i=((f=n[0].error)==null?void 0:f.message)+"",l;return{c(){e=v("h1"),r=m(s),o=m(": "),l=m(i)},l(a){e=$(a,"H1",{});var t=b(e);r=p(t,s),o=p(t,": "),l=p(t,i),t.forEach(_)},m(a,t){x(a,e,t),c(e,r),c(e,o),c(e,l)},p(a,[t]){var u;t&1&&s!==(s=a[0].status+"")&&h(r,s),t&1&&i!==(i=((u=a[0].error)==null?void 0:u.message)+"")&&h(l,i)},i:d,o:d,d(a){a&&_(e)}}}function C(n,e,s){let r;return y(n,S,o=>s(0,r=o)),[r]}class w extends E{constructor(e){super(),H(this,e,C,q,g,{})}}export{w as component};