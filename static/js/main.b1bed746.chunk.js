(this["webpackJsonpcode-explorer"]=this["webpackJsonpcode-explorer"]||[]).push([[0],{210:function(e,t){},282:function(e,t,a){},310:function(e,t){},312:function(e,t){},344:function(e,t){},345:function(e,t){},395:function(e,t){},398:function(e,t){},614:function(e,t,a){},615:function(e,t,a){},616:function(e,t,a){},617:function(e,t,a){},618:function(e,t,a){},619:function(e,t,a){},620:function(e,t,a){"use strict";a.r(t);a(278),a(279),a(281),a(282);var n=a(0),l=a.n(n),r=a(272),c=a.n(r),s=a(23),o=a(7),i=a(14);const m="/cosmwasm.wasm.v1.MsgStoreCode",u="/cosmwasm.wasm.v1.MsgInstantiateContract",d="/cosmwasm.wasm.v1.MsgExecuteContract";function E(e){return"/cosmos.bank.v1beta1.MsgSend"===e.typeUrl&&!!e.value}const g={nodeUrl:"",client:null,typeRegistry:new o.Registry([[m,s.MsgStoreCode],[u,s.MsgInstantiateContract],[d,s.MsgExecuteContract]]),resetClient:()=>{},setUserAddress:()=>{},setSigningClient:()=>{}},p=l.a.createContext(g);var h=a(18),f=a(10);const v={devnet:{nodeUrls:["https://rpc.osmosis.zone"],denominations:["uosmo","uion"],addressPrefix:"osmo",gasPrice:o.GasPrice.fromString("0.25uosmo")},cliffnet:{nodeUrls:["https://rpc.cliffnet.cosmwasm.com"],denominations:["upebble","urock"],addressPrefix:"wasm",gasPrice:o.GasPrice.fromString("0.25upebble")}};const b={backend:function(){const e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND||"devnet",t=v[e];if(!t)throw new Error(`No backend found for the given ID "${e}"`);return t}(),deployment:{routerType:"hash-router"}},N="_\u2588_ErrorState_\u2588_",w="_\u2588_LoadingState_\u2588_";function y(e){return!!Object(o.isNonNullObject)(e)&&e.type===N}function x(e){return!!Object(o.isNonNullObject)(e)&&e.type===w}const C={type:N},S={type:w};function k(e){let{urls:t,currentUrl:a,urlChanged:r}=e;return 1===t.length?l.a.createElement(n.Fragment,null,a):l.a.createElement(n.Fragment,null,l.a.createElement("button",{className:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},t.map((e=>l.a.createElement("button",{key:e,className:"dropdown-item"+(e===a?" active":""),type:"button",onClick:()=>r(e)},e)))))}function I(e){let{htmlId:t,chainId:a,height:n}=e;const r=l.a.useContext(p);return l.a.createElement("div",{className:"modal fade",id:t,tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Node info"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},"Endpoint: ",r.nodeUrl,l.a.createElement("br",null),"Chain ID: ",x(a)?"Loading \u2026":y(a)?"Error":a,l.a.createElement("br",null),"Height: ",x(n)?"Loading \u2026":y(n)?"Error":n))))}const T={borderColor:"rgba(255, 255, 255, 0.8)"},L={color:"#f0f0f0"};function U(){return l.a.createElement(n.Fragment,null," | ")}function A(){const{client:e,nodeUrl:t,resetClient:a}=l.a.useContext(p),[n,r]=l.a.useState(S),[c,s]=l.a.useState(S),o=l.a.useCallback((()=>{null===e||void 0===e||e.getHeight().then(s).catch((()=>s(C)))}),[e]);return l.a.useEffect((()=>{null===e||void 0===e||e.getChainId().then(r).catch((()=>r(C))),o()}),[e,o]),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("hr",{style:T}),l.a.createElement(I,{htmlId:"nodeInfoModal",chainId:n,height:c}),l.a.createElement("div",{style:L,className:"dropdown text-center font-weight-light mb-3"},"Endpoint"," ",l.a.createElement(k,{currentUrl:t,urls:b.backend.nodeUrls,urlChanged:e=>a(e)})," ",l.a.createElement("button",{type:"button",className:"btn btn-sm btn-secondary","data-toggle":"modal","data-target":"#nodeInfoModal",onClick:o},"Node info"),l.a.createElement(U,null),l.a.createElement("a",{href:"https://github.com/CosmWasm/code-explorer",style:L},"Fork me on GitHub"))))}var M=a(273);function O(e){const t="burner-wallet",a=localStorage.getItem(t);if(a&&!e)return a;const n=e||o.Bip39.encode(o.Random.getBytes(16)).toString();return localStorage.setItem(t,n),n}function _(e,t){return async()=>{const a=await e.getChainId();await async function(e){const t=window;if(!t.getOfflineSigner||!t.keplr)throw new Error("Please install keplr extension");if(!t.keplr.experimentalSuggestChain)throw new Error("Please use the recent version of keplr extension");try{await t.keplr.experimentalSuggestChain(e)}catch{throw new Error("Failed to suggest the chain")}}(t);const n=window;return await n.keplr.enable(a),n.getOfflineSigner(a)}}async function j(e,t){const a=O(t),n=Object(o.makeCosmoshubPath)(0);return o.DirectSecp256k1HdWallet.fromMnemonic(a,{hdPaths:[n],prefix:e})}async function P(e){const t=12e4,a=await M.a.create(t,t);return new o.LedgerSigner(a,{hdPaths:[Object(o.makeCosmoshubPath)(0)],prefix:e})}async function B(e,t){const a=await e(b.backend.addressPrefix,t),n=(await a.getAccounts())[0].address,l=await async function(e){const{nodeUrls:t}=b.backend,a=t[0],n=new o.Registry([[m,s.MsgStoreCode],[u,s.MsgInstantiateContract],[d,s.MsgExecuteContract]]);return o.SigningCosmWasmClient.connectWithSigner(a,e,{registry:n})}(a);return[n,l]}function H(){const e=navigator;return!(null!==e&&void 0!==e&&e.usb)}function $(){const{userAddress:e,setUserAddress:t,setSigningClient:a,client:n}=l.a.useContext(p),[r,c]=l.a.useState(),[s,o]=l.a.useState(!1),[i,m]=l.a.useState();async function u(e){o(!0),m(void 0);try{const[n,l]=await B(e,r);t(n),a(l)}catch(i){m(i.message)}o(!1)}function d(){m(void 0),t(void 0),c(void 0),a(void 0)}const E=!!e;return l.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},i?l.a.createElement("div",{className:"mr-3 p-2 rounded text-danger"},i):null,E?l.a.createElement("button",{className:"btn btn-primary",onClick:d},"Logout"):function(){const{keplrChainInfo:e}=b.backend;let t;return void 0!==e&&null!==n&&(t=l.a.createElement("button",{className:"dropdown-item",onClick:async()=>u(_(n,e))},"Keplr wallet")),s?l.a.createElement("button",{className:"btn btn-primary",type:"button",disabled:!0},l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mr-3 p-2 rounded "},l.a.createElement("span",{title:"Mnemonic for burner wallet"},"Mnemonic:"),l.a.createElement("input",{className:"ml-3 flex-grow-1",value:r,onChange:e=>c(e.target.value)})),l.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Login"),l.a.createElement("div",{className:"dropdown-menu"},l.a.createElement("h6",{className:"dropdown-header"},"with"),l.a.createElement("button",{className:"dropdown-item",onClick:()=>u(j)},"Browser wallet"),t,l.a.createElement("button",{className:"dropdown-item",onClick:()=>u(P),disabled:H()},"Ledger wallet")))}())}function R(){const{userAddress:e}=l.a.useContext(p);return e?l.a.createElement("div",{className:"mr-3 p-2 rounded "},l.a.createElement("span",null,"My address: "),l.a.createElement("span",null,e)):l.a.createElement(l.a.Fragment,null)}function F(){return l.a.createElement("header",{className:"mt-3 p-0 d-flex align-items-center justify-content-end container contract-container"},l.a.createElement(R,null),l.a.createElement($,null))}function D(e,t){if(e.length<=t)return e;const a=Math.ceil((t-"\u2026".length)/2),n=Math.floor((t-"\u2026".length)/2);return e.slice(0,a)+"\u2026"+e.slice(e.length-n,e.length)}function q(e){var t;if(null!==(t=e.denom)&&void 0!==t&&t.startsWith("u")){var a;const t=e.denom.slice(1).toUpperCase();return o.Decimal.fromAtomics(null!==(a=e.amount)&&void 0!==a?a:"0",6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function z(e){return 0===e.length?"\u2013":e.map(q).join(", ")}function W(e){const t=Object(o.fromUtf8)(e);return JSON.parse(t)}function K(e){let{address:t,maxLength:a=20}=e;return l.a.createElement(f.c,{to:`/accounts/${t}`,title:t},D(t,a||99999))}function G(e){let{transactionId:t,maxLength:a=20}=e;return l.a.createElement(f.c,{to:`/transactions/${t}`,title:t},D(t,a||99999))}function J(e){let{transfers:t}=e;return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Height"),l.a.createElement("th",{scope:"col"},"Transaction ID"),l.a.createElement("th",{scope:"col"},"Sender"),l.a.createElement("th",{scope:"col"},"Recipient"),l.a.createElement("th",{scope:"col"},"Amount"))),l.a.createElement("tbody",null,t.map(((e,t)=>l.a.createElement("tr",{key:e.key},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.height),l.a.createElement("td",null,l.a.createElement(G,{transactionId:e.transactionId})),l.a.createElement("td",null,l.a.createElement(K,{address:e.msg.fromAddress})),l.a.createElement("td",null,l.a.createElement(K,{address:e.msg.toAddress})),l.a.createElement("td",null,z(e.msg.amount)))))))}function Q(){const{client:e,typeRegistry:t}=l.a.useContext(p),{address:a}=Object(i.g)(),n=a||"",[r,c]=l.a.useState(S),[s,o]=l.a.useState(S);l.a.useEffect((()=>{e&&(Promise.all(b.backend.denominations.map((t=>e.getBalance(n,t)))).then((e=>{const t=e.filter((e=>null!==e));c(t)})).catch((()=>c(C))),e.searchTx({sentFromOrTo:n}).then((e=>{const a=e.reduce(((e,a)=>{var n,l;const r=h.Tx.decode(a.tx),c=(null!==(n=null===r||void 0===r||null===(l=r.body)||void 0===l?void 0:l.messages)&&void 0!==n?n:[]).filter(E).map(function(e,t){return(a,n)=>{const l=e.decode({typeUrl:a.typeUrl,value:a.value});return{key:`${t.hash}_${n}`,height:t.height,transactionId:t.hash,msg:l}}}(t,a));return[...e,...c]}),[]);o(a)})).catch((()=>o(C))))}),[n,e,t]);const m=l.a.createElement("span",{title:n},"Account ",D(n,15));return l.a.createElement("div",{className:"page"},l.a.createElement(F,null),l.a.createElement("div",{className:"container mt-3 contract-container"},l.a.createElement("div",{className:"row white-row white-row-first"},l.a.createElement("div",{className:"col"},l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(f.c,{to:"/"},"Home")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},m))))),l.a.createElement("div",{className:"row white-row"},l.a.createElement("div",{className:"col"},l.a.createElement("h1",null,m),l.a.createElement("ul",{className:"list-group list-group-horizontal mb-3"},l.a.createElement("li",{className:"list-group-item",title:"Bank tokens owned by this contract"},"Balance:"," ",x(r)?"Loading \u2026":y(r)?"Error":z(r))))),l.a.createElement("div",{className:"row white-row white-row-last"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"Token transfers"),l.a.createElement("p",null,"Incoming and outgoing bank token transfers"),x(s)?l.a.createElement("p",null,"Loading \u2026"):y(s)?l.a.createElement("p",null,"Error"):0===s.length?l.a.createElement("p",null,"No transfer found"):l.a.createElement(J,{transfers:s}))),l.a.createElement(A,null)))}a(614);function V(e){return e.split("&").map((e=>{if(-1===e.indexOf("="))throw new Error("Parsing error: Equal sign missing");const t=e.split("=");if(t.length>2)throw new Error("Parsing error: Multiple equal signs found. If you need escaping support, please create a PR.");const[a,n]=t;if(!a)throw new Error("Parsing error: Key must not be empty");return{key:a,value:n}}))}function X(e){let{code:t,uploadTxHash:a}=e;return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Upload transaction:"," ",x(a)?"Loading \u2026":y(a)?"Error":void 0===a?"\u2013":l.a.createElement(G,{transactionId:a})),l.a.createElement("li",{className:"list-group-item"},"Creator: ",l.a.createElement(K,{address:t.creator,maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Checksum: ",t.checksum)))}function Y(e){let{address:t,maxLength:a=20}=e;return l.a.createElement(f.c,{to:`/contracts/${t}`,title:t},D(t,a||99999))}var Z=function(e){let{position:t,address:a}=e;const{client:n}=l.a.useContext(p),[r,c]=l.a.useState(S),[s,o]=l.a.useState(S);return l.a.useEffect((()=>{(null===n||void 0===n?void 0:n.getContract(a)).then((e=>o(e))).catch((()=>o(C)));const e=[{key:"execute._contract_address",value:a}];(null===n||void 0===n?void 0:n.searchTx({tags:e})).then((e=>c(e.length))).catch((()=>c(C)))}),[n,a]),x(s)?l.a.createElement("tr",null,l.a.createElement("td",null,"Loading ...")):y(s)?l.a.createElement("tr",null,l.a.createElement("td",null,"Error")):l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t),l.a.createElement("td",null,s.label),l.a.createElement("td",null,l.a.createElement(Y,{address:s.address})),l.a.createElement("td",null,l.a.createElement(K,{address:s.creator})),l.a.createElement("td",null,s.admin?l.a.createElement(K,{address:s.admin}):"\u2013"),l.a.createElement("td",null,x(r)?"Loading \u2026":y(r)?"Error":r))};function ee(){return l.a.createElement("p",null,"Code is not yet instantiated")}function te(){const{client:e}=l.a.useContext(p),{codeId:t}=Object(i.g)(),a=parseInt(t||"0",10),[n,r]=l.a.useState(S),[c,s]=l.a.useState(S),[o,m]=l.a.useState(S);l.a.useEffect((()=>{null===e||void 0===e||e.getContracts(a).then(s).catch((()=>s(C))),null===e||void 0===e||e.getCodeDetails(a).then(r).catch((()=>r(C))),null===e||void 0===e||e.searchTx({tags:V(`message.module=wasm&store_code.code_id=${a}`)}).then((e=>{const t=e.find((()=>!0));m(null===t||void 0===t?void 0:t.hash)}))}),[e,a]);const u=l.a.createElement("span",null,"Code #",a);return l.a.createElement("div",{className:"page"},l.a.createElement(F,null),l.a.createElement("div",{className:"container mt-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"row white-row white-row-first"},l.a.createElement("div",{className:"col"},l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(f.c,{to:"/codes"},"Codes")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},u))))),l.a.createElement("div",{className:"row white-row"},l.a.createElement("div",{className:"col"},l.a.createElement("h1",null,u),l.a.createElement("ul",{className:"list-group list-group-horizontal mb-3"},l.a.createElement("li",{className:"list-group-item"},"Type: Wasm"),l.a.createElement("li",{className:"list-group-item"},"Size:"," ",x(n)?"Loading \u2026":y(n)?"Error":Math.round(n.data.length/1024)+" KiB"))),l.a.createElement("div",{className:"col"},x(n)?l.a.createElement("span",null,"Loading \u2026"):y(n)?l.a.createElement("span",null,"Error"):l.a.createElement(X,{code:n,uploadTxHash:o}))),l.a.createElement("div",{className:"row white-row white-row-last"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"Instances"),x(c)?l.a.createElement("p",null,"Loading \u2026"):y(c)?l.a.createElement("p",null,"Error loading instances"):0===c.length?l.a.createElement(ee,null):l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Label"),l.a.createElement("th",{scope:"col"},"Contract"),l.a.createElement("th",{scope:"col"},"Creator"),l.a.createElement("th",{scope:"col"},"Admin"),l.a.createElement("th",{scope:"col"},"Executions"))),l.a.createElement("tbody",null,c.map(((e,t)=>l.a.createElement(Z,{position:t+1,address:e,key:e}))))))),l.a.createElement(A,null))))}a(615),a(616);function ae(e){let{data:t,index:a}=e;const{client:n}=l.a.useContext(p),[r,c]=l.a.useState(S);return l.a.useEffect((()=>{null===n||void 0===n||n.getContracts(t.codeId).then((e=>{c({instantiations:e.length})})).catch((()=>c(C)))}),[t.codeId]),l.a.createElement("div",{className:"flex-element-two-two mb-3"+(a%2?" pl-lg-2":" pr-lg-2")},l.a.createElement(f.c,{to:`/codes/${t.codeId}`,className:"code-content"},l.a.createElement("div",{className:"id"},"#",t.codeId),l.a.createElement("div",{className:"details"},"Creator: ",D(t.creator,30),l.a.createElement("br",null),"Checksum: ",t.checksum.slice(0,10),l.a.createElement("br",null),"Instances:"," ",x(r)?"Loading \u2026":y(r)?"Error":r.instantiations)))}function ne(e){return`${e.source}__${e.data.codeId}`}function le(){const{client:e,nodeUrl:t}=l.a.useContext(p),[a,n]=l.a.useState(S);return l.a.useEffect((()=>{e&&(async()=>{try{const a=(await e.getCodes()).map((e=>({source:t,data:{codeId:e.id,checksum:e.checksum,creator:e.creator}})));a.reverse(),n(a)}catch(a){n(C)}})()}),[e,t]),l.a.createElement("div",{className:"d-lg-flex flex-wrap"},x(a)?l.a.createElement("p",null,"Loading \u2026"):y(a)?l.a.createElement("p",null,"Error loading codes"):0===a.length?l.a.createElement("p",null,"No code uploaded yet"):a.map(((e,t)=>l.a.createElement(ae,{data:e.data,index:t,key:ne(e)}))))}function re(){return l.a.createElement("div",{className:"page"},l.a.createElement(F,null),l.a.createElement("div",{className:"container mt-3"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Codes"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(le,null))),l.a.createElement(A,null))))}a(617);function ce(e){let{codeId:t,text:a}=e;return l.a.createElement(f.c,{to:`/codes/${t}`},a||`Code #${t}`)}var se=a(72);const oe={container:{display:"flex",flexDirection:"column"},body:{order:"1"},warningBox:{order:"2"}},ie={transfer:{recipient:"cosmos1zk4hr47hlch274x28j32dgnhuyewqjrwxn4mvm",amount:"1"}},me=[{denom:b.backend.denominations[0],amount:"1"}];function ue(e){let{contractAddress:t}=e;const{userAddress:a,signingClient:n}=l.a.useContext(p),[r,c]=l.a.useState(!1),[s,i]=l.a.useState(),[m,u]=l.a.useState(),[d,E]=l.a.useState(),[g,h]=l.a.useState(),[f,v]=l.a.useState();return l.a.useEffect((()=>{E({result:ie}),h({result:me})}),[]),l.a.useEffect((()=>{null!==d&&void 0!==d&&d.error?i(d.error):null!==f&&void 0!==f&&f.error?i(f.error):null!==g&&void 0!==g&&g.error?i(g.error):i(void 0)}),[g,f,d]),l.a.createElement("div",{className:"card mb-3"},l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item d-flex align-items-baseline"},l.a.createElement("span",{title:"The contract query input"},"Execute contract:")),l.a.createElement("li",{className:"list-group-item d-flex align-items-baseline"},l.a.createElement(se.a,{width:"100%",height:"200px",placeholder:ie,confirmGood:!1,style:oe,onChange:e=>{let{jsObject:t}=e;return E({result:t})}})),l.a.createElement("li",{className:"list-group-item d-flex align-items-baseline"},l.a.createElement("span",{title:"The contract query input"},"Coins to transfer:")),l.a.createElement("li",{className:"list-group-item d-flex align-items-baseline"},l.a.createElement(se.a,{width:"100%",height:"120px",placeholder:me,confirmGood:!1,style:oe,onChange:e=>{let{jsObject:t}=e;return h({result:t})}})),l.a.createElement("li",{className:"list-group-item d-flex align-items-baseline"},l.a.createElement("span",{title:"The contract query input"},"Memo:"),l.a.createElement("input",{className:"ml-3 flex-grow-1",value:m,onChange:e=>u(e.target.value)})),l.a.createElement("div",{className:"list-group-item btn-group"},r?l.a.createElement("button",{className:"btn btn-primary",type:"button",disabled:!0},l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),"Executing..."):l.a.createElement("button",{className:"btn btn-primary",onClick:async function(){if(null!==d&&void 0!==d&&d.result&&a&&n){c(!0);try{const e=await n.execute(a,t,d.result,Object(o.calculateFee)(4e5,b.backend.gasPrice),m,null===g||void 0===g?void 0:g.result);v({result:e})}catch(s){v({error:`Execute error: ${s.message}`})}c(!1)}},disabled:!(null!==d&&void 0!==d&&d.result)||!n},"Execute contract")),null!==f&&void 0!==f&&f.result?l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{title:"The contract formatted input"},"Response:"),l.a.createElement("pre",{className:"mb-0"},JSON.stringify(f.result,void 0,"  "))):null,s?l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{className:"text-danger",title:"The contract query error"},s)):null))}function de(e){let{executions:t}=e;return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Height"),l.a.createElement("th",{scope:"col"},"Transaction ID"),l.a.createElement("th",{scope:"col"},"Sender"))),l.a.createElement("tbody",null,t.map(((e,t)=>l.a.createElement("tr",{key:e.key},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.height),l.a.createElement("td",null,l.a.createElement(G,{transactionId:e.transactionId})),l.a.createElement("td",null,l.a.createElement(K,{address:e.msg.sender})))))))}var Ee=a(56),ge=a.n(Ee);function pe(e){let{contractCodeHistory:t}=e;return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{title:"The contract level message history"},"History")),t.map(((e,t)=>l.a.createElement("li",{key:t,className:"list-group-item"},l.a.createElement("span",{title:"The message operation type"},e.operation," - ",l.a.createElement(ce,{codeId:e.codeId})),l.a.createElement(ge.a,{src:e.msg}))))))}function he(e){let{contract:t,instantiationTxHash:a}=e;return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Instantiation transaction:"," ",x(a)?"Loading \u2026":y(a)?"Error":void 0===a?"\u2013":l.a.createElement(G,{transactionId:a})),l.a.createElement("li",{className:"list-group-item"},"Creator: ",l.a.createElement(K,{address:t.creator,maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Admin: ",t.admin?l.a.createElement(K,{address:t.admin,maxLength:null}):"\u2013")))}const fe={get_balance:{address:"cosmos1zk4hr47hlch274x28j32dgnhuyewqjrwxn4mvm"}};function ve(e){let{contractAddress:t}=e;const{client:a}=l.a.useContext(p),[n,r]=l.a.useState(),[c,s]=l.a.useState(),[o,i]=l.a.useState();return l.a.useEffect((()=>{s({result:fe})}),[]),l.a.useEffect((()=>{null!==c&&void 0!==c&&c.error?r(c.error):null!==o&&void 0!==o&&o.error?r(o.error):r(void 0)}),[c,o]),l.a.createElement("div",{className:"card mb-3"},l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item d-flex align-items-baseline"},l.a.createElement("span",{title:"The contract query input"},"Query contract:")),l.a.createElement("li",{className:"list-group-item d-flex align-items-baseline"},l.a.createElement(se.a,{width:"100%",height:"200px",placeholder:fe,confirmGood:!1,style:oe,onChange:e=>{let{jsObject:t}=e;return s({result:t})}})),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("button",{className:"btn btn-primary",style:{cursor:a&&null!==c&&void 0!==c&&c.result?"pointer":"not-allowed"},onClick:async function(){if(a&&null!==c&&void 0!==c&&c.result)try{const e=await a.queryContractSmart(t,c.result),n=JSON.stringify(e,null,"  ");i({result:n})}catch(n){i({error:`Query error: ${n.message}`})}},disabled:!(null!==c&&void 0!==c&&c.result)},"Run query")),null!==o&&void 0!==o&&o.result?l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{title:"The query response"},"Response:"),l.a.createElement("pre",{className:"mb-0"},o.result)):null,n?l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{className:"text-danger",title:"The contract query error"},n)):null))}function be(e){return"/cosmwasm.wasm.v1.MsgExecuteContract"===e.typeUrl&&!!e.value}function Ne(){const{client:e,typeRegistry:t}=l.a.useContext(p),{contractAddress:a}=Object(i.g)(),n=a||"",[r,c]=l.a.useState(S),[s,o]=l.a.useState(S),[m,u]=l.a.useState(S),[d,E]=l.a.useState([]),[g,v]=l.a.useState(S);l.a.useEffect((()=>{e&&(((e,t,a)=>{e.getContractCodeHistory(t).then(a).catch((e=>{console.error(e)}))})(e,n,E),((e,t,a)=>{e.getContract(t).then(a).catch((()=>a(C)))})(e,n,c),((e,t,a)=>{e.searchTx({tags:V(`message.module=wasm&instantiate._contract_address=${t}`)}).then((e=>{const t=e.find((()=>!0));a(null===t||void 0===t?void 0:t.hash)})).catch((()=>a(C)))})(e,n,u),Promise.all(b.backend.denominations.map((t=>e.getBalance(n,t)))).then((e=>{const t=e.filter((e=>null!==e));o(t)})).catch((()=>o(C))),e.searchTx({tags:V(`message.module=wasm&execute._contract_address=${n}`)}).then((e=>{const a=e.reduce(((e,a)=>{var n,l;const r=h.Tx.decode(a.tx),c=(null!==(n=null===r||void 0===r||null===(l=r.body)||void 0===l?void 0:l.messages)&&void 0!==n?n:[]).filter(be).map(function(e,t){return(a,n)=>{const l=e.decode({typeUrl:a.typeUrl,value:a.value});return{key:`${t.hash}_${n}`,height:t.height,transactionId:t.hash,msg:l}}}(t,a));return[...e,...c]}),[]);v(a)})).catch((()=>v(C))))}),[e,n,t]);const N=l.a.createElement("span",{title:n},"Contract ",D(n,15));return l.a.createElement("div",{className:"page"},l.a.createElement(F,null),l.a.createElement("div",{className:"container mt-3 contract-container"},l.a.createElement("div",{className:"row white-row white-row-first"},l.a.createElement("div",{className:"col"},l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(f.c,{to:"/codes"},"Codes")),l.a.createElement("li",{className:"breadcrumb-item"},x(r)?l.a.createElement("span",null,"Loading \u2026"):y(r)?l.a.createElement("span",null,"Error"):l.a.createElement(ce,{codeId:r.codeId})),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},N))))),l.a.createElement("div",{className:"row white-row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("h1",null,N),l.a.createElement("ul",{className:"list-group list-group-horizontal mb-3"},l.a.createElement("li",{className:"list-group-item",title:"Bank tokens owned by this contract"},"Balance:"," ",x(s)?"Loading \u2026":y(s)?"Error":z(s)))),l.a.createElement("div",{className:"col-12 col-md-6"},x(r)?l.a.createElement("p",null,"Loading \u2026"):y(r)?l.a.createElement("p",null,"An Error occurred when loading contract"):l.a.createElement(l.a.Fragment,null,l.a.createElement(he,{contract:r,instantiationTxHash:m}),l.a.createElement(pe,{contractCodeHistory:d}),l.a.createElement(ve,{contractAddress:n}),l.a.createElement(ue,{contractAddress:n})))),l.a.createElement("div",{className:"row white-row white-row-last"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"Executions"),x(g)?l.a.createElement("p",null,"Loading \u2026"):y(g)?l.a.createElement("p",null,"An Error occurred when loading transactions"):0!==g.length?l.a.createElement(de,{executions:g}):l.a.createElement("p",null,"Contract was not yet executed"))),l.a.createElement(A,null)))}a(618);function we(e){let{tx:t,timestamp:a}=e;const n=a?Object(o.fromRfc3339)(a):null,r=0===t.code;return l.a.createElement("ul",{className:"list-group list-group-horizontal mb-3"},l.a.createElement("li",{className:"list-group-item"},"Height: ",t.height),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{title:a},"Time: ",null===n||void 0===n?void 0:n.toLocaleString())),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{title:"Execution succeeded: "+(r?"yes":"no")},"Success: ",r?"\u2714":`\ud83d\uddd9 (error code ${t.code})`)))}function ye(e){var t,a;let{msg:r}=e;return l.a.createElement(n.Fragment,null,l.a.createElement("li",{className:"list-group-item"},"Contract: ",l.a.createElement(Y,{address:null!==(t=r.contract)&&void 0!==t?t:"-",maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Sender: ",l.a.createElement(K,{address:null!==(a=r.sender)&&void 0!==a?a:"-",maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Sent funds: ",z(r.funds)),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{title:"The contract level message"},"Handle message"),":",l.a.createElement(ge.a,{src:W(r.msg)})))}function xe(e){var t,a,r,c;let{msg:s}=e;return l.a.createElement(n.Fragment,null,l.a.createElement("li",{className:"list-group-item"},"Sender: ",l.a.createElement(K,{address:s.sender||"-",maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Code ID: ",l.a.createElement(ce,{codeId:null!==(t=null===(a=s.codeId)||void 0===a?void 0:a.toNumber())&&void 0!==t?t:0,text:null!==(r=null===(c=s.codeId)||void 0===c?void 0:c.toString())&&void 0!==r?r:"-"})),l.a.createElement("li",{className:"list-group-item"},"Label: ",s.label),l.a.createElement("li",{className:"list-group-item"},"Init funds: ",z(s.funds)),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("span",{title:"The contract level message"},"Init message"),":",l.a.createElement(ge.a,{src:W(s.msg)})))}function Ce(e){var t,a,r;let{msg:c}=e;return l.a.createElement(n.Fragment,null,l.a.createElement("li",{className:"list-group-item"},"Sender: ",l.a.createElement(K,{address:null!==(t=c.fromAddress)&&void 0!==t?t:"-",maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Recipient: ",l.a.createElement(K,{address:null!==(a=c.toAddress)&&void 0!==a?a:"-",maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Amount: ",z(null!==(r=c.amount)&&void 0!==r?r:[])))}a(619);function Se(e,t){return function(e,t){return e.length===t.length&&!e.some(((e,a)=>t[a]!==e))}(e.slice(0,t.length),t)}const ke={gzip:Object(o.fromHex)("1F8B"),wasm:Object(o.fromHex)("0061736d")};function Ie(e){var t,a;let{msg:r}=e;const[c,s]=l.a.useState(!1),i=l.a.useMemo((()=>{var e;const t=null!==(e=r.wasmByteCode)&&void 0!==e?e:new Uint8Array;return`${function(e){return Se(e,ke.gzip)?"gzip":Se(e,ke.wasm)?"wasm":void 0}(t)||"unknown"}; ${t.length} bytes`}),[r.wasmByteCode]);return l.a.createElement(n.Fragment,null,l.a.createElement("li",{className:"list-group-item"},"Sender: ",l.a.createElement(K,{address:null!==(t=r.sender)&&void 0!==t?t:"-",maxLength:null})),l.a.createElement("li",{className:"list-group-item"},"Source: ",r.source||"\u2013"),l.a.createElement("li",{className:"list-group-item"},"Builder: ",r.builder||"\u2013"),l.a.createElement("li",{className:"list-group-item"},"Data: ",i," ",c?l.a.createElement("code",{className:"long-inline-code"},r.wasmByteCode):l.a.createElement(n.Fragment,null,l.a.createElement("code",null,function(e,t){if(e.length<=t)return e;const a=t-"\u2026".length;return e.slice(0,a)+"\u2026"}(Object(o.toBase64)(null!==(a=r.wasmByteCode)&&void 0!==a?a:new Uint8Array),300))," ",l.a.createElement("button",{className:"btn btn-sm btn-outline-primary",onClick:()=>s(!0)},"Show all"))))}function Te(e){var t,a,n,r,c,s,o,i,m,u;let{tx:d}=e;return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Memo: ",(null===(t=d.body)||void 0===t?void 0:t.memo)||"\u2013"),l.a.createElement("li",{className:"list-group-item"},"Fee: ",z(null!==(a=null===(n=d.authInfo)||void 0===n||null===(r=n.fee)||void 0===r?void 0:r.amount)&&void 0!==a?a:[])),l.a.createElement("li",{className:"list-group-item"},"Gas: ",null!==(c=null===(s=d.authInfo)||void 0===s||null===(o=s.fee)||void 0===o||null===(i=o.gasLimit)||void 0===i?void 0:i.toString())&&void 0!==c?c:"0"),l.a.createElement("li",{className:"list-group-item"},"Signatures: ",null!==(m=null===(u=d.signatures)||void 0===u?void 0:u.length)&&void 0!==m?m:0)))}function Le(){var e,t;const{client:a,typeRegistry:n}=l.a.useContext(p),{txId:r}=Object(i.g)(),c=r||"",s=l.a.createElement("span",{title:c},"Tx ",D(c,20)),[o,g]=l.a.useState(S),[v,b]=l.a.useState(S);return l.a.useEffect((()=>{a&&a.getTx(c).then((e=>{g(e||void 0),e&&a.getBlock(e.height).then((e=>{b(e)})).catch((()=>b(C)))})).catch((()=>g(C)))}),[a,c,n]),l.a.createElement("div",{className:"page"},l.a.createElement(F,null),l.a.createElement("div",{className:"container mt-3"},l.a.createElement("div",{className:"row white-row white-row-first"},l.a.createElement("div",{className:"col"},l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(f.c,{to:"/"},"Home")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},s))))),l.a.createElement("div",{className:"row white-row"},l.a.createElement("div",{className:"col"},l.a.createElement("h1",null,s),x(o)?l.a.createElement("p",null,"Loading..."):y(o)?l.a.createElement("p",null,"Error"):void 0===o?l.a.createElement("p",null,"Transaction not found"):l.a.createElement(we,{tx:o,timestamp:x(v)||y(v)?"":(null===v||void 0===v?void 0:v.header.time)||""})),l.a.createElement("div",{className:"col"},x(o)?l.a.createElement("p",null,"Loading \u2026"):y(o)?l.a.createElement("p",null,"Error"):void 0===o?l.a.createElement("p",null,"Transaction not found"):l.a.createElement(Te,{tx:h.Tx.decode(o.tx)}))),l.a.createElement("div",{className:"row white-row white-row-last"},l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,"Messages"),l.a.createElement("p",null,"A Cosmos SDK transaction is composed of one or more messages, that represent actions to be executed."),x(o)?l.a.createElement("p",null,"Loading \u2026"):y(o)?l.a.createElement("p",null,"Error"):void 0===o?l.a.createElement("p",null,"Transaction not found"):null===(e=h.Tx.decode(o.tx).body)||void 0===e||null===(t=e.messages)||void 0===t?void 0:t.map(((e,t)=>l.a.createElement("div",{className:"card mb-3",key:`${o.hash}_${t}`},l.a.createElement("div",{className:"card-header"},"Message ",t+1," (Type: ",l.a.createElement("code",null,e.typeUrl||l.a.createElement("em",null,"unset")),")"),l.a.createElement("ul",{className:"list-group list-group-flush"},E(e)?l.a.createElement(Ce,{msg:n.decode({typeUrl:e.typeUrl,value:e.value})}):function(e){return e.typeUrl===m&&!!e.value}(e)?l.a.createElement(Ie,{msg:n.decode({typeUrl:e.typeUrl,value:e.value})}):function(e){return e.typeUrl===u&&!!e.value}(e)?l.a.createElement(xe,{msg:n.decode({typeUrl:e.typeUrl,value:e.value})}):function(e){return e.typeUrl===d&&!!e.value}(e)?l.a.createElement(ye,{msg:n.decode({typeUrl:e.typeUrl,value:e.value})}):l.a.createElement("li",{className:"list-group-item"},l.a.createElement("em",null,"This message type cannot be displayed")))))))),l.a.createElement(A,null)))}function Ue(e){let{type:t,children:a}=e;switch(t){case"browser-router":return l.a.createElement(f.a,{basename:""},a);case"hash-router":return l.a.createElement(f.b,null,a)}}const{nodeUrls:Ae}=b.backend,Me=new o.Registry([[m,s.MsgStoreCode],[u,s.MsgInstantiateContract],[d,s.MsgExecuteContract]]);function Oe(){const[e,t]=l.a.useState(Ae[0]),[a,n]=l.a.useState(),[r,c]=l.a.useState(),[s,m]=l.a.useState({nodeUrl:e,client:null,typeRegistry:Me,resetClient:t,userAddress:a,setUserAddress:n,signingClient:r,setSigningClient:c});return l.a.useEffect((()=>{!async function(){const t=await o.CosmWasmClient.connect(e);m((a=>({...a,nodeUrl:e,client:t})))}()}),[e]),l.a.useEffect((()=>{m((e=>({...e,signingClient:r})))}),[r]),l.a.useEffect((()=>{m((e=>({...e,userAddress:a})))}),[a]),l.a.createElement(p.Provider,{value:s},l.a.createElement(Ue,{type:b.deployment.routerType},l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/codes",component:re}),l.a.createElement(i.b,{path:"/codes/:codeId",component:te}),l.a.createElement(i.b,{path:"/contracts/:contractAddress",component:Ne}),l.a.createElement(i.b,{path:"/transactions/:txId",component:Le}),l.a.createElement(i.b,{path:"/accounts/:address",component:Q}),l.a.createElement(i.b,{component:()=>l.a.createElement(i.a,{to:"/codes"})}))))}c.a.render(l.a.createElement(Oe,null),document.getElementById("root"))}},[[620,1,2]]]);
//# sourceMappingURL=main.b1bed746.chunk.js.map