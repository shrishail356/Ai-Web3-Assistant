const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B4S74HTW.js","assets/index-BqU-fIN7.js","assets/index-TND1PF1s.css"])))=>i.map(i=>d[i]);
import{_ as pe}from"./index-BqU-fIN7.js";const me=Symbol(),ee=Object.getPrototypeOf,Q=new WeakMap,Ie=e=>e&&(Q.has(e)?Q.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),he=e=>Ie(e)&&e[me]||null,te=(e,t=!0)=>{Q.set(e,t)},B={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_ALCHEMY_ID:"SCJypi8jMiIZ9bFlV80xFAuIpfhntNPm",VITE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaW9hYWNvc3NucGx3emN6ZWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNDYwODUsImV4cCI6MjA0NjcyMjA4NX0.NqQKlS8v1LOjdB3S_-rDcT37iC59GR-yvkgTQNCBfgQ",VITE_API_URL:"https://sync-sheet-backend.onrender.com",VITE_ETHERSCAN_API_KEY:"QFJJN4KG6AUPT9YY1ICSKU6YZ4632DZCCZ",VITE_MORALIS_API_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjU0NzU1Zjc3LWRkYWUtNDFlNS04MjFmLTAyMmViZDExMTNjYSIsIm9yZ0lkIjoiNDE1MzUyIiwidXNlcklkIjoiNDI2ODUzIiwidHlwZUlkIjoiN2E4ZDJhNDItZmU1OC00Zjg0LWE4ZDItZTE1N2YxZmUzNjA5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzEwNTc3MzQsImV4cCI6NDg4NjgxNzczNH0.4C5GZcc_LhrF4v0_vEZruYqmQDszX4Og6TFY8zsuAg8",VITE_OKTO_API_TOKEN:void 0,VITE_PROJECT_ID:"67f821776c67c8a059f741990a523a6e",VITE_PUBLIC_RPC_URL:"https://eth-sepolia.g.alchemy.com/v2/SCJypi8jMiIZ9bFlV80xFAuIpfhntNPm",VITE_SUPABASE_URL:"https://yoioaacossnplwzczehm.supabase.co"},Y=e=>typeof e=="object"&&e!==null,W=new WeakMap,x=new WeakSet,ge=(e=Object.is,t=(o,h)=>new Proxy(o,h),s=o=>Y(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),n=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,h,E=n)=>{const y=l.get(o);if((y==null?void 0:y[0])===h)return y[1];const _=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return te(_,!0),l.set(o,[h,_]),Reflect.ownKeys(o).forEach(j=>{if(Object.getOwnPropertyDescriptor(_,j))return;const O=Reflect.get(o,j),P={value:O,enumerable:!0,configurable:!0};if(x.has(O))te(O,!1);else if(O instanceof Promise)delete P.value,P.get=()=>E(O);else if(W.has(O)){const[g,J]=W.get(O);P.value=c(g,J(),E)}Object.defineProperty(_,j,P)}),Object.preventExtensions(_)},d=new WeakMap,f=[1,1],C=o=>{if(!Y(o))throw new Error("object required");const h=d.get(o);if(h)return h;let E=f[0];const y=new Set,_=(a,i=++f[0])=>{E!==i&&(E=i,y.forEach(r=>r(a,i)))};let j=f[1];const O=(a=++f[1])=>(j!==a&&!y.size&&(j=a,g.forEach(([i])=>{const r=i[1](a);r>E&&(E=r)})),E),P=a=>(i,r)=>{const I=[...i];I[1]=[a,...I[1]],_(I,r)},g=new Map,J=(a,i)=>{if((B?"production":void 0)!=="production"&&g.has(a))throw new Error("prop listener already exists");if(y.size){const r=i[3](P(a));g.set(a,[i,r])}else g.set(a,[i])},q=a=>{var i;const r=g.get(a);r&&(g.delete(a),(i=r[1])==null||i.call(r))},ue=a=>(y.add(a),y.size===1&&g.forEach(([r,I],D)=>{if((B?"production":void 0)!=="production"&&I)throw new Error("remove already exists");const k=r[3](P(D));g.set(D,[r,k])}),()=>{y.delete(a),y.size===0&&g.forEach(([r,I],D)=>{I&&(I(),g.set(D,[r]))})}),K=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(K,{deleteProperty(a,i){const r=Reflect.get(a,i);q(i);const I=Reflect.deleteProperty(a,i);return I&&_(["delete",[i],r]),I},set(a,i,r,I){const D=Reflect.has(a,i),k=Reflect.get(a,i,I);if(D&&(e(k,r)||d.has(r)&&e(k,d.get(r))))return!0;q(i),Y(r)&&(r=he(r)||r);let $=r;if(r instanceof Promise)r.then(L=>{r.status="fulfilled",r.value=L,_(["resolve",[i],L])}).catch(L=>{r.status="rejected",r.reason=L,_(["reject",[i],L])});else{!W.has(r)&&s(r)&&($=C(r));const L=!x.has($)&&W.get($);L&&J(i,L)}return Reflect.set(a,i,$,I),_(["set",[i],r,k]),!0}});d.set(o,V);const fe=[K,O,c,ue];return W.set(V,fe),Reflect.ownKeys(o).forEach(a=>{const i=Object.getOwnPropertyDescriptor(o,a);"value"in i&&(V[a]=o[a],delete i.value,delete i.writable),Object.defineProperty(K,a,i)}),V})=>[C,W,x,e,t,s,n,l,c,d,f],[ye]=ge();function A(e={}){return ye(e)}function S(e,t,s){const n=W.get(e);(B?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let l;const c=[],d=n[3];let f=!1;const o=d(h=>{c.push(h),l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function _e(e,t){const s=W.get(e);(B?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[n,l,c]=s;return c(n,l(),t)}const u=A({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:u,subscribe(e){return S(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Buffer.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const d=new URL(n);return d.searchParams.set("startapp",c),d.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(m.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},ve=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=A({enabled:ve,userSessionId:"",events:[],connectedWalletId:void 0}),Ee={state:p,subscribe(e){return S(p.events,()=>e(_e(p.events[p.events.length-1])))},initialize(){p.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){p.connectedWalletId=e},click(e){if(p.enabled){const t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track(e){if(p.enabled){const t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view(e){if(p.enabled){const t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},w=A({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),v={state:w,subscribe(e){return S(w,()=>e(w))},setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},z=A({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),T={state:z,subscribe(e){return S(z,()=>e(z))},setConfig(e){var t,s;Ee.initialize(),v.setChains(e.chains),v.setIsAuth(!!e.enableAuthMode),v.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),v.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),m.setModalVersionInStorage(),Object.assign(z,e)}};var we=Object.defineProperty,se=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ce=(e,t)=>{for(var s in t||(t={}))be.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))Oe.call(t,s)&&ne(e,s,t[s]);return e};const H="https://explorer-api.walletconnect.com",X="wcm",G="js-2.7.0";async function Z(e,t){const s=Ce({sdkType:X,sdkVersion:G},t),n=new URL(e,H);return n.searchParams.append("projectId",T.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&n.searchParams.append(c,String(d))}),(await fetch(n)).json()}const M={async getDesktopListings(e){return Z("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return Z("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return Z("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return Z("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${H}/w3m/v1/getWalletImage/${e}?projectId=${T.state.projectId}&sdkType=${X}&sdkVersion=${G}`},getAssetImageUrl(e){return`${H}/w3m/v1/getAssetImage/${e}?projectId=${T.state.projectId}&sdkType=${X}&sdkVersion=${G}`}};var Le=Object.defineProperty,oe=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pe=(e,t)=>{for(var s in t||(t={}))We.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))Ae.call(t,s)&&re(e,s,t[s]);return e};const ie=m.isMobile(),b=A({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Re={state:b,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=T.state;if(e==="NONE"||t==="ALL"&&!e)return b.recomendedWallets;if(m.isArray(e)){const n={recommendedIds:e.join(",")},{listings:l}=await M.getAllListings(n),c=Object.values(l);c.sort((d,f)=>{const C=e.indexOf(d.id),o=e.indexOf(f.id);return C-o}),b.recomendedWallets=c}else{const{chains:s,isAuth:n}=v.state,l=s==null?void 0:s.join(","),c=m.isArray(t),d={page:1,sdks:n?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=ie?await M.getMobileListings(d):await M.getDesktopListings(d);b.recomendedWallets=Object.values(f)}return b.recomendedWallets},async getWallets(e){const t=Pe({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=T.state,{recomendedWallets:l}=b;if(n==="ALL")return b.wallets;l.length?t.excludedIds=l.map(E=>E.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(",")),m.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),v.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:d}=e,{listings:f,total:C}=ie?await M.getMobileListings(t):await M.getDesktopListings(t),o=Object.values(f),h=d?"search":"wallets";return b[h]={listings:[...b[h].listings,...o],total:C,page:c??1},{listings:o,total:C}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){b.search={listings:[],total:0,page:1}}},U=A({open:!1}),F={state:U,subscribe(e){return S(U,()=>e(U))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=v.state;if(m.removeWalletConnectDeepLink(),v.setWalletConnectUri(e==null?void 0:e.uri),v.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&n)U.open=!0,t();else{const l=setInterval(()=>{const c=v.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),U.open=!0,t())},200)}})},close(){U.open=!1}};var Me=Object.defineProperty,ae=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,je=(e,t)=>{for(var s in t||(t={}))Ne.call(t,s)&&le(e,s,t[s]);if(ae)for(var s of ae(t))Se.call(t,s)&&le(e,s,t[s]);return e};function De(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const R=A({themeMode:De()?"dark":"light"}),ce={state:R,subscribe(e){return S(R,()=>e(R))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(R.themeMode=t),s&&(R.themeVariables=je({},s))}},N=A({open:!1,message:"",variant:"success"}),Ve={state:N,subscribe(e){return S(N,()=>e(N))},openToast(e,t){N.open=!0,N.message=e,N.variant=t},closeToast(){N.open=!1}};class Ue{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),T.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-B4S74HTW.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),v.setIsUiLoaded(!0)}}}const $e=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ue},Symbol.toStringTag,{value:"Module"}));export{m as C,Re as E,F as M,v as O,de as R,ce as T,Ve as a,Ee as b,T as c,$e as i};