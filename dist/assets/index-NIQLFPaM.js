import{o as I}from"./index-BqU-fIN7.js";var bn={},E={},l={},S=I&&I.__awaiter||function(n,e,i,c){function o(d){return d instanceof i?d:new i(function(r){r(d)})}return new(i||(i=Promise))(function(d,r){function A(g){try{T(c.next(g))}catch(h){r(h)}}function O(g){try{T(c.throw(g))}catch(h){r(h)}}function T(g){g.done?d(g.value):o(g.value).then(A,O)}T((c=c.apply(n,e||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});l.getData=l.fetchData=l.stringifyQuery=l.insertParams=void 0;const Gn=n=>typeof n=="object"&&n!==null&&"code"in n&&"message"in n;function Un(n,e,i){return n.replace(new RegExp(`\\{${e}\\}`,"g"),i)}function Wn(n,e){return e?Object.keys(e).reduce((i,c)=>Un(i,c,String(e[c])),n):n}l.insertParams=Wn;function Hn(n){if(!n)return"";const e=new URLSearchParams;Object.keys(n).forEach(c=>{n[c]!=null&&e.append(c,String(n[c]))});const i=e.toString();return i?`?${i}`:""}l.stringifyQuery=Hn;function D(n){return S(this,void 0,void 0,function*(){let e;try{e=yield n.json()}catch{e={}}if(!n.ok){const i=Gn(e)?`CGW error - ${e.code}: ${e.message}`:`CGW error - status ${n.statusText}`;throw new Error(i)}return e})}function jn(n,e,i,c,o){return S(this,void 0,void 0,function*(){const d=Object.assign({"Content-Type":"application/json"},c),r={method:e??"POST",headers:d};o&&(r.credentials=o),i!=null&&(r.body=typeof i=="string"?i:JSON.stringify(i));const A=yield fetch(n,r);return D(A)})}l.fetchData=jn;function wn(n,e,i){return S(this,void 0,void 0,function*(){const c={method:"GET"};e&&(c.headers=Object.assign(Object.assign({},e),{"Content-Type":"application/json"})),i&&(c.credentials=i);const o=yield fetch(n,c);return D(o)})}l.getData=wn;Object.defineProperty(E,"__esModule",{value:!0});E.getEndpoint=E.deleteEndpoint=E.putEndpoint=E.postEndpoint=void 0;const _=l;function v(n,e,i,c){const o=(0,_.insertParams)(e,i),d=(0,_.stringifyQuery)(c);return`${n}${o}${d}`}function Kn(n,e,i){const c=v(n,e,i==null?void 0:i.path,i==null?void 0:i.query);return(0,_.fetchData)(c,"POST",i==null?void 0:i.body,i==null?void 0:i.headers,i==null?void 0:i.credentials)}E.postEndpoint=Kn;function Vn(n,e,i){const c=v(n,e,i==null?void 0:i.path,i==null?void 0:i.query);return(0,_.fetchData)(c,"PUT",i==null?void 0:i.body,i==null?void 0:i.headers,i==null?void 0:i.credentials)}E.putEndpoint=Vn;function Bn(n,e,i){const c=v(n,e,i==null?void 0:i.path,i==null?void 0:i.query);return(0,_.fetchData)(c,"DELETE",i==null?void 0:i.body,i==null?void 0:i.headers,i==null?void 0:i.credentials)}E.deleteEndpoint=Bn;function Fn(n,e,i,c){if(c)return(0,_.getData)(c,void 0,i==null?void 0:i.credentials);const o=v(n,e,i==null?void 0:i.path,i==null?void 0:i.query);return(0,_.getData)(o,i==null?void 0:i.headers,i==null?void 0:i.credentials)}E.getEndpoint=Fn;var N={};Object.defineProperty(N,"__esModule",{value:!0});N.DEFAULT_BASE_URL=void 0;N.DEFAULT_BASE_URL="https://safe-client.safe.global";var C={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.ImplementationVersionState=void 0,function(e){e.UP_TO_DATE="UP_TO_DATE",e.OUTDATED="OUTDATED",e.UNKNOWN="UNKNOWN"}(n.ImplementationVersionState||(n.ImplementationVersionState={}))})(C);var R={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SafeAppSocialPlatforms=n.SafeAppFeatures=n.SafeAppAccessPolicyTypes=void 0,function(e){e.NoRestrictions="NO_RESTRICTIONS",e.DomainAllowlist="DOMAIN_ALLOWLIST"}(n.SafeAppAccessPolicyTypes||(n.SafeAppAccessPolicyTypes={})),function(e){e.BATCHED_TRANSACTIONS="BATCHED_TRANSACTIONS"}(n.SafeAppFeatures||(n.SafeAppFeatures={})),function(e){e.TWITTER="TWITTER",e.GITHUB="GITHUB",e.DISCORD="DISCORD"}(n.SafeAppSocialPlatforms||(n.SafeAppSocialPlatforms={}))})(R);var L={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.LabelValue=n.StartTimeValue=n.DurationType=n.DetailedExecutionInfoType=n.TransactionListItemType=n.ConflictType=n.TransactionInfoType=n.SettingsInfoType=n.TransactionTokenType=n.TransferDirection=n.TransactionStatus=n.Operation=void 0,function(e){e[e.CALL=0]="CALL",e[e.DELEGATE=1]="DELEGATE"}(n.Operation||(n.Operation={})),function(e){e.AWAITING_CONFIRMATIONS="AWAITING_CONFIRMATIONS",e.AWAITING_EXECUTION="AWAITING_EXECUTION",e.CANCELLED="CANCELLED",e.FAILED="FAILED",e.SUCCESS="SUCCESS"}(n.TransactionStatus||(n.TransactionStatus={})),function(e){e.INCOMING="INCOMING",e.OUTGOING="OUTGOING",e.UNKNOWN="UNKNOWN"}(n.TransferDirection||(n.TransferDirection={})),function(e){e.ERC20="ERC20",e.ERC721="ERC721",e.NATIVE_COIN="NATIVE_COIN"}(n.TransactionTokenType||(n.TransactionTokenType={})),function(e){e.SET_FALLBACK_HANDLER="SET_FALLBACK_HANDLER",e.ADD_OWNER="ADD_OWNER",e.REMOVE_OWNER="REMOVE_OWNER",e.SWAP_OWNER="SWAP_OWNER",e.CHANGE_THRESHOLD="CHANGE_THRESHOLD",e.CHANGE_IMPLEMENTATION="CHANGE_IMPLEMENTATION",e.ENABLE_MODULE="ENABLE_MODULE",e.DISABLE_MODULE="DISABLE_MODULE",e.SET_GUARD="SET_GUARD",e.DELETE_GUARD="DELETE_GUARD"}(n.SettingsInfoType||(n.SettingsInfoType={})),function(e){e.TRANSFER="Transfer",e.SETTINGS_CHANGE="SettingsChange",e.CUSTOM="Custom",e.CREATION="Creation",e.SWAP_ORDER="SwapOrder",e.TWAP_ORDER="TwapOrder",e.SWAP_TRANSFER="SwapTransfer",e.NATIVE_STAKING_DEPOSIT="NativeStakingDeposit",e.NATIVE_STAKING_VALIDATORS_EXIT="NativeStakingValidatorsExit",e.NATIVE_STAKING_WITHDRAW="NativeStakingWithdraw"}(n.TransactionInfoType||(n.TransactionInfoType={})),function(e){e.NONE="None",e.HAS_NEXT="HasNext",e.END="End"}(n.ConflictType||(n.ConflictType={})),function(e){e.TRANSACTION="TRANSACTION",e.LABEL="LABEL",e.CONFLICT_HEADER="CONFLICT_HEADER",e.DATE_LABEL="DATE_LABEL"}(n.TransactionListItemType||(n.TransactionListItemType={})),function(e){e.MULTISIG="MULTISIG",e.MODULE="MODULE"}(n.DetailedExecutionInfoType||(n.DetailedExecutionInfoType={})),function(e){e.AUTO="AUTO",e.LIMIT_DURATION="LIMIT_DURATION"}(n.DurationType||(n.DurationType={})),function(e){e.AT_MINING_TIME="AT_MINING_TIME",e.AT_EPOCH="AT_EPOCH"}(n.StartTimeValue||(n.StartTimeValue={})),function(e){e.Queued="Queued",e.Next="Next"}(n.LabelValue||(n.LabelValue={}))})(L);var M={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.FEATURES=n.GAS_PRICE_TYPE=n.RPC_AUTHENTICATION=void 0,function(e){e.API_KEY_PATH="API_KEY_PATH",e.NO_AUTHENTICATION="NO_AUTHENTICATION",e.UNKNOWN="UNKNOWN"}(n.RPC_AUTHENTICATION||(n.RPC_AUTHENTICATION={})),function(e){e.ORACLE="ORACLE",e.FIXED="FIXED",e.FIXED_1559="FIXED1559",e.UNKNOWN="UNKNOWN"}(n.GAS_PRICE_TYPE||(n.GAS_PRICE_TYPE={})),function(e){e.ERC721="ERC721",e.SAFE_APPS="SAFE_APPS",e.CONTRACT_INTERACTION="CONTRACT_INTERACTION",e.DOMAIN_LOOKUP="DOMAIN_LOOKUP",e.SPENDING_LIMIT="SPENDING_LIMIT",e.EIP1559="EIP1559",e.SAFE_TX_GAS_OPTIONAL="SAFE_TX_GAS_OPTIONAL",e.TX_SIMULATION="TX_SIMULATION",e.EIP1271="EIP1271"}(n.FEATURES||(n.FEATURES={}))})(M);var y={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.TokenType=void 0,function(e){e.ERC20="ERC20",e.ERC721="ERC721",e.NATIVE_TOKEN="NATIVE_TOKEN"}(n.TokenType||(n.TokenType={}))})(y);var P={};Object.defineProperty(P,"__esModule",{value:!0});var b={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.NativeStakingStatus=n.ConfirmationViewTypes=void 0,function(e){e.GENERIC="GENERIC",e.COW_SWAP_ORDER="COW_SWAP_ORDER",e.COW_SWAP_TWAP_ORDER="COW_SWAP_TWAP_ORDER",e.KILN_NATIVE_STAKING_DEPOSIT="KILN_NATIVE_STAKING_DEPOSIT",e.KILN_NATIVE_STAKING_VALIDATORS_EXIT="KILN_NATIVE_STAKING_VALIDATORS_EXIT",e.KILN_NATIVE_STAKING_WITHDRAW="KILN_NATIVE_STAKING_WITHDRAW"}(n.ConfirmationViewTypes||(n.ConfirmationViewTypes={})),function(e){e.NOT_STAKED="NOT_STAKED",e.ACTIVATING="ACTIVATING",e.DEPOSIT_IN_PROGRESS="DEPOSIT_IN_PROGRESS",e.ACTIVE="ACTIVE",e.EXIT_REQUESTED="EXIT_REQUESTED",e.EXITING="EXITING",e.EXITED="EXITED",e.SLASHED="SLASHED"}(n.NativeStakingStatus||(n.NativeStakingStatus={}))})(b);var G={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SafeMessageStatus=n.SafeMessageListItemType=void 0,function(e){e.DATE_LABEL="DATE_LABEL",e.MESSAGE="MESSAGE"}(n.SafeMessageListItemType||(n.SafeMessageListItemType={})),function(e){e.NEEDS_CONFIRMATION="NEEDS_CONFIRMATION",e.CONFIRMED="CONFIRMED"}(n.SafeMessageStatus||(n.SafeMessageStatus={}))})(G);var U={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.DeviceType=void 0,function(e){e.ANDROID="ANDROID",e.IOS="IOS",e.WEB="WEB"}(n.DeviceType||(n.DeviceType={}))})(U);var W={};Object.defineProperty(W,"__esModule",{value:!0});(function(n){var e=I&&I.__createBinding||(Object.create?function(t,a,s,u){u===void 0&&(u=s);var f=Object.getOwnPropertyDescriptor(a,s);(!f||("get"in f?!a.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return a[s]}}),Object.defineProperty(t,u,f)}:function(t,a,s,u){u===void 0&&(u=s),t[u]=a[s]}),i=I&&I.__exportStar||function(t,a){for(var s in t)s!=="default"&&!Object.prototype.hasOwnProperty.call(a,s)&&e(a,t,s)};Object.defineProperty(n,"__esModule",{value:!0}),n.getAccount=n.createAccount=n.verifyAuth=n.getAuthNonce=n.getContract=n.getSafeOverviews=n.unsubscribeAll=n.unsubscribeSingle=n.registerRecoveryModule=n.deleteRegisteredEmail=n.getRegisteredEmail=n.verifyEmail=n.resendEmailVerificationCode=n.changeEmail=n.registerEmail=n.unregisterDevice=n.unregisterSafe=n.registerDevice=n.getDelegates=n.confirmSafeMessage=n.proposeSafeMessage=n.getSafeMessage=n.getSafeMessages=n.getDecodedData=n.getMasterCopies=n.getSafeApps=n.getChainConfig=n.getChainsConfig=n.getTxPreview=n.getConfirmationView=n.proposeTransaction=n.getNonces=n.postSafeGasEstimation=n.deleteTransaction=n.getTransactionDetails=n.getTransactionQueue=n.getTransactionHistory=n.getCollectiblesPage=n.getCollectibles=n.getAllOwnedSafes=n.getOwnedSafes=n.getFiatCurrencies=n.getBalances=n.getMultisigTransactions=n.getModuleTransactions=n.getIncomingTransfers=n.getSafeInfo=n.getRelayCount=n.relayTransaction=n.setBaseUrl=void 0,n.getIndexingStatus=n.putAccountDataSettings=n.getAccountDataSettings=n.getAccountDataTypes=n.deleteAccount=void 0;const c=E,o=N;i(C,n),i(R,n),i(L,n),i(M,n),i(y,n),i(P,n),i(b,n),i(G,n),i(U,n),i(W,n);let d=o.DEFAULT_BASE_URL;const r=t=>{d=t};n.setBaseUrl=r;function A(t,a){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/relay",{path:{chainId:t},body:a})}n.relayTransaction=A;function O(t,a){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/relay/{address}",{path:{chainId:t,address:a}})}n.getRelayCount=O;function T(t,a){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{address}",{path:{chainId:t,address:a}})}n.getSafeInfo=T;function g(t,a,s,u){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{address}/incoming-transfers/",{path:{chainId:t,address:a},query:s},u)}n.getIncomingTransfers=g;function h(t,a,s,u){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{address}/module-transactions/",{path:{chainId:t,address:a},query:s},u)}n.getModuleTransactions=h;function H(t,a,s,u){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{address}/multisig-transactions/",{path:{chainId:t,address:a},query:s},u)}n.getMultisigTransactions=H;function j(t,a,s="usd",u={}){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{address}/balances/{currency}",{path:{chainId:t,address:a,currency:s},query:u})}n.getBalances=j;function w(){return(0,c.getEndpoint)(d,"/v1/balances/supported-fiat-codes")}n.getFiatCurrencies=w;function K(t,a){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/owners/{address}/safes",{path:{chainId:t,address:a}})}n.getOwnedSafes=K;function V(t){return(0,c.getEndpoint)(d,"/v1/owners/{address}/safes",{path:{address:t}})}n.getAllOwnedSafes=V;function B(t,a,s={}){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:t,address:a},query:s})}n.getCollectibles=B;function F(t,a,s={},u){return(0,c.getEndpoint)(d,"/v2/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:t,address:a},query:s},u)}n.getCollectiblesPage=F;function X(t,a,s={},u){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/transactions/history",{path:{chainId:t,safe_address:a},query:s},u)}n.getTransactionHistory=X;function m(t,a,s={},u){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/transactions/queued",{path:{chainId:t,safe_address:a},query:s},u)}n.getTransactionQueue=m;function Q(t,a){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/transactions/{transactionId}",{path:{chainId:t,transactionId:a}})}n.getTransactionDetails=Q;function $(t,a,s){return(0,c.deleteEndpoint)(d,"/v1/chains/{chainId}/transactions/{safeTxHash}",{path:{chainId:t,safeTxHash:a},body:{signature:s}})}n.deleteTransaction=$;function q(t,a,s){return(0,c.postEndpoint)(d,"/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations",{path:{chainId:t,safe_address:a},body:s})}n.postSafeGasEstimation=q;function Y(t,a){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/nonces",{path:{chainId:t,safe_address:a}})}n.getNonces=Y;function J(t,a,s){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/transactions/{safe_address}/propose",{path:{chainId:t,safe_address:a},body:s})}n.proposeTransaction=J;function z(t,a,s,u,f){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation",{path:{chainId:t,safe_address:a},body:{data:s,to:u,value:f}})}n.getConfirmationView=z;function Z(t,a,s,u,f){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/transactions/{safe_address}/preview",{path:{chainId:t,safe_address:a},body:{data:s,to:u,value:f}})}n.getTxPreview=Z;function k(t){return(0,c.getEndpoint)(d,"/v1/chains",{query:t})}n.getChainsConfig=k;function p(t){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}",{path:{chainId:t}})}n.getChainConfig=p;function x(t,a={}){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safe-apps",{path:{chainId:t},query:a})}n.getSafeApps=x;function nn(t){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/about/master-copies",{path:{chainId:t}})}n.getMasterCopies=nn;function en(t,a,s){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/data-decoder",{path:{chainId:t},body:{data:a,to:s}})}n.getDecodedData=en;function tn(t,a,s){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:t,safe_address:a},query:{}},s)}n.getSafeMessages=tn;function an(t,a){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/messages/{message_hash}",{path:{chainId:t,message_hash:a}})}n.getSafeMessage=an;function cn(t,a,s){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:t,safe_address:a},body:s})}n.proposeSafeMessage=cn;function dn(t,a,s){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/messages/{message_hash}/signatures",{path:{chainId:t,message_hash:a},body:s})}n.confirmSafeMessage=dn;function sn(t,a={}){return(0,c.getEndpoint)(d,"/v2/chains/{chainId}/delegates",{path:{chainId:t},query:a})}n.getDelegates=sn;function un(t){return(0,c.postEndpoint)(d,"/v1/register/notifications",{body:t})}n.registerDevice=un;function on(t,a,s){return(0,c.deleteEndpoint)(d,"/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}",{path:{chainId:t,safe_address:a,uuid:s}})}n.unregisterSafe=on;function fn(t,a){return(0,c.deleteEndpoint)(d,"/v1/chains/{chainId}/notifications/devices/{uuid}",{path:{chainId:t,uuid:a}})}n.unregisterDevice=fn;function rn(t,a,s,u){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/emails",{path:{chainId:t,safe_address:a},body:s,headers:u})}n.registerEmail=rn;function En(t,a,s,u,f){return(0,c.putEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:t,safe_address:a,signer:s},body:u,headers:f})}n.changeEmail=En;function ln(t,a,s){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend",{path:{chainId:t,safe_address:a,signer:s},body:""})}n.resendEmailVerificationCode=ln;function gn(t,a,s,u){return(0,c.putEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify",{path:{chainId:t,safe_address:a,signer:s},body:u})}n.verifyEmail=gn;function _n(t,a,s,u){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:t,safe_address:a,signer:s},headers:u})}n.getRegisteredEmail=_n;function In(t,a,s,u){return(0,c.deleteEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:t,safe_address:a,signer:s},headers:u})}n.deleteRegisteredEmail=In;function An(t,a,s){return(0,c.postEndpoint)(d,"/v1/chains/{chainId}/safes/{safe_address}/recovery",{path:{chainId:t,safe_address:a},body:s})}n.registerRecoveryModule=An;function Tn(t){return(0,c.deleteEndpoint)(d,"/v1/subscriptions",{query:t})}n.unsubscribeSingle=Tn;function hn(t){return(0,c.deleteEndpoint)(d,"/v1/subscriptions/all",{query:t})}n.unsubscribeAll=hn;function vn(t,a){return(0,c.getEndpoint)(d,"/v1/safes",{query:Object.assign(Object.assign({},a),{safes:t.join(",")})})}n.getSafeOverviews=vn;function Nn(t,a){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/contracts/{contractAddress}",{path:{chainId:t,contractAddress:a}})}n.getContract=Nn;function On(){return(0,c.getEndpoint)(d,"/v1/auth/nonce",{credentials:"include"})}n.getAuthNonce=On;function Sn(t){return(0,c.postEndpoint)(d,"/v1/auth/verify",{body:t,credentials:"include"})}n.verifyAuth=Sn;function Dn(t){return(0,c.postEndpoint)(d,"/v1/accounts",{body:t,credentials:"include"})}n.createAccount=Dn;function Cn(t){return(0,c.getEndpoint)(d,"/v1/accounts/{address}",{path:{address:t},credentials:"include"})}n.getAccount=Cn;function Rn(t){return(0,c.deleteEndpoint)(d,"/v1/accounts/{address}",{path:{address:t},credentials:"include"})}n.deleteAccount=Rn;function Ln(){return(0,c.getEndpoint)(d,"/v1/accounts/data-types")}n.getAccountDataTypes=Ln;function Mn(t){return(0,c.getEndpoint)(d,"/v1/accounts/{address}/data-settings",{path:{address:t},credentials:"include"})}n.getAccountDataSettings=Mn;function yn(t,a){return(0,c.putEndpoint)(d,"/v1/accounts/{address}/data-settings",{path:{address:t},body:a,credentials:"include"})}n.putAccountDataSettings=yn;function Pn(t){return(0,c.getEndpoint)(d,"/v1/chains/{chainId}/about/indexing",{path:{chainId:t}})}n.getIndexingStatus=Pn})(bn);export{bn as d};
