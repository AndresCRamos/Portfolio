import{H as _e}from"../chunks/control.f5b05b5f.js";import{s as F,r as ge,f as m,a as C,g as d,h as b,c as E,d as c,i as k,y as u,A as be,B as ve,C as $e,l as M,m as P,j as g,n as R,T as de,e as se,w as Y,H as X}from"../chunks/scheduler.cc165195.js";import{S as j,i as G,a as _,t as v,b as D,d as H,m as B,e as V,g as ee,c as te}from"../chunks/index.3c97b3dd.js";import{e as z,B as ke}from"../chunks/Button.b9ce5732.js";function we(i,e){return new _e(i,e)}new TextEncoder;const re=new Map([["mercadolibre",{company:"Mercado Libre",position:"Software Analyst",dates:{from:{month:6,year:2022},to:{month:7,year:2023}},blocks:[{type:"list",title:"What i learned?",value:["Golang","Gin Gonic","REST APIs","Microservices","Unit testing"]},{type:"text",title:"Whats Mercado Libre?",value:"Mercado Libre is a startup leader in e-commerce and fintech solutions across Latin America"},{type:"text",title:"Resume",value:"In Mercado Libre i worked in the fintech division, Mercado Pago, there i worked in the team responsible for processing payments made with debit and credit cards"},{type:"text",title:"Maintaining microservices",value:"First i worked in the team responsible for maintaining the microservices responsible for communicating the payments made inside the Mercado Pago ecosystem and the entity that emitted the card that generated the payment"},{type:"text",title:"BCI",value:"Then i worked in the Business Continuous Integration team, solving more broad problems, while i worked closely with my old team, i also worked with other teams with different responsibilities"}]}],["tcs",{company:"Contractor at Tata Consultant Services",position:"Junior PHP Developer",dates:{from:{month:6,year:2022},to:{month:7,year:2023}},blocks:[{type:"list",title:"What i learned?",value:["HTML/CSS","JavaScript","PHP","SQL","Encryption","Captcha"]},{type:"text",title:"Resume",value:"I worked with a software engineer who had a contract with Tata Consultant Services, there i worked by requirements maintaining and updating vanilla PHP sites"},{type:"text",title:"In depth",value:"The client i worked with was Credicorp Capital, a finance firm that wanted to update its page to better accommodate to its design brand"},{type:"text",title:"Login page",value:"First i worked in the login page, where i was given access to the Figma designs and tasked to change the design to reflect those Figma designs"},{type:"text",value:"One of the requirements was the implementation of encryption between client and server during login, this was achieved by using AES encryption, where client encrypted the data using JS, and the server receive it and decrypt it using php crypto library"},{type:"text",value:"To protect the page against malicious actors, reCaptcha was also implemented following Google documentation"},{type:"text",title:"Financial Reports",value:"I was tasked to renovate the generation of financial reports, consuming different databases to generate graphs and display, while also reimplementing the old, block based PDF generation, with a new system, based in parsing the generated HTML into a PDF"}]}]]),ye=async({params:i})=>{const e=i.experiences;if(!re.has(e))throw we(404,"job_not_exists");return re.get(e)},Ze=Object.freeze(Object.defineProperty({__proto__:null,load:ye},Symbol.toStringTag,{value:"Module"}));function oe(i){let e,l;return{c(){e=m("h3"),l=M(i[0]),this.h()},l(t){e=d(t,"H3",{class:!0});var n=b(e);l=P(n,i[0]),n.forEach(c),this.h()},h(){g(e,"class","text-2xl text-accent-500 dark:text-accent-300")},m(t,n){k(t,e,n),u(e,l)},p(t,n){n&1&&R(l,t[0])},d(t){t&&c(e)}}}function xe(i){let e,l,t,n=i[0]&&oe(i);const r=i[2].default,a=ge(r,i,i[1],null);return{c(){e=m("div"),n&&n.c(),l=C(),a&&a.c()},l(s){e=d(s,"DIV",{});var o=b(e);n&&n.l(o),l=E(o),a&&a.l(o),o.forEach(c)},m(s,o){k(s,e,o),n&&n.m(e,null),u(e,l),a&&a.m(e,null),t=!0},p(s,[o]){s[0]?n?n.p(s,o):(n=oe(s),n.c(),n.m(e,l)):n&&(n.d(1),n=null),a&&a.p&&(!t||o&2)&&be(a,r,s,s[1],t?$e(r,s[1],o,null):ve(s[1]),null)},i(s){t||(_(a,s),t=!0)},o(s){v(a,s),t=!1},d(s){s&&c(e),n&&n.d(),a&&a.d(s)}}}function Ce(i,e,l){let{$$slots:t={},$$scope:n}=e,{title:r=""}=e;return i.$$set=a=>{"title"in a&&l(0,r=a.title),"$$scope"in a&&l(1,n=a.$$scope)},[r,n,t]}class pe extends j{constructor(e){super(),G(this,e,Ce,xe,F,{title:0})}}function ce(i,e,l){const t=i.slice();return t[2]=e[l],t}function fe(i){let e,l=i[2]+"",t;return{c(){e=m("li"),t=M(l),this.h()},l(n){e=d(n,"LI",{class:!0});var r=b(e);t=P(r,l),r.forEach(c),this.h()},h(){g(e,"class","font-light")},m(n,r){k(n,e,r),u(e,t)},p(n,r){r&2&&l!==(l=n[2]+"")&&R(t,l)},d(n){n&&c(e)}}}function Ee(i){let e,l=z(i[1]),t=[];for(let n=0;n<l.length;n+=1)t[n]=fe(ce(i,l,n));return{c(){e=m("ul");for(let n=0;n<t.length;n+=1)t[n].c()},l(n){e=d(n,"UL",{});var r=b(e);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(c)},m(n,r){k(n,e,r);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(n,r){if(r&2){l=z(n[1]);let a;for(a=0;a<l.length;a+=1){const s=ce(n,l,a);t[a]?t[a].p(s,r):(t[a]=fe(s),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(n){n&&c(e),de(t,n)}}}function Me(i){let e,l;return e=new pe({props:{title:i[0],$$slots:{default:[Ee]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,[n]){const r={};n&1&&(r.title=t[0]),n&34&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Pe(i,e,l){let{title:t=""}=e,{items:n}=e;return i.$$set=r=>{"title"in r&&l(0,t=r.title),"items"in r&&l(1,n=r.items)},[t,n]}class Le extends j{constructor(e){super(),G(this,e,Pe,Me,F,{title:0,items:1})}}function Se(i){let e,l;return{c(){e=m("p"),l=M(i[1]),this.h()},l(t){e=d(t,"P",{class:!0});var n=b(e);l=P(n,i[1]),n.forEach(c),this.h()},h(){g(e,"class","text-base font-thin")},m(t,n){k(t,e,n),u(e,l)},p(t,n){n&2&&R(l,t[1])},d(t){t&&c(e)}}}function Ie(i){let e,l;return e=new pe({props:{title:i[0],$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,[n]){const r={};n&1&&(r.title=t[0]),n&6&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Te(i,e,l){let{title:t=""}=e,{text:n}=e;return i.$$set=r=>{"title"in r&&l(0,t=r.title),"text"in r&&l(1,n=r.text)},[t,n]}class De extends j{constructor(e){super(),G(this,e,Te,Ie,F,{title:0,text:1})}}function ue(i,e,l){const t=i.slice();return t[1]=e[l],t}function He(i){let e,l;return e=new De({props:{title:i[1].title,text:i[1].value}}),{c(){D(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.title=t[1].title),n&1&&(r.text=t[1].value),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Be(i){let e,l;return e=new Le({props:{title:i[1].title,items:i[1].value}}),{c(){D(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.title=t[1].title),n&1&&(r.items=t[1].value),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function he(i){let e,l,t,n;const r=[Be,He],a=[];function s(o,f){return o[1].type=="list"?0:o[1].type=="text"?1:-1}return~(e=s(i))&&(l=a[e]=r[e](i)),{c(){l&&l.c(),t=se()},l(o){l&&l.l(o),t=se()},m(o,f){~e&&a[e].m(o,f),k(o,t,f),n=!0},p(o,f){let w=e;e=s(o),e===w?~e&&a[e].p(o,f):(l&&(ee(),v(a[w],1,1,()=>{a[w]=null}),te()),~e?(l=a[e],l?l.p(o,f):(l=a[e]=r[e](o),l.c()),_(l,1),l.m(t.parentNode,t)):l=null)},i(o){n||(_(l),n=!0)},o(o){v(l),n=!1},d(o){o&&c(t),~e&&a[e].d(o)}}}function Ve(i){let e,l,t=z(i[0]),n=[];for(let a=0;a<t.length;a+=1)n[a]=he(ue(i,t,a));const r=a=>v(n[a],1,1,()=>{n[a]=null});return{c(){e=m("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=d(a,"DIV",{class:!0});var s=b(e);for(let o=0;o<n.length;o+=1)n[o].l(s);s.forEach(c),this.h()},h(){g(e,"class","flex flex-col gap-4")},m(a,s){k(a,e,s);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null);l=!0},p(a,[s]){if(s&1){t=z(a[0]);let o;for(o=0;o<t.length;o+=1){const f=ue(a,t,o);n[o]?(n[o].p(f,s),_(n[o],1)):(n[o]=he(f),n[o].c(),_(n[o],1),n[o].m(e,null))}for(ee(),o=t.length;o<n.length;o+=1)r(o);te()}},i(a){if(!l){for(let s=0;s<t.length;s+=1)_(n[s]);l=!0}},o(a){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)v(n[s]);l=!1},d(a){a&&c(e),de(n,a)}}}function Ae(i,e,l){let{block_list:t}=e;return i.$$set=n=>{"block_list"in n&&l(0,t=n.block_list)},[t]}class Fe extends j{constructor(e){super(),G(this,e,Ae,Ve,F,{block_list:0})}}function je(i){let e,l='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block h-24 md:h-32 w-full fill-secondary-500"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path></svg>';return{c(){e=m("div"),e.innerHTML=l,this.h()},l(t){e=d(t,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-any34n"&&(e.innerHTML=l),this.h()},h(){g(e,"class","w-full overflow-hidden rotate-180 absolute bottom-0 left-0")},m(t,n){k(t,e,n)},p:X,i:X,o:X,d(t){t&&c(e)}}}class Ge extends j{constructor(e){super(),G(this,e,null,je,F,{})}}function Re(i){let e;return{c(){e=M("Go back")},l(l){e=P(l,"Go back")},m(l,t){k(l,e,t)},d(l){l&&c(e)}}}function me(i){let e,l,t,n,r,a;return e=new Fe({props:{block_list:i[0].blocks}}),r=new Ge({}),{c(){D(e.$$.fragment),l=C(),t=m("div"),n=C(),D(r.$$.fragment),this.h()},l(s){H(e.$$.fragment,s),l=E(s),t=d(s,"DIV",{class:!0}),b(t).forEach(c),n=E(s),H(r.$$.fragment,s),this.h()},h(){g(t,"class","mb-24 md:mb-32")},m(s,o){B(e,s,o),k(s,l,o),k(s,t,o),k(s,n,o),B(r,s,o),a=!0},p(s,o){const f={};o&1&&(f.block_list=s[0].blocks),e.$set(f)},i(s){a||(_(e.$$.fragment,s),_(r.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),v(r.$$.fragment,s),a=!1},d(s){s&&(c(l),c(t),c(n)),V(e,s),V(r,s)}}}function Ne(i){let e,l,t,n,r,a=i[0].company+"",s,o,f,w=i[0].position+"",N,J,x,L,S,ne="From: ",O,W,I,T,le="To: ",Z,U,A;t=new ke({props:{href:"/",size:"lg",class:"w-full max-w-3xl",$$slots:{default:[Re]},$$scope:{ctx:i}}});let h=i[0].blocks&&me(i);return{c(){e=m("main"),l=m("div"),D(t.$$.fragment),n=C(),r=m("h1"),s=M(a),o=C(),f=m("h2"),N=M(w),J=C(),x=m("div"),L=m("p"),S=m("span"),S.textContent=ne,O=M(i[1]),W=C(),I=m("p"),T=m("span"),T.textContent=le,Z=M(i[2]),U=C(),h&&h.c(),this.h()},l(p){e=d(p,"MAIN",{class:!0});var y=b(e);l=d(y,"DIV",{class:!0});var $=b(l);H(t.$$.fragment,$),n=E($),r=d($,"H1",{class:!0});var ae=b(r);s=P(ae,a),ae.forEach(c),o=E($),f=d($,"H2",{class:!0});var ie=b(f);N=P(ie,w),ie.forEach(c),J=E($),x=d($,"DIV",{class:!0});var q=b(x);L=d(q,"P",{class:!0});var Q=b(L);S=d(Q,"SPAN",{class:!0,"data-svelte-h":!0}),Y(S)!=="svelte-em7jhu"&&(S.textContent=ne),O=P(Q,i[1]),Q.forEach(c),W=E(q),I=d(q,"P",{class:!0});var K=b(I);T=d(K,"SPAN",{class:!0,"data-svelte-h":!0}),Y(T)!=="svelte-1szrdo1"&&(T.textContent=le),Z=P(K,i[2]),K.forEach(c),q.forEach(c),U=E($),h&&h.l($),$.forEach(c),y.forEach(c),this.h()},h(){g(r,"class","text-4xl mt-12"),g(f,"class","text-2xl text-secondary-500 dark:text-secondary-400 mb-4"),g(S,"class","hidden sm:inline"),g(L,"class","text-sm font-thin"),g(T,"class","hidden sm:inline"),g(I,"class","text-sm font-thin"),g(x,"class","flex justify-center gap-2 flex-col md:flex-row mb-6 md:mb-12"),g(l,"class","w-4/5 mx-auto mt-24 mb-8"),g(e,"class","h-[95dvh] overflow-y-auto mx-auto")},m(p,y){k(p,e,y),u(e,l),B(t,l,null),u(l,n),u(l,r),u(r,s),u(l,o),u(l,f),u(f,N),u(l,J),u(l,x),u(x,L),u(L,S),u(L,O),u(x,W),u(x,I),u(I,T),u(I,Z),u(l,U),h&&h.m(l,null),A=!0},p(p,[y]){const $={};y&8&&($.$$scope={dirty:y,ctx:p}),t.$set($),(!A||y&1)&&a!==(a=p[0].company+"")&&R(s,a),(!A||y&1)&&w!==(w=p[0].position+"")&&R(N,w),p[0].blocks?h?(h.p(p,y),y&1&&_(h,1)):(h=me(p),h.c(),_(h,1),h.m(l,null)):h&&(ee(),v(h,1,1,()=>{h=null}),te())},i(p){A||(_(t.$$.fragment,p),_(h),A=!0)},o(p){v(t.$$.fragment,p),v(h),A=!1},d(p){p&&c(e),V(t),h&&h.d()}}}function qe(i,e,l){var a,s,o,f;let{data:t}=e,n=`${(a=t.dates)==null?void 0:a.from.month}-${(s=t.dates)==null?void 0:s.from.year}`,r=`${(o=t.dates)==null?void 0:o.to.month}-${(f=t.dates)==null?void 0:f.to.year}`;return i.$$set=w=>{"data"in w&&l(0,t=w.data)},[t,n,r]}class Ue extends j{constructor(e){super(),G(this,e,qe,Ne,F,{data:0})}}export{Ue as component,Ze as universal};