import{u as ot}from"./wallet.194519cf.js";import{_ as N,s as st,u as W,f as T,a as ze,v as qe,i as z,x as Ge,n as it,y as ce,r as at,w as ct}from"./index.a7ff99c7.js";const ut={Default:()=>N(()=>import("./Default.ea830a1a.js"),["assets/Default.ea830a1a.js","assets/Footer.vue_vue_type_script_setup_true_lang.845dd9cb.js","assets/Container.a46e4f8f.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js","assets/IconButton.vue_vue_type_script_setup_true_lang.ce7dc970.js","assets/networks.4746fe4f.js","assets/token.a2686133.js","assets/ethers.d4d0a239.js","assets/ethers.0e708041.js","assets/provider.82a468f4.js","assets/wallet.194519cf.js","assets/pinia.ca26f059.js","assets/index.fbc31c5d.js","assets/index.d9d2a591.js","assets/error.1b03d1f7.js","assets/wallet.0b23724b.js","assets/Card.vue_vue_type_script_setup_true_lang.95717730.js","assets/OutlineButton.vue_vue_type_script_setup_true_lang.392a01fe.js","assets/Header.a3bc4897.js","assets/LotteryDetail.vue_vue_type_script_setup_true_lang.82bad1ec.js","assets/NumberGroup.vue_vue_type_script_setup_true_lang.35d22f0f.js","assets/jackpot.f1673bc8.js","assets/numbers.845fc6d6.js"]),"partials/Footer":()=>N(()=>import("./Footer.62ba6ac7.js"),["assets/Footer.62ba6ac7.js","assets/Footer.vue_vue_type_script_setup_true_lang.845dd9cb.js","assets/Container.a46e4f8f.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js","assets/IconButton.vue_vue_type_script_setup_true_lang.ce7dc970.js","assets/networks.4746fe4f.js","assets/token.a2686133.js","assets/ethers.d4d0a239.js","assets/ethers.0e708041.js","assets/provider.82a468f4.js","assets/wallet.194519cf.js","assets/pinia.ca26f059.js","assets/index.fbc31c5d.js","assets/index.d9d2a591.js","assets/error.1b03d1f7.js","assets/wallet.0b23724b.js"]),"partials/Header":()=>N(()=>import("./Header.a3bc4897.js").then(e=>e.H),["assets/Header.a3bc4897.js","assets/Container.a46e4f8f.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js","assets/provider.82a468f4.js","assets/wallet.194519cf.js","assets/pinia.ca26f059.js","assets/index.fbc31c5d.js","assets/index.d9d2a591.js","assets/error.1b03d1f7.js","assets/wallet.0b23724b.js"]),"partials/LotteryDetail":()=>N(()=>import("./LotteryDetail.210f8e21.js"),["assets/LotteryDetail.210f8e21.js","assets/LotteryDetail.vue_vue_type_script_setup_true_lang.82bad1ec.js","assets/Card.vue_vue_type_script_setup_true_lang.95717730.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/_plugin-vue_export-helper.cdc0426e.js","assets/index.d9d2a591.js","assets/NumberGroup.vue_vue_type_script_setup_true_lang.35d22f0f.js","assets/jackpot.f1673bc8.js","assets/pinia.ca26f059.js","assets/numbers.845fc6d6.js","assets/ethers.0e708041.js","assets/token.a2686133.js","assets/ethers.d4d0a239.js","assets/provider.82a468f4.js","assets/wallet.194519cf.js","assets/index.fbc31c5d.js","assets/error.1b03d1f7.js","assets/wallet.0b23724b.js","assets/networks.4746fe4f.js"])};function lt(e){return e.map(t=>{var n;return{path:t.path,component:ut[((n=t.meta)==null?void 0:n.layout)||"Default"],children:[{...t,path:""}]}})}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const B=typeof window<"u";function ft(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const w=Object.assign;function ue(e,t){const n={};for(const r in t){const o=t[r];n[r]=I(o)?o.map(e):e(o)}return n}const Y=()=>{},I=Array.isArray,ht=/\/$/,dt=e=>e.replace(ht,"");function le(e,t,n="/"){let r,o={},u="",d="";const g=t.indexOf("#");let a=t.indexOf("?");return g<a&&g>=0&&(a=-1),a>-1&&(r=t.slice(0,a),u=t.slice(a+1,g>-1?g:t.length),o=e(u)),g>-1&&(r=r||t.slice(0,g),d=t.slice(g,t.length)),r=vt(r!=null?r:t,n),{fullPath:r+(u&&"?")+u+d,path:r,query:o,hash:d}}function pt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Se(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&q(t.matched[r],n.matched[o])&&Ke(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gt(e[n],t[n]))return!1;return!0}function gt(e,t){return I(e)?be(e,t):I(t)?be(t,e):e===t}function be(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function vt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,u,d;for(u=0;u<r.length;u++)if(d=r[u],d!==".")if(d==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(u-(u===r.length?1:0)).join("/")}var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var X;(function(e){e.back="back",e.forward="forward",e.unknown=""})(X||(X={}));function yt(e){if(!e)if(B){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),dt(e)}const Et=/^[^#]+#/;function Rt(e,t){return e.replace(Et,"#")+t}function _t(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.pageXOffset,top:window.pageYOffset});function Pt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=_t(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function wt(e,t){he.set(e,t)}function St(e){const t=he.get(e);return he.delete(e),t}let bt=()=>location.protocol+"//"+location.host;function Ue(e,t){const{pathname:n,search:r,hash:o}=t,u=e.indexOf("#");if(u>-1){let g=o.includes(e.slice(u))?e.slice(u).length:1,a=o.slice(g);return a[0]!=="/"&&(a="/"+a),Se(a,"")}return Se(n,e)+r+o}function kt(e,t,n,r){let o=[],u=[],d=null;const g=({state:l})=>{const m=Ue(e,location),E=n.value,k=t.value;let b=0;if(l){if(n.value=m,t.value=l,d&&d===E){d=null;return}b=k?l.position-k.position:0}else r(m);o.forEach(R=>{R(n.value,E,{delta:b,type:Z.pop,direction:b?b>0?X.forward:X.back:X.unknown})})};function a(){d=n.value}function f(l){o.push(l);const m=()=>{const E=o.indexOf(l);E>-1&&o.splice(E,1)};return u.push(m),m}function s(){const{history:l}=window;!l.state||l.replaceState(w({},l.state,{scroll:te()}),"")}function c(){for(const l of u)l();u=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",s),{pauseListeners:a,listen:f,destroy:c}}function Oe(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function Ot(e){const{history:t,location:n}=window,r={value:Ue(e,n)},o={value:t.state};o.value||u(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function u(a,f,s){const c=e.indexOf("#"),l=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+a:bt()+e+a;try{t[s?"replaceState":"pushState"](f,"",l),o.value=f}catch(m){console.error(m),n[s?"replace":"assign"](l)}}function d(a,f){const s=w({},t.state,Oe(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});u(a,s,!0),r.value=a}function g(a,f){const s=w({},o.value,t.state,{forward:a,scroll:te()});u(s.current,s,!0);const c=w({},Oe(r.value,a,null),{position:s.position+1},f);u(a,c,!1),r.value=a}return{location:r,state:o,push:g,replace:d}}function At(e){e=yt(e);const t=Ot(e),n=kt(e,t.state,t.location,t.replace);function r(u,d=!0){d||n.pauseListeners(),history.go(u)}const o=w({location:"",base:e,go:r,createHref:Rt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Ct(e){return typeof e=="string"||e&&typeof e=="object"}function Qe(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fe=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function G(e,t){return w(new Error,{type:e,[Fe]:!0},t)}function j(e,t){return e instanceof Error&&Fe in e&&(t==null||!!(e.type&t))}const Ce="[^/]+?",xt={sensitive:!1,strict:!1,start:!0,end:!0},Lt=/[.+*?^${}()[\]/\\]/g;function Tt(e,t){const n=w({},xt,t),r=[];let o=n.start?"^":"";const u=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let c=0;c<f.length;c++){const l=f[c];let m=40+(n.sensitive?.25:0);if(l.type===0)c||(o+="/"),o+=l.value.replace(Lt,"\\$&"),m+=40;else if(l.type===1){const{value:E,repeatable:k,optional:b,regexp:R}=l;u.push({name:E,repeatable:k,optional:b});const P=R||Ce;if(P!==Ce){m+=10;try{new RegExp(`(${P})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${E}" (${P}): `+L.message)}}let C=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;c||(C=b&&f.length<2?`(?:/${C})`:"/"+C),b&&(C+="?"),o+=C,m+=20,b&&(m+=-8),k&&(m+=-20),P===".*"&&(m+=-50)}s.push(m)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function g(f){const s=f.match(d),c={};if(!s)return null;for(let l=1;l<s.length;l++){const m=s[l]||"",E=u[l-1];c[E.name]=m&&E.repeatable?m.split("/"):m}return c}function a(f){let s="",c=!1;for(const l of e){(!c||!s.endsWith("/"))&&(s+="/"),c=!1;for(const m of l)if(m.type===0)s+=m.value;else if(m.type===1){const{value:E,repeatable:k,optional:b}=m,R=E in f?f[E]:"";if(I(R)&&!k)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const P=I(R)?R.join("/"):R;if(!P)if(b)l.length<2&&(s.endsWith("/")?s=s.slice(0,-1):c=!0);else throw new Error(`Missing required param "${E}"`);s+=P}}return s||"/"}return{re:d,score:r,keys:u,parse:g,stringify:a}}function It(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Mt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const u=It(r[n],o[n]);if(u)return u;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jt={type:0,value:""},Nt=/[a-zA-Z0-9_]/;function $t(e){if(!e)return[[]];if(e==="/")return[[jt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const o=[];let u;function d(){u&&o.push(u),u=[]}let g=0,a,f="",s="";function c(){!f||(n===0?u.push({type:0,value:f}):n===1||n===2||n===3?(u.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:f,regexp:s,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=a}for(;g<e.length;){if(a=e[g++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&c(),d()):a===":"?(c(),n=1):l();break;case 4:l(),n=r;break;case 1:a==="("?n=2:Nt.test(a)?l():(c(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&g--);break;case 2:a===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+a:n=3:s+=a;break;case 3:c(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&g--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),c(),d(),o}function Ht(e,t,n){const r=Tt($t(e.path),n),o=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Dt(e,t){const n=[],r=new Map;t=Ie({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function u(s,c,l){const m=!l,E=Vt(s);E.aliasOf=l&&l.record;const k=Ie(t,s),b=[E];if("alias"in s){const C=typeof s.alias=="string"?[s.alias]:s.alias;for(const L of C)b.push(w({},E,{components:l?l.record.components:E.components,path:L,aliasOf:l?l.record:E}))}let R,P;for(const C of b){const{path:L}=C;if(c&&L[0]!=="/"){const D=c.record.path,M=D[D.length-1]==="/"?"":"/";C.path=c.record.path+(L&&M+L)}if(R=Ht(C,c,k),l?l.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),m&&s.name&&!Te(R)&&d(s.name)),E.children){const D=E.children;for(let M=0;M<D.length;M++)u(D[M],R,l&&l.children[M])}l=l||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&a(R)}return P?()=>{d(P)}:Y}function d(s){if(Qe(s)){const c=r.get(s);c&&(r.delete(s),n.splice(n.indexOf(c),1),c.children.forEach(d),c.alias.forEach(d))}else{const c=n.indexOf(s);c>-1&&(n.splice(c,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function g(){return n}function a(s){let c=0;for(;c<n.length&&Mt(s,n[c])>=0&&(s.record.path!==n[c].record.path||!We(s,n[c]));)c++;n.splice(c,0,s),s.record.name&&!Te(s)&&r.set(s.record.name,s)}function f(s,c){let l,m={},E,k;if("name"in s&&s.name){if(l=r.get(s.name),!l)throw G(1,{location:s});k=l.record.name,m=w(Le(c.params,l.keys.filter(P=>!P.optional).map(P=>P.name)),s.params&&Le(s.params,l.keys.map(P=>P.name))),E=l.stringify(m)}else if("path"in s)E=s.path,l=n.find(P=>P.re.test(E)),l&&(m=l.parse(E),k=l.record.name);else{if(l=c.name?r.get(c.name):n.find(P=>P.re.test(c.path)),!l)throw G(1,{location:s,currentLocation:c});k=l.record.name,m=w({},c.params,s.params),E=l.stringify(m)}const b=[];let R=l;for(;R;)b.unshift(R.record),R=R.parent;return{name:k,path:E,params:m,matched:b,meta:zt(b)}}return e.forEach(s=>u(s)),{addRoute:u,resolve:f,removeRoute:d,getRoutes:g,getRecordMatcher:o}}function Le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Vt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Te(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zt(e){return e.reduce((t,n)=>w(t,n.meta),{})}function Ie(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function We(e,t){return t.children.some(n=>n===e||We(e,n))}const Ye=/#/g,qt=/&/g,Gt=/\//g,Kt=/=/g,Ut=/\?/g,Xe=/\+/g,Qt=/%5B/g,Ft=/%5D/g,Ze=/%5E/g,Wt=/%60/g,Je=/%7B/g,Yt=/%7C/g,et=/%7D/g,Xt=/%20/g;function me(e){return encodeURI(""+e).replace(Yt,"|").replace(Qt,"[").replace(Ft,"]")}function Zt(e){return me(e).replace(Je,"{").replace(et,"}").replace(Ze,"^")}function de(e){return me(e).replace(Xe,"%2B").replace(Xt,"+").replace(Ye,"%23").replace(qt,"%26").replace(Wt,"`").replace(Je,"{").replace(et,"}").replace(Ze,"^")}function Jt(e){return de(e).replace(Kt,"%3D")}function en(e){return me(e).replace(Ye,"%23").replace(Ut,"%3F")}function tn(e){return e==null?"":en(e).replace(Gt,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function nn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const u=r[o].replace(Xe," "),d=u.indexOf("="),g=ee(d<0?u:u.slice(0,d)),a=d<0?null:ee(u.slice(d+1));if(g in t){let f=t[g];I(f)||(f=t[g]=[f]),f.push(a)}else t[g]=a}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Jt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(u=>u&&de(u)):[r&&de(r)]).forEach(u=>{u!==void 0&&(t+=(t.length?"&":"")+n,u!=null&&(t+="="+u))})}return t}function rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const on=Symbol(""),je=Symbol(""),ge=Symbol(""),ve=Symbol(""),pe=Symbol("");function F(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function H(e,t,n,r,o){const u=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,g)=>{const a=c=>{c===!1?g(G(4,{from:n,to:t})):c instanceof Error?g(c):Ct(c)?g(G(2,{from:t,to:c})):(u&&r.enterCallbacks[o]===u&&typeof c=="function"&&u.push(c),d())},f=e.call(r&&r.instances[o],t,n,a);let s=Promise.resolve(f);e.length<3&&(s=s.then(a)),s.catch(c=>g(c))})}function fe(e,t,n,r){const o=[];for(const u of e)for(const d in u.components){let g=u.components[d];if(!(t!=="beforeRouteEnter"&&!u.instances[d]))if(sn(g)){const f=(g.__vccOpts||g)[t];f&&o.push(H(f,n,r,u,d))}else{let a=g();o.push(()=>a.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${u.path}"`));const s=ft(f)?f.default:f;u.components[d]=s;const l=(s.__vccOpts||s)[t];return l&&H(l,n,r,u,d)()}))}}return o}function sn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ne(e){const t=z(ge),n=z(ve),r=T(()=>t.resolve(W(e.to))),o=T(()=>{const{matched:a}=r.value,{length:f}=a,s=a[f-1],c=n.matched;if(!s||!c.length)return-1;const l=c.findIndex(q.bind(null,s));if(l>-1)return l;const m=$e(a[f-2]);return f>1&&$e(s)===m&&c[c.length-1].path!==m?c.findIndex(q.bind(null,a[f-2])):l}),u=T(()=>o.value>-1&&ln(n.params,r.value.params)),d=T(()=>o.value>-1&&o.value===n.matched.length-1&&Ke(n.params,r.value.params));function g(a={}){return un(a)?t[W(e.replace)?"replace":"push"](W(e.to)).catch(Y):Promise.resolve()}return{route:r,href:T(()=>r.value.href),isActive:u,isExactActive:d,navigate:g}}const an=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ne,setup(e,{slots:t}){const n=ze(Ne(e)),{options:r}=z(ge),o=T(()=>({[He(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[He(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const u=t.default&&t.default(n);return e.custom?u:Ge("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},u)}}}),cn=an;function un(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ln(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!I(o)||o.length!==r.length||r.some((u,d)=>u!==o[d]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const He=(e,t,n)=>e!=null?e:t!=null?t:n,fn=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=z(pe),o=T(()=>e.route||r.value),u=z(je,0),d=T(()=>{let f=W(u);const{matched:s}=o.value;let c;for(;(c=s[f])&&!c.components;)f++;return f}),g=T(()=>o.value.matched[d.value]);ce(je,T(()=>d.value+1)),ce(on,g),ce(pe,o);const a=at();return ct(()=>[a.value,g.value,e.name],([f,s,c],[l,m,E])=>{s&&(s.instances[c]=f,m&&m!==s&&f&&f===l&&(s.leaveGuards.size||(s.leaveGuards=m.leaveGuards),s.updateGuards.size||(s.updateGuards=m.updateGuards))),f&&s&&(!m||!q(s,m)||!l)&&(s.enterCallbacks[c]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,c=g.value,l=c&&c.components[s];if(!l)return De(n.default,{Component:l,route:f});const m=c.props[s],E=m?m===!0?f.params:typeof m=="function"?m(f):m:null,b=Ge(l,w({},E,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(c.instances[s]=null)},ref:a}));return De(n.default,{Component:b,route:f})||b}}});function De(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const hn=fn;function dn(e){const t=Dt(e.routes,e),n=e.parseQuery||nn,r=e.stringifyQuery||Me,o=e.history,u=F(),d=F(),g=F(),a=st($);let f=$;B&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=ue.bind(null,i=>""+i),c=ue.bind(null,tn),l=ue.bind(null,ee);function m(i,p){let h,v;return Qe(i)?(h=t.getRecordMatcher(i),v=p):v=i,t.addRoute(v,h)}function E(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(i=>i.record)}function b(i){return!!t.getRecordMatcher(i)}function R(i,p){if(p=w({},p||a.value),typeof i=="string"){const y=le(n,i,p.path),A=t.resolve({path:y.path},p),Q=o.createHref(y.fullPath);return w(y,A,{params:l(A.params),hash:ee(y.hash),redirectedFrom:void 0,href:Q})}let h;if("path"in i)h=w({},i,{path:le(n,i.path,p.path).path});else{const y=w({},i.params);for(const A in y)y[A]==null&&delete y[A];h=w({},i,{params:c(i.params)}),p.params=c(p.params)}const v=t.resolve(h,p),S=i.hash||"";v.params=s(l(v.params));const O=pt(r,w({},i,{hash:Zt(S),path:v.path})),_=o.createHref(O);return w({fullPath:O,hash:S,query:r===Me?rn(i.query):i.query||{}},v,{redirectedFrom:void 0,href:_})}function P(i){return typeof i=="string"?le(n,i,a.value.path):w({},i)}function C(i,p){if(f!==i)return G(8,{from:p,to:i})}function L(i){return K(i)}function D(i){return L(w(P(i),{replace:!0}))}function M(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),w({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function K(i,p){const h=f=R(i),v=a.value,S=i.state,O=i.force,_=i.replace===!0,y=M(h);if(y)return K(w(P(y),{state:typeof y=="object"?w({},S,y.state):S,force:O,replace:_}),p||h);const A=h;A.redirectedFrom=p;let Q;return!O&&mt(r,v,h)&&(Q=G(16,{to:A,from:v}),Pe(v,v,!0,!1)),(Q?Promise.resolve(Q):ye(A,v)).catch(x=>j(x)?j(x,2)?x:oe(x):re(x,A,v)).then(x=>{if(x){if(j(x,2))return K(w({replace:_},P(x.to),{state:typeof x.to=="object"?w({},S,x.to.state):S,force:O}),p||A)}else x=Re(A,v,!0,_,S);return Ee(A,v,x),x})}function tt(i,p){const h=C(i,p);return h?Promise.reject(h):Promise.resolve()}function ye(i,p){let h;const[v,S,O]=pn(i,p);h=fe(v.reverse(),"beforeRouteLeave",i,p);for(const y of v)y.leaveGuards.forEach(A=>{h.push(H(A,i,p))});const _=tt.bind(null,i,p);return h.push(_),V(h).then(()=>{h=[];for(const y of u.list())h.push(H(y,i,p));return h.push(_),V(h)}).then(()=>{h=fe(S,"beforeRouteUpdate",i,p);for(const y of S)y.updateGuards.forEach(A=>{h.push(H(A,i,p))});return h.push(_),V(h)}).then(()=>{h=[];for(const y of i.matched)if(y.beforeEnter&&!p.matched.includes(y))if(I(y.beforeEnter))for(const A of y.beforeEnter)h.push(H(A,i,p));else h.push(H(y.beforeEnter,i,p));return h.push(_),V(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=fe(O,"beforeRouteEnter",i,p),h.push(_),V(h))).then(()=>{h=[];for(const y of d.list())h.push(H(y,i,p));return h.push(_),V(h)}).catch(y=>j(y,8)?y:Promise.reject(y))}function Ee(i,p,h){for(const v of g.list())v(i,p,h)}function Re(i,p,h,v,S){const O=C(i,p);if(O)return O;const _=p===$,y=B?history.state:{};h&&(v||_?o.replace(i.fullPath,w({scroll:_&&y&&y.scroll},S)):o.push(i.fullPath,S)),a.value=i,Pe(i,p,h,_),oe()}let U;function nt(){U||(U=o.listen((i,p,h)=>{if(!we.listening)return;const v=R(i),S=M(v);if(S){K(w(S,{replace:!0}),v).catch(Y);return}f=v;const O=a.value;B&&wt(ke(O.fullPath,h.delta),te()),ye(v,O).catch(_=>j(_,12)?_:j(_,2)?(K(_.to,v).then(y=>{j(y,20)&&!h.delta&&h.type===Z.pop&&o.go(-1,!1)}).catch(Y),Promise.reject()):(h.delta&&o.go(-h.delta,!1),re(_,v,O))).then(_=>{_=_||Re(v,O,!1),_&&(h.delta&&!j(_,8)?o.go(-h.delta,!1):h.type===Z.pop&&j(_,20)&&o.go(-1,!1)),Ee(v,O,_)}).catch(Y)}))}let ne=F(),_e=F(),J;function re(i,p,h){oe(i);const v=_e.list();return v.length?v.forEach(S=>S(i,p,h)):console.error(i),Promise.reject(i)}function rt(){return J&&a.value!==$?Promise.resolve():new Promise((i,p)=>{ne.add([i,p])})}function oe(i){return J||(J=!i,nt(),ne.list().forEach(([p,h])=>i?h(i):p()),ne.reset()),i}function Pe(i,p,h,v){const{scrollBehavior:S}=e;if(!B||!S)return Promise.resolve();const O=!h&&St(ke(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return it().then(()=>S(i,p,O)).then(_=>_&&Pt(_)).catch(_=>re(_,i,p))}const se=i=>o.go(i);let ie;const ae=new Set,we={currentRoute:a,listening:!0,addRoute:m,removeRoute:E,hasRoute:b,getRoutes:k,resolve:R,options:e,push:L,replace:D,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:u.add,beforeResolve:d.add,afterEach:g.add,onError:_e.add,isReady:rt,install(i){const p=this;i.component("RouterLink",cn),i.component("RouterView",hn),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>W(a)}),B&&!ie&&a.value===$&&(ie=!0,L(o.location).catch(S=>{}));const h={};for(const S in $)h[S]=T(()=>a.value[S]);i.provide(ge,p),i.provide(ve,ze(h)),i.provide(pe,a);const v=i.unmount;ae.add(i),i.unmount=function(){ae.delete(i),ae.size<1&&(f=$,U&&U(),U=null,a.value=$,ie=!1,J=!1),v()}}};return we}function V(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function pn(e,t){const n=[],r=[],o=[],u=Math.max(t.matched.length,e.matched.length);for(let d=0;d<u;d++){const g=t.matched[d];g&&(e.matched.find(f=>q(f,g))?r.push(g):n.push(g));const a=e.matched[d];a&&(t.matched.find(f=>q(f,a))||o.push(a))}return[n,r,o]}function _n(){return z(ve)}function Ve(e,...t){return t.reduce((n,r)=>{const o=Object.assign({},n.meta,r.meta);return Object.assign(n,r),n.meta=o,n},e)}const mn={meta:{auth:!0,showHome:!0,showPlay:!1}},gn={meta:{auth:!0,showHome:!0,showTickets:!1}},Be=[{path:"/",name:"/",component:()=>N(()=>import("./index.6097c1e2.js"),["assets/index.6097c1e2.js","assets/Card.vue_vue_type_script_setup_true_lang.95717730.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/_plugin-vue_export-helper.cdc0426e.js"])},{path:"/__statistics",name:"/__statistics",component:()=>N(()=>import("./__statistics.c3899f93.js"),["assets/__statistics.c3899f93.js","assets/MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/Card.vue_vue_type_script_setup_true_lang.95717730.js","assets/NumberGroupInput.vue_vue_type_script_setup_true_lang.4833e54e.js","assets/Modal.vue_vue_type_script_setup_true_lang.37c62750.js","assets/IconButton.vue_vue_type_script_setup_true_lang.ce7dc970.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/OutlineButton.vue_vue_type_script_setup_true_lang.392a01fe.js","assets/NumberGroup.vue_vue_type_script_setup_true_lang.35d22f0f.js","assets/numbers.845fc6d6.js","assets/ethers.0e708041.js","assets/jackpot.f1673bc8.js","assets/pinia.ca26f059.js","assets/jackpot.00f31962.js","assets/ethers.d4d0a239.js","assets/provider.82a468f4.js","assets/wallet.194519cf.js","assets/index.fbc31c5d.js","assets/index.d9d2a591.js","assets/error.1b03d1f7.js","assets/wallet.0b23724b.js","assets/networks.4746fe4f.js","assets/api.1a230031.js","assets/loading.730bc730.js"])},{path:"/:all(.*)",name:"/[...all]",component:()=>N(()=>import("./_...all_.9b9e797a.js"),["assets/_...all_.9b9e797a.js","assets/Card.vue_vue_type_script_setup_true_lang.95717730.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js","assets/wallet.194519cf.js","assets/pinia.ca26f059.js"])},Ve({path:"/choose-numbers",name:"/choose-numbers",component:()=>N(()=>import("./choose-numbers.0d4eaf8d.js"),["assets/choose-numbers.0d4eaf8d.js","assets/Card.vue_vue_type_script_setup_true_lang.95717730.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/Modal.vue_vue_type_script_setup_true_lang.37c62750.js","assets/IconButton.vue_vue_type_script_setup_true_lang.ce7dc970.js","assets/MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/wallet.194519cf.js","assets/pinia.ca26f059.js","assets/OutlineButton.vue_vue_type_script_setup_true_lang.392a01fe.js","assets/numbers.845fc6d6.js","assets/ethers.0e708041.js","assets/Loading.2e34bc99.js","assets/LoadingIcon.c18add63.js","assets/jackpot.f1673bc8.js","assets/api.1a230031.js","assets/loading.730bc730.js","assets/error.1b03d1f7.js","assets/networks.4746fe4f.js","assets/jackpot.00f31962.js","assets/ethers.d4d0a239.js","assets/provider.82a468f4.js","assets/index.fbc31c5d.js","assets/index.d9d2a591.js","assets/wallet.0b23724b.js","assets/token.a2686133.js"])},mn),Ve({path:"/tickets",name:"/tickets",component:()=>N(()=>import("./tickets.34954373.js"),["assets/tickets.34954373.js","assets/Card.vue_vue_type_script_setup_true_lang.95717730.js","assets/index.a7ff99c7.js","assets/index.701f640c.css","assets/NumberGroup.vue_vue_type_script_setup_true_lang.35d22f0f.js","assets/MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js","assets/api.1a230031.js","assets/loading.730bc730.js","assets/error.1b03d1f7.js","assets/networks.4746fe4f.js","assets/jackpot.00f31962.js","assets/numbers.845fc6d6.js","assets/ethers.0e708041.js","assets/ethers.d4d0a239.js","assets/provider.82a468f4.js","assets/wallet.194519cf.js","assets/pinia.ca26f059.js","assets/index.fbc31c5d.js","assets/index.d9d2a591.js","assets/wallet.0b23724b.js","assets/token.a2686133.js","assets/Loading.2e34bc99.js","assets/LoadingIcon.c18add63.js","assets/_plugin-vue_export-helper.cdc0426e.js"])},gn)];function vn(e){const{extendRoutes:t}=e;return dn(Object.assign(e,{routes:typeof t=="function"?t(Be):Be}))}const yn={priority:9997,install({use:e}){const t=vn({extendRoutes:r=>lt(r),history:At()}),n=ot();t.beforeEach(r=>{if(r.meta.auth&&!n.address)return{path:"/"}}),e(t)}},Pn=Object.freeze(Object.defineProperty({__proto__:null,router:yn},Symbol.toStringTag,{value:"Module"}));export{cn as R,Pn as r,_n as u};
