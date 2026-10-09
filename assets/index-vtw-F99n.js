var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),ArrayBuffer.isView||(ArrayBuffer.isView=e=>typeof e==`object`&&!!e&&e.buffer instanceof ArrayBuffer),typeof globalThis>`u`&&typeof window<`u`&&(window.globalThis=window),typeof FormData>`u`&&(globalThis.FormData=class{});var l={JOIN_ROOM:10,ERROR:11,LEAVE_ROOM:12,ROOM_DATA:13,ROOM_STATE:14,ROOM_STATE_PATCH:15,ROOM_DATA_SCHEMA:16,ROOM_DATA_BYTES:17,PING:18,ROOM_INPUT_RELIABLE:19,ROOM_INPUT_UNRELIABLE:20,ROOM_REQUEST:21,ROOM_RESPONSE:22},u={TIMED:128,UNRELIABLE:64},d={OK:0,REJECTED:1,ERROR:2},f={INPUT_REFLECTION:1,INPUT_OPTIONS:2},p={RENDER_TIME:1,FIXED_TIMESTEP:2,PATCH_RATE:4,SUB_STEPS:8,RECKON_TIME:16},m={NORMAL_CLOSURE:1e3,GOING_AWAY:1001,NO_STATUS_RECEIVED:1005,ABNORMAL_CLOSURE:1006,CONSENTED:4e3,SERVER_SHUTDOWN:4001,WITH_ERROR:4002,FAILED_TO_RECONNECT:4003,MAY_TRY_RECONNECT:4010},h=class extends Error{code;headers;status;response;data;constructor(e,t,n){super(t),this.name=`ServerError`,this.code=e,n&&(this.headers=n.headers,this.status=n.status,this.response=n.response,this.data=n.data)}},g=class e extends Error{code;constructor(t,n){super(t),this.code=n,this.name=`MatchMakeError`,Object.setPrototypeOf(this,e.prototype)}},_=255,v=213,y;(function(e){e[e.ADD=128]=`ADD`,e[e.REPLACE=0]=`REPLACE`,e[e.DELETE=64]=`DELETE`,e[e.DELETE_AND_MOVE=96]=`DELETE_AND_MOVE`,e[e.MOVE_AND_ADD=160]=`MOVE_AND_ADD`,e[e.DELETE_AND_ADD=192]=`DELETE_AND_ADD`,e[e.CLEAR=10]=`CLEAR`,e[e.REVERSE=15]=`REVERSE`,e[e.MOVE=32]=`MOVE`,e[e.DELETE_BY_REFID=33]=`DELETE_BY_REFID`,e[e.ADD_BY_REFID=129]=`ADD_BY_REFID`})(y||={}),Symbol.metadata??=Symbol.for(`Symbol.metadata`);function b(e){Object.defineProperty(e,Symbol.metadata,{value:void 0,writable:!0,configurable:!0,enumerable:!1})}var x=(function(){return typeof globalThis<`u`?globalThis:typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{}})();if(typeof Symbol==`function`&&typeof Symbol.for!=`function`){let e=`colyseus.symbolRegistry`,t=x[e]||(x[e]=Object.create(null));Symbol.for=function(e){return t[e]||(t[e]=Symbol(e))},Symbol.keyFor=function(e){for(let n in t)if(t[n]===e)return n}}var S=Symbol.for(`$refId`),C=`~track`,w=`~encoder`,T=`~decoder`,E=`~filter`,D=`~getByIndex`,O=`~deleteByIndex`,k=`~resyncPrune`,A=Symbol.for(`$changes`),j=Symbol.for(`$childType`),M=Symbol.for(`$proxyTarget`),N=`~onEncodeEnd`,ee=`~reset`,te=`~onDecodeEnd`,P=Symbol.for(`$values`),ne=`~builder`,re=`~descriptors`,ie=`~__encodeDescriptor`,ae=`~encoders`,F=`~__numFields`,oe=`~__refTypeFieldIndexes`,I=`~__viewFieldIndexes`,L=`$__fieldIndexesByViewTag`,se=`~__unreliableFieldIndexes`,ce=`~__patchOnlyFieldIndexes`,le=`~__fullSyncSkipIndexes`,ue=`~__fullStateOnlyFieldIndexes`,de=`~__streamFieldIndexes`,fe=`~__streamPriorities`;try{new TextEncoder}catch{}var pe=new ArrayBuffer(8),me=new Int32Array(pe),he=new Float32Array(pe),ge=new Float64Array(pe),_e=new BigInt64Array(pe),ve=typeof Buffer<`u`&&Buffer.byteLength?Buffer.byteLength:function(e,t){for(var n=0,r=0,i=0,a=e.length;i<a;i++)n=e.charCodeAt(i),n<128?r+=1:n<2048?r+=2:n<55296||n>=57344?r+=3:(i++,r+=4);return r};function ye(e,t,n){for(var r=0,i=0,a=t.length;i<a;i++)r=t.charCodeAt(i),r<128?e[n.offset++]=r:r<2048?(e[n.offset]=192|r>>6,e[n.offset+1]=128|r&63,n.offset+=2):r<55296||r>=57344?(e[n.offset]=224|r>>12,e[n.offset+1]=128|r>>6&63,e[n.offset+2]=128|r&63,n.offset+=3):(i++,r=65536+((r&1023)<<10|t.charCodeAt(i)&1023),e[n.offset]=240|r>>18,e[n.offset+1]=128|r>>12&63,e[n.offset+2]=128|r>>6&63,e[n.offset+3]=128|r&63,n.offset+=4)}function R(e,t,n){e[n.offset++]=t&255}function be(e,t,n){e[n.offset++]=t&255}function xe(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255}function Se(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255}function z(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255,e[n.offset++]=t>>16&255,e[n.offset++]=t>>24&255}function Ce(e,t,n){let r=t>>24,i=t>>16,a=t>>8,o=t;e[n.offset++]=o&255,e[n.offset++]=a&255,e[n.offset++]=i&255,e[n.offset++]=r&255}function B(e,t,n){let r=Math.floor(t/2**32);Ce(e,t>>>0,n),Ce(e,r,n)}function V(e,t,n){let r=t/2**32|0;Ce(e,t>>>0,n),Ce(e,r,n)}function we(e,t,n){_e[0]=BigInt.asIntN(64,t),z(e,me[0],n),z(e,me[1],n)}function Te(e,t,n){_e[0]=BigInt.asIntN(64,t),z(e,me[0],n),z(e,me[1],n)}function Ee(e,t,n){he[0]=t,z(e,me[0],n)}function De(e,t,n){ge[0]=t,z(e,me[0],n),z(e,me[1],n)}function Oe(e,t,n){e[n.offset++]=+!!t}function ke(e,t,n){t||=``;let r=ve(t,`utf8`),i=0;if(r<32)e[n.offset++]=r|160,i=1;else if(r<256)e[n.offset++]=217,e[n.offset++]=r,i=2;else if(r<65536)e[n.offset++]=218,Se(e,r,n),i=3;else if(r<4294967296)e[n.offset++]=219,Ce(e,r,n),i=5;else throw Error(`String too long`);return ye(e,t,n),i+r}function Ae(e,t,n){return isNaN(t)?Ae(e,0,n):isFinite(t)?t===(t|0)?t>=0?t<128?(e[n.offset++]=t&255,1):t<256?(e[n.offset++]=204,e[n.offset++]=t&255,2):t<65536?(e[n.offset++]=205,Se(e,t,n),3):t<4294967296?(e[n.offset++]=206,Ce(e,t,n),5):(e[n.offset++]=207,V(e,t,n),9):t>=-32?(e[n.offset++]=224|t+32,1):t>=-128?(e[n.offset++]=208,R(e,t,n),2):t>=-32768?(e[n.offset++]=209,xe(e,t,n),3):t>=-2147483648?(e[n.offset++]=210,z(e,t,n),5):(e[n.offset++]=211,B(e,t,n),9):Math.abs(t)<=34028235e31&&(he[0]=t,Math.abs(Math.abs(he[0])-Math.abs(t))<1e-4)?(e[n.offset++]=202,Ee(e,t,n),5):(e[n.offset++]=203,De(e,t,n),9):Ae(e,t>0?2**53-1:-(2**53-1),n)}var H={int8:R,uint8:be,int16:xe,uint16:Se,int32:z,uint32:Ce,int64:B,uint64:V,bigint64:we,biguint64:Te,float32:Ee,float64:De,boolean:Oe,string:ke,number:Ae,utf8Write:ye,utf8Length:ve},je=new ArrayBuffer(8),Me=new Int32Array(je),Ne=new Float32Array(je),Pe=new Float64Array(je),Fe=new BigUint64Array(je),Ie=new BigInt64Array(je);function Le(e,t,n){n>e.length-t.offset&&(n=e.length-t.offset);for(var r=``,i=0,a=t.offset,o=t.offset+n;a<o;a++){var s=e[a];if(!(s&128))r+=String.fromCharCode(s);else if((s&224)==192)r+=String.fromCharCode((s&31)<<6|e[++a]&63);else if((s&240)==224)r+=String.fromCharCode((s&15)<<12|(e[++a]&63)<<6|e[++a]&63);else if((s&248)==240)i=(s&7)<<18|(e[++a]&63)<<12|(e[++a]&63)<<6|e[++a]&63,i>=65536?(i-=65536,r+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):r+=String.fromCharCode(i);else{console.error(`decode.utf8Read(): Invalid byte `+s+` at offset `+a+`. Skip to end of string: `+(t.offset+n));break}}return t.offset+=n,r}function Re(e,t){return ze(e,t)<<24>>24}function ze(e,t){return e[t.offset++]}function Be(e,t){return Ve(e,t)<<16>>16}function Ve(e,t){return e[t.offset++]|e[t.offset++]<<8}function He(e,t){return e[t.offset++]|e[t.offset++]<<8|e[t.offset++]<<16|e[t.offset++]<<24}function Ue(e,t){return He(e,t)>>>0}function We(e,t){return Me[0]=He(e,t),Ne[0]}function Ge(e,t){return Me[0]=He(e,t),Me[1]=He(e,t),Pe[0]}function Ke(e,t){let n=Ue(e,t);return He(e,t)*2**32+n}function qe(e,t){let n=Ue(e,t);return Ue(e,t)*2**32+n}function Je(e,t){return Me[0]=He(e,t),Me[1]=He(e,t),Ie[0]}function Ye(e,t){return Me[0]=He(e,t),Me[1]=He(e,t),Fe[0]}function Xe(e,t){return ze(e,t)>0}function Ze(e,t){let n=e[t.offset++],r;return n<192?r=n&31:n===217?r=ze(e,t):n===218?r=Ve(e,t):n===219&&(r=Ue(e,t)),Le(e,t,r)}function Qe(e,t){let n=e[t.offset++];if(n<128)return n;if(n===202)return We(e,t);if(n===203)return Ge(e,t);if(n===204)return ze(e,t);if(n===205)return Ve(e,t);if(n===206)return Ue(e,t);if(n===207)return qe(e,t);if(n===208)return Re(e,t);if(n===209)return Be(e,t);if(n===210)return He(e,t);if(n===211)return Ke(e,t);if(n>223)return(255-n+1)*-1}function $e(e,t){let n=e[t.offset];return n<192&&n>160||n===217||n===218||n===219}var et={utf8Read:Le,int8:Re,uint8:ze,int16:Be,uint16:Ve,int32:He,uint32:Ue,float32:We,float64:Ge,int64:Ke,uint64:qe,bigint64:Je,biguint64:Ye,boolean:Xe,string:Ze,number:Qe,stringCheck:$e},tt={},nt=new Map;function rt(e,t){t.constructor&&(Object.prototype.hasOwnProperty.call(t,`constructor`)&&t.constructor[Symbol.metadata]==null&&b(t.constructor),nt.set(t.constructor,e),tt[e]=t),t.encode&&(H[e]=t.encode),t.decode&&(et[e]=t.decode)}function it(e){return tt[e]}var at="ArraySchema does not support streaming — positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";function ot(){return{pendingByView:new Map,sentByView:new Map,broadcastPending:new Set,sentBroadcast:new Set,broadcastDeletes:new Set,maxPerTick:32}}function st(e){return e._stream??=ot()}function ct(e,t,n){t.activeViews.size===0&&st(e).broadcastPending.add(n)}function lt(e,t,n,r){let i=e._stream;if(i===void 0)return!0;let a=!1;return i.broadcastPending.delete(r)?a=!0:i.sentBroadcast.delete(r)&&i.broadcastDeletes.add(r),t.forEachActiveView(e=>{let t=i.pendingByView.get(e.id);if(t?.has(r)){t.delete(r),a=!0;return}let o=i.sentByView.get(e.id);if(o?.has(r)){o.delete(r);let t=e.changes.get(n);t===void 0&&(t=new Map,e.changes.set(n,t)),t.set(r,y.DELETE)}}),a}function ut(e,t,n){let r=e._stream;if(r!==void 0){r.broadcastPending.clear();for(let e of r.sentBroadcast)r.broadcastDeletes.add(e);r.sentBroadcast.clear(),t.forEachActiveView(e=>{r.pendingByView.get(e.id)?.clear();let t=r.sentByView.get(e.id);if(t!==void 0&&t.size>0){let r=e.changes.get(n);r===void 0&&(r=new Map,e.changes.set(n,r));for(let e of t)r.set(e,y.DELETE);t.clear()}})}}function dt(e,t){let n=e._stream?.pendingByView;if(n===void 0)return!1;for(let[e,r]of n)if(r.size>0&&t.activeViews.get(e)?.deref()!==void 0)return!0;return!1}function ft(e){let t=e._stream;return t!==void 0&&(t.broadcastPending.size>0||t.broadcastDeletes.size>0)}function pt(e,t,n){let r=st(e),i=r.pendingByView.get(t);i===void 0&&(i=new Set,r.pendingByView.set(t,i)),i.add(n)}function mt(e,t){let n=e._stream;n!==void 0&&(n.pendingByView.delete(t),n.sentByView.delete(t),n.priorityByView?.delete(t))}var ht={8:`uint8`,16:`uint16`,32:`uint32`};function gt(e){if(typeof e!=`object`||!e)throw Error(`t.quantized(): options object with { min, max } is required.`);let{min:t,max:n}=e;if(typeof t!=`number`||typeof n!=`number`||!(n>t)||!Number.isFinite(t)||!Number.isFinite(n))throw Error(`t.quantized(): require finite min < max (got min=${t}, max=${n}).`);let r=e.bits??16;if(r!==8&&r!==16&&r!==32)throw Error(`t.quantized(): bits must be 8, 16 or 32 (got ${r}).`);let i=e.mode??`clamp`;if(i!==`clamp`&&i!==`wrap`)throw Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(i)}).`);let a=i===`wrap`,o=2**r;return{min:t,max:n,bits:r,wrap:a,wire:ht[r],range:n-t,span:a?o:t===-n?o-2:o-1}}function _t(e){return typeof e==`object`&&!!e&&e.quantized!==void 0}function vt(e,t){if(e.wrap){if(!Number.isFinite(t))return 0;let n=e.range,r=(t-e.min)%n;r<0&&(r+=n);let i=e.span;return Math.floor(r/n*i+.5)%i}if(t!==t)return 0;let n=t<e.min?e.min:t>e.max?e.max:t;return Math.floor((n-e.min)/e.range*e.span+.5)}function yt(e,t){return e.min+t/e.span*e.range}function bt(e){let t=H[e.wire];return(n,r,i)=>t(n,vt(e,r),i)}function xt(e,t,n){let r=et[e.wire];return yt(e,r(t,n))}var St=class e{types={};schemas=new Map;hasFilters=!1;static inheritedTypes=new Map;static cachedContexts=new Map;static register(t){let n=Object.getPrototypeOf(t);if(n!==Nr){let r=e.inheritedTypes.get(n);r||(r=new Set,e.inheritedTypes.set(n,r)),r.add(t)}}static cache(t){let n=e.cachedContexts.get(t);return n||(n=new e(t),e.cachedContexts.set(t,n)),n}constructor(e){e&&this.discoverTypes(e)}has(e){return this.schemas.has(e)}get(e){return this.types[e]}add(e,t=this.schemas.size){return!this.schemas.has(e)&&(this.types[t]=e,e[Symbol.metadata]??kt.initialize(e),this.schemas.set(e,t),!0)}getTypeId(e){return this.schemas.get(e)}discoverTypes(t){if(!this.add(t))return;e.inheritedTypes.get(t)?.forEach(e=>{this.discoverTypes(e)});let n=t;for(;(n=Object.getPrototypeOf(n))&&n!==Nr&&n!==Function.prototype;)this.discoverTypes(n);let r=t[Symbol.metadata];(r[I]||r[de])&&(this.hasFilters=!0);for(let e in r){let t=r[e].type;if(typeof t!=`string`&&!_t(t)){if(typeof t==`function`)this.discoverTypes(t);else{let e=Object.values(t)[0];if(typeof e==`string`)continue;this.discoverTypes(e)}}}}debug(){return`TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`}},Ct=63;function wt(e){let t=typeof Object.keys(e)[0]==`string`&&it(Object.keys(e)[0]);return{complexTypeKlass:t,childType:t?Object.values(e)[0]:e}}function Tt(e){if(Array.isArray(e))return{array:Tt(e[0])};if(_t(e))return typeof e.quantized.wire==`string`?e:{quantized:gt(e.quantized)};if(e.type!==void 0)return e.type;if(Et(e))return Object.keys(e).every(t=>typeof e[t]==`string`)?`string`:`number`;if(typeof e==`object`&&e){let t=Object.keys(e).find(e=>tt[e]!==void 0);if(t)return e[t]=Tt(e[t]),e}return e}function Et(e){if(typeof e==`function`&&e[Symbol.metadata])return!1;let t=Object.keys(e),n=t.filter(e=>/\d+/.test(e));return!!(n.length>0&&n.length===t.length/2&&e[e[n[0]]]==n[0]||t.length>0&&t.every(t=>typeof e[t]==`string`&&e[t]===t))}var Dt=[oe,se,ce,le,ue,de,ae];function Ot(e,t,n){e[t]||Object.defineProperty(e,t,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[t].push(n)}var kt={addField(e,t,n,r,i){if(t>=Ct)throw Error(`Can't define field '${n}'.\nSchema instances may only have up to ${Ct} fields.`);e[t]=Object.assign(e[t]||{},{type:Tt(r),index:t,name:n}),Object.defineProperty(e,re,{value:e[re]||{},enumerable:!1,configurable:!0}),i?e[re][n]=i:e[re][n]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(e,F,{value:t,enumerable:!1,configurable:!0}),Object.defineProperty(e,n,{value:t,enumerable:!1,configurable:!0}),typeof e[t].type!=`string`&&!_t(e[t].type)&&(e[oe]===void 0&&Object.defineProperty(e,oe,{value:[],enumerable:!1,configurable:!0}),e[oe].push(t));let a=e[t].type;if(a&&typeof a==`object`&&a.stream!==void 0){if(a.array!==void 0)throw Error(at);e[t].stream=!0,e[de]||Object.defineProperty(e,de,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[de].includes(t)||e[de].push(t);let i=r?.priority;typeof i==`function`&&kt.setStreamPriority(e,n,i)}},setTag(e,t,n){let r=e[t],i=e[r];if(i.tag=n,e[I]||(Object.defineProperty(e,I,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(e,L,{value:{},enumerable:!1,configurable:!0})),e[I].push(r),n<0)e[L][n]||(e[L][n]=[]),e[L][n].push(r);else for(let t=n;t>0;t&=t-1){let n=t&-t;e[L][n]||(e[L][n]=[]),e[L][n].push(r)}},setUnreliable(e,t){let n=e[t];if(typeof e[n].type!=`string`)throw Error(`@unreliable cannot be applied to ref-type field "${t}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);e[n].unreliable=!0,e[se]||Object.defineProperty(e,se,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[se].push(n)},setPatchOnly(e,t){let n=e[t];if(e[n].fullStateOnly)throw Error(`field "${t}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);e[n].patchOnly=!0,Ot(e,ce,n),Ot(e,le,n)},setDeprecated(e,t){let n=e[t];e[n].deprecated=!0,Ot(e,le,n),Object.defineProperty(e,n,{value:e[n],enumerable:!1,configurable:!0})},setFullStateOnly(e,t){let n=e[t];if(e[n].patchOnly)throw Error(`field "${t}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);e[n].fullStateOnly=!0,Ot(e,ue,n)},setStream(e,t){let n=e[t];e[n].stream=!0,e[de]||Object.defineProperty(e,de,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[de].push(n)},setStreamPriority(e,t,n){let r=e[t];e[fe]||Object.defineProperty(e,fe,{value:{},enumerable:!1,configurable:!0,writable:!0}),e[fe][r]=n},getStreamPriority(e,t){return e?.[fe]?.[t]},defineField(e,t,n,r,i){let a=Tt(i),{complexTypeKlass:o,childType:s}=wt(a);kt.addField(t,n,r,a,Or(r,n,s,o)),t[re][r]&&Object.defineProperty(e.prototype,r,t[re][r]),(typeof a==`string`||_t(a))&&(t[ae]||Object.defineProperty(t,ae,{value:[],enumerable:!1,configurable:!0,writable:!0}),t[ae][n]=typeof a==`string`?H[a]:bt(a.quantized))},setFields(e,t){let n=e.prototype.constructor;St.register(n);let r=Object.getPrototypeOf(n),i=r&&r[Symbol.metadata],a=kt.initialize(n);n[`~track`]||(n[C]=Nr[C]),n[`~encoder`]||(n[w]=Nr[w]),n[`~decoder`]||(n[T]=Nr[T]),n.prototype.toJSON||(n.prototype.toJSON=Nr.prototype.toJSON);let o=a[`~__numFields`]??(i&&i[`~__numFields`])??-1;o++,a[ae]||Object.defineProperty(a,ae,{value:i?.[ae]?[...i[ae]]:[],enumerable:!1,configurable:!0,writable:!0});for(let e in t){if(a[e]!==void 0)throw Error(`@colyseus/schema: Duplicate '${e}' definition on '${n.name||`(anonymous)`}'.`);kt.defineField(n,a,o,e,t[e]),o++}return e},isDeprecated(e,t){return e[t].deprecated===!0},initialize(e){let t=Object.getPrototypeOf(e),n=t[Symbol.metadata],r=e[Symbol.metadata]??Object.create(null);if(t!==Nr&&r===n&&(r=Object.create(null),n)){Object.setPrototypeOf(r,n),Object.defineProperty(r,F,{value:n[F],enumerable:!1,configurable:!0,writable:!0}),n[I]!==void 0&&(Object.defineProperty(r,I,{value:[...n[I]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(r,L,{value:{...n[L]},enumerable:!1,configurable:!0,writable:!0}));for(let e of Dt){let t=n[e];t!==void 0&&Object.defineProperty(r,e,{value:[...t],enumerable:!1,configurable:!0,writable:!0})}Object.defineProperty(r,re,{value:{...n[re]},enumerable:!1,configurable:!0,writable:!0})}return Object.defineProperty(e,Symbol.metadata,{value:r,writable:!1,configurable:!0}),r},isValidInstance(e){return e.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(e.constructor[Symbol.metadata],`~__numFields`)},getFields(e){let t=e[Symbol.metadata],n={};for(let e=0;e<=t[F];e++)n[t[e].name]=t[e].type;return n},hasViewTagAtIndex(e,t){return e?.[I]?.includes(t)},hasUnreliableAtIndex(e,t){return e?.[se]?.includes(t)},hasPatchOnlyAtIndex(e,t){return e?.[ce]?.includes(t)},hasFullStateOnlyAtIndex(e,t){return e?.[ue]?.includes(t)},hasStreamAtIndex(e,t){return e?.[de]?.includes(t)}},At=(e,t,n)=>e(t,n),jt=class{dirtyLow=0;dirtyHigh=0;ops;constructor(e){this.ops=new Uint8Array(Math.max(e+1,1))}record(e,t){let n=this.ops[e];n===0?this.ops[e]=t:(n===y.DELETE||n===y.ADD&&t===y.DELETE_AND_ADD)&&(this.ops[e]=y.DELETE_AND_ADD),e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordDelete(e,t){this.ops[e]=t,e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordRaw(e,t){this.record(e,t)}operationAt(e){let t=this.ops[e];return t===0?void 0:t}setOperationAt(e,t){this.ops[e]=t}forEach(e){this.forEachWithCtx(e,At)}forEachWithCtx(e,t){let n=this.dirtyLow,r=this.dirtyHigh,i=this.ops;for(;n!==0;){let r=n&-n,a=31-Math.clz32(r);n^=r,t(e,a,i[a])}for(;r!==0;){let n=r&-r,a=31-Math.clz32(n)+32;r^=n,t(e,a,i[a])}}size(){return Nt(this.dirtyLow)+Nt(this.dirtyHigh)}has(){return(this.dirtyLow|this.dirtyHigh)!==0}reset(){this.dirtyLow=0,this.dirtyHigh=0,this.ops.fill(0)}},Mt=class{dirty=new Map;pureOps=[];record(e,t){let n=this.dirty.get(e);n===void 0?this.dirty.set(e,t):(n===y.DELETE||n===y.ADD&&t===y.DELETE_AND_ADD)&&this.dirty.set(e,y.DELETE_AND_ADD)}recordDelete(e,t){this.dirty.set(e,t)}recordRaw(e,t){this.dirty.set(e,t)}recordPure(e){this.pureOps.push([this.dirty.size,e])}operationAt(e){return this.dirty.get(e)}setOperationAt(e,t){this.dirty.has(e)&&this.dirty.set(e,t)}forEach(e){this.forEachWithCtx(e,At)}forEachWithCtx(e,t){let n=this.pureOps;if(n.length>0){let r=0,i=0;for(let[a,o]of this.dirty){for(;r<n.length&&n[r][0]<=i;){let i=n[r++][1];t(e,-i,i)}t(e,a,o),i++}for(;r<n.length;){let i=n[r++][1];t(e,-i,i)}}else for(let[n,r]of this.dirty)t(e,n,r)}size(){return this.dirty.size+this.pureOps.length}has(){return this.dirty.size>0||this.pureOps.length>0}reset(){this.dirty.clear(),this.pureOps.length=0}shift(e){let t=new Map;for(let[n,r]of this.dirty)t.set(n+e,r);this.dirty=t}};function Nt(e){return e-=e>>>1&1431655765,e=(e&858993459)+(e>>>2&858993459),(e+(e>>>4)&252645135)*16843009>>>24}function Pt(e){if(e===void 0)return 0;let t=0;for(let n=0,r=e.length;n<r;n++){let r=e[n];r<32&&(t|=1<<r)}return t}function Ft(e){let t=[],n=[],r=[],i=[],a=e?.[F];if(a===void 0)return{names:t,types:n,tags:r,encoders:i};let o=e[ae];for(let s=0;s<=a;s++){let a=e[s];a===void 0?(t[s]=void 0,n[s]=void 0,r[s]=void 0,i[s]=void 0):(t[s]=a.name,n[s]=a.type,r[s]=a.tag,i[s]=o?.[s])}return{names:t,types:n,tags:r,encoders:i}}function It(e){let t=e.constructor;if(Object.prototype.hasOwnProperty.call(t,ie))return t[ie];let n=t[Symbol.metadata],r=kt.isValidInstance(e),i=(n?.[I]?.length??0)>0,a=Ft(n),o=r&&!i?void 0:t[E],s={encoder:t[w],filter:o,metadata:n,isSchema:r,filterBitmask:r?Pt(n?.[I]):0,hasAnyFullStateOnly:(n?.[ue]?.length??0)>0,hasAnyUnreliable:(n?.[se]?.length??0)>0,hasAnyStream:(n?.[de]?.length??0)>0,hasAnyView:i,fullStateOnlyBitmask:Pt(n?.[ue]),unreliableBitmask:Pt(n?.[se]),streamBitmask:Pt(n?.[de]),names:a.names,types:a.types,tags:a.tags,encoders:a.encoders};return Object.defineProperty(t,ie,{value:s,enumerable:!1,writable:!0,configurable:!0}),s}function Lt(e,t,n){e.parentRef&&(e.parentRef[A]===t[A]||Vt(e,(e,n)=>e[A]===t[A]))?e._parentIndex=n:e.parentRef===void 0?(e.parentRef=t,e._parentIndex=n):(e.extraParents={ref:e.parentRef,index:e._parentIndex,next:e.extraParents},e.parentRef=t,e._parentIndex=n)}function Rt(e,t,n){if(e.extraParents===void 0)e._parentIndex=n;else if(e.parentRef[A]===t[A])e._parentIndex=n;else for(let r=e.extraParents;r!==void 0;r=r.next)if(r.ref[A]===t[A]){r.index=n;return}}function zt(e,t){if(e.parentRef&&e.parentRef[A]===t[A])return e.extraParents?(e.parentRef=e.extraParents.ref,e._parentIndex=e.extraParents.index,e.extraParents=e.extraParents.next):(e.parentRef=void 0,e._parentIndex=void 0),!0;let n=e.extraParents,r=null;for(;n;){if(n.ref[A]===t[A])return r?r.next=n.next:e.extraParents=n.next,!0;r=n,n=n.next}return e.parentRef===void 0}function Bt(e,t){if(e.parentRef!==void 0&&t(e.parentRef,e._parentIndex))return{ref:e.parentRef,index:e._parentIndex};for(let n=e.extraParents;n!==void 0;n=n.next)if(t(n.ref,n.index))return{ref:n.ref,index:n.index}}function Vt(e,t){if(e.parentRef!==void 0&&t(e.parentRef,e._parentIndex))return!0;for(let n=e.extraParents;n!==void 0;n=n.next)if(t(n.ref,n.index))return!0;return!1}function Ht(e,t){if(e.parentRef&&e.parentRef[A]===t[A])return e._parentIndex;for(let n=e.extraParents;n!==void 0;n=n.next)if(n.ref[A]===t[A])return n.index}function Ut(e){let t=[];e.parentRef&&t.push({ref:e.parentRef,index:e._parentIndex});let n=e.extraParents;for(;n;)t.push({ref:n.ref,index:n.index}),n=n.next;return t}function Wt(e,t,n){let r=t.refTarget;if(t.isArray){let t=r.items,i=t[n];if(i!==void 0&&i[A]===e)return!0;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r!==void 0&&r[A]===e)return!0}return!1}let i=t.getValue(n);return i!==void 0&&i[A]===e}var Gt=(e,t)=>{e.isFieldUnreliable(t)?e.ensureUnreliableRecorder().record(t,y.ADD):e.record(t,y.ADD)},Kt=(e,t)=>e(t);function qt(e,t){Jt(e,t,Kt)}function Jt(e,t,n){let r=e.refTarget;if(r[j]!==void 0){if(e.isPatchOnly)return;if(Array.isArray(r.items)){let e=r.items;for(let r=0,i=e.length;r<i;r++)e[r]!==void 0&&n(t,r)}else if(r.journal!==void 0)for(let[e,i]of r.journal.keyByIndex)r.$items.has(i)&&n(t,e);else if(r.$items!==void 0)for(let e of r.$items.keys())n(t,e)}else{let i=e.metadata;if(!i)return;let a=i[`~__numFields`]??-1,o=i[le],s=e.encDescriptor.names;for(let e=0;e<=a;e++){let i=s[e];i===void 0||o&&o.includes(e)||r[i]!=null&&n(t,e)}}}function Yt(e,t,n,r){Xt(e,t,n),!e.isFullStateOnly&&(e.has()&&e.root?.enqueueChangeTree(e),e.unreliableRecorder?.has()&&e.root?.enqueueUnreliable(e),!e.has()&&!e.unreliableRecorder?.has()&&e.root?.enqueueChangeTree(e))}function Xt(e,t,n){if(!t)return;let r=t[A],i=!r._isSchema,a;i?(t=r.parent,n=r.parentIndex,a=t?.[A].metadata):a=r.metadata;let o=(a?.[ce]?.includes(n)?wn:0)|(a?.[ue]?.includes(n)?Tn:0),s=r.flags&An|o,c=e.flags;if(e.flags=c|s,s&~c&Tn&&(e.reset(),e.unreliableRecorder?.reset()),!e.root?.types?.hasFilters)return;let l=a?.[I]?.includes(n)??!1,u=a?.[de]?.includes(n)??!1,d=r.isFiltered||l||u;if(e.isFiltered=d,u&&!i){e.isStreamCollection=!0;let t=st(e.ref);if(t.priority===void 0){let e=kt.getStreamPriority(a,n);e!==void 0&&(t.priority=e)}e.root?.registerStream(e.ref)}if(d){let t=Qt(e);e.isVisibilitySharedWithParent=r.isFiltered&&t&&!u&&(!l||i&&a[n].tag!==yr)}}function Zt(e){let t=e.pendingFilterRefresh;for(let e=0;e<t.length;e++){let n=t[e];(n.flags&On)!==0&&$t(n)}t.length=0}function Qt(e){return e._isSchema||typeof e.refTarget[j]!=`string`}function $t(e){e.flags&=~On;let t=e.root;if(t===void 0||e.parentRef===void 0)return;let n=Qt(e),r=an(e,e.parentRef,e._parentIndex,n);for(let t=e.extraParents;t!==void 0&&r!==rn;t=t.next)r|=an(e,t.ref,t.index,n);if(r===0)return;e.isVisibilitySharedWithParent=(r&nn)!==0;let i=(r&tn)===0;i!==e.isFiltered&&(e.isFiltered=i,!i&&!e.isFullStateOnly&&(e.forEachLiveWithCtx(e,Gt),e.has()&&t.enqueueChangeTree(e),e.unreliableRecorder?.has()&&t.enqueueUnreliable(e)),e.forEachChildWithCtx(e,on))}var en=1,tn=2,nn=4,rn=7;function an(e,t,n,r){let i=t[A];if(i.root!==e.root||!Wt(e,i,n))return 0;i.flags&On&&$t(i);let a=en;if(i._isSchema)i.encDescriptor.tags[n]!==void 0||i.isFieldStream(n)||(i.isFiltered?r&&(a|=nn):a|=tn);else if(!i.isFiltered)a|=tn;else if(r&&!i.isStreamCollection){let e=i.parent?.[A];(e?._isSchema?e.encDescriptor.tags[i.parentIndex]:void 0)!==yr&&(a|=nn)}return a}var on=(e,t,n)=>{$t(t)};function sn(e,t,n,r){let i=e.subscribedViews;if(i===void 0)return;let a=e.isStreamCollection,o=a?e.ref:void 0,s=a?void 0:n[A];for(let e=0,n=i.length;e<n;e++){let n=i[e];for(;n!==0;){let c=n&-n;n^=c;let l=e*32+(31-Math.clz32(c)),u=r.activeViews.get(l)?.deref();u===void 0?i[e]&=~c:a?pt(o,l,t):s!==void 0&&u.markVisible(s)}}}function cn(e,t){e.root=t;let n=t.add(e);Yt(e,e.parent,e.parentIndex),n&&fn(e,t,pn)}function ln(e,t,n,r){if(e.addParent(t,r),!n)return;let i=n.add(e);n!==e.root&&(e.root=n,Yt(e,t,r));let a=t?.[A];if(a!==void 0&&a.subscribedViews!==void 0&&t[j]!==void 0&&sn(a,r,e.ref,n),i){let t=mn[hn];t===void 0&&(t={parentRef:void 0,root:void 0},mn[hn]=t),t.parentRef=e.ref,t.root=n,hn++,fn(e,t,gn),hn--}}function un(e,t){fn(e,t,dn)}function dn(e,t,n){e(t,n)}function fn(e,t,n){let r=e.refTarget;if(r[j]){if(typeof r[j]!=`string`){let e=r.items;if(e!==void 0)for(let r=0,i=e.length;r<i;r++){let i=e[r];i&&n(t,i[A],r)}else{let e=r.$items,i=r._collectionIndexes;for(let r of e.keys()){let a=e.get(r);a&&n(t,a[A],i?.[r]??r)}}}}else{let i=e.metadata?.[oe];if(!i)return;let a=e.encDescriptor.names;for(let e=0,o=i.length;e<o;e++){let o=i[e],s=r[a[o]];s&&n(t,s[A],o)}}}function pn(e,t,n){t.root===e?e.add(t):t.setRoot(e)}var mn=[],hn=0;function gn(e,t,n){t.root===e.root?(e.root.add(t),e.root.moveNextToParent(t)):t.setParent(e.parentRef,e.root,n)}function _n(e,t,n){let r=(n&3)<<3;return n<4?e>>>r&255:t>>>r&255}var vn=(e,t,n)=>e(t,n);function yn(){return{next:void 0,tail:void 0,nextPosition:0}}var bn=1,xn=2,Sn=4,Cn=8,wn=16,Tn=32,En=64,Dn=128,On=256,kn=512,An=48,jn=class{ref;refTarget;get isArray(){return this.refTarget!==this.ref}metadata;encDescriptor;root;parentRef;_parentIndex;extraParents;flags=Sn;_fullSyncGen=0;_isSchema=!1;dirtyLow=0;dirtyHigh=0;opsLow=0;opsHigh=0;ops;collDirty;collPureOps;unreliableRecorder;paused=!1;changesNode;unreliableChangesNode;visibleViews;tagViews;subscribedViews;get isFiltered(){return(this.flags&bn)!==0}set isFiltered(e){this.flags=e?this.flags|bn:this.flags&-2}get isVisibilitySharedWithParent(){return(this.flags&xn)!==0}set isVisibilitySharedWithParent(e){this.flags=e?this.flags|xn:this.flags&-3}get isNew(){return(this.flags&Sn)!==0}set isNew(e){this.flags=e?this.flags|Sn:this.flags&-5}get isUnreliable(){return(this.flags&Cn)!==0}set isUnreliable(e){this.flags=e?this.flags|Cn:this.flags&-9}get isPatchOnly(){return(this.flags&wn)!==0}set isPatchOnly(e){this.flags=e?this.flags|wn:this.flags&-17}get isFullStateOnly(){return(this.flags&Tn)!==0}set isFullStateOnly(e){this.flags=e?this.flags|Tn:this.flags&-33}get isStreamCollection(){return(this.flags&En)!==0}set isStreamCollection(e){this.flags=e?this.flags|En:this.flags&-65}get needsRestage(){return(this.flags&Dn)!==0}set needsRestage(e){this.flags=e?this.flags|Dn:this.flags&-129}get hasFilteredFields(){return this.isFiltered||this.encDescriptor.hasAnyView}ensureUnreliableRecorder(){return this.unreliableRecorder===void 0&&(this.unreliableRecorder=this._isSchema?new jt(this.metadata?.[`~__numFields`]??0):new Mt),this.unreliableRecorder}isFieldUnreliable(e){let t=this.encDescriptor;return t.hasAnyUnreliable?e<32?!!(t.unreliableBitmask&1<<e):kt.hasUnreliableAtIndex(this.metadata,e):!1}isFieldFullStateOnly(e){if(this.isFullStateOnly)return!0;let t=this.encDescriptor;return t.hasAnyFullStateOnly?e<32?!!(t.fullStateOnlyBitmask&1<<e):kt.hasFullStateOnlyAtIndex(this.metadata,e):!1}isFieldStream(e){let t=this.encDescriptor;return t.hasAnyStream?e<32?!!(t.streamBitmask&1<<e):kt.hasStreamAtIndex(this.metadata,e):!1}constructor(e,t=e){this.ref=e,this.refTarget=t;let n=It(e);this.encDescriptor=n,this.metadata=n.metadata;let r=n.isSchema;if(this._isSchema=r,this.ops=void 0,this.collDirty=void 0,this.collPureOps=void 0,r){let e=this.metadata?.[`~__numFields`]??0;e>7&&(this.ops=new Uint8Array(e+1))}else this.collDirty=new Map}_opAt(e){let t=this.ops;if(t!==void 0)return t[e];let n=(e&3)<<3;return e<4?this.opsLow>>>n&255:this.opsHigh>>>n&255}_opPut(e,t){let n=this.ops;if(n!==void 0){n[e]=t;return}let r=(e&3)<<3,i=~(255<<r);e<4?this.opsLow=this.opsLow&i|t<<r:this.opsHigh=this.opsHigh&i|t<<r}_markDirty(e){e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}record(e,t){if(this._isSchema){let n=this._opAt(e);n===0?this._opPut(e,t):(n===y.DELETE||n===y.ADD&&t===y.DELETE_AND_ADD)&&this._opPut(e,y.DELETE_AND_ADD),this._markDirty(e)}else{let n=this.collDirty,r=n.get(e),i;i=r===void 0?t:r===y.DELETE||r===y.ADD&&t===y.DELETE_AND_ADD?y.DELETE_AND_ADD:r,n.set(e,i)}}recordDelete(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordRaw(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordPure(e){if(this._isSchema)throw Error(`ChangeTree (Schema): pure operations are not supported`);(this.collPureOps??=[]).push([this.collDirty.size,e])}operationAt(e){if(this._isSchema){let t=this._opAt(e);return t===0?void 0:t}return this.collDirty.get(e)}setOperationAt(e,t){if(this._isSchema)this._opPut(e,t);else{let n=this.collDirty;n.has(e)&&n.set(e,t)}}forEach(e){this.forEachWithCtx(e,vn)}forEachWithCtx(e,t){if(this._isSchema){let n=this.dirtyLow,r=this.dirtyHigh,i=this.ops;if(i!==void 0){for(;n!==0;){let r=n&-n,a=31-Math.clz32(r);n^=r,t(e,a,i[a])}for(;r!==0;){let n=r&-r,a=31-Math.clz32(n)+32;r^=n,t(e,a,i[a])}}else{let r=this.opsLow,i=this.opsHigh;for(;n!==0;){let a=n&-n,o=31-Math.clz32(a);n^=a,t(e,o,_n(r,i,o))}}return}let n=this.collDirty,r=this.collPureOps;if(r!==void 0&&r.length>0){let i=0,a=0;for(let[o,s]of n){for(;i<r.length&&r[i][0]<=a;){let n=r[i++][1];t(e,-n,n)}t(e,o,s),a++}for(;i<r.length;){let n=r[i++][1];t(e,-n,n)}}else for(let[r,i]of n)t(e,r,i)}size(){return this._isSchema?Nt(this.dirtyLow)+Nt(this.dirtyHigh):this.collDirty.size+(this.collPureOps?.length??0)}has(){return this._isSchema?(this.dirtyLow|this.dirtyHigh)!==0:this.collDirty.size>0||this.collPureOps!==void 0&&this.collPureOps.length>0}reset(){this._isSchema?(this.dirtyLow=0,this.dirtyHigh=0,this.ops===void 0?(this.opsLow=0,this.opsHigh=0):this.ops.fill(0)):(this.collDirty.clear(),this.collPureOps!==void 0&&(this.collPureOps.length=0),this.flags&=-513)}recycle(){if(this.root!==void 0)throw Error(`@colyseus/schema: cannot recycle an attached ChangeTree (${this.ref?.constructor?.name}). Remove the instance from its parent collection before releasing it to a pool.`);this.reset(),this.unreliableRecorder?.reset(),this.flags=132,this._fullSyncGen=0,this.parentRef=void 0,this._parentIndex=void 0,this.extraParents=void 0,this.changesNode=void 0,this.unreliableChangesNode=void 0,this.paused=!1,this.visibleViews=void 0,this.tagViews=void 0,this.subscribedViews=void 0}insertAt(e,t){if(this._isSchema)throw Error(`ChangeTree (Schema): insertAt is not supported`);let n=this.collDirty,r=new Map,i=!this.paused&&!this.isFullStateOnly;if(e>0)for(let[t,i]of n)t<e&&r.set(t,i);if(i)for(let n=0;n<t;n++)r.set(e+n,y.ADD);for(let[i,a]of n)i>=e&&r.set(i+t,a);this.collDirty=r,i&&this.root?.enqueueChangeTree(this)}removeAt(e,t){if(this._isSchema)throw Error(`ChangeTree (Schema): removeAt is not supported`);let n=this.collDirty,r=e+t,i=!1;for(let e of n.keys())if(e>=r){i=!0;break}if(!i){for(let t=e;t<r;t++)n.delete(t);return}let a=new Map;for(let[i,o]of n)i<e?a.set(i,o):i>=r&&a.set(i-t,o);this.collDirty=a}unshift(e){this.insertAt(0,e)}setRoot(e){cn(this,e)}setParent(e,t,n){ln(this,e,t,n)}forEachChild(e){un(this,e)}forEachChildWithCtx(e,t){fn(this,e,t)}forEachLive(e){qt(this,e)}forEachLiveWithCtx(e,t){Jt(this,e,t)}operation(e){this.paused||this.isFullStateOnly||(this.recordPure(e),this.root?.enqueueChangeTree(this))}_routeAndRecord(e,t,n){if(!(this.paused||this.isFieldFullStateOnly(e))){if(this.isFieldUnreliable(e)&&!this.isNew){let r=this.ensureUnreliableRecorder();n?r.recordRaw(e,t):r.record(e,t),this.root?.enqueueUnreliable(this)}else n?this.recordRaw(e,t):this.record(e,t),this.root?.enqueueChangeTree(this)}}change(e,t=y.ADD){this._routeAndRecord(e,t,!1)}indexedOperation(e,t){this._routeAndRecord(e,t,!0)}getChange(e){return this.operationAt(e)}pause(){this.paused=!0}resume(){this.paused=!1}untracked(e){let t=this.paused;this.paused=!0;try{return e()}finally{this.paused=t}}markDirty(e,t=y.ADD){let n=this.paused;this.paused=!1;try{this.change(e,t)}finally{this.paused=n}}getValue(e,t=!1){return this.refTarget[D](e,t)}delete(e,t){if(e===void 0){try{throw Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${e}'`)}catch(e){console.warn(e)}return}if(this.paused||this.isFieldFullStateOnly(e))return this.getValue(e);let n=this.isFieldUnreliable(e)&&!this.isNew;n?this.ensureUnreliableRecorder().recordDelete(e,t??y.DELETE):this.recordDelete(e,t??y.DELETE);let r=this.getValue(e);return r&&r[A]&&this.root?.remove(r[A]),n?this.root?.enqueueUnreliable(this):this.root?.enqueueChangeTree(this),r}endEncode(){this.reset(),this.changesNode=void 0,this._isSchema||this.refTarget[N]?.(),this.isNew=!1}endEncodeUnreliable(){this.unreliableRecorder?.reset(),this.unreliableChangesNode=void 0,this._isSchema||this.refTarget[N]?.()}discard(){this._isSchema||this.refTarget[N]?.(),this.reset(),this.unreliableRecorder?.reset()}discardAll(){let e=e=>{if(e<0)return;let t=this.getValue(e);t&&t[A]&&t[A].discardAll()};this.forEach(e),this.unreliableRecorder?.forEach(e),this.discard()}get changed(){return this.has()||(this.unreliableRecorder?.has()??!1)}get parent(){return this.parentRef}get parentIndex(){return this._parentIndex}addParent(e,t){Lt(this,e,t)}setParentIndex(e,t){Rt(this,e,t)}removeParent(e=this.parent){return zt(this,e)}findParent(e){return Bt(this,e)}hasParent(e){return Vt(this,e)}indexInParent(e){return Ht(this,e)}getAllParents(){return Ut(this)}},Mn=class{ref;root=void 0;parentRef=void 0;paused=!1;isNew=!1;flags=0;constructor(e){this.ref=e}change(){}delete(){}indexedOperation(){}operation(){}setParent(){}addParent(){}setParentIndex(){}removeParent(){return!1}getChange(){return 0}discard(){}discardAll(){}pause(){}resume(){}untracked(e){return e()}markDirty(){}forEachChild(e){let t=this.ref;if(t[j]){if(typeof t[j]!=`string`)for(let[n,r]of t.entries())r&&e(r[A],t._collectionIndexes?.[n]??n);return}let n=t.constructor?.[Symbol.metadata];if(!n)return;let r=n[oe]??[];for(let i=0;i<r.length;i++){let a=r[i],o=t[n[a].name];o&&e(o[A],a)}}forEachChildWithCtx(e,t){this.forEachChild((n,r)=>t(e,n,r))}forEachLive(){}forEachLiveWithCtx(){}forEach(){}};function Nn(e){return new Mn(e)}function Pn(e,t=e){Object.defineProperty(e,A,{value:Nn(t),enumerable:!1,writable:!0})}function Fn(e,t,n,r,i,a,o){o===void 0?typeof n==`string`?H[n]?.(t,r,a):n[Symbol.metadata]==null?H.number(t,r[S],a):(H.number(t,r[S],a),(i&y.ADD)===y.ADD&&e.tryEncodeTypeId(t,n,r.constructor,a)):o(t,r,a)}var In=function(e,t,n,r,i,a,o,s){if(t[a.offset++]=(r|i)&255,i===y.DELETE)return;let c=n.encDescriptor,l=n.ref,u=l[P][r]??l[c.names[r]];Fn(e,t,c.types[r],u,i,a,c.encoders[r])},Ln=function(e,t,n,r,i,a){if(t[a.offset++]=i&255,H.number(t,r,a),i===y.DELETE)return;let o=n.ref;if((i&y.ADD)===y.ADD){let e=o.$indexes.get(r);H.string(t,e,a)}Fn(e,t,o[j],o[D](r),i,a)},Rn=function(e,t,n,r,i,a){if(t[a.offset++]=i&255,H.number(t,r,a),i===y.DELETE)return;let o=n.ref;Fn(e,t,o[j],o[D](r),i,a)},zn=function(e,t,n,r,i,a,o,s){let c=n.refTarget,l=c[j],u=typeof l!=`string`,d=s&&n.isFiltered&&u,f;if(d){let e=c.tmpItems[r];if(!e)return;if(f=e[S],i===y.DELETE)i=y.DELETE_BY_REFID;else if((i&y.ADD)===y.ADD)i=y.ADD_BY_REFID;else if((i&y.MOVE)===y.MOVE)return}else if(i===y.DELETE&&u){let e=c.tmpItems[r];if(!e)return;f=e[S],i=y.DELETE_BY_REFID}else f=r;t[a.offset++]=i&255,H.number(t,f,a),i!==y.DELETE&&i!==y.DELETE_BY_REFID&&Fn(e,t,l,c[D](r,o),i,a)};function Bn(e,t,n,r,i,a,o){let s=e.resyncVisited,c=s.get(e.currentRefId);if(c===void 0&&s.set(e.currentRefId,c=new Set),c.add(r),i!==void 0&&n===y.ADD&&i!==a){let n=i[S];n!==void 0&&(e.root.removeRef(n),o?.push({ref:t,refId:e.currentRefId,op:y.DELETE,dynamicIndex:r,value:void 0,previousValue:i}))}}function Vn(e,t){let n=e.resyncVisited;n.has(t)||n.set(t,new Set)}function Hn(e,t){e.resyncDamaged?console.warn(`@colyseus/schema: resync sweep skipped — parts of the payload could not be decoded. Stale entries may persist until the next resync.`):Un(e,e.state,new Set,t)}function Un(e,t,n,r){let i=t[S];if(i===void 0||n.has(i))return;n.add(i);let a=t.constructor[Symbol.metadata],o=a?.[oe];if(o===void 0)return;let s=a[ce];for(let i=0;i<o.length;i++){let c=o[i];if(s!==void 0&&s.includes(c))continue;let l=a[c],u=t[l.name];u&&(Nr.is(l.type)?Un(e,u,n,r):Wn(e,u,n,r))}}function Wn(e,t,n,r){let i=t[M]??t,a=i[S];if(a===void 0||n.has(a))return;n.add(a);let o=e.resyncVisited.get(a);if(o===void 0)return;let s=e.root;i[k](o,(e,n)=>{r?.push({ref:t,refId:a,op:y.DELETE,dynamicIndex:n,value:void 0,previousValue:e});let i=e?.[S];i!==void 0&&s.removeRef(i)},t=>{Nr.isSchema(t)&&Un(e,t,n,r)})}var Gn=-1,Kn={Map:1,Array:2,Set:3,Collection:4,Stream:5};function qn(e,t,n,r,i,a,o,s,c){let l=e.root,u;if((t&y.DELETE)===y.DELETE){let e=i?.[S];e!==void 0&&l.removeRef(e),t!==y.DELETE_AND_ADD&&n[O](r),u=void 0}if(t!==y.DELETE){if(typeof a==`string`)u=et[a](o,s);else if(_t(a))u=xt(a.quantized,o,s);else if(Nr.is(a)){let n=et.number(o,s);if(u=l.refs.get(n),(t&y.ADD)===y.ADD){let r=e.getInstanceType(o,s,a);u||=e.createInstanceOfType(r),l.addRef(n,u,u!==i||t===y.DELETE_AND_ADD&&u===i)}}else{let n=it(Object.keys(a)[0]),r=et.number(o,s);e.resyncVisited!==null&&Vn(e,r);let d=l.refs.has(r)?i||l.refs.get(r):n.constructor.initializeForDecoder();if(u=d.clone(!0),u[j]=Object.values(a)[0],i){let e=i[S];if(e!==void 0&&r!==e){(t&y.DELETE)!==y.DELETE&&l.removeRef(e);let n=i.entries(),r;for(;(r=n.next())&&!r.done;){let[t,n]=r.value;typeof n==`object`&&(e=n[S]),c?.push({ref:i,refId:e,op:y.DELETE,field:t,value:void 0,previousValue:n})}}}l.addRef(r,u,d!==i||t===y.DELETE_AND_ADD&&d===i)}}return u}var Jn=function(e,t,n,r,i){let a=t[n.offset++],o=r.constructor[Symbol.metadata],s=a>>6<<6,c=a%(s||255),l=o[c];if(l===void 0)return console.warn(`@colyseus/schema: field not defined at`,{index:c,ref:r.constructor.name,metadata:o}),Gn;let u=l.deprecated===!0,d=u?void 0:r[D](c),f=qn(e,s,r,c,d,l.type,t,n,i);u||(f!=null&&(r[l.name]=f),d!==f&&i?.push({ref:r,refId:e.currentRefId,op:s,field:l.name,value:f,previousValue:d}))},Yn=function(e,t,n,r,i){let a=r[M]??r,o=t[n.offset++];if(o===y.CLEAR){e.removeChildRefs(a,i),a.clear();return}let s=et.number(t,n),c=a[j],l=a.constructor.COLLECTION_KIND,u;(o&y.ADD)===y.ADD?l===Kn.Map?(u=et.string(t,n),a.setIndex(s,u)):u=s:u=a.getIndex(s);let d=a[D](s),f=qn(e,o,r,s,d,c,t,n,i);if(e.resyncVisited!==null&&Bn(e,r,o,u,d,f,i),f!=null)switch(l){case Kn.Map:a.$items.set(u,f);break;case Kn.Array:a.$setAt(s,f,e.resyncVisited!==null&&o===y.ADD?y.REPLACE:o);break;case Kn.Set:case Kn.Collection:case Kn.Stream:a.$items.has(s)||(a.$items.set(s,f),typeof a.$refId==`number`&&s>=a.$refId&&(a.$refId=s+1));break;default:console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${a.constructor?.name} — item at index ${s} was not stored.`)}d!==f&&i?.push({ref:r,refId:e.currentRefId,op:o,dynamicIndex:u,value:f,previousValue:d})},Xn=function(e,t,n,r,i){let a=r[M]??r,o=t[n.offset++],s;if(o===y.CLEAR){e.removeChildRefs(a,i),a.clear();return}if(o===y.REVERSE){a.items.reverse();return}if(o===y.DELETE_BY_REFID){let o=et.number(t,n),c=e.root.refs.get(o);if(c===void 0||(e.root.removeRef(o),s=a.findIndex(e=>e===c),s===-1))return;a[O](s),i?.push({ref:r,refId:e.currentRefId,op:y.DELETE,dynamicIndex:s,value:void 0,previousValue:c});return}if(o===y.ADD_BY_REFID){let r=et.number(t,n),i=e.root.refs.get(r);i&&(s=a.findIndex(e=>e===i)),(s===-1||s===void 0)&&(s=a.length)}else s=et.number(t,n);let c=a[j],l=s,u=a.items[s],d=qn(e,o,r,s,u,c,t,n,i);e.resyncVisited!==null&&Bn(e,r,o,s,u,d,i),d!=null&&d!==u&&a.$setAt(s,d,e.resyncVisited!==null&&o===y.ADD?y.REPLACE:o),u!==d&&i?.push({ref:r,refId:e.currentRefId,op:o,dynamicIndex:l,value:d,previousValue:u})},Zn=class extends Error{};function Qn(e,t,n,r){if(!(e instanceof t))throw new Zn(`a '${t.name}' was expected, but '${e&&e.constructor.name}' was provided in ${n.constructor.name}#${r}`)}var $n=(e,t)=>{let n=e.toString(),r=t.toString();return n<r?-1:+(n>r)},er={get:(e,t)=>typeof t!=`symbol`&&!isNaN(t)?e.items[t]:Reflect.get(e,t),set:(e,t,n)=>{if(typeof t!=`symbol`&&!isNaN(t)){if(n==null)e.$deleteAt(t);else{let r;if(n[A]){Qn(n,e[j],e,t);let i=e.items[t];e.isMovingItems?(r=e.$wireIndex(Number(t)),i===void 0?n[A].isNew&&e[A].indexedOperation(r,y.ADD):n[A].isNew?e[A].indexedOperation(r,y.MOVE_AND_ADD):(e[A].getChange(r)&y.DELETE)===y.DELETE?e[A].indexedOperation(r,y.DELETE_AND_MOVE):e[A].indexedOperation(r,y.MOVE),n[A].setParent(e,e[A].root,r)):r=e.$changeAt(Number(t),n),i!==void 0&&i[A].root?.remove(i[A])}else r=e.$changeAt(Number(t),n);e.items[t]=n,r!==void 0&&(e.tmpItems[r]=n)}return!0}return Reflect.set(e,t,n)},deleteProperty:(e,t)=>(typeof t==`number`?e.$deleteAt(t):delete e[t],!0),has:(e,t)=>typeof t!=`symbol`&&!isNaN(Number(t))?Reflect.has(e.items,t):Reflect.has(e,t)},tr=class e{[A];[S];[M];[j];items=[];tmpItems=[];deletedIndexes=[];isMovingItems=!1;_needsCompaction=!1;static[w]=zn;static[T]=Xn;static COLLECTION_KIND=Kn.Array;static[E](e,t,n){if(!n)return!0;let r=e[M]??e;return typeof r[j]==`string`||n.isChangeTreeVisible(r.tmpItems[t]?.[A])}static is(e){return Array.isArray(e)||e.array!==void 0}static from(t){return new e(...Array.from(t))}constructor(...e){this[j]=void 0,this[M]=this;let t=new Proxy(this,er);return Object.defineProperty(this,A,{value:new jn(t,this),enumerable:!1,writable:!0}),e.length>0&&this.push(...e),t}static initializeForDecoder(){let t=Object.create(e.prototype);t.items=[],t.isMovingItems=!1,t._needsCompaction=!1,t[j]=void 0,t[M]=t;let n=new Proxy(t,er);return Pn(t,n),n}set length(e){e===0?this.clear():e<this.items.length?this.splice(e,this.length-e):console.warn(`ArraySchema: can't set .length to a higher value than its length.`)}get length(){return this.items.length}pauseTracking(){this[A].pause()}resumeTracking(){this[A].resume()}untracked(e){return this[A].untracked(e)}get isTrackingPaused(){return this[A].paused}push(...e){let t=this[M],n=t.items,r=t.tmpItems,i=t[A],a=t[j],o=r.length;for(let s=0,c=e.length;s<c;s++,o++){let c=e[s];if(c==null)return;typeof c==`object`&&a&&Qn(c,a,t,s),i.indexedOperation(o,y.ADD),n.push(c),r.push(c),c[A]?.setParent(this,i.root,o)}return o}pop(){let e=this[M],t=e.tmpItems,n=e.deletedIndexes,r=-1;for(let e=t.length-1;e>=0;e--)if(n[e]!==!0){r=e;break}if(r<0)return;let i=e.$isUnsentAdd(r);return e[A].delete(r),i?e.$cancelAdd(r):n[r]=!0,e.items.pop()}at(e){return e<0&&(e+=this.length),this.items[e]}$wireIndex(e){let t=this.deletedIndexes;if(t.length===0)return e;let n=this.tmpItems,r=0;for(let i=0;i<n.length;i++)if(t[i]!==!0){if(r===e)return i;r++}return n.length+(e-r)}$isUnsentAdd(e){let t=this[A];return!(t.flags&576)&&!t.paused&&typeof this[j]!=`string`&&t.operationAt(e)===y.ADD}$cancelAdd(e,t=!0){let n=this[A],r=this.tmpItems[e];this.tmpItems.splice(e,1),this.deletedIndexes.length>0&&this.deletedIndexes.splice(e,1),n.removeAt(e,1);let i=r?.[A];i!==void 0&&i.root===void 0&&i.removeParent(this),t&&this.$reindexChildren(e)}$reindexChildren(e,t){if(!this[A].hasFilteredFields||typeof this[j]==`string`)return;let n=this.tmpItems,r=n.length;if(t!==void 0)for(;e<r&&n[e]===t[e];)e++;for(let t=e;t<r;t++)n[t]?.[A]?.setParentIndex(this,t)}$changeAt(e,t){if(t==null){console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");return}if(this.items[e]===t)return;let n=this.items[e]===void 0?y.ADD:typeof t==`object`?y.DELETE_AND_ADD:y.REPLACE,r=this.$wireIndex(e),i=this[A];return i.change(r,n),t[A]?.setParent(this,i.root,r),r}$deleteAt(e,t){this[A].delete(this.$wireIndex(e),t)}$setAt(e,t,n){n===y.ADD&&this.items[e]!==void 0?this.items.splice(e,0,t):n===y.DELETE_AND_MOVE?(this.items.splice(e,1),this.items[e]=t):(e>this.items.length&&(this._needsCompaction=!0),this.items[e]=t)}clear(){let e=this[M];if(e.items.length===0)return;let t=e[A];t.forEachChild((e,n)=>{t.root?.remove(e)}),t.discard(),t.operation(y.CLEAR),e.items.length=0,e.tmpItems.length=0}[ee](){let e=this[M]??this,t=e[A];if(t.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).`);let n=e.items;for(let e=0;e<n.length;e++)n[e]?.[ee]?.();e.items.length=0,e.tmpItems.length=0,e.deletedIndexes.length=0,t.recycle(),e[S]=void 0}concat(...t){return new e(...this.items.concat(...t))}join(e){return this.items.join(e)}reverse(){let e=this[M],t=e[A];if(t.has()||e.deletedIndexes.length>0){let t=e.items.slice().reverse();return this.clear(),this.push(...t),this}return t.operation(y.REVERSE),e.items.reverse(),e.tmpItems.reverse(),e.$reindexChildren(0),this}shift(){let e=this[M],t=e.items;if(t.length===0)return;let n=e[A],r=e.deletedIndexes,i=0;for(;r[i]===!0;)i++;let a=e.$isUnsentAdd(i);return n.delete(i,y.DELETE),a?e.$cancelAdd(i):r[i]=!0,t.shift()}slice(t,n){let r=new e;return r.push(...this.items.slice(t,n)),r}sort(e=$n){let t=this[M];t.isMovingItems=!0;let n=t[A];return t.items.sort(e).forEach((e,t)=>n.change(t,y.REPLACE)),t.tmpItems.sort(e),t.$reindexChildren(0),t.isMovingItems=!1,this}splice(e,t,...n){let r=this[M],i=r[A],a=r.items,o=r.tmpItems,s=r.deletedIndexes,c=a.length,l=o.length,u=n.length,d=[];for(let e=0;e<l;e++)s[e]!==!0&&d.push(e);let f;if(c>e){t===void 0&&(t=c-e);for(let n=e;n<e+t;n++){let e=d[n],t=r.$isUnsentAdd(e);i.delete(e,y.DELETE),t?(f??=[]).push(e):s[e]=!0}}else t=0;if(u>0){let a=d[e]??c,l=Math.min(u,t);for(let e=0;e<l;e++){let t=a+e,r,c=f===void 0?-1:f.indexOf(t);c===-1?r=s[t]?y.DELETE_AND_ADD:y.ADD:(f.splice(c,1),r=y.ADD),i.indexedOperation(t,r),o[t]=n[e],s[t]=!1,n[e][A]?.setParent(this,i.root,t)}let p=u-l;if(p>0){let e=a+l;i.insertAt(e,p);for(let t=0;t<p;t++)n[l+t][A]?.setParent(this,i.root,e+t);s.length>0&&s.splice(e,0,...Array(p).fill(!1)),o.splice(e,0,...n.slice(l)),r.$reindexChildren(e+p)}}if(f!==void 0&&f.length>0){for(let e=f.length-1;e>=0;e--)r.$cancelAdd(f[e],!1);r.$reindexChildren(f[0])}return i.root?.enqueueChangeTree(i),a.splice(e,t,...n)}unshift(...e){let t=this[M],n=t[A];n.unshift(e.length);for(let t=0;t<e.length;t++)e[t]?.[A]?.setParent(this,n.root,t);let r=t.deletedIndexes;return r.length>0&&r.unshift(...Array(e.length).fill(!1)),t.tmpItems.unshift(...e),t.$reindexChildren(e.length),t.items.unshift(...e)}indexOf(e,t){return this.items.indexOf(e,t)}lastIndexOf(e,t=this.length-1){return this.items.lastIndexOf(e,t)}every(e,t){return this.items.every(e,t)}some(e,t){return this.items.some(e,t)}forEach(e,t){return this.items.forEach(e,t)}map(e,t){return this.items.map(e,t)}filter(e,t){return this.items.filter(e,t)}reduce(e,t){return this.items.reduce(e,t)}reduceRight(e,t){return this.items.reduceRight(e,t)}find(e,t){return this.items.find(e,t)}findIndex(e,t){return this.items.findIndex(e,t)}fill(e,t,n){throw Error(`ArraySchema#fill() not implemented`)}copyWithin(e,t,n){throw Error(`ArraySchema#copyWithin() not implemented`)}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return e}[Symbol.unscopables];entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(e,t){return this.items.includes(e,t)}flatMap(e,t){throw Error(`ArraySchema#flatMap() is not supported.`)}flat(e){throw Error(`ArraySchema#flat() is not supported.`)}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...e){return this.items.findLastIndex.apply(this.items,arguments)}with(t,n){let r=this.items.slice();return t<0&&(t+=this.length),r[t]=n,new e(...r)}toReversed(){return this.items.slice().reverse()}toSorted(e){return this.items.slice().sort(e)}toSpliced(e,t,...n){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(e=>{let t=this.items.length;for(;t!=0;){let e=Math.floor(Math.random()*t);t--,[this[t],this[e]]=[this[e],this[t]]}})}move(e){return this.isMovingItems=!0,e(this),this.isMovingItems=!1,this}[D](e,t=!1){let n=this[M]??this;return t||n.deletedIndexes[e]?n.items[e]:n.tmpItems[e]||n.items[e]}[O](e){let t=this[M]??this;t.items[e]=void 0,t._needsCompaction=!0}[N](){let e=this.tmpItems;this.tmpItems=this.items.slice(),this.deletedIndexes.length>0&&(this.$reindexChildren(0,e),this.deletedIndexes.length=0)}[te](){let e=this[M]??this;e._needsCompaction&&(e._needsCompaction=!1,e.items=e.items.filter(e=>e!==void 0))}[k](e,t,n){let r=this[M]??this,i=r.items,a=!1;for(let o=0;o<i.length;o++){let s=i[o];e.has(o)?n(s):(a=!0,t(s,o),r[O](o))}a&&r[te]()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(e=>typeof e.toJSON==`function`?e.toJSON():e)}clone(t){let n;return t?(n=new e,n.push(...this.items)):n=new e(...this.map(e=>e[A]?e.clone():e)),n}};rt(`array`,{constructor:tr});var nr=class{keyByIndex=new Map;indexByKey=Object.create(null);nextIndex=0;snapshots;indexOf(e){let t=this.indexByKey[e];return t===void 0?void 0:t}assign(e){let t=this.nextIndex++;return this.indexByKey[e]=t,this.keyByIndex.set(t,e),t}snapshot(e,t){(this.snapshots??=new Map).set(e,t)}forgetSnapshot(e){this.snapshots?.delete(e)}snapshotAt(e){return this.snapshots?.get(e)}setIndex(e,t){this.keyByIndex.set(e,t),this.indexByKey[t]=e}keyOf(e){return this.keyByIndex.get(e)}cleanupAfterEncode(){if(this.snapshots!==void 0){for(let[e]of this.snapshots){let t=this.keyByIndex.get(e);t!==void 0&&(delete this.indexByKey[t],this.keyByIndex.delete(e))}this.snapshots.clear()}}reset(){this.indexByKey=Object.create(null),this.keyByIndex.clear(),this.snapshots?.clear(),this.nextIndex=0}},rr=class e{[A];[S];childType;[j];$items=new Map;journal=new nr;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=ot()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=ot()).priority=e}get $indexes(){return this.journal.keyByIndex}get _collectionIndexes(){return this.journal.indexByKey}static[w]=Ln;static[T]=Yn;static COLLECTION_KIND=Kn.Map;static[E](e,t,n){if(!n||typeof e[j]==`string`)return!0;let r=e[`~getByIndex`](t)??e.journal.snapshotAt(t);return n.isChangeTreeVisible(r[A])}static is(e){return e.map!==void 0}constructor(t){if(Object.defineProperty(this,A,{value:new jn(this),enumerable:!1,writable:!0}),this[j]=void 0,t){if(t instanceof Map||t instanceof e)t.forEach((e,t)=>this.set(t,e));else for(let e in t)this.set(e,t[e])}}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.journal=new nr,t[j]=void 0,Pn(t),t}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return e}set(e,t){if(t==null)throw Error(`MapSchema#set('${e}', ${t}): trying to set ${t} value on '${e}'.`);typeof t==`object`&&this[j]&&Qn(t,this[j],this,e),e=e.toString();let n=this[A],r=t[A]!==void 0,i=this.journal,a=i.indexOf(e),o;if(a!==void 0){o=y.REPLACE;let n=this.$items.get(e);if(n===t)return;r&&(o=y.DELETE_AND_ADD,n!==void 0&&n[A].root?.remove(n[A])),i.snapshotAt(a)!==void 0&&i.forgetSnapshot(a)}else a=i.assign(e),o=y.ADD;return this.$items.set(e,t),o===y.ADD&&n.isStreamCollection?n.root!==void 0&&ct(this,n.root,a):n.change(a,o),r&&t[A].setParent(this,n.root,a),this}get(e){return this.$items.get(e)}getOrInsert(e,t){return this.$items.has(e)?this.$items.get(e):(this.set(e,t),t)}getOrInsertComputed(e,t){if(this.$items.has(e))return this.$items.get(e);let n=t(e);return this.set(e,n),n}delete(e){if(!this.$items.has(e))return!1;let t=this.journal.indexOf(e),n=this.$items.get(e),r=this[A];if(r.isStreamCollection){let i=r.root,a=!1;return i!==void 0&&(a=lt(this,i,this[S],t)),n?.[A]!==void 0&&i?.remove(n[A]),this.$items.delete(e),a||this.journal.snapshot(t,n),!0}return this.journal.snapshot(t,n),r.delete(t),this.$items.delete(e)}clear(){let e=this[A];e.discard(),e.forEachChild((t,n)=>{e.root?.remove(t)}),this.journal.reset(),this.$items.clear(),e.operation(y.CLEAR)}[ee](){let e=this[A];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).`);this.$items.forEach(e=>e?.[ee]?.()),this.$items.clear(),this.journal.reset(),e.recycle(),this[S]=void 0}has(e){return this.$items.has(e)}forEach(e){this.$items.forEach(e)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[A].pause()}resumeTracking(){this[A].resume()}untracked(e){return this[A].untracked(e)}get isTrackingPaused(){return this[A].paused}setIndex(e,t){this.journal.setIndex(e,t)}getIndex(e){return this.journal.keyOf(e)}[D](e){let t=this.journal.keyOf(e);return t===void 0?void 0:this.$items.get(t)}[O](e){let t=this.journal.keyOf(e);t!==void 0&&(this.$items.delete(t),this.journal.keyByIndex.delete(e))}[k](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=new Set).add(a),t(i,a))}),r!==null){r.forEach(e=>{this.$items.delete(e),delete this.journal.indexByKey[e]});let e=[];this.journal.keyByIndex.forEach((t,n)=>{r.has(t)&&e.push(n)});for(let t=0;t<e.length;t++)this.journal.keyByIndex.delete(e[t])}}[N](){this.journal.cleanupAfterEncode()}_dropView(e){mt(this,e)}_unregister(){}toJSON(){return Object.fromEntries(Array.from(this,([e,t])=>[e,typeof t.toJSON==`function`?t.toJSON():t]))}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach((e,t)=>{e[A]?n.set(t,e.clone()):n.set(t,e)})),n}};rt(`map`,{constructor:rr});var ir=class e{[A];[S];[j];$items=new Map;deletedItems={};$refId=0;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=ot()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=ot()).priority=e}static[w]=Rn;static[T]=Yn;static COLLECTION_KIND=Kn.Collection;static[E](e,t,n){return!n||typeof e[j]==`string`||n.isChangeTreeVisible((e[`~getByIndex`](t)??e.deletedItems[t])[A])}static is(e){return e.collection!==void 0}constructor(e){Object.defineProperty(this,A,{value:new jn(this),enumerable:!1,writable:!0}),this[j]=void 0,e&&e.forEach(e=>this.add(e))}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.deletedItems={},t.$refId=0,t[j]=void 0,Pn(t),t}add(e){let t=this.$refId++,n=this[A];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&ct(this,n.root,t):n.change(t),e[A]!==void 0&&e[A].setParent(this,n.root,t),t}at(e){let t=Array.from(this.$items.keys())[e];return this.$items.get(t)}entries(){return this.$items.entries()}delete(e){let t=this.$items.entries(),n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;let i=this[A];if(i.isStreamCollection){let e=i.root,t=this.$items.get(n);return e!==void 0&&lt(this,e,this[S],n),t?.[A]!==void 0&&e?.remove(t[A]),this.deletedItems[n]=t,this.$items.delete(n)}return this.deletedItems[n]=i.delete(n),this.$items.delete(n)}clear(){let e=this[A];e.discard(),e.forEachChild((t,n)=>{e.root?.remove(t)}),this.$items.clear(),e.operation(y.CLEAR)}[ee](){let e=this[A];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).`);this.$items.forEach(e=>e?.[ee]?.()),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[S]=void 0}has(e){return Array.from(this.$items.values()).some(t=>t===e)}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[A].pause()}resumeTracking(){this[A].resume()}untracked(e){return this[A].untracked(e)}get isTrackingPaused(){return this[A].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[D](e){return this.$items.get(e)}[O](e){this.$items.delete(e)}[k](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=[]).push(a),t(i,a))}),r!==null)for(let e=0;e<r.length;e++)this[O](r[e])}[N](){for(let e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){mt(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON==`function`?t.toJSON():t)}),e}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach(e=>{e[A]?n.add(e.clone()):n.add(e)})),n}};rt(`collection`,{constructor:ir});var ar=class e{[A];[S];[j];$items=new Map;deletedItems={};$refId=0;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=ot()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=ot()).priority=e}static[w]=Rn;static[T]=Yn;static COLLECTION_KIND=Kn.Set;static[E](e,t,n){return!n||typeof e[j]==`string`||n.isVisible((e[`~getByIndex`](t)??e.deletedItems[t])[A])}static is(e){return e.set!==void 0}constructor(e){Object.defineProperty(this,A,{value:new jn(this),enumerable:!1,writable:!0}),this[j]=void 0,e&&e.forEach(e=>this.add(e))}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.deletedItems={},t.$refId=0,t[j]=void 0,Pn(t),t}add(e){if(this.has(e))return!1;let t=this.$refId++,n=this[A];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&ct(this,n.root,t):n.change(t,y.ADD),e[A]!==void 0&&e[A].setParent(this,n.root,t),t}entries(){return this.$items.entries()}delete(e){let t=this.$items.entries(),n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;let i=this[A];if(i.isStreamCollection){let e=i.root,t=this.$items.get(n);return e!==void 0&&lt(this,e,this[S],n),t?.[A]!==void 0&&e?.remove(t[A]),this.deletedItems[n]=t,this.$items.delete(n)}return this.deletedItems[n]=i.delete(n),this.$items.delete(n)}clear(){let e=this[A];e.discard(),this.$items.clear(),e.operation(y.CLEAR)}[ee](){let e=this[A];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).`);this.$items.forEach(e=>e?.[ee]?.()),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[S]=void 0}has(e){let t=this.$items.values(),n=!1,r;for(;(r=t.next())&&!r.done;)if(e===r.value){n=!0;break}return n}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[A].pause()}resumeTracking(){this[A].resume()}untracked(e){return this[A].untracked(e)}get isTrackingPaused(){return this[A].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[D](e){return this.$items.get(e)}[O](e){this.$items.delete(e)}[k](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=[]).push(a),t(i,a))}),r!==null)for(let e=0;e<r.length;e++)this[O](r[e])}[N](){for(let e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){mt(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON==`function`?t.toJSON():t)}),e}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach(e=>{e[A]?n.add(e.clone()):n.add(e)})),n}};rt(`set`,{constructor:ar});var or=class e{[A];[S];[j];$items=new Map;$nextPosition=0;_itemIndex=new Map;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=ot()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=ot()).priority=e}static $isStream=!0;static[w]=Rn;static[T]=Yn;static COLLECTION_KIND=Kn.Stream;static[E](e,t,n){if(!n)return!0;let r=e[D](t);return r!==void 0&&n.isVisible(r[A])}static is(e){return e&&e.stream!==void 0}constructor(){Object.defineProperty(this,A,{value:new jn(this),enumerable:!1,writable:!0}),this[j]=void 0}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.$nextPosition=0,t._itemIndex=new Map,t[j]=void 0,Pn(t),t}add(e){if(this._itemIndex.has(e))return-1;let t=this.$nextPosition++;this.$items.set(t,e),this._itemIndex.set(e,t);let n=this[A].root;return e[A]!==void 0&&e[A].setParent(this,n,t),n!==void 0&&ct(this,n,t),t}remove(e){let t=this._itemIndex.get(e);if(t===void 0)return!1;this._itemIndex.delete(e),this.$items.delete(t);let n=this[A].root;return n!==void 0&&(lt(this,n,this[S],t),e[A]!==void 0&&n.remove(e[A])),!0}has(e){return this._itemIndex.has(e)}clear(){let e=this[A].root;if(e!==void 0){ut(this,e,this[S]);for(let t of this.$items.values())t[A]!==void 0&&e.remove(t[A])}this.$items.clear(),this._itemIndex.clear()}forEach(e){for(let[t,n]of this.$items)e(n,t,this)}values(){return this.$items.values()}entries(){return this.$items.entries()}[Symbol.iterator](){return this.$items.values()}get size(){return this.$items.size}get length(){return this.$items.size}setIndex(e,t){}getIndex(e){return e}[D](e){return this.$items.get(e)}[O](e){let t=this.$items.get(e);t!==void 0&&(this._itemIndex.delete(t),this.$items.delete(e))}[k](){}[N](){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach(t=>{e.push(typeof t?.toJSON==`function`?t.toJSON():t)}),e}clone(t){if(t)return Object.assign(new e,this);let n=new e;return n.maxPerTick=this.maxPerTick,this.forEach(e=>{n.add(typeof e?.clone==`function`?e.clone():e)}),n}_dropView(e){mt(this,e)}_unregister(){}};rt(`stream`,{constructor:or});var sr=class{[ne]=!0;_type;_default=void 0;_hasDefault=!1;_view=void 0;_unreliable=!1;_patchOnly=!1;_deprecated=!1;_deprecatedThrows=!0;_fullStateOnly=!1;_stream=!1;_optional=!1;_noSync=!1;_streamPriority=void 0;constructor(e){this._type=e}default(e){return this._default=e,this._hasDefault=!0,this}view(e){return this._view=e??-1,this}unreliable(){return this._unreliable=!0,this}patchOnly(){return this._patchOnly=!0,this}fullStateOnly(){return this._fullStateOnly=!0,this}noSync(){return this._noSync=!0,this}stream(){let e=this._type;if(e&&typeof e==`object`&&e.array!==void 0)throw Error(at);return this._stream=!0,this}priority(e){return this._streamPriority=e,this}deprecated(e=!0){return this._deprecated=!0,this._deprecatedThrows=e,this}optional(){return this._optional=!0,this}toDefinition(){return{type:this._type,default:this._default,hasDefault:this._hasDefault,view:this._view,unreliable:this._unreliable,patchOnly:this._patchOnly,deprecated:this._deprecated,deprecatedThrows:this._deprecatedThrows,fullStateOnly:this._fullStateOnly,stream:this._stream,optional:this._optional,noSync:this._noSync,streamPriority:this._streamPriority}}};function cr(e){return e!=null&&e[ne]===!0}function lr(e){return(()=>new sr(e))}function ur(e){if(cr(e)){let t=e._type,n=typeof t==`string`?`use the type name instead: t.array("${t}")`:`collections accept a Schema class or a primitive type name ("string", "number", …)`;throw Error(`t.array/map/set/collection(): a t.* builder is not a valid element type — ${n}.`)}return e}var dr=(e=>new sr({array:ur(e)})),fr=(e=>new sr({map:ur(e)})),pr=(e=>new sr({set:ur(e)})),mr=(e=>new sr({collection:ur(e)})),hr=(e=>{let t=new sr({stream:ur(e)});return t._stream=!0,t}),gr=(e=>new sr(e));function _r(e){return new sr({quantized:gt(e)})}var vr=Object.freeze({string:lr(`string`),number:lr(`number`),boolean:lr(`boolean`),int8:lr(`int8`),uint8:lr(`uint8`),int16:lr(`int16`),uint16:lr(`uint16`),int32:lr(`int32`),uint32:lr(`uint32`),int64:lr(`int64`),uint64:lr(`uint64`),float32:lr(`float32`),float64:lr(`float64`),bigint64:lr(`bigint64`),biguint64:lr(`biguint64`),ref:gr,array:dr,map:fr,set:pr,collection:mr,stream:hr,quantized:_r,angle:e=>_r({min:0,max:Math.PI*2,mode:`wrap`,bits:e?.bits??16})}),yr=-1;function br(e=yr){return function(t,n){let r=kt.initialize(t.constructor);kt.setTag(r,n,e)}}function xr(e,t){let n=kt.initialize(e.constructor);kt.setUnreliable(n,t)}function Sr(e,t){let n=kt.initialize(e.constructor);kt.setPatchOnly(n,t)}var Cr={number:`number`,int8:`number`,uint8:`number`,int16:`number`,uint16:`number`,int32:`number`,uint32:`number`,int64:`number`,uint64:`number`,float32:`number`,float64:`number`,bigint64:`bigint`,biguint64:`bigint`,string:`string`,boolean:`boolean`};function wr(e,t,n){let r=Cr[n],i=n===`string`,a=n===`boolean`;return function(n){let o=this[P],s=o[t];if(n!==s){if(n!=null){if(!a&&r!==void 0&&typeof n!==r&&!(i&&n===null)){let t=n&&n.constructor?` (${n.constructor.name})`:``;throw new Zn(`a '${r}' was expected, but '${JSON.stringify(n)}'${t} was provided in ${this.constructor.name}#${e}`)}this.constructor[C](this[A],t,y.ADD)}else s!=null&&this[A].delete(t);o[t]=n}}}function Tr(e,t,n){return function(r){let i=this[P],a=i[t];if(r!==a){if(r!=null){Qn(r,n,this,e);let i=this[A],o=this.constructor;a!=null&&a[A]?(i.root?.remove(a[A]),o[C](i,t,y.DELETE_AND_ADD)):o[C](i,t,y.ADD),r[A]?.setParent(this,i.root,t)}else a!=null&&this[A].delete(t);i[t]=r}}}function Er(e,t,n,r){let i=r.constructor===tr,a=r.constructor===rr;return function(e){let r=this[P],o=r[t];if(e!==o){if(e!=null){if(i&&!(e instanceof tr)){let t=new tr;t[j]=n,t.push(...e),e=t}else if(a&&!(e instanceof rr)){let t=new rr;if(t[j]=n,e instanceof Map)e.forEach((e,n)=>t.set(n,e));else for(let n in e)t.set(n,e[n]);e=t}else e[j]=n;let r=this[A],s=this.constructor;o!=null&&o[A]?(r.root?.remove(o[A]),s[C](r,t,y.DELETE_AND_ADD)):s[C](r,t,y.ADD),e[A]?.setParent(this,r.root,t)}else o!=null&&this[A].delete(t);r[t]=e}}}function Dr(e,t,n){return function(r){let i=this[P],a=i[t];if(r!=null){if(typeof r!=`number`)throw new Zn(`a 'number' was expected, but '${JSON.stringify(r)}' was provided in ${this.constructor.name}#${e}`);if(r=yt(n,vt(n,r)),r===a)return;this.constructor[C](this[A],t,y.ADD)}else{if(r===a)return;a!=null&&this[A].delete(t)}i[t]=r}}function Or(e,t,n,r){let i;return i=r?Er(e,t,n,r):typeof n==`string`?wr(e,t,n):_t(n)?Dr(e,t,n.quantized):Tr(e,t,n),{get:function(){return this[P][t]},set:i,enumerable:!0,configurable:!0}}function kr(e=!0){return function(t,n){let r=kt.initialize(t.constructor);kt.setDeprecated(r,n),e&&(r[re]??={},r[re][n]={get:function(){throw Error(`${n} is deprecated.`)},set:function(e){},enumerable:!1,configurable:!0},Object.defineProperty(t,n,r[re][n]))}}function Ar(e){if(e&&typeof e==`object`){if(e.array!==void 0)return()=>new tr;if(e.map!==void 0)return()=>new rr;if(e.set!==void 0)return()=>new ar;if(e.collection!==void 0)return()=>new ir;if(e.stream!==void 0)return()=>new or}else if(typeof e==`function`&&Nr.is(e)&&(!e.prototype.initialize||e.prototype.initialize.length===0))return()=>new e}function jr(e,t,n=Nr){if(typeof e!=`object`||!e)throw Error(`schema(): first argument must be a fields object (got ${typeof e}).`);let r={},i={},a={},o={},s=(e,t)=>{typeof t==`function`?o[e]=t:t&&typeof t.clone==`function`?o[e]=()=>t.clone():a[e]=t},c=(e,t)=>{if(t.hasDefault)s(e,t.default);else if(!t.optional){let n=Ar(t.type);n&&(o[e]=n)}},l={},u=[],d=[],f={},p=[],m=[],h={},g=[];for(let n in e){let a=e[n];if(cr(a)){let e=a.toDefinition();if(e.noSync){if(e.view!==void 0||e.unreliable||e.patchOnly||e.fullStateOnly||e.stream)throw Error(`schema(${t?`'${t}'`:``}): field '${n}' uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);c(n,e);continue}if(e.patchOnly&&e.fullStateOnly)throw Error(`schema(${t?`'${t}'`:``}): field '${n}' uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client — use .noSync() if that is intended.`);let i=Tt(e.type);if(typeof i==`function`&&!Nr.is(i))throw Error(`schema(${t?`'${t}'`:``}): field '${n}' is a synced ref to non-Schema class '${i.name||`(anonymous)`}' — use .noSync(), or Metadata.setFields().`);r[n]=i,e.view!==void 0&&(l[n]=e.view),e.unreliable&&u.push(n),e.patchOnly&&d.push(n),e.deprecated&&(f[n]=e.deprecatedThrows),e.fullStateOnly&&p.push(n),e.stream&&m.push(n),e.streamPriority!==void 0&&(h[n]=e.streamPriority),e.optional&&g.push(n),c(n,e)}else if(typeof a==`function`)Nr.is(a)?(r[n]=Tt(a),(!a.prototype.initialize||a.prototype.initialize.length===0)&&(o[n]=()=>new a)):i[n]=a;else throw Error(`schema(${t?`'${t}'`:``}): field '${n}' must be a t.* builder, Schema subclass, or method (got ${typeof a}).`)}let _=e=>{for(let t in a)e[t]=a[t];for(let t in o)e[t]=o[t]()},v=()=>{let e={};return _(e),e},y=e=>{let t=Object.keys(r),n={};for(let r in e)t.includes(r)||(n[r]=e[r]);return n},b=typeof i.initialize==`function`,x=i.initialize??n._initialize,S=class extends n{constructor(...e){let t=e[0];t===void 0?(super(),_(this)):super(Object.assign(v(),b?y(t):t)),x&&new.target===S&&x.apply(this,e)}};t&&Object.defineProperty(S,"name",{value:t}),kt.setFields(S,r),S._getDefaultValues=v,S._initialize=x,Object.assign(S.prototype,i);for(let e in l)br(l[e])(S.prototype,e);for(let e of u)xr(S.prototype,e);for(let e of d)Sr(S.prototype,e);for(let e in f)kr(f[e])(S.prototype,e);if(p.length>0||m.length>0){let e=S[Symbol.metadata];for(let t of p)kt.setFullStateOnly(e,t);for(let t of m)kt.setStream(e,t);for(let t in h)kt.setStreamPriority(e,t,h[t])}if(g.length>0){let e=S[Symbol.metadata];for(let t of g)e[e[t]].optional=!0}return S.extend=(e,t)=>jr(e,t,S),S}function Mr(e){return Array(e).fill(0).map((t,n)=>n===e-1?`└─ `:`   `).join(``)}var Nr=class e{static[w]=In;static[T]=Jn;[S];[P];static initialize(e){Object.defineProperty(e,A,{value:new jn(e),enumerable:!1,writable:!0}),e[P]=[]}static initializeForDecoder(){let e=Object.create(this.prototype);return Pn(e),e[P]=[],e}static reset(e){let t=e?.[A];if(t===void 0||typeof t.recycle!=`function`)throw Error(`@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.`);if(t.extraParents!==void 0)throw Error(`@colyseus/schema: cannot reset a shared instance (${e.constructor.name}) with multiple parents.`);e[ee]()}[ee](){let e=this.constructor[Symbol.metadata]?.[oe]??[],t=this[P];for(let n=0;n<e.length;n++)t[e[n]]?.[ee]?.();this[A].recycle(),this[S]=void 0}static is(e){let t=e[Symbol.metadata];return typeof t==`object`&&!!t}static isSchema(e){return typeof e?.assign==`function`}static[C](e,t,n=y.ADD){e.change(t,n)}static[E](e,t,n){let r=e.constructor[Symbol.metadata][t]?.tag;return n===void 0?r===void 0:r===void 0?!0:r===yr?n.isChangeTreeVisible(e[A]):n.hasTagOnTree(e[A],r)}constructor(t){e.initialize(this),t&&e.assignProps(this,t)}assign(t){return e.assignProps(this,t),this}static assignProps(e,t){let n=e.constructor[Symbol.metadata];if(n&&n[`~__numFields`]!==void 0)for(let r=0;r<=n[F];r++){let i=n[r];if(!i)continue;let a=t[i.name];a!==void 0&&(e[i.name]=a)}let r=Object.keys(t);for(let i=0;i<r.length;i++){let a=r[i];n&&n[a]!==void 0||(e[a]=t[a])}}restore(t){let n=this.constructor[Symbol.metadata];for(let r in n){let i=n[r],a=i.name,o=i.type,s=t[a];if(s!=null){if(typeof o==`string`)this[a]=s;else if(e.is(o)){let e=new o;e.restore(s),this[a]=e}else if(typeof o==`object`){let t=Object.keys(o)[0],n=o[t];if(t===`map`){let t=this[a];for(let r in s)if(e.is(n)){let e=new n;e.restore(s[r]),t.set(r,e)}else t.set(r,s[r])}else if(t===`array`){let t=this[a];for(let r=0;r<s.length;r++)if(e.is(n)){let e=new n;e.restore(s[r]),t.push(e)}else t.push(s[r])}}}}return this}setDirty(e,t){let n=this.constructor[Symbol.metadata];this[A].change(n[n[e]].index,t)}pauseTracking(){this[A].pause()}resumeTracking(){this[A].resume()}untracked(e){return this[A].untracked(e)}get isTrackingPaused(){return this[A].paused}clone(){let t=Object.create(this.constructor.prototype);e.initialize(t);let n=this.constructor[Symbol.metadata];for(let e in n){let r=n[e].name;t[r]=typeof this[r]==`object`&&typeof this[r]?.clone==`function`?this[r].clone():this[r]}return t}toJSON(){let e={},t=this.constructor[Symbol.metadata];for(let n in t){let r=t[n],i=r.name;!r.deprecated&&this[i]!==null&&this[i]!==void 0&&(e[i]=typeof this[i].toJSON==`function`?this[i].toJSON():this[i])}return e}discardAllChanges(){this[A].discardAll()}[D](e){let t=this.constructor[Symbol.metadata];return this[t[e].name]}[O](e){let t=this.constructor[Symbol.metadata];this[t[e].name]=void 0}static debugRefIds(e,t=!1,n=0,r,i=``){let a=t?` - ${JSON.stringify(e.toJSON())}`:``,o=e[A],s=e[S],c=r?r.root:o.root,l=c?.refCount?.[s]>1?` [×${c.refCount[s]}]`:``,u=`${Mr(n)}${i}${e.constructor.name} (refId: ${s})${l}${a}\n`;return o.forEachChild((i,a)=>{let o=a;typeof a==`number`&&e.$indexes&&(o=e.$indexes.get(a)??a);let s=e.forEach!==void 0&&o!==void 0?`["${o}"]: `:``;u+=this.debugRefIds(i.ref,t,n+1,r,s)}),u}static debugRefIdEncodingOrder(e,t=`allChanges`){let n=[],r=e[A];if(t===`changes`){let e=r.root.changes?.next;for(;e;)e.changeTree&&n.push(e.changeTree.ref[S]),e=e.next;return n}let i=t===`allFilteredChanges`,a=new Set,o=e=>{a.has(e)||(a.add(e),e.isFiltered===i&&n.push(e.ref[S]),e.forEachChild((e,t)=>o(e)))};return o(r),n}static debugRefIdsFromDecoder(e){return this.debugRefIds(e.state,!1,0,e)}static debugChanges(e,t=!1){let n=e[A],r=t?`allChanges`:`changes`,i=`${e.constructor.name} (${e[S]}) -> .${r}:\n`;return t?n.forEachLive(e=>{i+=`- [${e}]: ADD (${JSON.stringify(n.getValue(Number(e),!0))})\n`}):n.forEach((e,t)=>{e<0||!t||(i+=`- [${e}]: ${y[t]} (${JSON.stringify(n.getValue(Number(e),!1))})\n`)}),i}};b(Nr);var Pr={value:0,enumerable:!1,writable:!0},Fr=class{types;nextUniqueId=0;refCount={};changeTrees={};changes=yn();unreliableChanges=yn();pendingFilterRefresh=[];enqueueFilterRefresh(e){this.types.hasFilters&&(e.flags&On||(e.flags|=On,this.pendingFilterRefresh.push(e)))}_nodePool=[];_nextViewId=0;_freeViewIds=[];acquireViewId(){return this._freeViewIds.length>0?this._freeViewIds.pop():this._nextViewId++}releaseViewId(e){this._freeViewIds.push(e)}activeViews=new Map;streamTrees=new Set;registerView(e){this.activeViews.set(e.id,new WeakRef(e))}unregisterView(e){this.activeViews.delete(e.id);let t=e.id;for(let e of this.streamTrees)e._dropView(t)}forEachActiveView(e){for(let[t,n]of this.activeViews){let r=n.deref();if(r===void 0){this.activeViews.delete(t);for(let e of this.streamTrees)e._dropView(t)}else e(r)}}registerStream(e){this.streamTrees.add(e)}unregisterStream(e){this.streamTrees.delete(e)}constructor(e,t=0){this.types=e,this.nextUniqueId=t}add(e){let t=e.ref;t[S]===void 0&&(Pr.value=this.nextUniqueId++,Object.defineProperty(t,S,Pr));let n=t[S],r=this.changeTrees[n]===void 0;r&&(this.changeTrees[n]=e);let i=this.refCount[n];return(i===0||e.needsRestage)&&(e.needsRestage=!1,e.forEachLiveWithCtx(e,Gt)),this.refCount[n]=(i||0)+1,i>0&&this.enqueueFilterRefresh(e),r}remove(e){let t=e.ref[S],n=this.refCount[t]-1;if(n<=0){if(e.root=void 0,delete this.changeTrees[t],e.isStreamCollection){let t=e.ref;t._unregister?.(),this.unregisterStream(t)}this.removeFromQueue(e),this.removeFromUnreliableQueue(e),this.refCount[t]=0,e.forEachChild((t,n)=>{t.removeParent(e.ref)&&(t.parentRef===void 0||t.parentRef&&this.refCount[t.ref[S]]>0?this.remove(t):t.parentRef&&this.moveNextToParent(t))})}else this.refCount[t]=n,this.enqueueFilterRefresh(e),this.recursivelyMoveNextToParent(e);return n}recursivelyMoveNextToParent(e){this.moveNextToParent(e),e.forEachChild((e,t)=>this.recursivelyMoveNextToParent(e))}moveNextToParent(e){e.changesNode&&this._moveNextToParentInList(this.changes,e,e.changesNode,`changesNode`),e.unreliableChangesNode&&this._moveNextToParentInList(this.unreliableChanges,e,e.unreliableChangesNode,`unreliableChangesNode`)}_moveNextToParentInList(e,t,n,r){let i=t.parent;if(!i||!i[A])return;let a=i[A][r];a&&a!==n&&(n.position>a.position||(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,n.prev=e.tail,n.next=void 0,e.tail.next=n,e.tail=n,n.position=e.nextPosition++))}enqueueChangeTree(e,t=e.changesNode){t||(e.changesNode=this._appendToList(this.changes,e))}enqueueUnreliable(e,t=e.unreliableChangesNode){t||(e.unreliableChangesNode=this._appendToList(this.unreliableChanges,e))}_appendToList(e,t){let n=this._nodePool,r;return n.length>0?(r=n.pop(),r.changeTree=t,r.next=void 0,r.prev=void 0):r={changeTree:t,next:void 0,prev:void 0,position:0},e.next?(r.prev=e.tail,e.tail.next=r,e.tail=r):(e.nextPosition=0,e.next=r,e.tail=r),r.position=e.nextPosition++,r}releaseNode(e){e.changeTree=void 0,e.prev=void 0,e.next=void 0,this._nodePool.push(e)}removeFromQueue(e){return this._removeNode(this.changes,e,e.changesNode,`changesNode`)}removeFromUnreliableQueue(e){return this._removeNode(this.unreliableChanges,e,e.unreliableChangesNode,`unreliableChangesNode`)}_removeNode(e,t,n,r){return!n||n.changeTree!==t?!1:(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,t[r]=void 0,this.releaseNode(n),!0)}};function Ir(e,t){if(t===-1||t>=e.length)return!1;let n=e.length-1;for(let r=t;r<n;r++)e[r]=e[r+1];return e.length=n,!0}function Lr(e,t,n){let r=~n,i=e.changeTrees;for(let e in i){let n=i[e],a=n.visibleViews;a!==void 0&&t<a.length&&(a[t]&=r);let o=n.subscribedViews;o!==void 0&&t<o.length&&(o[t]&=r);let s=n.tagViews;s!==void 0&&s.forEach(e=>{t<e.length&&(e[t]&=r)})}}new FinalizationRegistry(({root:e,id:t,slot:n,bit:r})=>{Lr(e,n,r),e.activeViews.delete(t);for(let n of e.streamTrees)n._dropView(t);e.releaseViewId(t)});var Rr=-1;function zr(e){e.structSwitchEmitted||=(e.shouldEmitSwitch&&(e.buffer[e.it.offset++]=255,H.number(e.buffer,e.ref[S],e.it)),!0)}function Br(e,t){Ur(e,t,y.ADD)}function Vr(e,t){if(t._fullSyncGen!==e.gen){if(t._fullSyncGen=e.gen,!e.hasView||e.view.isChangeTreeVisible(t)){let n=t.encDescriptor;e.changeTree=t,e.ref=t.ref,e.encoder=n.encoder,e.filter=n.filter,e.metadata=n.metadata,e.treeIsFiltered=t.isFiltered,e.isSchema=n.isSchema,e.filterBitmask=n.filterBitmask,e.tags=n.tags,e.structSwitchEmitted=!1,e.shouldEmitSwitch=e.hasView||e.it.offset>e.initialOffset||t!==e.rootChangeTree,t.isArray&&t.collDirty.size>0&&(t.flags|=kn),Jt(t,e,Br)}fn(t,e,Hr)}}function Hr(e,t,n){Vr(e,t)}function Ur(e,t,n){if(t<0){if(e.treeIsFiltered!==e.emitFiltered)return;zr(e),e.buffer[e.it.offset++]=Math.abs(t)&255;return}if((e.isSchema?e.treeIsFiltered||(t<32?!!(e.filterBitmask&1<<t):e.tags[t]!==void 0):e.treeIsFiltered)!==e.emitFiltered)return;let r=e.isEncodeAll?y.ADD:n;r!==void 0&&(e.filter===void 0||e.filter(e.ref,t,e.view))&&(zr(e),e.encoder(e.self,e.buffer,e.changeTree,t,r,e.it,e.isEncodeAll,e.hasView,e.metadata))}function Wr(e,t){let n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n}var Gr=class e{static BUFFER_SIZE=16384;sharedBuffer=new Uint8Array(e.BUFFER_SIZE);context;state;root;constructor(e,t){this.context=St.cache(e.constructor),this.root=t??new Fr(this.context),this.setState(e)}setState(e){this.state=e,this.state[A].setRoot(this.root)}_encodeCtx={self:void 0,buffer:void 0,it:void 0,changeTree:void 0,ref:void 0,encoder:void 0,filter:void 0,metadata:void 0,view:void 0,isEncodeAll:!1,hasView:!1,treeIsFiltered:!1,isSchema:!1,emitFiltered:!1,filterBitmask:0,tags:void 0,structSwitchEmitted:!1,isRootTree:!1,shouldEmitSwitch:!1,gen:0,initialOffset:0,rootChangeTree:void 0};_fullSyncGen=0;encode(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!1)}encodeUnreliable(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!0)}_encodeChannel(e,t,n,r,i){this.root.pendingFilterRefresh.length>0&&Zt(this.root);let a=t!==void 0,o=this.state[A],s=this._encodeCtx;s.self=this,s.buffer=n,s.it=e,s.view=t,s.isEncodeAll=!1,s.hasView=a,s.emitFiltered=a;let c=i?this.root.unreliableChanges:this.root.changes;for(;c=c.next;){let n=c.changeTree;if(a&&!t.isChangeTreeVisible(n))continue;let l=i?n.unreliableRecorder:n;if(!l||!l.has())continue;let u=n.encDescriptor;s.changeTree=n,s.ref=n.ref,s.encoder=u.encoder,s.filter=u.filter,s.metadata=u.metadata,s.treeIsFiltered=n.isFiltered,s.isSchema=u.isSchema,s.filterBitmask=u.filterBitmask,s.tags=u.tags,s.structSwitchEmitted=!1,s.isRootTree=n===o,s.shouldEmitSwitch=a||e.offset>r||!s.isRootTree,l.forEachWithCtx(s,Ur)}return!i&&!a&&this._isStreamBroadcastMode&&this._emitStreamBroadcast(n,e),e.offset>n.byteLength?(n=this._resizeBuffer(n,e.offset),e.offset=r,this._encodeChannel(e,t,n,r,i)):n.subarray(0,e.offset)}encodeFullSync(e,t,n,r,i=e.offset){this.root.pendingFilterRefresh.length>0&&Zt(this.root);let a=r!==void 0,o=this.state[A],s=this._encodeCtx;return s.self=this,s.buffer=t,s.it=e,s.view=r,s.isEncodeAll=!0,s.hasView=a,s.emitFiltered=n,s.gen=++this._fullSyncGen,s.initialOffset=i,s.rootChangeTree=o,Vr(s,o),e.offset>t.byteLength?(t=this._resizeBuffer(t,e.offset),e.offset=i,this.encodeFullSync(e,t,n,r,i)):t.subarray(0,e.offset)}_resizeBuffer(t,n){let r=Math.ceil(n/e.BUFFER_SIZE)*e.BUFFER_SIZE;console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(r/1024)} * 1024; // ${Math.round(r/1024)} KB
`);let i=new Uint8Array(r);return i.set(t),t===this.sharedBuffer&&(this.sharedBuffer=i),i}encodeAll(e={offset:0},t=this.sharedBuffer){return this.encodeFullSync(e,t,!1)}encodeAllView(e,t,n,r=this.sharedBuffer){let i=n.offset;return r=this.encodeFullSync(n,r,!0,e,i),Wr(r.subarray(0,t),r.subarray(i,n.offset))}ensureCapacity(t,n){if(n+e.BUFFER_SIZE<=t.byteLength)return t;let r=Math.ceil((n+e.BUFFER_SIZE)/e.BUFFER_SIZE)*e.BUFFER_SIZE,i=new Uint8Array(r);return i.set(t.subarray(0,n)),t===this.sharedBuffer&&(this.sharedBuffer=i),i}encodeView(e,t,n,r=this.sharedBuffer){let i=n.offset;this._emitStreamPriority(e);for(let t of e.changes.keys()){let i=e.changes.get(t),a=this.root.changeTrees[t];if(a===void 0){e.changes.delete(t);continue}if(i.size===0)continue;let o=a.encDescriptor,s=o.encoder,c=o.metadata,l=a.ref,u=a.refTarget;r=this.ensureCapacity(r,n.offset),r[n.offset++]=255,H.number(r,l[S],n);for(let[t,o]of i){let i;if(t===Rr){let e=u.tmpItems,t=u.deletedIndexes;for(let i=0;i<e.length;i++)e[i]!==void 0&&t[i]!==!0&&s(this,r,a,i,y.ADD,n,!1,!0,c);continue}if(typeof t==`number`)i=t;else{let n=t.indexInParent(l);if(n===void 0)continue;if(i=n,o===y.ADD&&a.getChange(i)===y.DELETE){e.changes.delete(t.ref[S]);continue}}let d=u[`~getByIndex`](i)!==void 0&&o||y.DELETE;s(this,r,a,i,d,n,!1,!0,c)}}return e.changes.clear(),r=this.encode(n,e,r),Wr(r.subarray(0,t),r.subarray(i,n.offset))}encodeUnreliableView(e,t,n,r=this.sharedBuffer){let i=n.offset;return r=this.encodeUnreliable(n,e,r,i),Wr(r.subarray(0,t),r.subarray(i,n.offset))}_emitStreamBroadcast(e,t){let n=this.root.streamTrees;for(let r of n){let n=r,i=n[A],a=n[S];if(a===void 0)continue;let o=n._stream,s=o.broadcastDeletes,c=o.broadcastPending,l=o.sentBroadcast,u=s.size>0,d=c.size>0,f=i.encDescriptor,p=f.encoder,m=f.metadata;if(u||d){if(e[t.offset++]=255,H.number(e,a,t),u){for(let n of s)p(this,e,i,n,y.DELETE,t,!1,!1,m);s.clear()}let r=o.maxPerTick,d=[],f=0,h=[];for(let a of c){if(f>=r)break;let o=n[D](a);o===void 0?h.push(a):(p(this,e,i,a,y.ADD,t,!1,!1,m),l.add(a),d.push(o),h.push(a),f++)}for(let e of h)c.delete(e);for(let n of d){let r=n[A];if(r===void 0)continue;let i=n[S];if(i===void 0)continue;e[t.offset++]=255,H.number(e,i,t);let a=r.encDescriptor,o=a.encoder,s=a.metadata;r.forEachLive(n=>{kt.hasUnreliableAtIndex(s,n)||o(this,e,r,n,y.ADD,t,!1,!1,s)})}}for(let r of l){let i=n[D](r);if(i===void 0)continue;let a=i[A];if(a===void 0||!a.has())continue;let o=i[S];if(o===void 0)continue;e[t.offset++]=255,H.number(e,o,t);let s=a.encDescriptor,c=s.encoder,l=s.metadata;a.forEach((n,r)=>{n<0||kt.hasUnreliableAtIndex(l,n)||c(this,e,a,n,r,t,!1,!1,l)})}}}_emitStreamPriority(e){let t=this.root.streamTrees;if(t.size===0)return;let n=e.id;for(let r of t){let t=r,i=t._stream,a=i.pendingByView.get(n);if(a===void 0||a.size===0)continue;let o=i.priorityByView?.get(n),s=o!==void 0,c=i.priority,l=i.maxPerTick,u=[],d=[];if(s||c!==void 0){let n=[],r=[],i=0;for(let u of a){let a=t[D](u);if(a===void 0){d.push(u);continue}let f=s?o(a):c(e,a);if(i<l){let e=i++;for(;e>0&&r[e-1]<f;)r[e]=r[e-1],n[e]=n[e-1],e--;r[e]=f,n[e]=u}else if(f>r[l-1]){let e=l-1;for(;e>0&&r[e-1]<f;)r[e]=r[e-1],n[e]=n[e-1],e--;r[e]=f,n[e]=u}}for(let e=0;e<i;e++)u.push(n[e])}else for(let e of a){if(u.length>=l)break;u.push(e)}for(let e of d)a.delete(e);let f=u.length,p=i.sentByView.get(n);p===void 0&&(p=new Set,i.sentByView.set(n,p));for(let n=0;n<f;n++){let r=u[n],i=t[D](r);if(i===void 0){a.delete(r);continue}e._addImmediate(i);let o=i[A];if(o!==void 0){let t=i[S],n=e.changes.get(t);n===void 0&&(n=new Map,e.changes.set(t,n));let r=o.metadata;o.forEachLive(e=>{kt.hasUnreliableAtIndex(r,e)||n.set(e,y.ADD)})}a.delete(r),p.add(r)}}}discardChanges(){let e=this.root.changes,t=e.next,n=this.root;for(;t;){let e=t.next;t.changeTree.endEncode(),n.releaseNode(t),t=e}e.next=void 0,e.tail=void 0}discardUnreliableChanges(){let e=this.root.unreliableChanges,t=e.next,n=this.root;for(;t;){let e=t.next;t.changeTree.endEncodeUnreliable(),n.releaseNode(t),t=e}e.next=void 0,e.tail=void 0}tryEncodeTypeId(e,t,n,r){let i=this.context.getTypeId(t),a=this.context.getTypeId(n);a===void 0?console.warn(`@colyseus/schema WARNING: Class "${n.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`):i!==a&&(e[r.offset++]=213,H.number(e,a,r))}get hasChanges(){return this.root.changes.next!==void 0||this._hasStreamBacklog()}get _isStreamBroadcastMode(){return this.root.activeViews.size===0&&this.root.streamTrees.size>0}_hasStreamBacklog(){let e=this.root;if(e.streamTrees.size===0)return!1;let t=e.activeViews.size===0;for(let n of e.streamTrees)if(t?ft(n):dt(n,e))return!0;return!1}get hasUnreliableChanges(){return this.root.unreliableChanges.next!==void 0}},Kr=class extends Error{constructor(e){super(e),this.name=`DecodingWarning`}},qr={value:0,enumerable:!1,writable:!0},Jr=class{refs=new Map;refCount={};deletedRefs=new Set;callbacks={};nextUniqueId=0;getNextUniqueId(){return this.nextUniqueId++}addRef(e,t,n=!0){this.refs.set(e,t),t[S]===void 0?(qr.value=e,Object.defineProperty(t,S,qr)):t[S]!==e&&(t[S]=e),n&&(this.refCount[e]=(this.refCount[e]||0)+1),this.deletedRefs.has(e)&&this.deletedRefs.delete(e)}removeRef(e){let t=this.refCount[e];if(t===void 0)try{throw new Kr(`trying to remove refId that doesn't exist: `+e)}catch(e){console.warn(e)}else if(t===0)try{let t=this.refs.get(e);throw new Kr(`trying to remove refId '${e}' with 0 refCount (${t.constructor.name}: ${JSON.stringify(t)})`)}catch(e){console.warn(e)}else(this.refCount[e]=t-1)<=0&&this.deletedRefs.add(e)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(e=>{if(this.refCount[e]>0)return;let t=this.refs.get(e),n=t.constructor[Symbol.metadata];if(n!=null)for(let e in n){let r=t[n[e].name];if(typeof r==`object`&&r){let e=r[S];e!==void 0&&!this.deletedRefs.has(e)&&this.removeRef(e)}}else typeof t[j]==`function`&&Array.from(t.values()).forEach(e=>{let t=e[S];t!==void 0&&!this.deletedRefs.has(t)&&this.removeRef(t)});this.refs.delete(e),delete this.refCount[e],delete this.callbacks[e]}),this.deletedRefs.clear()}addCallback(e,t,n){if(e===void 0){let e=typeof t==`number`?y[t]:t;throw Error(`Can't addCallback on '${e}' (refId is undefined)`)}return this.callbacks[e]||(this.callbacks[e]={}),this.callbacks[e][t]||(this.callbacks[e][t]=[]),this.callbacks[e][t].push(n),()=>this.removeCallback(e,t,n)}removeCallback(e,t,n){let r=this.callbacks?.[e]?.[t]?.indexOf(n);r!==void 0&&r!==-1&&Ir(this.callbacks[e][t],r)}},Yr=class{context;state;root;currentRefId=0;triggerChanges;resyncVisited=null;resyncDamaged=!1;constructor(e,t){this.setState(e),this.context=t||new St(e.constructor)}setState(e){this.state=e,this.root=new Jr,this.root.addRef(0,e)}decode(e,t={offset:0},n=this.state){let r=this.triggerChanges===void 0?null:[],i=this.root,a=e.byteLength,o=n.constructor[T];for(this.currentRefId=0;t.offset<a;)if(e[t.offset]==_){t.offset++,n[te]?.();let r=et.number(e,t),s=i.refs.get(r);s?(n=s,o=n.constructor[T],this.currentRefId=r):(console.error(`"refId" not found: ${r}`,{previousRef:n,previousRefId:this.currentRefId}),console.warn(`Please report this issue to the developers.`),this.skipCurrentStructure(e,t,a))}else o(this,e,t,n,r)===Gn&&(console.warn(`@colyseus/schema: definition mismatch`),this.skipCurrentStructure(e,t,a));return n[te]?.(),this.resyncVisited!==null&&Hn(this,r),r!==null&&this.triggerChanges?.(r),i.garbageCollectDeletedRefs(),r}decodeResync(e,t={offset:0}){this.resyncVisited=new Map,this.resyncDamaged=!1;try{return this.decode(e,t)}finally{this.resyncVisited=null}}skipCurrentStructure(e,t,n){this.resyncVisited!==null&&(this.resyncDamaged=!0);let r={offset:t.offset};for(;t.offset<n&&!(e[t.offset]===_&&(r.offset=t.offset+1,this.root.refs.has(et.number(e,r))));)t.offset++}getInstanceType(e,t,n){let r;if(e[t.offset]===v){t.offset++;let n=et.number(e,t);r=this.context.get(n)}return r||n}createInstanceOfType(e){return e.initializeForDecoder()}removeChildRefs(e,t){let n=typeof e[j]!=`string`,r=e[S];e.forEach((i,a)=>{t?.push({ref:e,refId:r,op:y.DELETE,field:a,value:void 0,previousValue:i}),n&&this.root.removeRef(i[S])})}},Xr=jr({min:vr.float64(),max:vr.float64(),bits:vr.uint8(),mode:vr.uint8()},`QuantizedDescriptor`),Zr=jr({name:vr.string(),type:vr.string(),referencedType:vr.number(),childPrimitive:vr.string(),quantized:vr.ref(Xr).optional()},`ReflectionField`),Qr=jr({id:vr.number(),extendsId:vr.number(),fields:vr.array(Zr)},`ReflectionType`),$r=jr({types:vr.array(Qr),rootType:vr.number()},`Reflection`);$r.encode=function(e,t={offset:0}){let n=e.context,r=new $r,i=new Gr(r),a=n.schemas.get(e.state.constructor);a>0&&(r.rootType=a);let o=new Set,s={},c=e=>{if(e.extendsId===void 0||o.has(e.extendsId)){o.add(e.id),r.types.push(e);let t=s[e.id];t!==void 0&&(delete s[e.id],t.forEach(e=>c(e)))}else s[e.extendsId]===void 0&&(s[e.extendsId]=[]),s[e.extendsId].push(e)};n.schemas.forEach((e,t)=>{let r=new Qr;r.id=Number(e);let i=Object.getPrototypeOf(t);i!==Nr&&(r.extendsId=n.schemas.get(i));let a=t[Symbol.metadata];if(a!==i[Symbol.metadata]){let e=a[`~__numFields`]??-1;for(let t=0;t<=e;t++){let e=a[t];if(e===void 0)continue;let i=e.name;if(!Object.prototype.hasOwnProperty.call(a,i))continue;let o=new Zr;o.name=i;let s;if(typeof e.type==`string`)s=e.type;else if(_t(e.type)){let t=e.type.quantized;s=`quantized`;let n=new Xr;n.min=t.min,n.max=t.max,n.bits=t.bits,n.mode=+!!t.wrap,o.quantized=n}else{let t;Nr.is(e.type)?(s=`ref`,t=e.type):(s=Object.keys(e.type)[0],typeof e.type[s]==`string`?o.childPrimitive=e.type[s]:t=e.type[s]),o.referencedType=t?n.getTypeId(t):-1}o.type=s,r.fields.push(o)}}c(r)});for(let e in s)s[e].forEach(e=>r.types.push(e));return i.encodeAll(t).slice(0,t.offset)},$r.decode=function(e,t){let n=new $r;new Yr(n).decode(e,t);let r=new St;n.types.forEach(e=>{let t=r.get(e.extendsId)??Nr,n=class extends t{};St.register(n),r.add(n,e.id)},{});let i=(e,t,n)=>{t.fields.forEach((t,i)=>{let a=n+i;if(t.quantized!==void 0){let n=t.quantized;kt.addField(e,a,t.name,{quantized:gt({min:n.min,max:n.max,bits:n.bits,mode:n.mode===1?`wrap`:`clamp`})})}else if(t.referencedType!==void 0){let n=t.type,i=r.get(t.referencedType)??t.childPrimitive;n===`ref`?kt.addField(e,a,t.name,i):kt.addField(e,a,t.name,{[n]:i})}else kt.addField(e,a,t.name,t.type)})};return n.types.forEach(e=>{let t=r.get(e.id),a=kt.initialize(t),o=[],s=e;do o.push(s),s=n.types.find(e=>e.id===s.extendsId);while(s);let c=0;o.reverse().forEach(e=>{i(a,e,c),c+=e.fields.length})}),new Yr(new(r.get(n.rootType||0)),r)},$r.makeEncodable=function(e){let t=e[Symbol.metadata];if(!t)return e;let n=t[F];if(n===void 0)return e;for(let r=0;r<=n;r++){let n=t[r];n&&kt.defineField(e,t,r,n.name,n.type)}return Object.prototype.hasOwnProperty.call(e,ie)&&delete e[ie],e};function ei(e){let t=e.root,n=t.callbacks,r=new WeakMap,i;e.triggerChanges=function(e){let t=new Set;for(let r=0,i=e.length;r<i;r++){let i=e[r],a=i.refId,o=i.ref,s=n[a];if(s){if((i.op&y.DELETE)===y.DELETE&&Nr.isSchema(i.previousValue)){let e=n[i.previousValue[S]]?.[y.DELETE];for(let t=e?.length-1;t>=0;t--)e[t]()}if(Nr.isSchema(o)){if(!t.has(a)){let e=s?.[y.REPLACE];for(let t=e?.length-1;t>=0;t--)e[t]()}if(s.hasOwnProperty(i.field)){let e=s[i.field];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.previousValue)}}else{if((i.op&y.DELETE)===y.DELETE){if(i.previousValue!==void 0){let e=s[y.DELETE];for(let t=e?.length-1;t>=0;t--)e[t](i.previousValue,i.dynamicIndex??i.field)}if((i.op&y.ADD)===y.ADD){let e=s[y.ADD];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.dynamicIndex??i.field)}}else if((i.op&y.ADD)===y.ADD&&i.previousValue!==i.value){let e=s[y.ADD];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.dynamicIndex??i.field)}if(i.value!==i.previousValue&&(i.value!==void 0||i.previousValue!==void 0)){let e=s[y.REPLACE];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.dynamicIndex??i.field)}}t.add(a)}}};function a(e,n){let s=n.instance?.constructor[Symbol.metadata]||e,c=n.instance&&typeof n.instance.forEach==`function`||e&&!Nr.is(e);if(s&&!c){let e=function(e,a,o,s){return s&&n.instance[a]!==void 0&&!r.has(i)&&o(n.instance[a],void 0),t.addCallback(e[S],a,o)};return new Proxy({listen:function(t,a,o=!0){if(n.instance)return e(n.instance,t,a,o);{let s=()=>{};return n.onInstanceAvailable((n,c)=>{s=e(n,t,a,o&&c&&!r.has(i))}),()=>s()}},onChange:function(e){return t.addCallback(n.instance[S],y.REPLACE,e)},bindTo:function(e,r){return r||=Object.keys(s).map(e=>s[e].name),t.addCallback(n.instance[S],y.REPLACE,()=>{r.forEach(t=>e[t]=n.instance[t])})}},{get(e,t){let r=s[s[t]];if(r){let e=n.instance?.[t];return a(r.type,{instance:e?.[S]!==void 0&&e,parentInstance:n.instance,onInstanceAvailable:(r=>{let i=o(n.instance).listen(t,(e,t)=>{r(e,!1),i?.()},!1);e?.[S]!==void 0&&r(e,!0)})})}return e[t]},has(e,t){return s[t]!==void 0},set(e,t,n){throw Error(`not allowed`)},deleteProperty(e,t){throw Error(`not allowed`)}})}{let e=function(e,n,a){return a&&e.forEach((e,t)=>n(e,t)),t.addCallback(e[S],y.ADD,(e,t)=>{r.set(n,!0),i=n,n(e,t),r.delete(n),i=void 0})},a=function(e,n){return t.addCallback(e[S],y.DELETE,n)},o=function(e,n){return t.addCallback(e[S],y.REPLACE,n)};return new Proxy({onAdd:function(t,a=!0){if(n.instance)return e(n.instance,t,a&&!r.has(i));if(n.onInstanceAvailable){let o=()=>{};return n.onInstanceAvailable((n,s)=>{o=e(n,t,a&&s&&!r.has(i))}),()=>o()}},onRemove:function(e){if(n.instance)return a(n.instance,e);if(n.onInstanceAvailable){let t=()=>{};return n.onInstanceAvailable(n=>{t=a(n,e)}),()=>t()}},onChange:function(e){if(n.instance)return o(n.instance,e);if(n.onInstanceAvailable){let t=()=>{};return n.onInstanceAvailable(n=>{t=o(n,e)}),()=>t()}}},{get(e,t){if(!e[t])throw Error(`Can't access '${t}' through callback proxy. access the instance directly.`);return e[t]},has(e,t){return e[t]!==void 0},set(e,t,n){throw Error(`not allowed`)},deleteProperty(e,t){throw Error(`not allowed`)}})}}function o(e){return a(void 0,{instance:e})}return o}function ti(e,t){e.triggerChanges=t}var ni=class{decoder;uniqueRefIds=new Set;isTriggering=!1;constructor(e){this.decoder=e,this.decoder.triggerChanges=this.triggerChanges.bind(this)}get callbacks(){return this.decoder.root.callbacks}get state(){return this.decoder.state}addCallback(e,t,n){return this.decoder.root.addCallback(e,t,n)}addCallbackOrWaitCollectionAvailable(e,t,n,r,i=!0){let a=()=>{},o=()=>a(),s=e[t];if(!s||s[S]===void 0){let i;return i=this.addCallback(e[S],t,(e,t)=>{e!=null&&(i(),a=this.addCallback(e[S],n,r))}),a=i,o}return i&&=this.isTriggering===!1,n===y.ADD&&i&&s.forEach((e,t)=>{r(e,t)}),this.addCallback(s[S],n,r)}listen(...e){return typeof e[0]==`string`?this.listenInstance(this.state,e[0],e[1],e[2]):this.listenInstance(e[0],e[1],e[2],e[3])}listenInstance(e,t,n,r=!0){r&&=this.isTriggering===!1;let i=e[t];return r&&i!=null&&n(i,void 0),this.addCallback(e[S],t,n)}onChange(...e){if(e.length===2&&typeof e[0]!=`string`){let t=e[0],n=e[1];return this.addCallback(t[S],y.REPLACE,n)}return typeof e[0]==`string`?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],y.REPLACE,e[1]):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],y.REPLACE,e[2])}onAdd(...e){return typeof e[0]==`string`?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],y.ADD,e[1],e[2]!==!1):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],y.ADD,e[2],e[3]!==!1)}onRemove(...e){return typeof e[0]==`string`?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],y.DELETE,e[1]):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],y.DELETE,e[2])}bindTo(e,t,n,r=!0){let i=e.constructor[Symbol.metadata];n||=Object.keys(i).filter(e=>!isNaN(Number(e))).map(e=>i[e].name);let a=()=>{for(let r of n){let n=e[r];n!==void 0&&(t[r]=n)}};return r&&a(),this.addCallback(e[S],y.REPLACE,a)}triggerChanges(e){this.uniqueRefIds.clear(),this.isTriggering=!0;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=n.refId,i=n.ref,a=this.callbacks[r];if(a){if((n.op&y.DELETE)===y.DELETE&&Nr.isSchema(n.previousValue)){let e=n.previousValue[S],t=this.callbacks[e]?.[y.DELETE];if(t)for(let e=t.length-1;e>=0;e--)try{t[e]()}catch(e){console.error(e)}}if(Nr.isSchema(i)){if(!this.uniqueRefIds.has(r)){let e=a[y.REPLACE];if(e)for(let t=e.length-1;t>=0;t--)try{e[t]()}catch(e){console.error(e)}}let e=a[n.field];if(e)for(let t=e.length-1;t>=0;t--)try{e[t](n.value,n.previousValue)}catch(e){console.error(e)}}else{let e=n.dynamicIndex??n.field;if((n.op&y.DELETE)===y.DELETE){if(n.previousValue!==void 0){let t=a[y.DELETE];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](n.previousValue,e)}catch(e){console.error(e)}}if((n.op&y.ADD)===y.ADD){let t=a[y.ADD];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](n.value,e)}catch(e){console.error(e)}}}else if((n.op&y.ADD)===y.ADD&&n.previousValue!==n.value){let t=a[y.ADD];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](n.value,e)}catch(e){console.error(e)}}if(n.value!==n.previousValue){let t=a[y.REPLACE];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](e,n.value)}catch(e){console.error(e)}}}this.uniqueRefIds.add(r)}}this.isTriggering=!1}},ri={get(e){if(e instanceof Yr)return new ni(e);if(`decoder`in e.serializer)return new ni(e.serializer.decoder);throw Error(`Invalid room or decoder`)},getLegacy(e){if(e instanceof Yr)return ei(e);if(`decoder`in e.serializer)return ei(e.serializer.decoder);throw Error(`Invalid room or decoder`)},getRawChanges(e,t){return ti(e,t)}};rt(`map`,{constructor:rr}),rt(`array`,{constructor:tr}),rt(`set`,{constructor:ar}),rt(`collection`,{constructor:ir});var ii=256,ai=5,oi=class e{instance;mode;historySize;_desc;_numFields;_slots;_slotLens;_slotHead=0;_slotCount=0;_outBuffer;_seq=0;_encoder;constructor(e,t={}){this.instance=e,this.mode=t.mode??`reliable`,this.historySize=this.mode===`unreliable`?Math.max(1,t.historySize??3):1,this._desc=It(e);let n=this._desc.metadata?.[F];if(n===void 0)throw Error(`InputEncoder: '${e.constructor.name}' has no fields`);this._numFields=n;for(let t=0;t<=n;t++)if(this._desc.names[t]!==void 0&&this._desc.encoders[t]===void 0)throw Error(`InputEncoder: non-primitive field '${this._desc.names[t]}' on '${e.constructor.name}' is not supported. Use Encoder for state containing refs/collections.`);if(this.mode===`unreliable`){this._slots=Array(this.historySize),this._slotLens=Array(this.historySize).fill(0);for(let e=0;e<this.historySize;e++)this._slots[e]=new Uint8Array(ii);this._outBuffer=new Uint8Array(261*this.historySize)}this._encoder=new Gr(e)}get seq(){return this._seq}encode(){let e=this._produceDelta();return this.mode===`reliable`?e:this._pushAndEmitRing(e)}reset(){this._slotHead=0,this._slotCount=0,this._encoder.discardChanges();let e=this.instance[A],t=this.instance[P];for(let n=0;n<=this._numFields;n++)t[n]!==void 0&&t[n]!==null&&e.markDirty(n)}copyInto(e){let t=this.instance[P],n=e[P];for(let e=0;e<=this._numFields;e++)n[e]=t[e]}_produceDelta(){let e=this._encoder.encode();return this._encoder.discardChanges(),e}_pushAndEmitRing(t){this._seq++;let n=this._slots[this._slotHead];return t.length>n.byteLength&&(n=this._slots[this._slotHead]=e._grow(n,t.length,`unreliable ring slot`)),n.set(t),this._slotLens[this._slotHead]=t.length,this._slotHead=(this._slotHead+1)%this.historySize,this._slotCount<this.historySize&&this._slotCount++,this._emitRing()}_emitRing(){let t=this._seq-this._slotCount+1,n=ai;for(let e=0;e<this._slotCount;e++)n+=this._slotLens[e]+ai;let r=this._outBuffer;n>r.byteLength&&(r=this._outBuffer=e._grow(r,n,`unreliable output packet`));let i={offset:0};H.number(r,t,i);let a=(this._slotHead-this._slotCount+this.historySize)%this.historySize;for(let e=0;e<this._slotCount;e++){let t=(a+e)%this.historySize,n=this._slotLens[t];H.number(r,n,i),r.set(this._slots[t].subarray(0,n),i.offset),i.offset+=n}return r.subarray(0,i.offset)}static _warned=!1;static _grow(t,n,r){let i=Math.max(n,t.byteLength*2);return e._warned||(e._warned=!0,console.warn(`@colyseus/schema/input: InputEncoder buffer overflow in ${r}. Growing to ${i} bytes.`)),new Uint8Array(i)}};function si(){return typeof performance<`u`?performance.now():Date.now()}var ci=typeof WeakRef<`u`?e=>new WeakRef(e):e=>({deref:()=>e}),li=64;function ui(e,t){let n=globalThis,r=n.__colyseusDebug;if(!r){let e=[];r=n.__colyseusDebug={__buffer:e,publish(t,n){e.push([t,ci(n)]),e.length>li&&e.shift()}}}r.publish(e,t)}function di(){if(typeof globalThis>`u`)return!1;let e=globalThis.__colyseusDebug;return e!=null&&e.__buffer===void 0}var fi=Symbol.metadata??Symbol.for(`Symbol.metadata`),pi=P;function mi(e){return e[S]}function hi(e){return e.constructor[fi]}function gi(e,t){let n=hi(e)?.[t];return typeof n==`number`?n:-1}function _i(e){let t=hi(e);if(!t)return[];let n=[];for(let e=0;;e++){let r=t[e];if(!r||typeof r.name!=`string`)break;typeof r.type==`string`&&n.push(r.name)}return n}var vi={string:!0,boolean:!0,bigint64:!0,biguint64:!0};function yi(e){let t=hi(e),n=[],r=[];if(t)for(let e=0;;e++){let i=t[e];if(!i||typeof i.name!=`string`)break;typeof i.type==`string`&&(n.push(i.name),vi[i.type]===void 0&&r.push(i.name))}return{fields:n,numeric:r}}var bi=e=>e;function xi(e){if(Number.isNaN(e))return 0;if(!Number.isFinite(e))return e>0?2**53-1:-(2**53-1);if(e!==(e|0)&&Math.abs(e)<=34028235e31){let t=Math.fround(e);if(Math.abs(Math.abs(t)-Math.abs(e))<1e-4)return t}return e}function Si(e,t){let n=hi(e),r=n?.[t];switch((typeof r==`number`?n[r]:void 0)?.type){case`float32`:return Math.fround;case`number`:return xi;default:return bi}}var Ci=16;function wi(e){if(e.length>Ci){let t=e;return e=>{let n={};for(let r=0;r<t.length;r++)n[t[r]]=e[t[r]];return n}}let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15];return e=>{let _={};return t!==void 0&&(_[t]=e[t]),n!==void 0&&(_[n]=e[n]),r!==void 0&&(_[r]=e[r]),i!==void 0&&(_[i]=e[i]),a!==void 0&&(_[a]=e[a]),o!==void 0&&(_[o]=e[o]),s!==void 0&&(_[s]=e[s]),c!==void 0&&(_[c]=e[c]),l!==void 0&&(_[l]=e[l]),u!==void 0&&(_[u]=e[u]),d!==void 0&&(_[d]=e[d]),f!==void 0&&(_[f]=e[f]),p!==void 0&&(_[p]=e[p]),m!==void 0&&(_[m]=e[m]),h!==void 0&&(_[h]=e[h]),g!==void 0&&(_[g]=e[g]),_}}var Ti=9,Ei=Ti,Di=(e,t)=>(t?2:1)*(13+Ti*e),Oi=class e{data;_host;_encoder;_scratch=new Uint8Array(2048);_framed=null;_sentCount=0;_lastProcessed=0;_epoch=0;_sendTimes;static BUFFER_FLOOR=64;static BUFFER_RTT_BUDGET_MS=1e3;static BUFFER_HEADROOM=1.5;_inputBufferSize;_inputBuffer=null;_reckonTimes=null;_pendingReckon=0;_lastStamp=0;_stampRing=null;_renderDeltaRing=null;_ringSlots=0;static _warnedBufferOverflow=!1;static _warnedAllowRewindIgnored=!1;_warnedUnknownKeys=null;_stampRender=!1;_stampReckon=!1;_allowRewind;_sendListeners=null;_renderDelay=0;_renderDelayExplicit=!1;_renderDelayProvider;_tickRate;_patchRate;_subSteps=1;constructor(t,n,r,i){this._host=t,this.data=n,this._encoder=r,this._stampRender=i?.stampRender??!1,this._stampReckon=i?.stampReckon??!1,this._allowRewind=i?.allowRewind,this._allowRewind!==void 0&&r.mode===`unreliable`&&!e._warnedAllowRewindIgnored&&(e._warnedAllowRewindIgnored=!0,console.warn('@colyseus/sdk: `allowRewind` is ignored on `mode:"unreliable"` — a packet stamps its whole redundancy ring or none of it, so excluding one input would cost bandwidth rather than save it. Use `mode:"reliable"` to gate the lag-comp stamp per input.')),this._renderDelay=i?.renderDelay??0,this._renderDelayExplicit=i?.renderDelay!==void 0,this._tickRate=i?.tickRate,this._patchRate=i?.patchRate,this._subSteps=i?.subSteps??1;let a=this._tickRate?1e3/this._tickRate:1e3/60,o=e.BUFFER_RTT_BUDGET_MS+(this._patchRate??0);this._inputBufferSize=Math.max(e.BUFFER_FLOOR,Math.ceil(o/a*e.BUFFER_HEADROOM)),this._sendTimes=new Float64Array(this._inputBufferSize)}get mode(){return this._encoder.mode}get tickRate(){return this._tickRate}get stepSeconds(){return this._tickRate?1/this._tickRate:void 0}get stepMs(){return this._tickRate?1e3/this._tickRate:void 0}get patchRate(){return this._patchRate}get subSteps(){return this._subSteps}get subStepSeconds(){return this._tickRate?1/this._tickRate/this._subSteps:void 0}get subStepMs(){return this._tickRate?1e3/this._tickRate/this._subSteps:void 0}get lastProcessed(){return this._lastProcessed}get sentCount(){return this._sentCount}get pendingCount(){return this._sentCount-this._lastProcessed}get replayBufferSize(){return this._inputBufferSize}get epoch(){return this._epoch}at(t){if(this._inputBuffer!==null&&!(t<=this._lastProcessed||t>this._sentCount)){if(this._sentCount-t>=this._inputBufferSize)e._warnedBufferOverflow||(e._warnedBufferOverflow=!0,console.warn(`@colyseus/sdk: input replay buffer (${this._inputBufferSize}) overflowed — RTT exceeds its budget at this input rate; reconciliation may drift.`));else return this._inputBuffer[t%this._inputBufferSize]}}reckonTimeAt(e){return this._reckonTimes===null||e<=this._lastProcessed||e>this._sentCount||this._sentCount-e>=this._inputBufferSize?0:this._reckonTimes[e%this._inputBufferSize]}reset(){this._encoder.reset(),this._sentCount=this._lastProcessed=this._encoder.seq,this._framed=null,this._lastStamp=0,this._ringSlots=0,this._sendTimes.fill(0),this._epoch++}bindRenderDelay(e){this._renderDelayExplicit||(this._renderDelayProvider=e)}_resolveRenderDelay(){return this._renderDelayProvider?this._renderDelayProvider():this._renderDelay}_warnUnknownFields(){let e=hi(this.data);if(e)for(let t of Object.keys(this.data))e[t]!==void 0||this._warnedUnknownKeys?.has(t)||((this._warnedUnknownKeys??=new Set).add(t),console.warn(`@colyseus/sdk input: "${t}" is not a declared field on ${this.data.constructor.name} — the write is never encoded or sent. Declare it with @type(...) on the input schema, or remove the write.`))}send(){let e=this._host.connection;if(!e?.isOpen)return 0;di()&&this._warnUnknownFields();let t=this._encoder.encode(),n=this._encoder.mode===`reliable`,r=this._stampReckon||this._stampRender,i=r&&n&&(this._allowRewind===void 0||this._allowRewind(this.data)),a=r&&!n,o=this._stampReckon&&this._stampRender,s=1+(i?Ei+(o?2:0):a?Di(this._encoder.historySize,o):0)+t.length;s>this._scratch.byteLength&&(this._scratch=new Uint8Array(Math.max(s,this._scratch.byteLength*2)),this._framed=null),this._scratch[0]=(n?l.ROOM_INPUT_RELIABLE:l.ROOM_INPUT_UNRELIABLE)|(i||a?u.TIMED:0);let c={offset:1};if(a)this._writeRingStamps(c);else if(i){let{stamp:e,renderDelta:t}=this._sampleStamp();H.number(this._scratch,e-this._lastStamp,c),this._lastStamp=e,o&&H.uint16(this._scratch,t,c)}else this._pendingReckon=0;this._scratch.set(t,c.offset);let d=c.offset+t.length;(this._framed===null||this._framed.byteLength!==d)&&(this._framed=this._scratch.subarray(0,d));let f=this._framed,p;return n?(e.send(f),p=++this._sentCount):(e.sendUnreliable(f),p=this._sentCount=this._encoder.seq),this._recordSent(p),p}_writeRingStamps(e){let{stamp:t,renderDelta:n}=this._sampleStamp(),r=this._encoder.historySize,i=this._encoder.seq,a=this._ringSlots=Math.min(this._ringSlots+1,r),o=this._stampRing??=new Float64Array(r);if(o[i%r]=t,H.number(this._scratch,a,e),H.uint32(this._scratch,t,e),this._writeSeriesDeltas(o,i,a,e),this._stampReckon&&this._stampRender){let t=this._renderDeltaRing??=new Uint16Array(r);t[i%r]=n,H.uint16(this._scratch,n,e),this._writeSeriesDeltas(t,i,a,e)}}_writeSeriesDeltas(e,t,n,r){let i=e.length;for(let a=1;a<n;a++)H.number(this._scratch,e[(t-a+1)%i]-e[(t-a)%i],r)}_sampleStamp(){let e=this._host.clock,t=(e?.lastServerTime?.()??0)>0,n=t?Math.max(0,Math.round(e.serverNow()))>>>0:0,r=t?Math.min(65535,Math.max(0,Math.round(this._resolveRenderDelay()+(e.smoothedRtt?.()??0)/2))):0;return this._pendingReckon=n,{stamp:this._stampReckon?n:n>r?n-r:0,renderDelta:r}}_recordSent(e){if(this._inputBuffer===null){let e=this.data.constructor;this._inputBuffer=Array.from({length:this._inputBufferSize},()=>new e)}this._encoder.copyInto(this._inputBuffer[e%this._inputBufferSize]),this._sendTimes[e%this._inputBufferSize]=si(),this._stampReckon&&((this._reckonTimes??=new Float64Array(this._inputBufferSize))[e%this._inputBufferSize]=this._pendingReckon);let t=this._sendListeners;if(t!==null)for(let n=0;n<t.length;n++)t[n](e)}onSend(e){let t=this._sendListeners;return this._sendListeners=t===null?[e]:[...t,e],()=>{let t=this._sendListeners;if(t===null)return;let n=t.indexOf(e);if(n<0)return;let r=t.slice();r.splice(n,1),this._sendListeners=r.length>0?r:null}}ackInput(e){if(e<=this._lastProcessed)return-1;let t=this._sentCount-e>=this._inputBufferSize;if(this._lastProcessed=e,t)return-1;let n=this._sendTimes[e%this._inputBufferSize];return n>0?si()-n:-1}},ki=Object.freeze({now:()=>si(),serverNow:()=>si(),renderNow:()=>si(),rtt:()=>0,smoothedRtt:()=>0,jitter:()=>0,lastServerTime:()=>0,patchInterval:()=>0,setPatchInterval:e=>{},sample:(e,t)=>{}}),Ai=class e{static EMA_ALPHA=.1;static RENDER_TAU=250;static RENDER_SNAP=250;static RTT_OUTLIER_X=4;static JITTER_GAIN=1/16;static JITTER_STALL_X=4;static RTT_GATE_FACTOR=1.2;static RTT_GATE_WINDOW=1e4;static RTT_GATE_WARMUP=30;_clockOffset=0;_clockHasSample=!1;_offsetCount=0;_rttFloorT=[];_rttFloorV=[];_rtt=0;_smoothedRtt=0;_rttHasSample=!1;_jitter=0;_lastRecvTime=-1;_lastServerTime=0;_patchInterval=0;_renderTau=e.RENDER_TAU;_renderSn=0;_renderSnAt=0;serverNow(){return si()+this._clockOffset}renderNow(){let t=this.serverNow();if(this._renderTau<=0)return t;let n=si();if(this._renderSn===0)return this._renderSn=t,this._renderSnAt=n,this._renderSn;let r=Math.min(n-this._renderSnAt,100);return r<.5?this._renderSn:(this._renderSnAt=n,this._renderSn+=r,Math.abs(t-this._renderSn)>e.RENDER_SNAP?(this._renderSn=t,this._renderSn):(this._renderSn+=(t-this._renderSn)*(1-Math.exp(-r/this._renderTau)),this._renderSn))}setRenderTau(e){this._renderTau=e>0?e:0}now(){return si()}rtt(){return this._rtt}smoothedRtt(){return this._smoothedRtt}jitter(){return this._jitter}lastServerTime(){return this._lastServerTime}patchInterval(){return this._patchInterval}setPatchInterval(e){this._patchInterval=e>0?e:0}sample(t,n){let r=si(),i=e.EMA_ALPHA,a=this._patchInterval;if(this._lastRecvTime>=0&&a>0){let t=r-this._lastRecvTime,n=Math.round(t/a);n>=1&&n<=e.JITTER_STALL_X&&(this._jitter+=(Math.abs(t-n*a)-this._jitter)*e.JITTER_GAIN)}this._lastRecvTime=r,this._lastServerTime=t,(n<0||this._smoothedRtt>0&&n>this._smoothedRtt*e.RTT_OUTLIER_X)&&(n=-1);let o=n>=0?t+n/2-r:t-r;if(!this._clockHasSample)this._clockOffset=o,this._clockHasSample=!0,n>=0&&(this.pushRttFloor(n,r),this._offsetCount=1);else if(n>=0){let t=this.pushRttFloor(n,r),a=this._offsetCount<e.RTT_GATE_WARMUP;this._offsetCount++,(a||n<=t*e.RTT_GATE_FACTOR)&&(this._clockOffset=this._clockOffset*(1-i)+o*i)}n>=0&&(this._rtt=n,this._rttHasSample?this._smoothedRtt=this._smoothedRtt*(1-i)+n*i:(this._smoothedRtt=n,this._rttHasSample=!0))}pushRttFloor(t,n){let r=this._rttFloorT,i=this._rttFloorV;for(;i.length>0&&i[i.length-1]>=t;)i.pop(),r.pop();i.push(t),r.push(n);let a=n-e.RTT_GATE_WINDOW;for(;r.length>0&&r[0]<a;)r.shift(),i.shift();return i[0]}reset(){this._clockOffset=0,this._clockHasSample=!1,this._offsetCount=0,this._rtt=0,this._smoothedRtt=0,this._rttHasSample=!1,this._jitter=0,this._lastRecvTime=-1,this._lastServerTime=0,this._rttFloorT.length=0,this._rttFloorV.length=0,this._renderSn=0,this._renderSnAt=0}},ji=class{#e;#t;#n;#r;#i=!1;#a;#o=!1;#s=!1;#c;#l;#u;constructor(e){this.#e=e}get patchRate(){return this.#l}applyReflection(e,t,n){let r=$r.decode(e.subarray(0,n),t);$r.makeEncodable(r.state.constructor),this.#a=r.state.constructor,this.#e.clock===ki&&(this.#e.clock=new Ai)}applyOptions(e,t){let n=e[t.offset++];this.#o=(n&p.RENDER_TIME)!==0,this.#s=(n&p.RECKON_TIME)!==0,n&p.FIXED_TIMESTEP&&(this.#c=et.number(e,t)),n&p.PATCH_RATE&&(this.#l=et.number(e,t)),n&p.SUB_STEPS&&(this.#u=et.number(e,t))}ackInput(e){return this.#t?this.#t.ackInput(e):-1}reset(){this.#t?.reset()}handle(e){if(this.#t)return e!==void 0&&this.#d(e),this.#t;let t=e?.type??this.#a;if(!t)throw Error("room.input(): no input schema available. The server room must call `defineInput(YourInput)`, or you can pass `{ type: YourInput }` explicitly.");let n=new t,r=new oi(n,e);return this.#t=new Oi(this.#e,n,r,{stampRender:this.#o,stampReckon:this.#s,renderDelay:e?.renderDelay,allowRewind:e?.allowRewind,tickRate:this.#c,patchRate:this.#l,subSteps:this.#u}),this.#n=e,this.#r=r,this.#t}#d(e){if(this.#i)return;let t=this.#t,n=[];e.type!==void 0&&e.type!==t.data?.constructor&&n.push(`type`),e.mode!==void 0&&e.mode!==t.mode&&n.push(`mode`),e.historySize!==void 0&&t.mode===`unreliable`&&e.historySize!==this.#r.historySize&&n.push(`historySize`),e.renderDelay!==void 0&&e.renderDelay!==this.#n?.renderDelay&&n.push(`renderDelay`),e.allowRewind!==void 0!=(this.#n?.allowRewind!==void 0)&&n.push(`allowRewind`),n.length!==0&&(this.#i=!0,console.warn(`@colyseus/sdk: room.input() options ignored — the input handle was already created by an earlier call (first call wins). Differing: ${n.join(`, `)}.`))}},Mi;try{Mi=new TextDecoder}catch{}var U,Ni,W=0,Pi=[],Fi=Pi,Ii=0,Li={},Ri,zi,Bi=0,Vi=0,Hi,Ui,Wi=[],Gi,Ki={useRecords:!1,mapsAsObjects:!0},qi=class{},Ji=new qi;Ji.name=`MessagePack 0xC1`;var Yi=!1,Xi=2,Zi=class e{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=0&&(e.structures=[],e.maxSharedStructures||=0)),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType=`number`)),Object.assign(this,e)}unpack(t,n){if(U)return Da(()=>(Oa(),this?this.unpack(t,n):e.prototype.unpack.call(Ki,t,n)));!t.buffer&&t.constructor===ArrayBuffer&&(t=typeof Buffer<`u`?Buffer.from(t):new Uint8Array(t)),typeof n==`object`?(Ni=n.end||t.length,W=n.start||0):(W=0,Ni=n>-1?n:t.length),Ii=0,Vi=0,zi=null,Fi=Pi,Hi=null,U=t;try{Gi=t.dataView||(t.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength))}catch(e){throw U=null,t instanceof Uint8Array?e:Error(`Source must be a Uint8Array or Buffer but was a `+(t&&typeof t==`object`?t.constructor.name:typeof t))}if(this instanceof e){if(Li=this,this.structures)return Ri=this.structures,Qi(n);(!Ri||Ri.length>0)&&(Ri=[])}else Li=Ki,(!Ri||Ri.length>0)&&(Ri=[]);return Qi(n)}unpackMultiple(e,t){let n,r=0;try{Yi=!0;let i=e.length,a=this?this.unpack(e,i):Aa.unpack(e,i);if(t){if(t(a,r,W)===!1)return;for(;W<i;)if(r=W,t(Qi(),r,W)===!1)return}else{for(n=[a];W<i;)r=W,n.push(Qi());return n}}catch(e){throw e.lastPosition=r,e.values=n,e}finally{Yi=!1,Oa()}}_mergeStructures(e,t){this._onLoadedStructures&&(e=this._onLoadedStructures(e)),e||=[],Object.isFrozen(e)&&(e=e.map(e=>e.slice(0)));for(let t=0,n=e.length;t<n;t++){let n=e[t];n&&(n.isShared=!0,t>=32&&(n.highByte=t-32>>5))}e.sharedLength=e.length;for(let n in t||[])if(n>=0){let r=e[n],i=t[n];i&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[n]=r),e[n]=i)}return this.structures=e}decode(e,t){return this.unpack(e,t)}};function Qi(e){try{if(!Li.trusted&&!Yi){let e=Ri.sharedLength||0;e<Ri.length&&(Ri.length=e)}let t;if(Li._readStruct&&U[W]<64&&U[W]>=32?(t=Li._readStruct(U,W,Ni),U=null,!(e&&e.lazy)&&t&&(t=t.toJSON()),W=Ni):t=ea(),Hi&&=(W=Hi.postBundlePosition,null),Yi&&(Ri.restoreStructures=null),W==Ni)Ri&&Ri.restoreStructures&&$i(),Ri=null,U=null,Ui&&=null;else if(W>Ni)throw Error(`Unexpected end of MessagePack data`);else if(!Yi){let e;try{e=JSON.stringify(t,(e,t)=>typeof t==`bigint`?`${t}n`:t).slice(0,100)}catch(t){e=`(JSON view not available `+t+`)`}throw Error(`Data read, but end of buffer not reached `+e)}return t}catch(e){throw Ri&&Ri.restoreStructures&&$i(),Oa(),(e instanceof RangeError||e.message.startsWith(`Unexpected end of buffer`)||W>Ni)&&(e.incomplete=!0),e}}function $i(){for(let e in Ri.restoreStructures)Ri[e]=Ri.restoreStructures[e];Ri.restoreStructures=null}function ea(){let e=U[W++];if(e<160){if(e<128){if(e<64)return e;{let t=Ri[e&63]||Li.getStructures&&ia()[e&63];return t?(t.read||=na(t,e&63),t.read()):e}}if(e<144){if(e-=128,Li.mapsAsObjects){let t={};for(let n=0;n<e;n++){let e=ba();e===`__proto__`&&(e=`__proto_`),t[e]=ea()}return t}{let t=new Map;for(let n=0;n<e;n++)t.set(ea(),ea());return t}}{e-=144;let t=Array(e);for(let n=0;n<e;n++)t[n]=ea();return Li.freezeData?Object.freeze(t):t}}if(e<192){let t=e-160;if(Vi>=W)return zi.slice(W-Bi,(W+=t)-Bi);if(Vi==0&&Ni<140){let e=t<16?ha(t):ma(t);if(e!=null)return e}return aa(t)}{let t;switch(e){case 192:return null;case 193:return Hi?(t=ea(),t>0?Hi[1].slice(Hi.position1,Hi.position1+=t):Hi[0].slice(Hi.position0,Hi.position0-=t)):Ji;case 194:return!1;case 195:return!0;case 196:if(t=U[W++],t===void 0)throw Error(`Unexpected end of buffer`);return _a(t);case 197:return t=Gi.getUint16(W),W+=2,_a(t);case 198:return t=Gi.getUint32(W),W+=4,_a(t);case 199:return va(U[W++]);case 200:return t=Gi.getUint16(W),W+=2,va(t);case 201:return t=Gi.getUint32(W),W+=4,va(t);case 202:if(t=Gi.getFloat32(W),Li.useFloat32>2){let e=ka[(U[W]&127)<<1|U[W+1]>>7];return W+=4,(e*t+(t>0?.5:-.5)|0)/e}return W+=4,t;case 203:return t=Gi.getFloat64(W),W+=8,t;case 204:return U[W++];case 205:return t=Gi.getUint16(W),W+=2,t;case 206:return t=Gi.getUint32(W),W+=4,t;case 207:return Li.int64AsType===`number`?(t=Gi.getUint32(W)*4294967296,t+=Gi.getUint32(W+4)):Li.int64AsType===`string`?t=Gi.getBigUint64(W).toString():Li.int64AsType===`auto`?(t=Gi.getBigUint64(W),t<=BigInt(2)<<BigInt(52)&&(t=Number(t))):t=Gi.getBigUint64(W),W+=8,t;case 208:return Gi.getInt8(W++);case 209:return t=Gi.getInt16(W),W+=2,t;case 210:return t=Gi.getInt32(W),W+=4,t;case 211:return Li.int64AsType===`number`?(t=Gi.getInt32(W)*4294967296,t+=Gi.getUint32(W+4)):Li.int64AsType===`string`?t=Gi.getBigInt64(W).toString():Li.int64AsType===`auto`?(t=Gi.getBigInt64(W),t>=BigInt(-2)<<BigInt(52)&&t<=BigInt(2)<<BigInt(52)&&(t=Number(t))):t=Gi.getBigInt64(W),W+=8,t;case 212:if(t=U[W++],t==114)return Sa(U[W++]&63);{let e=Wi[t];if(e)return e.read?(W++,e.read(ea())):e.noBuffer?(W++,e()):e(U.subarray(W,++W));throw Error(`Unknown extension `+t)}case 213:return t=U[W],t==114?(W++,Sa(U[W++]&63,U[W++])):va(2);case 214:return va(4);case 215:return va(8);case 216:return va(16);case 217:return t=U[W++],Vi>=W?zi.slice(W-Bi,(W+=t)-Bi):oa(t);case 218:return t=Gi.getUint16(W),W+=2,Vi>=W?zi.slice(W-Bi,(W+=t)-Bi):sa(t);case 219:return t=Gi.getUint32(W),W+=4,Vi>=W?zi.slice(W-Bi,(W+=t)-Bi):ca(t);case 220:return t=Gi.getUint16(W),W+=2,da(t);case 221:return t=Gi.getUint32(W),W+=4,da(t);case 222:return t=Gi.getUint16(W),W+=2,fa(t);case 223:return t=Gi.getUint32(W),W+=4,fa(t);default:if(e>=224)return e-256;throw e===void 0?ua():Error(`Unknown MessagePack token `+e)}}}var ta=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function na(e,t){function n(){if(n.count++>Xi){let r;try{r=e.read=Function(`r`,`return function(){return `+(Li.freezeData?`Object.freeze`:``)+`({`+e.map(e=>e===`__proto__`?`__proto_:r()`:ta.test(e)?e+`:r()`:`[`+JSON.stringify(e)+`]:r()`).join(`,`)+`})}`)(ea)}catch{return Xi=1/0,n()}return e.read0=r,e.highByte===0&&(e.read=ra(t,e.read)),r()}let r={};for(let t=0,n=e.length;t<n;t++){let n=e[t];n===`__proto__`&&(n=`__proto_`),r[n]=ea()}return Li.freezeData?Object.freeze(r):r}return n.count=0,e.read0=n,e.highByte===0?ra(t,n):n}var ra=(e,t)=>function(){let n=U[W++];if(n===0)return t();let r=e<32?-(e+(n<<5)):e+(n<<5),i=Ri[r]||ia()[r];if(!i)throw Error(`Record id is not defined for `+r);return i.read||=na(i,e),i.read()};function ia(){let e=Da(()=>(U=null,Li.getStructures()));return Ri=Li._mergeStructures(e,Ri)}var aa=la,oa=la,sa=la,ca=la;function la(e){let t;if(e<16&&(t=ha(e)))return t;if(e>64&&Mi)return Mi.decode(U.subarray(W,W+=e));let n=W+e,r=[];for(t=``;W<n;){let e=U[W++];if(!(e&128))r.push(e);else if((e&224)==192){if(e<194||W>=n||(U[W]&192)!=128)r.push(65533);else{let t=U[W++]&63;r.push((e&31)<<6|t)}}else if((e&240)==224){let t=W<n?U[W]:0;if(W>=n||(t&192)!=128||e===224&&t<160||e===237&&t>=160)r.push(65533);else if(W++,W>=n||(U[W]&192)!=128)r.push(65533);else{let n=U[W++]&63;r.push((e&31)<<12|(t&63)<<6|n)}}else if((e&248)==240){let t=W<n?U[W]:0;if(e>244||W>=n||(t&192)!=128||e===240&&t<144||e===244&&t>=144)r.push(65533);else if(W++,W>=n||(U[W]&192)!=128)r.push(65533);else{let i=U[W++]&63;if(W>=n||(U[W]&192)!=128)r.push(65533);else{let n=U[W++]&63,a=(e&7)<<18|(t&63)<<12|i<<6|n;a-=65536,r.push(a>>>10&1023|55296),r.push(56320|a&1023)}}}else r.push(65533);r.length>=4096&&(t+=pa.apply(String,r),r.length=0)}return r.length>0&&(t+=pa.apply(String,r)),t}function ua(){let e=Error(`Unexpected end of MessagePack data`);return e.incomplete=!0,e}function da(e){if(e>Ni-W)throw ua();let t=Array(e);for(let n=0;n<e;n++)t[n]=ea();return Li.freezeData?Object.freeze(t):t}function fa(e){if(e>(Ni-W)/2)throw ua();if(Li.mapsAsObjects){let t={};for(let n=0;n<e;n++){let e=ba();e===`__proto__`&&(e=`__proto_`),t[e]=ea()}return t}{let t=new Map;for(let n=0;n<e;n++)t.set(ea(),ea());return t}}var pa=String.fromCharCode;function ma(e){let t=W,n=Array(e);for(let r=0;r<e;r++){let e=U[W++];if((e&128)>0){W=t;return}n[r]=e}return pa.apply(String,n)}function ha(e){if(e<4){if(e<2){if(e===0)return``;{let e=U[W++];if((e&128)>1){--W;return}return pa(e)}}{let t=U[W++],n=U[W++];if((t&128)>0||(n&128)>0){W-=2;return}if(e<3)return pa(t,n);let r=U[W++];if((r&128)>0){W-=3;return}return pa(t,n,r)}}{let t=U[W++],n=U[W++],r=U[W++],i=U[W++];if((t&128)>0||(n&128)>0||(r&128)>0||(i&128)>0){W-=4;return}if(e<6){if(e===4)return pa(t,n,r,i);{let e=U[W++];if((e&128)>0){W-=5;return}return pa(t,n,r,i,e)}}if(e<8){let a=U[W++],o=U[W++];if((a&128)>0||(o&128)>0){W-=6;return}if(e<7)return pa(t,n,r,i,a,o);let s=U[W++];if((s&128)>0){W-=7;return}return pa(t,n,r,i,a,o,s)}{let a=U[W++],o=U[W++],s=U[W++],c=U[W++];if((a&128)>0||(o&128)>0||(s&128)>0||(c&128)>0){W-=8;return}if(e<10){if(e===8)return pa(t,n,r,i,a,o,s,c);{let e=U[W++];if((e&128)>0){W-=9;return}return pa(t,n,r,i,a,o,s,c,e)}}if(e<12){let l=U[W++],u=U[W++];if((l&128)>0||(u&128)>0){W-=10;return}if(e<11)return pa(t,n,r,i,a,o,s,c,l,u);let d=U[W++];if((d&128)>0){W-=11;return}return pa(t,n,r,i,a,o,s,c,l,u,d)}{let l=U[W++],u=U[W++],d=U[W++],f=U[W++];if((l&128)>0||(u&128)>0||(d&128)>0||(f&128)>0){W-=12;return}if(e<14){if(e===12)return pa(t,n,r,i,a,o,s,c,l,u,d,f);{let e=U[W++];if((e&128)>0){W-=13;return}return pa(t,n,r,i,a,o,s,c,l,u,d,f,e)}}{let p=U[W++],m=U[W++];if((p&128)>0||(m&128)>0){W-=14;return}if(e<15)return pa(t,n,r,i,a,o,s,c,l,u,d,f,p,m);let h=U[W++];if((h&128)>0){W-=15;return}return pa(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}}}}}function ga(){let e=U[W++],t;if(e<192)t=e-160;else switch(e){case 217:t=U[W++];break;case 218:t=Gi.getUint16(W),W+=2;break;case 219:t=Gi.getUint32(W),W+=4;break;default:throw Error(`Expected string`)}return la(t)}function _a(e){return Li.copyBuffers?Uint8Array.prototype.slice.call(U,W,W+=e):U.subarray(W,W+=e)}function va(e){let t=U[W++];if(Wi[t]){let n;return Wi[t](U.subarray(W,n=W+=e),e=>{W=e;try{return ea()}finally{W=n}})}throw Error(`Unknown extension type `+t)}var ya=Array(4096);function ba(){let e=U[W++];if(e>=160&&e<192){if(e-=160,Vi>=W)return zi.slice(W-Bi,(W+=e)-Bi);if(!(Vi==0&&Ni<180))return aa(e)}else return W--,xa(ea());let t=(e<<5^(e>1?Gi.getUint16(W):e>0?U[W]:0))&4095,n=ya[t],r=W,i=W+e-3,a,o=0;if(n&&n.bytes==e){for(;r<i;){if(a=Gi.getUint32(r),a!=n[o++]){r=1879048192;break}r+=4}for(i+=3;r<i;)if(a=U[r++],a!=n[o++]){r=1879048192;break}if(r===i)return W=r,n.string;i-=3,r=W}for(n=[],ya[t]=n,n.bytes=e;r<i;)a=Gi.getUint32(r),n.push(a),r+=4;for(i+=3;r<i;)a=U[r++],n.push(a);let s=e<16?ha(e):ma(e);return s==null?n.string=aa(e):n.string=s}function xa(e){if(typeof e==`string`)return e;if(typeof e==`number`||typeof e==`boolean`||typeof e==`bigint`)return e.toString();if(e==null)return e+``;if(Li.allowArraysInMapKeys&&Array.isArray(e)&&e.flat().every(e=>[`string`,`number`,`boolean`,`bigint`].includes(typeof e)))return e.flat().toString();throw Error(`Invalid property type for record: ${typeof e}`)}var Sa=(e,t)=>{let n=ea().map(xa),r=e;t!==void 0&&(e=e<32?-((t<<5)+e):(t<<5)+e,n.highByte=t);let i=Ri[e];return i&&(i.isShared||Yi)&&((Ri.restoreStructures||(Ri.restoreStructures=[]))[e]=i),Ri[e]=n,n.read=na(n,r),(n.read0||n.read)()};Wi[0]=()=>{},Wi[0].noBuffer=!0,Wi[66]=e=>{let t=e.byteLength%8||8,n=BigInt(e[0]&128?e[0]-256:e[0]);for(let r=1;r<t;r++)n<<=BigInt(8),n+=BigInt(e[r]);if(e.byteLength!==t){let r=new DataView(e.buffer,e.byteOffset,e.byteLength),i=(e,t)=>{let n=t-e;if(n<=40){let n=r.getBigUint64(e);for(let i=e+8;i<t;i+=8)n<<=BigInt(64),n|=r.getBigUint64(i);return n}let a=e+(n>>4<<3),o=i(e,a),s=i(a,t);return o<<BigInt((t-a)*8)|s};n=n<<BigInt((r.byteLength-t)*8)|i(t,r.byteLength)}return n};var Ca={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:typeof AggregateError==`function`?AggregateError:null};Wi[101]=()=>{let e=ea();if(!Ca[e[0]]){let t=Error(e[1],{cause:e[2]});return t.name=e[0],t}return Ca[e[0]](e[1],{cause:e[2]})},Wi[105]=e=>{if(Li.structuredClone===!1)throw Error(`Structured clone extension is disabled`);let t=Gi.getUint32(W-4);Ui||=new Map;let n=U[W],r;r=n>=144&&n<160||n==220||n==221?[]:n>=128&&n<144||n==222||n==223?new Map:(n>=199&&n<=201||n>=212&&n<=216)&&U[W+1]===115?new Set:{};let i={target:r};Ui.set(t,i);let a=ea();if(i.used)Object.assign(r,a);else return i.target=a;if(r instanceof Map)for(let[e,t]of a.entries())r.set(e,t);if(r instanceof Set)for(let e of Array.from(a))r.add(e);return r},Wi[112]=e=>{if(Li.structuredClone===!1)throw Error(`Structured clone extension is disabled`);let t=Gi.getUint32(W-4),n=Ui.get(t);return n.used=!0,n.target},Wi[115]=()=>new Set(ea());var wa=[`Int8`,`Uint8`,`Uint8Clamped`,`Int16`,`Uint16`,`Int32`,`Uint32`,`Float32`,`Float64`,`BigInt64`,`BigUint64`].map(e=>e+`Array`),Ta=typeof globalThis==`object`?globalThis:window;Wi[116]=e=>{let t=e[0],n=Uint8Array.prototype.slice.call(e,1).buffer,r=wa[t];if(!r){if(t===16)return n;if(t===17)return new DataView(n);throw Error(`Could not find typed array for code `+t)}return new Ta[r](n)},Wi[120]=()=>{let e=ea();return new RegExp(e[0],e[1])};var Ea=[];Wi[98]=e=>{let t=(e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3],n=W;return W+=t-e.length,Hi=Ea,Hi=[ga(),ga()],Hi.position0=0,Hi.position1=0,Hi.postBundlePosition=W,W=n,ea()},Wi[255]=e=>e.length==4?new Date((e[0]*16777216+(e[1]<<16)+(e[2]<<8)+e[3])*1e3):e.length==8?new Date(((e[0]<<22)+(e[1]<<14)+(e[2]<<6)+(e[3]>>2))/1e6+((e[3]&3)*4294967296+e[4]*16777216+(e[5]<<16)+(e[6]<<8)+e[7])*1e3):e.length==12?new Date(((e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3])/1e6+((e[4]&128?-281474976710656:0)+e[6]*1099511627776+e[7]*4294967296+e[8]*16777216+(e[9]<<16)+(e[10]<<8)+e[11])*1e3):new Date(`invalid`);function Da(e){Li&&Li._onSaveState&&Li._onSaveState();let t=Ni,n=W,r=Ii,i=Bi,a=Vi,o=zi,s=Fi,c=Ui,l=Hi,u=new Uint8Array(U.slice(0,Ni)),d=Ri,f=Ri.slice(0,Ri.length),p=Li,m=Yi,h=e();return Ni=t,W=n,Ii=r,Bi=i,Vi=a,zi=o,Fi=s,Ui=c,Hi=l,U=u,Yi=m,Ri=d,Ri.splice(0,Ri.length,...f),Li=p,Gi=new DataView(U.buffer,U.byteOffset,U.byteLength),h}function Oa(){U=null,Ui=null,Ri=null}var ka=Array(147);for(let e=0;e<256;e++)ka[e]=+(`1e`+Math.floor(45.15-e*.30103));var Aa=new Zi({useRecords:!1}),ja=Aa.unpack;Aa.unpackMultiple,Aa.unpack;var Ma={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};new Uint8Array(new Float32Array(1).buffer,0,4),Zi.SUPPORTS_STRUCT_HOOKS=!0;var Na;try{Na=new TextEncoder}catch{}var Pa,Fa,Ia=typeof Buffer<`u`,La=Ia?function(e){return Buffer.allocUnsafeSlow(e)}:Uint8Array,Ra=Ia?Buffer:Uint8Array,za=Ia?4294967296:2144337920,G,Ba,Va,K=0,Ha,Ua=null,Wa=21760,Ga=/[\u0080-\uFFFF]/,Ka=Symbol(`record-id`),qa=class extends Zi{constructor(e){super(e),this.offset=0;let t,n,r,i,a=Ra.prototype.utf8Write?function(e,t){return G.utf8Write(e,t,G.byteLength-t)}:Na&&Na.encodeInto?function(e,t){return Na.encodeInto(e,G.subarray(t)).written}:!1,o=this;e||={};let s=e&&e.sequential,c=e.structures||e.saveStructures,l=e.maxSharedStructures;if(l??=c?32:0,l>8160)throw Error(`Maximum maxSharedStructure is 8160`);e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let u=e.maxOwnStructures;u??=c?32:64,!this.structures&&e.useRecords!=0&&(this.structures=[]);let d=l>32||u+l>64,f=l+64,p=l+u+64;if(p>8256)throw Error(`Maximum maxSharedStructure + maxOwnStructure is 8192`);let m=[],h=0,g=0;this.pack=this.encode=function(e,a){if(G||(G=new La(8192),Va=G.dataView||(G.dataView=new DataView(G.buffer,0,8192)),K=0),Ha=G.length-10,Ha-K<2048?(G=new La(G.length),Va=G.dataView||(G.dataView=new DataView(G.buffer,0,G.length)),Ha=G.length-10,K=0):K=K+7&2147483640,t=K,a&2048&&(K+=a&255),i=o.structuredClone?new Map:null,o.bundleStrings&&typeof e!=`string`?(Ua=[],Ua.size=1/0):Ua=null,r=o.structures,r){r.uninitialized&&(r=o._mergeStructures(o.getStructures()));let e=r.sharedLength||0;if(e>l)throw Error(`Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to `+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let t=0;t<e;t++){let e=r[t];if(!e)continue;let n,i=r.transitions;for(let t=0,r=e.length;t<r;t++){let r=e[t];n=i[r],n||=i[r]=Object.create(null),i=n}i[Ka]=t+64}this.lastNamedStructuresLength=e}s||(r.nextId=e+64)}n&&=!1;let c;try{o._writeStruct&&e&&typeof e==`object`?e.constructor===Object?w(e):e.constructor!==Map&&!Array.isArray(e)&&!Fa.some(t=>e instanceof t)?w(o.useToJSON!==!1&&e.toJSON?e.toJSON():e):y(e):y(e);let n=Ua;if(Ua&&Qa(t,y,0),i&&i.idsToInsert){let e=i.idsToInsert.sort((e,t)=>e.offset>t.offset?1:-1),r=e.length,a=-1;for(;n&&r>0;){let i=e[--r].offset+t;i<n.stringsPosition+t&&a===-1&&(a=0),i>n.position+t?a>=0&&(a+=6):(a>=0&&(Va.setUint32(n.position+t,Va.getUint32(n.position+t)+a),a=-1),n=n.previous,r++)}a>=0&&n&&Va.setUint32(n.position+t,Va.getUint32(n.position+t)+a),K+=e.length*6,K>Ha&&T(K),o.offset=K;let s=Za(G.subarray(t,K),e);return i=null,s}return o.offset=K,a&512?(G.start=t,G.end=K,G):G.subarray(t,K)}catch(e){throw c=e,e}finally{if(r&&(_(),n&&o.saveStructures)){let n=r.sharedLength||0,i=G.subarray(t,K),s=(o._prepareStructures||$a)(r,o);if(!c)return o.saveStructures(s,s.isCompatible)===!1?(r.uninitialized=!0,o.pack(e,a)):(o.lastNamedStructuresLength=n,G.length>1073741824&&(G=null),i)}G.length>1073741824&&(G=null),a&1024&&(K=t)}};let _=()=>{g<10&&g++;let e=r.sharedLength||0;if(r.length>e&&!s&&(r.length=e),h>1e4)r.transitions=null,g=0,h=0,m.length>0&&(m=[]);else if(m.length>0&&!s){for(let e=0,t=m.length;e<t;e++)m[e][Ka]=0;m=[]}},v=e=>{var t=e.length;t<16?G[K++]=144|t:t<65536?(G[K++]=220,G[K++]=t>>8,G[K++]=t&255):(G[K++]=221,Va.setUint32(K,t),K+=4);for(let n=0;n<t;n++)y(e[n])},y=e=>{K>Ha&&(G=T(K));var n=typeof e,r;if(n===`string`){let n=e.length;if(Ua&&n>=4&&n<4096){if((Ua.size+=n)>Wa){let e,n=(Ua[0]?Ua[0].length*3+Ua[1].length:0)+10;K+n>Ha&&(G=T(K+n));let r;Ua.position?(r=Ua,G[K]=200,K+=3,G[K++]=98,e=K-t,K+=4,Qa(t,y,0),Va.setUint16(e+t-3,K-t-e)):(G[K++]=214,G[K++]=98,e=K-t,K+=4),Ua=[``,``],Ua.previous=r,Ua.size=0,Ua.position=e}let r=Ga.test(e);Ua[+!r]+=e,G[K++]=193,y(r?-n:n);return}let i;i=n<32?1:n<256?2:n<65536?3:5;let o=n*3;if(K+o>Ha&&(G=T(K+o)),n<64||!a){let t,a,o,s=K+i;for(t=0;t<n;t++)a=e.charCodeAt(t),a<128?G[s++]=a:a<2048?(G[s++]=a>>6|192,G[s++]=a&63|128):(a&64512)==55296&&((o=e.charCodeAt(t+1))&64512)==56320?(a=65536+((a&1023)<<10)+(o&1023),t++,G[s++]=a>>18|240,G[s++]=a>>12&63|128,G[s++]=a>>6&63|128,G[s++]=a&63|128):(G[s++]=a>>12|224,G[s++]=a>>6&63|128,G[s++]=a&63|128);r=s-K-i}else r=a(e,K+i);r<32?G[K++]=160|r:r<256?(i<2&&G.copyWithin(K+2,K+1,K+1+r),G[K++]=217,G[K++]=r):r<65536?(i<3&&G.copyWithin(K+3,K+2,K+2+r),G[K++]=218,G[K++]=r>>8,G[K++]=r&255):(i<5&&G.copyWithin(K+5,K+3,K+3+r),G[K++]=219,Va.setUint32(K,r),K+=4),K+=r}else if(n===`number`){if(e>>>0===e)e<32||e<128&&this.useRecords===!1||e<64&&!this._writeStruct?G[K++]=e:e<256?(G[K++]=204,G[K++]=e):e<65536?(G[K++]=205,G[K++]=e>>8,G[K++]=e&255):(G[K++]=206,Va.setUint32(K,e),K+=4);else if((e|0)===e)e>=-32?G[K++]=256+e:e>=-128?(G[K++]=208,G[K++]=e+256):e>=-32768?(G[K++]=209,Va.setInt16(K,e),K+=2):(G[K++]=210,Va.setInt32(K,e),K+=4);else{let t;if((t=this.useFloat32)>0&&e<4294967296&&e>=-2147483648){G[K++]=202,Va.setFloat32(K,e);let n;if(t<4||((n=e*ka[(G[K]&127)<<1|G[K+1]>>7])|0)===n){K+=4;return}K--}G[K++]=203,Va.setFloat64(K,e),K+=8}}else if(n===`object`||n===`function`){if(!e)G[K++]=192;else{if(i){let n=i.get(e);if(n){n.id||=(i.idsToInsert||(i.idsToInsert=[])).push(n),G[K++]=214,G[K++]=112,Va.setUint32(K,n.id),K+=4;return}i.set(e,{offset:K-t})}let a=e.constructor;if(a===Object)C(e);else if(a===Array)v(e);else if(a===Map){if(this.mapAsEmptyObject)G[K++]=128;else{r=e.size,r<16?G[K++]=128|r:r<65536?(G[K++]=222,G[K++]=r>>8,G[K++]=r&255):(G[K++]=223,Va.setUint32(K,r),K+=4);for(let[t,n]of e)y(t),y(n)}}else{for(let t=0,n=Pa.length;t<n;t++){let n=Fa[t];if(e instanceof n){let n=Pa[t];if(n.write){n.type&&(G[K++]=212,G[K++]=n.type,G[K++]=0);let t=n.write.call(this,e);t===e?Array.isArray(e)?v(e):C(e):y(t);return}let r=G,i=Va,a=K;G=null;let o;try{o=n.pack.call(this,e,e=>(G=r,r=null,K+=e,K>Ha&&T(K),{target:G,targetView:Va,position:K-e}),y)}finally{r&&(G=r,Va=i,K=a,Ha=G.length-10)}o&&(o.length+K>Ha&&T(o.length+K),K=Xa(o,G,K,n.type));return}}if(Array.isArray(e))v(e);else{if(o.useToJSON!==!1&&e.toJSON){let t=e.toJSON();if(t!==e)return y(t)}if(n===`function`)return y(this.writeFunction&&this.writeFunction(e));C(e)}}}}else if(n===`boolean`)G[K++]=e?195:194;else if(n===`bigint`){if(e<0x8000000000000000&&e>=-0x8000000000000000)G[K++]=211,Va.setBigInt64(K,e);else if(e<0x10000000000000000&&e>0)G[K++]=207,Va.setBigUint64(K,e);else if(this.largeBigIntToFloat)G[K++]=203,Va.setFloat64(K,Number(e));else if(this.largeBigIntToString)return y(e.toString());else if(this.useBigIntExtension||this.moreTypes){let t=BigInt(e<0?-1:0),n;if(e>>BigInt(65536)===t){let r=BigInt(0x10000000000000000)-BigInt(1),i=[];for(;i.push(e&r),e>>BigInt(63)!==t;)e>>=BigInt(64);n=new Uint8Array(new BigUint64Array(i).buffer),n.reverse()}else{let t=e<0,r=(t?~e:e).toString(16);if(r.length%2?r=`0`+r:parseInt(r.charAt(0),16)>=8&&(r=`00`+r),Ia)n=Buffer.from(r,`hex`);else{n=new Uint8Array(r.length/2);for(let e=0;e<n.length;e++)n[e]=parseInt(r.slice(e*2,e*2+2),16)}if(t)for(let e=0;e<n.length;e++)n[e]=~n[e]}n.length+K>Ha&&T(n.length+K),K=Xa(n,G,K,66);return}else throw RangeError(e+` was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string`);K+=8}else if(n===`undefined`)this.encodeUndefinedAsNil?G[K++]=192:(G[K++]=212,G[K++]=0,G[K++]=0);else throw Error(`Unknown type: `+n)},b=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?e=>{let t;if(this.skipValues){t=[];for(let n in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(n))&&!this.skipValues.includes(e[n])&&t.push(n)}else t=Object.keys(e);let n=t.length;n<16?G[K++]=128|n:n<65536?(G[K++]=222,G[K++]=n>>8,G[K++]=n&255):(G[K++]=223,Va.setUint32(K,n),K+=4);let r;if(this.coercibleKeyAsNumber)for(let i=0;i<n;i++){r=t[i];let n=Number(r);y(isNaN(n)?r:n),y(e[r])}else for(let i=0;i<n;i++)y(r=t[i]),y(e[r])}:e=>{G[K++]=222;let n=K-t;K+=2;let r=0;for(let t in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(t))&&(y(t),y(e[t]),r++);if(r>65535)throw Error(`Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object`);G[n+++t]=r>>8,G[n+t]=r&255},x=this.useRecords===!1?b:e.progressiveRecords&&!d?e=>{let n,i=r.transitions||(r.transitions=Object.create(null)),a=K++-t,o;for(let s in e)if(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(s)){if(n=i[s],n)i=n;else{let c=Object.keys(e),l=i;i=r.transitions;let u=0;for(let e=0,t=c.length;e<t;e++){let t=c[e];n=i[t],n||(n=i[t]=Object.create(null),u++),i=n}a+t+1==K?(K--,E(i,c,u)):D(i,c,a,u),o=!0,i=l[s]}y(e[s])}if(!o){let n=i[Ka];n?G[a+t]=n:D(i,Object.keys(e),a,0)}}:e=>{let t,n=r.transitions||(r.transitions=Object.create(null)),i=0;for(let r in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(r))&&(t=n[r],t||(t=n[r]=Object.create(null),i++),n=t);let a=n[Ka];a?a>=96&&d?(G[K++]=((a-=96)&31)+96,G[K++]=a>>5):G[K++]=a:E(n,n.__keys__||Object.keys(e),i);for(let t in e)(typeof e.hasOwnProperty!=`function`||e.hasOwnProperty(t))&&y(e[t])},S=typeof this.useRecords==`function`&&this.useRecords,C=S?e=>{S(e)?x(e):b(e)}:x,w=e=>{let i=o._writeStruct(e,G,t,K,r,T,(e,t,r)=>{if(r)return n=!0;K=t;let i=G;return y(e),_(),i===G?K:{position:K,targetView:Va,target:G}});if(i===0)return C(e);K=i},T=e=>{let n;if(e>16777216){if(e-t>za)throw Error(`Packed buffer would be larger than maximum buffer size`);n=Math.min(za,Math.round(Math.max((e-t)*(e>67108864?1.25:2),4194304)/4096)*4096)}else n=(Math.max(e-t<<2,G.length-1)>>12)+1<<12;let r=new La(n);return Va=r.dataView||=new DataView(r.buffer,0,n),e=Math.min(e,G.length),G.copy?G.copy(r,0,t,e):r.set(G.slice(t,e)),K-=t,t=0,Ha=r.length-10,G=r},E=(e,t,i)=>{let a=r.nextId;a||=64,a<f&&this.shouldShareStructure&&!this.shouldShareStructure(t)?(a=r.nextOwnId,a<p||(a=f),r.nextOwnId=a+1):(a>=p&&(a=f),r.nextId=a+1);let o=t.highByte=a>=96&&d?a-96>>5:-1;e[Ka]=a,e.__keys__=t,r[a-64]=t,a<f?(t.isShared=!0,r.sharedLength=a-63,n=!0,o>=0?(G[K++]=(a&31)+96,G[K++]=o):G[K++]=a):(o>=0?(G[K++]=213,G[K++]=114,G[K++]=(a&31)+96,G[K++]=o):(G[K++]=212,G[K++]=114,G[K++]=a),i&&(h+=g*i),m.length>=u&&(m.shift()[Ka]=0),m.push(e),y(t))},D=(e,n,r,i)=>{let a=G,o=K,s=Ha,c=t;G=Ba,K=0,t=0,G||(Ba=G=new La(8192)),Ha=G.length-10,E(e,n,i),Ba=G;let l=K;if(G=a,K=o,Ha=s,t=c,l>1){let e=K+l-1;e>Ha&&T(e);let n=r+t;G.copyWithin(n+l,n+1,K),G.set(Ba.slice(0,l),n),K=e}else G[r+t]=Ba[0]}}useBuffer(e){G=e,G.dataView||(G.dataView=new DataView(G.buffer,G.byteOffset,G.byteLength)),Va=G.dataView,K=0}set position(e){K=e}get position(){return K}clearSharedData(){this.structures&&=[],this.typedStructs&&=[]}};Fa=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,qi],Pa=[{pack(e,t,n){let r=e.getTime()/1e3;if((this.useTimestamp32||e.getMilliseconds()===0)&&r>=0&&r<4294967296){let{target:e,targetView:n,position:i}=t(6);e[i++]=214,e[i++]=255,n.setUint32(i,r)}else if(r>0&&r<4294967296){let{target:n,targetView:i,position:a}=t(10);n[a++]=215,n[a++]=255,i.setUint32(a,e.getMilliseconds()*4e6+(r/1e3/4294967296|0)),i.setUint32(a+4,r)}else if(isNaN(r)){if(this.onInvalidDate)return t(0),n(this.onInvalidDate());let{target:e,targetView:r,position:i}=t(3);e[i++]=212,e[i++]=255,e[i++]=255}else{let{target:n,targetView:i,position:a}=t(15);n[a++]=199,n[a++]=12,n[a++]=255,i.setUint32(a,e.getMilliseconds()*1e6),i.setBigInt64(a+4,BigInt(Math.floor(r)))}}},{pack(e,t,n){if(this.setAsEmptyObject)return t(0),n({});let r=Array.from(e),{target:i,position:a}=t(this.moreTypes?3:0);this.moreTypes&&(i[a++]=212,i[a++]=115,i[a++]=0),n(r)}},{pack(e,t,n){let{target:r,position:i}=t(this.moreTypes?3:0);this.moreTypes&&(r[i++]=212,r[i++]=101,r[i++]=0),n([e.name,e.message,e.cause])}},{pack(e,t,n){let{target:r,position:i}=t(this.moreTypes?3:0);this.moreTypes&&(r[i++]=212,r[i++]=120,r[i++]=0),n([e.source,e.flags])}},{pack(e,t){this.moreTypes?Ja(e,16,t):Ya(Ia?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let n=e.constructor;n!==Ra&&this.moreTypes?Ja(e,wa.indexOf(n.name),t):Ya(e,t)}},{pack(e,t){this.moreTypes?Ja(e,17,t):Ya(Ia?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let{target:n,position:r}=t(1);n[r]=193}}];function Ja(e,t,n,r){let i=e.byteLength;if(i+1<256){var{target:a,position:o}=n(4+i);a[o++]=199,a[o++]=i+1}else if(i+1<65536){var{target:a,position:o}=n(5+i);a[o++]=200,a[o++]=i+1>>8,a[o++]=i+1&255}else{var{target:a,position:o,targetView:s}=n(7+i);a[o++]=201,s.setUint32(o,i+1),o+=4}a[o++]=116,a[o++]=t,e.buffer||(e=new Uint8Array(e)),a.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),o)}function Ya(e,t){let n=e.byteLength;var r,i;if(n<256){var{target:r,position:i}=t(n+2);r[i++]=196,r[i++]=n}else if(n<65536){var{target:r,position:i}=t(n+3);r[i++]=197,r[i++]=n>>8,r[i++]=n&255}else{var{target:r,position:i,targetView:a}=t(n+5);r[i++]=198,a.setUint32(i,n),i+=4}r.set(e,i)}function Xa(e,t,n,r){let i=e.length;switch(i){case 1:t[n++]=212;break;case 2:t[n++]=213;break;case 4:t[n++]=214;break;case 8:t[n++]=215;break;case 16:t[n++]=216;break;default:i<256?(t[n++]=199,t[n++]=i):i<65536?(t[n++]=200,t[n++]=i>>8,t[n++]=i&255):(t[n++]=201,t[n++]=i>>24,t[n++]=i>>16&255,t[n++]=i>>8&255,t[n++]=i&255)}return t[n++]=r,t.set(e,n),n+=i,n}function Za(e,t){let n,r=t.length*6,i=e.length-r;for(;n=t.pop();){let t=n.offset,a=n.id;e.copyWithin(t+r,t,i),r-=6;let o=t+r;e[o++]=214,e[o++]=105,e[o++]=a>>24,e[o++]=a>>16&255,e[o++]=a>>8&255,e[o++]=a&255,i=t}return e}function Qa(e,t,n){if(Ua.length>0){Va.setUint32(Ua.position+e,K+n-Ua.position-e),Ua.stringsPosition=K-e;let r=Ua;Ua=null,t(r[0]),t(r[1])}}function $a(e,t){return e.isCompatible=e=>{let n=!e||(t.lastNamedStructuresLength||0)===e.length;return n||t._mergeStructures(e),n},e}qa.SUPPORTS_STRUCT_HOOKS=!0;var eo=new qa({useRecords:!1});eo.pack,eo.pack;var{NEVER:to,ALWAYS:no,DECIMAL_ROUND:ro,DECIMAL_FIT:io}=Ma,ao=2048,oo=9,so=class{pending=new Uint8Array;push(e){if(!e||e.byteLength===0)return[];let t=this.pending.byteLength===0?e:co(this.pending,e),n=[],r=0;for(;r<t.byteLength;){let e={offset:r},i;try{i=et.number(t,e)}catch(e){if(t.byteLength-r<=oo)break;throw e}let a=e.offset+i;if(a>t.byteLength)break;n.push(t.subarray(e.offset,a)),r=a}return this.pending=r<t.byteLength?t.slice(r):new Uint8Array,n}};function co(e,t){let n=new Uint8Array(e.byteLength+t.byteLength);return n.set(e,0),n.set(t,e.byteLength),n}var lo=class{wt;url;isOpen=!1;events;reader;writer;unreliableReader;unreliableWriter;lengthPrefixBuffer=new Uint8Array(9);reliableReassembler=new so;unreliableReassembler=new so;constructor(e){this.events=e}connect(e,t={}){this.url=e;let n=t.fingerprint&&{serverCertificateHashes:[{algorithm:`sha-256`,value:new Uint8Array(t.fingerprint)}]}||void 0;this.wt=new WebTransport(e,n),this.wt.ready.then(e=>{console.log(`WebTransport ready!`,e),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader();let n=this.wt.datagrams;this.unreliableWriter=(n.createWritable?n.createWritable():n.writable).getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(e=>{this.reader=e.value.readable.getReader(),this.writer=e.value.writable.getWriter(),this.sendSeatReservation(t.roomId,t.sessionId,t.reconnectionToken,t.skipHandshake),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(e=>{console.error(`failed to read incoming stream`,e),console.error(`TODO: close the connection`)})}).catch(e=>{console.log(`WebTransport not ready!`,e),this._close()}),this.wt.closed.then(e=>{console.log(`WebTransport closed w/ success`,e),this.events.onclose({code:e.closeCode,reason:e.reason})}).catch(e=>{console.log(`WebTransport closed w/ error`,e),this.events.onerror(e),this.events.onclose({code:e.closeCode,reason:e.reason})}).finally(()=>{this._close()})}send(e){this.writer.write(this.frame(e))}sendUnreliable(e){this.unreliableWriter.write(this.frame(e))}frame(e){let t=e instanceof Uint8Array?e:new Uint8Array(e),n=H.number(this.lengthPrefixBuffer,t.length,{offset:0}),r=new Uint8Array(n+t.length);return r.set(this.lengthPrefixBuffer.subarray(0,n),0),r.set(t,n),r}close(e,t){this.isOpen=!1;try{let n=this.wt?.close({closeCode:e,reason:t});n&&typeof n.catch==`function`&&n.catch(()=>{})}catch{}}readIncomingData(){return this.readLoop(this.reader,this.reliableReassembler,`reliable`)}readIncomingUnreliableData(){return this.readLoop(this.unreliableReader,this.unreliableReassembler,`unreliable`)}async readLoop(e,t,n){for(;this.isOpen;){let r;try{r=await e.read()}catch(e){await this.onChannelFailure(n,e);return}if(r.done||!r.value)return;for(let e of t.push(r.value))this.events.onmessage({data:e})}}async onChannelFailure(e,t){await new Promise(e=>setTimeout(e,0)),this.isOpen&&(console.error(`H3Transport: stopped reading the ${e} channel while the session was open`,t),this.close(m.ABNORMAL_CLOSURE,`h3 ${e} channel failed`))}sendSeatReservation(e,t,n,r){let i={offset:0},a=[];H.string(a,e,i),H.string(a,t,i),n&&H.string(a,n,i),r&&H.boolean(a,1,i),this.writer.write(new Uint8Array(a).buffer)}_close(){this.isOpen=!1}},uo=c(o(((e,t)=>{t.exports=function(){throw Error(`ws does not work in the browser. Browser clients must use the native WebSocket object`)}}))(),1),fo=globalThis.WebSocket||uo.default,po=!1,mo=class{ws;protocols;events;constructor(e){this.events=e}send(e){this.ws.send(e)}sendUnreliable(e){po||(po=!0,console.warn('@colyseus/sdk: the WebSocket transport has no unreliable channel — sending `mode:"unreliable"` traffic reliably instead. Use @colyseus/h3-transport (WebTransport) for datagram delivery.')),this.send(e)}connect(e,t){try{this.ws=new fo(e,{headers:t,protocols:this.protocols})}catch{this.ws=new fo(e,this.protocols)}this.ws.binaryType=`arraybuffer`,this.ws.onopen=e=>this.events.onopen?.(e),this.ws.onmessage=e=>this.events.onmessage?.(e),this.ws.onclose=e=>this.events.onclose?.(e),this.ws.onerror=e=>this.events.onerror?.(e)}close(e,t){e===m.MAY_TRY_RECONNECT&&this.events.onclose&&(this.ws.onclose=null,this.events.onclose({code:e,reason:t})),this.ws.close(e,t)}get isOpen(){return this.ws.readyState===fo.OPEN}},ho=[],go=typeof addEventListener==`function`&&typeof removeEventListener==`function`;go&&addEventListener(`offline`,()=>{console.warn(`@colyseus/sdk: 🛑 Network offline. Closing ${ho.length} connection(s)`),ho.forEach(e=>e())},!1);var _o=class{transport;events={};url;options;#e=go?()=>this.close(m.MAY_TRY_RECONNECT):null;constructor(e){switch(e){case`h3`:this.transport=new lo(this.events);break;default:this.transport=new mo(this.events)}}connect(e,t){if(go){let e=this.events.onopen;this.events.onopen=t=>{ho.push(this.#e),e?.(t)};let t=this.events.onclose;this.events.onclose=e=>{ho.splice(ho.indexOf(this.#e),1),t?.(e)}}this.url=e,this.options=t,this.transport.connect(e,t)}send(e){this.transport.send(e)}sendUnreliable(e){this.transport.sendUnreliable(e)}reconnect(e){if(this.transport instanceof lo){this.transport.connect(this.url,{...this.options,...e});return}let t=new URL(this.url);for(let n in e)t.searchParams.set(n,e[n]);this.transport.connect(t.toString(),this.options)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}},vo={};function yo(e,t){vo[e]=t}function bo(e){let t=vo[e];if(!t)throw Error(`missing serializer: `+e);return t}var xo=()=>({emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e](...t)},events:{},on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}}),So=new WeakMap,Co=class{handlers=[];register(e,t=!1){return this.handlers.push(e),this}invoke(...e){let t=this.handlers;for(let n=0,r=t.length;n<r;n++)t[n].apply(this,e)}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){let t=this.handlers.indexOf(e);t===-1&&(t=this.handlers.findIndex(t=>So.get(t)===e)),t!==-1&&(this.handlers=this.handlers.filter((e,n)=>n!==t))}clear(){this.handlers=[]}};function wo(){let e=new Co;function t(t){return e.register(t,this===null)}return t.once=t=>{let n=function(...r){e.remove(n),t.apply(this,r)};So.set(n,t),e.register(n)},t.remove=t=>e.remove(t),t.invoke=(...t)=>e.invoke(...t),t.invokeAsync=(...t)=>e.invokeAsync(...t),t.clear=()=>e.clear(),t}var To=class{state;decoder;setState(e,t){this.decoder.root.refs.size>1&&typeof this.decoder.decodeResync==`function`?this.decoder.decodeResync(e,t):this.decoder.decode(e,t)}getState(){return this.state}patch(e,t){return this.decoder.decode(e,t)}teardown(){this.decoder.root.clearRefs()}handshake(e,t){this.state?($r.decode(e,t),this.decoder=new Yr(this.state)):(this.decoder=$r.decode(e,t),this.state=this.decoder.state)}};function Eo(){return{enabled:!0,retryCount:0,maxRetries:15,delay:100,minDelay:100,maxDelay:5e3,minUptime:5e3,backoff:Do,maxEnqueuedMessages:10,enqueuedMessages:[],isReconnecting:!1}}var Do=(e,t)=>Math.floor(2**e*t);function Oo(e,t){e.reconnection.enqueuedMessages.push({data:t}),e.reconnection.enqueuedMessages.length>e.reconnection.maxEnqueuedMessages&&e.reconnection.enqueuedMessages.shift()}function ko(e,t){if(!t){let t=Error(`request rejected`);return t.name=`rejected`,t.reason=e,t}let n=Error(e?.message??`request failed`);return e?.name&&(n.name=e.name),e?.code!==void 0&&(n.code=e.code),n}var Ao=class e{roomId;sessionId;reconnectionToken;name;connection;onStateChange=wo();onError=wo();onLeave=wo();onReconnect=wo();onDrop=wo();onJoin=wo();serializerId;serializer;reconnection=Eo();joinedAtTime=0;clock=ki;onMessageHandlers=xo();packr;sharedBuffer;#e=0;#t=void 0;static defaultRequestTimeout=1e4;#n=0;#r=new Map;#i;#a=0;constructor(e,t){if(this.name=e,this.packr=new qa,this.sharedBuffer=new Uint8Array(8192),t){let e=new(bo(`schema`));this.serializer=e;let n=new t;e.state=n,e.decoder=new Yr(n)}this.onLeave(()=>{this.removeAllListeners(),this.destroy()})}connect(e,t,n){this.connection=new _o(t.protocol),this.connection.events.onmessage=this.onMessageCallback.bind(this),this.connection.events.onclose=e=>{this.#c(`connection closed before a response was received.`),this.joinedAtTime===0?(console.warn?.(`Room connection was closed unexpectedly (${e.code}): ${e.reason}`),this.onError.invoke(e.code,e.reason)):e.code===m.NO_STATUS_RECEIVED||e.code===m.ABNORMAL_CLOSURE||e.code===m.GOING_AWAY||e.code===m.MAY_TRY_RECONNECT?(this.onDrop.invoke(e.code,e.reason),this.handleReconnection(e.code,e.reason)):this.onLeave.invoke(e.code,e.reason)},this.connection.events.onerror=e=>{this.onError.invoke(e.code,e.reason)};let r=this.serializer?.getState()!==void 0;if(t.protocol===`h3`){let n=new URL(e);this.connection.connect(n.origin,{...t,skipHandshake:r})}else this.connection.connect(`${e}${r?`&skipHandshake=1`:``}`,n)}leave(e=!0){return new Promise(t=>{this.onLeave(e=>t(e)),this.connection?e?(this.sharedBuffer[0]=l.LEAVE_ROOM,this.connection.send(this.sharedBuffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(m.CONSENTED)})}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}ping(e){this.connection?.isOpen&&(this.#e=si(),this.#t=e,this.sharedBuffer[0]=l.PING,this.connection.send(this.sharedBuffer.subarray(0,1)))}send(e,t,n){if(n!==void 0){this.request(e,t).then(e=>n(e,void 0),e=>n(void 0,e));return}let r={offset:1};this.sharedBuffer[0]=l.ROOM_DATA,typeof e==`string`?H.string(this.sharedBuffer,e,r):H.number(this.sharedBuffer,e,r);let i=r.offset,a;t===void 0?a=this.sharedBuffer.subarray(0,i):(a=this.packr.pack(t,ao|i),a.set(this.sharedBuffer.subarray(0,i),0)),this.connection.isOpen?this.connection.send(a):Oo(this,new Uint8Array(a))}request(t,n,r){if(!this.connection.isOpen)return Promise.reject(Error(`cannot send request "${t}": connection is not open.`));let i=r?.timeout??e.defaultRequestTimeout;return new Promise((e,a)=>{let o,s=this.sendRequest(t,n,{mode:r?.mode},(t,n,r)=>{clearTimeout(o),t?e(n):a(ko(n,r))},e=>{clearTimeout(o),a(Error(e))});o=setTimeout(()=>{this.cancelRequest(s),a(Error(`request "${t}" timed out after ${i}ms.`))},i)})}#o(){let e=this.#n;return this.#n=this.#n+1>>>0,e}#s(e,t,n){let r={offset:1};this.sharedBuffer[0]=l.ROOM_REQUEST,H.number(this.sharedBuffer,e,r),typeof t==`string`?H.string(this.sharedBuffer,t,r):H.number(this.sharedBuffer,t,r);let i=r.offset;if(n!==void 0){let e=this.packr.pack(n,ao|i);return e.set(this.sharedBuffer.subarray(0,i),0),e}return this.sharedBuffer.subarray(0,i)}sendRequest(e,t,n,r,i){let a=this.#o(),o=this.#s(a,e,t);if(n.mode===`unreliable`){if(!this.connection.isOpen)return-1;this.connection.sendUnreliable(o)}else this.connection.isOpen?this.connection.send(o):Oo(this,new Uint8Array(o));return this.#r.set(a,{onReply:r,onClose:i}),a}cancelRequest(e){this.#r.delete(e)}#c(e){if(this.#r.size!==0){for(let t of this.#r.values())t.onClose?.(e);this.#r.clear()}}sendUnreliable(e,t){if(!this.connection.isOpen)return;let n={offset:1};this.sharedBuffer[0]=l.ROOM_DATA,typeof e==`string`?H.string(this.sharedBuffer,e,n):H.number(this.sharedBuffer,e,n);let r=n.offset,i;t===void 0?i=this.sharedBuffer.subarray(0,r):(i=this.packr.pack(t,ao|r),i.set(this.sharedBuffer.subarray(0,r),0)),this.connection.sendUnreliable(i)}sendBytes(e,t){let n={offset:1};this.sharedBuffer[0]=l.ROOM_DATA_BYTES,typeof e==`string`?H.string(this.sharedBuffer,e,n):H.number(this.sharedBuffer,e,n);let r=n.offset;if(r+t.byteLength>this.sharedBuffer.byteLength){let e=new Uint8Array(r+t.byteLength);e.set(this.sharedBuffer.subarray(0,r)),this.sharedBuffer=e}this.sharedBuffer.set(t,r),this.connection.isOpen?this.connection.send(this.sharedBuffer.subarray(0,r+t.byteLength)):Oo(this,this.sharedBuffer.subarray(0,r+t.byteLength))}input(e){return(this.#i??=new ji(this)).handle(e)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onReconnect.clear(),this.onDrop.clear(),this.onMessageHandlers.events={},this.serializer instanceof To&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(e){this.#l(new Uint8Array(e.data))}#l(e){let t={offset:1},n=e[0],r=n&31;if(n&u.TIMED){let n=et.uint32(e,t),r=et.uint32(e,t),i=this.#i?this.#i.ackInput(r):-1;this.clock.sample(n,i)}if(r===l.JOIN_ROOM){let n=et.utf8Read(e,t,e[t.offset++]);if(this.serializerId=et.utf8Read(e,t,e[t.offset++]),!this.serializer){let e=bo(this.serializerId);this.serializer=new e}let r=et.number(e,t);if(r>0&&this.serializer.handshake){let n=t.offset+r;this.serializer.handshake(e.subarray(0,n),t),t.offset=n}for(;t.offset<e.byteLength;){let n=e[t.offset++],r=et.number(e,t),i=t.offset+r;n===f.INPUT_REFLECTION?(this.#i??=new ji(this)).applyReflection(e,t,i):n===f.INPUT_OPTIONS&&(this.#i??=new ji(this)).applyOptions(e,t),t.offset=i}let i=this.#i?.patchRate;if(i!==void 0&&this.clock.setPatchInterval?.(i),this.joinedAtTime===0?(this.joinedAtTime=Date.now(),this.onJoin.invoke()):(console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9989)} reconnection successful!`),this.reconnection.isReconnecting=!1,this.onReconnect.invoke()),this.reconnectionToken=`${this.roomId}:${n}`,this.sharedBuffer[0]=l.JOIN_ROOM,this.connection.send(this.sharedBuffer.subarray(0,1)),this.reconnection.enqueuedMessages.length>0){for(let e of this.reconnection.enqueuedMessages)this.connection.send(e.data);this.reconnection.enqueuedMessages=[]}}else if(r===l.ERROR){let n=et.number(e,t),r=et.string(e,t);this.onError.invoke(n,r)}else if(r===l.LEAVE_ROOM)this.leave();else if(r===l.ROOM_STATE)this.#a=0,this.serializer.setState(e,t),this.onStateChange.invoke(this.serializer.getState());else if(r===l.ROOM_STATE_PATCH){if(n&u.UNRELIABLE){let n=et.uint16(e,t);if(n-this.#a<<16>>16<=0)return;this.#a=n}this.serializer.patch(e,t),this.onStateChange.invoke(this.serializer.getState())}else if(r===l.ROOM_DATA){let n=et.stringCheck(e,t)?et.string(e,t):et.number(e,t),r=e.byteLength>t.offset?ja(e,{start:t.offset}):void 0;this.dispatchMessage(n,r)}else if(r===l.ROOM_DATA_BYTES){let n=et.stringCheck(e,t)?et.string(e,t):et.number(e,t);this.dispatchMessage(n,e.subarray(t.offset))}else if(r===l.ROOM_RESPONSE){let n=et.number(e,t),r=e[t.offset++],i=e.byteLength>t.offset?ja(e,{start:t.offset}):void 0,a=this.#r.get(n);a!==void 0&&(this.#r.delete(n),a.onReply(r===d.OK,i,r===d.ERROR))}else r===l.PING&&(this.#t?.(Math.round(si()-this.#e)),this.#t=void 0)}dispatchMessage(e,t){let n=this.getMessageHandlerKey(e);this.onMessageHandlers.events[n]?this.onMessageHandlers.emit(n,t):this.onMessageHandlers.events[`*`]?this.onMessageHandlers.emit(`*`,e,t):n.startsWith(`__`)||console.warn?.(`@colyseus/sdk: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case`string`:return e;case`number`:return`i${e}`;default:throw Error(`invalid message type.`)}}handleReconnection(e,t){this.reconnection.enabled?Date.now()-this.joinedAtTime<this.reconnection.minUptime?(console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} Room has not been up for long enough for automatic reconnection. (min uptime: ${this.reconnection.minUptime}ms)`),this.onLeave.invoke(m.ABNORMAL_CLOSURE,`Room uptime too short for reconnection.`)):(this.reconnection.isReconnecting||(this.reconnection.retryCount=0,this.reconnection.isReconnecting=!0,this.#i?.reset()),this.retryReconnection()):this.onLeave.invoke(e,t)}retryReconnection(){if(this.reconnection.retryCount>=this.reconnection.maxRetries){console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} ❌ Reconnection failed after ${this.reconnection.maxRetries} attempts.`),this.reconnection.isReconnecting=!1,this.onLeave.invoke(m.FAILED_TO_RECONNECT,`No more retries. Reconnection failed.`);return}this.reconnection.retryCount++;let e=Math.min(this.reconnection.maxDelay,Math.max(this.reconnection.minDelay,this.reconnection.backoff(this.reconnection.retryCount,this.reconnection.delay)));console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9203)} will retry in ${(e/1e3).toFixed(1)} seconds...`),setTimeout(()=>{try{console.info(`[Colyseus reconnection]: ${String.fromCodePoint(128260)} Re-establishing sessionId '${this.sessionId}' with roomId '${this.roomId}'... (attempt ${this.reconnection.retryCount} of ${this.reconnection.maxRetries})`),this.connection.reconnect({reconnectionToken:this.reconnectionToken.split(`:`)[1],skipHandshake:!0})}catch{this.retryReconnection()}},e)}};function jo(e,t){return new Promise((n,r)=>{let i=new XMLHttpRequest,a=t?.method||`GET`;i.open(a,e.toString()),i.withCredentials=t?.credentials===`include`,t?.headers&&(t.headers instanceof Headers?t.headers:new Headers(t.headers)).forEach((e,t)=>{i.setRequestHeader(t,e)}),i.onload=()=>{let e=new Headers,t=i.getAllResponseHeaders().trim();if(t)for(let n of t.split(/[\r\n]+/)){let t=n.indexOf(`: `);t>0&&e.append(n.substring(0,t),n.substring(t+2))}n(new Mo(i.response??i.responseText,{status:i.status,statusText:i.statusText,headers:e}))},i.onerror=()=>r(TypeError(`Network request failed`)),i.ontimeout=()=>r(TypeError(`Network request timed out`)),i.send(t?.body??null)})}var Mo=class{status;statusText;headers;ok;body;constructor(e,t){this.body=e,this.status=t.status,this.statusText=t.statusText,this.headers=t.headers,this.ok=t.status>=200&&t.status<300}async json(){return typeof this.body==`string`?JSON.parse(this.body):this.body}async text(){return typeof this.body==`string`?this.body:JSON.stringify(this.body)}async blob(){return new Blob([this.body])}};function No(e){if(e===void 0)return!1;let t=typeof e;return t===`string`||t===`number`||t===`boolean`||t===null?!0:t===`object`?Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name===`Object`||typeof e.toJSON==`function`:!1}function Po(e,t){let{params:n,query:r}=t||{},[i,a]=e.split(`?`),o=i;if(n){if(Array.isArray(n)){let e=o.split(`/`).filter(e=>e.startsWith(`:`));for(let[t,r]of e.entries()){let e=n[t];o=o.replace(r,e)}}else for(let[e,t]of Object.entries(n))o=o.replace(`:${e}`,String(t))}let s=new URLSearchParams(a);if(r)for(let[e,t]of Object.entries(r))t!=null&&s.set(e,String(t));let c=s.toString();return c=c.length>0?`?${c}`.replace(/\+/g,`%20`):``,`${o}${c}`}var Fo=class{authToken;options;sdk;_fetchFn;del=this.delete;constructor(e,t,n){this.sdk=e,this.options=t,this._fetchFn=n}get fetchFn(){return this._fetchFn||=globalThis.fetch===void 0?jo:globalThis.fetch.bind(globalThis),this._fetchFn}async request(e,t,n){return this.executeRequest(e,t,n)}get(e,t){return this.request(`GET`,e,t)}post(e,t){return this.request(`POST`,e,t)}delete(e,t){return this.request(`DELETE`,e,t)}patch(e,t){return this.request(`PATCH`,e,t)}put(e,t){return this.request(`PUT`,e,t)}async executeRequest(e,t,n){let r=this.options.body?{...this.options.body,...n?.body||{}}:n?.body,i=this.options.query?{...this.options.query,...n?.query||{}}:n?.query,a=this.options.params?{...this.options.params,...n?.params||{}}:n?.params,o=new Headers(this.options.headers?{...this.options.headers,...n?.headers||{}}:n?.headers);if(this.authToken&&!o.has(`authorization`)&&o.set(`authorization`,`Bearer ${this.authToken}`),No(r)&&typeof r==`object`&&r){o.has(`content-type`)||o.set(`content-type`,`application/json`);for(let[e,t]of Object.entries(r))t instanceof Date&&(r[e]=t.toISOString());r=JSON.stringify(r)}let s={credentials:n?.credentials||`include`,...this.options,...n,query:i,params:a,headers:o,body:r,method:e},c=Po(this.sdk.getHttpEndpoint(t.toString()),s),l;try{l=await this.fetchFn(c,s)}catch(e){if(e.name===`AbortError`)throw e;let t=new h(e.cause?.code||e.code,e.message);throw t.response=l,t.cause=e.cause,t}let u=l.headers.get(`content-type`),d;if(d=u?.includes(`json`)?await l.json():u?.includes(`text`)?await l.text():await l.blob(),!l.ok)throw new h(l.status,d.message??d.error??l.statusText,{headers:l.headers,status:l.status,response:l,data:d});return{raw:l,data:d,headers:l.headers,status:l.status,statusText:l.statusText}}},Io;function Lo(){if(!Io)try{Io=typeof cc<`u`&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!Io&&globalThis.indexedDB!==void 0&&(Io=new Vo),Io||={cache:{},setItem:function(e,t){this.cache[e]=t},getItem:function(e){return this.cache[e]},removeItem:function(e){delete this.cache[e]}},Io}function Ro(e,t){Lo().setItem(e,t)}function zo(e){Lo().removeItem(e)}function Bo(e,t){let n=Lo().getItem(e);typeof Promise>`u`||!(n instanceof Promise)?t(n):n.then(e=>t(e))}var Vo=class{dbPromise=new Promise(e=>{let t=indexedDB.open(`_colyseus_storage`,1);t.onupgradeneeded=()=>t.result.createObjectStore(`store`),t.onsuccess=()=>e(t.result)});async tx(e,t){return t((await this.dbPromise).transaction(`store`,e).objectStore(`store`))}setItem(e,t){return this.tx(`readwrite`,n=>n.put(t,e)).then()}async getItem(e){let t=await this.tx(`readonly`,t=>t.get(e));return new Promise(e=>{t.onsuccess=()=>e(t.result)})}removeItem(e){return this.tx(`readwrite`,t=>t.delete(e)).then()}},Ho=class{settings={path:`/auth`,key:`colyseus-auth-token`};#e=!1;#t=null;#n=xo();http;constructor(e){this.http=e,Bo(this.settings.key,e=>this.token=e)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){let t=this.#n.on(`change`,e);return this.#e||this.getUserData().then(e=>{this.emitChange({...e,token:this.token})}).catch(e=>{this.emitChange({user:null,token:void 0})}),this.#e=!0,t}async getUserData(){if(this.token)return(await this.http.get(`${this.settings.path}/userdata`)).data;throw Error(`missing auth.token`)}async registerWithEmailAndPassword(e,t,n){let r=(await this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:n}})).data;return this.emitChange(r),r}async signInWithEmailAndPassword(e,t){let n=(await this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(n),n}async signInAnonymously(e){let t=(await this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t}async sendPasswordResetEmail(e){return(await this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data}async signInWithProvider(e,t={}){return new Promise((n,r)=>{let i=t.width||480,a=t.height||768,o=this.token?`?token=${this.token}`:``,s=`Login with ${e[0].toUpperCase()+e.substring(1)}`,c=this.http.sdk.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${o}`),l=screen.width/2-i/2,u=screen.height/2-a/2;this.#t=window.open(c,s,`toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=`+i+`, height=`+a+`, top=`+u+`, left=`+l);let d=e=>{if(e.data.user!==void 0||e.data.token!==void 0){if(clearInterval(f),this.#t?.close(),this.#t=null,window.removeEventListener(`message`,d),e.data.error!==void 0){let t=Error(String(e.data.error));t.code=e.data.error,e.data.reason!==void 0&&(t.reason=e.data.reason),e.data.until!==void 0&&(t.until=e.data.until),r(t)}else n(e.data),this.emitChange(e.data)}},f=setInterval(()=>{(!this.#t||this.#t.closed)&&(this.#t=null,r(`cancelled`),window.removeEventListener(`message`,d))},200);window.addEventListener(`message`,d)})}async signOut(){this.emitChange({user:null,token:null})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?zo(this.settings.key):Ro(this.settings.key,e.token)),this.#n.emit(`change`,e)}};function Uo(e){let t=window?.location?.hostname||`localhost`,n=e.hostname.split(`.`),r=!e.hostname.includes(`trycloudflare.com`)&&!e.hostname.includes(`discordsays.com`)&&n.length>2?`/${n[0]}`:``;return e.pathname.startsWith(`/.proxy`)?`${e.protocol}//${t}${r}${e.pathname}${e.search}`:`${e.protocol}//${t}/.proxy/colyseus${r}${e.pathname}${e.search}`}var Wo=typeof window<`u`&&window?.location?.hostname!==void 0?`${window.location.protocol.replace(`http`,`ws`)}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:`ws://127.0.0.1:2567`,Go=class e{static VERSION=`0.18`;http;auth;settings;urlBuilder;constructor(e=Wo,t){if(typeof e==`string`){let t=e.startsWith(`/`)?new URL(e,Wo):new URL(e),n=t.protocol===`https:`||t.protocol===`wss:`,r=Number(t.port||(n?443:80));this.settings={hostname:t.hostname,pathname:t.pathname,port:r,secure:n,searchParams:t.searchParams.toString()||void 0}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=``),this.settings=e;this.settings.pathname.endsWith(`/`)&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),t?.protocol&&(this.settings.protocol=t.protocol),this.http=new Fo(this,{headers:t?.headers||{}},t?.fetchFn),this.auth=new Ho(this.http),this.urlBuilder=t?.urlBuilder,!this.urlBuilder&&typeof window<`u`&&window?.location?.hostname?.includes(`discordsays.com`)&&(this.urlBuilder=Uo,console.log(`Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder.`))}static async selectByLatency(t,n,r={}){let i=t.map(t=>new e(t,n)),a=(await Promise.allSettled(i.map((e,t)=>e.getLatency(r).then(e=>{let n=i[t].settings;return console.log(`🛜 Endpoint Latency: ${e}ms - ${n.hostname}:${n.port}${n.pathname}`),[t,e]})))).filter(e=>e.status===`fulfilled`).map(e=>e.value);if(a.length===0)throw Error(`All endpoints failed to respond`);return i[a.sort((e,t)=>e[1]-t[1])[0][0]]}async joinOrCreate(e,t={},n){return await this.createMatchMakeRequest(`joinOrCreate`,e,t,n)}async create(e,t={},n){return await this.createMatchMakeRequest(`create`,e,t,n)}async join(e,t={},n){return await this.createMatchMakeRequest(`join`,e,t,n)}async joinById(e,t={},n){return await this.createMatchMakeRequest(`joinById`,e,t,n)}async reconnect(e,t){if(typeof e==`string`&&typeof t==`string`)throw Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");let[n,r]=e.split(`:`);if(!n||!r)throw Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return await this.createMatchMakeRequest(`reconnect`,n,{reconnectionToken:r},t)}async consumeSeatReservation(e,t){let n=this.createRoom(e.name,t);n.roomId=e.roomId,n.sessionId=e.sessionId;let r={sessionId:n.sessionId};return e.reconnectionToken&&(r.reconnectionToken=e.reconnectionToken),n.connect(this.buildEndpoint(e,r),{...e,protocol:this.settings.protocol},this.http.options.headers),new Promise((e,t)=>{let r=(e,n)=>t(new h(e,n));n.onError.once(r),n.onJoin.once(()=>{n.onError.remove(r),ui(`room`,n),e(n)})})}getLatency(e={}){let t=e.protocol??`ws`,n=e.pingCount??1,r=e.timeout??1500;return new Promise((e,i)=>{let a=new _o(t),o=[],s=0,c=!1,u,d=e=>{if(!c){c=!0,clearTimeout(u);try{a.close()}catch{}e()}},f=e=>d(()=>i(new h(m.ABNORMAL_CLOSURE,`Failed to get latency: ${e}`)));u=setTimeout(()=>f(`timed out after ${r}ms`),r),a.events.onopen=()=>{s=Date.now(),a.send(new Uint8Array([l.PING]))},a.events.onmessage=t=>{if(o.push(Date.now()-s),o.length<n)s=Date.now(),a.send(new Uint8Array([l.PING]));else{let t=o.reduce((e,t)=>e+t,0)/o.length;d(()=>e(t))}},a.events.onclose=e=>f(`connection closed${e?.code?` (${e.code})`:``}${e?.reason?`: ${e.reason}`:``}`),a.events.onerror=e=>f(e.message);try{a.connect(this.getHttpEndpoint())}catch(e){f(e?.message??`failed to connect`)}})}async createMatchMakeRequest(e,t,n={},r){try{if(!t)throw Error(`Must provide a room name`);let i=(await this.http.post(`/matchmake/${e}/${t}`,{headers:{Accept:`application/json`,"Content-Type":`application/json`},body:n})).data;return e===`reconnect`&&(i.reconnectionToken=n.reconnectionToken),await this.consumeSeatReservation(i,r)}catch(e){throw e instanceof h?new g(e.message,e.code):e}}createRoom(e,t){return new Ao(e,t)}buildEndpoint(e,t={}){let n=this.settings.protocol||`ws`,r=this.settings.searchParams||``;this.http.authToken&&(t._authToken=this.http.authToken);for(let e in t)t.hasOwnProperty(e)&&(r+=(r?`&`:``)+`${e}=${t[e]}`);n===`h3`&&(n=`http`);let i=this.settings.secure?`${n}s://`:`${n}://`;e.publicAddress?i+=`${e.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;let a=`${i}/${e.processId}/${e.roomId}?${r}`;return this.urlBuilder?this.urlBuilder(new URL(a)):a}getHttpEndpoint(e=``){let t=e.startsWith(`/`)?e:`/${e}`,n=`${this.settings.secure?`https`:`http`}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.settings.searchParams&&(n+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:``}},Ko=Go,qo=class{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}},Jo=e=>Math.max(e*2,600),Yo=class e{static get(t,n={}){let r=new e;return r.configure(Xo(t.clock??null,n.ttlMs??Jo)),n.onReject&&r.configure({onReject:n.onReject}),r}entries=new Map;accepted=new Set;cfg={};configure(e){this.cfg={...this.cfg,...e}}predict(e,t){return this.entries.set(e,t??this.cfg.now?.()??performance.now()),{key:e,cancel:()=>{this.entries.delete(e),this.accepted.delete(e)},accept:()=>{this.entries.has(e)&&this.accepted.add(e)}}}has(e){return this.entries.has(e)}confirm(e){this.entries.delete(e),this.accepted.delete(e)}reject(e){this.entries.delete(e)&&(this.accepted.delete(e),this.cfg.onReject?.(e))}prune(e,t){let n=e??this.cfg.now?.()??performance.now(),r=this.cfg.ttlMs,i=t??(typeof r==`function`?r():r)??1/0;for(let[e,t]of this.entries)this.accepted.has(e)||n-t>i&&(this.entries.delete(e),this.cfg.onReject?.(e))}clear(){this.entries.clear(),this.accepted.clear()}get size(){return this.entries.size}dead=!1;dispose(){this.dead=!0,this.entries.clear(),this.accepted.clear()}};function Xo(e,t){return{now:()=>e?.serverNow()??performance.now(),ttlMs:typeof t==`function`?()=>t(e?.smoothedRtt()??0):t}}var Zo=.1,Qo=.9;function $o(){return{ema:0,peak:0}}function es(e,t){e.ema+=(t-e.ema)*Zo,e.peak=Math.max(t,e.peak*Qo)}function ts(e){e.ema=0,e.peak=0}var ns=.001;function rs(e,t){let n=t!==void 0&&t>ns?t:ns;return e.ema>=n?`diverging`:e.peak>=n?`jitter`:`matched`}function is(){return di()}var as=-1/0,os=1e3;function ss(){console.warn(`@colyseus/sdk predict: a predicted value was read BEFORE this frame's input.send() calls. Reads between predict.tick() and the frame's sends are one fixed step stale and stutter on late frames. Send the frame's due inputs right after predict.tick(now) — tick and pump in your earliest per-frame callback, before anything reads value()/pose(). For game logic (zone checks, hit-reg) read .state/.world instead. See PREDICTION.md §4 (frame order).`)}function cs(e,t){console.warn(t===``?`@colyseus/sdk predict: two key-less ctx.memo calls ran in one step (input seq ${e}) — the key-less form is ONE shared slot per step, so replay returns one frozen value for both (silent re-simulation corruption). Pass distinct keys: ctx.memo("a", …) / ctx.memo("b", …).`:`@colyseus/sdk predict: ctx.memo("${t}") ran twice in one step (input seq ${e}) — both calls share one slot on replay. Give each call site its own key (include the loop index for a per-iteration memo).`)}function ls(e,t,n,r){let i=si();if(i-as<os)return;as=i;let a=``,o=-1;for(let e in t){let n=t[e],r=n<0?-n:n;r>o&&(o=r,a=e)}let s=a?t[a]:n;console.warn(`@colyseus/sdk predict: prediction is diverging at input seq ${e} — rolling drift ${n.toFixed(3)} ≥ tolerance ${r}; "${a}" currently off by ${s.toFixed(3)}. Most likely the client and server simulations disagree: a different fixed dt, mismatched constants, a step function that isn't shared, or an input the server skipped. See PREDICTION.md §5 (Determinism).`)}var us=class{byTick=new Map;diagTick=-1;diagKeys=new Set;warnedKeys=new Set;run(e,t,n,r){if(t)return this.byTick.get(e)?.get(n);is()&&(e===this.diagTick?this.diagKeys.has(n)&&!this.warnedKeys.has(n)&&(this.warnedKeys.add(n),cs(e,n)):(this.diagTick=e,this.diagKeys.clear()),this.diagKeys.add(n));let i=r();if(i!==void 0){let t=this.byTick.get(e);t===void 0&&(t=new Map,this.byTick.set(e,t)),t.set(n,i)}return i}prune(e){for(let t of this.byTick.keys())t<=e&&this.byTick.delete(t)}clear(){this.byTick.clear(),this.diagTick=-1,this.diagKeys.clear()}},ds=0;function fs(){return ds>0}var ps=class{lastCorrection={};lastCorrectionMag=0;reconcileSeq=0;drift=$o();error={};prev={};renderedBefore={};lastTick=-1;lastAcked=0;lastEpoch;replayFrom=0;predictedSeq=0;catching=!1;unsubscribeSend=()=>{};renderAcc=0;tickSeq=0;clampedReadTick=-1;warnedStaleRead=!1;stepCtx;ackWatermark=()=>this.input_.lastProcessed;memos=new us;smoothMs;snapThreshold;stepMs;input_;onReconcile;warnTolerance;clock;constructor(e){this.input_=e.input,this.clock=e.clock,this.smoothMs=e.smoothMs??(this.input_.patchRate?this.input_.patchRate:50),this.snapThreshold=e.snap??0;let t=e.stepMs??this.input_.stepMs??(e.stepSeconds===void 0?void 0:e.stepSeconds*1e3);if(t===void 0)throw Error(`@colyseus/sdk reconciler: fixed simulation step is unknown. The server room must call setFixedTimestep() (or setTimestep()) so the input handle advertises a tick rate, or pass stepMs/stepSeconds explicitly — a wrong dt silently diverges rollback-replay.`);this.stepMs=t;let n=e.stepSeconds??this.input_.stepSeconds??t/1e3,r=e.subSteps??this.input_.subSteps??1;this.stepCtx={dt:n,dtMs:t,tick:0,isReplay:!1,reckonTime:0,lagCompActive:!1,subSteps:r,subDt:n/r,subDtMs:t/r,memo:(e,t)=>typeof e==`string`?this.memos.run(this.stepCtx.tick,this.stepCtx.isReplay,e,t):this.memos.run(this.stepCtx.tick,this.stepCtx.isReplay,``,e),predict:(e,t)=>{this.stepCtx.isReplay||e._predictFromSim(this.stepCtx.tick,t,this.ackWatermark)}},this.onReconcile=e.onReconcile,this.warnTolerance=e.warnOnDivergence,this.lastAcked=this.input_.lastProcessed,this.lastEpoch=this.input_.epoch,this.predictedSeq=this.input_.sentCount,this.unsubscribeSend=this.input_.onSend(()=>this.catchUp())}tick(e){this.tickSeq++;let t=this.lastTick<0?0:e-this.lastTick;this.lastTick=e,t>0&&this.stepMs>0&&(this.renderAcc+=t);let n=this.input_.epoch;n!==this.lastEpoch&&(this.lastEpoch=n,this.reset());let r=this.input_.lastProcessed;if(r>this.lastAcked&&(this.lastAcked=r,this.reconcile(r)),this.markDirty(),t<=0)return;let i=this.smoothMs<=0?1:1-Math.exp(-t/this.smoothMs);for(let e of this.smoothedFields())this.error[e]-=this.error[e]*i}renderAlpha(){if(this.stepMs<=0)return 1;let e=this.renderAcc/this.stepMs;return e<0?0:e>1?1:e}noteRenderRead(){this.catching||this.stepMs<=0||this.renderAcc<this.stepMs||(this.clampedReadTick=this.tickSeq)}catchUp(){let e=this.input_.sentCount;if(!(this.predictedSeq>=e||this.catching)){this.clampedReadTick===this.tickSeq&&!this.warnedStaleRead&&(this.warnedStaleRead=!0,ss()),this.catching=!0,this.stepCtx.isReplay=!1;for(let t=this.predictedSeq+1;t<=e;t++){let e=this.input_.at(t);e!==void 0&&(this.snapshotPrev(),this.runStep(t,e),this.refreshRender(),this.renderAcc-=this.stepMs,this.renderAcc<0?this.renderAcc=0:this.renderAcc>=this.stepMs&&(this.renderAcc%=this.stepMs)),this.predictedSeq=t}this.catching=!1}}runStep(e,t){this.stepCtx.tick=e;let n=this.input_.reckonTimeAt(e);this.stepCtx.lagCompActive=n>0,this.stepCtx.reckonTime=n>0?n:this.clock===void 0?0:this.clock.serverNow(),this.applyStep(t)}reconcile(e){let t=this.warnTolerance!==void 0||is();if(this.truthMatchesAt(e)){if(t){for(let e of this.smoothedFields())this.lastCorrection[e]=0;this.lastCorrectionMag=0,es(this.drift,0)}this.reconcileSeq++,this.memos.prune(e),this.onReconcile?.(e);return}let n=this.renderedBefore;for(let e of this.smoothedFields())n[e]=this.readCurrent(e)+this.error[e];this.adoptTruth();let r=Math.max(e,this.replayFrom);this.stepCtx.isReplay=!0,this.catching=!0,ds++;try{for(let e=r+1;e<=this.input_.sentCount;e++){let t=this.input_.at(e);t!==void 0&&this.runStep(e,t)}}finally{ds--}this.catching=!1,this.refreshRender(),this.predictedSeq=this.input_.sentCount;let i=this.smoothMs<=0,a=t||this.snapThreshold>0,o=0;for(let e of this.smoothedFields()){let r=n[e]-this.readCurrent(e);if(this.error[e]=i?0:r,a){let e=r<0?-r:r;e>o&&(o=e)}t&&(this.lastCorrection[e]=r)}let s=this.snapThreshold>0&&o>this.snapThreshold;if(s)for(let e of this.smoothedFields())this.error[e]=0,this.prev[e]=this.readCurrent(e);this.reconcileSeq++,t&&(this.lastCorrectionMag=o,s||(es(this.drift,o),this.warnTolerance!==void 0&&rs(this.drift,this.warnTolerance)===`diverging`&&ls(e,this.lastCorrection,this.drift.ema,this.warnTolerance))),this.memos.prune(e),this.onReconcile?.(e)}get pendingCount(){return this.input_.pendingCount}reset(){this.reseedState(),ts(this.drift),this.replayFrom=this.input_.sentCount,this.predictedSeq=this.input_.sentCount,this.lastAcked=this.input_.lastProcessed,this.renderAcc=0,this.memos.clear(),this.markDirty()}dead=!1;disposedHooks=[];onDisposed(e){this.disposedHooks.push(e)}dispose(){this.dead=!0,this.unsubscribeSend();for(let e of this.disposedHooks.splice(0))e()}truthMatchesAt(e){return!1}refreshRender(){}markDirty(){}},ms=0,hs=class{opts;store;entries=new Map;now;cooldownUntil=-1/0;warnedReplayPredict=!1;constructor(e,t){this.opts=e,this.now=()=>t?.serverNow()??performance.now(),this.store=Yo.get({clock:t},{ttlMs:e.ttlMs??Jo,onReject:e=>{let t=this.entries.get(e);this.entries.delete(e),t&&this.opts.onReject?.(t.payload)}})}_predictFromSim(e,t,n){this.add(e,t,n)}predict(e){fs()?this.warnedReplayPredict||(this.warnedReplayPredict=!0,console.warn(`@colyseus/sdk: PredictedEventChannel${this.opts.label?` "${this.opts.label}"`:``}.predict() was called during a rollback replay and ignored. Inside a reconciler step, use ctx.predict(channel, payload).`)):this.add(-1,e)}add(e,t,n){let r=this.opts.uniqueBy===void 0?typeof t==`string`||typeof t==`number`?t:ms:this.opts.uniqueBy(t);if(this.entries.has(r))return;let i=this.now();if(this.opts.cooldownMs!==void 0){if(i<this.cooldownUntil)return;this.cooldownUntil=i+this.opts.cooldownMs}let a=this.store.predict(r,i);n!==void 0&&a.accept(),this.entries.set(r,{payload:t,seq:e,acked:n}),this.opts.onPredict?.(t)}has(e){return e===void 0?this.entries.size>0:this.entries.has(e)}get pendingCount(){return this.entries.size}confirm(e){let t=0;for(let n of this.settleKeys(e)){let e=this.entries.get(n);e!==void 0&&(this.entries.delete(n),this.store.confirm(n),this.opts.onConfirm?.(e.payload),t++)}return t===0&&this.opts.onUnpredicted?.(e),t}reject(e){let t=0;for(let n of this.settleKeys(e))this.entries.has(n)&&(this.store.reject(n),t++);return t}settleKeys(e){return e===void 0?[...this.entries.keys()]:[e]}clear(){this.entries.clear(),this.store.clear()}prune(){if(this.entries.size>0){let e=this.opts.graceTicks??10;for(let[t,n]of[...this.entries])n.acked!==void 0&&n.acked()>=n.seq+e&&this.store.reject(t)}this.store.prune()}dead=!1;teardowns=[];_addTeardown(e){this.teardowns.push(e)}dispose(){for(let e of this.teardowns.splice(0))e();this.dead=!0,this.clear(),this.store.dispose()}},gs=class{opts;clock;correlate;ttl;byId=new Map;byServer=new Map;nextId=1;lastTickAt;detach;dead=!1;constructor(e={},t=null){this.opts=e,this.clock=t,this.correlate=e.correlate??`fifo`,this.ttl=e.ttl??Jo}attach(e){this.detach?.(),this.detach=e(this.handleAdd,this.handleRemove)}spawn(e){let t=this.nextId++,n=this.makeData(),r={id:t,server:void 0,local:e,state:`pending`,at:this.now(),leadMs:0,accepted:!1,data:n};return this.byId.set(t,r),{id:t,local:e,data:n,cancel:()=>{let e=this.byId.get(t);e&&e.state===`pending`&&this.byId.delete(t)},accept:()=>{let e=this.byId.get(t);e&&(e.accepted=!0)}}}handleAdd=(e,t)=>{if(this.byServer.has(e))return;let n=this.isOwned(e)?this.takeMatch(e):void 0;if(n)this.confirmEntry(n,e);else{let t={id:this.nextId++,server:e,local:void 0,state:`confirmed`,at:void 0,leadMs:0,accepted:!1,data:this.makeData()};this.byId.set(t.id,t),this.byServer.set(e,t)}};confirmEntry(e,t){e.server=t,e.state=`confirmed`;let n=this.opts.spawnTime;n!==void 0&&e.at!==void 0&&(e.leadMs=n(t)-e.at),this.byServer.set(t,e)}handleRemove=(e,t)=>{let n=this.byServer.get(e);n&&(this.byServer.delete(e),this.byId.delete(n.id))};takeMatch(e){let t=this.correlate;if(typeof t!=`function`){for(let e of this.byId.values())if(e.state===`pending`)return e}else for(let n of this.byId.values())if(n.state===`pending`&&t(n.local,e))return n}isOwned(e){return!this.opts.owned||this.opts.owned(e)}makeData(){return this.opts.data?this.opts.data():void 0}tick(e=performance.now()){let t=this.opts.step,n=this.clock===null?e:this.clock.serverNow();if(t!==void 0&&this.lastTickAt!==void 0){let e=Math.max(0,(n-this.lastTickAt)/1e3);if(e>0)for(let n of this.byId.values())n.state===`pending`&&t(n.local,e)}this.lastTickAt=n}prune(){if(this.byId.size===0)return;let e=this.now(),t=this.ttl(this.clock?.smoothedRtt()??0);for(let n of this.byId.values())n.state===`pending`&&!n.accepted&&n.at!==void 0&&e-n.at>t&&(this.byId.delete(n.id),this.opts.onReject?.(n.local,n.id))}entries(){return this.byId.values()}entryFor(e){return this.byServer.get(e)}value(e,t){return e.server===void 0?e.local[t]:this.readServer(e.server,t)}bindReader(e){this.readServer=e}readServer=(e,t)=>e[t];alive(e){return this.byId.has(e)}get size(){return this.byId.size}clear(){this.byId.clear(),this.byServer.clear()}dispose(){this.dead=!0,this.detach?.(),this.detach=void 0,this.clear()}now(){return this.clock?.serverNow()??performance.now()}},_s=e=>typeof e==`number`?e:typeof e==`boolean`?+!!e:NaN,vs=class extends ps{local={};fields;numericFields=[];step;instance;wireRound=[];history;historySeq;historySize;historyOn;undeclared=null;devView=null;constructor(e,t){super(t),this.instance=e;let n=t.fields,r=n??yi(e).fields;if(n===void 0&&r.length===0)throw Error("predict.reconciler(): no `fields` given and none derivable — the instance has no schema metadata (a plain object, or a schema with no scalar fields). Pass the decoded instance from room.state, or list `fields` explicitly.");this.fields=r,this.step=t.step;let i=this.fields.length>0;for(let t of this.fields){let n=e[t];this.local[t]=n,typeof n==`number`?(this.numericFields.push(t),this.prev[t]=n,this.error[t]=0):typeof n!=`boolean`&&(i=!1),this.wireRound.push(Si(e,t))}if(this.historyOn=i,this.historySize=this.input_.replayBufferSize??64,this.history=new Float64Array(this.historyOn?this.historySize*this.fields.length:0),this.historySeq=new Float64Array(this.historyOn?this.historySize:0).fill(-1),n!==void 0){let t=new Set(this.fields),n=yi(e).fields.filter(e=>!t.has(e));n.length>0&&(this.undeclared=new Set(n))}}get state(){return this.local}get boundRegistrations(){return[{source:this.instance,fields:this.numericFields,poseKeys:this.numericFields}]}value(e){this.noteRenderRead();let t=this.local[e];if(typeof t!=`number`)return t;let n=t+(this.error[e]??0),r=this.prev[e]??n;return r+(n-r)*this.renderAlpha()}smoothedFields(){return this.numericFields}readCurrent(e){return this.local[e]}applyStep(e){let t=this.undeclared!==null&&is()?this.stepView():this.local;if(this.step(this.stepCtx,t,e),this.historyOn){let e=this.stepCtx.tick,t=e%this.historySize,n=t*this.fields.length;for(let e=0;e<this.fields.length;e++)this.history[n+e]=_s(this.local[this.fields[e]]);this.historySeq[t]=e}}stepView(){if(this.devView!==null)return this.devView;let e=this.undeclared,t=new Set,n=(n,r)=>{typeof r==`string`&&e.has(r)&&!t.has(r)&&(t.add(r),console.warn(`@colyseus/sdk predict: step ${n} "${r}" — a schema field NOT in this reconciler's \`fields\` list, so it is never mirrored or replayed: prediction integrates on top of a stale value and rubber-bands under latency. Add "${r}" to \`fields\`, or omit \`fields\` to mirror every scalar field. Read adopt-only fields off the raw instance instead of the predicted state.`))};return this.devView=new Proxy(this.local,{get(e,t,r){return n(`read`,t),Reflect.get(e,t,r)},set(e,t,r,i){return n(`wrote`,t),Reflect.set(e,t,r,i)}}),this.devView}truthMatchesAt(e){if(!this.historyOn)return!1;let t=e%this.historySize;if(this.historySeq[t]!==e)return!1;let n=t*this.fields.length,r=this.instance;for(let e=0;e<this.fields.length;e++)if(this.wireRound[e](this.history[n+e])!==_s(r[this.fields[e]]))return!1;return!0}snapshotPrev(){for(let e of this.numericFields)this.prev[e]=this.local[e]+this.error[e]}adoptTruth(){let e=this.instance;for(let t of this.fields)this.local[t]=e[t]}reseedState(){let e=this.instance;for(let t of this.fields)this.local[t]=e[t];for(let e of this.numericFields)this.prev[e]=this.local[e],this.error[e]=0;this.historySeq.fill(-1)}},ys=class extends ps{worldHandle;bindings=[];curPose={};poseFields=[];customFields=[];fieldsReady=!1;poseA={};poseB={};renderPose={};poseDirty=!0;step;adopt;readPose;interpolate;constructor(e){super(e);let t=e.world;for(let e of Object.keys(t)){let n=t[e];if(typeof n!=`object`||!n)continue;if(mi(n)===void 0){if(hi(n)!==void 0)throw Error(`predict.sim(): world.${e} is a schema instance that hasn't been decoded (no refId). Pass the decoded instance from room.state (e.g. inside onAdd), or a plain object for opaque scratch.`);continue}let{fields:r,numeric:i}=yi(n);if(r.length===0)throw Error(`predict.sim(): world.${e} is a decoded ref with no scalar fields to bind. Binding a whole COLLECTION isn't supported (yet) — spread its children into world parts (one entry per entity, fixed at construction). Nest a scalar-less instance below a plain wrapper if you meant it as an opaque handle.`);let a={};for(let e of r)a[e]=n[e];t[e]=a;let o=i.map(t=>`${e}.${t}`);this.bindings.push({source:n,mirror:a,fields:r,numeric:i,poseKeys:o})}if(this.bindings.length===0&&e.adopt===void 0)throw Error(`predict.sim(): no restore point — world has no schema-bound entries and no adopt() was provided. Put decoded schema instances in world (auto-bound), or provide adopt().`);this.worldHandle=e.world,this.step=e.step,this.adopt=e.adopt,this.readPose=e.pose,this.interpolate=e.interpolate,this.refreshPose();for(let e of this.poseFields)this.prev[e]=this.curPose[e],this.error[e]=0}refreshPose(){let e=this.curPose;for(let t of this.bindings){let{mirror:n,numeric:r,poseKeys:i}=t;for(let t=0;t<r.length;t++)e[i[t]]=n[r[t]]}if(this.readPose!==void 0){let t=this.readPose(this.worldHandle);this.fieldsReady||(this.customFields=Object.keys(t));for(let n of this.customFields)e[n]=t[n]}if(!this.fieldsReady){let e=[];for(let t of this.bindings)for(let n of t.poseKeys)e.push(n);for(let t of this.customFields)e.includes(t)||e.push(t);this.poseFields=e,this.fieldsReady=!0}this.poseDirty=!0}get world(){return this.worldHandle}get boundRegistrations(){return this.bindings.map(e=>({source:e.source,fields:e.numeric,poseKeys:e.poseKeys}))}value(e){if(this.noteRenderRead(),this.interpolate)return this.pose()[e];let t=this.curPose[e]+(this.error[e]??0),n=this.prev[e]??t;return n+(t-n)*this.renderAlpha()}pose(){if(this.noteRenderRead(),!this.poseDirty)return this.renderPose;let e=this.renderAlpha(),t=this.poseA,n=this.poseB;for(let e of this.poseFields)t[e]=this.prev[e]??this.curPose[e],n[e]=this.curPose[e]+(this.error[e]??0);if(this.interpolate){let r=this.interpolate(t,n,e);for(let e of this.poseFields)this.renderPose[e]=r[e]}else for(let r of this.poseFields)this.renderPose[r]=t[r]+(n[r]-t[r])*e;return this.poseDirty=!1,this.renderPose}smoothedFields(){return this.poseFields}readCurrent(e){return this.curPose[e]}applyStep(e){this.step(this.stepCtx,this.worldHandle,e)}adoptTruth(){for(let e of this.bindings){let{source:t,mirror:n,fields:r}=e;for(let e=0;e<r.length;e++)n[r[e]]=t[r[e]]}this.adopt?.(this.worldHandle)}refreshRender(){this.refreshPose()}markDirty(){this.poseDirty=!0}snapshotPrev(){for(let e of this.poseFields)this.prev[e]=this.curPose[e]+this.error[e]}reseedState(){this.adoptTruth(),this.refreshPose();for(let e of this.poseFields)this.prev[e]=this.curPose[e],this.error[e]=0}};function bs(e,t,n,r){let i=[];if(n.field!==void 0){let r=new Map;i.push(e.onAdd(n.collection,(i,a)=>{r.has(i)||r.set(i,e.listen(i,n.field,e=>{e===n.equals&&t.confirm(a)},!1))})),i.push(e.onRemove(n.collection,e=>{r.get(e)?.(),r.delete(e)})),i.push(()=>{for(let e of r.values())e();r.clear()})}else n.event===`remove`?i.push(e.onRemove(n.collection,(e,n)=>{t.confirm(n)})):i.push(e.onAdd(n.collection,e=>{(n.mine===void 0||e[n.mine]===r?.())&&t.confirm()},!1));return()=>{for(let e of i.splice(0))e?.()}}var xs=16,Ss=0,Cs=1,ws=2,Ts=3,Es=4,Ds=5,Os=6,ks=7,As=8,js=9,Ms=41,Ns=3,Ps=1.5,Fs=250,Is=7,Ls=0,Rs=1,zs=2,Bs=3,Vs=4,Hs=5,Us=6,Ws=0,Gs=0,Ks=1,qs=2,Js=3,Ys=4,Xs=5,Zs={lerp:Gs,extrapolate:Ks,damped:qs,reckon:Js,raw:Ys},Qs={mode:`lerp`,delay:100,smoothMs:50,maxExtrapolate:200,tickInterval:0,snap:0,angle:!1},$s={step:void 0,smoothMs:50,substep:16,snap:0};function ec(e){return typeof e!=`object`||!e?!1:Array.isArray(e.fields)}var tc=0,nc=!1;function rc(){nc||(nc=!0,console.warn(`@colyseus/sdk Predict: room.clock isn't server-synced because the server room didn't call defineInput(). Server-time interpolation and lag compensation fall back to local time. Add defineInput() on the server room to enable them — or ignore this if you only need local smoothing.`))}var ic=class e{static get(t,n={}){return new e(t,n)}callbacks;sessionSource;slotBuf=new Float64Array(2624);slotCount=0;slotDetach=[];slotAngle=[];freeSlots=[];slotByRef=new Map;simByRef=new Map;boundBySlot=new Map;boundProfileIdx=-1;renderTime=0;defaultMode;reckonDefaults;clock;useRenderClock=!1;fixedStepMs;stepAcc=0;lastFrameNow=-1;static MAX_STEPS_PER_FRAME=5;profileBuf=new Float64Array(56);profileCount=0;profileKeys=new Map;profileLabels=[];profileComputers=[];trackListeners=[];name;disposeListeners=[];driven=[];constructor(e,t){this.callbacks=ri.get(e),this.sessionSource=e;let{clock:n,...r}=t;this.defaultMode=r.mode??`lerp`;let i=this.defaultMode!==`reckon`&&this.defaultMode!==`raw`,a=i?(()=>{let e=r;return{mode:e.mode??Qs.mode,delay:e.delay??Qs.delay,smoothMs:e.smoothMs??Qs.smoothMs,maxExtrapolate:e.maxExtrapolate??Qs.maxExtrapolate,tickInterval:e.tickInterval??Qs.tickInterval,snap:e.snap??Qs.snap,angle:e.angle??Qs.angle}})():{...Qs},o=i?r.smoothMs??0:0;if(this.allocProfile(this.defaultMode,a.delay,a.smoothMs,o,a.maxExtrapolate,a.tickInterval,a.snap,!1)!==Ws)throw Error(`Predict: defaults profile must be at index 0`);if(this.defaultMode===`reckon`){let e=r;this.reckonDefaults={step:e.step,smoothMs:e.smoothMs??$s.smoothMs,substep:e.substep??$s.substep,snap:e.snap??$s.snap}}else this.reckonDefaults={...$s};this.clock=n??e.clock??void 0,this.useRenderClock=r.renderPresent!==!1,this.clock===ki&&rc(),this.name=r.name??`predict#${++tc}`,ui(`predict`,this.makeCoreHandle())}get mode(){return this.defaultMode}presentFn(){let e=this.clock;if(e)return this.useRenderClock&&e.renderNow?e.renderNow.bind(e):e.serverNow.bind(e)}makeCoreHandle(){return{name:this.name,mode:()=>this.defaultMode,smoothingDefaults:()=>this.readSmoothingDefaults(),reckonDefaults:()=>({...this.reckonDefaults}),reconcilers:()=>this.snapshotReconcilers(),attachedCount:()=>this.slotByRef.size,setDefaults:e=>this.setDefaults(e),profiles:()=>this.snapshotProfiles(),setProfile:(e,t)=>this.setProfile(e,t),onTrack:e=>(this.trackListeners.push(e),()=>{let t=this.trackListeners.indexOf(e);t>=0&&this.trackListeners.splice(t,1)}),onDispose:e=>(this.disposeListeners.push(e),()=>{let t=this.disposeListeners.indexOf(e);t>=0&&this.disposeListeners.splice(t,1)})}}snapshotReconcilers(){let e=[],t=0;for(let n of this.driven){let r=n;if(!r.drift)continue;let i=r.warnTolerance;e.push({label:`reconciler #${t++}`,status:rs(r.drift,i),severity:i!==void 0&&i>0?r.drift.ema/i:void 0,ema:r.drift.ema,peak:r.drift.peak,lastCorrectionMag:r.lastCorrectionMag??0,reconcileSeq:r.reconcileSeq??0})}return e}readSmoothingDefaults(){let e=this.profileBuf,t=e[0]|0;return{mode:t===Gs?`lerp`:t===Ks?`extrapolate`:t===qs?`damped`:t===Js?`reckon`:`raw`,delay:e[1],smoothMs:e[2],lerpSmoothMs:e[6],maxExtrapolate:e[3],tickInterval:e[4],snap:e[5]}}allocProfile(e,t,n,r,i,a,o,s,c){let l=typeof e==`number`?e:Zs[e],u=``;if(s){u=`${c??``}|${l}|${t}|${n}|${r}|${i}|${a}|${o}`;let e=this.profileKeys.get(u);if(e!==void 0)return e}let d=this.profileCount++;if((d+1)*Is>this.profileBuf.length){let e=new Float64Array(this.profileBuf.length*2);e.set(this.profileBuf),this.profileBuf=e}let f=d*Is;return this.profileBuf[f+Ls]=l,this.profileBuf[f+Rs]=t,this.profileBuf[f+zs]=n,this.profileBuf[f+Us]=r,this.profileBuf[f+Bs]=i,this.profileBuf[f+Vs]=a,this.profileBuf[f+Hs]=o,this.profileLabels[d]=c,this.profileComputers[d]=this.computerForMode(l),s&&this.profileKeys.set(u,d),d}computerForMode(e){return e===Gs?this.computeLerp:e===Ks?this.computeExtrapolate:e===qs?this.computeDamped:e===Js?this.computeReckon:e===Xs?this.computeBound:this.computeRaw}profileFromOpts(e){if(e.mode===void 0&&e.delay===void 0&&e.smoothMs===void 0&&e.maxExtrapolate===void 0&&e.tickInterval===void 0&&e.snap===void 0)return Ws;let t=this.readSmoothingDefaults(),n=e.mode??t.mode,r=e.delay??t.delay,i=e.smoothMs??t.smoothMs,a=e.smoothMs??t.lerpSmoothMs,o=e.maxExtrapolate??t.maxExtrapolate,s=e.tickInterval??t.tickInterval,c=e.snap??t.snap;return n===t.mode&&r===t.delay&&i===t.smoothMs&&a===t.lerpSmoothMs&&o===t.maxExtrapolate&&s===t.tickInterval&&c===t.snap?Ws:this.allocProfile(n,r,i,a,o,s,c,!0)}groupProfile(e,t){let n=this.readSmoothingDefaults(),r=e.mode??this.defaultMode;return this.allocProfile(r,e.delay??n.delay,e.smoothMs??n.smoothMs,e.smoothMs??n.lerpSmoothMs,e.maxExtrapolate??n.maxExtrapolate,e.tickInterval??n.tickInterval,e.snap??n.snap,!0,t)}setDefaults(e){let t=e.mode;if(t!==void 0){this.defaultMode=t;let e=Zs[t];this.profileBuf[0]=e,this.profileComputers[Ws]=this.computerForMode(e)}let n=e,r=this.profileBuf;n.delay!==void 0&&(r[1]=n.delay),n.smoothMs!==void 0&&(r[2]=n.smoothMs,r[6]=n.smoothMs),n.maxExtrapolate!==void 0&&(r[3]=n.maxExtrapolate),n.tickInterval!==void 0&&(r[4]=n.tickInterval),n.snap!==void 0&&(r[5]=n.snap,this.reckonDefaults.snap=n.snap);let i=e;i.step!==void 0&&(this.reckonDefaults.step=i.step),i.smoothMs!==void 0&&(this.reckonDefaults.smoothMs=i.smoothMs),i.substep!==void 0&&(this.reckonDefaults.substep=i.substep)}snapshotProfiles(){let e=[];for(let t=0;t<this.profileCount;t++){let n=t*Is,r=this.profileBuf[n+Ls]|0;if(r===Xs)continue;let i=r===Gs?`lerp`:r===Ks?`extrapolate`:r===qs?`damped`:r===Js?`reckon`:`raw`;e.push({id:t,isDefault:t===Ws,label:this.profileLabels[t],mode:i,delay:this.profileBuf[n+Rs],smoothMs:this.profileBuf[n+(r===Gs?Us:zs)],maxExtrapolate:this.profileBuf[n+Bs],tickInterval:this.profileBuf[n+Vs],snap:this.profileBuf[n+Hs]})}return e}setProfile(e,t){if(e<0||e>=this.profileCount)return;let n=e*Is,r=this.profileBuf;if((r[n+Ls]|0)!==Xs){if(t.mode!==void 0){let i=Zs[t.mode];r[n+Ls]=i,this.profileComputers[e]=this.computerForMode(i),e===Ws&&(this.defaultMode=t.mode)}t.delay!==void 0&&(r[n+Rs]=t.delay),t.smoothMs!==void 0&&(r[n+zs]=t.smoothMs,r[n+Us]=t.smoothMs),t.maxExtrapolate!==void 0&&(r[n+Bs]=t.maxExtrapolate),t.tickInterval!==void 0&&(r[n+Vs]=t.tickInterval),t.snap!==void 0&&(r[n+Hs]=t.snap)}}dispose(){for(let e of new Set([...this.slotByRef.keys(),...this.simByRef.keys()]))this.detachByRef(e);this.trackListeners.length=0;for(let e of this.driven.splice(0))e.dispose?.();for(let e of this.disposeListeners.splice(0))e()}track(e,t,n={}){return this.trackWithProfile(e,t,this.profileFromOpts(n),n.angle??!1)}trackWithProfile(e,t,n,r=!1){let i=mi(e);if(i===void 0)throw Error(`Predict.track(): instance has no refId — track/attach must run AFTER the decoder delivers the instance (e.g. inside onAdd).`);let a=gi(e,t),o=e[t]??0,s,c=this.slotByRef.get(i)?.get(t);c!==void 0&&(s=this.boundBySlot.get(c),s===void 0?this.untrackSlot(i,t):this.freeStash(s));let l=this.allocSlot(),u=this.slotBuf,d=l*Ms;if(u[d+Ss]=o,u[d+Cs]=o,u[d+ws]=performance.now(),u[d+As]=o,u[d+Ts]=n,u[d+Es]=i,u[d+Ds]=a,u[d+Os]=0,u[d+ks]=0,this.slotAngle[l]=r,s!==void 0)s.stash=l;else{let e=this.slotByRef.get(i);e===void 0&&(e=new Map,this.slotByRef.set(i,e)),e.set(t,l)}for(let e=0;e<this.trackListeners.length;e++)this.trackListeners[e](n,t);let f=this.callbacks.listen(e,t,e=>{let t=this.clock&&this.clock.lastServerTime()>0?this.clock.lastServerTime():performance.now(),n=this.slotBuf,i=l*Ms;if(r){let t=n[i+Ss];e=t+Math.atan2(Math.sin(e-t),Math.cos(e-t))}let a=(n[i+Ts]|0)*Is,o=this.profileBuf[a+Vs],s=n[i+Os]|0,c=n[i+ks]|0,u=this.profileBuf[a+Hs];u>0&&c>0&&Math.abs(e-n[i+Ss])>u&&(s=0,c=0,n[i+Cs]=e,n[i+As]=e);let d=c===0?-1/0:n[i+js+(s===0?15:s-1)*2],f=t;if(o>0&&isFinite(d)){let e=t-d;f=d+(e>0?Math.max(1,Math.round(e/o)):1)*o;let n=t+o;f>n&&(f=n)}n[i+Ss]=e;let p=i+js;if(c>=2&&isFinite(d)){let e=s===0?15:s-1,t=d-n[p+(e===0?15:e-1)*2],r=this.clock?.patchInterval?this.clock.patchInterval():0,i=r>0?r:t,a=r>0?Ps*r:Ns*t;if(i>0&&f-d>a){let t=i<Fs?i:Fs,r=p+s*2;n[r]=f-t,n[r+1]=n[p+e*2+1],s=s+1>=xs?0:s+1,c<xs&&c++}}let m=p+s*2;n[m]=f,n[m+1]=e,n[i+Os]=s+1>=xs?0:s+1,c<xs&&(n[i+ks]=c+1)},!0);return this.slotDetach[l]=f,()=>this.untrackSlot(i,t)}untrack(e,t){let n=mi(e);n!==void 0&&this.untrackSlot(n,t)}untrackSlot(e,t){let n=this.slotByRef.get(e),r=n?.get(t);if(r===void 0)return;let i=this.boundBySlot.get(r);i===void 0?(this.slotDetach[r]?.(),this.slotDetach[r]=void 0,this.freeSlots.push(r),n.delete(t),n.size===0&&this.slotByRef.delete(e)):this.freeStash(i)}freeStash(e){e.stash<0||(this.slotDetach[e.stash]?.(),this.slotDetach[e.stash]=void 0,this.freeSlots.push(e.stash),e.stash=-1)}allocSlot(){if(this.freeSlots.length>0)return this.freeSlots.pop();let e=this.slotCount++;if((e+1)*Ms>this.slotBuf.length){let e=new Float64Array(this.slotBuf.length*2);e.set(this.slotBuf),this.slotBuf=e}return e}registerBound(e,t,n,r,i){let a=mi(t),o=this.slotByRef.get(a);o===void 0&&(o=new Map,this.slotByRef.set(a,o));let s=[];for(let c=0;c<n.length;c++){let l=n[c],u=o.get(l),d=-1;if(u!==void 0){let e=this.boundBySlot.get(u);e===void 0?d=u:(console.warn(`@colyseus/sdk Predict: "${l}" (refId ${a}) is already bound to a controller — the newer registration wins.`),d=e.stash,this.boundBySlot.delete(u),this.freeSlots.push(u))}let f=this.allocSlot(),p=this.slotBuf,m=f*Ms,h=t[l]??0;p[m+Ss]=h,p[m+Cs]=h,p[m+ws]=0,p[m+As]=h,p[m+Ts]=i,p[m+Es]=a,p[m+Ds]=gi(t,l),p[m+Os]=0,p[m+ks]=0,this.slotAngle[f]=!1,this.boundBySlot.set(f,{ctrl:e,key:r[c],stash:d}),o.set(l,f),s.push(f);for(let e=0;e<this.trackListeners.length;e++)this.trackListeners[e](i,l)}return()=>{for(let t=0;t<s.length;t++){let r=s[t],i=this.boundBySlot.get(r);if(i===void 0||i.ctrl!==e)continue;this.boundBySlot.delete(r),this.freeSlots.push(r);let o=this.slotByRef.get(a);o?.get(n[t])===r&&(i.stash>=0?o.set(n[t],i.stash):(o.delete(n[t]),o.size===0&&this.slotByRef.delete(a)))}}}installBoundOverlay(e){let t=[];for(let n of e.boundRegistrations)n.fields.length!==0&&mi(n.source)!==void 0&&(this.boundProfileIdx<0&&(this.boundProfileIdx=this.allocProfile(Xs,0,0,0,0,0,0,!1,`bound`)),t.push(this.registerBound(e,n.source,n.fields,n.poseKeys,this.boundProfileIdx)));t.length>0&&e.onDisposed(()=>{for(let e of t)e()})}trackStepped(e,t){let n=t.substep??16,r=t.fields,i=r.map(t=>gi(e,t)),a=t.step,o=this.clock,s=this.presentFn(),c=t.forwardMs??(s?()=>{let e=o.lastServerTime();return e>0?Math.max(0,s()-e):0}:()=>0),l=t.elapsedMs??s??(()=>performance.now()),u=e[pi],d=t.snapshot===void 0&&Array.isArray(u)&&i.every(e=>e>=0&&e<u.length),f;if(d){let t=new e.constructor,r=t[pi];f=(e,o,s,c)=>{let l=e[pi];for(let e=0;e<l.length;e++)r[e]=l[e];let u=o,d=c-o;for(;u>0;){let e=u<n?u:n;d+=e,a(t,e/1e3,d),u-=e}for(let e=0;e<i.length;e++)s[e]=r[i[e]]}}else{let i=_i(e),o=t.snapshot??(i.length>0?wi(i):e=>({...e})),s=[...r];f=(e,t,r,i)=>{let c=o(e),l=t,u=i-t;for(;l>0;){let e=l<n?l:n;u+=e,a(c,e/1e3,u),l-=e}for(let e=0;e<s.length;e++)r[e]=c[s[e]]}}return this.trackSimulated(e,{fields:r,forwardMs:c,elapsedMs:l,smoothMs:t.smoothMs,snap:t.snap,advance:f})}trackSimulated(e,t){let n=mi(e);if(n===void 0)throw Error(`Predict.trackStepped(): instance has no refId — must run AFTER the decoder delivers the instance (e.g. inside onAdd).`);let r=t.fields,i=r.length,a=r.map(t=>gi(e,t)),o=0;for(let e of a)e>o&&(o=e);let s=new Int8Array(o+1).fill(-1);for(let e=0;e<i;e++)a[e]>=0&&(s[a[e]]=e);let c=new Float64Array(i);for(let t=0;t<i;t++)c[t]=e[r[t]]??0;let l=this.presentFn(),u=t.elapsedMs??l??(()=>performance.now()),d={instance:e,fieldIds:a,posOf:s,forwardMs:t.forwardMs,elapsedMs:u,advance:t.advance,smoothMs:t.smoothMs??50,snap:t.snap??0,smoothed:c,out:new Float64Array(i),valueOut:new Float64Array(i),offset:new Float64Array(i),outPrev:new Float64Array(i),frameVel:new Float64Array(i),lastBaseT:NaN,lastApplyTime:-1/0};return this.simByRef.set(n,d),()=>this.untrackSimulated(n)}untrackSimulated(e){this.simByRef.delete(e)}attach(e,t){let n=this.makeGroup(`(attach)`,t);return this.attachWithPlan(e,this.planFor(n,e))}makeGroup(e,t){return{label:e,config:t,basePlan:this.buildGroupPlan(t,e),planByCtor:new Map}}planFor(e,t){let n=t.constructor,r=e.planByCtor.get(n);return r===void 0&&(r=this.resolveCtorPlan(e,t),e.planByCtor.set(n,r)),r}resolveCtorPlan(e,t){let n=hi(t),r=t.constructor?.name||`?`,i=e.config;if(!ec(i)){if(n===void 0)return e.basePlan;let t=Object.keys(i).filter(e=>i[e]!==void 0);if(t.every(e=>typeof n[e]==`number`))return e.basePlan;let a={};for(let e of t)typeof n[e]==`number`&&(a[e]=i[e]);return this.buildGroupPlan(a,`${e.label}:${r}`)}let a=i,o=a.fields;if(n!==void 0){let e=o.filter(e=>typeof n[e]==`number`);e.length!==o.length&&(o=e)}return o===a.fields?e.basePlan:this.buildGroupPlan({...a,fields:o},`${e.label}:${r}`)}buildGroupPlan(e,t){let n=[];if(ec(e)){let r=e;if(!Array.isArray(r.fields))throw Error("Predict.attach(): `fields` must be a numeric-key array.");let i=r.mode??this.defaultMode,a=r.step??this.reckonDefaults.step,o=i===`reckon`;if(o&&typeof a!=`function`)throw Error("Predict.attach(): reckon mode requires a 'step' function. Either pass `step` in the attach config OR construct the Predict with `Predict.get(room, { mode: 'reckon', step: yourStepFn })` so it can be inherited.");let s=this.groupProfile({mode:i,snap:r.snap,smoothMs:r.smoothMs},t);for(let e of r.fields)n.push({field:e,profileIdx:s,angle:r.angle});return{label:t,isReckon:o,reckonFields:o?r.fields:void 0,reckonStep:o?a:void 0,reckonSmoothMs:r.smoothMs??this.reckonDefaults.smoothMs,reckonSubstep:r.substep??this.reckonDefaults.substep,reckonSnap:r.snap??this.reckonDefaults.snap,reckonSnapshot:r.snapshot,fieldProfiles:n}}let r=e;for(let e of Object.keys(r)){let i=r[e];if(i===void 0)continue;let a=typeof i==`string`?{mode:i}:i;n.push({field:e,profileIdx:this.groupProfile(a,t),angle:a.angle})}return{label:t,isReckon:!1,fieldProfiles:n}}attachToGroup(e,t,n){let r=[];t.isReckon&&r.push(this.trackStepped(e,{fields:t.reckonFields,step:t.reckonStep,smoothMs:t.reckonSmoothMs,substep:t.reckonSubstep,snap:t.reckonSnap,snapshot:t.reckonSnapshot,forwardMs:n}));for(let{field:n,profileIdx:i,angle:a}of t.fieldProfiles)r.push(this.trackWithProfile(e,n,i,!!a));return()=>{for(let e of r)e()}}attachWithPlan(e,t){let n=mi(e);if(n===void 0)throw Error(`Predict.attach(): instance has no refId — attach must run AFTER the decoder delivers the instance (e.g. inside onAdd).`);return this.attachToGroup(e,t),()=>this.detachByRef(n)}detach(e){let t=mi(e);t!==void 0&&this.detachByRef(t)}detachByRef(e){let t=this.slotByRef.get(e);if(t){for(let n of[...t.keys()]){let r=t.get(n);if(r===void 0)continue;let i=this.boundBySlot.get(r);i===void 0?this.untrackSlot(e,n):(this.freeStash(i),this.boundBySlot.delete(r),this.freeSlots.push(r),t.delete(n))}t.size===0&&this.slotByRef.delete(e)}this.simByRef.delete(e)}attachAll(...e){let t=typeof e[0]==`string`,n=t?void 0:e[0],r=t?e[0]:e[1],i=t?e[1]:e[2],a=this.makeGroup(r,i),o=new Set,s=e=>{this.attachWithPlan(e,this.planFor(a,e)),o.add(e)},c=e=>{o.delete(e),this.detach(e)},l=t?this.callbacks.onAdd(r,s):this.callbacks.onAdd(n,r,s),u=t?this.callbacks.onRemove(r,c):this.callbacks.onRemove(n,r,c);return()=>{l?.(),u?.();for(let e of o)this.detach(e);o.clear()}}tick(t=performance.now()){this.renderTime=t;let n=0,r=this.fixedStepMs;if(r!==void 0&&r>0){let i=this.lastFrameNow<0?0:t-this.lastFrameNow;this.stepAcc+=i,n=Math.floor(this.stepAcc/r),n>e.MAX_STEPS_PER_FRAME?(this.stepAcc=0,n=e.MAX_STEPS_PER_FRAME):this.stepAcc-=n*r}this.lastFrameNow=t;let i=this.driven,a=0;for(let e=0;e<i.length;e++){let n=i[e];n.dead||(n.tick?.(t),n.prune?.(),a!==e&&(i[a]=n),a++)}return a!==i.length&&(i.length=a),n}defineEvent(e){let{confirmOn:t,...n}=e,r=new hs(n,this.clock??null);if(t!==void 0){if(t.mine!==void 0&&typeof this.sessionSource.sessionId!=`string`)throw Error(`Predict.defineEvent: confirmOn.mine ("${t.mine}") requires a Predict built from a Room (it compares against room.sessionId); confirm manually instead.`);r._addTeardown(bs(this.callbacks,r,t,()=>this.sessionSource.sessionId))}return this.driven.push(r),r}spawns(e,t={}){let n=new gs(t,this.clock??null),r=t.fields,i=t.step,a=r!==void 0&&i!==void 0?this.makeGroup(String(e),{mode:`reckon`,fields:r,step:i,smoothMs:t.smoothMs??0,substep:t.substep}):void 0,o=a===void 0?void 0:new Map,s=this.clock;return n.attach((t,r)=>{let i=this.callbacks.onAdd(e,(e,r)=>{if(t(e,r),a===void 0||o.has(e))return;let i=n.entryFor(e)?.leadMs??0,c=s?()=>{let e=s.lastServerTime(),t=e>0?Math.max(0,s.serverNow()-e):0;return Math.max(0,t+i)}:()=>Math.max(0,i);o.set(e,this.attachToGroup(e,this.planFor(a,e),c))}),c=this.callbacks.onRemove(e,(e,t)=>{o?.get(e)?.(),o?.delete(e),r(e,t)});return()=>{if(i?.(),c?.(),o!==void 0){for(let e of o.values())e();o.clear()}}}),a!==void 0&&n.bindReader((e,t)=>this.value(e,t)),this.driven.push(n),n}canonicalDelay(){return this.profileBuf[1]}bindInputRenderDelay(e){e instanceof Oi&&e.bindRenderDelay(()=>this.canonicalDelay())}reconciler(e,t){let n=new vs(e,{...t,clock:t.clock??this.clock});return this.adoptFixedStep(n.stepMs),this.bindInputRenderDelay(t.input),this.installBoundOverlay(n),this.driven.push(n),n}sim(e){let t=new ys({...e,clock:e.clock??this.clock});return this.adoptFixedStep(t.stepMs),this.bindInputRenderDelay(e.input),this.installBoundOverlay(t),this.driven.push(t),t}adoptFixedStep(e){this.fixedStepMs===void 0?(this.fixedStepMs=e,this.stepAcc=0,this.lastFrameNow=-1):Math.abs(this.fixedStepMs-e)>1e-6&&console.warn(`@colyseus/sdk Predict: a reconciler's fixed step (${e}ms) differs from this Predict's (${this.fixedStepMs}ms). tick() paces one rate for the whole room; use a separate Predict per rate.`)}value(e,t){let n=mi(e),r=n===void 0?void 0:this.slotByRef.get(n)?.get(t);if(r===void 0)return e[t];let i=this.slotBuf[r*Ms+Ts]|0;return this.profileComputers[i](r)}valueAt(e,t,n){let r=mi(e),i=r===void 0?void 0:this.slotByRef.get(r)?.get(t);if(i===void 0)return e[t];let a=i*Ms,o=this.slotBuf[a+Ts]|0;if(this.profileComputers[o]!==this.computeReckon)return this.profileComputers[o](i);let s=this.simByRef.get(this.slotBuf[a+Es]);if(s!==void 0){let e=this.slotBuf[a+Ds]|0,t=e<s.posOf.length?s.posOf[e]:-1;if(t>=0){let e=this.clock?.lastServerTime?.()??NaN,r=Number.isNaN(e)?0:Math.max(0,n-e);return s.advance(s.instance,r,s.valueOut,n),s.valueOut[t]}}return this.slotBuf[a+Ss]}read(e,t,n){let r=n??{},i=mi(e),a=i===void 0?void 0:this.slotByRef.get(i);for(let n=0;n<t.length;n++){let i=t[n],o=a?.get(i);r[i]=o===void 0?e[i]:this.profileComputers[this.slotBuf[o*Ms+Ts]|0](o)}return r}readAt(e,t,n,r){let i=r??{},a=mi(e),o=a===void 0?void 0:this.slotByRef.get(a),s,c=!1;for(let r=0;r<t.length;r++){let a=t[r],l=o?.get(a);if(l===void 0){i[a]=e[a];continue}let u=l*Ms,d=this.slotBuf[u+Ts]|0;if(this.profileComputers[d]!==this.computeReckon)i[a]=this.profileComputers[d](l);else{if(!c&&(c=!0,s=this.simByRef.get(this.slotBuf[u+Es]),s!==void 0)){let e=this.clock?.lastServerTime?.()??NaN,t=Number.isNaN(e)?0:Math.max(0,n-e);s.advance(s.instance,t,s.valueOut,n)}if(s!==void 0){let e=this.slotBuf[u+Ds]|0,t=e<s.posOf.length?s.posOf[e]:-1;if(t>=0){i[a]=s.valueOut[t];continue}}i[a]=this.slotBuf[u+Ss]}}return i}computeDamped=e=>{let t=this.slotBuf,n=e*Ms,r=this.profileBuf,i=(t[n+Ts]|0)*Is,a=this.renderTime,o=t[n+Ss],s=a-t[n+ws];t[n+ws]=a;let c=t[n+Cs];if(s>0){let e=r[i+zs],a=e>0?1-Math.exp(-s/e):1;c+=(o-c)*a,t[n+Cs]=c}return c};computeLerp=e=>{let t=this.computeLerpRaw(e),n=this.slotBuf,r=e*Ms,i=this.profileBuf[(n[r+Ts]|0)*Is+Us],a=this.renderTime;if(i<=0)return n[r+Cs]=t,n[r+As]=t,n[r+ws]=a,t;let o=a-n[r+ws];if(o<=0)return n[r+Cs];let s=n[r+As],c=n[r+Cs],l=o/i,u=(t-s)/l,d=t-u+(c-s+u)*Math.exp(-l);return n[r+Cs]=d,n[r+As]=t,n[r+ws]=a,d};computeLerpRaw(e){let t=this.slotBuf,n=e*Ms,r=this.profileBuf,i=(t[n+Ts]|0)*Is,a=this.renderTime,o=t[n+ks]|0;if(o===0)return t[n+Ss];let s=t[n+Os]|0,c=n+js,l=(s-o+xs)%xs,u=c+(l+o-1)%xs*2;if(o===1)return t[u+1];let d=r[i+Rs],f=this.clock&&this.clock.lastServerTime()>0?this.clock.serverNow()-d-this.clock.smoothedRtt()/2:a-d,p=c+l*2;if(f<=t[p])return t[p+1];if(f>=t[u])return t[u+1];let m=o-2,h=(l+m)%xs;for(;m>0&&!(t[c+h*2]<=f);)m--,h=h===0?15:h-1;let g=c+h*2,_=c+(h+1>=xs?0:h+1)*2,v=t[g],y=t[_]-v;if(y<=0)return t[_+1];let b=(f-v)/y,x=t[g+1];return x+(t[_+1]-x)*b}computeExtrapolate=e=>{let t=this.slotBuf,n=e*Ms,r=this.profileBuf,i=(t[n+Ts]|0)*Is,a=this.renderTime,o=t[n+ks]|0;if(o===0)return t[n+Ss];let s=t[n+Os]|0,c=n+js,l=(s-o+xs)%xs,u=c+(l+o-1)%xs*2,d=t[u],f=t[u+1],p;if(o===1)p=f;else{let e=o>=3?2:1,n=c+(l+o-1-e+xs)%xs*2,s=t[n],u=t[n+1],m=d-s;if(m<=0)p=f;else{let e=(f-u)/m,t=r[i+Bs],n=a-d;n<0?n=0:n>t&&(n=t),p=f+e*n}}let m=t[n+ws];t[n+ws]=a;let h=r[i+zs];if(h<=0)return t[n+Cs]=p,p;let g=a-m,_=t[n+Cs];if(g>0){let e=1-Math.exp(-g/h);_+=(p-_)*e,t[n+Cs]=_}return _};computeReckon=e=>{let t=this.slotBuf,n=e*Ms,r=t[n+Es],i=t[n+Ds]|0,a=this.simByRef.get(r);if(a!==void 0){let e=i<a.posOf.length?a.posOf[i]:-1;if(e>=0)return this.applySimulation(a,e)}return t[n+Ss]};computeRaw=e=>this.slotBuf[e*Ms+Ss];computeBound=e=>{let t=this.boundBySlot.get(e);return t===void 0?this.slotBuf[e*Ms+Ss]:t.ctrl.value(t.key)};applySimulation(e,t){let n=this.renderTime;if(e.lastApplyTime!==n){let t=e.out,r=e.smoothed,i=e.offset,a=r.length,o=this.clock?.lastServerTime?.()??NaN;if(e.advance(e.instance,e.forwardMs(),t,e.elapsedMs()),e.lastApplyTime===-1/0||e.smoothMs<=0)for(let e=0;e<a;e++)i[e]=0,r[e]=t[e];else if(Number.isNaN(o)){let i=Math.max(0,Math.min(n-e.lastApplyTime,100)),o=1-Math.exp(-i/e.smoothMs);for(let e=0;e<a;e++)r[e]+=(t[e]-r[e])*o}else{let s=Math.max(0,Math.min(n-e.lastApplyTime,100));if(o!==e.lastBaseT&&!Number.isNaN(e.lastBaseT)){let n=e.snap,o=e.frameVel;for(let e=0;e<a;e++){let a=r[e]+o[e]*s-t[e];i[e]=n>0&&Math.abs(a)>n?0:a}}else if(s>0){let n=e.outPrev,r=e.frameVel;for(let e=0;e<a;e++)r[e]=(t[e]-n[e])/s}let c=Math.exp(-s/e.smoothMs);for(let e=0;e<a;e++)i[e]*=c,r[e]=t[e]+i[e]}let s=e.outPrev;for(let e=0;e<a;e++)s[e]=t[e];e.lastBaseT=o,e.lastApplyTime=n}return e.smoothed[t]}};yo(`schema`,To),yo(`none`,qo);var ac=e=>Math.round(e*1e3/30),oc={sandal:0,viking:1,english:2,jonka:3,merchant:4},sc={ball:0,arrow:1,axe:2,rocket:3},lc={[sc.ball]:{speed:42,radius:.7},[sc.arrow]:{speed:38,radius:.6},[sc.axe]:{speed:32,radius:.8},[sc.rocket]:{speed:46,radius:.8}},uc={fullSalvo:0,rocketRain:1,berserk:2},dc=Math.PI/180,fc={[oc.sandal]:{label:`Sandal`,maxHp:60,radius:2.4,handling:{maxSpeed:15,accel:60,decel:30,turnRate:8,turnThrottle:.55},weapon:{projectile:sc.ball,count:1,spread:0,range:26,damage:9,reload:1,interval:.35,muzzle:2.6},ram:.5,super:null},[oc.viking]:{label:`Viking`,maxHp:120,radius:2.8,handling:{maxSpeed:17,accel:70,decel:32,turnRate:9,turnThrottle:.6},weapon:{projectile:sc.axe,count:3,spread:40*dc,range:15,damage:8,reload:.75,interval:.3,muzzle:2.8},ram:2.2,super:{kind:uc.berserk,projectile:sc.axe,count:0,spread:0,range:0,damage:0}},[oc.english]:{label:`İngiliz`,maxHp:140,radius:3.2,handling:{maxSpeed:12.5,accel:45,decel:24,turnRate:6,turnThrottle:.5},weapon:{projectile:sc.ball,count:3,spread:9*dc,range:34,damage:11,reload:1.5,interval:.5,muzzle:3.2},ram:.6,super:{kind:uc.fullSalvo,projectile:sc.ball,count:12,spread:70*dc,range:40,damage:12}},[oc.jonka]:{label:`Jonka`,maxHp:110,radius:2.9,handling:{maxSpeed:14.5,accel:58,decel:28,turnRate:7.5,turnThrottle:.55},weapon:{projectile:sc.arrow,count:5,spread:36*dc,range:23,damage:5,reload:1,interval:.4,muzzle:3},ram:.6,super:{kind:uc.rocketRain,projectile:sc.rocket,count:8,spread:26*dc,range:46,damage:7}},[oc.merchant]:{label:`Tüccar`,maxHp:60,radius:3,handling:{maxSpeed:10,accel:30,decel:16,turnRate:4,turnThrottle:.5},weapon:null,ram:.3,super:null}},pc=1e3,mc=pc*3,hc=1.1,gc=2.3;function _c(e){return fc[e]??fc[oc.sandal]}var vc=[{x:92,y:96,r:14},{x:228,y:78,r:10},{x:160,y:168,r:18},{x:74,y:236,r:11},{x:246,y:238,r:15}];function yc(e,t,n,r,i){let a=i;for(let i of vc){let o=e-i.x,s=t-i.y,c=o*n+s*r,l=o*o+s*s-i.r*i.r;if(l<=0)return 0;let u=c*c-l;if(c>0||u<0)continue;let d=-c-Math.sqrt(u);d<a&&(a=d)}return a}var bc=Math.round(hc*30),xc=.85,Sc=Math.PI*2,Cc=256,wc=(e,t,n)=>e<t?t:e>n?n:e;function Tc(e){return e=(e+Math.PI)%Sc,e<0&&(e+=Sc),e-Math.PI}function Ec(e){return Sc/Cc*e}function Dc(e){let t=Math.round(e/Sc*Cc)%Cc;return t<0?t+Cc:t}function Oc(e,t){return Math.max(1,Math.round(pc*t/(100*e.reload*30)))}function kc(e,t,n){return e<t?Math.min(e+n,t):Math.max(e-n,t)}function Ac(e,t,n){let r=_c(e.kind),i=r.handling,a=Ec(t.aim??0),o=0;t.act&&r.super&&e.charge>=100&&(e.charge-=100,e.shots=e.shots+1&255,o|=2,r.super.kind===uc.berserk&&(e.boostTicks=bc,e.heading+=Tc(a-e.heading)));let s=r.weapon;s&&(e.fireCd>0&&e.fireCd--,e.ammo<3e3&&(e.ammo=Math.min(mc,e.ammo+Oc(s,e.reloadPct))),t.fire&&e.fireCd===0&&e.ammo>=1e3&&(e.ammo-=pc,e.fireCd=Math.round(s.interval*30),e.shots=e.shots+1&255,o|=1));let c=e.boostTicks>0,l=i.maxSpeed*(e.speedPct/100)*(c?gc:1),u=t.dirX/100,d=t.dirY/100,f=Math.min(1,Math.hypot(u,d)),p=c?l:0;if(!c&&f>.12){let t=Tc(Math.atan2(d,u)-e.heading),r=i.turnRate*n,a=wc(t,-r,r);e.heading+=a;let o=Math.max(0,Math.cos(t-a));p=l*f*(i.turnThrottle+(1-i.turnThrottle)*o)}let m=p>e.speed?i.accel*(c?4:1):i.decel;e.speed=kc(e.speed,p,m*n),c&&e.boostTicks--;let h=wc(e.x+Math.cos(e.heading)*e.speed*n,4,316),g=wc(e.y+Math.sin(e.heading)*e.speed*n,4,316);for(let t of vc){let n=h-t.x,i=g-t.y,a=t.r+r.radius*.8,o=n*n+i*i;if(o<a*a){let r=Math.sqrt(o)||1e-6;h=t.x+n/r*a,g=t.y+i/r*a,e.speed*=xc}}return e.x=h,e.y=g,o}function jc(e,t){let n=_c(e.kind).weapon;if(!n)return null;let r=n.count+e.extraShots,i=n.count>1?n.spread*(r/n.count):n.spread;return{kind:n.projectile,range:n.range*(e.rangePct/100),shots:Nc(e,t,r,i,n.muzzle)}}function Mc(e,t){let n=_c(e.kind),r=n.super;return!r||r.kind===uc.berserk?null:{kind:r.projectile,range:r.range*(e.rangePct/100),shots:Nc(e,t,r.count,r.spread,n.radius)}}function Nc(e,t,n,r,i){let a=[];for(let o=0;o<n;o++){let s=t+(n>1?r*(o/(n-1)-.5):0);a.push(e.x+Math.cos(s)*i,e.y+Math.sin(s)*i,s)}return a}var Pc=[0,0,12,35,65,105,155,215,285,365,455,555,665,785,915,1055],Fc=Pc.length-1;function Ic(e){return Pc[Math.min(Math.max(e,1),Fc)]}var Lc=[`A`,`B`,`C`];function Rc(e){return e+2}var zc=[oc.viking,oc.english,oc.jonka];function Bc(e){return zc.includes(e)}var Vc=(e,t,n)=>({title:e,text:t,apply:n}),Hc=(e,t)=>Vc(e,`+%${t} can`,e=>{e.hpMul+=t/100}),Uc=(e,t)=>Vc(e,`+%${t} hasar`,e=>{e.damageMul+=t/100}),Wc=(e,t)=>Vc(e,`+%${t} hız`,e=>{e.speedPct+=t}),Gc=(e,t)=>Vc(e,`+%${t} menzil`,e=>{e.rangeMul+=t/100}),Kc=e=>Vc(e,`Cephane %15 hızlı dolar`,e=>{e.cooldownMul*=.85}),qc=(e,t)=>Vc(e,`Süper %${t} hızlı dolar`,e=>{e.chargeMul+=t/100}),Jc=e=>Vc(e,`Saniyede 3 can onarır`,e=>{e.regen+=3}),Yc=e=>Vc(e,`Alınan hasar −%10`,e=>{e.armor+=.1}),Xc=e=>Vc(e,`Verdiğin hasarın %12'si can olur`,e=>{e.lifesteal+=.12}),Zc=e=>Vc(e,`Süper hasarı +%30`,e=>{e.superMul+=.3}),Qc=(e,t,n)=>Vc(e,`+${t} ${n}`,e=>{e.extraProjectiles+=t}),$c=(e,t)=>Vc(e,`+%${t} çarpma hasarı`,e=>{e.ramMul+=t/100}),el={[oc.viking]:[[Hc(`Kalın Kalkanlar`,20),Uc(`Keskin Baltalar`,15),Wc(`Kürekçiler`,8)],[$c(`Demir Mahmuz`,40),Qc(`Çift Balta`,1,`balta`),Kc(`Hızlı Kollar`)],[qc(`Savaş Narası`,25),Xc(`Kan Dökücü`),Yc(`Zırhlı Pruva`)],[Hc(`Ağır Gövde`,25),Gc(`Uzun Sap`,15),Wc(`Rüzgâr Ruhu`,10)],[Jc(`Usta Tayfa`),Uc(`Ölümcül Baltalar`,20),$c(`Koç Başı`,60)],[Hc(`Ejder Kanı`,30),Qc(`Balta Yağmuru`,2,`balta`),qc(`Öfke`,35)]],[oc.english]:[[Hc(`Meşe Gövde`,20),Uc(`Ağır Gülle`,15),Gc(`Dürbün`,15)],[Qc(`Ek Top`,1,`gülle`),Kc(`Hızlı Dolum`),Yc(`Bakır Kaplama`)],[qc(`Talimli Topçular`,25),Jc(`Usta Tayfa`),Wc(`Yelken Takımı`,10)],[Hc(`Kale Gövde`,25),Uc(`Zincirli Gülle`,20),Gc(`Gözcü Kulesi`,15)],[Zc(`Barut Fıçıları`),Qc(`Ek Top II`,1,`gülle`),Kc(`Hızlı Dolum II`)],[Hc(`Amiral Gemisi`,30),Uc(`Ağır Salvo`,20),Qc(`Çifte Batarya`,2,`gülle`)]],[oc.jonka]:[[Hc(`Bambu Zırh`,20),Uc(`Ateşli Oklar`,15),Wc(`Yelpaze Yelken`,8)],[Qc(`Geniş Yelpaze`,2,`ok`),Kc(`Hızlı Dolum`),Gc(`Uzun Yay`,15)],[qc(`Ejder Ruhu`,25),Jc(`Şifacı`),Wc(`Kaçak Rüzgâr`,10)],[Hc(`Lake Gövde`,25),Uc(`Yanıcı Reçine`,20),Xc(`Can Çalan Oklar`)],[Zc(`Roket Ustası`),Qc(`Geniş Yelpaze II`,2,`ok`),Yc(`Bambu Kalkan`)],[Hc(`İmparator Jonkası`,30),Uc(`Ateş Fırtınası`,20),Kc(`Hızlı Dolum II`)]]},tl=Vc(`Tecrübe`,`+%5 can, +%3 hasar`,e=>{e.hpMul+=.05,e.damageMul+=.03});function nl(){return[,,,,,,].fill(0)}function rl(e){let t=nl();if(!Array.isArray(e))return t;for(let n=0;n<6;n++){let r=Number(e[n]);Number.isInteger(r)&&r>=0&&r<=2&&(t[n]=r)}return t}function il(e,t,n){if(n<2||!Bc(e))return null;let r=n-2;return r>=6?tl:el[e][r][t[r]??0]}var al=1e3,ol=1001,sl=1002,cl=1003,ll=1004,ul=1005,dl=1006,fl=1007,pl=1008,ml=1009,hl=1010,gl=1011,_l=1012,vl=1013,yl=1014,bl=1015,xl=1016,Sl=1017,Cl=1018,wl=1020,Tl=35902,El=35899,Dl=1021,Ol=1022,kl=1023,Al=1026,jl=1027,Ml=1028,Nl=1029,Pl=1030,Fl=1031,Il=1033,Ll=33776,Rl=33777,zl=33778,Bl=33779,Vl=35840,Hl=35841,Ul=35842,Wl=35843,Gl=36196,Kl=37492,ql=37496,Jl=37488,Yl=37489,Xl=37490,Zl=37491,Ql=37808,$l=37809,eu=37810,tu=37811,nu=37812,ru=37813,iu=37814,au=37815,ou=37816,su=37817,cu=37818,lu=37819,uu=37820,du=37821,fu=36492,pu=36494,mu=36495,hu=36283,gu=36284,_u=36285,vu=36286,yu=2300,bu=2301,xu=2302,Su=2303,Cu=2400,wu=2401,Tu=2402,Eu=3200,Du=`srgb`,Ou=`srgb-linear`,ku=`linear`,Au=`srgb`,ju=7680,Mu=35044,Nu=35048,Pu=2e3;function Fu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Iu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Lu(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ru(){let e=Lu(`canvas`);return e.style.display=`block`,e}var zu={};function Bu(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Vu(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function q(...e){e=Vu(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function J(...e){e=Vu(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Hu(...e){let t=e.join(` `);t in zu||(zu[t]=!0,q(...e))}function Uu(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Wu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Gu=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ku=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),qu=Math.PI/180,Ju=180/Math.PI;function Yu(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ku[e&255]+Ku[e>>8&255]+Ku[e>>16&255]+Ku[e>>24&255]+`-`+Ku[t&255]+Ku[t>>8&255]+`-`+Ku[t>>16&15|64]+Ku[t>>24&255]+`-`+Ku[n&63|128]+Ku[n>>8&255]+`-`+Ku[n>>16&255]+Ku[n>>24&255]+Ku[r&255]+Ku[r>>8&255]+Ku[r>>16&255]+Ku[r>>24&255]).toLowerCase()}function Xu(e,t,n){return Math.max(t,Math.min(n,e))}function Zu(e,t){return(e%t+t)%t}function Qu(e,t,n){return(1-n)*e+n*t}function $u(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ed(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Y=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xu(this.x,e.x,t.x),this.y=Xu(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xu(this.x,e,t),this.y=Xu(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xu(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},td=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:q(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xu(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xu(this.x,e.x,t.x),this.y=Xu(this.y,e.y,t.y),this.z=Xu(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xu(this.x,e,t),this.y=Xu(this.y,e,t),this.z=Xu(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xu(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nd=new X,rd=new td,Z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Hu(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(id.makeScale(e,t)),this}rotate(e){return Hu(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(id.makeRotation(-e)),this}translate(e,t){return Hu(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},id=new Z,ad=new Z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new Z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sd(){let e={enabled:!0,workingColorSpace:Ou,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ld(e.r),e.g=ld(e.g),e.b=ld(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ud(e.r),e.g=ud(e.g),e.b=ud(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ku:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Hu(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Hu(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ou]:{primaries:t,whitePoint:r,transfer:ku,toXYZ:ad,fromXYZ:od,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Du},outputColorSpaceConfig:{drawingBufferColorSpace:Du}},[Du]:{primaries:t,whitePoint:r,transfer:Au,toXYZ:ad,fromXYZ:od,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Du}}}),e}var cd=sd();function ld(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ud(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var dd,fd=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dd===void 0&&(dd=Lu(`canvas`)),dd.width=e.width,dd.height=e.height;let t=dd.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=dd}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Lu(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ld(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ld(t[e]/255)*255):t[e]=ld(t[e]);return{data:t,width:e.width,height:e.height}}return q(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},pd=0,md=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Yu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(hd(r[t].image)):e.push(hd(r[t]))}else e=hd(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function hd(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?fd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(q(`Texture: Unable to serialize Texture.`),{})}var gd=0,_d=new X,vd=class e extends Gu{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ol,i=ol,a=dl,o=pl,s=kl,c=ml,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Yu(),this.name=``,this.source=new md(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){q(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case al:e.x-=Math.floor(e.x);break;case ol:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case al:e.y-=Math.floor(e.y);break;case ol:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vd.DEFAULT_IMAGE=null,vd.DEFAULT_MAPPING=300,vd.DEFAULT_ANISOTROPY=1;var yd=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xu(this.x,e.x,t.x),this.y=Xu(this.y,e.y,t.y),this.z=Xu(this.z,e.z,t.z),this.w=Xu(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xu(this.x,e,t),this.y=Xu(this.y,e,t),this.z=Xu(this.z,e,t),this.w=Xu(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bd=class extends Gu{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dl,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yd(0,0,e,t),this.scissorTest=!1,this.viewport=new yd(0,0,e,t),this.textures=[];let r=new vd({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dl,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new md(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},xd=class extends bd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sd=class extends vd{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cl,this.minFilter=cl,this.wrapR=ol,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Cd=class extends vd{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cl,this.minFilter=cl,this.wrapR=ol,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},wd=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Td.setFromMatrixColumn(e,0).length(),i=1/Td.setFromMatrixColumn(e,1).length(),a=1/Td.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dd,e,Od)}lookAt(e,t,n){let r=this.elements;return jd.subVectors(e,t),jd.lengthSq()===0&&(jd.z=1),jd.normalize(),kd.crossVectors(n,jd),kd.lengthSq()===0&&(Math.abs(n.z)===1?jd.x+=1e-4:jd.z+=1e-4,jd.normalize(),kd.crossVectors(n,jd)),kd.normalize(),Ad.crossVectors(jd,kd),r[0]=kd.x,r[4]=Ad.x,r[8]=jd.x,r[1]=kd.y,r[5]=Ad.y,r[9]=jd.y,r[2]=kd.z,r[6]=Ad.z,r[10]=jd.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*P,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*P,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*P,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Td.set(r[0],r[1],r[2]).length(),o=Td.set(r[4],r[5],r[6]).length(),s=Td.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ed.copy(this);let c=1/a,l=1/o,u=1/s;return Ed.elements[0]*=c,Ed.elements[1]*=c,Ed.elements[2]*=c,Ed.elements[4]*=l,Ed.elements[5]*=l,Ed.elements[6]*=l,Ed.elements[8]*=u,Ed.elements[9]*=u,Ed.elements[10]*=u,t.setFromRotationMatrix(Ed),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Pu,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Pu,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Td=new X,Ed=new wd,Dd=new X(0,0,0),Od=new X(1,1,1),kd=new X,Ad=new X,jd=new X,Md=new wd,Nd=new td,Pd=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Xu(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Xu(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Xu(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Xu(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Xu(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Xu(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:q(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pd.DEFAULT_ORDER=`XYZ`;var Fd=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Id=0,Ld=new X,Rd=new td,zd=new wd,Bd=new X,Vd=new X,Hd=new X,Ud=new td,Wd=new X(1,0,0),Gd=new X(0,1,0),Kd=new X(0,0,1),qd={type:`added`},Jd={type:`removed`},Yd={type:`childadded`,child:null},Xd={type:`childremoved`,child:null},Zd=class e extends Gu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Yu(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new Pd,r=new td,i=new X(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wd},normalMatrix:{value:new Z}}),this.matrix=new wd,this.matrixWorld=new wd,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rd.setFromAxisAngle(e,t),this.quaternion.multiply(Rd),this}rotateOnWorldAxis(e,t){return Rd.setFromAxisAngle(e,t),this.quaternion.premultiply(Rd),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Gd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Gd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zd.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bd.copy(e):Bd.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vd.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zd.lookAt(Vd,Bd,this.up):zd.lookAt(Bd,Vd,this.up),this.quaternion.setFromRotationMatrix(zd),r&&(zd.extractRotation(r.matrixWorld),Rd.setFromRotationMatrix(zd),this.quaternion.premultiply(Rd.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(J(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qd),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null):J(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zd.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zd.multiply(e.parent.matrixWorld)),e.applyMatrix4(zd),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qd),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vd,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vd,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Zd.DEFAULT_UP=new X(0,1,0),Zd.DEFAULT_MATRIX_AUTO_UPDATE=!0,Zd.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qd=class extends Zd{constructor(){super(),this.isGroup=!0,this.type=`Group`}},$d={type:`move`},ef=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qd,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qd,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qd,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($d)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qd;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nf={h:0,s:0,l:0},rf={h:0,s:0,l:0};function af(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var of=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Du){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cd.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=cd.workingColorSpace){return this.r=e,this.g=t,this.b=n,cd.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=cd.workingColorSpace){if(e=Zu(e,1),t=Xu(t,0,1),n=Xu(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=af(i,r,e+1/3),this.g=af(i,r,e),this.b=af(i,r,e-1/3)}return cd.colorSpaceToWorking(this,r),this}setStyle(e,t=Du){function n(t){t!==void 0&&parseFloat(t)<1&&q(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:q(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);q(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Du){let n=tf[e.toLowerCase()];return n===void 0?q(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ld(e.r),this.g=ld(e.g),this.b=ld(e.b),this}copyLinearToSRGB(e){return this.r=ud(e.r),this.g=ud(e.g),this.b=ud(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Du){return cd.workingToColorSpace(sf.copy(this),e),Math.round(Xu(sf.r*255,0,255))*65536+Math.round(Xu(sf.g*255,0,255))*256+Math.round(Xu(sf.b*255,0,255))}getHexString(e=Du){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cd.workingColorSpace){cd.workingToColorSpace(sf.copy(this),t);let n=sf.r,r=sf.g,i=sf.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=cd.workingColorSpace){return cd.workingToColorSpace(sf.copy(this),t),e.r=sf.r,e.g=sf.g,e.b=sf.b,e}getStyle(e=Du){cd.workingToColorSpace(sf.copy(this),e);let t=sf.r,n=sf.g,r=sf.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(nf),this.setHSL(nf.h+e,nf.s+t,nf.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nf),e.getHSL(rf);let n=Qu(nf.h,rf.h,t),r=Qu(nf.s,rf.s,t),i=Qu(nf.l,rf.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sf=new of;of.NAMES=tf;var cf=class extends Zd{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pd,this.environmentIntensity=1,this.environmentRotation=new Pd,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},lf=new X,uf=new X,df=new X,ff=new X,pf=new X,mf=new X,hf=new X,gf=new X,_f=new X,vf=new X,yf=new yd,bf=new yd,xf=new yd,Sf=class e{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),lf.subVectors(e,t),r.cross(lf);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){lf.subVectors(r,t),uf.subVectors(n,t),df.subVectors(e,t);let a=lf.dot(lf),o=lf.dot(uf),s=lf.dot(df),c=uf.dot(uf),l=uf.dot(df),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ff)!==null&&ff.x>=0&&ff.y>=0&&ff.x+ff.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ff)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ff.x),s.addScaledVector(a,ff.y),s.addScaledVector(o,ff.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return yf.setScalar(0),bf.setScalar(0),xf.setScalar(0),yf.fromBufferAttribute(e,t),bf.fromBufferAttribute(e,n),xf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yf,i.x),a.addScaledVector(bf,i.y),a.addScaledVector(xf,i.z),a}static isFrontFacing(e,t,n,r){return lf.subVectors(n,t),uf.subVectors(e,t),lf.cross(uf).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return lf.subVectors(this.c,this.b),uf.subVectors(this.a,this.b),lf.cross(uf).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;pf.subVectors(r,n),mf.subVectors(i,n),gf.subVectors(e,n);let s=pf.dot(gf),c=mf.dot(gf);if(s<=0&&c<=0)return t.copy(n);_f.subVectors(e,r);let l=pf.dot(_f),u=mf.dot(_f);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(pf,a);vf.subVectors(e,i);let f=pf.dot(vf),p=mf.dot(vf);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(mf,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return hf.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(hf,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(pf,a).addScaledVector(mf,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cf=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tf.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tf.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Tf):Tf.fromBufferAttribute(r,t),Tf.applyMatrix4(e.matrixWorld),this.expandByPoint(Tf);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ef.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ef.copy(e.boundingBox)),Ef.applyMatrix4(e.matrixWorld),this.union(Ef)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tf),Tf.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nf),Pf.subVectors(this.max,Nf),Df.subVectors(e.a,Nf),Of.subVectors(e.b,Nf),kf.subVectors(e.c,Nf),Af.subVectors(Of,Df),jf.subVectors(kf,Of),Mf.subVectors(Df,kf);let t=[0,-Af.z,Af.y,0,-jf.z,jf.y,0,-Mf.z,Mf.y,Af.z,0,-Af.x,jf.z,0,-jf.x,Mf.z,0,-Mf.x,-Af.y,Af.x,0,-jf.y,jf.x,0,-Mf.y,Mf.x,0];return!Lf(t,Df,Of,kf,Pf)||(t=[1,0,0,0,1,0,0,0,1],!Lf(t,Df,Of,kf,Pf))?!1:(Ff.crossVectors(Af,jf),t=[Ff.x,Ff.y,Ff.z],Lf(t,Df,Of,kf,Pf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tf).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tf).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(wf[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wf[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wf[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wf[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wf[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wf[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wf[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wf[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wf)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wf=[new X,new X,new X,new X,new X,new X,new X,new X],Tf=new X,Ef=new Cf,Df=new X,Of=new X,kf=new X,Af=new X,jf=new X,Mf=new X,Nf=new X,Pf=new X,Ff=new X,If=new X;function Lf(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){If.fromArray(e,a);let o=i.x*Math.abs(If.x)+i.y*Math.abs(If.y)+i.z*Math.abs(If.z),s=t.dot(If),c=n.dot(If),l=r.dot(If);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Rf=new X,zf=new Y,Bf=0,Vf=class extends Gu{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=bl,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zf.fromBufferAttribute(this,t),zf.applyMatrix3(e),this.setXY(t,zf.x,zf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rf.fromBufferAttribute(this,t),Rf.applyMatrix3(e),this.setXYZ(t,Rf.x,Rf.y,Rf.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rf.fromBufferAttribute(this,t),Rf.applyMatrix4(e),this.setXYZ(t,Rf.x,Rf.y,Rf.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rf.fromBufferAttribute(this,t),Rf.applyNormalMatrix(e),this.setXYZ(t,Rf.x,Rf.y,Rf.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rf.fromBufferAttribute(this,t),Rf.transformDirection(e),this.setXYZ(t,Rf.x,Rf.y,Rf.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$u(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ed(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$u(t,this.array)),t}setX(e,t){return this.normalized&&(t=ed(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$u(t,this.array)),t}setY(e,t){return this.normalized&&(t=ed(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$u(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ed(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$u(t,this.array)),t}setW(e,t){return this.normalized&&(t=ed(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ed(t,this.array),n=ed(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ed(t,this.array),n=ed(n,this.array),r=ed(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ed(t,this.array),n=ed(n,this.array),r=ed(r,this.array),i=ed(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Hf=class extends Vf{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Uf=class extends Vf{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Wf=class extends Vf{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gf=new Cf,Kf=new X,qf=new X,Jf=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Gf.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kf.subVectors(e,this.center);let t=Kf.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Kf,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kf.copy(e.center).add(qf)),this.expandByPoint(Kf.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yf=0,Xf=new wd,Zf=new Zd,Qf=new X,$f=new Cf,ep=new Cf,tp=new X,np=class e extends Gu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Yu(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Fu(e)?Uf:Hf)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xf.makeRotationFromQuaternion(e),this.applyMatrix4(Xf),this}rotateX(e){return Xf.makeRotationX(e),this.applyMatrix4(Xf),this}rotateY(e){return Xf.makeRotationY(e),this.applyMatrix4(Xf),this}rotateZ(e){return Xf.makeRotationZ(e),this.applyMatrix4(Xf),this}translate(e,t,n){return Xf.makeTranslation(e,t,n),this.applyMatrix4(Xf),this}scale(e,t,n){return Xf.makeScale(e,t,n),this.applyMatrix4(Xf),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qf).negate(),this.translate(Qf.x,Qf.y,Qf.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Wf(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&q(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cf);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];$f.setFromBufferAttribute(n),this.morphTargetsRelative?(tp.addVectors(this.boundingBox.min,$f.min),this.boundingBox.expandByPoint(tp),tp.addVectors(this.boundingBox.max,$f.max),this.boundingBox.expandByPoint(tp)):(this.boundingBox.expandByPoint($f.min),this.boundingBox.expandByPoint($f.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&J(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jf);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new X,1/0);else if(e){let n=this.boundingSphere.center;if($f.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ep.setFromBufferAttribute(n),this.morphTargetsRelative?(tp.addVectors($f.min,ep.min),$f.expandByPoint(tp),tp.addVectors($f.max,ep.max),$f.expandByPoint(tp)):($f.expandByPoint(ep.min),$f.expandByPoint(ep.max))}$f.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)tp.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(tp));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)tp.fromBufferAttribute(a,t),o&&(Qf.fromBufferAttribute(e,t),tp.add(Qf)),r=Math.max(r,n.distanceToSquared(tp))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&J(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){J(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Vf(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new X,s[e]=new X;let c=new X,l=new X,u=new X,d=new Y,f=new Y,p=new Y,m=new X,h=new X;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new X,y=new X,b=new X,x=new X;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Vf(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new X,i=new X,a=new X,o=new X,s=new X,c=new X,l=new X,u=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tp.fromBufferAttribute(e,t),tp.normalize(),e.setXYZ(t,tp.x,tp.y,tp.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Vf(a,r,i)}if(this.index===null)return q(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},rp=new X,ip=new X,ap=new Z,op=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=rp.subVectors(n,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(rp),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ap.getNormalMatrix(e),r=this.coplanarPoint(rp).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},sp=0,cp=class extends Gu{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Yu(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new of(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ju,this.stencilZFail=ju,this.stencilZPass=ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){q(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new of().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new op().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Y().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Y().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},lp=new X,up=new X,dp=new X,fp=new X,pp=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lp)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=lp.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lp.copy(this.origin).addScaledVector(this.direction,t),lp.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){up.copy(e).add(t).multiplyScalar(.5),dp.copy(t).sub(e).normalize(),fp.copy(this.origin).sub(up);let i=e.distanceTo(t)*.5,a=-this.direction.dot(dp),o=fp.dot(this.direction),s=-fp.dot(dp),c=fp.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(up).addScaledVector(dp,d),f}intersectSphere(e,t){if(e.radius<0)return null;lp.subVectors(e.center,this.origin);let n=lp.dot(this.direction),r=lp.dot(lp)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,lp)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,P=1/w,ne=T-ee*D,re=E-te*D,ie=O-ee*A,ae=k-te*A,F=j-ee*N,oe=M-te*N,I=F*ae-oe*ie,L=ne*oe-re*F,se=ie*re-ae*ne;if(r){if(I<0||L<0||se<0)return null}else if((I<0||L<0||se<0)&&(I>0||L>0||se>0))return null;let ce=I+L+se;if(ce===0)return null;let le=P*(I*D+L*A+se*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mp=class extends cp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new of(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pd,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hp=new wd,gp=new pp,_p=new Jf,vp=new X,yp=new X,bp=new X,xp=new X,Sp=new X,Cp=new X,wp=new X,Tp=new X,Ep=class extends Zd{constructor(e=new np,t=new mp){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Cp.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Sp.fromBufferAttribute(s,e),a?Cp.addScaledVector(Sp,r):Cp.addScaledVector(Sp.sub(t),r))}t.add(Cp)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_p.copy(n.boundingSphere),_p.applyMatrix4(i),gp.copy(e.ray).recast(e.near),!(_p.containsPoint(gp.origin)===!1&&(gp.intersectSphere(_p,vp)===null||gp.origin.distanceToSquared(vp)>(e.far-e.near)**2))&&(hp.copy(i).invert(),gp.copy(e.ray).applyMatrix4(hp),(n.boundingBox===null||gp.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,gp)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Op(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Op(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Op(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Op(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Dp(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Tp.copy(s),Tp.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Tp);return l<n.near||l>n.far?null:{distance:l,point:Tp.clone(),object:e}}function Op(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,yp),e.getVertexPosition(c,bp),e.getVertexPosition(l,xp);let u=Dp(e,t,n,r,yp,bp,xp,wp);if(u){let e=new X;Sf.getBarycoord(wp,yp,bp,xp,e),i&&(u.uv=Sf.getInterpolatedAttribute(i,s,c,l,e,new Y)),a&&(u.uv1=Sf.getInterpolatedAttribute(a,s,c,l,e,new Y)),o&&(u.normal=Sf.getInterpolatedAttribute(o,s,c,l,e,new X),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new X,materialIndex:0};Sf.getNormal(yp,bp,xp,t.normal),u.face=t,u.barycoord=e}return u}var kp=class extends vd{constructor(e=null,t=1,n=1,r,i,a,o,s,c=cl,l=cl,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ap=class extends Vf{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jp=new wd,Mp=new wd,Np=[],Pp=new Cf,Fp=new wd,Ip=new Ep,Lp=new Jf,Rp=class extends Ep{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ap(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Fp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cf),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jp),Pp.copy(e.boundingBox).applyMatrix4(jp),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jf),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jp),Lp.copy(e.boundingSphere).applyMatrix4(jp),this.boundingSphere.union(Lp)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ip.geometry=this.geometry,Ip.material=this.material,Ip.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lp.copy(this.boundingSphere),Lp.applyMatrix4(n),e.ray.intersectsSphere(Lp)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,jp),Mp.multiplyMatrices(n,jp),Ip.matrixWorld=Mp,Ip.raycast(e,Np);for(let e=0,n=Np.length;e<n;e++){let n=Np[e];n.instanceId=i,n.object=this,t.push(n)}Np.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ap(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new kp(new Float32Array(r*this.count),r,this.count,Ml,bl));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zp=new Jf,Bp=new Y(.5,.5),Vp=new X,Hp=class{constructor(e=new op,t=new op,n=new op,r=new op,i=new op,a=new op){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pu,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zp.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zp.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zp)}intersectsSprite(e){return zp.center.set(0,0,0),zp.radius=.7071067811865476+Bp.distanceTo(e.center),zp.applyMatrix4(e.matrixWorld),this.intersectsSphere(zp)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Vp.x=r.normal.x>0?e.max.x:e.min.x,Vp.y=r.normal.y>0?e.max.y:e.min.y,Vp.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vp)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Up=class extends cp{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new of(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wp=new X,Gp=new X,Kp=new wd,qp=new pp,Jp=new Jf,Yp=new X,Xp=new X,Zp=class extends Zd{constructor(e=new np,t=new Up){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Wp.fromBufferAttribute(t,e-1),Gp.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Wp.distanceTo(Gp);e.setAttribute(`lineDistance`,new Wf(n,1))}else q(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jp.copy(n.boundingSphere),Jp.applyMatrix4(r),Jp.radius+=i,e.ray.intersectsSphere(Jp)===!1)return;Kp.copy(r).invert(),qp.copy(e.ray).applyMatrix4(Kp);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Qp(this,e,qp,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Qp(this,e,qp,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Qp(this,e,qp,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Qp(this,e,qp,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Qp(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Wp.fromBufferAttribute(s,i),Gp.fromBufferAttribute(s,a),n.distanceSqToSegment(Wp,Gp,Yp,Xp)>r)return;Yp.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Yp);if(!(c<t.near||c>t.far))return{distance:c,point:Xp.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var $p=new X,em=new X,tm=class extends Zp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)$p.fromBufferAttribute(t,e),em.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+$p.distanceTo(em);e.setAttribute(`lineDistance`,new Wf(n,1))}else q(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},nm=class extends Zp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},rm=class extends vd{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},im=class extends vd{constructor(e,t,n=yl,r,i,a,o=cl,s=cl,c,l=Al,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},am=class extends im{constructor(e,t=yl,n=301,r,i,a=cl,o=cl,s,c=Al){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},om=class extends vd{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sm=class e extends np{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Wf(c,3)),this.setAttribute(`normal`,new Wf(l,3)),this.setAttribute(`uv`,new Wf(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new X;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},cm=class e extends np{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Wf(u,3)),this.setAttribute(`normal`,new Wf(d,3)),this.setAttribute(`uv`,new Wf(f,2));function _(){let a=new X,_=new X,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new Y,m=new X,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lm=class e extends cm{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},um=class e extends np{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Wf(i,3)),this.setAttribute(`normal`,new Wf(i.slice(),3)),this.setAttribute(`uv`,new Wf(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new X,r=new X,i=new X;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new X;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new X;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new X,t=new X,n=new X,r=new X,o=new Y,s=new Y,c=new Y;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},dm=class e extends um{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},fm=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){q(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new Y:new X);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new X,r=[],i=[],a=[],o=new X,s=new wd;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new X)}i[0]=new X,a[0]=new X;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Xu(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Xu(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pm=class extends fm{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new Y){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mm=class extends pm{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function hm(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var gm=new X,_m=new X,vm=new hm,ym=new hm,bm=new hm,xm=class extends fm{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new X){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(_m.subVectors(r[0],r[1]).add(r[0]),c=_m);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(gm.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=gm),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),vm.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ym.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),bm.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(vm.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ym.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),bm.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(vm.calc(s),ym.calc(s),bm.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new X().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sm(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Cm(e,t){let n=1-e;return n*n*t}function wm(e,t){return 2*(1-e)*e*t}function Tm(e,t){return e*e*t}function Em(e,t,n,r){return Cm(e,t)+wm(e,n)+Tm(e,r)}function Dm(e,t){let n=1-e;return n*n*n*t}function Om(e,t){let n=1-e;return 3*n*n*e*t}function km(e,t){return 3*(1-e)*e*e*t}function Am(e,t){return e*e*e*t}function jm(e,t,n,r,i){return Dm(e,t)+Om(e,n)+km(e,r)+Am(e,i)}var Mm=class extends fm{constructor(e=new Y,t=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(jm(e,r.x,i.x,a.x,o.x),jm(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nm=class extends fm{constructor(e=new X,t=new X,n=new X,r=new X){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(jm(e,r.x,i.x,a.x,o.x),jm(e,r.y,i.y,a.y,o.y),jm(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pm=class extends fm{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fm=class extends fm{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Im=class extends fm{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Em(e,r.x,i.x,a.x),Em(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lm=class extends fm{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Em(e,r.x,i.x,a.x),Em(e,r.y,i.y,a.y),Em(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rm=class extends fm{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new Y){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Sm(o,s.x,c.x,l.x,u.x),Sm(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Y().fromArray(n))}return this}},zm=Object.freeze({__proto__:null,ArcCurve:mm,CatmullRomCurve3:xm,CubicBezierCurve:Mm,CubicBezierCurve3:Nm,EllipseCurve:pm,LineCurve:Pm,LineCurve3:Fm,QuadraticBezierCurve:Im,QuadraticBezierCurve3:Lm,SplineCurve:Rm}),Bm=class extends fm{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new zm[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new zm[n.type]().fromJSON(n))}return this}},Vm=class extends Bm{constructor(e){super(),this.type=`Path`,this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Pm(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Im(this.currentPoint.clone(),new Y(e,t),new Y(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Mm(this.currentPoint.clone(),new Y(e,t),new Y(n,r),new Y(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Rm([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new pm(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hm=class extends Vm{constructor(e){super(e),this.uuid=Yu(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Vm().fromJSON(n))}return this}};function Um(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Wm(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Zm(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Km(a,o,n,s,c,l,0),o}function Wm(e,t,n,r,i){let a;if(i===xh(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=vh(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=vh(i/r|0,e[i],e[i+1],a);return a&&uh(a,a.next)&&(yh(a),a=a.next),a}function Gm(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(uh(n,n.next)||lh(n.prev,n,n.next)===0)){if(yh(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Km(e,t,n,r,i,a,o){if(!e)return;!o&&a&&nh(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Jm(e,r,i,a):qm(e))t.push(c.i,e.i,l.i),yh(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ym(Gm(e),t),Km(e,t,n,r,i,a,2)):o===2&&Xm(e,t,n,r,i,a):Km(Gm(e),t,n,r,i,a,1);break}}}function qm(e){let t=e.prev,n=e,r=e.next;if(lh(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&sh(i,s,a,c,o,l,m.x,m.y)&&lh(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Jm(e,t,n,r){let i=e.prev,a=e,o=e.next;if(lh(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ih(p,m,t,n,r),v=ih(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&sh(s,u,c,d,l,f,y.x,y.y)&&lh(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&sh(s,u,c,d,l,f,b.x,b.y)&&lh(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&sh(s,u,c,d,l,f,y.x,y.y)&&lh(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&sh(s,u,c,d,l,f,b.x,b.y)&&lh(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ym(e,t){let n=e;do{let r=n.prev,i=n.next.next;!uh(r,i)&&dh(r,n,n.next,i)&&hh(r,i)&&hh(i,r)&&(t.push(r.i,n.i,i.i),yh(n),yh(n.next),n=e=i),n=n.next}while(n!==e);return Gm(n)}function Xm(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ch(o,e)){let s=_h(o,e);o=Gm(o,o.next),s=Gm(s,s.next),Km(o,t,n,r,i,a,0),Km(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Zm(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Wm(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ah(o))}i.sort(Qm);for(let e=0;e<i.length;e++)n=$m(i[e],n);return n}function Qm(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function $m(e,t){let n=eh(e,t);if(!n)return t;let r=_h(n,e);return Gm(r,r.next),Gm(n,n.next)}function eh(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(uh(e,n))return n;do{if(uh(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&oh(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);hh(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&th(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function th(e,t){return lh(e.prev,e,t.prev)<0&&lh(t.next,e,e.next)<0}function nh(e,t,n,r){let i=e;do i.z===0&&(i.z=ih(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,rh(i)}function rh(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ih(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ah(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function oh(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function sh(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&oh(e,t,n,r,i,a,o,s)}function ch(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!mh(e,t)&&(hh(e,t)&&hh(t,e)&&gh(e,t)&&(lh(e.prev,e,t.prev)||lh(e,t.prev,t))||uh(e,t)&&lh(e.prev,e,e.next)>0&&lh(t.prev,t,t.next)>0)}function lh(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function uh(e,t){return e.x===t.x&&e.y===t.y}function dh(e,t,n,r){let i=ph(lh(e,t,n)),a=ph(lh(e,t,r)),o=ph(lh(n,r,e)),s=ph(lh(n,r,t));return!!(i!==a&&o!==s||i===0&&fh(e,n,t)||a===0&&fh(e,r,t)||o===0&&fh(n,e,r)||s===0&&fh(n,t,r))}function fh(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ph(e){return e>0?1:e<0?-1:0}function mh(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&dh(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function hh(e,t){return lh(e.prev,e,e.next)<0?lh(e,t,e.next)>=0&&lh(e,e.prev,t)>=0:lh(e,t,e.prev)<0||lh(e,e.next,t)<0}function gh(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function _h(e,t){let n=bh(e.i,e.x,e.y),r=bh(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function vh(e,t,n,r){let i=bh(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function yh(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function bh(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xh(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Sh=class{static triangulate(e,t,n=2){return Um(e,t,n)}},Ch=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];wh(e),Th(n,e);let a=e.length;t.forEach(wh);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Th(n,t[e]);let o=Sh.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function wh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Th(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Eh=class e extends np{constructor(e=new Hm([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Wf(r,3)),this.setAttribute(`uv`,new Wf(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Dh:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new X,b=new X,x=new X}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ch.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ch.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||J(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new Y(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new Y(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let te;if(p===0)te=Ch.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);F(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);F(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}te=Ch.triangulateShape(e,t)}let P=te.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),F(x.x,x.y,x.z)):F(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),F(x.x,x.y,x.z)):F(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);F(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?F(i.x,i.y+g[s-1].y,g[s-1].x+n):F(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=te[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=te[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=te[e];oe(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=te[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);I(t+r+n,t+i+n,t+i+a,t+r+a)}}}function F(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){L(e),L(t),L(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);se(o[0]),se(o[1]),se(o[2])}function I(e,t,i,a){L(e),L(t),L(a),L(t),L(i),L(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);se(s[0]),se(s[1]),se(s[3]),se(s[1]),se(s[2]),se(s[3])}function L(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function se(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Oh(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new zm[i.type]().fromJSON(i)),new e(r,t.options)}},Dh={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new Y(a,o),new Y(s,c),new Y(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new Y(o,1-c),new Y(l,1-d),new Y(f,1-m),new Y(h,1-_)]:[new Y(s,1-c),new Y(u,1-d),new Y(p,1-m),new Y(g,1-_)]}};function Oh(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var kh=class e extends np{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Wf(p,3)),this.setAttribute(`normal`,new Wf(m,3)),this.setAttribute(`uv`,new Wf(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ah=class e extends np{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new X,p=new Y;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Wf(s,3)),this.setAttribute(`normal`,new Wf(c,3)),this.setAttribute(`uv`,new Wf(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},jh=class e extends np{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new X,d=new X,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Wf(p,3)),this.setAttribute(`normal`,new Wf(m,3)),this.setAttribute(`uv`,new Wf(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Mh(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ph(i))i.isRenderTargetTexture?(q(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ph(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Nh(e){let t={};for(let n=0;n<e.length;n++){let r=Mh(e[n]);for(let e in r)t[e]=r[e]}return t}function Ph(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fh(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ih(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cd.workingColorSpace}var Lh={clone:Mh,merge:Nh},Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bh=class extends cp{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mh(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new of().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new X().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new yd().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new wd().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vh=class extends Bh{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Hh=class extends cp{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new of(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new of(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pd,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uh=class extends cp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wh=class extends cp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Kh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var qh=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Jh=class extends qh{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cu,endingEnd:Cu}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case wu:i=e,o=2*t-n;break;case Tu:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case wu:a=e,s=2*n-t;break;case Tu:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yh=class extends qh{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xh=class extends qh{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zh=class extends qh{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=eg(n,t,g,y,r);i[p]=Qh(x,o,_,b,m)}return i}};function Qh(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function $h(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function eg(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Qh(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=$h(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var tg=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Gh(t,this.TimeBufferType),this.values=Gh(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gh(e.times,Array),values:Gh(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Kh(e.settings)&&(n.settings={inTangents:Gh(e.settings.inTangents,Array),outTangents:Gh(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yu:t=this.InterpolantFactoryMethodDiscrete;break;case bu:t=this.InterpolantFactoryMethodLinear;break;case xu:t=this.InterpolantFactoryMethodSmooth;break;case Su:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return q(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yu;case this.InterpolantFactoryMethodLinear:return bu;case this.InterpolantFactoryMethodSmooth:return xu;case this.InterpolantFactoryMethodBezier:return Su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Kh(this.settings)&&(ng(this.settings.inTangents,e),ng(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(J(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(J(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){J(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){J(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Iu(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){J(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===xu,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Kh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ng(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}tg.prototype.ValueTypeName=``,tg.prototype.TimeBufferType=Float32Array,tg.prototype.ValueBufferType=Float32Array,tg.prototype.DefaultInterpolation=bu;var rg=class extends tg{constructor(e,t,n){super(e,t,n)}};rg.prototype.ValueTypeName=`bool`,rg.prototype.ValueBufferType=Array,rg.prototype.DefaultInterpolation=yu,rg.prototype.InterpolantFactoryMethodLinear=void 0,rg.prototype.InterpolantFactoryMethodSmooth=void 0;var ig=class extends tg{constructor(e,t,n,r){super(e,t,n,r)}};ig.prototype.ValueTypeName=`color`;var ag=class extends tg{constructor(e,t,n,r){super(e,t,n,r)}};ag.prototype.ValueTypeName=`number`;var og=class extends qh{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)td.slerpFlat(i,0,a,c-o,a,c,s);return i}},sg=class extends tg{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new og(this.times,this.values,this.getValueSize(),e)}};sg.prototype.ValueTypeName=`quaternion`,sg.prototype.InterpolantFactoryMethodSmooth=void 0;var cg=class extends tg{constructor(e,t,n){super(e,t,n)}};cg.prototype.ValueTypeName=`string`,cg.prototype.ValueBufferType=Array,cg.prototype.DefaultInterpolation=yu,cg.prototype.InterpolantFactoryMethodLinear=void 0,cg.prototype.InterpolantFactoryMethodSmooth=void 0;var lg=class extends tg{constructor(e,t,n,r){super(e,t,n,r)}};lg.prototype.ValueTypeName=`vector`;var ug=class extends Zd{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new of(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},dg=class extends ug{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Zd.DEFAULT_UP),this.updateMatrix(),this.groundColor=new of(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fg=new wd,pg=new X,mg=new X,hg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.mapType=ml,this.map=null,this.mapPass=null,this.matrix=new wd,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hp,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new yd(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(pg),mg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){fg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fg,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gg=new X,_g=new td,vg=new X,yg=class extends Zd{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new wd,this.projectionMatrix=new wd,this.projectionMatrixInverse=new wd,this.coordinateSystem=Pu,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gg,_g,vg),vg.x===1&&vg.y===1&&vg.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gg,_g,vg.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gg,_g,vg),vg.x===1&&vg.y===1&&vg.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gg,_g,vg.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bg=new X,xg=new Y,Sg=new Y,Cg=class extends yg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ju*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ju*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bg.x,bg.y).multiplyScalar(-e/bg.z),bg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bg.x,bg.y).multiplyScalar(-e/bg.z)}getViewSize(e,t){return this.getViewBounds(e,xg,Sg),t.subVectors(Sg,xg)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wg=class extends yg{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tg=class extends hg{constructor(){super(new wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eg=class extends ug{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Zd.DEFAULT_UP),this.updateMatrix(),this.target=new Zd,this.shadow=new Tg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Dg=-90,Og=1,kg=class extends Zd{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Cg(Dg,Og,e,t);r.layers=this.layers,this.add(r);let i=new Cg(Dg,Og,e,t);i.layers=this.layers,this.add(i);let a=new Cg(Dg,Og,e,t);a.layers=this.layers,this.add(a);let o=new Cg(Dg,Og,e,t);o.layers=this.layers,this.add(o);let s=new Cg(Dg,Og,e,t);s.layers=this.layers,this.add(s);let c=new Cg(Dg,Og,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ag=class extends Cg{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jg=`\\[\\]\\.:\\/`,Mg=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ng=`[^\\[\\]\\.:\\/]`,Pg=`[^`+jg.replace(`\\.`,``)+`]`,Fg=`((?:WC+[\\/:])*)`.replace(`WC`,Ng),Ig=`(WCOD+)?`.replace(`WCOD`,Pg),Lg=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ng),Rg=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ng),zg=RegExp(`^`+Fg+Ig+Lg+Rg+`$`),Bg=[`material`,`materials`,`bones`,`map`],Vg=class{constructor(e,t,n){let r=n||Hg.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Hg=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Mg,``)}static parseTrackName(e){let t=zg.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Bg.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){q(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){J(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){J(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){J(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){J(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){J(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;J(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Hg.Composite=Vg,Hg.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Hg.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Hg.prototype.GetterByBindingType=[Hg.prototype._getValue_direct,Hg.prototype._getValue_array,Hg.prototype._getValue_arrayElement,Hg.prototype._getValue_toArray],Hg.prototype.SetterByBindingTypeAndVersioning=[[Hg.prototype._setValue_direct,Hg.prototype._setValue_direct_setNeedsUpdate,Hg.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Hg.prototype._setValue_array,Hg.prototype._setValue_array_setNeedsUpdate,Hg.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Hg.prototype._setValue_arrayElement,Hg.prototype._setValue_arrayElement_setNeedsUpdate,Hg.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Hg.prototype._setValue_fromArray,Hg.prototype._setValue_fromArray_setNeedsUpdate,Hg.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ug=new wd,Wg=class{constructor(e,t,n=0,r=1/0){this.ray=new pp(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):J(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ug.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ug),this}intersectObject(e,t=!0,n=[]){return Kg(e,this,n,t),n.sort(Gg),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Kg(e[r],this,n,t);return n.sort(Gg),n}};function Gg(e,t){return e.distance-t.distance}function Kg(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Kg(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var qg=class extends tm{constructor(e=10,t=10,n=4473924,r=8947848){n=new of(n),r=new of(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new np;l.setAttribute(`position`,new Wf(s,3)),l.setAttribute(`color`,new Wf(c,3));let u=new Up({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Jg(e,t,n,r){let i=Yg(r);switch(n){case Dl:return e*t;case Ml:return e*t/i.components*i.byteLength;case Nl:return e*t/i.components*i.byteLength;case Pl:return e*t*2/i.components*i.byteLength;case Fl:return e*t*2/i.components*i.byteLength;case Ol:return e*t*3/i.components*i.byteLength;case kl:return e*t*4/i.components*i.byteLength;case Il:return e*t*4/i.components*i.byteLength;case Ll:case Rl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case zl:case Bl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Wl:return Math.max(e,16)*Math.max(t,8)/4;case Vl:case Ul:return Math.max(e,8)*Math.max(t,8)/2;case Gl:case Kl:case Jl:case Yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ql:case Xl:case Zl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case eu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case tu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case nu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ru:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case iu:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case au:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ou:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case su:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case cu:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case lu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case uu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case du:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case fu:case pu:case mu:return Math.ceil(e/4)*Math.ceil(t/4)*16;case hu:case gu:return Math.ceil(e/4)*Math.ceil(t/4)*8;case _u:case vu:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Yg(e){switch(e){case ml:case hl:return{byteLength:1,components:1};case _l:case gl:case xl:return{byteLength:2,components:1};case Sl:case Cl:return{byteLength:2,components:4};case yl:case vl:case bl:return{byteLength:4,components:1};case Tl:case El:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?q(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Xg(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Zg(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new of(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Z},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Z}},envmap:{envMap:{value:null},envMapRotation:{value:new Z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Z},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new of(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new of(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0},uvTransform:{value:new Z}},sprite:{diffuse:{value:new of(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Z},alphaMap:{value:null},alphaMapTransform:{value:new Z},alphaTest:{value:0}}},Qg={basic:{uniforms:Nh([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:Nh([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new of(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:Nh([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new of(0)},specular:{value:new of(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:Nh([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new of(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:Nh([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new of(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:Nh([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:Nh([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:Nh([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:Nh([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:Nh([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:Nh([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new Z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Z}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:Nh([$.common,$.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:Nh([$.lights,$.fog,{color:{value:new of(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};Qg.physical={uniforms:Nh([Qg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Z},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Z},sheen:{value:0},sheenColor:{value:new of(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Z},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Z},attenuationDistance:{value:0},attenuationColor:{value:new of(0)},specularColor:{value:new of(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Z},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Z}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var $g={r:0,b:0,g:0},e_=new wd,t_=new Z;t_.set(-1,0,0,0,1,0,0,0,1);function n_(e,t,n,r,i,a){let o=new of(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Ep(new sm(1,1,1),new Bh({name:`BackgroundCubeMaterial`,uniforms:Mh(Qg.backgroundCube.uniforms),vertexShader:Qg.backgroundCube.vertexShader,fragmentShader:Qg.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(t_),l.material.toneMapped=cd.getTransfer(i.colorSpace)!==Au,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ep(new kh(2,2),new Bh({name:`BackgroundMaterial`,uniforms:Mh(Qg.background.uniforms),vertexShader:Qg.background.vertexShader,fragmentShader:Qg.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=cd.getTransfer(i.colorSpace)!==Au,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($g,Ih(e)),n.buffers.color.setClear($g.r,$g.g,$g.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function r_(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function i_(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function a_(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(q(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&q(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function o_(e){let t=this,n=null,r=0,i=!1,a=!1,o=new op,s=new Z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var s_=4,c_=6,l_=20,u_=256,d_=new wg,f_=new of,p_=null,m_=0,h_=0,g_=!1,__=new X,v_=new X,y_=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=__}=i;p_=this._renderer.getRenderTarget(),m_=this._renderer.getActiveCubeFace(),h_=this._renderer.getActiveMipmapLevel(),g_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(p_,m_,h_),this._renderer.xr.enabled=g_,e.scissorTest=!1,S_(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),p_=this._renderer.getRenderTarget(),m_=this._renderer.getActiveCubeFace(),h_=this._renderer.getActiveMipmapLevel(),g_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dl,minFilter:dl,generateMipmaps:!1,type:xl,format:kl,colorSpace:Ou,depthBuffer:!1},r=x_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=b_(r)),this._blurMaterial=w_(r,e,t),this._ggxMaterial=C_(r,e,t)}return r}_compileMaterial(e){let t=new Ep(new np,e);this._renderer.compile(t,d_)}_sceneToCubeUV(e,t,n,r,i){let a=new Cg(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(f_),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ep(new sm,new mp({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(f_),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;S_(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=E_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;S_(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,d_)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-s_?n-d+s_:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,S_(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,d_),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,S_(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,d_)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];S_(t,3*l*(r>this._lodMax-s_?r-this._lodMax+s_:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,d_)}};function b_(e){let t=[],n=[],r=e,i=e-s_+1+c_;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?v_.set(1,r,n):e===1?v_.set(-n,1,-r):e===2?v_.set(-n,r,1):e===3?v_.set(-1,r,-n):e===4?v_.set(-n,-1,r):v_.set(n,r,-1),v_.toArray(l,(e*6+t)*3)}}let u=new np;u.setAttribute(`position`,new Vf(c,3)),u.setAttribute(`outputDirection`,new Vf(l,3)),n.push(new Ep(u,null)),r>s_&&r--}return{lodMeshes:n,sizeLods:t}}function x_(e,t,n){let r=new xd(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function S_(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function C_(e,t,n){return new Bh({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:u_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:D_(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function w_(e,t,n){return new Bh({name:`SphericalGaussianBlur`,defines:{SAMPLES:l_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:D_(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function T_(){return new Bh({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:D_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function E_(){return new Bh({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:D_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function D_(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var O_=class extends xd{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new rm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sm(5,5,5),i=new Bh({name:`CubemapFromEquirect`,uniforms:Mh(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ep(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=dl),new kg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function k_(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new O_(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new y_(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new y_(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function A_(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Hu(`WebGLRenderer: `+e+` extension not supported.`),t}}}function j_(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Uf:Hf)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function M_(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function N_(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:J(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function P_(e,t,n){let r=new WeakMap,i=new yd;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Sd(h,p,m,u);g.type=bl,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Y(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function F_(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var I_={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function L_(e,t,n,r,i,a){let o=new xd(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new np;l.setAttribute(`position`,new Wf([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Wf([0,2,0,0,2,0],2));let u=new Vh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ep(l,u),f=new wg(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new xd(t,n,{type:xl,depthBuffer:!1,stencilBuffer:!1}),c=new xd(t,n,{type:xl,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},cd.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=I_[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var R_=new vd,z_=new im(1,1),B_=new Sd,V_=new Cd,H_=new rm,U_=[],W_=[],G_=new Float32Array(16),K_=new Float32Array(9),q_=new Float32Array(4);function J_(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=U_[i];if(a===void 0&&(a=new Float32Array(i),U_[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Y_(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function X_(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Z_(e,t){let n=W_[t];n===void 0&&(n=new Int32Array(t),W_[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Q_(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function $_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Y_(n,t))return;e.uniform2fv(this.addr,t),X_(n,t)}}function ev(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Y_(n,t))return;e.uniform3fv(this.addr,t),X_(n,t)}}function tv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Y_(n,t))return;e.uniform4fv(this.addr,t),X_(n,t)}}function nv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Y_(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),X_(n,t)}else{if(Y_(n,r))return;q_.set(r),e.uniformMatrix2fv(this.addr,!1,q_),X_(n,r)}}function rv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Y_(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),X_(n,t)}else{if(Y_(n,r))return;K_.set(r),e.uniformMatrix3fv(this.addr,!1,K_),X_(n,r)}}function iv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Y_(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),X_(n,t)}else{if(Y_(n,r))return;G_.set(r),e.uniformMatrix4fv(this.addr,!1,G_),X_(n,r)}}function av(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ov(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Y_(n,t))return;e.uniform2iv(this.addr,t),X_(n,t)}}function sv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Y_(n,t))return;e.uniform3iv(this.addr,t),X_(n,t)}}function cv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Y_(n,t))return;e.uniform4iv(this.addr,t),X_(n,t)}}function lv(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function uv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Y_(n,t))return;e.uniform2uiv(this.addr,t),X_(n,t)}}function dv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Y_(n,t))return;e.uniform3uiv(this.addr,t),X_(n,t)}}function fv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Y_(n,t))return;e.uniform4uiv(this.addr,t),X_(n,t)}}function pv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(z_.compareFunction=n.isReversedDepthBuffer()?518:515,a=z_):a=R_,n.setTexture2D(t||a,i)}function mv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||V_,i)}function hv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||H_,i)}function gv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||B_,i)}function _v(e){switch(e){case 5126:return Q_;case 35664:return $_;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return rv;case 35676:return iv;case 5124:case 35670:return av;case 35667:case 35671:return ov;case 35668:case 35672:return sv;case 35669:case 35673:return cv;case 5125:return lv;case 36294:return uv;case 36295:return dv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return gv}}function vv(e,t){e.uniform1fv(this.addr,t)}function yv(e,t){let n=J_(t,this.size,2);e.uniform2fv(this.addr,n)}function bv(e,t){let n=J_(t,this.size,3);e.uniform3fv(this.addr,n)}function xv(e,t){let n=J_(t,this.size,4);e.uniform4fv(this.addr,n)}function Sv(e,t){let n=J_(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cv(e,t){let n=J_(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wv(e,t){let n=J_(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tv(e,t){e.uniform1iv(this.addr,t)}function Ev(e,t){e.uniform2iv(this.addr,t)}function Dv(e,t){e.uniform3iv(this.addr,t)}function Ov(e,t){e.uniform4iv(this.addr,t)}function kv(e,t){e.uniform1uiv(this.addr,t)}function Av(e,t){e.uniform2uiv(this.addr,t)}function jv(e,t){e.uniform3uiv(this.addr,t)}function Mv(e,t){e.uniform4uiv(this.addr,t)}function Nv(e,t,n){let r=this.cache,i=t.length,a=Z_(n,i);Y_(r,a)||(e.uniform1iv(this.addr,a),X_(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?z_:R_;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pv(e,t,n){let r=this.cache,i=t.length,a=Z_(n,i);Y_(r,a)||(e.uniform1iv(this.addr,a),X_(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||V_,a[e])}function Fv(e,t,n){let r=this.cache,i=t.length,a=Z_(n,i);Y_(r,a)||(e.uniform1iv(this.addr,a),X_(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||H_,a[e])}function Iv(e,t,n){let r=this.cache,i=t.length,a=Z_(n,i);Y_(r,a)||(e.uniform1iv(this.addr,a),X_(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||B_,a[e])}function Lv(e){switch(e){case 5126:return vv;case 35664:return yv;case 35665:return bv;case 35666:return xv;case 35674:return Sv;case 35675:return Cv;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Dv;case 35669:case 35673:return Ov;case 5125:return kv;case 36294:return Av;case 36295:return jv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Iv}}var Rv=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}},zv=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}},Bv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vv=/(\w+)(\])?(\[|\.)?/g;function Hv(e,t){e.seq.push(t),e.map[t.id]=t}function Uv(e,t,n){let r=e.name,i=r.length;for(Vv.lastIndex=0;;){let a=Vv.exec(r),o=Vv.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hv(n,l===void 0?new Rv(s,e,t):new zv(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bv(s),Hv(n,e)),n=e}}}var Wv=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Uv(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gv(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kv=37297,qv=0;function Jv(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yv=new Z;function Xv(e){cd._getMatrix(Yv,cd.workingColorSpace,e);let t=`mat3( ${Yv.elements.map(e=>e.toFixed(4))} )`;switch(cd.getTransfer(e)){case ku:return[t,`LinearTransferOETF`];case Au:return[t,`sRGBTransferOETF`];default:return q(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zv(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jv(e.getShaderSource(t),r)}return i}function Qv(e,t){let n=Xv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var $v={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ey(e,t){let n=$v[t];return n===void 0?(q(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ty=new X;function ny(){return cd.getLuminanceCoefficients(ty),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ty.x.toFixed(4)}, ${ty.y.toFixed(4)}, ${ty.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ry(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(oy).join(`
`)}function iy(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ay(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function oy(e){return e!==``}function sy(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cy(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function uy(e){return e.replace(ly,fy)}var dy=new Map;function fy(e,t){let n=Q[t];if(n===void 0){let e=dy.get(t);if(e!==void 0)n=Q[e],q(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return uy(n)}var py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function my(e){return e.replace(py,hy)}function hy(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function gy(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var _y={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function vy(e){return _y[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var yy={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function by(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:yy[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var xy={302:`ENVMAP_MODE_REFRACTION`};function Sy(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:xy[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Cy={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function wy(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Cy[e.combine]||`ENVMAP_BLENDING_NONE`}function Ty(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ey(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vy(n),l=by(n),u=Sy(n),d=wy(n),f=Ty(n),p=ry(n),m=iy(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(oy).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(oy).join(`
`),_.length>0&&(_+=`
`)):(g=[gy(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(oy).join(`
`),_=[gy(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:ey(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,Qv(`linearToOutputTexel`,n.outputColorSpace),ny(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(oy).join(`
`)),o=uy(o),o=sy(o,n),o=cy(o,n),s=uy(s),s=sy(s,n),s=cy(s,n),o=my(o),s=my(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Gv(i,i.VERTEX_SHADER,y),S=Gv(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Zv(i,x,`vertex`),n=Zv(i,S,`fragment`);J(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):q(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Wv(i,h),T=ay(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Kv)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qv++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Dy=0,Oy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ky(e),t.set(e,n)),n}},ky=class{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}};function Ay(e){return e===1030||e===37490||e===36285}function jy(e,t,n,r,i,a){let o=new Fd,s=new Oy,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&q(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Qg[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,oe=!!i.displacementMap,I=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=ce&&!!i.anisotropyMap,ge=le&&!!i.clearcoatMap,_e=le&&!!i.clearcoatNormalMap,ve=le&&!!i.clearcoatRoughnessMap,ye=fe&&!!i.iridescenceMap,R=fe&&!!i.iridescenceThicknessMap,be=pe&&!!i.sheenColorMap,xe=pe&&!!i.sheenRoughnessMap,Se=!!i.specularMap,z=!!i.specularColorMap,Ce=!!i.specularIntensityMap,B=me&&!!i.transmissionMap,V=me&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:cd.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:oe,emissiveMap:I,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&Ay(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:he,clearcoat:le,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:R,sheen:pe,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:z,specularIntensityMap:Ce,transmission:me,transmissionMap:B,thicknessMap:V,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:I&&m(i.emissiveMap.channel),metalnessMapUv:L&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:R&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:z&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:B&&m(i.transmissionMap.channel),thicknessMapUv:V&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&cd.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:I&&i.emissiveMap.isVideoTexture===!0&&cd.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Qg[t];n=Lh.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ey(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function My(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ny(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Py(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fy(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ny),r.length>1&&r.sort(t||Py),i.length>1&&i.sort(t||Py)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Iy(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fy,e.set(t,[i])):n>=r.length?(i=new Fy,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ly(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new X,color:new of};break;case`SpotLight`:n={position:new X,direction:new X,color:new of,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new X,color:new of,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new X,skyColor:new of,groundColor:new of};break;case`RectAreaLight`:n={color:new of,position:new X,halfWidth:new X,halfHeight:new X}}return e[t.id]=n,n}}}function Ry(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zy=0;function By(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vy(e){let t=new Ly,n=Ry(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new X);let i=new X,a=new wd,o=new wd;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(By);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zy++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hy(e){let t=new Vy(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Uy(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hy(e),t.set(n,[a])):r>=i.length?(a=new Hy(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ky=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],qy=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Jy=new wd,Yy=new X,Xy=new X;function Zy(e,t,n){let r=new Hp,i=new Y,a=new Y,o=new yd,s=new Uh,c=new Wh,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Bh({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:Wy,fragmentShader:Gy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new np;m.setAttribute(`position`,new Vf(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ep(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(q(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){q(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){q(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new xd(i.x,i.y,{format:Pl,type:xl,minFilter:dl,magFilter:dl,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new im(i.x,i.y,bl),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Al,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=cl,d.map.depthTexture.magFilter=cl}else l.isPointLight?(d.map=new O_(i.x),d.map.depthTexture=new am(i.x,yl)):(d.map=new xd(i.x,i.y),d.map.depthTexture=new im(i.x,i.y,yl)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Al,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=dl,d.map.depthTexture.magFilter=dl):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=cl,d.map.depthTexture.magFilter=cl);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yy.setFromMatrixPosition(l.matrixWorld),e.position.copy(Yy),Xy.copy(e.position),Xy.add(Ky[t]),e.up.copy(qy[t]),e.lookAt(Xy),e.updateMatrixWorld(),n.makeTranslation(-Yy.x,-Yy.y,-Yy.z),Jy.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Jy,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new xd(i.x,i.y,{format:Pl,type:xl}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qy(e,t){function n(){let t=!1,n=new yd,r=null,i=new yd(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Wu[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new of(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new yd().fromArray(re),F=new yd().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let I={};I[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),I[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),I[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:J(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:J(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:J(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:J(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+M-1),P!==t&&(e.activeTexture(t),P=t)}function be(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+M-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||I[t]),i.type=t,i.texture=n)}function xe(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function B(){try{e.texSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function H(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function je(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new of(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:R,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:z,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:Ce,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:we,scissor:H,viewport:je,reset:Pe}}function $y(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Y,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Lu(`canvas`)}function g(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),q(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&q(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];q(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||q(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ku:cd.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,q(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&q(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ee(t,i){let a=r.get(t);if(t.isVideoTexture&&be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)q(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)q(`WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?se(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?se(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ce(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[al]:e.REPEAT,[ol]:e.CLAMP_TO_EDGE,[sl]:e.MIRRORED_REPEAT},ie={[cl]:e.NEAREST,[ll]:e.NEAREST_MIPMAP_NEAREST,[ul]:e.NEAREST_MIPMAP_LINEAR,[dl]:e.LINEAR,[fl]:e.LINEAR_MIPMAP_NEAREST,[pl]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&q(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function I(e,t,n){return Math.floor(Math.floor(e/n)/t)}function L(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=I(n.start,r.width,4),c=I(t.start,r.width,4);n.start<=i+1&&a===c&&I(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=cd.getPrimaries(cd.workingColorSpace),r=o.colorSpace===``?null:cd.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=xe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);F(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===jl,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&L(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Jg(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Jg(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Se(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=cd.getPrimaries(cd.workingColorSpace),r=o.colorSpace===``?null:cd.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=xe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);F(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ye(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),F(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ee(i.depthTexture,0);let u=l.__webglTexture,d=ye(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)de(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?de(i.__webglFramebuffer[0],t,0):de(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ue(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ue(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&fe(t)}function me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&R(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ye(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),F(c,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),F(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&fe(t)}function he(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ge=[],_e=[];function ve(t){if(t.samples>0){if(R(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ge.push(l),_e.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ye(e){return Math.min(i.maxSamples,e.samples)}function R(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function be(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function xe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(cd.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&q(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):J(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=te,this.setTexture3D=P,this.setTextureCube=ne,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=R,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function eb(e,t){function n(n,r=``){let i,a=cd.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rb=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new om(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bh({vertexShader:tb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ep(new kh(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ib=class extends Gu{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new rb,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Y,C=null,w=null,T=new Cg;T.viewport=new yd;let E=new Cg;E.viewport=new yd;let D=[T,E],O=new Ag,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ef,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ef,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ef,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?jl:Al,a=_.stencil?wl:yl);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xd(d.textureWidth,d.textureHeight,{format:kl,type:ml,depthTexture:new im(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xd(f.framebufferWidth,f.framebufferHeight,{format:kl,type:ml,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ee=new X,te=new X;function P(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?P(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ju*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Cg,o.layers.enable(n),o.viewport=new yd,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new om,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new Xg;F.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},ab=new wd,ob=new Z;ob.set(-1,0,0,0,1,0,0,0,1);function sb(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ih(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ab.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ob),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cb(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return J(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?q(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):q(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var lb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ub=null;function db(){return ub===null&&(ub=new kp(lb,16,16,Pl,xl),ub.name=`DFG_LUT`,ub.minFilter=dl,ub.magFilter=dl,ub.wrapS=ol,ub.wrapT=ol,ub.generateMipmaps=!1,ub.needsUpdate=!0),ub}var fb=class{constructor(e={}){let{canvas:t=Ru(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ml}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Il,Fl,Nl]),g=new Set([ml,yl,_l,wl,Sl,Cl]),_=new Uint32Array(4),v=new Int32Array(4),y=new X,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Du;let j=0,M=0,N=null,ee=-1,te=null,P=new yd,ne=new yd,re=null,ie=new of(0),ae=0,F=t.width,oe=t.height,I=1,L=null,se=null,ce=new yd(0,0,F,oe),le=new yd(0,0,F,oe),ue=!1,de=new Hp,fe=!1,pe=!1,me=new wd,he=new X,ge=new yd,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return N===null?I:1}let R=n;function be(e,n){return t.getContext(e,n)}let xe,Se,z,Ce,B,V,we,Te,Ee,De,Oe,ke,Ae,H,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),R===null){let t=`webgl2`;if(R=be(t,e),R===null)throw be(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Be()}catch(e){throw t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),J(`WebGLRenderer: `+e.message),e}function Be(){xe=new A_(R),xe.init(),Le=new eb(R,xe),Se=new a_(R,xe,e,Le),z=new Qy(R,xe),Se.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),O=R.createFramebuffer(),k=R.createFramebuffer(),A=R.createFramebuffer(),Ce=new N_(R),B=new My,V=new $y(R,xe,z,B,Se,Le,Ce),we=new k_(T),Te=new Zg(R),Re=new r_(R,Te),Ee=new j_(R,Te,Ce,Re),De=new F_(R,Ee,Te,Re,Ce),Pe=new P_(R,Se,V),je=new o_(B),Oe=new jy(T,we,xe,Se,Re,je),ke=new sb(T,B),Ae=new Iy,H=new Uy(xe),Ne=new n_(T,we,z,De,p,s),Me=new Zy(T,De,Se),ze=new cb(R,Ce,Se,z),Fe=new i_(R,xe,Ce),Ie=new M_(R,xe,Ce),Ce.programs=Oe.programs,T.capabilities=Se,T.extensions=xe,T.properties=B,T.renderLists=Ae,T.shadowMap=Me,T.state=z,T.info=Ce}m!==1009&&(w=new L_(m,t.width,t.height,o,r,i));let Ve=new ib(T,R);this.xr=Ve,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(e){e!==void 0&&(I=e,this.setSize(F,oe,!1))},this.getSize=function(e){return e.set(F,oe)},this.setSize=function(e,n,r=!0){Ve.isPresenting?q(`WebGLRenderer: Can't change size while VR device is presenting.`):(F=e,oe=n,t.width=Math.floor(e*I),t.height=Math.floor(n*I),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(F*I,oe*I).floor()},this.setDrawingBufferSize=function(e,n,r){F=e,oe=n,I=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)J(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){q(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(ce)},this.setViewport=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),z.viewport(P.copy(ce).multiplyScalar(I).round())},this.getScissor=function(e){return e.copy(le)},this.setScissor=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),z.scissor(ne.copy(le).multiplyScalar(I).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(e){z.setScissorTest(ue=e)},this.setOpaqueSort=function(e){L=e},this.setTransparentSort=function(e){se=e},this.getClearColor=function(e){return e.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ne.getClearColor(),r=Ne.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,R.clearBufferiv(R.COLOR,0,v))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Ne.dispose(),Ae.dispose(),H.dispose(),B.dispose(),we.dispose(),De.dispose(),Re.dispose(),ze.dispose(),Oe.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,Ze),Ve.removeEventListener(`sessionend`,Qe),$e.stop()};function He(e){e.preventDefault(),Bu(`WebGLRenderer: Context Lost.`),E=!0}function Ue(){Bu(`WebGLRenderer: Context Restored.`),E=!1;let e=Ce.autoReset,t=Me.enabled,n=Me.autoUpdate,r=Me.needsUpdate,i=Me.type;Be(),Ce.autoReset=e,Me.enabled=t,Me.autoUpdate=n,Me.needsUpdate=r,Me.type=i}function We(e){J(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){qe(e),B.remove(e)}function qe(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=lt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ee.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Re.setup(i,r,s,n,c);let h,g=Fe;if(c!==null&&(h=Te.get(c),g=Ie,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*ye()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Te.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Je(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),fe===!0&&je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,at(e,t,r),e.side=0,e.needsUpdate=!0,at(e,t,r),e.side=2):at(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=H.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),pe=this.localClippingEnabled,fe=je.init(this.clippingPlanes,pe),fe===!0&&je.setGlobalState(this.clippingPlanes,t),D!==null&&Me.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Je(o,n,t,e),r.add(o)}else Je(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ye=null;function Xe(e){Ye&&Ye(e)}function Ze(){$e.stop()}function Qe(){$e.start()}let $e=new Xg;$e.setAnimationLoop(Xe),typeof self<`u`&&$e.setContext(self),this.setAnimationLoop=function(e){Ye=e,Ve.setAnimationLoop(e),e===null?$e.stop():$e.start()},Ve.addEventListener(`sessionstart`,Ze),Ve.addEventListener(`sessionend`,Qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){J(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ve.enabled===!0&&Ve.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=H.get(e,C.length),x.init(t),x.state.textureUnits=V.getTextureUnits(),C.push(x),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),de.setFromProjectionMatrix(me,Pu,t.reversedDepth),pe=this.localClippingEnabled,fe=je.init(this.clippingPlanes,pe),b=Ae.get(e,S.length),b.init(),S.push(b),Ve.enabled===!0&&Ve.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&et(e,t,-1/0,T.sortObjects)}et(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(L,se),ve=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,ve&&Ne.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&je.beginShadows();let i=x.state.shadowsArray;if(Me.render(i,e,t),fe===!0&&je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];nt(n,r,e,a)}ve&&Ne.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];tt(b,e,n,n.viewport)}}else r.length>0&&nt(n,r,e,t),ve&&Ne.render(e),tt(b,e,t)}N!==null&&M===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Re.resetDefaultState(),ee=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],V.setTextureUnits(x.state.textureUnits),fe===!0&&je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function et(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(de)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let i=De.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ge.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(de))){let i=De.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ge.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ge.z,s,t)}}else a.visible&&b.push(e,i,a,n,ge.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)et(i[e],t,n,r)}function tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),fe===!0&&je.setGlobalState(T.clippingPlanes,n),r&&z.viewport(P.copy(r)),i.length>0&&rt(i,t,n),a.length>0&&rt(a,t,n),o.length>0&&rt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function nt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new xd(1,1,{generateMipmaps:!0,type:e?xl:ml,minFilter:pl,samples:Math.max(4,Se.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:cd.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),ve&&Ne.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),fe===!0&&je.setGlobalState(T.clippingPlanes,r),rt(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,it(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function rt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&it(o,t,n,s,l,c)}}function it(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function at(e,t,n){t.isScene!==!0&&(t=_e);let r=B.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=we.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return st(e,s),d}else s.uniforms=Oe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Oe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=je.uniform),st(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wv.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function st(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function lt(e,t,n,r,i){t.isScene!==!0&&(t=_e),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:cd.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=we.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=x.state.lights;if(fe===!0&&(pe===!0||e!==te)){let t=e===te&&r.id===ee;je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==je.numPlanes||v.numIntersection!==je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=at(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),v.needsLights){let e=ct(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(R,`projectionMatrix`,e.projectionMatrix),O.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(R,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&O.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&O.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&O.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&O.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){O.setOptional(R,i,`bindMatrix`),O.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(O.setOptional(R,i,`batchingTexture`),O.setValue(R,`batchingTexture`,i._matricesTexture,V),O.setOptional(R,i,`batchingIdTexture`),O.setValue(R,`batchingIdTexture`,i._indirectTexture,V),O.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Pe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=db()),w){if(O.setValue(R,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ut(k,E),a&&r.fog===!0&&ke.refreshFogUniforms(k,a),ke.refreshMaterialUniforms(k,r,I,oe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Wv.upload(R,ot(v),k,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wv.upload(R,ot(v),k,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(R,`center`,i.center),O.setValue(R,`modelViewMatrix`,i.modelViewMatrix),O.setValue(R,`normalMatrix`,i.normalMatrix),O.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ze.update(n,S),ze.bind(n,S)}}return S}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,z.viewport(P),z.scissor(ne),z.setScissorTest(re),ee=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else P.copy(ce).multiplyScalar(I).floor(),ne.copy(le).multiplyScalar(I).floor(),re=ue;if(n!==0&&(r=O),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(P),z.scissor(ne),z.setScissorTest(re),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function ft(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Se.textureFormatReadable(e.format),t.__typeReadable=Se.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=ft(o);if(u.__formatReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Le.convert(c),Le.convert(l),a)}finally{let e=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Le.convert(l),Le.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Uu(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Le.convert(t.format),_=Le.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,k),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,z.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Pu}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=cd._getDrawingBufferColorSpace(e),t.unpackColorSpace=cd._getUnpackColorSpace()}},pb=60,mb=2.4,hb=Math.PI/180*68,gb=40,_b=90,vb=256,yb=512,bb=48,xb=class{constructor(e,t=1){this.zoom=t,this.scene=new cf,this.camera=new Cg(gb,1,1,1e3),this.ships=new Map,this.focus=new X(160,0,160),this.focusInitialized=!1,this.selfId=null,this.trailsVisible=!1,this.projected=new X,this.cameraOffset=new X,this.raycaster=new Wg,this.seaPlane=new op(new X(0,1,0),0),this.pointer=new Y,this.hit=new X,this.materials=new Map,this.dummy=new Zd,this.shieldGeometry=new jh(4.6,16,10,0,Math.PI*2,0,Math.PI/2),this.shieldMaterial=new mp({color:10479615,transparent:!0,opacity:.22,depthWrite:!1}),this.ringGeometry=new Ah(4.6,5.2,40).rotateX(-Math.PI/2),this.ringMaterial=new mp({color:16765518,transparent:!0,opacity:.75}),this.aimMaterial=new mp({color:16777215,transparent:!0,opacity:.2,side:2,depthWrite:!1}),this.aimKey=``,this.rangeMaterial=new mp({color:16777215,transparent:!0,opacity:.16,depthWrite:!1}),this.rangeRadius=0,this.effectRing=new Ah(.7,1,24).rotateX(-Math.PI/2),this.effectBall=new jh(1,12,8),this.projectileMeshes=new Map,this.projectileCounts=new Map,this.effects=[],this.renderer=new fb({antialias:window.devicePixelRatio<2,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.canvas=this.renderer.domElement,e.appendChild(this.canvas),this.scene.background=new of(736604),this.scene.add(new dg(14676479,734544,1.8));let n=new Eg(16777215,1.6);n.position.set(40,90,30),this.scene.add(n),this.buildSea(),this.buildIslands(),this.crates=Cb(new sm(1.5,1.1,1.5),this.material(10119738),vb),this.coins=Cb(new cm(.9,.9,.35,12),new Hh({color:16763955,emissive:5583616}),vb),this.scene.add(this.crates,this.coins),this.projectileMeshes.set(sc.ball,Cb(new jh(.5,8,6),new Hh({color:2236962}),yb)),this.projectileMeshes.set(sc.arrow,Cb(new sm(1.4,.18,.18),new mp({color:16752704}),yb)),this.projectileMeshes.set(sc.axe,Cb(new sm(.7,.2,.7),new Hh({color:12107976}),yb)),this.projectileMeshes.set(sc.rocket,Cb(new lm(.4,1.6,8).rotateZ(-Math.PI/2),new mp({color:16728112}),yb));for(let e of this.projectileMeshes.values())this.scene.add(e);this.aimMesh=new Ep(new np,this.aimMaterial),this.aimMesh.visible=!1,this.aimMesh.renderOrder=1,this.rangeMesh=new Ep(new np,this.rangeMaterial),this.rangeMesh.visible=!1,this.scene.add(this.aimMesh,this.rangeMesh),this.buildEffectPool(),this.resize(),addEventListener(`resize`,()=>this.resize())}setTrailsVisible(e){this.trailsVisible=e;for(let t of this.ships.values())t.trail.visible=e,t.trailCount=0}addShip(e,t){let n=new Qd,r=this.buildModel(t.kind,t.hue,t.self);n.add(r);let i=new Ep(this.shieldGeometry,this.shieldMaterial);if(i.visible=!1,n.add(i),t.self){this.selfId=e;let t=new Ep(this.ringGeometry,this.ringMaterial);t.position.y=.05,n.add(t)}let a=new Float32Array(270),o=new np;o.setAttribute(`position`,new Vf(a,3).setUsage(Nu)),o.setDrawRange(0,0);let s=new Zp(o,new Up({color:t.self?16765518:16777215}));s.frustumCulled=!1,s.visible=this.trailsVisible;let c={root:n,model:r,kind:t.kind,hue:t.hue,self:t.self,shield:i,bobPhase:Math.random()*Math.PI*2,trail:s,trailPositions:a,trailCount:0};n.visible=!1,this.scene.add(n,s),this.ships.set(e,c)}removeShip(e){let t=this.ships.get(e);t&&(this.scene.remove(t.root,t.trail),t.trail.geometry.dispose(),t.trail.material.dispose(),this.ships.delete(e),this.selfId===e&&(this.selfId=null))}hideShip(e){let t=this.ships.get(e);t&&(t.root.visible=!1)}updateShip(e,t,n,r,i,a,o){let s=this.ships.get(e);s&&(a!==s.kind&&(s.root.remove(s.model),s.kind=a,s.model=this.buildModel(a,s.hue,s.self),s.root.add(s.model)),s.root.visible=!0,s.shield.visible=o,s.root.position.set(t,Math.sin(i*2.2+s.bobPhase)*.08,n),s.root.rotation.y=-r,this.trailsVisible&&Tb(s,t,n))}follow(e,t,n){if(!this.focusInitialized)this.focus.set(e,0,t),this.focusInitialized=!0;else{let r=1-Math.exp(-7*n);this.focus.x+=(e-this.focus.x)*r,this.focus.z+=(t-this.focus.z)*r}this.camera.position.copy(this.focus).add(this.cameraOffset),this.camera.lookAt(this.focus)}showAim(e,t,n,r,i){let a=`${r.inner.toFixed(1)}|${r.range.toFixed(1)}|${r.half.toFixed(3)}`;if(a!==this.aimKey){this.aimKey=a;let e=Math.max(r.half,Math.atan2(.8,r.range));this.aimMesh.geometry.dispose(),this.aimMesh.geometry=new Ah(r.inner,r.range,24,1,-e,e*2).rotateX(Math.PI/2)}this.aimMesh.position.set(e,.08,t),this.aimMesh.rotation.y=-n,this.aimMaterial.opacity=i?.34:.12,this.aimMesh.visible=!0}hideAim(){this.aimMesh.visible=!1}showRange(e,t,n){Math.abs(n-this.rangeRadius)>.01&&(this.rangeRadius=n,this.rangeMesh.geometry.dispose(),this.rangeMesh.geometry=new Ah(n-.15,n+.15,72).rotateX(-Math.PI/2)),this.rangeMesh.position.set(e,.06,t),this.rangeMesh.visible=!0}hideRange(){this.rangeMesh.visible=!1}get hasFocus(){return this.focusInitialized}groundAt(e,t){return this.pointer.set(e/this.canvas.clientWidth*2-1,-(t/this.canvas.clientHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.ray.intersectPlane(this.seaPlane,this.hit)?{x:this.hit.x,y:this.hit.z}:null}selfOnScreen(){let e=this.selfId?this.ships.get(this.selfId):null;return!e||!e.root.visible?null:this.toScreen(e.root.position.x,e.root.position.z,0)}toScreen(e,t,n){return this.projected.set(e,n,t).project(this.camera),this.projected.z>1?null:{x:(this.projected.x*.5+.5)*this.canvas.clientWidth,y:(-this.projected.y*.5+.5)*this.canvas.clientHeight}}drawLoot(e,t){let n=0,r=0;for(let i of e){let e=i.coin?this.coins:this.crates,a=i.coin?r++:n++;if(a>=vb)continue;let o=i.x*.37+i.y*.21;this.dummy.position.set(i.x,.35+Math.sin(t*2+o)*.15,i.y),this.dummy.rotation.set(i.coin?Math.PI/2:0,t*(i.coin?2:.4)+o,0),this.dummy.updateMatrix(),e.setMatrixAt(a,this.dummy.matrix)}this.crates.count=Math.min(n,vb),this.coins.count=Math.min(r,vb),this.crates.instanceMatrix.needsUpdate=!0,this.coins.instanceMatrix.needsUpdate=!0}beginProjectiles(){this.projectileCounts.clear()}drawProjectile(e){let t=this.projectileMeshes.get(e.kind);if(!t)return;let n=this.projectileCounts.get(e.kind)??0;n>=yb||(this.projectileCounts.set(e.kind,n+1),this.dummy.position.set(e.x,e.height,e.y),this.dummy.rotation.set(0,-e.angle,0),this.dummy.updateMatrix(),t.setMatrixAt(n,this.dummy.matrix))}endProjectiles(){for(let[e,t]of this.projectileMeshes)t.count=this.projectileCounts.get(e)??0,t.instanceMatrix.needsUpdate=!0}spawnEffect(e,t,n){let r=this.effects.find(e=>!e.mesh.visible)??this.effects.reduce((e,t)=>t.age/t.life>e.age/e.life?t:e),i=Sb[e];r.age=0,r.life=i.life,r.scale=i.scale,r.material.color.setHex(i.color),r.mesh.geometry=i.ring?this.effectRing:this.effectBall,r.mesh.position.set(t,i.ring?.1:1,n),r.mesh.scale.setScalar(i.scale*.3),r.mesh.visible=!0}render(e){for(let t of this.effects){if(!t.mesh.visible)continue;t.age+=e;let n=t.age/t.life;n>=1?t.mesh.visible=!1:(t.mesh.scale.setScalar(t.scale*(.3+n*.9)),t.material.opacity=.85*(1-n))}this.renderer.render(this.scene,this.camera)}buildEffectPool(){for(let e=0;e<bb;e++){let e=new mp({color:16777215,transparent:!0,depthWrite:!1}),t=new Ep(this.effectRing,e);t.visible=!1,this.scene.add(t),this.effects.push({mesh:t,material:e,age:0,life:1,scale:1})}}buildModel(e,t,n){let r=n?16774358:new of().setHSL(t/255,.65,.55).getHex(),i=new Qd,a=(e,t,n,r)=>(e.position.set(t,n,r),i.add(e),e),o=(e,t,n,r)=>new Ep(new sm(e,t,n),this.material(r)),s=e=>new Ep(new cm(.12,.15,e,6),this.material(5978654)),c=(e,t,n)=>new Ep(new kh(e,t).rotateY(Math.PI/2),this.material(n,!0));switch(e){case oc.viking:i.add(new Ep(wb(7.4,1.9),this.material(7029795))),a(o(.5,1.4,.5,7029795),3.4,1.3,0),a(s(4.6),.2,2.9,0),a(c(3.8,3,r),.35,3.2,0),a(c(3.82,.6,16777215),.38,3.6,0);for(let e=0;e<5;e++){let t=e%2?15913323:r;for(let n of[-1,1])a(new Ep(new cm(.4,.4,.15,10).rotateX(Math.PI/2),this.material(t)),-2.4+e*1.1,.8,n)}break;case oc.english:i.add(new Ep(wb(7.8,3.3),this.material(2893344))),a(o(7,.25,3.36,14200906),-.4,.55,0);for(let[e,t,n]of[[-2.2,4.4,2.6],[.3,5.6,3.2],[2.4,4.6,2.4]])a(s(t),e,.7+t/2,0),a(c(n,t*.55,16052194),e+.15,.9+t*.55,0);a(c(.9,.6,r),.45,6.7,.5);break;case oc.jonka:i.add(new Ep(wb(7,2.8),this.material(8010530))),a(o(1.8,1.4,2.6,8010530),-2.6,1.3,0);for(let[e,t]of[[-.6,4.6],[1.8,3.8]]){a(s(t),e,.7+t/2,0),a(c(3,t*.75,r),e+.15,1.2+t*.5,0);for(let n=0;n<4;n++)a(o(.08,.08,3.05,3809296),e+.2,.9+t*.2+t*.18*n,0)}break;case oc.merchant:i.add(new Ep(wb(6.6,3.2),this.material(11569754))),a(o(1.2,1,1.2,9071162),-1.4,1.2,.6),a(o(1.2,1,1.2,9071162),-1.4,1.2,-.6),a(o(1.2,1,1.2,9071162),-.1,1.2,0),a(s(4.2),1.2,2.8,0),a(c(3.2,2.6,15260864),1.35,3,0);break;default:i.add(new Ep(wb(5.8,2.4),this.material(9067059))),a(s(4.2),.3,2.6,0),a(c(3.4,3,r),.45,2.9,0)}return i}material(e,t=!1){let n=`${e}:${t}`,r=this.materials.get(n);return r||(r=new Hh({color:e,side:t?2:0}),this.materials.set(n,r)),r}resize(){let e=this.canvas.parentElement?.clientWidth??innerWidth,t=this.canvas.parentElement?.clientHeight??innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();let n=gb/2*(Math.PI/180),r=2*Math.tan(n)*this.camera.aspect,i=Math.sin(hb)*(1/Math.tan(hb-n)-1/Math.tan(hb+n)),a=Math.min(pb/Math.min(r,i),pb*mb/Math.max(r,i));this.cameraOffset.set(0,Math.sin(hb),Math.cos(hb)).multiplyScalar(a*this.zoom),this.camera.far=a*this.zoom*3,this.camera.updateProjectionMatrix(),this.focusInitialized&&(this.camera.position.copy(this.focus).add(this.cameraOffset),this.camera.lookAt(this.focus))}buildSea(){let e=new Ep(new kh(1280,1280).rotateX(-Math.PI/2),new Hh({color:1002091}));e.position.set(160,-.02,160);let t=new Ep(new kh(320,320).rotateX(-Math.PI/2),new Hh({color:1799328}));t.position.set(160,0,160);let n=new qg(320,16,9425919,9425919),r=n.material;r.transparent=!0,r.opacity=.22,n.position.set(160,.02,160);let i=new nm(new np().setFromPoints([new X(0,.05,0),new X(320,.05,0),new X(320,.05,320),new X(0,.05,320)]),new Up({color:16777215}));this.scene.add(e,t,n,i)}buildIslands(){let e=this.material(14862735),t=this.material(5216842),n=this.material(9143160);for(let r of vc){let i=new Ep(new cm(r.r,r.r*1.08,1.4,28),e);i.position.set(r.x,.4,r.y);let a=new Ep(new jh(r.r*.72,18,10,0,Math.PI*2,0,Math.PI/2),t);a.scale.y=.45,a.position.set(r.x,1.05,r.y);let o=new Ep(new dm(r.r*.22),n);o.position.set(r.x+r.r*.35,1.6,r.y-r.r*.2),this.scene.add(i,a,o)}}},Sb={splash:{color:15267583,life:.5,scale:2.2,ring:!0},blast:{color:16752704,life:.35,scale:2.4,ring:!1},wreck:{color:16769184,life:.9,scale:9,ring:!0}};function Cb(e,t,n){let r=new Rp(e,t,n);return r.instanceMatrix.setUsage(Nu),r.count=0,r.frustumCulled=!1,r}function wb(e,t){let n=e/2,r=t/2,i=n-t*.75,a=new Hm;a.moveTo(-n,-r*.9),a.lineTo(i,-r),a.lineTo(n,0),a.lineTo(i,r),a.lineTo(-n,r*.9),a.closePath();let o=new Eh(a,{depth:1,bevelEnabled:!1});return o.rotateX(Math.PI/2),o.translate(0,.7,0),o.computeVertexNormals(),o}function Tb(e,t,n){let r=e.trailPositions;e.trailCount===_b&&(r.copyWithin(0,3),e.trailCount--);let i=e.trailCount*3;r[i]=t,r[i+1]=.3,r[i+2]=n,e.trailCount++;let a=e.trail.geometry;a.setDrawRange(0,e.trailCount),a.attributes.position.needsUpdate=!0}var Eb=`dynamic`,Db=`semi`,Ob=`static`,kb=typeof window<`u`&&`ontouchstart`in window,Ab={start:`mousedown`,move:`mousemove`,end:`mouseup, mouseleave`,pressure:`webkitmouseforcechanged`},jb,Mb;typeof window<`u`&&window.PointerEvent?jb={start:`pointerdown`,move:`pointermove`,end:`pointerup, pointercancel, pointerleave`,pressure:`webkitmouseforcechanged`}:kb?(jb={start:`touchstart`,move:`touchmove`,end:`touchend, touchcancel`,pressure:`webkitmouseforcechanged`},Mb=Ab):jb=Ab;var Nb=jb,Pb=Mb,Fb=Math.PI/4,Ib=Math.PI/2,Lb=(e,t)=>{let n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)},Rb=e=>Math.PI/180*e,zb=e=>180/Math.PI*e,Bb=new Map,Vb=e=>{Bb.has(e)&&clearTimeout(Bb.get(e)),Bb.set(e,setTimeout(e,100))},Hb=(e,t,n)=>{let r=t.split(/[ ,]+/g);for(let t=0;t<r.length;t+=1)e.addEventListener(r[t],n,!1)},Ub=(e,t,n)=>{let r=t.split(/[ ,]+/g);for(let t=0;t<r.length;t+=1)e.removeEventListener(r[t],n)},Wb=e=>`force`in e?e.force:`pressure`in e?e.pressure:`webkitForce`in e?e.webkitForce/3:+(`buttons`in e&&e.buttons!==0),Gb=(e,t)=>({identifier:`identifier`in t?t.identifier:`pointerId`in t?t.pointerId:1,isTouch:`touches`in e||`changedTouches`in e,position:{x:t.pageX,y:t.pageY},pressure:Wb(t),type:e.type,initial:e,raw:t}),Kb=()=>({x:window.scrollX,y:window.scrollY}),qb=(e,t)=>{let{left:n,top:r,right:i,bottom:a,x:o,y:s}=t;r||i||a||n?Yb(e.style,{top:r,right:i,bottom:a,left:n}):(Xb(o)||Xb(s))&&Yb(e.style,{left:Xb(o)?`${o}px`:void 0,top:Xb(s)?`${s}px`:void 0})},Jb=(e,t=``)=>({[e]:t}),Yb=(e,t)=>{for(let n in t)Object.hasOwn(t,n)&&(e[n]=t[n]);return e},Xb=e=>typeof e==`number`&&!isNaN(e),Zb={debug:0,info:1,warning:2,error:3,none:4},Qb=`warning`,$b=class{constructor(e){this.uid=0,this.index=0,this.name=`super`,this._domHandlers_=new Map,this._handlers_={},this.name=e,this.log(`construct`,this.name,this.index)}mapOnEvents(e,t){let n=e.split(/[ ,]+/g);for(let e=0;e<n.length;e+=1)t(n[e])}on(e,t){this.mapOnEvents(e,(e=>{this._handlers_[e]=this._handlers_[e]||new Set,this._handlers_[e].add(t)}))}off(e,t){e===void 0?this._handlers_={}:this.mapOnEvents(e,(e=>{t===void 0?this._handlers_[e]=new Set:this._handlers_[e]&&this._handlers_[e].delete(t)}))}trigger(e,t){this.mapOnEvents(e,(e=>{this.log(`- "${e}" [trigger]`);let n=this._handlers_[e];if(n&&n.size){let r=[...n];for(let n of r)n.call(this,{type:e,target:this,data:t})}}))}bindEvt(e,t,n){let r=e=>{for(let r of(e=>{e.type.toLowerCase().includes(`move`)&&e.preventDefault();let t=[];if(`changedTouches`in e)for(let n of Array.from(e.changedTouches))n&&t.push(n);else t.push(e);return t.map((t=>Gb(e,t)))})(e))this.log(`- "${t}" [dom:trigger:${r.identifier}]`),n.call(this,r)};this._domHandlers_.set(n,r),Hb(e,Nb[t],r),Pb?.[t]&&Hb(e,Pb[t],r)}unbindEvt(e,t,n){let r=this._domHandlers_.get(n);r?(Ub(e,Nb[t],r),Pb?.[t]&&Ub(e,Pb[t],r),this._domHandlers_.delete(n)):this.error(`Internal handler not found for event ${t}.`,n)}logPrefix(){return{super:``,joystick:`  `,collection:`    `,factory:`      `}[this.name]}logSuffix(){return`[${this.name}|${this.uid}]`}static get logLevel(){return Qb}static set logLevel(e){Qb=e}log(...e){Zb[Qb]<=Zb.debug&&console.log(this.logPrefix(),...e,this.logSuffix())}info(...e){Zb[Qb]<=Zb.info&&console.info(this.logPrefix(),...e,this.logSuffix())}warn(...e){Zb[Qb]<=Zb.warning&&console.warn(this.logPrefix(),...e,this.logSuffix())}error(...e){Zb[Qb]<=Zb.error&&console.error(this.logPrefix(),...e,this.logSuffix())}},ex=class e extends $b{constructor(t,n){super(`joystick`),this.direction={},this.defaults={size:100,threshold:.1,color:`white`,fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:`dynamic`,zone:document.body,lockX:!1,lockY:!1,shape:`circle`},this.position=n.position,this.frontPosition=n.frontPosition,this.collection=t,this.options={...this.defaults,...n},this.options.mode===`dynamic`&&(this.options.restOpacity=0),this.uid=e.index++,this.ui={el:document.createElement(`div`),back:document.createElement(`div`),front:document.createElement(`div`)}}init(){this.options.dataOnly||this.buildEl(),this.trigger(`added`,this),this.trigger(`joystickCreated`,this)}get identifier(){return this._identifier}set identifier(e){Xb(e)?(this._identifier=e,this.trigger(`attached`,{collection:this.collection,joystick:this,identifier:e})):(this.trigger(`detached`,{collection:this.collection,joystick:this,identifier:this._identifier}),this._identifier=void 0)}resolveColors(){let e=this.options.color;return typeof e==`object`&&e?e:{front:e,back:e}}buildEl(){this.ui.el.className=`joystick collection_${this.collection.uid}`,this.ui.back.className=`back`,this.ui.front.className=`front`,this.ui.el.setAttribute(`id`,`joystick_${this.collection.uid}_${this.uid}`),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front);let e=`${this.options.fadeTime}ms`,t=Jb(`borderRadius`,`50%`),n=Jb(`transition`,`opacity ${e}`),r=this.resolveColors();Yb(this.ui.el.style,{position:`absolute`,opacity:this.options.restOpacity.toString(),display:`block`,zIndex:`999`,touchAction:`none`,userSelect:`none`,...n}),Yb(this.ui.back.style,{position:`absolute`,display:`block`,width:`${this.options.size}px`,height:`${this.options.size}px`,left:`0`,marginLeft:-this.options.size/2+`px`,marginTop:-this.options.size/2+`px`,background:r.back,...this.options.shape===`circle`?t:{}}),Yb(this.ui.front.style,{width:this.options.size/2+`px`,height:this.options.size/2+`px`,position:`absolute`,display:`block`,left:`0`,marginLeft:-this.options.size/4+`px`,marginTop:-this.options.size/4+`px`,background:r.front,opacity:`.5`,transform:`translate(0px, 0px)`,...t})}get pressure(){return this._pressure??0}set pressure(e){e!==this._pressure&&(this._pressure=e,this.trigger(`pressure`,e))}startPressureInterval(e){this.pressureInterval||=window.setInterval((()=>{this.pressure=Wb(e)}),100)}stopPressureInterval(){clearInterval(this.pressureInterval),this.pressureInterval=void 0}addToDom(){this.options.dataOnly||this.options.zone.contains(this.ui.el)||this.options.zone.appendChild(this.ui.el)}removeFromDom(){!this.options.dataOnly&&this.options.zone.contains(this.ui.el)&&this.options.zone.removeChild(this.ui.el)}clearTimeouts(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),clearTimeout(this.activeTimeout),this.removeTimeout=void 0,this.showTimeout=void 0,this.restTimeout=void 0,this.activeTimeout=void 0}start(e,t){this.trigger(`start`,this),this.clearTimeouts(),this.options.dataOnly?typeof t==`function`&&t.call(this):(this.addToDom(),this.startPressureInterval(e),requestAnimationFrame((()=>{this.ui.el.style.opacity=`1`})),this.showTimeout=window.setTimeout((()=>{this.showTimeout=void 0,this.trigger(`shown`,this),typeof t==`function`&&t.call(this)}),this.options.fadeTime))}end(e){if(this.resetDirection(),this.clearTimeouts(),this.stopPressureInterval(),this.pressure=0,this.trigger(`end`,this),this.options.dataOnly)typeof e==`function`&&e.call(this);else{if(this.ui.el.style.opacity=this.options.restOpacity.toString(),this.options.restJoystick){let t=this.options.restJoystick,n={x:!0===t||!1!==t.x?0:this.frontPosition.x,y:!0===t||!1!==t.y?0:this.frontPosition.y};this.setPosition(e,n)}clearTimeout(this.removeTimeout),this.removeTimeout=window.setTimeout((()=>{this.removeTimeout=void 0,this.ui.el.style.display=this.options.mode===Eb?`none`:`block`,this.trigger(`hidden`,this),this.options.mode===Eb&&(this.trigger(`removed`,this),this.destroy()),typeof e==`function`&&e.call(this)}),this.options.fadeTime)}}setTransition(e=!1,t){if(e){let e=Yb(Jb(`transition`,`transform 100ms`),Jb(`transform`,`translate(${this.frontPosition.x}px, ${this.frontPosition.y}px)`));Yb(this.ui.front.style,e),clearTimeout(this.activeTimeout),this.activeTimeout=window.setTimeout((()=>{this.activeTimeout=void 0,typeof t==`function`&&t.call(this)}),100)}else Yb(this.ui.front.style,Jb(`transition`,`none`))}setPosition(e,t){this.frontPosition={x:t.x,y:t.y},this.setTransition(!0),clearTimeout(this.restTimeout),this.restTimeout=window.setTimeout((()=>{this.restTimeout=void 0,typeof e==`function`&&e.call(this),this.setTransition(!1),this.trigger(`rested`,this)}),this.options.fadeTime)}resetDirection(){this.direction={}}computeDirectionAndTriggerEvents(e){let t=e.angle.radian,n={};return t>Fb&&t<3*Fb&&!e.lockX?n.angle=`up`:t>-Fb&&t<=Fb&&!e.lockY?n.angle=`left`:t>3*-Fb&&t<=-Fb&&!e.lockX?n.angle=`down`:e.lockY||(n.angle=`right`),e.lockY||(n.x=t>-Ib&&t<Ib?`left`:`right`),e.lockX||(n.y=t>0?`up`:`down`),e.angle={radian:Rb(180-e.angle.degree),degree:180-e.angle.degree},this.triggerDirectionEvents(e,n),e}triggerDirectionEvents(e,t){if(e.force>this.options.threshold){let n={x:this.direction.x,y:this.direction.y,angle:this.direction.angle};this.direction=t,e.direction=t,n.x!==t.x&&this.trigger(`plain plain:${t.x}`,e),n.y!==t.y&&this.trigger(`plain plain:${t.y}`,e),n.angle!==t.angle&&this.trigger(`dir dir:${t.angle}`,e)}else this.resetDirection();this.trigger(`move`,e)}destroy(){this.clearTimeouts(),this.identifier=void 0,this.removeFromDom(),this.trigger(`joystickDestroyed`,this),this.off()}};ex.index=0;var tx=ex,nx=class e extends $b{constructor(t,n){super(`collection`),this.all=new Map,this.idles=new Set,this.actives=new Map,this.resting=new Map,this.parentIsFlex=!1,this.defaults={catchDistance:200,color:`white`,dataOnly:!1,dynamicPage:!1,fadeTime:250,follow:!1,lockX:!1,lockY:!1,maxNumberOfJoysticks:10,mode:Eb,multitouch:!1,position:{top:`0px`,left:`0px`},restJoystick:!0,restOpacity:.5,shape:`circle`,size:100,threshold:.1,zone:document.body},this.factory=t,this.uid=e.index++,this.options={...this.defaults,...n},this.options.mode!==Ob&&this.options.mode!==Db||(this.options.multitouch=!1),this.options.multitouch||(this.options.maxNumberOfJoysticks=1),(this.options.zone.parentElement&&getComputedStyle(this.options.zone.parentElement))?.display===`flex`&&(this.parentIsFlex=!0),getComputedStyle(this.options.zone).position===`static`&&this.warn(`The zone element has no CSS "position" set (it is "static").`,`Joysticks may not be positioned correctly.`,`Set "position: relative" (or absolute/fixed) on the zone element.`),this.box=this.options.zone.getBoundingClientRect(),this.bindEvt(this.options.zone,`start`,this.processOnStart),Yb(this.options.zone.style,{touchAction:`none`,userSelect:`none`,webkitUserSelect:`none`}),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver((()=>{this.reposition()})),this.resizeObserver.observe(this.options.zone))}init(){this.trigger(`collectionCreated`,this),this.options.mode===Ob&&this.createJoystick(this.options.position).addToDom()}getJoystickByUid(e){return e===void 0?this.all.values().next().value:this.all.get(e)}bindJoystick(e){e.on(`joystickDestroyed`,(()=>{this.deleteJoystickFromLists(e)})),e.on(`attached`,(t=>{this.idles.delete(t.data.joystick.uid),this.actives.set(t.data.identifier,e)})),e.on(`detached`,(e=>{this.idles.add(e.data.joystick.uid),this.deleteIdentifierFromLists(e.data.identifier)})),e.on(`end`,(t=>{Xb(t.data.identifier)&&(this.actives.delete(t.data.identifier),this.resting.set(t.data.identifier,e)),this.idles.add(t.data.uid)})),e.on(`start`,(e=>{Xb(e.data.identifier)&&this.resting.delete(e.data.identifier)})),e.on(`hidden`,(e=>{Xb(e.data.identifier)&&this.resting.delete(e.data.identifier)})),e.on(`pressure`,(t=>{this.trigger(`pressure ${e.uid}:pressure`,t.data)})),e.on(`attached detached`,(e=>{let t=`${e.type} ${e.data.joystick.uid}:${e.type}`;this.trigger(t,e.data)})),e.on(`added start shown hidden rested removed end joystickCreated joystickDestroyed`,(e=>{let t=`${e.type} ${e.data.uid}:${e.type}`;this.trigger(t,e.data)})),e.on(`move`,(e=>{this.trigger(`move ${e.data.instance.uid}:move`,e.data)})),e.on(`dir dir:up dir:right dir:down dir:left`,(e=>{let t=`${e.type} ${e.data.instance.uid}:${e.type}`;this.trigger(t,e.data)})),e.on(`plain plain:up plain:right plain:down plain:left`,(e=>{let t=`${e.type} ${e.data.instance.uid}:${e.type}`;this.trigger(t,e.data)}))}deleteJoystickFromLists(e){this.deleteUidFromLists(e.uid),Xb(e.identifier)&&this.deleteIdentifierFromLists(e.identifier)}deleteUidFromLists(e){this.all.delete(e),this.idles.delete(e)}deleteIdentifierFromLists(e){this.actives.delete(e),this.resting.delete(e)}getOrCreate(e){if(this.options.mode===Db||this.options.mode===Ob){let t=this.idles.values().next().value;if(Xb(t)){let e=this.all.get(t);if(e)return e;this.error(`Couldn't find the joystick ${t}. Creating a new one.`),this.deleteUidFromLists(t)}if(this.options.mode===Db)return this.createJoystick(e);this.warn(`Couldn't find the expected joystick. Creating a new one.`)}return this.createJoystick(e)}createJoystick(e){let t=this.factory.scroll,n=this.parentIsFlex?t.x:t.x+this.box.left,r=this.parentIsFlex?t.y:t.y+this.box.top,i,a;if(Xb(e.x)&&Xb(e.y))i={x:e.x-n,y:e.y-r},a={x:e.x,y:e.y};else{if(!(e.top||e.right||e.bottom||e.left))return void this.error(`Invalid or missing position.`,e);{let n=document.createElement(`DIV`);Yb(n.style,{visibility:`hidden`,position:`absolute`,top:e.top,right:e.right,bottom:e.bottom,left:e.left}),this.options.zone.appendChild(n);let r=n.getBoundingClientRect();this.options.zone.removeChild(n),i=e,a={x:r.left+t.x,y:r.top+t.y}}}let o=new tx(this,{color:this.options.color,size:this.options.size,threshold:this.options.threshold,fadeTime:this.options.fadeTime,dataOnly:this.options.dataOnly,restJoystick:this.options.restJoystick,restOpacity:this.options.restOpacity,mode:this.options.mode,position:a,zone:this.options.zone,frontPosition:{x:0,y:0},shape:this.options.shape});return this.all.has(o.uid)&&this.error(`Joystick with uid ${o.uid} already exists.`),this.options.dataOnly||(qb(o.ui.el,i),qb(o.ui.front,o.frontPosition)),this.all.set(o.uid,o),this.idles.add(o.uid),this.bindJoystick(o),o.init(),o}processOnStart(e,t=0){if(this.box=this.options.zone.getBoundingClientRect(),!this.actives.has(e.identifier)&&this.actives.size>=this.options.maxNumberOfJoysticks)return void this.warn(`No more joysticks allowed.`);let n=this.actives.get(e.identifier)||this.resting.get(e.identifier)||this.getOrCreate(e.position),r=()=>{n.start(e.raw),n.identifier=e.identifier,this.processOnMove(e,!0)};this.options.mode===Db?Lb(e.position,n.position)<=this.options.catchDistance?r():t<3?(n.destroy(),this.processOnStart(e,t+1)):this.error(`Max semi-mode recursion depth reached.`):r()}processOnMove(e,t=!1){let n=this.actives.get(e.identifier),r=this.factory.scroll;if(!n)return this.error(`Found zombie joystick onMove with identifier ${e.identifier}`),void this.deleteIdentifierFromLists(e.identifier);this.options.dynamicPage&&this.reposition();let i=n.options.size/2,a={x:e.position.x,y:e.position.y};this.options.lockX&&(a.y=n.position.y),this.options.lockY&&(a.x=n.position.x);let o=Lb(a,n.position),s=((e,t)=>{let n=t.x-e.x,r=t.y-e.y;return zb(Math.atan2(r,n))})(a,n.position),c=Rb(s),l=o/i,u={distance:o,position:a},d,f;n.options.shape===`circle`?(d=Math.min(o,i),f=((e,t,n)=>{let r=Rb(n);return{x:e.x-t*Math.cos(r),y:e.y-t*Math.sin(r)}})(n.position,d,s)):(f=((e,t,n)=>({x:Math.min(Math.max(e.x,t.x-n),t.x+n),y:Math.min(Math.max(e.y,t.y-n),t.y+n)}))(a,n.position,i),d=Lb(f,n.position));let p={x:0,y:0};if(this.options.follow){if(o>i){let e=a.x-f.x,t=a.y-f.y;p={x:e,y:-t},n.position.x+=e,n.position.y+=t,Yb(n.ui.el.style,{top:n.position.y-(this.box.top+r.y)+`px`,left:n.position.x-(this.box.left+r.x)+`px`}),o=Lb(a,n.position)}}else a=f,o=d;let m=a.x-n.position.x,h=a.y-n.position.y;n.frontPosition={x:m,y:h},this.options.dataOnly||(t&&n.setTransition(!0,(()=>{n.setTransition(!1)})),n.ui.front.style.transform=`translate(${m}px,${h}px)`);let g={position:a,force:l,pressure:e.pressure,distance:o,angle:{radian:c,degree:s},vector:{x:m/i,y:-h/i},raw:u,instance:n,lockX:this.options.lockX,lockY:this.options.lockY,baseDelta:p};n.computeDirectionAndTriggerEvents(g)}processOnEnd(e){let t=this.actives.get(e.identifier);if(!t)return this.error(`Found zombie joystick onEnd with identifier ${e.identifier}`),void this.deleteIdentifierFromLists(e.identifier);t.end()}reposition(){this.factory.scroll=Kb(),this.box=this.options.zone.getBoundingClientRect();let e=this.factory.scroll;this.all.forEach((t=>{if(t.options.dataOnly)return;let n=t.ui.el.getBoundingClientRect();t.position={x:e.x+n.left,y:e.y+n.top}}))}destroy(){this.resizeObserver&&=(this.resizeObserver.disconnect(),void 0),this.unbindEvt(this.options.zone,`start`,this.processOnStart),this.all.forEach((e=>{e.destroy()})),this.all.clear(),this.idles.clear(),this.actives.clear(),this.resting.clear(),this.trigger(`collectionDestroyed`,this),this.off()}};nx.index=0;var rx=nx,ix=new class extends $b{constructor(){super(`factory`),this.scroll=Kb(),this.binded=!1,this.joysticksByUid=new Map,this.joysticksByIdentifier=new Map,this.collections=new Set,this.resizeHandler=null,this.scrollHandler=null,this.repositionAll=()=>{this.collections.forEach((e=>{e.reposition()}))},this.refreshScroll=()=>{this.scroll=Kb()},this.bindResize(),this.bindScroll(),this.trigger(`factoryCreated`,this)}bindResize(){this.resizeHandler=()=>Vb(this.repositionAll),Hb(window,`resize`,this.resizeHandler)}bindScroll(){this.scrollHandler=()=>Vb(this.refreshScroll),Hb(window,`scroll`,this.scrollHandler)}getJoystickByUid(e){return this.joysticksByUid.get(e)}getJoystickByIdentifier(e){return this.joysticksByIdentifier.get(e)}create(e){let t=new rx(this,e);return this.bindCollection(t),this.collections.add(t),t.init(),t}removeJoystickFromLists(e){this.joysticksByUid.delete(e.uid),Xb(e.identifier)&&this.joysticksByIdentifier.delete(e.identifier)}bindCollection(e){e.on(`collectionDestroyed`,(e=>{this.collections.delete(e.data),e.data.all.forEach((e=>{this.removeJoystickFromLists(e)})),this.unbindDocument()})),e.on(`joystickDestroyed`,(e=>{this.removeJoystickFromLists(e.data),this.unbindDocument()})),e.on(`end`,(e=>{Xb(e.data.identifier)&&this.joysticksByIdentifier.delete(e.data.identifier),this.unbindDocument()})),e.on(`added`,(e=>{this.joysticksByUid.set(e.data.uid,e.data),this.bindDocument()})),e.on(`attached`,(e=>{this.joysticksByIdentifier.set(e.data.identifier,e.data.joystick)})),e.on(`pressure`,(e=>{this.trigger(`pressure ${e.target.uid}:pressure`,e.data)})),e.on(`collectionCreated collectionDestroyed`,(e=>{let t=`${e.type} ${e.data.uid}:${e.type}`;this.trigger(t,e.data)})),e.on(`attached detached`,(e=>{let t=`${e.type} ${e.data.joystick.uid}:${e.type}`;this.trigger(t,e.data)})),e.on(`added start shown hidden rested removed end joystickCreated joystickDestroyed`,(e=>{let t=`${e.type} ${e.data.uid}:${e.type}`;this.trigger(t,e.data)})),e.on(`move`,(e=>{this.trigger(`move ${e.data.instance.uid}:move`,e.data)})),e.on(`dir dir:up dir:right dir:down dir:left`,(e=>{let t=`${e.type} ${e.data.instance.uid}:${e.type}`;this.trigger(t,e.data)})),e.on(`plain plain:up plain:right plain:down plain:left`,(e=>{let t=`${e.type} ${e.data.instance.uid}:${e.type}`;this.trigger(t,e.data)}))}cleanInactiveTouches(e){if(!(`touches`in e.initial))return;let t=Array.from(e.initial.touches).map((e=>e.identifier));this.log(`Cleaning inactive`,t,Array.from(this.joysticksByIdentifier.keys()));let n=Array.from(this.joysticksByIdentifier.entries());for(let[r,i]of n)if(i.collection.options.mode===Eb&&!t.includes(r)){if(!i)return void this.error(`No collection found for cleaning identifier ${r}`);this.log(`💣 Cleaning`,r);let t=e.raw;i.collection.processOnEnd(Gb(e.initial,{identifier:r,pageX:t.pageX,pageY:t.pageY,clientX:t.clientX,clientY:t.clientY}))}}bindDocument(){this.binded||=(this.log(`bind dom`),this.bindEvt(document,`start`,this.onstart),this.bindEvt(document,`move`,this.onmove),this.bindEvt(document,`end`,this.onend),this.bindEvt(document,`pressure`,this.onpressure),!0)}unbindDocument(e=!1){!this.binded||this.joysticksByUid.size&&!0!==e||(this.log((e?`force `:``)+`unbind dom`),this.unbindEvt(document,`start`,this.onstart),this.unbindEvt(document,`move`,this.onmove),this.unbindEvt(document,`end`,this.onend),this.unbindEvt(document,`pressure`,this.onpressure),this.binded=!1)}onstart(e){this.cleanInactiveTouches(e)}onmove(e){this.handleEventInCollection(e,(t=>{t.processOnMove(e)}))}onend(e){this.cleanInactiveTouches(e),this.handleEventInCollection(e,(t=>{t.processOnEnd(e)}))}onpressure(e){e.initial.preventDefault();let t=this.joysticksByIdentifier.get(e.identifier);t?t.pressure=e.pressure:this.error(`No joystick found for pressure event ${e.identifier}`)}handleEventInCollection(e,t){let n=this.joysticksByIdentifier.get(e.identifier);n&&t(n.collection)}destroy(){this.unbindDocument(!0),this.collections.forEach((e=>{e.destroy()})),this.resizeHandler&&=(Ub(window,`resize`,this.resizeHandler),null),this.scrollHandler&&=(Ub(window,`scroll`,this.scrollHandler),null),this.trigger(`factoryDestroyed`,this),this.off()}},ax={create:e=>ix.create(e),factory:ix,setLogLevel:e=>{$b.logLevel=e},getLogLevel:()=>$b.logLevel},ox=18,sx=class e{constructor(t){this.hooks=t,this.dirX=0,this.dirY=0,this.act=!1,this.aim=null,this.aiming=null,this.pendingAct=null,this.dragAim=null,this.keys=new Set,this.mouseX=0,this.mouseY=0,this.stickX=0,this.stickY=0,this.stickActive=!1,addEventListener(`keydown`,e=>{this.keys.add(e.code),(e.code===`Space`||e.code===`KeyE`)&&!e.repeat&&(e.preventDefault(),this.pendingAct={aim:null})}),addEventListener(`keyup`,e=>this.keys.delete(e.code)),addEventListener(`blur`,()=>this.keys.clear()),addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(this.mouseX=e.clientX,this.mouseY=e.clientY)}),addEventListener(`pointerdown`,e=>{e.pointerType!==`mouse`||e.button!==2||e.target.closest?.(`button, #menu`)||(this.mouseX=e.clientX,this.mouseY=e.clientY,this.pendingAct={aim:this.mouseAim()})}),addEventListener(`contextmenu`,e=>e.preventDefault()),e.isTouchDevice()&&this.createStick()}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}bindAimStick(e){let t=null,n=0,r=0,i=!1,a=()=>{t=null,i=!1,this.dragAim=null,e.classList.remove(`held`)};e.addEventListener(`pointerdown`,a=>{a.preventDefault(),a.stopPropagation(),t===null&&(t=a.pointerId,e.setPointerCapture(a.pointerId),n=a.clientX,r=a.clientY,i=!1,e.classList.add(`held`))}),e.addEventListener(`pointermove`,e=>{if(e.pointerId!==t)return;let a=e.clientX-n,o=e.clientY-r;Math.hypot(a,o)>ox?(i=!0,this.dragAim=this.screenDirection(a,o)):i&&(this.dragAim=null)}),e.addEventListener(`pointerup`,e=>{e.pointerId===t&&(i?this.dragAim!==null&&(this.pendingAct={aim:this.dragAim}):this.pendingAct={aim:null},a())}),e.addEventListener(`pointercancel`,e=>{e.pointerId===t&&a()})}update(){this.act=this.pendingAct!==null,this.aim=this.pendingAct?.aim??null,this.pendingAct=null,this.aiming=this.dragAim===null?null:{angle:this.dragAim};let e=0,t=0,n=this.axis([`KeyA`,`ArrowLeft`],[`KeyD`,`ArrowRight`]),r=this.axis([`KeyW`,`ArrowUp`],[`KeyS`,`ArrowDown`]);if(n!==0||r!==0){let i=Math.hypot(n,r);e=n/i,t=r/i}else this.stickActive&&(e=this.stickX,t=this.stickY);this.dirX=Math.round(e*100),this.dirY=Math.round(t*100)}mouseAim(){let e=this.hooks.groundAt(this.mouseX,this.mouseY);if(!e)return null;let t=this.hooks.selfPosition();return Math.atan2(e.y-t.y,e.x-t.x)}screenDirection(e,t){let n=this.hooks.selfOnScreen(),r=Math.hypot(e,t)||1;if(n){let i=this.hooks.groundAt(n.x,n.y),a=this.hooks.groundAt(n.x+e/r*100,n.y+t/r*100);if(i&&a)return Math.atan2(a.y-i.y,a.x-i.x)}return Math.atan2(t,e)}axis(e,t){let n=e.some(e=>this.keys.has(e));return n===t.some(e=>this.keys.has(e))?0:n?-1:1}createStick(){let e=document.createElement(`div`);e.id=`stick-zone`,document.body.appendChild(e);let t=ax.create({zone:e,mode:`dynamic`,color:`white`,size:110,restOpacity:.6});t.on(`move`,e=>{let t=Math.min(1,e.data.force);this.stickX=Math.cos(e.data.angle.radian)*t,this.stickY=-Math.sin(e.data.angle.radian)*t,this.stickActive=!0}),t.on(`end`,()=>{this.stickActive=!1,this.stickX=0,this.stickY=0})}},cx=50,lx=75,ux=300,dx=10,fx=.9,px=60,mx=5e3,hx=250,gx=3,_x=.08,vx=32,yx=class{constructor(){this.delay=lx,this.raw=!1,this.tracks=new Map,this.transitTimes=[],this.transitValues=[],this.lateness=[],this.scratch={x:0,y:0,heading:0,speed:0},this.before={x:0,y:0,heading:0,speed:0},this.floor=0}onPatch(e,t,n){let r=performance.now(),i=r-e,a=this.pushTransit(i,r);this.floor=a,this.lateness.push(i-a),this.lateness.length>px&&this.lateness.shift();let o=e+a,s=r-this.delay;for(let[e,r]of t){if(e===n)continue;let t=this.tracks.get(e);t||(t={ring:[],head:0,count:0,ox:0,oy:0,oh:0},this.tracks.set(e,t));let i=t.count>0;i&&this.evaluate(t,s,this.before),bx(t,{t:o,x:r.x,y:r.y,heading:r.heading,speed:r.speed}),i&&(this.evaluate(t,s,this.scratch),this.absorbJump(t,this.before,this.scratch))}}remove(e){this.tracks.delete(e)}showAt(e){return e+this.floor+this.delay}update(e){let t=Math.exp(-e/_x);for(let e of this.tracks.values())e.ox*=t,e.oy*=t,e.oh*=t;if(this.lateness.length<5)return;let n=[...this.lateness].sort((e,t)=>e-t),r=n[Math.min(n.length-1,Math.floor(n.length*fx))],i=Math.max(lx,Math.min(ux,cx+r+dx)),a=Math.max(-e*20,Math.min(e*60,i-this.delay));if(Math.abs(a)<.01)return;let o=performance.now(),s=this.delay+a;for(let e of this.tracks.values())e.count!==0&&(this.evaluate(e,o-this.delay,this.before),this.evaluate(e,o-s,this.scratch),this.absorbJump(e,this.before,this.scratch));this.delay=s}pose(e,t,n){let r=this.tracks.get(e);if(!r||r.count===0)return null;if(this.raw){let e=r.ring[(r.head-1+vx)%vx];return n.x=e.x,n.y=e.y,n.heading=e.heading,n.speed=e.speed,n}return this.evaluate(r,t-this.delay,n),n.x+=r.ox,n.y+=r.oy,n.heading+=r.oh,n}absorbJump(e,t,n){let r=t.x-n.x,i=t.y-n.y;r*r+i*i>900?e.ox=e.oy=e.oh=0:(e.ox+=r,e.oy+=i,e.oh+=t.heading-n.heading)}evaluate(e,t,n){let r=(e.head-1+vx)%vx,i=e.ring[r];if(t>=i.t||e.count===1){xx(i,e.count>1?e.ring[(r-1+vx)%vx]:null,Math.min(Math.max(0,t-i.t),hx)/1e3,n);return}for(let i=1;i<e.count;i++){let a=e.ring[(r-i+vx)%vx];if(a.t<=t){let o=e.ring[(r-i+1+vx)%vx],s=o.t-a.t,c=s>0?(t-a.t)/s:1;n.x=a.x+(o.x-a.x)*c,n.y=a.y+(o.y-a.y)*c,n.heading=a.heading+(o.heading-a.heading)*c,n.speed=a.speed+(o.speed-a.speed)*c;return}}let a=e.ring[(r-e.count+1+vx)%vx];n.x=a.x,n.y=a.y,n.heading=a.heading,n.speed=0}pushTransit(e,t){let n=this.transitValues,r=this.transitTimes;for(;n.length>0&&n[n.length-1]>=e;)n.pop(),r.pop();for(n.push(e),r.push(t);r[0]<t-mx;)r.shift(),n.shift();return n[0]}};function bx(e,t){let n=e.count>0?e.ring[(e.head-1+vx)%vx]:null;n&&t.t<=n.t?(n.x=t.x,n.y=t.y,n.heading=t.heading,n.speed=t.speed):(e.ring[e.head]=t,e.head=(e.head+1)%vx,e.count=Math.min(e.count+1,vx))}function xx(e,t,n,r){let i=0;t&&e.t>t.t&&(i=(e.heading-t.heading)/((e.t-t.t)/1e3),i=Math.max(-3,Math.min(gx,i)));let a=e.heading,o=a+i*n;if(r.heading=o,r.speed=e.speed,Math.abs(i)<.001)r.x=e.x+Math.cos(a)*e.speed*n,r.y=e.y+Math.sin(a)*e.speed*n;else{let t=e.speed/i;r.x=e.x+t*(Math.sin(o)-Math.sin(a)),r.y=e.y-t*(Math.cos(o)-Math.cos(a))}}var Sx=3e3,Cx=128,wx=class{constructor(e,t){this.timeline=e,this.effect=t,this.flying=[],this.draw={kind:0,x:0,y:0,angle:0,height:0},this.ownFired=new Map,this.links=new Map}addOwn(e,t,n){this.ownFired.set(t,n),this.spawn(e.kind,e.range,e.shots,-1,t,n)}ownFromServer(e,t,n){let r=this.ownFired.get(e.n);if(r!==void 0&&t-r<Sx){this.links.set(e.v,e.n),this.links.size>Cx&&this.links.delete(this.links.keys().next().value);return}let i=e.p.slice();for(let e=0;e<i.length;e+=3)i[e]+=n.x,i[e+1]+=n.y;this.spawn(e.k,e.r,i,e.v,-1,t)}addVolley(e){this.spawn(e.k,e.r,e.p,e.v,-1,this.timeline.showAt(e.t))}confirmHit(e){let t=this.links.get(e.v),n=t===void 0?this.flying.find(t=>t.volley===e.v&&t.index===e.i):this.flying.find(n=>n.own===t&&n.index===e.i);if(!n)return!1;let r=(e.x-n.x)*n.dx+(e.y-n.y)*n.dy;return n.end=Math.max(0,Math.min(n.end,r+.5)),n.hit=!0,!0}spawn(e,t,n,r,i,a){let o=lc[e];for(let s=0;s<n.length/3;s++){let c=n[s*3],l=n[s*3+1],u=n[s*3+2],d=Math.cos(u),f=Math.sin(u);this.flying.push({volley:r,own:i,index:s,kind:e,x:c,y:l,dx:d,dy:f,speed:o.speed,start:a,end:yc(c,l,d,f,t),hit:!1})}}update(e,t){for(let[t,n]of this.ownFired)e-n>Sx&&this.ownFired.delete(t);let n=0;for(let r of this.flying){let i=(e-r.start)/1e3*r.speed;if(i<0){this.flying[n++]=r;continue}if(i>=r.end){this.effect(r.hit?`blast`:`splash`,r.x+r.dx*r.end,r.y+r.dy*r.end);continue}let a=i/Math.max(r.end,1);this.draw.kind=r.kind,this.draw.x=r.x+r.dx*i,this.draw.y=r.y+r.dy*i,this.draw.angle=Math.atan2(r.dy,r.dx),this.draw.height=r.kind===sc.ball||r.kind===sc.axe?1.2+Math.sin(Math.PI*a)*2.2:1.4,t(this.draw),this.flying[n++]=r}this.flying.length=n}},Tx={[uc.fullSalvo]:`TAM SALVO`,[uc.rocketRain]:`ROKET`,[uc.berserk]:`HÜCUM`},Ex=`
  #hud { position: fixed; inset: 0; pointer-events: none; z-index: 3; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
  #hud .label { position: absolute; left: 0; top: 0; transform: translate(-50%, -100%); text-align: center; white-space: nowrap; will-change: transform; }
  #hud .label .name { font-size: 12px; font-weight: 700; color: #fff; text-shadow: 0 1px 2px #000c; }
  #hud .label .name b { display: inline-block; min-width: 16px; margin-right: 4px; padding: 0 4px; border-radius: 6px; background: #000a; color: #ffd24e; }
  #hud .label .bar { width: 46px; height: 5px; margin: 2px auto 0; border-radius: 3px; background: #0009; overflow: hidden; }
  #hud .label .bar div { height: 100%; background: #6be36b; transform-origin: left; }
  #hud .label.self .bar { width: 58px; height: 6px; }
  #hud .label .ammo { display: flex; gap: 2px; justify-content: center; margin-top: 2px; }
  #hud .label .ammo i { width: 18px; height: 5px; border-radius: 2px; background: #0009; overflow: hidden; }
  #hud .label .ammo i b { display: block; height: 100%; background: #ff9d2e; transform-origin: left; }
  #hud .label .ammo i.full b { background: #ffb347; box-shadow: 0 0 4px #ffb347; }
  #hud .label.npc .name { color: #e8dcc0; font-weight: 600; }

  #hud .board { position: absolute; right: calc(8px + env(safe-area-inset-right)); top: calc(8px + env(safe-area-inset-top));
    min-width: 132px; padding: 5px 9px; border-radius: 10px; background: #0009; font-size: 11px; color: #eaf6ff; }
  #hud .board div { display: flex; justify-content: space-between; gap: 10px; }
  #hud .board .me { color: #ffd24e; font-weight: 700; }
  #hud .board .title { font-weight: 800; margin-bottom: 2px; opacity: .8; }

  #hud .feed { position: absolute; left: calc(10px + env(safe-area-inset-left)); top: calc(46px + env(safe-area-inset-top)); font-size: 12px; }
  #hud .feed div { width: fit-content; margin-bottom: 3px; padding: 3px 9px; border-radius: 8px; background: #0008; color: #fff; transition: opacity .6s; }

  #hud .xp { position: absolute; left: 50%; bottom: calc(8px + env(safe-area-inset-bottom)); transform: translateX(-50%);
    width: min(360px, 46vw); height: 16px; border-radius: 8px; background: #000a; overflow: hidden; }
  #hud .xp .fill { position: absolute; inset: 0; background: linear-gradient(90deg, #ffb300, #ffd24e); transform-origin: left; transform: scaleX(0); transition: transform .25s; }
  #hud .xp span { position: relative; display: block; text-align: center; font: 700 11px/16px system-ui, sans-serif; color: #fff; text-shadow: 0 1px 2px #000; white-space: nowrap; }

  #hud .super { position: absolute; right: calc(20px + env(safe-area-inset-right)); bottom: calc(34px + env(safe-area-inset-bottom));
    width: 88px; height: 88px; border-radius: 50%; pointer-events: auto; touch-action: none; cursor: pointer;
    color: #fff; font: 800 12px system-ui, sans-serif; text-shadow: 0 1px 2px #000; transition: transform .08s;
    border: 3px solid #ffffff55; background: conic-gradient(#ffd24e var(--charge), #000a 0); }
  #hud .super.ready { border-color: #ffd24e; box-shadow: 0 0 18px #ffd24e; animation: pulse 0.9s infinite alternate; }
  #hud .super:disabled { opacity: .45; cursor: default; }
  #hud .held { transform: scale(0.93); }
  @keyframes pulse { to { transform: scale(1.06); } }
  #hud.desktop .super { width: 80px; height: 80px; }
  /* In the harbour (menu) only the sea and the ships show. */
  #hud.harbour .xp, #hud.harbour .super, #hud.harbour .label.self { display: none; }
  #hud.desktop .super::after { content: "Space"; position: absolute; left: 0; right: 0; bottom: -16px; font-size: 10px; opacity: .7; }

  @media (max-height: 500px), (max-width: 700px) {
    #hud .board { min-width: 112px; padding: 4px 8px; font-size: 10px; }
    #hud .board div:nth-child(n+5) { display: none; }
    #hud .feed { font-size: 11px; }
    #hud .feed div:nth-child(n+3) { display: none; }
  }
  @media (max-height: 500px) {
    #hud .super { bottom: calc(24px + env(safe-area-inset-bottom)); width: 72px; height: 72px; }
  }
`,Dx=class{constructor(e){this.root=document.createElement(`div`),this.labelLayer=document.createElement(`div`),this.labels=new Map,this.board=document.createElement(`div`),this.feedBox=document.createElement(`div`),this.superButton=document.createElement(`button`),this.boardKey=``;let t=document.createElement(`style`);t.textContent=Ex,document.head.appendChild(t),this.root.id=`hud`,this.root.classList.toggle(`desktop`,!e),this.board.className=`board`,this.feedBox.className=`feed`;let n=document.createElement(`div`);n.className=`xp`,n.innerHTML=`<div class="fill"></div><span></span>`,this.xpFill=n.querySelector(`.fill`),this.xpText=n.querySelector(`span`),this.superButton.className=`super`,this.superButton.disabled=!0,this.root.append(this.labelLayer,this.board,this.feedBox,n,this.superButton),this.root.classList.add(`harbour`),document.body.appendChild(this.root)}setPlaying(e){this.root.classList.toggle(`harbour`,!e)}setLabel(e,t,n){let r=this.labels.get(e);if(!t){r&&(r.root.style.display=`none`);return}if(!r){let t=document.createElement(`div`);t.className=`label${n.self?` self`:``}${n.npc?` npc`:``}`,t.innerHTML=`<div class="name"></div><div class="bar"><div></div></div>`+(n.self?`<div class="ammo">${`<i><b></b></i>`.repeat(3)}</div>`:``),r={root:t,name:t.querySelector(`.name`),fill:t.querySelector(`.bar div`),pips:[...t.querySelectorAll(`.ammo i`)],key:``},this.labelLayer.appendChild(t),this.labels.set(e,r)}let i=`${n.name}|${n.level}`;r.key!==i&&(r.key=i,r.name.innerHTML=n.npc?Ox(n.name):`<b>${n.level}</b>${n.self?``:Ox(n.name)}`);let a=n.maxHp>0?Math.max(0,Math.min(1,n.hp/n.maxHp)):0;r.fill.style.transform=`scaleX(${a})`,r.fill.style.background=a>.5?`#6be36b`:a>.25?`#ffc84a`:`#ff5a4a`,n.ammo!==void 0&&r.pips.forEach((e,t)=>{let r=Math.max(0,Math.min(1,(n.ammo-t*pc)/pc));e.firstElementChild.style.transform=`scaleX(${r})`,e.classList.toggle(`full`,r>=1)}),r.root.style.display=``,r.root.style.transform=`translate(${t.x.toFixed(1)}px, ${t.y.toFixed(1)}px) translate(-50%, -100%)`}removeLabel(e){this.labels.get(e)?.root.remove(),this.labels.delete(e)}setProgress(e,t,n,r){this.xpFill.style.transform=`scaleX(${r?1:Math.max(0,Math.min(1,n))})`,this.xpText.textContent=`Seviye ${e} · ${fc[t]?.label??``}`}setSuper(e,t){let n=fc[e]?.super?.kind,r=n!==void 0,i=r&&t>=100;this.superButton.disabled=!i,this.superButton.classList.toggle(`ready`,i),this.superButton.style.setProperty(`--charge`,`${r?t/100*100:0}%`);let a=r?Tx[n]:``;this.superButton.textContent!==a&&(this.superButton.textContent=a)}setBoard(e){let t=e.map(e=>`${e.name}${e.level}${e.score}${e.self}`).join(`|`);t!==this.boardKey&&(this.boardKey=t,this.board.innerHTML=`<div class="title">LİDERLER</div>`+e.map((e,t)=>`<div class="${e.self?`me`:``}"><span>${t+1}. ${Ox(e.name)}</span><span>${e.score}</span></div>`).join(``))}feed(e){let t=document.createElement(`div`);for(t.textContent=e,this.feedBox.prepend(t);this.feedBox.children.length>4;)this.feedBox.lastElementChild.remove();setTimeout(()=>{t.style.opacity=`0`},3500),setTimeout(()=>t.remove(),4200)}};function Ox(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var kx=class{constructor(){this.latency=0,this.jitter=0,this.stalls=!1,this.inbound=new Ax,this.outbound=new Ax,this.stallUntil=0,this.nextStallAt=0}get active(){return this.latency>0||this.jitter>0||this.stalls}install(e){let t=e.connection,n=t.transport.events,r=n.onmessage;n.onmessage=e=>{let n=e.data instanceof ArrayBuffer?e.data.slice(0):e.data;this.route(this.inbound,()=>r.call(t.transport,{data:n,type:`message`}))};let i=n.onclose;n.onclose=e=>{this.inbound.busy?this.inbound.push(performance.now(),()=>i?.call(t.transport,e)):i?.call(t.transport,e)};let a=t.send.bind(t);t.send=e=>{let t=e instanceof ArrayBuffer?e.slice(0):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength).slice():e;this.route(this.outbound,()=>a(t))}}route(e,t){!this.active&&!e.busy?t():e.push(this.deliveryTime(),t)}deliveryTime(){let e=performance.now();if(!this.active)return e;let t=this.latency/2;this.stalls&&e>=this.nextStallAt&&(this.stallUntil=e+150+Math.random()*250,this.nextStallAt=this.stallUntil+2e3+Math.random()*4e3);let n=e+t+(this.jitter>0?(Math.random()*2-1)*(this.jitter/2):0);return e<this.stallUntil&&(n=Math.max(n,this.stallUntil+t)),n}},Ax=class{constructor(){this.queue=[],this.lastAt=0,this.timer=null}get busy(){return this.queue.length>0}push(e,t){e=Math.max(e,this.lastAt),this.lastAt=e,this.queue.push({at:e,deliver:t}),this.queue.length===1&&this.arm()}arm(){this.timer!==null&&clearTimeout(this.timer),this.timer=setTimeout(()=>this.drain(),Math.max(0,this.queue[0].at-performance.now()))}drain(){this.timer=null;let e=performance.now();for(;this.queue.length>0&&this.queue[0].at<=e+1;){let{deliver:e}=this.queue.shift();try{e()}catch(e){console.error(e)}}this.queue.length>0&&this.arm()}},jx=[{label:`Kapalı`,latency:0,jitter:0},{label:`Wi-Fi`,latency:60,jitter:10},{label:`4G`,latency:150,jitter:40},{label:`Kötü`,latency:300,jitter:80}],Mx=100,Nx=.1,Px=2,Fx=8,Ix=class{constructor(){this.last=new Map,this.good=0,this.total=0,this.window=0,this.score=1}observe(e,t,n,r,i){let a=this.last.get(e);if(a&&i>0){let e=Math.hypot(t-a.x,n-a.y);if(a.x=t,a.y=n,e>Fx)return;let o=e/i,s=Math.max(r*.5,1.5);this.total++,Math.abs(o-r)<=s&&this.good++}else this.last.set(e,{x:t,y:n})}forget(e){this.last.delete(e)}update(e){return this.window+=e,this.window>=Px&&this.total>0&&(this.score=this.good/this.total,this.good=this.total=0,this.window=0),this.score}},Lx=class{constructor(e,t,n){this.sim=new kx,this.rttHistory=new Float32Array(Mx),this.delayHistory=new Float32Array(Mx),this.correctionHistory=new Float32Array(Mx),this.sampleIndex=0,this.sinceSample=0,this.fps=60,this.smoothness=new Ix,this.sim.install(e),t.innerHTML=`
      <style>
        .lab { width: 250px; padding: 8px 10px; border-radius: 10px; background: #000b; font: 12px/1.4 system-ui, sans-serif; color: #eaf6ff; }
        .lab summary { font-weight: 700; cursor: pointer; }
        .lab .row { display: flex; gap: 4px; flex-wrap: wrap; margin: 6px 0; align-items: center; }
        .lab button { flex: 1; padding: 4px 0; border: 1px solid #ffffff40; border-radius: 6px; background: #ffffff14; color: inherit; font: inherit; cursor: pointer; }
        .lab button.on { background: #ffd24e; color: #111; border-color: #ffd24e; }
        .lab label { display: flex; gap: 6px; align-items: center; cursor: pointer; }
        .lab .readout { font-variant-numeric: tabular-nums; white-space: pre; margin: 6px 0; }
        .lab canvas { width: 100%; height: 70px; display: block; background: #ffffff0d; border-radius: 6px; }
        .lab .legend { display: flex; gap: 8px; font-size: 11px; opacity: .85; margin-top: 3px; }
      </style>
      <details class="lab" ${matchMedia(`(min-width: 900px)`).matches?`open`:``}>
        <summary>Lag Lab</summary>
        <div class="row" data-group="net">${jx.map((e,t)=>`<button data-preset="${t}">${e.label}</button>`).join(``)}</div>
        <div class="row"><label><input type="checkbox" data-toggle="stalls"> Paket kaybı takılmaları</label></div>
        <div class="row" data-group="remote">
          <button data-remote="smooth">Rakip: yumuşak</button><button data-remote="raw">Rakip: ham</button>
        </div>
        <div class="row"><label><input type="checkbox" data-toggle="trails"> İz çizgileri</label></div>
        <div class="readout"></div>
        <canvas></canvas>
        <div class="legend"><span style="color:#6cc4ff">■ ping</span><span style="color:#7ee08a">■ tampon</span><span style="color:#ffa54e">■ düzeltme</span></div>
      </details>`,this.readout=t.querySelector(`.readout`),this.graph=t.querySelector(`canvas`);let r=[...t.querySelectorAll(`[data-preset]`)],i=e=>{this.sim.latency=jx[e].latency,this.sim.jitter=jx[e].jitter,r.forEach((t,n)=>t.classList.toggle(`on`,n===e)),n.networkChanged()};r.forEach((e,t)=>e.addEventListener(`click`,()=>i(t))),i(0);let a=[...t.querySelectorAll(`[data-remote]`)],o=e=>{n.setRawRemotes(e===`raw`),a.forEach(t=>t.classList.toggle(`on`,t.dataset.remote===e))};a.forEach(e=>e.addEventListener(`click`,()=>o(e.dataset.remote))),o(`smooth`),t.querySelector(`[data-toggle=stalls]`).addEventListener(`change`,e=>{this.sim.stalls=e.target.checked}),t.querySelector(`[data-toggle=trails]`).addEventListener(`change`,e=>n.setTrails(e.target.checked)),t.addEventListener(`pointerdown`,e=>e.stopPropagation())}update(e,t){e>0&&(this.fps+=(1/e-this.fps)*.05);let n=this.smoothness.update(e);if(this.sinceSample+=e,this.sinceSample<Nx)return;this.sinceSample=0;let r=this.sampleIndex++%Mx;this.rttHistory[r]=t.rtt,this.delayHistory[r]=t.delay,this.correctionHistory[r]=t.correction,this.readout.textContent=`ping ${t.rtt.toFixed(0).padStart(4)} ms   tampon ${t.delay.toFixed(0).padStart(3)} ms\nrakip akıcılığı %${(n*100).toFixed(0)}\ndüzeltme ${t.correction.toFixed(2)} (${t.correctionStatus})\nfps ${this.fps.toFixed(0).padStart(4)}        gemi ${t.ships}`,this.drawGraph()}drawGraph(){let e=this.graph,t=e.clientWidth*devicePixelRatio,n=e.clientHeight*devicePixelRatio;if(t===0)return;(e.width!==t||e.height!==n)&&(e.width=t,e.height=n);let r=e.getContext(`2d`);r.clearRect(0,0,t,n),this.plot(r,this.rttHistory,500,`#6cc4ff`,t,n),this.plot(r,this.delayHistory,500,`#7ee08a`,t,n),this.plot(r,this.correctionHistory,2,`#ffa54e`,t,n)}plot(e,t,n,r,i,a){let o=Math.min(this.sampleIndex,Mx);if(!(o<2)){e.strokeStyle=r,e.lineWidth=1.5*devicePixelRatio,e.beginPath();for(let r=0;r<o;r++){let s=t[(this.sampleIndex-o+r)%Mx],c=r/99*i,l=a-Math.min(1,s/n)*(a-2)-1;r===0?e.moveTo(c,l):e.lineTo(c,l)}e.stroke()}}},Rx=`shipz.profile.v1`,zx=class{constructor(){this.data=Bx()}get kind(){return Bc(this.data.kind)?this.data.kind:oc.viking}set kind(e){this.data.kind=e,this.save()}get points(){return this.data.points}addPoints(e){e<=0||(this.data.points+=e,this.save())}build(e){return rl(this.data.builds[e])}isUnlocked(e,t,n){return n===0||!!this.data.unlocked[e]?.[t]?.[n]}choose(e,t,n){if(!this.isUnlocked(e,t,n)){let r=Rc(t);if(this.data.points<r)return!1;this.data.points-=r;let i=this.data.unlocked[e]??=Array.from({length:6},()=>[!0,!1,!1]);i[t][n]=!0}let r=this.build(e);return r[t]=n,this.data.builds[e]=r,this.save(),!0}save(){try{localStorage.setItem(Rx,JSON.stringify(this.data))}catch{}}};function Bx(){let e={kind:oc.viking,points:0,builds:{},unlocked:{}};try{let t=JSON.parse(localStorage.getItem(Rx)??`null`);if(!t||typeof t!=`object`)return e;let n={kind:Number(t.kind),points:Math.max(0,Math.floor(Number(t.points))||0),builds:{},unlocked:{}};for(let e of zc){n.builds[e]=rl(t.builds?.[e]??nl());let r=t.unlocked?.[e];Array.isArray(r)&&(n.unlocked[e]=Array.from({length:6},(e,t)=>[!0,!!r[t]?.[1],!!r[t]?.[2]]))}return n}catch{return e}}var Vx={[oc.viking]:`Hızlı · yakın dövüş · çarpma`,[oc.english]:`Ağır zırh · uzun menzil`,[oc.jonka]:`Dengeli · geniş ok yelpazesi`},Hx=`
  #menu { position: fixed; inset: 0; z-index: 6; display: none; overflow-y: auto; -webkit-overflow-scrolling: touch;
    background: linear-gradient(180deg, #06243acc, #06243a99 40%, #06243ae6); color: #eaf6ff;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif; touch-action: pan-y; }
  #menu.show { display: block; }
  #menu .wrap { box-sizing: border-box; max-width: 560px; min-height: 100%; margin: 0 auto; display: flex; flex-direction: column;
    gap: 14px; justify-content: center; padding: calc(16px + env(safe-area-inset-top)) 16px calc(18px + env(safe-area-inset-bottom)); }
  #menu h1 { margin: 0; text-align: center; font: 900 clamp(34px, 9vw, 52px)/1 system-ui, sans-serif; letter-spacing: 1px;
    color: #ffd24e; text-shadow: 0 3px 0 #b5651d, 0 6px 14px #0008; }
  #menu .death { padding: 10px 14px; border-radius: 12px; background: #5a1a12d9; text-align: center; }
  #menu .death b { display: block; font-size: 20px; color: #ff9a7b; }
  #menu .points { align-self: center; padding: 5px 12px; border-radius: 999px; background: #0009; font-weight: 700; font-size: 13px; }
  #menu .points span { color: #ffd24e; }
  #menu .ships { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  #menu .ship { padding: 10px 8px; border-radius: 14px; border: 2px solid #ffffff30; background: #0b2a40e6; color: #fff;
    text-align: left; cursor: pointer; font: 12px/1.3 system-ui, sans-serif; }
  #menu .ship.on { border-color: #ffd24e; box-shadow: 0 0 0 2px #ffd24e55, 0 6px 16px #0007; background: #12405ee6; }
  #menu .ship b { display: block; font-size: 16px; margin-bottom: 2px; }
  #menu .ship i { display: block; font-style: normal; opacity: .75; min-height: 2.6em; }
  #menu .stat { display: flex; align-items: center; gap: 6px; margin-top: 5px; font-size: 10px; opacity: .9; }
  #menu .stat em { flex: 0 0 38px; font-style: normal; }
  #menu .stat u { flex: 1; height: 5px; border-radius: 3px; background: #ffffff22; overflow: hidden; text-decoration: none; }
  #menu .stat u s { display: block; height: 100%; background: #6bd0ff; }
  #menu button.big { padding: 15px; border: 0; border-radius: 14px; background: #ffd24e; color: #1a1205; cursor: pointer;
    font: 900 20px system-ui, sans-serif; letter-spacing: .5px; box-shadow: 0 4px 0 #b5861d; }
  #menu button.big:active { transform: translateY(2px); box-shadow: 0 2px 0 #b5861d; }
  #menu button.plain { padding: 11px; border: 2px solid #ffffff40; border-radius: 12px; background: #0b2a40e6; color: #fff;
    cursor: pointer; font: 800 15px system-ui, sans-serif; }
  #menu .note { text-align: center; font-size: 12px; opacity: .7; }
  #menu .head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  #menu .head h2 { margin: 0; font-size: 20px; }
  #menu .back { padding: 8px 12px; border: 0; border-radius: 10px; background: #0009; color: #fff; cursor: pointer; font: 700 14px system-ui, sans-serif; }
  #menu .tier { display: grid; grid-template-columns: 40px repeat(3, 1fr); gap: 6px; align-items: stretch; }
  #menu .tier > span { align-self: center; font-weight: 800; font-size: 12px; color: #ffd24e; text-align: center; }
  #menu .opt { position: relative; padding: 7px 6px 7px 8px; border-radius: 10px; border: 2px solid #ffffff25; background: #0b2a40e6;
    color: #fff; text-align: left; cursor: pointer; font: 11px/1.25 system-ui, sans-serif; }
  #menu .opt b { display: block; font-size: 12px; margin-bottom: 2px; }
  #menu .opt sup { position: absolute; right: 5px; top: 4px; font-size: 10px; font-weight: 800; opacity: .6; }
  #menu .opt.on { border-color: #ffd24e; background: #12405ee6; box-shadow: 0 0 0 2px #ffd24e40; }
  #menu .opt.locked { opacity: .55; }
  #menu .opt.locked .cost { display: block; margin-top: 3px; font-weight: 800; color: #ffd24e; }
  #menu .opt .cost { display: none; }
  #menu .opt.denied { animation: deny .3s; }
  @keyframes deny { 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
  @media (max-height: 520px) {
    #menu .wrap { gap: 8px; }
    #menu h1 { font-size: 30px; }
    #menu .ship i { min-height: 0; }
    #menu button.big { padding: 10px; }
  }
`,Ux=class{constructor(e,t){this.profile=e,this.sail=t,this.root=document.createElement(`div`),this.view=`main`,this.death=null;let n=document.createElement(`style`);n.textContent=Hx,document.head.appendChild(n),this.root.id=`menu`,this.root.addEventListener(`pointerdown`,e=>e.stopPropagation()),document.body.appendChild(this.root),addEventListener(`keydown`,e=>{this.visible&&(e.code===`Enter`?this.setSail():this.view===`main`&&[`Digit1`,`Digit2`,`Digit3`].includes(e.code)&&(this.profile.kind=zc[Number(e.code.slice(5))-1],this.render()))})}get visible(){return this.root.classList.contains(`show`)}show(e){this.death=e,this.view=`main`,this.render(),this.root.classList.add(`show`)}hide(){this.root.classList.remove(`show`)}setSail(){let e=this.profile.kind;this.hide(),this.sail(e,this.profile.build(e))}render(){this.root.innerHTML=`<div class="wrap">${this.view===`main`?this.mainView():this.treeView()}</div>`,this.root.querySelector(`[data-sail]`)?.addEventListener(`click`,()=>this.setSail()),this.root.querySelector(`[data-tree]`)?.addEventListener(`click`,()=>{this.view=`tree`,this.render()}),this.root.querySelector(`[data-back]`)?.addEventListener(`click`,()=>{this.view=`main`,this.render()}),this.root.querySelectorAll(`[data-kind]`).forEach(e=>e.addEventListener(`click`,()=>{this.profile.kind=Number(e.dataset.kind),this.render()})),this.root.querySelectorAll(`[data-tier]`).forEach(e=>e.addEventListener(`click`,()=>{this.profile.choose(this.profile.kind,Number(e.dataset.tier),Number(e.dataset.option))?this.render():(e.classList.remove(`denied`),e.offsetWidth,e.classList.add(`denied`))}))}mainView(){let e=this.profile.kind,t=zc.map(t=>{let n=fc[t],r=(e,t)=>`<div class="stat"><em>${e}</em><u><s style="width:${Math.round(Math.min(1,t)*100)}%"></s></u></div>`;return`<button class="ship${t===e?` on`:``}" data-kind="${t}">
        <b>${n.label}</b><i>${Vx[t]}</i>
        ${r(`Can`,n.maxHp/150)}${r(`Hız`,n.handling.maxSpeed/17)}${r(`Menzil`,(n.weapon?.range??0)/34)}
        </button>`}).join(``);return`<h1>SHIPZ.IO</h1>${this.death?`<div class="death"><b>Batırıldın!</b>${Wx(this.death.by)} seni batırdı · seviye ${this.death.level}${this.death.level>1?` · +${this.death.level-1} puan`:``}</div>`:``}
      <div class="points">Seviye puanı: <span>${this.profile.points}</span></div>
      <div class="ships">${t}</div>
      <button class="plain" data-tree>Gelişim Ağacı · ${fc[e].label}</button>
      <button class="big" data-sail>${this.death?`YENİDEN YELKEN AÇ`:`YELKEN AÇ`}</button>
      <div class="note">Toplar otomatik ateş eder · süper dolunca butona bas<br>Maçta atladığın her seviye = 1 puan</div>`}treeView(){let e=this.profile.kind,t=this.profile.build(e),n=el[e].map((n,r)=>{let i=n.map((n,i)=>{let a=this.profile.isUnlocked(e,r,i);return`<button class="${[`opt`,t[r]===i?`on`:``,a?``:`locked`].join(` `)}" data-tier="${r}" data-option="${i}"><sup>${Lc[i]}</sup>
          <b>${Wx(n.title)}</b>${Wx(n.text)}<span class="cost">🔒 ${Rc(r)} puan</span></button>`}).join(``);return`<div class="tier"><span>Sv ${2+r}</span>${i}</div>`}).join(``);return`<div class="head"><button class="back" data-back>← Geri</button><h2>${fc[e].label} ağacı</h2>
        <div class="points">Puan: <span>${this.profile.points}</span></div></div>
      ${n}
      <div class="note">Seviye atladıkça seçtiğin gelişme kendiliğinden uygulanır. Seçmediğin yerde A geçerli.<br>
        Kilitli seçeneğe dokununca puanınla açılır.</div>
      <button class="big" data-sail>YELKEN AÇ</button>`}};function Wx(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var Gx=`modulepreload`,Kx=function(e,t){return new URL(e,t).href},qx={},Jx=function(e){return e.pathname.endsWith(`.css`)},Yx=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Xx=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Kx(t,n);let r=s(t),i=Jx(r);return Yx(qx,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Gx,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Zx=new URLSearchParams(location.search),Qx=Zx.has(`lab`),$x=20,eS=7,tS=5,nS=3,rS=10,iS=document.getElementById(`status`),aS=document.getElementById(`hint`),oS=sS(Zx.get(`server`))??`wss://corners-contract-platinum-warrant.trycloudflare.com`??`${location.protocol===`https:`?`wss`:`ws`}://${location.host}`;function sS(e){if(e)return(/^\w+:\/\//.test(e)?e:`wss://${e}`).replace(/^http/,`ws`).replace(/\/+$/,``)}async function cS(){Zx.has(`debug`)&&await Xx(()=>import(`./debug-BEwjukfQ.js`),[],import.meta.url);let e=Qx&&Number(Zx.get(`cam`))||1,t=new xb(document.getElementById(`game`),e),n=sx.isTouchDevice();aS.textContent=n?`Sol el: dümen · toplar otomatik ateş eder · süper dolunca sağdaki butona dokun (sürükle = nişan)`:`WASD: dümen · toplar otomatik ateş eder · Space: süper (sağ tık: imlece doğru)`,aS.style.display=`none`;let r=await new Go(oS).joinOrCreate(`battle`,{name:`Kaptan ${100+Math.floor(Math.random()*900)}`}),i=ic.get(r),a=new yx,o=new wx(a,(e,n,r)=>t.spawnEffect(e,n,r)),s=r.input({mode:`reliable`}),c=new Dx(n),l=new zx,u=Qx?new Lx(r,document.getElementById(`lab`),{setTrails:e=>t.setTrailsVisible(e),setRawRemotes:e=>{a.raw=e},networkChanged:()=>r.clock.reset()}):null;await new Promise(e=>r.onStateChange.once(()=>e()));let d=r.state.ships.get(r.sessionId),f=i.reconciler(d,{input:s,fields:[`x`,`y`,`heading`,`speed`,`kind`,`speedPct`,`boostTicks`,`charge`,`ammo`,`fireCd`,`reloadPct`,`shots`],snap:$x,step:(e,t,n)=>{let r=Ac(t,n,e.dt);r&&!e.isReplay&&p(r,t,n.aim)}});function p(e,t,n){let r={x:t.x,y:t.y,kind:t.kind,rangePct:d.rangePct,extraShots:d.extraShots},i=Ec(n),a=performance.now();if(e&2){let n=Mc(r,i);n&&o.addOwn(n,e&1?t.shots-1&255:t.shots,a)}if(e&1){let e=jc(r,i);e&&o.addOwn(e,t.shots,a)}}let m=new sx({selfOnScreen:()=>t.selfOnScreen(),selfPosition:()=>({x:f.state.x,y:f.state.y}),groundAt:(e,n)=>t.groundAt(e,n)});m.bindAimStick(c.superButton);let h=l.build(l.kind),g=1,_=!1,v=new Ux(l,(e,t)=>{h=t,g=1,r.send(`spawn`,{kind:e,build:t}),_||(_=!0,aS.style.display=``,setTimeout(()=>{aS.style.display=`none`},rS*1e3))});v.show(null);let y=new Map;function b(e,t){let n=f.state.kind,i=_c(n),o=f.state.x,s=f.state.y,c=e===`super`?i.super:i.weapon,l=e===`super`&&i.super?.kind===uc.berserk,u=l?C(n):(c?.range??0)*(d.rangePct/100),p=l?i.handling.maxSpeed*gc:lc[(c??i.weapon)?.projectile??0].speed,m=null,h=u+t;for(let e of y.values()){if(e.shielded)continue;let t=Math.hypot(e.x-o,e.y-s);t<h&&(m=e,h=t)}if(!m)return null;let g=(a.delay+r.clock.rtt()/2)/1e3,_=h/p+g;return Math.atan2(m.y+Math.sin(m.heading)*m.speed*_-s,m.x+Math.cos(m.heading)*m.speed*_-o)}function x(){let e=f.state.kind,t=_c(e),n=t.radius+.6;return t.super?t.super.kind===uc.berserk?{inner:n,range:C(e),half:0}:{inner:n,range:t.super.range*(d.rangePct/100),half:t.super.spread/2}:null}function S(){return(_c(f.state.kind).weapon?.range??0)*(d.rangePct/100)}function C(e){return _c(e).handling.maxSpeed*(d.speedPct/100)*gc*hc}r.onStateChange(e=>a.onPatch(ac(e.tick),e.ships,r.sessionId)),r.onMessage(`volley`,e=>{e.o===r.sessionId?o.ownFromServer(e,performance.now(),{x:i.value(d,`x`)-d.x,y:i.value(d,`y`)-d.y}):o.addVolley(e)}),r.onMessage(`hit`,e=>{e.v!==0&&o.confirmHit(e)||lS(e.s===r.sessionId?performance.now():a.showAt(e.t),()=>t.spawnEffect(`blast`,e.x,e.y))}),r.onMessage(`sunk`,e=>{lS(e.s===r.sessionId?performance.now():a.showAt(e.t),()=>t.spawnEffect(`wreck`,e.x,e.y)),e.kn&&(e.k===r.sessionId?c.feed(`⚔ ${e.sn} batırıldı!`):c.feed(`${e.kn} ⚔ ${e.s===r.sessionId?`seni`:e.sn}`))}),r.onMessage(`dead`,e=>v.show({by:e.by,level:e.level}));let w=ri.get(r);w.onAdd(`ships`,(e,n)=>t.addShip(n,{kind:e.kind,hue:e.hue,self:n===r.sessionId})),w.onRemove(`ships`,(e,n)=>{t.removeShip(n),a.remove(n),c.removeLabel(n),u?.smoothness.forget(n)}),r.onLeave(()=>{iS.textContent=`Bağlantı koptu — sayfayı yenile`});let T={x:0,y:0,heading:0,speed:0},E=performance.now(),D=0,O=!1;function k(e){let n=Math.min(.1,(e-E)/1e3);E=e;let p=i.tick(e);for(let e=0;e<p;e++){m.update();let e=d.alive,t=e&&m.act,n=e&&!d.shielded?b(`fire`,0):null;s.data.dirX=e?m.dirX:0,s.data.dirY=e?m.dirY:0,s.data.fire=n===null?0:1,s.data.act=+!!t,t?s.data.aim=Dc(m.aim??b(`super`,nS)??f.state.heading):n!==null&&(s.data.aim=Dc(n)),s.send()}a.update(n);let _=e/1e3;for(let[i,o]of r.state.ships)i!==r.sessionId&&(!o.alive||!a.pose(i,e,T)?(t.hideShip(i),c.setLabel(i,null,uS(o,!1)),y.delete(i)):(y.set(i,{x:T.x,y:T.y,heading:T.heading,speed:T.speed,shielded:o.shielded}),t.updateShip(i,T.x,T.y,T.heading,_,o.kind,o.shielded),c.setLabel(i,t.toScreen(T.x,T.y,eS),uS(o,!1)),u?.smoothness.observe(i,T.x,T.y,T.speed,n)));let v=i.value(d,`x`),C=i.value(d,`y`);if(d.alive){t.updateShip(r.sessionId,v,C,i.value(d,`heading`),_,f.state.kind,d.shielded),c.setLabel(r.sessionId,t.toScreen(v,C,eS),{...uS(d,!0),ammo:f.state.ammo}),t.follow(v,C,n),t.showRange(v,C,S());let e=m.aiming,a=e&&x();e&&a?t.showAim(v,C,e.angle,a,!0):t.hideAim()}else t.hideShip(r.sessionId),t.hideAim(),t.hideRange(),c.setLabel(r.sessionId,null,uS(d,!0)),t.hasFocus||t.follow(160,160,n);if(d.alive!==O&&(c.setPlaying(d.alive),d.alive&&(g=d.level)),O=d.alive,d.alive&&d.level>g){for(let e=g+1;e<=d.level;e++){let t=il(d.kind,h,e);c.feed(`⬆ Seviye ${e}${t?` · ${t.title}`:``}`)}l.addPoints(d.level-g),g=d.level}t.drawLoot(r.state.loot.values(),_),t.beginProjectiles(),o.update(e,e=>t.drawProjectile(e)),t.endProjectiles(),t.render(n);let w=d.level,A=Ic(w),j=Ic(w+1);c.setProgress(w,d.kind,(d.xp-A)/Math.max(1,j-A),w>=Fc),c.setSuper(f.state.kind,f.state.charge),D-=n,D<=0&&(D=.5,c.setBoard([...r.state.ships.entries()].filter(([,e])=>!e.npc&&e.alive).sort(([,e],[,t])=>t.xp-e.xp).slice(0,tS).map(([e,t])=>({name:t.name,level:t.level,score:t.xp,self:e===r.sessionId}))));let M=r.clock.rtt();iS.textContent=`${r.state.ships.size} gemi · ping ${M.toFixed(0)} ms`,u?.update(n,{rtt:M,delay:a.delay,correction:f.drift.peak,correctionStatus:rs(f.drift),ships:r.state.ships.size}),requestAnimationFrame(k)}requestAnimationFrame(k)}function lS(e,t){setTimeout(t,Math.max(0,e-performance.now()))}function uS(e,t){return{name:e.name,level:e.level,hp:e.hp,maxHp:e.maxHp,self:t,npc:e.npc}}cS().catch(e=>{console.error(e),iS.textContent=`Sunucuya bağlanılamadı`});export{m as i,kt as n,Nr as r,Ko as t};