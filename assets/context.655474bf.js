import{u as e}from"./wallet.02b65d63.js";import{u as i}from"./jackpot.e68b6e39.js";import{g as p}from"./jackpot.9b314df3.js";import"./pinia.60a6acff.js";import"./index.b538c3c4.js";import"./numbers.845fc6d6.js";import"./ethers.0e708041.js";import"./ethers.ab33f4ef.js";import"./provider.3613600f.js";import"./index.dc389c35.js";import"./index.25b2480c.js";import"./error.9b3ee06f.js";import"./wallet.5c35fb8e.js";import"./networks.e0bc658d.js";async function s(){const t=e(),r=i();if(!t.address)return;const o=await p(t.address);t.turns=o.turns,r.tokens=o.pool.toString()}const J={install(){setInterval(s,1e3)}};export{J as context};
