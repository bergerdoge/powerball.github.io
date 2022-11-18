var g=Object.defineProperty;var k=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var d=(e,n,t)=>(k(e,typeof n!="symbol"?n+"":n,t),t);import{h as s}from"./numbers.845fc6d6.js";import{I as v,C as _,M as x,E as o,a as T,f as w}from"./ethers.d3dee471.js";import{B as h}from"./ethers.0e708041.js";import{c as i}from"./networks.d485a67c.js";const p=[{inputs:[{internalType:"contract ERC20",name:"_token",type:"address"},{internalType:"contract ERC20",name:"_rewardsToken",type:"address"},{internalType:"uint256",name:"_size",type:"uint256"},{internalType:"uint256",name:"_maxPrizesNum",type:"uint256"},{internalType:"uint256",name:"_end",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"AlreadyDrawed",type:"error"},{inputs:[],name:"InvalidDrawing",type:"error"},{inputs:[],name:"InvalidPrize",type:"error"},{inputs:[],name:"InvalidPrizeNumbers",type:"error"},{inputs:[],name:"InvalidTicket",type:"error"},{inputs:[],name:"NotAWinner",type:"error"},{inputs:[],name:"NotEnoughTurns",type:"error"},{inputs:[],name:"OutOfTime",type:"error"},{inputs:[],name:"PoolIsEmpty",type:"error"},{inputs:[],name:"Unexpected",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"_drawingId",type:"uint256"},{indexed:!0,internalType:"address",name:"_account",type:"address"},{indexed:!0,internalType:"uint256",name:"_ticketId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"TicketClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"_drawingId",type:"uint256"},{indexed:!0,internalType:"address",name:"_account",type:"address"},{indexed:!0,internalType:"uint256",name:"_ticketId",type:"uint256"},{indexed:!1,internalType:"uint256[]",name:"_numbers",type:"uint256[]"}],name:"TicketPrinted",type:"event"},{inputs:[],name:"activeDrawingId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_drawingDate",type:"uint256"}],name:"addDrawing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_ticketIds",type:"uint256[]"}],name:"batchClaimTickets",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_ticketId",type:"uint256"}],name:"claimTicket",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_drawingId",type:"uint256"}],name:"getDrawing",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_drawingId",type:"uint256"}],name:"getDrawingNumbers",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"},{internalType:"uint256",name:"_ticketId",type:"uint256"}],name:"getPrize",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_drawingId",type:"uint256"},{internalType:"uint256",name:"_prizeNumbers",type:"uint256"}],name:"getPrizeTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"},{internalType:"uint256",name:"_ticketId",type:"uint256"}],name:"getTicket",outputs:[{components:[{internalType:"uint256",name:"buyAt",type:"uint256"},{internalType:"uint256",name:"drawingId",type:"uint256"},{internalType:"bool",name:"isClaimed",type:"bool"},{internalType:"uint256[]",name:"numbers",type:"uint256[]"}],internalType:"struct PowerBall.Ticket",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getTicketIds",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getTurns",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxPrizes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_drawingId",type:"uint256"},{internalType:"uint256[][]",name:"_numbers",type:"uint256[][]"}],name:"printTickets",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardsPool",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardsToken",outputs:[{internalType:"contract ERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[2][]",name:"_data",type:"uint256[2][]"}],name:"setPrizes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract ERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_drawingId",type:"uint256"},{internalType:"uint256[]",name:"_winningNumbers",type:"uint256[]"},{internalType:"uint256[2][]",name:"_winnerCount",type:"uint256[2][]"}],name:"updateDrawingResult",outputs:[],stateMutability:"nonpayable",type:"function"}];class r{static createInterface(){return new v(p)}static connect(n,t){return new _(n,p,t)}}d(r,"abi",p);const b=new x({ethersProvider:o.rpcProvider}),I=r.connect(i.contracts.lottery,o.rpcProvider),y=async()=>r.connect(i.contracts.lottery,(await o.Web3().getProvider()).getSigner());async function R(e,n,t){return(await y()).updateDrawingResult(e,n,Object.entries(t))}async function z(e){return(await y()).claimTicket(e)}async function E(e,n){return(await y()).printTickets(e,n.map(t=>t.numbers||[]).filter(t=>t.length>0))}async function O(){const e=await I.activeDrawingId();if(e.lte(0))return{tokens:void 0,result:void 0,resultDate:void 0,nextDrawing:void 0,nextDrawingId:e.toNumber()};const n=[{reference:"token",abi:T.abi,contractAddress:i.contracts.token,calls:[{reference:"decimals",methodName:"decimals",methodParameters:[]}]},{reference:"jackpot",abi:r.abi,contractAddress:i.contracts.lottery,calls:[{reference:"tokens",methodName:"rewardsPool",methodParameters:[]},{reference:"numbers",methodName:"getDrawingNumbers",methodParameters:[e.sub(1)]},{reference:"date",methodName:"getDrawing",methodParameters:[e.sub(1)]},{reference:"nextDrawing",methodName:"getDrawing",methodParameters:[e]}]}],t=(await b.call(n)).results,u=t.token.callsReturnContext[0].returnValues[0],a=t.jackpot.callsReturnContext,c=a[1].returnValues.map(f=>s(f.hex)),l=s(a[2].returnValues[0].hex),m=s(a[3].returnValues[0].hex);return{tokens:w(a[0].returnValues[0],u),result:c.length>0?{numbers:c}:void 0,resultDate:l>0?l*1e3:void 0,nextDrawing:m>0?m*1e3:void 0,nextDrawingId:e.toNumber()}}async function V(e){const n=[{reference:"token",abi:T.abi,contractAddress:i.contracts.token,calls:[{reference:"decimals",methodName:"decimals",methodParameters:[]}]},{reference:"lottery",abi:r.abi,contractAddress:i.contracts.lottery,calls:[{reference:"pool",methodName:"rewardsPool",methodParameters:[]},{reference:"turns",methodName:"getTurns",methodParameters:[e]}]}],t=(await b.call(n)).results,u=t.lottery.callsReturnContext,a=t.token.callsReturnContext[0].returnValues[0];return{pool:w(h.from(u[0].returnValues[0].hex),a),turns:s(u[1].returnValues[0].hex)}}export{r as P,O as a,z as c,V as g,E as p,R as u};
