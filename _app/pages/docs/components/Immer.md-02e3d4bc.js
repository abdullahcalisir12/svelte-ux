import{S as a,i as n,s,B as t,j as p,m as e,o as c,p as o,q as l,x as u,u as k,v as i,P as r,e as m,c as g,a as f,d,b as $,f as v,R as h}from"../../../chunks/vendor-3daaceab.js";import{L as j}from"../../../chunks/Layout-eb2b0384.js";function x(a){let n;return{c(){n=m("pre"),this.h()},l(a){n=g(a,"PRE",{class:!0}),f(n).forEach(d),this.h()},h(){$(n,"class","language-svelte")},m(a,s){v(a,n,s),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Immer</span>\n\t<span class="token attr-name">initial=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> example <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span>\n\t<span class="token attr-name"><span class="token namespace">on:</span>change=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>example <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>example<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>\n\t<span class="token attr-name"><span class="token namespace">let:</span>draft</span>\n\t<span class="token attr-name"><span class="token namespace">let:</span>commit</span>\n\t<span class="token attr-name"><span class="token namespace">let:</span>revert</span>\n<span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextField</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token attr-name">value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>draft<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">on:</span>change=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>draft<span class="token punctuation">.</span>name <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>\n\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Apply<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">revert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Cancel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Immer</span><span class="token punctuation">></span></span></code>'},p:h,d(a){a&&d(n)}}}function b(a){let n,s;const r=[a[0]];let m={$$slots:{default:[x]},$$scope:{ctx:a}};for(let p=0;p<r.length;p+=1)m=t(m,r[p]);return n=new j({props:m}),{c(){p(n.$$.fragment)},l(a){e(n.$$.fragment,a)},m(a,t){c(n,a,t),s=!0},p(a,[s]){const t=1&s?o(r,[l(a[0])]):{};2&s&&(t.$$scope={dirty:s,ctx:a}),n.$set(t)},i(a){s||(u(n.$$.fragment,a),s=!0)},o(a){k(n.$$.fragment,a),s=!1},d(a){i(n,a)}}}function B(a,n,s){return a.$$set=a=>{s(0,n=t(t({},n),r(a)))},[n=r(n)]}class y extends a{constructor(a){super(),n(this,a,B,b,s,{})}}export{y as default};