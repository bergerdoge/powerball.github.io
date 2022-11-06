import{_ as I}from"./MainButton.vue_vue_type_script_setup_true_lang.d3b61c78.js";import{_ as E}from"./Card.vue_vue_type_script_setup_true_lang.95717730.js";import{_ as O}from"./NumberGroupInput.vue_vue_type_script_setup_true_lang.4833e54e.js";import{u as V}from"./jackpot.f1673bc8.js";import{P as A,u as M}from"./jackpot.00f31962.js";import{c as U}from"./networks.4746fe4f.js";import{E as F}from"./ethers.d4d0a239.js";import{_ as T}from"./Modal.vue_vue_type_script_setup_true_lang.37c62750.js";import{_ as W}from"./NumberGroup.vue_vue_type_script_setup_true_lang.35d22f0f.js";import{c as G,s as J}from"./api.1a230031.js";import{v as C,h as l,z as j,A as y,k as e,E as g,j as p,P as D,F as z,N as S,V as L,r as k,C as q,f as N,J as x,u as m,K as P}from"./index.a7ff99c7.js";import"./OutlineButton.vue_vue_type_script_setup_true_lang.392a01fe.js";import"./numbers.845fc6d6.js";import"./ethers.0e708041.js";import"./IconButton.vue_vue_type_script_setup_true_lang.ce7dc970.js";import"./pinia.ca26f059.js";import"./provider.82a468f4.js";import"./wallet.194519cf.js";import"./index.fbc31c5d.js";import"./index.d9d2a591.js";import"./error.1b03d1f7.js";import"./wallet.0b23724b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./loading.730bc730.js";const h=A.connect(U.contracts.lottery,F.batchRpcProvider);async function K(d){const[s,a]=await h.getDrawing(d);return{date:s.mul(1e3).toNumber(),block:a.toNumber(),max:(await h.maxPrizes()).toNumber()}}async function R(d,s,a=500){const i=[],n=await h.provider.getBlockNumber();for(let o=s;o<=n;o+=a){const _=await h.queryFilter(h.filters.TicketPrinted(d.toString()),o,Math.min(o+a-1,n));i.push(..._.map(b=>b.args._numbers.map(c=>c.toNumber())))}return i}const H=["onSubmit"],Q={class:"flex flex-col items-start space-y-4"},X=e("label",{class:"font-medium text-sm"},"Winning Numbers",-1),Y={class:"flex flex-col items-start space-y-4"},Z=e("label",{class:"font-medium text-sm"},"Prizes Count",-1),ee={class:"flex flex-col items-start space-y-2"},te={class:"flex flex-col items-start space-y-1"},se=e("label",{class:"text-sm font-medium"},"Prize",-1),ne=["value"],ae={class:"flex flex-col items-start space-y-1"},re=e("label",{class:"text-sm font-medium"},"Winners",-1),oe=["value"],le={class:"flex items-center justify-center"},ie=C({__name:"UpdateDrawingModal",props:{id:null,numbers:null,prizes:null},setup(d){const s=d;function a(i){const n=new FormData(i.target),o=n.getAll("winners[]"),_=Object.fromEntries(n.getAll("prizes[]").map((b,c)=>[b,Number.parseInt(o[c].toString())]));G(async()=>{await J(M,s.id,s.numbers,_).then(()=>window.location.reload())})}return(i,n)=>{const o=W,_=I,b=T;return l(),j(b,{title:`Update drawing #${d.id}`},{default:y(()=>[e("form",{class:"space-y-6",onSubmit:L(a,["prevent"])},[e("div",Q,[X,g(o,{numbers:d.numbers},null,8,["numbers"])]),e("div",Y,[Z,e("ul",ee,[(l(!0),p(z,null,D(d.prizes,(c,$)=>(l(),p("li",{key:$,class:"flex items-center space-x-4"},[e("div",te,[se,e("input",{value:$,class:"bg-gray-100 text-center px-4 py-2",name:"prizes[]",type:"number"},null,8,ne)]),e("div",ae,[re,e("input",{value:c,class:"bg-gray-100 text-center px-4 py-2",name:"winners[]",type:"number"},null,8,oe)])]))),128))])]),e("div",le,[g(_,{type:"submit"},{default:y(()=>[S("Submit")]),_:1})])],40,H)]),_:1},8,["title"])}}}),ce={class:"space-y-6"},ue={class:"flex items-center justify-between"},me={class:"font-bold"},de={class:"w-full overflow-x-auto"},fe={class:"border-gray-300min-w-full border text-center divide-y divide-gray-300"},pe={class:"bg-gray-50"},_e={class:"all:py-3 all:px-4 all:font-semibold"},be={class:"all:whitespace-nowrap all:px-4 all:py-3 all:font-medium"},ye={class:"w-full overflow-x-auto"},ge={class:"border border-gray-300 min-w-full text-center divide-y divide-gray-300"},ve=e("thead",{class:"bg-gray-50"},[e("tr",{class:"all:py-3 all:px-4 all:font-semibold"},[e("th",null,"Prize"),e("th",null,"Winners")])],-1),we={class:"flex items-center justify-center"},Le=C({__name:"__statistics",setup(d){const s=V(),a=k(),i=k([]),n=k(),o=k(!1);q(async()=>{!s.nextDrawingId||(a.value=await K(s.nextDrawingId),i.value=await R(s.nextDrawingId,a.value.block))});const _=N(()=>{const r=Object.fromEntries([...Array.from({length:69}).keys()].map(t=>[t+1,0]));if(i.value.length===0)return r;for(const t of i.value)for(const f of t)r[f]++;return r});function b(r,t){let f=0;for(const v of t)r.includes(v)&&f++;return f}const c=N(()=>{if(!a.value)return{};const r=Object.fromEntries([...new Array(a.value.max).keys()].map(t=>[t+1,0]));if(!n.value||i.value.length===0)return r;for(const t of i.value){const f=Math.min(b(n.value,t),a.value.max);f<=0||r[f]++}return r}),$=N(()=>{var r;return!(!s.nextDrawingId||!((r=n.value)!=null&&r.length)||Object.keys(c.value).length===0)});return(r,t)=>{const f=O,v=E,B=I;return l(),p("div",ce,[g(v,null,{default:y(()=>{var u;return[e("div",ue,[e("span",me," Current Drawing: "+x(`#${m(s).nextDrawingId} - ${new Date(((u=a.value)==null?void 0:u.date)||0).toLocaleDateString()}`),1),g(f,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=w=>n.value=w),"with-ball":!1},null,8,["modelValue"])])]}),_:1}),g(v,{title:"Occurrences"},{default:y(()=>[e("div",de,[e("table",fe,[e("thead",pe,[e("tr",_e,[(l(!0),p(z,null,D(Object.keys(m(_)),u=>(l(),p("th",{key:u},x(u),1))),128))])]),e("tbody",null,[e("tr",be,[(l(!0),p(z,null,D(Object.values(m(_)),(u,w)=>(l(),p("td",{key:w},x(u),1))),128))])])])])]),_:1}),Object.keys(m(c)).length>0?(l(),j(v,{key:0,title:"Prizes"},{default:y(()=>[e("div",ye,[e("table",ge,[ve,e("tbody",null,[(l(!0),p(z,null,D(m(c),(u,w)=>(l(),p("tr",{key:w,class:"all:whitespace-nowrap all:px-4 all:py-3 all:font-medium"},[e("td",null,x(w),1),e("td",null,x(u),1)]))),128))])])])]),_:1})):P("",!0),g(v,null,{default:y(()=>[e("div",we,[g(B,{disabled:!m($),onClick:t[1]||(t[1]=u=>o.value=!0)},{default:y(()=>[S("Update Drawing")]),_:1},8,["disabled"])])]),_:1}),m(s).nextDrawingId&&n.value&&m(c)?(l(),j(ie,{key:1,id:m(s).nextDrawingId,numbers:n.value,prizes:m(c),visible:o.value,onClose:t[2]||(t[2]=u=>o.value=!1)},null,8,["id","numbers","prizes","visible"])):P("",!0)])}}});export{Le as default};
