function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let c,a=!1;function l(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function u(t,n){a?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const t=l(1,r+1,(t=>n[e[t]].claim_order),n[u].claim_order)-1;o[u]=e[t]+1;const i=t+1;e[i]=u,r=Math.max(i,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,u=0;l<c.length;l++){for(;u<i.length&&c[l].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function s(t,n,e){a&&!e?u(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function d(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function m(){return _(" ")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t){return Array.from(t.childNodes)}function b(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function x(t,n,e,o){return b(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)))}function y(t,n){return b(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>_(n)),!0)}function v(t){return y(t," ")}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function E(t,n){t.value=null==n?"":n}function k(t){c=t}function A(t){(function(){if(!c)throw new Error("Function called outside component initialization");return c})().$$.on_mount.push(t)}const N=[],S=[],j=[],B=[],C=Promise.resolve();let O=!1;function T(t){j.push(t)}function q(t){B.push(t)}let z=!1;const I=new Set;function L(){if(!z){z=!0;do{for(let t=0;t<N.length;t+=1){const n=N[t];k(n),M(n.$$)}for(k(null),N.length=0;S.length;)S.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];I.has(n)||(I.add(n),n())}j.length=0}while(N.length);for(;B.length;)B.pop()();O=!1,z=!1,I.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const D=new Set;let F;function P(){F={r:0,c:[],p:F}}function G(){F.r||o(F.c),F=F.p}function H(t,n){t&&t.i&&(D.delete(t),t.i(n))}function J(t,n,e,o){if(t&&t.o){if(D.has(t))return;D.add(t),F.c.push((()=>{D.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function K(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function Q(t){t&&t.c()}function R(t,n){t&&t.l(n)}function U(t,e,i,c){const{fragment:a,on_mount:l,on_destroy:u,after_update:s}=t.$$;a&&a.m(e,i),c||T((()=>{const e=l.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(T)}function V(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(N.push(t),O||(O=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,r,i,l,u,s,d=[-1]){const h=c;k(n);const _=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:r.context||[]),callbacks:e(),dirty:d,skip_bound:!1};let m=!1;if(_.ctx=i?i(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return _.ctx&&u(_.ctx[t],_.ctx[t]=r)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](r),m&&W(n,t)),e})):[],_.update(),m=!0,o(_.before_update),_.fragment=!!l&&l(_.ctx),r.target){if(r.hydrate){a=!0;const t=g(r.target);_.fragment&&_.fragment.l(t),t.forEach(f)}else _.fragment&&_.fragment.c();r.intro&&H(n.$$.fragment),U(n,r.target,r.anchor,r.customElement),a=!1,L()}k(h)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{P as A,G as B,d as C,A as D,Y as S,g as a,y as b,x as c,f as d,h as e,$ as f,s as g,u as h,X as i,m as j,v as k,E as l,p as m,t as n,S as o,K as p,w as q,Q as r,i as s,_ as t,R as u,U as v,H as w,J as x,V as y,q as z};
