import{u as c,a as l}from"./loading.082cbd49.js";import{u}from"./error.7cedc883.js";import{e as s}from"./networks.9fa95cd2.js";import{P as f}from"./jackpot.a40b97db.js";const n=c(),i=u(),r=l(),v=async(o,...e)=>{r.value="Waiting for confirmation";const{wait:a,hash:t}=await o(...e);if(r.value="<p>Waiting for transaction</p>"+s(t),!(await a()).status)throw new Error("<p>Transaction Failed!</p>"+s(t))},g=async(o,...e)=>{r.value="Please wait",n.value=!0;try{await o(...e)}catch(a){if(a.error&&a.error.data&&a.error.data.data)try{a.reason=f.createInterface().getError(a.error.data.data).name}catch{a.reason="Unknown error"}a.reason?i.value=a.reason:(a==null?void 0:a.code)!=4001&&(i.value="Unknown Error",console.error(a))}n.value=!1,r.value=void 0};export{g as c,v as s};
