import{S as a,i as s,s as t,Q as e,e as l,c as n,a as r,d as o,b as u,W as c,f as d,X as i,L as p,G as b,H as f,I as $,M as h,x as m,Y as g,Z as v,u as y,_ as k,$ as x,a0 as j}from"./vendor-3daaceab.js";/* empty css                                               */function B(a,s){return I(a,s),{update(s){I(a,s)}}}function I(a,s={}){let{enabled:t,target:e}=s;!1!==t&&("string"==typeof e&&(e=document.getElementById(e)),e||(e=document.body),e.appendChild(a))}function w(a){let s,t,j,I,w,E;const _=a[3].default,z=e(_,a,a[2],null);return{c(){s=l("div"),z&&z.c(),this.h()},l(a){s=n(a,"DIV",{class:!0});var t=r(s);z&&z.l(t),t.forEach(o),this.h()},h(){u(s,"class","backdrop fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black/50 svelte-1nwws1k"),c(s,"blur",a[0])},m(e,l){d(e,s,l),z&&z.m(s,null),I=!0,w||(E=[i(s,"click",a[4]),p(t=B.call(null,s,{enabled:a[1]}))],w=!0)},p(a,[e]){z&&z.p&&(!I||4&e)&&b(z,_,a,a[2],I?$(_,a[2],e,null):f(a[2]),null),t&&h(t.update)&&2&e&&t.update.call(null,{enabled:a[1]}),1&e&&c(s,"blur",a[0])},i(a){I||(m(z,a),g((()=>{j||(j=v(s,x,{duration:300},!0)),j.run(1)})),I=!0)},o(a){y(z,a),j||(j=v(s,x,{duration:300},!1)),j.run(0),I=!1},d(a){a&&o(s),z&&z.d(a),a&&j&&j.end(),w=!1,k(E)}}}function E(a,s,t){let{$$slots:e={},$$scope:l}=s,{blur:n=!1}=s,{portal:r=!1}=s;return a.$$set=a=>{"blur"in a&&t(0,n=a.blur),"portal"in a&&t(1,r=a.portal),"$$scope"in a&&t(2,l=a.$$scope)},[n,r,l,e,function(s){j.call(this,a,s)}]}class _ extends a{constructor(a){super(),s(this,a,E,w,t,{blur:0,portal:1})}}export{_ as B,B as p};