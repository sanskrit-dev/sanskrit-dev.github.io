(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xi(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ue={},Cn=[],dt=()=>{},Ku=()=>!1,ds=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ai=t=>t.startsWith("onUpdate:"),Ie=Object.assign,ki=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qu=Object.prototype.hasOwnProperty,se=(t,e)=>qu.call(t,e),F=Array.isArray,xn=t=>yr(t)==="[object Map]",fs=t=>yr(t)==="[object Set]",yo=t=>yr(t)==="[object Date]",W=t=>typeof t=="function",ye=t=>typeof t=="string",gt=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",sl=t=>(de(t)||W(t))&&W(t.then)&&W(t.catch),il=Object.prototype.toString,yr=t=>il.call(t),Gu=t=>yr(t).slice(8,-1),ol=t=>yr(t)==="[object Object]",Ri=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gn=xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ju=/-(\w)/g,Ge=hs(t=>t.replace(Ju,(e,n)=>n?n.toUpperCase():"")),Yu=/\B([A-Z])/g,yn=hs(t=>t.replace(Yu,"-$1").toLowerCase()),ps=hs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ns=hs(t=>t?`on${ps(t)}`:""),Kt=(t,e)=>!Object.is(t,e),Mr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},al=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},zr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Xu=t=>{const e=ye(t)?Number(t):NaN;return isNaN(e)?t:e};let _o;const gs=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pi(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ye(r)?td(r):Pi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ye(t)||de(t))return t}const Qu=/;(?![^(]*\))/g,Zu=/:([^]+)/,ed=/\/\*[^]*?\*\//g;function td(t){const e={};return t.replace(ed,"").split(Qu).forEach(n=>{if(n){const r=n.split(Zu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ms(t){let e="";if(ye(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=ms(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rd=xi(nd);function ll(t){return!!t||t===""}function sd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=vs(t[r],e[r]);return n}function vs(t,e){if(t===e)return!0;let n=yo(t),r=yo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=gt(t),r=gt(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?sd(t,e):!1;if(n=de(t),r=de(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!vs(t[o],e[o]))return!1}}return String(t)===String(e)}function id(t,e){return t.findIndex(n=>vs(n,e))}const cl=t=>!!(t&&t.__v_isRef===!0),me=t=>ye(t)?t:t==null?"":F(t)||de(t)&&(t.toString===il||!W(t.toString))?cl(t)?me(t.value):JSON.stringify(t,ul,2):String(t),ul=(t,e)=>cl(e)?ul(t,e.value):xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ds(r,i)+" =>"]=s,n),{})}:fs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ds(n))}:gt(e)?Ds(e):de(e)&&!F(e)&&!ol(e)?String(e):e,Ds=(t,e="")=>{var n;return gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class od{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ad(){return Ne}let pe;const Ms=new WeakSet;class dl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ms.has(this)&&(Ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bo(this),pl(this);const e=pe,n=Xe;pe=this,Xe=!0;try{return this.fn()}finally{gl(this),pe=e,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Di(e);this.deps=this.depsTail=void 0,bo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ri(this)&&this.run()}get dirty(){return ri(this)}}let fl=0,Jn,Yn;function hl(t,e=!1){if(t.flags|=8,e){t.next=Yn,Yn=t;return}t.next=Jn,Jn=t}function Oi(){fl++}function Ni(){if(--fl>0)return;if(Yn){let e=Yn;for(Yn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Jn;){let e=Jn;for(Jn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gl(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Di(r),ld(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ri(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ml(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ml(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ir)||(t.globalVersion=ir,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ri(t))))return;t.flags|=2;const e=t.dep,n=pe,r=Xe;pe=t,Xe=!0;try{pl(t);const s=t.fn(t._value);(e.version===0||Kt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{pe=n,Xe=r,gl(t),t.flags&=-3}}function Di(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Di(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ld(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xe=!0;const vl=[];function kt(){vl.push(Xe),Xe=!1}function Rt(){const t=vl.pop();Xe=t===void 0?!0:t}function bo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pe;pe=void 0;try{e()}finally{pe=n}}}let ir=0;class cd{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pe||!Xe||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new cd(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,yl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=r)}return n}trigger(e){this.version++,ir++,this.notify(e)}notify(e){Oi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ni()}}}function yl(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yl(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const si=new WeakMap,dn=Symbol(""),ii=Symbol(""),or=Symbol("");function Te(t,e,n){if(Xe&&pe){let r=si.get(t);r||si.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mi),s.map=r,s.key=n),s.track()}}function Et(t,e,n,r,s,i){const o=si.get(t);if(!o){ir++;return}const l=a=>{a&&a.trigger()};if(Oi(),e==="clear")o.forEach(l);else{const a=F(t),c=a&&Ri(n);if(a&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===or||!gt(p)&&p>=u)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(or)),e){case"add":a?c&&l(o.get("length")):(l(o.get(dn)),xn(t)&&l(o.get(ii)));break;case"delete":a||(l(o.get(dn)),xn(t)&&l(o.get(ii)));break;case"set":xn(t)&&l(o.get(dn));break}}Ni()}function En(t){const e=ee(t);return e===t?e:(Te(e,"iterate",or),qe(t)?e:e.map(Ee))}function ys(t){return Te(t=ee(t),"iterate",or),t}const ud={__proto__:null,[Symbol.iterator](){return Ls(this,Symbol.iterator,Ee)},concat(...t){return En(this).concat(...t.map(e=>F(e)?En(e):e))},entries(){return Ls(this,"entries",t=>(t[1]=Ee(t[1]),t))},every(t,e){return _t(this,"every",t,e,void 0,arguments)},filter(t,e){return _t(this,"filter",t,e,n=>n.map(Ee),arguments)},find(t,e){return _t(this,"find",t,e,Ee,arguments)},findIndex(t,e){return _t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _t(this,"findLast",t,e,Ee,arguments)},findLastIndex(t,e){return _t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _t(this,"forEach",t,e,void 0,arguments)},includes(...t){return $s(this,"includes",t)},indexOf(...t){return $s(this,"indexOf",t)},join(t){return En(this).join(t)},lastIndexOf(...t){return $s(this,"lastIndexOf",t)},map(t,e){return _t(this,"map",t,e,void 0,arguments)},pop(){return jn(this,"pop")},push(...t){return jn(this,"push",t)},reduce(t,...e){return wo(this,"reduce",t,e)},reduceRight(t,...e){return wo(this,"reduceRight",t,e)},shift(){return jn(this,"shift")},some(t,e){return _t(this,"some",t,e,void 0,arguments)},splice(...t){return jn(this,"splice",t)},toReversed(){return En(this).toReversed()},toSorted(t){return En(this).toSorted(t)},toSpliced(...t){return En(this).toSpliced(...t)},unshift(...t){return jn(this,"unshift",t)},values(){return Ls(this,"values",Ee)}};function Ls(t,e,n){const r=ys(t),s=r[e]();return r!==t&&!qe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const dd=Array.prototype;function _t(t,e,n,r,s,i){const o=ys(t),l=o!==t&&!qe(t),a=o[e];if(a!==dd[e]){const d=a.apply(t,i);return l?Ee(d):d}let c=n;o!==t&&(l?c=function(d,p){return n.call(this,Ee(d),p,t)}:n.length>2&&(c=function(d,p){return n.call(this,d,p,t)}));const u=a.call(o,c,r);return l&&s?s(u):u}function wo(t,e,n,r){const s=ys(t);let i=n;return s!==t&&(qe(t)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,t)}):i=function(o,l,a){return n.call(this,o,Ee(l),a,t)}),s[e](i,...r)}function $s(t,e,n){const r=ee(t);Te(r,"iterate",or);const s=r[e](...n);return(s===-1||s===!1)&&Ui(n[0])?(n[0]=ee(n[0]),r[e](...n)):s}function jn(t,e,n=[]){kt(),Oi();const r=ee(t)[e].apply(t,n);return Ni(),Rt(),r}const fd=xi("__proto__,__v_isRef,__isVue"),_l=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gt));function hd(t){gt(t)||(t=String(t));const e=ee(this);return Te(e,"has",t),e.hasOwnProperty(t)}class bl{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ed:Sl:i?El:Il).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){let a;if(o&&(a=ud[n]))return a;if(n==="hasOwnProperty")return hd}const l=Reflect.get(e,n,Ce(e)?e:r);return(gt(n)?_l.has(n):fd(n))||(s||Te(e,"get",n),i)?l:Ce(l)?o&&Ri(n)?l:l.value:de(l)?s?Cl(l):_r(l):l}}class wl extends bl{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Jt(i);if(!qe(r)&&!Jt(r)&&(i=ee(i),r=ee(r)),!F(e)&&Ce(i)&&!Ce(r))return a?!1:(i.value=r,!0)}const o=F(e)&&Ri(n)?Number(n)<e.length:se(e,n),l=Reflect.set(e,n,r,Ce(e)?e:s);return e===ee(s)&&(o?Kt(r,i)&&Et(e,"set",n,r):Et(e,"add",n,r)),l}deleteProperty(e,n){const r=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Et(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!gt(n)||!_l.has(n))&&Te(e,"has",n),r}ownKeys(e){return Te(e,"iterate",F(e)?"length":dn),Reflect.ownKeys(e)}}class pd extends bl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gd=new wl,md=new pd,vd=new wl(!0);const oi=t=>t,Rr=t=>Reflect.getPrototypeOf(t);function yd(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=xn(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...r),u=n?oi:e?Kr:Ee;return!e&&Te(i,"iterate",a?ii:dn),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:l?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Pr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _d(t,e){const n={get(s){const i=this.__v_raw,o=ee(i),l=ee(s);t||(Kt(s,l)&&Te(o,"get",s),Te(o,"get",l));const{has:a}=Rr(o),c=e?oi:t?Kr:Ee;if(a.call(o,s))return c(i.get(s));if(a.call(o,l))return c(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Te(ee(s),"iterate",dn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ee(i),l=ee(s);return t||(Kt(s,l)&&Te(o,"has",s),Te(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,a=ee(l),c=e?oi:t?Kr:Ee;return!t&&Te(a,"iterate",dn),l.forEach((u,d)=>s.call(i,c(u),c(d),o))}};return Ie(n,t?{add:Pr("add"),set:Pr("set"),delete:Pr("delete"),clear:Pr("clear")}:{add(s){!e&&!qe(s)&&!Jt(s)&&(s=ee(s));const i=ee(this);return Rr(i).has.call(i,s)||(i.add(s),Et(i,"add",s,s)),this},set(s,i){!e&&!qe(i)&&!Jt(i)&&(i=ee(i));const o=ee(this),{has:l,get:a}=Rr(o);let c=l.call(o,s);c||(s=ee(s),c=l.call(o,s));const u=a.call(o,s);return o.set(s,i),c?Kt(i,u)&&Et(o,"set",s,i):Et(o,"add",s,i),this},delete(s){const i=ee(this),{has:o,get:l}=Rr(i);let a=o.call(i,s);a||(s=ee(s),a=o.call(i,s)),l&&l.call(i,s);const c=i.delete(s);return a&&Et(i,"delete",s,void 0),c},clear(){const s=ee(this),i=s.size!==0,o=s.clear();return i&&Et(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yd(s,t,e)}),n}function Li(t,e){const n=_d(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const bd={get:Li(!1,!1)},wd={get:Li(!1,!0)},Id={get:Li(!0,!1)};const Il=new WeakMap,El=new WeakMap,Sl=new WeakMap,Ed=new WeakMap;function Sd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Td(t){return t.__v_skip||!Object.isExtensible(t)?0:Sd(Gu(t))}function _r(t){return Jt(t)?t:$i(t,!1,gd,bd,Il)}function Tl(t){return $i(t,!1,vd,wd,El)}function Cl(t){return $i(t,!0,md,Id,Sl)}function $i(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Td(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function An(t){return Jt(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function Ui(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Cd(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&al(t,"__v_skip",!0),t}const Ee=t=>de(t)?_r(t):t,Kr=t=>de(t)?Cl(t):t;function Ce(t){return t?t.__v_isRef===!0:!1}function ve(t){return xl(t,!1)}function xd(t){return xl(t,!0)}function xl(t,e){return Ce(t)?t:new Ad(t,e)}class Ad{constructor(e,n){this.dep=new Mi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:Ee(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qe(e)||Jt(e);e=r?e:ee(e),Kt(e,n)&&(this._rawValue=e,this._value=r?e:Ee(e),this.dep.trigger())}}function He(t){return Ce(t)?t.value:t}const kd={get:(t,e,n)=>e==="__v_raw"?t:He(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Al(t){return An(t)?t:new Proxy(t,kd)}class Rd{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ir-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return hl(this,!0),!0}get value(){const e=this.dep.track();return ml(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pd(t,e,n=!1){let r,s;return W(t)?r=t:(r=t.get,s=t.set),new Rd(r,s,n)}const Or={},qr=new WeakMap;let sn;function Od(t,e=!1,n=sn){if(n){let r=qr.get(n);r||qr.set(n,r=[]),r.push(t)}}function Nd(t,e,n=ue){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:a}=n,c=P=>s?P:qe(P)||s===!1||s===0?St(P,1):St(P);let u,d,p,g,E=!1,C=!1;if(Ce(t)?(d=()=>t.value,E=qe(t)):An(t)?(d=()=>c(t),E=!0):F(t)?(C=!0,E=t.some(P=>An(P)||qe(P)),d=()=>t.map(P=>{if(Ce(P))return P.value;if(An(P))return c(P);if(W(P))return a?a(P,2):P()})):W(t)?e?d=a?()=>a(t,2):t:d=()=>{if(p){kt();try{p()}finally{Rt()}}const P=sn;sn=u;try{return a?a(t,3,[g]):t(g)}finally{sn=P}}:d=dt,e&&s){const P=d,K=s===!0?1/0:s;d=()=>St(P(),K)}const H=ad(),M=()=>{u.stop(),H&&H.active&&ki(H.effects,u)};if(i&&e){const P=e;e=(...K)=>{P(...K),M()}}let R=C?new Array(t.length).fill(Or):Or;const N=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(e){const K=u.run();if(s||E||(C?K.some((Q,Z)=>Kt(Q,R[Z])):Kt(K,R))){p&&p();const Q=sn;sn=u;try{const Z=[K,R===Or?void 0:C&&R[0]===Or?[]:R,g];a?a(e,3,Z):e(...Z),R=K}finally{sn=Q}}}else u.run()};return l&&l(N),u=new dl(d),u.scheduler=o?()=>o(N,!1):N,g=P=>Od(P,!1,u),p=u.onStop=()=>{const P=qr.get(u);if(P){if(a)a(P,4);else for(const K of P)K();qr.delete(u)}},e?r?N(!0):R=u.run():o?o(N.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function St(t,e=1/0,n){if(e<=0||!de(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ce(t))St(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)St(t[r],e,n);else if(fs(t)||xn(t))t.forEach(r=>{St(r,e,n)});else if(ol(t)){for(const r in t)St(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&St(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function br(t,e,n,r){try{return r?t(...r):t()}catch(s){_s(s,e,n)}}function Ze(t,e,n,r){if(W(t)){const s=br(t,e,n,r);return s&&sl(s)&&s.catch(i=>{_s(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ze(t[i],e,n,r));return s}}function _s(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ue;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,c)===!1)return}l=l.parent}if(i){kt(),br(i,null,10,[t,a,c]),Rt();return}}Dd(t,n,s,r,o)}function Dd(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ae=[];let at=-1;const kn=[];let Ft=null,Sn=0;const kl=Promise.resolve();let Gr=null;function Fi(t){const e=Gr||kl;return t?e.then(this?t.bind(this):t):e}function Md(t){let e=at+1,n=Ae.length;for(;e<n;){const r=e+n>>>1,s=Ae[r],i=ar(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hi(t){if(!(t.flags&1)){const e=ar(t),n=Ae[Ae.length-1];!n||!(t.flags&2)&&e>=ar(n)?Ae.push(t):Ae.splice(Md(e),0,t),t.flags|=1,Rl()}}function Rl(){Gr||(Gr=kl.then(Ol))}function Ld(t){F(t)?kn.push(...t):Ft&&t.id===-1?Ft.splice(Sn+1,0,t):t.flags&1||(kn.push(t),t.flags|=1),Rl()}function Io(t,e,n=at+1){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Pl(t){if(kn.length){const e=[...new Set(kn)].sort((n,r)=>ar(n)-ar(r));if(kn.length=0,Ft){Ft.push(...e);return}for(Ft=e,Sn=0;Sn<Ft.length;Sn++){const n=Ft[Sn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ft=null,Sn=0}}const ar=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ol(t){try{for(at=0;at<Ae.length;at++){const e=Ae[at];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),br(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;at<Ae.length;at++){const e=Ae[at];e&&(e.flags&=-2)}at=-1,Ae.length=0,Pl(),Gr=null,(Ae.length||kn.length)&&Ol()}}let De=null,Nl=null;function Jr(t){const e=De;return De=t,Nl=t&&t.type.__scopeId||null,e}function le(t,e=De,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&No(-1);const i=Jr(e);let o;try{o=t(...s)}finally{Jr(i),r._d&&No(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ut(t,e){if(De===null)return t;const n=Ts(De),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,a=ue]=e[s];i&&(W(i)&&(i={mounted:i,updated:i}),i.deep&&St(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function en(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let a=l.dir[r];a&&(kt(),Ze(a,n,8,[t.el,l,t,e]),Rt())}}const $d=Symbol("_vte"),Dl=t=>t.__isTeleport,Ht=Symbol("_leaveCb"),Nr=Symbol("_enterCb");function Ud(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wr(()=>{t.isMounted=!0}),jl(()=>{t.isUnmounting=!0}),t}const We=[Function,Array],Ml={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},Ll=t=>{const e=t.subTree;return e.component?Ll(e.component):e},Fd={name:"BaseTransition",props:Ml,setup(t,{slots:e}){const n=$f(),r=Ud();return()=>{const s=e.default&&Fl(e.default(),!0);if(!s||!s.length)return;const i=$l(s),o=ee(t),{mode:l}=o;if(r.isLeaving)return Us(i);const a=Eo(i);if(!a)return Us(i);let c=ai(a,o,r,n,d=>c=d);a.type!==ke&&lr(a,c);let u=n.subTree&&Eo(n.subTree);if(u&&u.type!==ke&&!an(a,u)&&Ll(n).type!==ke){let d=ai(u,o,r,n);if(lr(u,d),l==="out-in"&&a.type!==ke)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Us(i);l==="in-out"&&a.type!==ke?d.delayLeave=(p,g,E)=>{const C=Ul(r,u);C[String(u.key)]=u,p[Ht]=()=>{g(),p[Ht]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{E(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function $l(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ke){e=n;break}}return e}const Hd=Fd;function Ul(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ai(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:E,onLeaveCancelled:C,onBeforeAppear:H,onAppear:M,onAfterAppear:R,onAppearCancelled:N}=e,P=String(t.key),K=Ul(n,t),Q=(j,Y)=>{j&&Ze(j,r,9,Y)},Z=(j,Y)=>{const fe=Y[1];Q(j,Y),F(j)?j.every(D=>D.length<=1)&&fe():j.length<=1&&fe()},_e={mode:o,persisted:l,beforeEnter(j){let Y=a;if(!n.isMounted)if(i)Y=H||a;else return;j[Ht]&&j[Ht](!0);const fe=K[P];fe&&an(t,fe)&&fe.el[Ht]&&fe.el[Ht](),Q(Y,[j])},enter(j){let Y=c,fe=u,D=d;if(!n.isMounted)if(i)Y=M||c,fe=R||u,D=N||d;else return;let te=!1;const be=j[Nr]=Le=>{te||(te=!0,Le?Q(D,[j]):Q(fe,[j]),_e.delayedLeave&&_e.delayedLeave(),j[Nr]=void 0)};Y?Z(Y,[j,be]):be()},leave(j,Y){const fe=String(t.key);if(j[Nr]&&j[Nr](!0),n.isUnmounting)return Y();Q(p,[j]);let D=!1;const te=j[Ht]=be=>{D||(D=!0,Y(),be?Q(C,[j]):Q(E,[j]),j[Ht]=void 0,K[fe]===t&&delete K[fe])};K[fe]=t,g?Z(g,[j,te]):te()},clone(j){const Y=ai(j,e,n,r,s);return s&&s(Y),Y}};return _e}function Us(t){if(ws(t))return t=Yt(t),t.children=null,t}function Eo(t){if(!ws(t))return Dl(t.type)&&t.children?$l(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&W(n.default))return n.default()}}function lr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===we?(o.patchFlag&128&&s++,r=r.concat(Fl(o.children,e,l))):(e||o.type!==ke)&&r.push(l!=null?Yt(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function bs(t,e){return W(t)?Ie({name:t.name},e,{setup:t}):t}function Hl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yr(t,e,n,r,s=!1){if(F(t)){t.forEach((E,C)=>Yr(E,e&&(F(e)?e[C]:e),n,r,s));return}if(Xn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Yr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ts(r.component):r.el,o=s?null:i,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ue?l.refs={}:l.refs,d=l.setupState,p=ee(d),g=d===ue?()=>!1:E=>se(p,E);if(c!=null&&c!==a&&(ye(c)?(u[c]=null,g(c)&&(d[c]=null)):Ce(c)&&(c.value=null)),W(a))br(a,l,12,[o,u]);else{const E=ye(a),C=Ce(a);if(E||C){const H=()=>{if(t.f){const M=E?g(a)?d[a]:u[a]:a.value;s?F(M)&&ki(M,i):F(M)?M.includes(i)||M.push(i):E?(u[a]=[i],g(a)&&(d[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else E?(u[a]=o,g(a)&&(d[a]=o)):C&&(a.value=o,t.k&&(u[t.k]=o))};o?(H.id=-1,Fe(H,n)):H()}}}gs().requestIdleCallback;gs().cancelIdleCallback;const Xn=t=>!!t.type.__asyncLoader,ws=t=>t.type.__isKeepAlive;function Bd(t,e){Bl(t,"a",e)}function jd(t,e){Bl(t,"da",e)}function Bl(t,e,n=Se){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Is(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ws(s.parent.vnode)&&Vd(r,e,n,s),s=s.parent}}function Vd(t,e,n,r){const s=Is(e,t,r,!0);Bi(()=>{ki(r[e],s)},n)}function Is(t,e,n=Se,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kt();const l=Ir(n),a=Ze(e,n,t,o);return l(),Rt(),a});return r?s.unshift(i):s.push(i),i}}const Dt=t=>(e,n=Se)=>{(!dr||t==="sp")&&Is(t,(...r)=>e(...r),n)},Wd=Dt("bm"),wr=Dt("m"),zd=Dt("bu"),Kd=Dt("u"),jl=Dt("bum"),Bi=Dt("um"),qd=Dt("sp"),Gd=Dt("rtg"),Jd=Dt("rtc");function Yd(t,e=Se){Is("ec",t,e)}const Xd="components";function _n(t,e){return Zd(Xd,t,!0,e)||t}const Qd=Symbol.for("v-ndc");function Zd(t,e,n=!0,r=!1){const s=De||Se;if(s){const i=s.type;{const l=jf(i,!1);if(l&&(l===e||l===Ge(e)||l===ps(Ge(e))))return i}const o=So(s[t]||i[t],e)||So(s.appContext[t],e);return!o&&r?i:o}}function So(t,e){return t&&(t[e]||t[Ge(e)]||t[ps(Ge(e))])}function cr(t,e,n,r){let s;const i=n,o=F(t);if(o||ye(t)){const l=o&&An(t);let a=!1,c=!1;l&&(a=!qe(t),c=Jt(t),t=ys(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(a?c?Kr(Ee(t[u])):Ee(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(l,a)=>e(l,a,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}const li=t=>t?lc(t)?Ts(t):li(t.parent):null,Qn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>li(t.parent),$root:t=>li(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wl(t),$forceUpdate:t=>t.f||(t.f=()=>{Hi(t.update)}),$nextTick:t=>t.n||(t.n=Fi.bind(t.proxy)),$watch:t=>wf.bind(t)}),Fs=(t,e)=>t!==ue&&!t.__isScriptSetup&&se(t,e),ef={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fs(r,e))return o[e]=1,r[e];if(s!==ue&&se(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==ue&&se(n,e))return o[e]=4,n[e];ci&&(o[e]=0)}}const u=Qn[e];let d,p;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==ue&&se(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,se(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fs(s,e)?(s[e]=n,!0):r!==ue&&se(r,e)?(r[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==ue&&se(t,o)||Fs(e,o)||(l=i[0])&&se(l,o)||se(r,o)||se(Qn,o)||se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function To(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ci=!0;function tf(t){const e=Wl(t),n=t.proxy,r=t.ctx;ci=!1,e.beforeCreate&&Co(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:E,activated:C,deactivated:H,beforeDestroy:M,beforeUnmount:R,destroyed:N,unmounted:P,render:K,renderTracked:Q,renderTriggered:Z,errorCaptured:_e,serverPrefetch:j,expose:Y,inheritAttrs:fe,components:D,directives:te,filters:be}=e;if(c&&nf(c,r,null),o)for(const oe in o){const ne=o[oe];W(ne)&&(r[oe]=ne.bind(n))}if(s){const oe=s.call(n,n);de(oe)&&(t.data=_r(oe))}if(ci=!0,i)for(const oe in i){const ne=i[oe],yt=W(ne)?ne.bind(n,n):W(ne.get)?ne.get.bind(n,n):dt,Mt=!W(ne)&&W(ne.set)?ne.set.bind(n):dt,nt=ze({get:yt,set:Mt});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Pe=>nt.value=Pe})}if(l)for(const oe in l)Vl(l[oe],r,n,oe);if(a){const oe=W(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(ne=>{Lr(ne,oe[ne])})}u&&Co(u,t,"c");function ge(oe,ne){F(ne)?ne.forEach(yt=>oe(yt.bind(n))):ne&&oe(ne.bind(n))}if(ge(Wd,d),ge(wr,p),ge(zd,g),ge(Kd,E),ge(Bd,C),ge(jd,H),ge(Yd,_e),ge(Jd,Q),ge(Gd,Z),ge(jl,R),ge(Bi,P),ge(qd,j),F(Y))if(Y.length){const oe=t.exposed||(t.exposed={});Y.forEach(ne=>{Object.defineProperty(oe,ne,{get:()=>n[ne],set:yt=>n[ne]=yt})})}else t.exposed||(t.exposed={});K&&t.render===dt&&(t.render=K),fe!=null&&(t.inheritAttrs=fe),D&&(t.components=D),te&&(t.directives=te),j&&Hl(t)}function nf(t,e,n=dt){F(t)&&(t=ui(t));for(const r in t){const s=t[r];let i;de(s)?"default"in s?i=ft(s.from||r,s.default,!0):i=ft(s.from||r):i=ft(s),Ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Co(t,e,n){Ze(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vl(t,e,n,r){let s=r.includes(".")?rc(n,r):()=>n[r];if(ye(t)){const i=e[t];W(i)&&$r(s,i)}else if(W(t))$r(s,t.bind(n));else if(de(t))if(F(t))t.forEach(i=>Vl(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&$r(s,i,t)}}function Wl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(c=>Xr(a,c,o,!0)),Xr(a,e,o)),de(e)&&i.set(e,a),a}function Xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xr(t,i,n,!0),s&&s.forEach(o=>Xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=rf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const rf={data:xo,props:Ao,emits:Ao,methods:zn,computed:zn,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:zn,directives:zn,watch:of,provide:xo,inject:sf};function xo(t,e){return e?t?function(){return Ie(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function sf(t,e){return zn(ui(t),ui(e))}function ui(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xe(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?Ie(Object.create(null),t,e):e}function Ao(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:Ie(Object.create(null),To(t),To(e??{})):e}function of(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const r in e)n[r]=xe(t[r],e[r]);return n}function zl(){return{app:null,config:{isNativeTag:Ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let af=0;function lf(t,e){return function(r,s=null){W(r)||(r=Ie({},r)),s!=null&&!de(s)&&(s=null);const i=zl(),o=new WeakSet,l=[];let a=!1;const c=i.app={_uid:af++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(c,...d)):W(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,p){if(!a){const g=c._ceVNode||z(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(g,u,p),a=!0,c._container=u,u.__vue_app__=c,Ts(g.component)}},onUnmount(u){l.push(u)},unmount(){a&&(Ze(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Rn;Rn=c;try{return u()}finally{Rn=d}}};return c}}let Rn=null;function Lr(t,e){if(Se){let n=Se.provides;const r=Se.parent&&Se.parent.provides;r===n&&(n=Se.provides=Object.create(r)),n[t]=e}}function ft(t,e,n=!1){const r=Se||De;if(r||Rn){const s=Rn?Rn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}const Kl={},ql=()=>Object.create(Kl),Gl=t=>Object.getPrototypeOf(t)===Kl;function cf(t,e,n,r=!1){const s={},i=ql();t.propsDefaults=Object.create(null),Jl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function uf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ee(s),[a]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Es(t.emitsOptions,p))continue;const g=e[p];if(a)if(se(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const E=Ge(p);s[E]=di(a,l,E,g,t,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{Jl(t,e,s,i)&&(c=!0);let u;for(const d in l)(!e||!se(e,d)&&((u=yn(d))===d||!se(e,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=di(a,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!se(e,d))&&(delete i[d],c=!0)}c&&Et(t.attrs,"set","")}function Jl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Gn(a))continue;const c=e[a];let u;s&&se(s,u=Ge(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:Es(t.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,o=!0)}if(i){const a=ee(n),c=l||ue;for(let u=0;u<i.length;u++){const d=i[u];n[d]=di(s,a,d,c[d],t,!se(c,d))}}return o}function di(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=se(o,"default");if(l&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&W(a)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Ir(s);r=c[n]=a.call(null,e),u()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===yn(n))&&(r=!0))}return r}const df=new WeakMap;function Yl(t,e,n=!1){const r=n?df:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let a=!1;if(!W(t)){const u=d=>{a=!0;const[p,g]=Yl(d,e,!0);Ie(o,p),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return de(t)&&r.set(t,Cn),Cn;if(F(i))for(let u=0;u<i.length;u++){const d=Ge(i[u]);ko(d)&&(o[d]=ue)}else if(i)for(const u in i){const d=Ge(u);if(ko(d)){const p=i[u],g=o[d]=F(p)||W(p)?{type:p}:Ie({},p),E=g.type;let C=!1,H=!0;if(F(E))for(let M=0;M<E.length;++M){const R=E[M],N=W(R)&&R.name;if(N==="Boolean"){C=!0;break}else N==="String"&&(H=!1)}else C=W(E)&&E.name==="Boolean";g[0]=C,g[1]=H,(C||se(g,"default"))&&l.push(d)}}const c=[o,l];return de(t)&&r.set(t,c),c}function ko(t){return t[0]!=="$"&&!Gn(t)}const ji=t=>t[0]==="_"||t==="$stable",Vi=t=>F(t)?t.map(lt):[lt(t)],ff=(t,e,n)=>{if(e._n)return e;const r=le((...s)=>Vi(e(...s)),n);return r._c=!1,r},Xl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ji(s))continue;const i=t[s];if(W(i))e[s]=ff(s,i,r);else if(i!=null){const o=Vi(i);e[s]=()=>o}}},Ql=(t,e)=>{const n=Vi(e);t.slots.default=()=>n},Zl=(t,e,n)=>{for(const r in e)(n||!ji(r))&&(t[r]=e[r])},hf=(t,e,n)=>{const r=t.slots=ql();if(t.vnode.shapeFlag&32){const s=e._;s?(Zl(r,e,n),n&&al(r,"_",s,!0)):Xl(e,r)}else e&&Ql(t,e)},pf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ue;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Zl(s,e,n):(i=!e.$stable,Xl(e,s)),o=e}else e&&(Ql(t,e),o={default:1});if(i)for(const l in s)!ji(l)&&o[l]==null&&delete s[l]},Fe=Af;function gf(t){return mf(t)}function mf(t,e){const n=gs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=dt,insertStaticContent:E}=t,C=(f,h,m,y=null,w=null,b=null,x=void 0,T=null,S=!!h.dynamicChildren)=>{if(f===h)return;f&&!an(f,h)&&(y=_(f),Pe(f,w,b,!0),f=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:I,ref:U,shapeFlag:k}=h;switch(I){case Ss:H(f,h,m,y);break;case ke:M(f,h,m,y);break;case Ur:f==null&&R(h,m,y,x);break;case we:D(f,h,m,y,w,b,x,T,S);break;default:k&1?K(f,h,m,y,w,b,x,T,S):k&6?te(f,h,m,y,w,b,x,T,S):(k&64||k&128)&&I.process(f,h,m,y,w,b,x,T,S,L)}U!=null&&w&&Yr(U,f&&f.ref,b,h||f,!h)},H=(f,h,m,y)=>{if(f==null)r(h.el=l(h.children),m,y);else{const w=h.el=f.el;h.children!==f.children&&c(w,h.children)}},M=(f,h,m,y)=>{f==null?r(h.el=a(h.children||""),m,y):h.el=f.el},R=(f,h,m,y)=>{[f.el,f.anchor]=E(f.children,h,m,y,f.el,f.anchor)},N=({el:f,anchor:h},m,y)=>{let w;for(;f&&f!==h;)w=p(f),r(f,m,y),f=w;r(h,m,y)},P=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},K=(f,h,m,y,w,b,x,T,S)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),f==null?Q(h,m,y,w,b,x,T,S):j(f,h,w,b,x,T,S)},Q=(f,h,m,y,w,b,x,T)=>{let S,I;const{props:U,shapeFlag:k,transition:$,dirs:V}=f;if(S=f.el=o(f.type,b,U&&U.is,U),k&8?u(S,f.children):k&16&&_e(f.children,S,null,y,w,Hs(f,b),x,T),V&&en(f,null,y,"created"),Z(S,f,f.scopeId,x,y),U){for(const he in U)he!=="value"&&!Gn(he)&&i(S,he,null,U[he],b,y);"value"in U&&i(S,"value",null,U.value,b),(I=U.onVnodeBeforeMount)&&ot(I,y,f)}V&&en(f,null,y,"beforeMount");const G=vf(w,$);G&&$.beforeEnter(S),r(S,h,m),((I=U&&U.onVnodeMounted)||G||V)&&Fe(()=>{I&&ot(I,y,f),G&&$.enter(S),V&&en(f,null,y,"mounted")},w)},Z=(f,h,m,y,w)=>{if(m&&g(f,m),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(w){let b=w.subTree;if(h===b||ic(b.type)&&(b.ssContent===h||b.ssFallback===h)){const x=w.vnode;Z(f,x,x.scopeId,x.slotScopeIds,w.parent)}}},_e=(f,h,m,y,w,b,x,T,S=0)=>{for(let I=S;I<f.length;I++){const U=f[I]=T?Bt(f[I]):lt(f[I]);C(null,U,h,m,y,w,b,x,T)}},j=(f,h,m,y,w,b,x)=>{const T=h.el=f.el;let{patchFlag:S,dynamicChildren:I,dirs:U}=h;S|=f.patchFlag&16;const k=f.props||ue,$=h.props||ue;let V;if(m&&tn(m,!1),(V=$.onVnodeBeforeUpdate)&&ot(V,m,h,f),U&&en(h,f,m,"beforeUpdate"),m&&tn(m,!0),(k.innerHTML&&$.innerHTML==null||k.textContent&&$.textContent==null)&&u(T,""),I?Y(f.dynamicChildren,I,T,m,y,Hs(h,w),b):x||ne(f,h,T,null,m,y,Hs(h,w),b,!1),S>0){if(S&16)fe(T,k,$,m,w);else if(S&2&&k.class!==$.class&&i(T,"class",null,$.class,w),S&4&&i(T,"style",k.style,$.style,w),S&8){const G=h.dynamicProps;for(let he=0;he<G.length;he++){const ie=G[he],$e=k[ie],Oe=$[ie];(Oe!==$e||ie==="value")&&i(T,ie,$e,Oe,w,m)}}S&1&&f.children!==h.children&&u(T,h.children)}else!x&&I==null&&fe(T,k,$,m,w);((V=$.onVnodeUpdated)||U)&&Fe(()=>{V&&ot(V,m,h,f),U&&en(h,f,m,"updated")},y)},Y=(f,h,m,y,w,b,x)=>{for(let T=0;T<h.length;T++){const S=f[T],I=h[T],U=S.el&&(S.type===we||!an(S,I)||S.shapeFlag&70)?d(S.el):m;C(S,I,U,null,y,w,b,x,!0)}},fe=(f,h,m,y,w)=>{if(h!==m){if(h!==ue)for(const b in h)!Gn(b)&&!(b in m)&&i(f,b,h[b],null,w,y);for(const b in m){if(Gn(b))continue;const x=m[b],T=h[b];x!==T&&b!=="value"&&i(f,b,T,x,w,y)}"value"in m&&i(f,"value",h.value,m.value,w)}},D=(f,h,m,y,w,b,x,T,S)=>{const I=h.el=f?f.el:l(""),U=h.anchor=f?f.anchor:l("");let{patchFlag:k,dynamicChildren:$,slotScopeIds:V}=h;V&&(T=T?T.concat(V):V),f==null?(r(I,m,y),r(U,m,y),_e(h.children||[],m,U,w,b,x,T,S)):k>0&&k&64&&$&&f.dynamicChildren?(Y(f.dynamicChildren,$,m,w,b,x,T),(h.key!=null||w&&h===w.subTree)&&ec(f,h,!0)):ne(f,h,m,U,w,b,x,T,S)},te=(f,h,m,y,w,b,x,T,S)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?w.ctx.activate(h,m,y,x,S):be(h,m,y,w,b,x,S):Le(f,h,S)},be=(f,h,m,y,w,b,x)=>{const T=f.component=Lf(f,y,w);if(ws(f)&&(T.ctx.renderer=L),Uf(T,!1,x),T.asyncDep){if(w&&w.registerDep(T,ge,x),!f.el){const S=T.subTree=z(ke);M(null,S,h,m)}}else ge(T,f,h,m,w,b,x)},Le=(f,h,m)=>{const y=h.component=f.component;if(Cf(f,h,m))if(y.asyncDep&&!y.asyncResolved){oe(y,h,m);return}else y.next=h,y.update();else h.el=f.el,y.vnode=h},ge=(f,h,m,y,w,b,x)=>{const T=()=>{if(f.isMounted){let{next:k,bu:$,u:V,parent:G,vnode:he}=f;{const st=tc(f);if(st){k&&(k.el=he.el,oe(f,k,x)),st.asyncDep.then(()=>{f.isUnmounted||T()});return}}let ie=k,$e;tn(f,!1),k?(k.el=he.el,oe(f,k,x)):k=he,$&&Mr($),($e=k.props&&k.props.onVnodeBeforeUpdate)&&ot($e,G,k,he),tn(f,!0);const Oe=Po(f),rt=f.subTree;f.subTree=Oe,C(rt,Oe,d(rt.el),_(rt),f,w,b),k.el=Oe.el,ie===null&&xf(f,Oe.el),V&&Fe(V,w),($e=k.props&&k.props.onVnodeUpdated)&&Fe(()=>ot($e,G,k,he),w)}else{let k;const{el:$,props:V}=h,{bm:G,m:he,parent:ie,root:$e,type:Oe}=f,rt=Xn(h);tn(f,!1),G&&Mr(G),!rt&&(k=V&&V.onVnodeBeforeMount)&&ot(k,ie,h),tn(f,!0);{$e.ce&&$e.ce._injectChildStyle(Oe);const st=f.subTree=Po(f);C(null,st,m,y,f,w,b),h.el=st.el}if(he&&Fe(he,w),!rt&&(k=V&&V.onVnodeMounted)){const st=h;Fe(()=>ot(k,ie,st),w)}(h.shapeFlag&256||ie&&Xn(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Fe(f.a,w),f.isMounted=!0,h=m=y=null}};f.scope.on();const S=f.effect=new dl(T);f.scope.off();const I=f.update=S.run.bind(S),U=f.job=S.runIfDirty.bind(S);U.i=f,U.id=f.uid,S.scheduler=()=>Hi(U),tn(f,!0),I()},oe=(f,h,m)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,uf(f,h.props,y,m),pf(f,h.children,m),kt(),Io(f),Rt()},ne=(f,h,m,y,w,b,x,T,S=!1)=>{const I=f&&f.children,U=f?f.shapeFlag:0,k=h.children,{patchFlag:$,shapeFlag:V}=h;if($>0){if($&128){Mt(I,k,m,y,w,b,x,T,S);return}else if($&256){yt(I,k,m,y,w,b,x,T,S);return}}V&8?(U&16&&Ve(I,w,b),k!==I&&u(m,k)):U&16?V&16?Mt(I,k,m,y,w,b,x,T,S):Ve(I,w,b,!0):(U&8&&u(m,""),V&16&&_e(k,m,y,w,b,x,T,S))},yt=(f,h,m,y,w,b,x,T,S)=>{f=f||Cn,h=h||Cn;const I=f.length,U=h.length,k=Math.min(I,U);let $;for($=0;$<k;$++){const V=h[$]=S?Bt(h[$]):lt(h[$]);C(f[$],V,m,null,w,b,x,T,S)}I>U?Ve(f,w,b,!0,!1,k):_e(h,m,y,w,b,x,T,S,k)},Mt=(f,h,m,y,w,b,x,T,S)=>{let I=0;const U=h.length;let k=f.length-1,$=U-1;for(;I<=k&&I<=$;){const V=f[I],G=h[I]=S?Bt(h[I]):lt(h[I]);if(an(V,G))C(V,G,m,null,w,b,x,T,S);else break;I++}for(;I<=k&&I<=$;){const V=f[k],G=h[$]=S?Bt(h[$]):lt(h[$]);if(an(V,G))C(V,G,m,null,w,b,x,T,S);else break;k--,$--}if(I>k){if(I<=$){const V=$+1,G=V<U?h[V].el:y;for(;I<=$;)C(null,h[I]=S?Bt(h[I]):lt(h[I]),m,G,w,b,x,T,S),I++}}else if(I>$)for(;I<=k;)Pe(f[I],w,b,!0),I++;else{const V=I,G=I,he=new Map;for(I=G;I<=$;I++){const Ue=h[I]=S?Bt(h[I]):lt(h[I]);Ue.key!=null&&he.set(Ue.key,I)}let ie,$e=0;const Oe=$-G+1;let rt=!1,st=0;const Bn=new Array(Oe);for(I=0;I<Oe;I++)Bn[I]=0;for(I=V;I<=k;I++){const Ue=f[I];if($e>=Oe){Pe(Ue,w,b,!0);continue}let it;if(Ue.key!=null)it=he.get(Ue.key);else for(ie=G;ie<=$;ie++)if(Bn[ie-G]===0&&an(Ue,h[ie])){it=ie;break}it===void 0?Pe(Ue,w,b,!0):(Bn[it-G]=I+1,it>=st?st=it:rt=!0,C(Ue,h[it],m,null,w,b,x,T,S),$e++)}const mo=rt?yf(Bn):Cn;for(ie=mo.length-1,I=Oe-1;I>=0;I--){const Ue=G+I,it=h[Ue],vo=Ue+1<U?h[Ue+1].el:y;Bn[I]===0?C(null,it,m,vo,w,b,x,T,S):rt&&(ie<0||I!==mo[ie]?nt(it,m,vo,2):ie--)}}},nt=(f,h,m,y,w=null)=>{const{el:b,type:x,transition:T,children:S,shapeFlag:I}=f;if(I&6){nt(f.component.subTree,h,m,y);return}if(I&128){f.suspense.move(h,m,y);return}if(I&64){x.move(f,h,m,L);return}if(x===we){r(b,h,m);for(let k=0;k<S.length;k++)nt(S[k],h,m,y);r(f.anchor,h,m);return}if(x===Ur){N(f,h,m);return}if(y!==2&&I&1&&T)if(y===0)T.beforeEnter(b),r(b,h,m),Fe(()=>T.enter(b),w);else{const{leave:k,delayLeave:$,afterLeave:V}=T,G=()=>{f.ctx.isUnmounted?s(b):r(b,h,m)},he=()=>{k(b,()=>{G(),V&&V()})};$?$(b,G,he):he()}else r(b,h,m)},Pe=(f,h,m,y=!1,w=!1)=>{const{type:b,props:x,ref:T,children:S,dynamicChildren:I,shapeFlag:U,patchFlag:k,dirs:$,cacheIndex:V}=f;if(k===-2&&(w=!1),T!=null&&(kt(),Yr(T,null,m,f,!0),Rt()),V!=null&&(h.renderCache[V]=void 0),U&256){h.ctx.deactivate(f);return}const G=U&1&&$,he=!Xn(f);let ie;if(he&&(ie=x&&x.onVnodeBeforeUnmount)&&ot(ie,h,f),U&6)kr(f.component,m,y);else{if(U&128){f.suspense.unmount(m,y);return}G&&en(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,m,L,y):I&&!I.hasOnce&&(b!==we||k>0&&k&64)?Ve(I,h,m,!1,!0):(b===we&&k&384||!w&&U&16)&&Ve(S,h,m),y&&wn(f)}(he&&(ie=x&&x.onVnodeUnmounted)||G)&&Fe(()=>{ie&&ot(ie,h,f),G&&en(f,null,h,"unmounted")},m)},wn=f=>{const{type:h,el:m,anchor:y,transition:w}=f;if(h===we){In(m,y);return}if(h===Ur){P(f);return}const b=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:T}=w,S=()=>x(m,b);T?T(f.el,b,S):S()}else b()},In=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},kr=(f,h,m)=>{const{bum:y,scope:w,job:b,subTree:x,um:T,m:S,a:I,parent:U,slots:{__:k}}=f;Ro(S),Ro(I),y&&Mr(y),U&&F(k)&&k.forEach($=>{U.renderCache[$]=void 0}),w.stop(),b&&(b.flags|=8,Pe(x,f,h,m)),T&&Fe(T,h),Fe(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ve=(f,h,m,y=!1,w=!1,b=0)=>{for(let x=b;x<f.length;x++)Pe(f[x],h,m,y,w)},_=f=>{if(f.shapeFlag&6)return _(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),m=h&&h[$d];return m?p(m):h};let O=!1;const A=(f,h,m)=>{f==null?h._vnode&&Pe(h._vnode,null,null,!0):C(h._vnode||null,f,h,null,null,null,m),h._vnode=f,O||(O=!0,Io(),Pl(),O=!1)},L={p:C,um:Pe,m:nt,r:wn,mt:be,mc:_e,pc:ne,pbc:Y,n:_,o:t};return{render:A,hydrate:void 0,createApp:lf(A)}}function Hs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function tn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ec(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Bt(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&ec(o,l)),l.type===Ss&&(l.el=o.el),l.type===ke&&!l.el&&(l.el=o.el)}}function yf(t){const e=t.slice(),n=[0];let r,s,i,o,l;const a=t.length;for(r=0;r<a;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tc(e)}function Ro(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _f=Symbol.for("v-scx"),bf=()=>ft(_f);function $r(t,e,n){return nc(t,e,n)}function nc(t,e,n=ue){const{immediate:r,deep:s,flush:i,once:o}=n,l=Ie({},n),a=e&&r||!e&&i!=="post";let c;if(dr){if(i==="sync"){const g=bf();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=dt,g.resume=dt,g.pause=dt,g}}const u=Se;l.call=(g,E,C)=>Ze(g,u,E,C);let d=!1;i==="post"?l.scheduler=g=>{Fe(g,u&&u.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,E)=>{E?g():Hi(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=Nd(t,e,l);return dr&&(c?c.push(p):a&&p()),p}function wf(t,e,n){const r=this.proxy,s=ye(t)?t.includes(".")?rc(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=Ir(this),l=nc(s,i.bind(r),n);return o(),l}function rc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const If=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ge(e)}Modifiers`]||t[`${yn(e)}Modifiers`];function Ef(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ue;let s=n;const i=e.startsWith("update:"),o=i&&If(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ye(u)?u.trim():u)),o.number&&(s=n.map(zr)));let l,a=r[l=Ns(e)]||r[l=Ns(Ge(e))];!a&&i&&(a=r[l=Ns(yn(e))]),a&&Ze(a,t,6,s);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ze(c,t,6,s)}}function sc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=sc(c,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(de(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):Ie(o,i),de(t)&&r.set(t,o),o)}function Es(t,e){return!t||!ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,yn(e))||se(t,e))}function Po(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:d,data:p,setupState:g,ctx:E,inheritAttrs:C}=t,H=Jr(t);let M,R;try{if(n.shapeFlag&4){const P=s||r,K=P;M=lt(c.call(K,P,u,d,g,p,E)),R=l}else{const P=e;M=lt(P.length>1?P(d,{attrs:l,slots:o,emit:a}):P(d,null)),R=e.props?l:Sf(l)}}catch(P){Zn.length=0,_s(P,t,1),M=z(ke)}let N=M;if(R&&C!==!1){const P=Object.keys(R),{shapeFlag:K}=N;P.length&&K&7&&(i&&P.some(Ai)&&(R=Tf(R,i)),N=Yt(N,R,!1,!0))}return n.dirs&&(N=Yt(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&lr(N,n.transition),M=N,Jr(H),M}const Sf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ds(n))&&((e||(e={}))[n]=t[n]);return e},Tf=(t,e)=>{const n={};for(const r in t)(!Ai(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Cf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Oo(r,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Es(c,p))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Oo(r,o,c):!0:!!o;return!1}function Oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Es(n,i))return!0}return!1}function xf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ic=t=>t.__isSuspense;function Af(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Ld(t)}const we=Symbol.for("v-fgt"),Ss=Symbol.for("v-txt"),ke=Symbol.for("v-cmt"),Ur=Symbol.for("v-stc"),Zn=[];let Be=null;function q(t=!1){Zn.push(Be=t?null:[])}function kf(){Zn.pop(),Be=Zn[Zn.length-1]||null}let ur=1;function No(t,e=!1){ur+=t,t<0&&Be&&e&&(Be.hasOnce=!0)}function oc(t){return t.dynamicChildren=ur>0?Be||Cn:null,kf(),ur>0&&Be&&Be.push(t),t}function J(t,e,n,r,s,i){return oc(v(t,e,n,r,s,i,!0))}function Rf(t,e,n,r,s){return oc(z(t,e,n,r,s,!0))}function Qr(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const ac=({key:t})=>t??null,Fr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Ce(t)||W(t)?{i:De,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,r=0,s=null,i=t===we?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ac(e),ref:e&&Fr(e),scopeId:Nl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return l?(Wi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ye(n)?8:16),ur>0&&!o&&Be&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Be.push(a),a}const z=Pf;function Pf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qd)&&(t=ke),Qr(t)){const l=Yt(t,e,!0);return n&&Wi(l,n),ur>0&&!i&&Be&&(l.shapeFlag&6?Be[Be.indexOf(t)]=l:Be.push(l)),l.patchFlag=-2,l}if(Vf(t)&&(t=t.__vccOpts),e){e=Of(e);let{class:l,style:a}=e;l&&!ye(l)&&(e.class=ms(l)),de(a)&&(Ui(a)&&!F(a)&&(a=Ie({},a)),e.style=Pi(a))}const o=ye(t)?1:ic(t)?128:Dl(t)?64:de(t)?4:W(t)?2:0;return v(t,e,n,r,s,o,i,!0)}function Of(t){return t?Ui(t)||Gl(t)?Ie({},t):t:null}function Yt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:a}=t,c=e?Nf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ac(c),ref:e&&e.ref?n&&i?F(i)?i.concat(Fr(e)):[i,Fr(e)]:Fr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==we?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&lr(u,a.clone(u)),u}function X(t=" ",e=0){return z(Ss,null,t,e)}function Un(t,e){const n=z(Ur,null,t);return n.staticCount=e,n}function fn(t="",e=!1){return e?(q(),Rf(ke,null,t)):z(ke,null,t)}function lt(t){return t==null||typeof t=="boolean"?z(ke):F(t)?z(we,null,t.slice()):Qr(t)?Bt(t):z(Ss,null,String(t))}function Bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function Wi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gl(e)?e._ctx=De:s===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:De},n=32):(e=String(e),r&64?(n=16,e=[X(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ms([e.class,r.class]));else if(s==="style")e.style=Pi([e.style,r.style]);else if(ds(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ot(t,e,n,r=null){Ze(t,e,7,[n,r])}const Df=zl();let Mf=0;function Lf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Df,i={uid:Mf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yl(r,s),emitsOptions:sc(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ef.bind(null,i),t.ce&&t.ce(i),i}let Se=null;const $f=()=>Se||De;let Zr,fi;{const t=gs(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zr=e("__VUE_INSTANCE_SETTERS__",n=>Se=n),fi=e("__VUE_SSR_SETTERS__",n=>dr=n)}const Ir=t=>{const e=Se;return Zr(t),t.scope.on(),()=>{t.scope.off(),Zr(e)}},Do=()=>{Se&&Se.scope.off(),Zr(null)};function lc(t){return t.vnode.shapeFlag&4}let dr=!1;function Uf(t,e=!1,n=!1){e&&fi(e);const{props:r,children:s}=t.vnode,i=lc(t);cf(t,r,i,e),hf(t,s,n||e);const o=i?Ff(t,e):void 0;return e&&fi(!1),o}function Ff(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ef);const{setup:r}=n;if(r){kt();const s=t.setupContext=r.length>1?Bf(t):null,i=Ir(t),o=br(r,t,0,[t.props,s]),l=sl(o);if(Rt(),i(),(l||t.sp)&&!Xn(t)&&Hl(t),l){if(o.then(Do,Do),e)return o.then(a=>{Mo(t,a)}).catch(a=>{_s(a,t,0)});t.asyncDep=o}else Mo(t,o)}else cc(t)}function Mo(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Al(e)),cc(t)}function cc(t,e,n){const r=t.type;t.render||(t.render=r.render||dt);{const s=Ir(t);kt();try{tf(t)}finally{Rt(),s()}}}const Hf={get(t,e){return Te(t,"get",""),t[e]}};function Bf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hf),slots:t.slots,emit:t.emit,expose:e}}function Ts(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Al(Cd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qn)return Qn[n](t)},has(e,n){return n in e||n in Qn}})):t.proxy}function jf(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function Vf(t){return W(t)&&"__vccOpts"in t}const ze=(t,e)=>Pd(t,e,dr);function zi(t,e,n){const r=arguments.length;return r===2?de(e)&&!F(e)?Qr(e)?z(t,null,[e]):z(t,e):z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qr(n)&&(n=[n]),z(t,e,n))}const Wf="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hi;const Lo=typeof window<"u"&&window.trustedTypes;if(Lo)try{hi=Lo.createPolicy("vue",{createHTML:t=>t})}catch{}const uc=hi?t=>hi.createHTML(t):t=>t,zf="http://www.w3.org/2000/svg",Kf="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,$o=It&&It.createElement("template"),qf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?It.createElementNS(zf,t):e==="mathml"?It.createElementNS(Kf,t):n?It.createElement(t,{is:n}):It.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$o.innerHTML=uc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=$o.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Lt="transition",Vn="animation",fr=Symbol("_vtc"),dc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gf=Ie({},Ml,dc),Jf=t=>(t.displayName="Transition",t.props=Gf,t),fc=Jf((t,{slots:e})=>zi(Hd,Yf(t),e)),nn=(t,e=[])=>{F(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uo=t=>t?F(t)?t.some(e=>e.length>1):t.length>1:!1;function Yf(t){const e={};for(const D in t)D in dc||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,E=Xf(s),C=E&&E[0],H=E&&E[1],{onBeforeEnter:M,onEnter:R,onEnterCancelled:N,onLeave:P,onLeaveCancelled:K,onBeforeAppear:Q=M,onAppear:Z=R,onAppearCancelled:_e=N}=e,j=(D,te,be,Le)=>{D._enterCancelled=Le,rn(D,te?u:l),rn(D,te?c:o),be&&be()},Y=(D,te)=>{D._isLeaving=!1,rn(D,d),rn(D,g),rn(D,p),te&&te()},fe=D=>(te,be)=>{const Le=D?Z:R,ge=()=>j(te,D,be);nn(Le,[te,ge]),Fo(()=>{rn(te,D?a:i),bt(te,D?u:l),Uo(Le)||Ho(te,r,C,ge)})};return Ie(e,{onBeforeEnter(D){nn(M,[D]),bt(D,i),bt(D,o)},onBeforeAppear(D){nn(Q,[D]),bt(D,a),bt(D,c)},onEnter:fe(!1),onAppear:fe(!0),onLeave(D,te){D._isLeaving=!0;const be=()=>Y(D,te);bt(D,d),D._enterCancelled?(bt(D,p),Vo()):(Vo(),bt(D,p)),Fo(()=>{D._isLeaving&&(rn(D,d),bt(D,g),Uo(P)||Ho(D,r,H,be))}),nn(P,[D,be])},onEnterCancelled(D){j(D,!1,void 0,!0),nn(N,[D])},onAppearCancelled(D){j(D,!0,void 0,!0),nn(_e,[D])},onLeaveCancelled(D){Y(D),nn(K,[D])}})}function Xf(t){if(t==null)return null;if(de(t))return[Bs(t.enter),Bs(t.leave)];{const e=Bs(t);return[e,e]}}function Bs(t){return Xu(t)}function bt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fr]||(t[fr]=new Set)).add(e)}function rn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[fr];n&&(n.delete(e),n.size||(t[fr]=void 0))}function Fo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Qf=0;function Ho(t,e,n,r){const s=t._endId=++Qf,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=Zf(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,p),i()},p=g=>{g.target===t&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},l+1),t.addEventListener(c,p)}function Zf(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${Lt}Delay`),i=r(`${Lt}Duration`),o=Bo(s,i),l=r(`${Vn}Delay`),a=r(`${Vn}Duration`),c=Bo(l,a);let u=null,d=0,p=0;e===Lt?o>0&&(u=Lt,d=o,p=i.length):e===Vn?c>0&&(u=Vn,d=c,p=a.length):(d=Math.max(o,c),u=d>0?o>c?Lt:Vn:null,p=u?u===Lt?i.length:a.length:0);const g=u===Lt&&/\b(transform|all)(,|$)/.test(r(`${Lt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function Bo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>jo(n)+jo(t[r])))}function jo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vo(){return document.body.offsetHeight}function eh(t,e,n){const r=t[fr];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wo=Symbol("_vod"),th=Symbol("_vsh"),nh=Symbol(""),rh=/(^|;)\s*display\s*:/;function sh(t,e,n){const r=t.style,s=ye(n);let i=!1;if(n&&!s){if(e)if(ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Hr(r,l,"")}else for(const o in e)n[o]==null&&Hr(r,o,"");for(const o in n)o==="display"&&(i=!0),Hr(r,o,n[o])}else if(s){if(e!==n){const o=r[nh];o&&(n+=";"+o),r.cssText=n,i=rh.test(n)}}else e&&t.removeAttribute("style");Wo in t&&(t[Wo]=i?r.display:"",t[th]&&(r.display="none"))}const zo=/\s*!important$/;function Hr(t,e,n){if(F(n))n.forEach(r=>Hr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ih(t,e);zo.test(n)?t.setProperty(yn(r),n.replace(zo,""),"important"):t[r]=n}}const Ko=["Webkit","Moz","ms"],js={};function ih(t,e){const n=js[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return js[e]=r;r=ps(r);for(let s=0;s<Ko.length;s++){const i=Ko[s]+r;if(i in t)return js[e]=i}return e}const qo="http://www.w3.org/1999/xlink";function Go(t,e,n,r,s,i=rd(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qo,e.slice(6,e.length)):t.setAttributeNS(qo,e,n):n==null||i&&!ll(n)?t.removeAttribute(e):t.setAttribute(e,i?"":gt(n)?String(n):n)}function Jo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?uc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ll(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ln(t,e,n,r){t.addEventListener(e,n,r)}function oh(t,e,n,r){t.removeEventListener(e,n,r)}const Yo=Symbol("_vei");function ah(t,e,n,r,s=null){const i=t[Yo]||(t[Yo]={}),o=i[e];if(r&&o)o.value=r;else{const[l,a]=lh(e);if(r){const c=i[e]=dh(r,s);ln(t,l,c,a)}else o&&(oh(t,l,o,a),i[e]=void 0)}}const Xo=/(?:Once|Passive|Capture)$/;function lh(t){let e;if(Xo.test(t)){e={};let r;for(;r=t.match(Xo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yn(t.slice(2)),e]}let Vs=0;const ch=Promise.resolve(),uh=()=>Vs||(ch.then(()=>Vs=0),Vs=Date.now());function dh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ze(fh(r,n.value),e,5,[r])};return n.value=t,n.attached=uh(),n}function fh(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hh=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?eh(t,r,o):e==="style"?sh(t,n,r):ds(e)?Ai(e)||ah(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ph(t,e,r,o))?(Jo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Go(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(r))?Jo(t,Ge(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Go(t,e,r,o))};function ph(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qo(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qo(e)&&ye(n)?!1:e in t}const es=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Mr(e,n):e};function gh(t){t.target.composing=!0}function Zo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pn=Symbol("_assign"),Tt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Pn]=es(s);const i=r||s.props&&s.props.type==="number";ln(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=zr(l)),t[Pn](l)}),n&&ln(t,"change",()=>{t.value=t.value.trim()}),e||(ln(t,"compositionstart",gh),ln(t,"compositionend",Zo),ln(t,"change",Zo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Pn]=es(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?zr(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},mh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=fs(e);ln(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?zr(ts(o)):ts(o));t[Pn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Fi(()=>{t._assigning=!1})}),t[Pn]=es(r)},mounted(t,{value:e}){ea(t,e)},beforeUpdate(t,e,n){t[Pn]=es(n)},updated(t,{value:e}){t._assigning||ea(t,e)}};function ea(t,e){const n=t.multiple,r=F(e);if(!(n&&!r&&!fs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ts(o);if(n)if(r){const a=typeof l;a==="string"||a==="number"?o.selected=e.some(c=>String(c)===String(l)):o.selected=id(e,l)>-1}else o.selected=e.has(l);else if(vs(ts(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ts(t){return"_value"in t?t._value:t.value}const vh=["ctrl","shift","alt","meta"],yh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vh.some(n=>t[`${n}Key`]&&!e.includes(n))},Ki=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=yh[e[o]];if(l&&l(s,e))return}return t(s,...i)})},_h=Ie({patchProp:hh},qf);let ta;function bh(){return ta||(ta=gf(_h))}const wh=(...t)=>{const e=bh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Eh(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ih(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ih(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Eh(t){return ye(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof document<"u";function hc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hc(t.default)}const re=Object.assign;function Ws(t,e){const n={};for(const r in e){const s=e[r];n[r]=et(s)?s.map(t):t(s)}return n}const er=()=>{},et=Array.isArray,pc=/#/g,Th=/&/g,Ch=/\//g,xh=/=/g,Ah=/\?/g,gc=/\+/g,kh=/%5B/g,Rh=/%5D/g,mc=/%5E/g,Ph=/%60/g,vc=/%7B/g,Oh=/%7C/g,yc=/%7D/g,Nh=/%20/g;function qi(t){return encodeURI(""+t).replace(Oh,"|").replace(kh,"[").replace(Rh,"]")}function Dh(t){return qi(t).replace(vc,"{").replace(yc,"}").replace(mc,"^")}function pi(t){return qi(t).replace(gc,"%2B").replace(Nh,"+").replace(pc,"%23").replace(Th,"%26").replace(Ph,"`").replace(vc,"{").replace(yc,"}").replace(mc,"^")}function Mh(t){return pi(t).replace(xh,"%3D")}function Lh(t){return qi(t).replace(pc,"%23").replace(Ah,"%3F")}function $h(t){return t==null?"":Lh(t).replace(Ch,"%2F")}function hr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Uh=/\/$/,Fh=t=>t.replace(Uh,"");function zs(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Vh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:hr(o)}}function Hh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function na(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Mn(e.matched[r],n.matched[s])&&_c(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _c(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jh(t[n],e[n]))return!1;return!0}function jh(t,e){return et(t)?ra(t,e):et(e)?ra(e,t):t===e}function ra(t,e){return et(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Vh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var pr;(function(t){t.pop="pop",t.push="push"})(pr||(pr={}));var tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(tr||(tr={}));function Wh(t){if(!t)if(Tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fh(t)}const zh=/^[^#]+#/;function Kh(t,e){return t.replace(zh,"#")+e}function qh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Cs=()=>({left:window.scrollX,top:window.scrollY});function Gh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sa(t,e){return(history.state?history.state.position-e:-1)+t}const gi=new Map;function Jh(t,e){gi.set(t,e)}function Yh(t){const e=gi.get(t);return gi.delete(t),e}let Xh=()=>location.protocol+"//"+location.host;function bc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),na(a,"")}return na(n,t)+r+s}function Qh(t,e,n,r){let s=[],i=[],o=null;const l=({state:p})=>{const g=bc(t,location),E=n.value,C=e.value;let H=0;if(p){if(n.value=g,e.value=p,o&&o===E){o=null;return}H=C?p.position-C.position:0}else r(g);s.forEach(M=>{M(n.value,E,{delta:H,type:pr.pop,direction:H?H>0?tr.forward:tr.back:tr.unknown})})};function a(){o=n.value}function c(p){s.push(p);const g=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:Cs()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function ia(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Cs():null}}function Zh(t){const{history:e,location:n}=window,r={value:bc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:Xh()+t+a;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(a,c){const u=re({},e.state,ia(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});i(a,u,!0),r.value=a}function l(a,c){const u=re({},s.value,e.state,{forward:a,scroll:Cs()});i(u.current,u,!0);const d=re({},ia(r.value,a,null),{position:u.position+1},c);i(a,d,!1),r.value=a}return{location:r,state:s,push:l,replace:o}}function ep(t){t=Wh(t);const e=Zh(t),n=Qh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:Kh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function tp(t){return typeof t=="string"||t&&typeof t=="object"}function wc(t){return typeof t=="string"||typeof t=="symbol"}const Ic=Symbol("");var oa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oa||(oa={}));function Ln(t,e){return re(new Error,{type:t,[Ic]:!0},e)}function wt(t,e){return t instanceof Error&&Ic in t&&(e==null||!!(t.type&e))}const aa="[^/]+?",np={sensitive:!1,strict:!1,start:!0,end:!0},rp=/[.+*?^${}()[\]/\\]/g;function sp(t,e){const n=re({},np,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(rp,"\\$&"),g+=40;else if(p.type===1){const{value:E,repeatable:C,optional:H,regexp:M}=p;i.push({name:E,repeatable:C,optional:H});const R=M||aa;if(R!==aa){g+=10;try{new RegExp(`(${R})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${E}" (${R}): `+P.message)}}let N=C?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(N=H&&c.length<2?`(?:/${N})`:"/"+N),H&&(N+="?"),s+=N,g+=20,H&&(g+=-8),C&&(g+=-20),R===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",E=i[p-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function a(c){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:C,optional:H}=g,M=E in c?c[E]:"";if(et(M)&&!C)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const R=et(M)?M.join("/"):M;if(!R)if(H)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:l,stringify:a}}function ip(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ec(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ip(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(la(r))return 1;if(la(s))return-1}return s.length-r.length}function la(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const op={type:0,value:""},ap=/[a-zA-Z0-9_]/;function lp(t){if(!t)return[[]];if(t==="/")return[[op]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,a,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:ap.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function cp(t,e,n){const r=sp(lp(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function up(t,e){const n=[],r=new Map;e=fa({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const E=!g,C=ua(d);C.aliasOf=g&&g.record;const H=fa(e,d),M=[C];if("alias"in d){const P=typeof d.alias=="string"?[d.alias]:d.alias;for(const K of P)M.push(ua(re({},C,{components:g?g.record.components:C.components,path:K,aliasOf:g?g.record:C})))}let R,N;for(const P of M){const{path:K}=P;if(p&&K[0]!=="/"){const Q=p.record.path,Z=Q[Q.length-1]==="/"?"":"/";P.path=p.record.path+(K&&Z+K)}if(R=cp(P,p,H),g?g.alias.push(R):(N=N||R,N!==R&&N.alias.push(R),E&&d.name&&!da(R)&&o(d.name)),Sc(R)&&a(R),C.children){const Q=C.children;for(let Z=0;Z<Q.length;Z++)i(Q[Z],R,g&&g.children[Z])}g=g||R}return N?()=>{o(N)}:er}function o(d){if(wc(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function a(d){const p=hp(d,n);n.splice(p,0,d),d.record.name&&!da(d)&&r.set(d.record.name,d)}function c(d,p){let g,E={},C,H;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Ln(1,{location:d});H=g.record.name,E=re(ca(p.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&ca(d.params,g.keys.map(N=>N.name))),C=g.stringify(E)}else if(d.path!=null)C=d.path,g=n.find(N=>N.re.test(C)),g&&(E=g.parse(C),H=g.record.name);else{if(g=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!g)throw Ln(1,{location:d,currentLocation:p});H=g.record.name,E=re({},p.params,d.params),C=g.stringify(E)}const M=[];let R=g;for(;R;)M.unshift(R.record),R=R.parent;return{name:H,path:C,params:E,matched:M,meta:fp(M)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:s}}function ca(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ua(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:dp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function dp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function da(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fp(t){return t.reduce((e,n)=>re(e,n.meta),{})}function fa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hp(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ec(t,e[i])<0?r=i:n=i+1}const s=pp(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function pp(t){let e=t;for(;e=e.parent;)if(Sc(e)&&Ec(t,e)===0)return e}function Sc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function gp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gc," "),o=i.indexOf("="),l=hr(o<0?i:i.slice(0,o)),a=o<0?null:hr(i.slice(o+1));if(l in e){let c=e[l];et(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function ha(t){let e="";for(let n in t){const r=t[n];if(n=Mh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(et(r)?r.map(i=>i&&pi(i)):[r&&pi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=et(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vp=Symbol(""),pa=Symbol(""),xs=Symbol(""),Tc=Symbol(""),mi=Symbol("");function Wn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const c=p=>{p===!1?a(Ln(4,{from:n,to:e})):p instanceof Error?a(p):tp(p)?a(Ln(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),l())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(p=>a(p))})}function Ks(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(hc(a)){const u=(a.__vccOpts||a)[e];u&&i.push(jt(u,n,r,o,l,s))}else{let c=a();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Sh(u)?u.default:u;o.mods[l]=u,o.components[l]=d;const g=(d.__vccOpts||d)[e];return g&&jt(g,n,r,o,l,s)()}))}}return i}function ga(t){const e=ft(xs),n=ft(Tc),r=ze(()=>{const a=He(t.to);return e.resolve(a)}),s=ze(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Mn.bind(null,u));if(p>-1)return p;const g=ma(a[c-2]);return c>1&&ma(u)===g&&d[d.length-1].path!==g?d.findIndex(Mn.bind(null,a[c-2])):p}),i=ze(()=>s.value>-1&&Ip(n.params,r.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&_c(n.params,r.value.params));function l(a={}){if(wp(a)){const c=e[He(t.replace)?"replace":"push"](He(t.to)).catch(er);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function yp(t){return t.length===1?t[0]:t}const _p=bs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ga,setup(t,{slots:e}){const n=_r(ga(t)),{options:r}=ft(xs),s=ze(()=>({[va(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[va(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&yp(e.default(n));return t.custom?i:zi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bp=_p;function wp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ip(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!et(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ma(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const va=(t,e,n)=>t??e??n,Ep=bs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ft(mi),s=ze(()=>t.route||r.value),i=ft(pa,0),o=ze(()=>{let c=He(i);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=ze(()=>s.value.matched[o.value]);Lr(pa,ze(()=>o.value+1)),Lr(vp,l),Lr(mi,s);const a=ve();return $r(()=>[a.value,l.value,t.name],([c,u,d],[p,g,E])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Mn(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=l.value,p=d&&d.components[u];if(!p)return ya(n.default,{Component:p,route:c});const g=d.props[u],E=g?g===!0?c.params:typeof g=="function"?g(c):g:null,H=zi(p,re({},E,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return ya(n.default,{Component:H,route:c})||H}}});function ya(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sp=Ep;function Tp(t){const e=up(t.routes,t),n=t.parseQuery||gp,r=t.stringifyQuery||ha,s=t.history,i=Wn(),o=Wn(),l=Wn(),a=xd($t);let c=$t;Tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ws.bind(null,_=>""+_),d=Ws.bind(null,$h),p=Ws.bind(null,hr);function g(_,O){let A,L;return wc(_)?(A=e.getRecordMatcher(_),L=O):L=_,e.addRoute(L,A)}function E(_){const O=e.getRecordMatcher(_);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(_=>_.record)}function H(_){return!!e.getRecordMatcher(_)}function M(_,O){if(O=re({},O||a.value),typeof _=="string"){const m=zs(n,_,O.path),y=e.resolve({path:m.path},O),w=s.createHref(m.fullPath);return re(m,y,{params:p(y.params),hash:hr(m.hash),redirectedFrom:void 0,href:w})}let A;if(_.path!=null)A=re({},_,{path:zs(n,_.path,O.path).path});else{const m=re({},_.params);for(const y in m)m[y]==null&&delete m[y];A=re({},_,{params:d(m)}),O.params=d(O.params)}const L=e.resolve(A,O),ae=_.hash||"";L.params=u(p(L.params));const f=Hh(r,re({},_,{hash:Dh(ae),path:L.path})),h=s.createHref(f);return re({fullPath:f,hash:ae,query:r===ha?mp(_.query):_.query||{}},L,{redirectedFrom:void 0,href:h})}function R(_){return typeof _=="string"?zs(n,_,a.value.path):re({},_)}function N(_,O){if(c!==_)return Ln(8,{from:O,to:_})}function P(_){return Z(_)}function K(_){return P(re(R(_),{replace:!0}))}function Q(_){const O=_.matched[_.matched.length-1];if(O&&O.redirect){const{redirect:A}=O;let L=typeof A=="function"?A(_):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=R(L):{path:L},L.params={}),re({query:_.query,hash:_.hash,params:L.path!=null?{}:_.params},L)}}function Z(_,O){const A=c=M(_),L=a.value,ae=_.state,f=_.force,h=_.replace===!0,m=Q(A);if(m)return Z(re(R(m),{state:typeof m=="object"?re({},ae,m.state):ae,force:f,replace:h}),O||A);const y=A;y.redirectedFrom=O;let w;return!f&&Bh(r,L,A)&&(w=Ln(16,{to:y,from:L}),nt(L,L,!0,!1)),(w?Promise.resolve(w):Y(y,L)).catch(b=>wt(b)?wt(b,2)?b:Mt(b):ne(b,y,L)).then(b=>{if(b){if(wt(b,2))return Z(re({replace:h},R(b.to),{state:typeof b.to=="object"?re({},ae,b.to.state):ae,force:f}),O||y)}else b=D(y,L,!0,h,ae);return fe(y,L,b),b})}function _e(_,O){const A=N(_,O);return A?Promise.reject(A):Promise.resolve()}function j(_){const O=In.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(_):_()}function Y(_,O){let A;const[L,ae,f]=Cp(_,O);A=Ks(L.reverse(),"beforeRouteLeave",_,O);for(const m of L)m.leaveGuards.forEach(y=>{A.push(jt(y,_,O))});const h=_e.bind(null,_,O);return A.push(h),Ve(A).then(()=>{A=[];for(const m of i.list())A.push(jt(m,_,O));return A.push(h),Ve(A)}).then(()=>{A=Ks(ae,"beforeRouteUpdate",_,O);for(const m of ae)m.updateGuards.forEach(y=>{A.push(jt(y,_,O))});return A.push(h),Ve(A)}).then(()=>{A=[];for(const m of f)if(m.beforeEnter)if(et(m.beforeEnter))for(const y of m.beforeEnter)A.push(jt(y,_,O));else A.push(jt(m.beforeEnter,_,O));return A.push(h),Ve(A)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),A=Ks(f,"beforeRouteEnter",_,O,j),A.push(h),Ve(A))).then(()=>{A=[];for(const m of o.list())A.push(jt(m,_,O));return A.push(h),Ve(A)}).catch(m=>wt(m,8)?m:Promise.reject(m))}function fe(_,O,A){l.list().forEach(L=>j(()=>L(_,O,A)))}function D(_,O,A,L,ae){const f=N(_,O);if(f)return f;const h=O===$t,m=Tn?history.state:{};A&&(L||h?s.replace(_.fullPath,re({scroll:h&&m&&m.scroll},ae)):s.push(_.fullPath,ae)),a.value=_,nt(_,O,A,h),Mt()}let te;function be(){te||(te=s.listen((_,O,A)=>{if(!kr.listening)return;const L=M(_),ae=Q(L);if(ae){Z(re(ae,{replace:!0,force:!0}),L).catch(er);return}c=L;const f=a.value;Tn&&Jh(sa(f.fullPath,A.delta),Cs()),Y(L,f).catch(h=>wt(h,12)?h:wt(h,2)?(Z(re(R(h.to),{force:!0}),L).then(m=>{wt(m,20)&&!A.delta&&A.type===pr.pop&&s.go(-1,!1)}).catch(er),Promise.reject()):(A.delta&&s.go(-A.delta,!1),ne(h,L,f))).then(h=>{h=h||D(L,f,!1),h&&(A.delta&&!wt(h,8)?s.go(-A.delta,!1):A.type===pr.pop&&wt(h,20)&&s.go(-1,!1)),fe(L,f,h)}).catch(er)}))}let Le=Wn(),ge=Wn(),oe;function ne(_,O,A){Mt(_);const L=ge.list();return L.length?L.forEach(ae=>ae(_,O,A)):console.error(_),Promise.reject(_)}function yt(){return oe&&a.value!==$t?Promise.resolve():new Promise((_,O)=>{Le.add([_,O])})}function Mt(_){return oe||(oe=!_,be(),Le.list().forEach(([O,A])=>_?A(_):O()),Le.reset()),_}function nt(_,O,A,L){const{scrollBehavior:ae}=t;if(!Tn||!ae)return Promise.resolve();const f=!A&&Yh(sa(_.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Fi().then(()=>ae(_,O,f)).then(h=>h&&Gh(h)).catch(h=>ne(h,_,O))}const Pe=_=>s.go(_);let wn;const In=new Set,kr={currentRoute:a,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:C,resolve:M,options:t,push:P,replace:K,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ge.add,isReady:yt,install(_){const O=this;_.component("RouterLink",bp),_.component("RouterView",Sp),_.config.globalProperties.$router=O,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>He(a)}),Tn&&!wn&&a.value===$t&&(wn=!0,P(s.location).catch(ae=>{}));const A={};for(const ae in $t)Object.defineProperty(A,ae,{get:()=>a.value[ae],enumerable:!0});_.provide(xs,O),_.provide(Tc,Tl(A)),_.provide(mi,a);const L=_.unmount;In.add(_),_.unmount=function(){In.delete(_),In.size<1&&(c=$t,te&&te(),te=null,a.value=$t,wn=!1,oe=!1),L()}}};function Ve(_){return _.reduce((O,A)=>O.then(()=>j(A)),Promise.resolve())}return kr}function Cp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(c=>Mn(c,l))?r.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Mn(c,a))||s.push(a))}return[n,r,s]}function Gi(){return ft(xs)}const xp=()=>{};var _a={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ap=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=i>>2,d=(i&3)<<4|l>>4;let p=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(p=64)),r.push(n[u],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ap(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||d==null)throw new kp;const p=i<<2|l>>4;if(r.push(p),c!==64){const g=l<<4&240|c>>2;if(r.push(g),d!==64){const E=c<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rp=function(t){const e=Cc(t);return xc.encodeByteArray(e,!0)},Ac=function(t){return Rp(t).replace(/\./g,"")},kc=function(t){try{return xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=()=>Pp().__FIREBASE_DEFAULTS__,Np=()=>{if(typeof process>"u"||typeof _a>"u")return;const t=_a.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kc(t[1]);return e&&JSON.parse(e)},Ji=()=>{try{return xp()||Op()||Np()||Dp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mp=t=>{var e,n;return(n=(e=Ji())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rc=()=>{var t;return(t=Ji())===null||t===void 0?void 0:t.config},Pc=t=>{var e;return(e=Ji())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){return t.endsWith(".cloudworkstations.dev")}async function $p(t){return(await fetch(t,{credentials:"include"})).ok}const nr={};function Up(){const t={prod:[],emulator:[]};for(const e of Object.keys(nr))nr[e]?t.emulator.push(e):t.prod.push(e);return t}function Fp(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ba=!1;function Hp(t,e){if(typeof window>"u"||typeof document>"u"||!Yi(window.location.host)||nr[t]===e||nr[t]||ba)return;nr[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=Up().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function a(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{ba=!0,o()},p}function u(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=Fp(r),g=n("text"),E=document.getElementById(g)||document.createElement("span"),C=n("learnmore"),H=document.getElementById(C)||document.createElement("a"),M=n("preprendIcon"),R=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const N=p.element;l(N),u(H,C);const P=c();a(R,M),N.append(R,E,H,P),document.body.appendChild(N)}i?(E.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function jp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Oc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wp(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nc(){try{return typeof indexedDB=="object"}catch{return!1}}function Dc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function zp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="FirebaseError";class vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kp,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qp(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new vt(s,l,r)}}function qp(t,e){return t.replace(Gp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gp=/\{\$([^}]+)}/g;function Jp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wa(i)&&wa(o)){if(!hn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yp(t,e){const n=new Xp(t,e);return n.subscribe.bind(n)}class Xp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qs),s.error===void 0&&(s.error=qs),s.complete===void 0&&(s.complete=qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=1e3,eg=2,tg=4*60*60*1e3,ng=.5;function Ia(t,e=Zp,n=eg){const r=e*Math.pow(n,t),s=Math.round(ng*r*(Math.random()-.5)*2);return Math.min(tg,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ig(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sg(t){return t===on?void 0:t}function ig(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const ag={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},lg=ce.INFO,cg={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},ug=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xi{constructor(e){this.name=e,this._logLevel=lg,this._logHandler=ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ag[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const dg=(t,e)=>e.some(n=>t instanceof n);let Ea,Sa;function fg(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hg(){return Sa||(Sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mc=new WeakMap,vi=new WeakMap,Lc=new WeakMap,Gs=new WeakMap,Qi=new WeakMap;function pg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mc.set(n,t)}).catch(()=>{}),Qi.set(e,t),e}function gg(t){if(vi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vi.set(t,e)}let yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mg(t){yi=t(yi)}function vg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Js(this),e,...n);return Lc.set(r,e.sort?e.sort():[e]),qt(r)}:hg().includes(t)?function(...e){return t.apply(Js(this),e),qt(Mc.get(this))}:function(...e){return qt(t.apply(Js(this),e))}}function yg(t){return typeof t=="function"?vg(t):(t instanceof IDBTransaction&&gg(t),dg(t,fg())?new Proxy(t,yi):t)}function qt(t){if(t instanceof IDBRequest)return pg(t);if(Gs.has(t))return Gs.get(t);const e=yg(t);return e!==t&&(Gs.set(t,e),Qi.set(e,t)),e}const Js=t=>Qi.get(t);function $c(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=qt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(qt(o.result),a.oldVersion,a.newVersion,qt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _g=["get","getKey","getAll","getAllKeys","count"],bg=["put","add","delete","clear"],Ys=new Map;function Ta(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ys.get(e))return Ys.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_g.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Ys.set(e,i),i}mg(t=>({...t,get:(e,n,r)=>Ta(e,n)||t.get(e,n,r),has:(e,n)=>!!Ta(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ig(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ig(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _i="@firebase/app",Ca="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Xi("@firebase/app"),Eg="@firebase/app-compat",Sg="@firebase/analytics-compat",Tg="@firebase/analytics",Cg="@firebase/app-check-compat",xg="@firebase/app-check",Ag="@firebase/auth",kg="@firebase/auth-compat",Rg="@firebase/database",Pg="@firebase/data-connect",Og="@firebase/database-compat",Ng="@firebase/functions",Dg="@firebase/functions-compat",Mg="@firebase/installations",Lg="@firebase/installations-compat",$g="@firebase/messaging",Ug="@firebase/messaging-compat",Fg="@firebase/performance",Hg="@firebase/performance-compat",Bg="@firebase/remote-config",jg="@firebase/remote-config-compat",Vg="@firebase/storage",Wg="@firebase/storage-compat",zg="@firebase/firestore",Kg="@firebase/ai",qg="@firebase/firestore-compat",Gg="firebase",Jg="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="[DEFAULT]",Yg={[_i]:"fire-core",[Eg]:"fire-core-compat",[Tg]:"fire-analytics",[Sg]:"fire-analytics-compat",[xg]:"fire-app-check",[Cg]:"fire-app-check-compat",[Ag]:"fire-auth",[kg]:"fire-auth-compat",[Rg]:"fire-rtdb",[Pg]:"fire-data-connect",[Og]:"fire-rtdb-compat",[Ng]:"fire-fn",[Dg]:"fire-fn-compat",[Mg]:"fire-iid",[Lg]:"fire-iid-compat",[$g]:"fire-fcm",[Ug]:"fire-fcm-compat",[Fg]:"fire-perf",[Hg]:"fire-perf-compat",[Bg]:"fire-rc",[jg]:"fire-rc-compat",[Vg]:"fire-gcs",[Wg]:"fire-gcs-compat",[zg]:"fire-fst",[qg]:"fire-fst-compat",[Kg]:"fire-vertex","fire-js":"fire-js",[Gg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map,Xg=new Map,wi=new Map;function xa(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(wi.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;wi.set(e,t);for(const n of ns.values())xa(n,t);for(const n of Xg.values())xa(n,t);return!0}function Fn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ke(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new bn("app","Firebase",Qg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=Jg;function Uc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bi,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Gt.create("bad-app-name",{appName:String(s)});if(n||(n=Rc()),!n)throw Gt.create("no-options");const i=ns.get(s);if(i){if(hn(n,i.options)&&hn(r,i.config))return i;throw Gt.create("duplicate-app",{appName:s})}const o=new og(s);for(const a of wi.values())o.addComponent(a);const l=new Zg(n,r,o);return ns.set(s,l),l}function Fc(t=bi){const e=ns.get(t);if(!e&&t===bi&&Rc())return Uc();if(!e)throw Gt.create("no-app",{appName:t});return e}function ht(t,e,n){var r;let s=(r=Yg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(l.join(" "));return}Ot(new mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="firebase-heartbeat-database",tm=1,gr="firebase-heartbeat-store";let Xs=null;function Hc(){return Xs||(Xs=$c(em,tm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Xs}async function nm(t){try{const n=(await Hc()).transaction(gr),r=await n.objectStore(gr).get(Bc(t));return await n.done,r}catch(e){if(e instanceof vt)Pt.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(n.message)}}}async function Aa(t,e){try{const r=(await Hc()).transaction(gr,"readwrite");await r.objectStore(gr).put(e,Bc(t)),await r.done}catch(n){if(n instanceof vt)Pt.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pt.warn(r.message)}}}function Bc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=1024,sm=30;class im{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new am(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ka();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sm){const o=lm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ka(),{heartbeatsToSend:r,unsentEntries:s}=om(this._heartbeatsCache.heartbeats),i=Ac(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pt.warn(n),""}}}function ka(){return new Date().toISOString().substring(0,10)}function om(t,e=rm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ra(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ra(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nc()?Dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ra(t){return Ac(JSON.stringify({version:2,heartbeats:t})).length}function lm(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){Ot(new mt("platform-logger",e=>new wg(e),"PRIVATE")),Ot(new mt("heartbeat",e=>new im(e),"PRIVATE")),ht(_i,Ca,t),ht(_i,Ca,"esm2017"),ht("fire-js","")}cm("");var um="firebase",dm="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht(um,dm,"app");const jc="@firebase/installations",Zi="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=1e4,Wc=`w:${Zi}`,zc="FIS_v2",fm="https://firebaseinstallations.googleapis.com/v1",hm=60*60*1e3,pm="installations",gm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pn=new bn(pm,gm,mm);function Kc(t){return t instanceof vt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc({projectId:t}){return`${fm}/projects/${t}/installations`}function Gc(t){return{token:t.token,requestStatus:2,expiresIn:ym(t.expiresIn),creationTime:Date.now()}}async function Jc(t,e){const r=(await e.json()).error;return pn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vm(t,{refreshToken:e}){const n=Yc(t);return n.append("Authorization",_m(e)),n}async function Xc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ym(t){return Number(t.replace("s","000"))}function _m(t){return`${zc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qc(t),s=Yc(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:zc,appId:t.appId,sdkVersion:Wc},l={method:"POST",headers:s,body:JSON.stringify(o)},a=await Xc(()=>fetch(r,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Gc(c.authToken)}}else throw await Jc("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=/^[cdef][\w-]{21}$/,Ii="";function Em(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Sm(t);return Im.test(n)?n:Ii}catch{return Ii}}function Sm(t){return wm(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Map;function eu(t,e){const n=As(t);tu(n,e),Tm(n,e)}function tu(t,e){const n=Zc.get(t);if(n)for(const r of n)r(e)}function Tm(t,e){const n=Cm();n&&n.postMessage({key:t,fid:e}),xm()}let cn=null;function Cm(){return!cn&&"BroadcastChannel"in self&&(cn=new BroadcastChannel("[Firebase] FID Change"),cn.onmessage=t=>{tu(t.data.key,t.data.fid)}),cn}function xm(){Zc.size===0&&cn&&(cn.close(),cn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="firebase-installations-database",km=1,gn="firebase-installations-store";let Qs=null;function eo(){return Qs||(Qs=$c(Am,km,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gn)}}})),Qs}async function rs(t,e){const n=As(t),s=(await eo()).transaction(gn,"readwrite"),i=s.objectStore(gn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&eu(t,e.fid),e}async function nu(t){const e=As(t),r=(await eo()).transaction(gn,"readwrite");await r.objectStore(gn).delete(e),await r.done}async function ks(t,e){const n=As(t),s=(await eo()).transaction(gn,"readwrite"),i=s.objectStore(gn),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&eu(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t){let e;const n=await ks(t.appConfig,r=>{const s=Rm(r),i=Pm(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ii?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Rm(t){const e=t||{fid:Em(),registrationStatus:0};return ru(e)}function Pm(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(pn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Om(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Nm(t)}:{installationEntry:e}}async function Om(t,e){try{const n=await bm(t,e);return rs(t.appConfig,n)}catch(n){throw Kc(n)&&n.customData.serverCode===409?await nu(t.appConfig):await rs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Nm(t){let e=await Pa(t.appConfig);for(;e.registrationStatus===1;)await Qc(100),e=await Pa(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await to(t);return r||n}return e}function Pa(t){return ks(t,e=>{if(!e)throw pn.create("installation-not-found");return ru(e)})}function ru(t){return Dm(t)?{fid:t.fid,registrationStatus:0}:t}function Dm(t){return t.registrationStatus===1&&t.registrationTime+Vc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm({appConfig:t,heartbeatServiceProvider:e},n){const r=Lm(t,n),s=vm(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Wc,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},a=await Xc(()=>fetch(r,l));if(a.ok){const c=await a.json();return Gc(c)}else throw await Jc("Generate Auth Token",a)}function Lm(t,{fid:e}){return`${qc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e=!1){let n;const r=await ks(t.appConfig,i=>{if(!su(i))throw pn.create("not-registered");const o=i.authToken;if(!e&&Fm(o))return i;if(o.requestStatus===1)return n=$m(t,e),i;{if(!navigator.onLine)throw pn.create("app-offline");const l=Bm(i);return n=Um(t,l),l}});return n?await n:r.authToken}async function $m(t,e){let n=await Oa(t.appConfig);for(;n.authToken.requestStatus===1;)await Qc(100),n=await Oa(t.appConfig);const r=n.authToken;return r.requestStatus===0?no(t,e):r}function Oa(t){return ks(t,e=>{if(!su(e))throw pn.create("not-registered");const n=e.authToken;return jm(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Um(t,e){try{const n=await Mm(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await rs(t.appConfig,r),n}catch(n){if(Kc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nu(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rs(t.appConfig,r)}throw n}}function su(t){return t!==void 0&&t.registrationStatus===2}function Fm(t){return t.requestStatus===2&&!Hm(t)}function Hm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hm}function Bm(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function jm(t){return t.requestStatus===1&&t.requestTime+Vc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t){const e=t,{installationEntry:n,registrationPromise:r}=await to(e);return r?r.catch(console.error):no(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e=!1){const n=t;return await zm(n),(await no(n,e)).token}async function zm(t){const{registrationPromise:e}=await to(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){if(!t||!t.options)throw Zs("App Configuration");if(!t.name)throw Zs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zs(t){return pn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="installations",qm="installations-internal",Gm=t=>{const e=t.getProvider("app").getImmediate(),n=Km(e),r=Fn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Jm=t=>{const e=t.getProvider("app").getImmediate(),n=Fn(e,iu).getImmediate();return{getId:()=>Vm(n),getToken:s=>Wm(n,s)}};function Ym(){Ot(new mt(iu,Gm,"PUBLIC")),Ot(new mt(qm,Jm,"PRIVATE"))}Ym();ht(jc,Zi);ht(jc,Zi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="analytics",Xm="firebase_id",Qm="origin",Zm=60*1e3,ev="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ro="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new Xi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},je=new bn("analytics","Analytics",tv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){if(!t.startsWith(ro)){const e=je.create("invalid-gtag-resource",{gtagURL:t});return Me.warn(e.message),""}return t}function ou(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function rv(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sv(t,e){const n=rv("firebase-js-sdk-policy",{createScriptURL:nv}),r=document.createElement("script"),s=`${ro}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function iv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ov(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const a=(await ou(n)).find(c=>c.measurementId===s);a&&await e[a.appId]}}catch(l){Me.error(l)}t("config",s,i)}async function av(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await ou(n);for(const a of o){const c=l.find(d=>d.measurementId===a),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Me.error(i)}}function lv(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,a]=o;await av(t,e,n,l,a)}else if(i==="config"){const[l,a]=o;await ov(t,e,n,r,l,a)}else if(i==="consent"){const[l,a]=o;t("consent",l,a)}else if(i==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Me.error(l)}}return s}function cv(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=lv(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function uv(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ro)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=30,fv=1e3;class hv{constructor(e={},n=fv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const au=new hv;function pv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gv(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:pv(r)},i=ev.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function mv(t,e=au,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw je.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw je.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new _v;return setTimeout(async()=>{l.abort()},Zm),lu({appId:r,apiKey:s,measurementId:i},o,l,e)}async function lu(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=au){var i;const{appId:o,measurementId:l}=t;try{await vv(r,e)}catch(a){if(l)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await gv(t);return s.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!yv(c)){if(s.deleteThrottleMetadata(o),l)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ia(n,s.intervalMillis,dv):Ia(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),Me.debug(`Calling attemptFetch again in ${u} millis`),lu(t,d,r,s)}}function vv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yv(t){if(!(t instanceof vt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _v{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(){if(Nc())try{await Dc()}catch(t){return Me.warn(je.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Me.warn(je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Iv(t,e,n,r,s,i,o){var l;const a=mv(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Me.error(g)),e.push(a);const c=wv().then(g=>{if(g)return r.getId()}),[u,d]=await Promise.all([a,c]);uv(i)||sv(i,u.measurementId),s("js",new Date);const p=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return p[Qm]="firebase",p.update=!0,d!=null&&(p[Xm]=d),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.app=e}_delete(){return delete rr[this.app.options.appId],Promise.resolve()}}let rr={},Na=[];const Da={};let ei="dataLayer",Sv="gtag",Ma,cu,La=!1;function Tv(){const t=[];if(Oc()&&t.push("This is a browser extension environment."),zp()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=je.create("invalid-analytics-context",{errorInfo:e});Me.warn(n.message)}}function Cv(t,e,n){Tv();const r=t.options.appId;if(!r)throw je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw je.create("no-api-key");if(rr[r]!=null)throw je.create("already-exists",{id:r});if(!La){iv(ei);const{wrappedGtag:i,gtagCore:o}=cv(rr,Na,Da,ei,Sv);cu=i,Ma=o,La=!0}return rr[r]=Iv(t,Na,Da,e,Ma,ei,n),new Ev(t)}function xv(t=Fc()){t=tt(t);const e=Fn(t,ss);return e.isInitialized()?e.getImmediate():Av(t)}function Av(t,e={}){const n=Fn(t,ss);if(n.isInitialized()){const s=n.getImmediate();if(hn(e,n.getOptions()))return s;throw je.create("already-initialized")}return n.initialize({options:e})}function kv(t,e,n,r){t=tt(t),bv(cu,rr[t.app.options.appId],e,n,r).catch(s=>Me.error(s))}const $a="@firebase/analytics",Ua="0.10.16";function Rv(){Ot(new mt(ss,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Cv(r,s,n)},"PUBLIC")),Ot(new mt("analytics-internal",t,"PRIVATE")),ht($a,Ua),ht($a,Ua,"esm2017");function t(e){try{const n=e.getProvider(ss).getImmediate();return{logEvent:(r,s,i)=>kv(n,r,s,i)}}catch(n){throw je.create("interop-component-reg-failed",{reason:n})}}}Rv();function so(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function uu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pv=uu,du=new bn("auth","Firebase",uu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Xi("@firebase/auth");function Ov(t,...e){is.logLevel<=ce.WARN&&is.warn(`Auth (${Sr}): ${t}`,...e)}function Br(t,...e){is.logLevel<=ce.ERROR&&is.error(`Auth (${Sr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,...e){throw oo(t,...e)}function Qe(t,...e){return oo(t,...e)}function io(t,e,n){const r=Object.assign(Object.assign({},Pv()),{[e]:n});return new bn("auth","Firebase",r).create(e,{appName:t.name})}function At(t){return io(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Je(t,"argument-error"),io(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return du.create(t,...e)}function B(t,e,...n){if(!t)throw oo(e,...n)}function Ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Br(e),new Error(e)}function Nt(t,e){t||Ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dv(){return Fa()==="http:"||Fa()==="https:"}function Fa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dv()||Oc()||"connection"in navigator)?navigator.onLine:!0}function Lv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nt(n>e,"Short delay should be less than long delay!"),this.isMobile=Bp()||Vp()}get(){return Mv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e){Nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fv=new Tr(3e4,6e4);function Xt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qt(t,e,n,r,s={}){return hu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Er(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},i);return jp()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Yi(t.emulatorConfig.host)&&(c.credentials="include"),fu.fetch()(await pu(t,t.config.apiHost,n,l),c)})}async function hu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$v),e);try{const s=new Bv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Dr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Dr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Dr(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw io(t,u,c);Je(t,u)}}catch(s){if(s instanceof vt)throw s;Je(t,"network-request-failed",{message:String(s)})}}async function Cr(t,e,n,r,s={}){const i=await Qt(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function pu(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ao(t.config,s):`${t.config.apiScheme}://${s}`;return Uv.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Hv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),Fv.get())})}}function Dr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qe(t,e,r);return s.customData._tokenResponse=n,s}function Ha(t){return t!==void 0&&t.enterprise!==void 0}class jv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vv(t,e){return Qt(t,"GET","/v2/recaptchaConfig",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(t,e){return Qt(t,"POST","/v1/accounts:delete",e)}async function os(t,e){return Qt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zv(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=lo(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:sr(ti(s.auth_time)),issuedAtTime:sr(ti(s.iat)),expirationTime:sr(ti(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ti(t){return Number(t)*1e3}function lo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const s=kc(n);return s?JSON.parse(s):(Br("Failed to decode base64 JWT payload"),null)}catch(s){return Br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ba(t){const e=lo(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vt&&Kv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mr(t,os(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gu(i.providerUserInfo):[],l=Jv(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Si(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Gv(t){const e=tt(t);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jv(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gu(t){return t.map(e=>{var{providerId:n}=e,r=so(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(t,e){const n=await hu(t,{},async()=>{const r=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await pu(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fu.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xv(t,e){return Qt(t,"POST","/v2/accounts:revokeToken",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ba(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Ba(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Yv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new On;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=so(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Si(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zv(this,e)}reload(){return Gv(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await mr(this,Wv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,M=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:P,isAnonymous:K,providerData:Q,stsTokenManager:Z}=n;B(N&&Z,e,"internal-error");const _e=On.fromJSON(this.name,Z);B(typeof N=="string",e,"internal-error"),Ut(d,e.name),Ut(p,e.name),B(typeof P=="boolean",e,"internal-error"),B(typeof K=="boolean",e,"internal-error"),Ut(g,e.name),Ut(E,e.name),Ut(C,e.name),Ut(H,e.name),Ut(M,e.name),Ut(R,e.name);const j=new Ye({uid:N,auth:e,email:p,emailVerified:P,displayName:d,isAnonymous:K,photoURL:E,phoneNumber:g,tenantId:C,stsTokenManager:_e,createdAt:M,lastLoginAt:R});return Q&&Array.isArray(Q)&&(j.providerData=Q.map(Y=>Object.assign({},Y))),H&&(j._redirectEventId=H),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new On;s.updateFromServerResponse(n);const i=new Ye({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?gu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new On;l.updateFromIdToken(r);const a=new Ye({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Si(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Map;function xt(t){Nt(t instanceof Function,"Expected a class definition");let e=ja.get(t);return e?(Nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ja.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mu.type="NONE";const Va=mu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e,n){return`firebase:${t}:${e}:${n}`}class Nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jr(this.userKey,s.apiKey,i),this.fullPersistenceKey=jr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await os(this.auth,{idToken:e}).catch(()=>{});return n?Ye._fromGetAccountInfoResponse(this.auth,n,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Nn(xt(Va),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||xt(Va);const o=jr(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const p=await os(e,{idToken:u}).catch(()=>{});if(!p)break;d=await Ye._fromGetAccountInfoResponse(e,p,u)}else d=Ye._fromJSON(e,u);c!==i&&(l=d),i=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Nn(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Nn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iu(e))return"Blackberry";if(Eu(e))return"Webos";if(yu(e))return"Safari";if((e.includes("chrome/")||_u(e))&&!e.includes("edge/"))return"Chrome";if(wu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vu(t=Re()){return/firefox\//i.test(t)}function yu(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _u(t=Re()){return/crios\//i.test(t)}function bu(t=Re()){return/iemobile/i.test(t)}function wu(t=Re()){return/android/i.test(t)}function Iu(t=Re()){return/blackberry/i.test(t)}function Eu(t=Re()){return/webos/i.test(t)}function co(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qv(t=Re()){var e;return co(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zv(){return Wp()&&document.documentMode===10}function Su(t=Re()){return co(t)||wu(t)||Eu(t)||Iu(t)||/windows phone/i.test(t)||bu(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e=[]){let n;switch(t){case"Browser":n=Wa(Re());break;case"Worker":n=`${Wa(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(t,e={}){return Qt(t,"GET","/v2/passwordPolicy",Xt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=6;class ry{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ny,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new za(this),this.idTokenSubscription=new za(this),this.beforeStateQueue=new ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=du,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Nn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await os(this,{idToken:e}),r=await Ye._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(At(this));const n=e?tt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ty(this),n=new ry(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ov(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zt(t){return tt(t)}class za{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yp(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iy(t){Rs=t}function Cu(t){return Rs.loadJS(t)}function oy(){return Rs.recaptchaEnterpriseScript}function ay(){return Rs.gapiScript}function ly(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cy{constructor(){this.enterprise=new uy}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class uy{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dy="recaptcha-enterprise",xu="NO_RECAPTCHA";class fy{constructor(e){this.type=dy,this.auth=Zt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Vv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new jv(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(i,o,l){const a=window.grecaptcha;Ha(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(xu)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cy().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ha(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=oy();a.length!==0&&(a+=l),Cu(a).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ka(t,e,n,r=!1,s=!1){const i=new fy(t);let o;if(s)o=xu;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ti(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ka(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ka(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t,e){const n=Fn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hn(i,e??{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function py(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gy(t,e,n){const r=Zt(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Au(e),{host:o,port:l}=my(e),a=l===null?"":`:${l}`,c={url:`${i}//${o}${a}/`},u=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(hn(c,r.config.emulator)&&hn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Yi(o)?($p(`${i}//${o}${a}`),Hp("Auth",!0)):vy()}function Au(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function my(t){const e=Au(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qa(o)}}}function qa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,n){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}async function yy(t,e){return Qt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(t,e){return Cr(t,"POST","/v1/accounts:signInWithPassword",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}async function wy(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends uo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new vr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,n,"signInWithPassword",_y);case"emailLink":return by(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,r,"signUpPassword",yy);case"emailLink":return wy(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t,e){return Cr(t,"POST","/v1/accounts:signInWithIdp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="http://localhost";class mn extends uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=so(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dn(e,n)}buildRequest(){const e={requestUri:Iy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sy(t){const e=Kn(qn(t)).link,n=e?Kn(qn(e)).deep_link_id:null,r=Kn(qn(t)).deep_link_id;return(r?Kn(qn(r)).link:null)||r||n||e||t}class fo{constructor(e){var n,r,s,i,o,l;const a=Kn(qn(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,d=Ey((s=a.mode)!==null&&s!==void 0?s:null);B(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Sy(e);try{return new fo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.providerId=Hn.PROVIDER_ID}static credential(e,n){return vr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fo.parseLink(n);return B(r,"argument-error"),vr._fromEmailAndCode(e,r.code,r.tenantId)}}Hn.PROVIDER_ID="password";Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ho{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends xr{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mn._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends xr{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends xr{constructor(){super("twitter.com")}static credential(e,n){return mn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t,e){return Cr(t,"POST","/v1/accounts:signUp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ye._fromIdTokenResponse(e,r,s),o=Ga(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ga(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ga(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ls(e,n,r,s)}}function ku(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ls._fromErrorAndOperation(t,i,e,r):i})}async function Cy(t,e,n=!1){const r=await mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(t,e,n=!1){const{auth:r}=t;if(Ke(r.app))return Promise.reject(At(r));const s="reauthenticate";try{const i=await mr(t,ku(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=lo(i.idToken);B(o,r,"internal-error");const{sub:l}=o;return B(t.uid===l,r,"user-mismatch"),vn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(t,e,n=!1){if(Ke(t.app))return Promise.reject(At(t));const r="signIn",s=await ku(t,r,e),i=await vn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ay(t,e){return Ru(Zt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pu(t){const e=Zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ky(t,e,n){if(Ke(t.app))return Promise.reject(At(t));const r=Zt(t),o=await Ti(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ty).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Pu(t),a}),l=await vn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Ry(t,e,n){return Ke(t.app)?Promise.reject(At(t)):Ay(tt(t),Hn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pu(t),r})}function Py(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function Oy(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function Ny(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function Dy(t){return tt(t).signOut()}const cs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=1e3,Ly=10;class Nu extends Ou{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Su(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Zv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ly):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},My)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nu.type="LOCAL";const $y=Nu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Ou{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Du.type="SESSION";const Mu=Du;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await Uy(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=po("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function Hy(t){pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function By(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vy(){return Lu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="firebaseLocalStorageDb",Wy=1,us="firebaseLocalStorage",Uu="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Os(t,e){return t.transaction([us],e?"readwrite":"readonly").objectStore(us)}function zy(){const t=indexedDB.deleteDatabase($u);return new Ar(t).toPromise()}function Ci(){const t=indexedDB.open($u,Wy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(us,{keyPath:Uu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await zy(),e(await Ci()))})})}async function Ja(t,e,n){const r=Os(t,!0).put({[Uu]:e,value:n});return new Ar(r).toPromise()}async function Ky(t,e){const n=Os(t,!1).get(e),r=await new Ar(n).toPromise();return r===void 0?null:r.value}function Ya(t,e){const n=Os(t,!0).delete(e);return new Ar(n).toPromise()}const qy=800,Gy=3;class Fu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ci(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(Vy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await By(),!this.activeServiceWorker)return;this.sender=new Fy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ci();return await Ja(e,cs,"1"),await Ya(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ja(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ky(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ya(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Os(s,!1).getAll();return new Ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fu.type="LOCAL";const Jy=Fu;new Tr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e){return e?xt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yy(t){return Ru(t.auth,new go(t),t.bypassAuthState)}function Xy(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),xy(n,new go(t),t.bypassAuthState)}async function Qy(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Cy(n,new go(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yy;case"linkViaPopup":case"linkViaRedirect":return Qy;case"reauthViaPopup":case"reauthViaRedirect":return Xy;default:Je(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Tr(2e3,1e4);async function ju(t,e,n){if(Ke(t.app))return Promise.reject(Qe(t,"operation-not-supported-in-this-environment"));const r=Zt(t);Nv(t,e,ho);const s=Hu(r,n);return new un(r,"signInViaPopup",e,s).executeNotNull()}class un extends Bu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zy.get())};e()}}un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="pendingRedirect",Vr=new Map;class t_ extends Bu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const r=await n_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n_(t,e){const n=i_(e),r=s_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function r_(t,e){Vr.set(t._key(),e)}function s_(t){return xt(t._redirectPersistence)}function i_(t){return jr(e_,t.config.apiKey,t.name)}async function o_(t,e,n=!1){if(Ke(t.app))return Promise.reject(At(t));const r=Zt(t),s=Hu(r,e),o=await new t_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=10*60*1e3;class l_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xa(e))}saveEventToCache(e){this.cachedEventUids.add(Xa(e)),this.lastProcessedEventTime=Date.now()}}function Xa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(t,e={}){return Qt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f_=/^https?/;async function h_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u_(t);for(const n of e)try{if(p_(n))return}catch{}Je(t,"unauthorized-domain")}function p_(t){const e=Ei(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!f_.test(n))return!1;if(d_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new Tr(3e4,6e4);function Qa(){const t=pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function m_(t){return new Promise((e,n)=>{var r,s,i;function o(){Qa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qa(),n(Qe(t,"network-request-failed"))},timeout:g_.get()})}if(!((s=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pt().gapi)===null||i===void 0)&&i.load)o();else{const l=ly("iframefcb");return pt()[l]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},Cu(`${ay()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function v_(t){return Wr=Wr||m_(t),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new Tr(5e3,15e3),__="__/auth/iframe",b_="emulator/auth/iframe",w_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E_(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ao(e,b_):`https://${t.config.authDomain}/${__}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},s=I_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Er(r).slice(1)}`}async function S_(t){const e=await v_(t),n=pt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:E_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),l=pt().setTimeout(()=>{i(o)},y_.get());function a(){pt().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C_=500,x_=600,A_="_blank",k_="http://localhost";class Za{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function R_(t,e,n,r=C_,s=x_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},T_),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Re().toLowerCase();n&&(l=_u(c)?A_:n),vu(c)&&(e=e||k_,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(Qv(c)&&l!=="_self")return P_(e||"",l),new Za(null);const d=window.open(e||"",l,u);B(d,t,"popup-blocked");try{d.focus()}catch{}return new Za(d)}function P_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="__/auth/handler",N_="emulator/auth/handler",D_=encodeURIComponent("fac");async function el(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:s};if(e instanceof ho){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof xr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${D_}=${encodeURIComponent(a)}`:"";return`${M_(t)}?${Er(l).slice(1)}${c}`}function M_({config:t}){return t.emulator?ao(t,N_):`https://${t.authDomain}/${O_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="webStorageSupport";class L_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mu,this._completeRedirectFn=o_,this._overrideRedirectResult=r_}async _openPopup(e,n,r,s){var i;Nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await el(e,n,r,Ei(),s);return R_(e,o,po())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await el(e,n,r,Ei(),s);return Hy(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await S_(e),r=new l_(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ni,{type:ni},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ni];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Su()||yu()||co()}}const $_=L_;var tl="@firebase/auth",nl="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H_(t){Ot(new mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tu(t)},c=new sy(r,s,i,a);return py(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new mt("auth-internal",e=>{const n=Zt(e.getProvider("auth").getImmediate());return(r=>new U_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(tl,nl,F_(t)),ht(tl,nl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=5*60,j_=Pc("authIdTokenMaxAge")||B_;let rl=null;const V_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>j_)return;const s=n==null?void 0:n.token;rl!==s&&(rl=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $n(t=Fc()){const e=Fn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hy(t,{popupRedirectResolver:$_,persistence:[Jy,$y,Mu]}),r=Pc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=V_(i.toString());Oy(n,o,()=>o(n.currentUser)),Py(n,l=>o(l))}}const s=Mp("auth");return s&&gy(n,`http://${s}`),n}function W_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",W_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H_("Browser");const z_=()=>{const t=ve(null),e=ve(!0),n=async()=>{const r=$n();try{await Dy(r)}catch(s){console.error("Logout error:",s)}};return wr(()=>{const r=$n();Ny(r,s=>{t.value=s,e.value=!1})}),{user:t,loading:e,logout:n}},K_={class:"bg-white shadow-md py-4"},q_={class:"container mx-auto px-6 flex justify-between items-center"},G_={class:"hidden md:flex space-x-8"},J_={class:"hidden md:flex items-center space-x-4"},Y_={class:"text-gray-700"},X_={key:0,class:"fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 mobile-sidebar"},Q_={class:"p-6"},Z_={class:"mt-8 flex flex-col space-y-4"},e0={key:0,class:"text-gray-700 font-medium"},t0={__name:"Navbar",setup(t){const e=Gi(),{user:n,logout:r}=z_(),s=ve(!1),i=()=>{s.value=!s.value},o=async()=>{await r(),s.value=!1,e.push("/")},l=a=>{const c=document.querySelector(".mobile-sidebar"),u=document.querySelector(".hamburger-button");s.value&&!(c&&c.contains(a.target))&&!(u&&u.contains(a.target))&&(s.value=!1)};return wr(()=>{document.addEventListener("click",l)}),Bi(()=>{document.removeEventListener("click",l)}),(a,c)=>{const u=_n("router-link");return q(),J("nav",K_,[v("div",q_,[z(u,{to:"/",class:"flex items-center"},{default:le(()=>c[0]||(c[0]=[v("span",{class:"text-2xl font-bold text-sanskrit"},[X("sanskrit"),v("span",{class:"text-gray-800"},".dev")],-1)])),_:1,__:[0]}),v("div",G_,[z(u,{to:"/",class:"text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200"},{default:le(()=>c[1]||(c[1]=[X("Home")])),_:1,__:[1]}),z(u,{to:"/explore",class:"text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200"},{default:le(()=>c[2]||(c[2]=[X("Explore")])),_:1,__:[2]}),z(u,{to:"/pricing",class:"text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200"},{default:le(()=>c[3]||(c[3]=[X("Pricing")])),_:1,__:[3]}),z(u,{to:"/contact",class:"text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200"},{default:le(()=>c[4]||(c[4]=[X("Contact")])),_:1,__:[4]})]),v("div",J_,[He(n)?(q(),J(we,{key:0},[v("span",Y_,me(He(n).displayName||He(n).email),1),v("button",{onClick:o,class:"bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition duration-300 cursor-pointer"}," Logout ")],64)):(q(),J(we,{key:1},[z(u,{to:"/register",class:"text-sanskrit hover:text-amber-600 font-medium"},{default:le(()=>c[5]||(c[5]=[X(" Register ")])),_:1,__:[5]}),z(u,{to:"/login",class:"bg-sanskrit text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-600 transition duration-300"},{default:le(()=>c[6]||(c[6]=[X(" Login ")])),_:1,__:[6]})],64))]),v("button",{onClick:i,class:"md:hidden hamburger-button cursor-pointer"},c[7]||(c[7]=[v("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))]),z(fc,{name:"slide"},{default:le(()=>[s.value?(q(),J("div",X_,[v("div",Q_,[v("div",{class:"flex justify-end"},[v("button",{onClick:i,class:"text-gray-500 cursor-pointer"},c[8]||(c[8]=[v("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),v("div",Z_,[He(n)?(q(),J("span",e0,me(He(n).displayName||He(n).email),1)):fn("",!0),z(u,{onClick:i,to:"/",class:"text-gray-800 hover:text-amber-500 font-medium"},{default:le(()=>c[9]||(c[9]=[X("Home")])),_:1,__:[9]}),z(u,{onClick:i,to:"/explore",class:"text-gray-800 hover:text-amber-500 font-medium"},{default:le(()=>c[10]||(c[10]=[X("Explore")])),_:1,__:[10]}),z(u,{onClick:i,to:"/pricing",class:"text-gray-800 hover:text-amber-500 font-medium"},{default:le(()=>c[11]||(c[11]=[X("Pricing")])),_:1,__:[11]}),z(u,{onClick:i,to:"/contact",class:"text-gray-800 hover:text-amber-500 font-medium"},{default:le(()=>c[12]||(c[12]=[X("Contact")])),_:1,__:[12]}),He(n)?(q(),J("button",{key:1,onClick:o,class:"bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition duration-300 cursor-pointer"}," Logout ")):(q(),J(we,{key:2},[z(u,{to:"/register",onClick:i,class:"text-sanskrit hover:text-amber-600 font-medium"},{default:le(()=>c[13]||(c[13]=[X(" Register ")])),_:1,__:[13]}),z(u,{to:"/login",onClick:i,class:"bg-sanskrit text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-600 transition duration-300"},{default:le(()=>c[14]||(c[14]=[X(" Login ")])),_:1,__:[14]})],64))])])])):fn("",!0)]),_:1})])}}},Wu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},n0={},r0={class:"bg-gray-800 text-white py-10"},s0={class:"container mx-auto px-6"},i0={class:"flex flex-col md:flex-row justify-between"},o0={class:"grid grid-cols-2 gap-8"},a0={class:"space-y-2"};function l0(t,e){const n=_n("router-link");return q(),J("footer",r0,[v("div",s0,[v("div",i0,[e[6]||(e[6]=v("div",{class:"mb-6 md:mb-0"},[v("h2",{class:"text-2xl font-bold text-sanskrit"},[X("sanskrit"),v("span",{class:"text-white"},".dev")]),v("p",{class:"mt-2 text-gray-300"},"Your domain for Sanskrit-related projects")],-1)),v("div",o0,[v("div",null,[e[4]||(e[4]=v("h3",{class:"text-lg font-semibold mb-4"},"Quick Links",-1)),v("ul",a0,[v("li",null,[z(n,{to:"/",class:"text-gray-300 hover:text-white"},{default:le(()=>e[0]||(e[0]=[X("Home")])),_:1,__:[0]})]),v("li",null,[z(n,{to:"/explore",class:"text-gray-300 hover:text-white"},{default:le(()=>e[1]||(e[1]=[X("Explore")])),_:1,__:[1]})]),v("li",null,[z(n,{to:"/pricing",class:"text-gray-300 hover:text-white"},{default:le(()=>e[2]||(e[2]=[X("Pricing")])),_:1,__:[2]})]),v("li",null,[z(n,{to:"/contact",class:"text-gray-300 hover:text-white"},{default:le(()=>e[3]||(e[3]=[X("Contact")])),_:1,__:[3]})])])]),e[5]||(e[5]=Un('<div><h3 class="text-lg font-semibold mb-4">Connect</h3><ul class="space-y-2"><li><a href="#" class="text-gray-300 hover:text-white">Twitter</a></li><li><a href="#" class="text-gray-300 hover:text-white">GitHub</a></li><li><a href="#" class="text-gray-300 hover:text-white">Discord</a></li></ul></div>',1))])]),e[7]||(e[7]=v("div",{class:"border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"},[v("p",null,"© 2025 sanskrit.dev. All rights reserved.")],-1))])])}const c0=Wu(n0,[["render",l0]]),u0={class:"flex flex-col min-h-screen"},d0={class:"flex-grow"},f0={__name:"App",setup(t){return(e,n)=>{const r=_n("router-view");return q(),J("div",u0,[z(t0),v("main",d0,[z(r)]),z(c0)])}}},h0={class:"bg-gray-50 py-20"},p0={class:"container mx-auto px-6 text-center"},g0={class:"text-xl md:text-2xl text-gray-600 h-12"},m0={class:"mt-10 flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center"},v0={class:"py-16 bg-gray-50"},y0={class:"container mx-auto px-6"},_0={class:"flex justify-between items-center mb-12"},b0={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},w0=["src","alt"],I0={class:"p-6"},E0={class:"text-xl font-semibold mb-2"},S0={class:"text-gray-600 mb-4"},T0={class:"flex justify-between items-center"},C0={class:"text-sm text-gray-500"},x0=["href"],A0={class:"py-16 bg-sanskrit"},k0={class:"container mx-auto px-6 text-center"},R0={__name:"Home",setup(t){const e=ve(0),n=ve(["Have you built anything related to Sanskrit?","Do you have your Sanskrit blog in Wordpress?","Have you built a Sanskrit learning tool?","Do you wish to host your Sanskrit tool?","Have you built a word game in Sanskrit?","Do you wish to build your Sanskrit blog?"]),r=ve([{id:1,name:"Sanskrit Dictionary",description:"Comprehensive Sanskrit to English dictionary with etymological information",author:"Rahul Sharma",image:"/api/placeholder/400/250",url:"#"},{id:2,name:"Sanskrit Grammar Tool",description:"Interactive tool for learning Sanskrit grammar and declensions",author:"Priya Patel",image:"/api/placeholder/400/250",url:"#"},{id:3,name:"Devanagari Typing App",description:"Type in Sanskrit with intelligent transliteration support",author:"Aarav Mishra",image:"/api/placeholder/400/250",url:"#"}]);wr(()=>{s()});const s=()=>{setInterval(()=>{e.value=(e.value+1)%n.value.length},3e3)};return(i,o)=>{const l=_n("router-link");return q(),J("div",null,[v("section",h0,[v("div",p0,[o[2]||(o[2]=v("h1",{class:"text-4xl md:text-5xl font-bold mb-6"},[X("Make "),v("span",{class:"text-sanskrit"},"sanskrit.dev"),X(" yours")],-1)),v("div",g0,[z(fc,{name:"fade",mode:"out-in"},{default:le(()=>[(q(),J("p",{key:e.value},me(n.value[e.value]),1))]),_:1})]),v("div",m0,[z(l,{to:"/pricing",class:"bg-sanskrit text-white py-3 px-8 rounded-lg font-medium text-lg hover:bg-amber-600 transition duration-300 block sm:inline-block w-full sm:w-auto text-center"},{default:le(()=>o[0]||(o[0]=[X(" Get Started ")])),_:1,__:[0]}),z(l,{to:"/explore",class:"border-2 border-sanskrit text-sanskrit py-3 px-8 rounded-lg font-medium text-lg hover:bg-amber-100 transition duration-300 block sm:inline-block w-full sm:w-auto text-center"},{default:le(()=>o[1]||(o[1]=[X(" Explore Tools ")])),_:1,__:[1]})])])]),o[8]||(o[8]=Un('<section class="py-16"><div class="container mx-auto px-6"><h2 class="text-3xl font-bold text-center mb-12">Why Choose sanskrit.dev?</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white p-8 rounded-xl shadow-lg text-center"><div class="bg-amber-100 inline-block p-4 rounded-full mb-6"><svg class="w-10 h-10 text-sanskrit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 16.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2zm6 0a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2zm-6-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2zm6 0a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2z"></path></svg></div><h3 class="text-xl font-semibold mb-3">Free Domain Name</h3><p class="text-gray-600">Get your own personalized subdomain on sanskrit.dev completely free for personal projects</p></div><div class="bg-white p-8 rounded-xl shadow-lg text-center"><div class="bg-amber-100 inline-block p-4 rounded-full mb-6"><svg class="w-10 h-10 text-sanskrit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 100-6 3 3 0 000 6zm8 8a3 3 0 100-6 3 3 0 000 6zm-4-9a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 100-2 1 1 0 000 2zm-8 8a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 100-2 1 1 0 000 2z"></path></svg></div><h3 class="text-xl font-semibold mb-3">Community</h3><p class="text-gray-600">Join a vibrant community of Sanskrit enthusiasts, developers, and scholars</p></div><div class="bg-white p-8 rounded-xl shadow-lg text-center"><div class="bg-amber-100 inline-block p-4 rounded-full mb-6"><svg class="w-10 h-10 text-sanskrit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"></path></svg></div><h3 class="text-xl font-semibold mb-3">Tool Hosting</h3><p class="text-gray-600">Host your Sanskrit-related tools with affordable plans and showcase them to a targeted audience</p></div></div></div></section>',1)),v("section",v0,[v("div",y0,[v("div",_0,[o[4]||(o[4]=v("h2",{class:"text-3xl font-bold"},"Featured Tools",-1)),z(l,{to:"/explore",class:"text-sanskrit hover:underline font-medium"},{default:le(()=>o[3]||(o[3]=[X("View All →")])),_:1,__:[3]})]),v("div",b0,[(q(!0),J(we,null,cr(r.value,a=>(q(),J("div",{key:a.id,class:"bg-white rounded-xl overflow-hidden shadow-lg"},[v("img",{src:a.image,alt:a.name,class:"w-full h-48 object-cover"},null,8,w0),v("div",I0,[v("h3",E0,me(a.name),1),v("p",S0,me(a.description),1),v("div",T0,[v("span",C0,"By "+me(a.author),1),v("a",{href:a.url,class:"text-sanskrit hover:underline"},"Visit →",8,x0)])])]))),128))])])]),v("section",A0,[v("div",k0,[o[6]||(o[6]=v("h2",{class:"text-3xl font-bold text-white mb-6"},"Ready to showcase your Sanskrit work?",-1)),o[7]||(o[7]=v("p",{class:"text-white opacity-90 text-lg max-w-2xl mx-auto mb-8"}," Join our growing community of Sanskrit enthusiasts and developers. Get your own dedicated space on sanskrit.dev today! ",-1)),z(l,{to:"/pricing",class:"bg-white py-3 px-8 rounded-lg font-medium text-lg hover:bg-gray-100 text-cyan-700 border-4 border-cyan-700 transition duration-300 inline-block"},{default:le(()=>o[5]||(o[5]=[X(" Get Started Now ")])),_:1,__:[5]})])])])}}},P0={class:"bg-gray-50 min-h-screen py-12"},O0={class:"container mx-auto px-6"},N0={class:"mb-8 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0"},D0={class:"relative md:w-1/2"},M0={class:"md:w-1/3"},L0=["value"],$0={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},U0=["src","alt"],F0={class:"p-6"},H0={class:"text-xl font-semibold mb-2"},B0={class:"text-gray-600 mb-4"},j0={class:"flex justify-between items-center"},V0={class:"text-sm text-gray-500"},W0=["href"],z0={key:1,class:"text-center py-16"},K0={__name:"Explore",setup(t){const e=ve(""),n=ve("all"),r=ve([{id:1,name:"Sanskrit Dictionary",description:"Comprehensive Sanskrit to English dictionary with etymological information",author:"Rahul Sharma",image:"/api/placeholder/400/250",url:"#",category:"dictionary"},{id:2,name:"Sanskrit Grammar Tool",description:"Interactive tool for learning Sanskrit grammar and declensions",author:"Priya Patel",image:"/api/placeholder/400/250",url:"#",category:"education"},{id:3,name:"Devanagari Typing App",description:"Type in Sanskrit with intelligent transliteration support",author:"Aarav Mishra",image:"/api/placeholder/400/250",url:"#",category:"tool"},{id:4,name:"Sanskrit Texts Repository",description:"Digital library of ancient Sanskrit texts with translations",author:"Vikram Acharya",image:"/api/placeholder/400/250",url:"#",category:"library"},{id:5,name:"Sanskrit Pronunciation Guide",description:"Learn proper Sanskrit pronunciation with audio examples",author:"Ananya Desai",image:"/api/placeholder/400/250",url:"#",category:"education"},{id:6,name:"Sanskrit Meter Analyzer",description:"Analyze and identify metrical patterns in Sanskrit poetry",author:"Deepak Shastri",image:"/api/placeholder/400/250",url:"#",category:"tool"}]),s=ve([{id:"all",name:"All Categories"},{id:"dictionary",name:"Dictionaries"},{id:"education",name:"Educational"},{id:"tool",name:"Tools"},{id:"library",name:"Libraries"}]),i=ze(()=>r.value.filter(o=>{const l=o.name.toLowerCase().includes(e.value.toLowerCase())||o.description.toLowerCase().includes(e.value.toLowerCase()),a=n.value==="all"||o.category===n.value;return l&&a}));return(o,l)=>(q(),J("div",P0,[v("div",O0,[l[4]||(l[4]=v("h1",{class:"text-4xl font-bold mb-8"},"Explore Sanskrit Tools",-1)),v("div",N0,[v("div",D0,[ut(v("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),placeholder:"Search tools...",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"},null,512),[[Tt,e.value]]),l[2]||(l[2]=v("svg",{class:"w-5 h-5 text-gray-400 absolute right-3 top-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1))]),v("div",M0,[ut(v("select",{"onUpdate:modelValue":l[1]||(l[1]=a=>n.value=a),class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent appearance-none"},[(q(!0),J(we,null,cr(s.value,a=>(q(),J("option",{key:a.id,value:a.id},me(a.name),9,L0))),128))],512),[[mh,n.value]])])]),i.value.length?(q(),J("div",$0,[(q(!0),J(we,null,cr(i.value,a=>(q(),J("div",{key:a.id,class:"bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"},[v("img",{src:a.image,alt:a.name,class:"w-full h-48 object-cover"},null,8,U0),v("div",F0,[v("h3",H0,me(a.name),1),v("p",B0,me(a.description),1),v("div",j0,[v("span",V0,"By "+me(a.author),1),v("a",{href:a.url,class:"text-sanskrit hover:underline"},"Visit →",8,W0)])])]))),128))])):(q(),J("div",z0,l[3]||(l[3]=[v("svg",{class:"w-16 h-16 text-gray-300 mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),v("h3",{class:"text-xl font-medium text-gray-500"},"No tools found matching your search",-1)])))])]))}},q0={class:"bg-gray-50 py-16"},G0={class:"container mx-auto px-6"},J0={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},Y0={key:0,class:"absolute top-0 right-0 bg-sanskrit text-white py-1 px-4 rounded-bl-lg font-medium"},X0={class:"p-8"},Q0={class:"text-2xl font-bold mb-2"},Z0={class:"mb-4"},eb={class:"text-4xl font-bold"},tb={key:0,class:"text-gray-500"},nb={class:"text-gray-600 mb-6"},rb={class:"mb-8 space-y-3"},sb={__name:"Pricing",setup(t){const e=ve([{name:"Hobbyist",price:"Free",description:"Perfect for personal projects and blogs",features:["Free subdomain (yourname.sanskrit.dev)","CNAME record support","Personal webpage hosting","Community support"],cta:"Get Started",popular:!1},{name:"Developer",price:"₹100",period:"per month",description:"For developers building Sanskrit tools",features:["Everything in Hobbyist","Tool hosting","API access","1GB storage","50GB bandwidth","Email support"],cta:"Start Developing",popular:!1},{name:"Enterprise",price:"Custom",description:"For organizations with specific needs",features:["Everything in Developer","Custom hosting solutions","Unlimited storage","Unlimited bandwidth","Priority support","Custom integrations"],cta:"Contact Us",popular:!1}]);return(n,r)=>(q(),J("div",q0,[v("div",G0,[r[1]||(r[1]=v("div",{class:"text-center mb-16"},[v("h1",{class:"text-4xl font-bold mb-4"},"Simple, Transparent Pricing"),v("p",{class:"text-xl text-gray-600 max-w-2xl mx-auto"},"Choose the plan that fits your needs. Free for hobbyists, affordable for developers.")],-1)),v("div",J0,[(q(!0),J(we,null,cr(e.value,(s,i)=>(q(),J("div",{key:i,class:"bg-white rounded-xl shadow-lg overflow-hidden relative"},[s.popular?(q(),J("div",Y0," Popular ")):fn("",!0),v("div",X0,[v("h3",Q0,me(s.name),1),v("div",Z0,[v("span",eb,me(s.price),1),s.period?(q(),J("span",tb,me(s.period),1)):fn("",!0)]),v("p",nb,me(s.description),1),v("ul",rb,[(q(!0),J(we,null,cr(s.features,o=>(q(),J("li",{key:o,class:"flex items-start"},[r[0]||(r[0]=v("svg",{class:"w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[v("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1)),v("span",null,me(o),1)]))),128))]),v("button",{class:ms([["w-full py-3 px-4 rounded-lg font-medium",s.popular?"bg-sanskrit text-white hover:bg-amber-600":"border-2 border-sanskrit text-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer"],"transition duration-300"])},me(s.cta),3)])]))),128))]),r[2]||(r[2]=Un('<div class="mt-16 bg-white p-8 rounded-xl shadow-lg"><h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2><div class="space-y-6"><div><h3 class="text-lg font-semibold mb-2">What&#39;s included in the free Hobbyist plan?</h3><p class="text-gray-600">The Hobbyist plan includes a free subdomain (yourname.sanskrit.dev), CNAME record support, and personal webpage hosting. It&#39;s perfect for individuals who want to create a personal website or blog related to Sanskrit.</p></div><div><h3 class="text-lg font-semibold mb-2">What&#39;s the difference between personal webpage hosting and tool hosting?</h3><p class="text-gray-600">Personal webpage hosting is suitable for static websites and blogs. Tool hosting provides server-side capabilities, allowing you to host interactive applications, APIs, and other dynamic content that requires backend processing.</p></div><div><h3 class="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan later?</h3><p class="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. When upgrading, you&#39;ll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.</p></div><div><h3 class="text-lg font-semibold mb-2">Do you offer custom solutions?</h3><p class="text-gray-600">Yes, our Enterprise plan offers custom hosting solutions for organizations with specific needs. Please contact us to discuss your requirements, and we&#39;ll tailor a solution for you.</p></div></div></div>',1))])]))}},ib={class:"bg-gray-50 py-16"},ob={class:"container mx-auto px-6"},ab={class:"max-w-4xl mx-auto"},lb={class:"bg-white rounded-xl shadow-lg overflow-hidden"},cb={class:"p-8"},ub={key:0,class:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"},db={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},fb=bs({__name:"Contact",setup(t){const e=_r({name:"",email:"",subject:"",message:""}),n=ve(!1),r=()=>{n.value=!0,setTimeout(()=>{e.name="",e.email="",e.subject="",e.message="",n.value=!1},3e3)};return(s,i)=>(q(),J("div",ib,[v("div",ob,[v("div",ab,[i[10]||(i[10]=v("h1",{class:"text-4xl font-bold mb-8"},"Contact Us",-1)),v("div",lb,[v("div",cb,[n.value?(q(),J("div",ub,i[4]||(i[4]=[v("p",null,"Your message has been sent successfully! We'll get back to you soon.",-1)]))):fn("",!0),v("form",{onSubmit:Ki(r,["prevent"]),class:"space-y-6"},[v("div",db,[v("div",null,[i[5]||(i[5]=v("label",{for:"name",class:"block text-gray-700 font-medium mb-2"},"Your Name",-1)),ut(v("input",{type:"text",id:"name","onUpdate:modelValue":i[0]||(i[0]=o=>e.name=o),required:"",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"},null,512),[[Tt,e.name]])]),v("div",null,[i[6]||(i[6]=v("label",{for:"email",class:"block text-gray-700 font-medium mb-2"},"Email Address",-1)),ut(v("input",{type:"email",id:"email","onUpdate:modelValue":i[1]||(i[1]=o=>e.email=o),required:"",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"},null,512),[[Tt,e.email]])])]),v("div",null,[i[7]||(i[7]=v("label",{for:"subject",class:"block text-gray-700 font-medium mb-2"},"Subject",-1)),ut(v("input",{type:"text",id:"subject","onUpdate:modelValue":i[2]||(i[2]=o=>e.subject=o),required:"",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"},null,512),[[Tt,e.subject]])]),v("div",null,[i[8]||(i[8]=v("label",{for:"message",class:"block text-gray-700 font-medium mb-2"},"Message",-1)),ut(v("textarea",{id:"message","onUpdate:modelValue":i[3]||(i[3]=o=>e.message=o),rows:"5",required:"",class:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"},null,512),[[Tt,e.message]])]),i[9]||(i[9]=v("button",{type:"submit",class:"bg-sanskrit text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-600 transition duration-300"}," Send Message ",-1))],32)])]),i[11]||(i[11]=Un('<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white p-6 rounded-xl shadow-lg text-center"><div class="bg-amber-100 inline-block p-4 rounded-full mb-6"><svg class="w-6 h-6 text-sanskrit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><h3 class="text-lg font-semibold mb-2">Email</h3><p class="text-gray-600">contact@sanskrit.dev</p></div><div class="bg-white p-6 rounded-xl shadow-lg text-center"><div class="bg-amber-100 inline-block p-4 rounded-full mb-6"><svg class="w-6 h-6 text-sanskrit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg></div><h3 class="text-lg font-semibold mb-2">Discord</h3><p class="text-gray-600">Join our community</p></div><div class="bg-white p-6 rounded-xl shadow-lg text-center"><div class="bg-amber-100 inline-block p-4 rounded-full mb-6"><svg class="w-6 h-6 text-sanskrit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.776-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253"></path></svg></div><h3 class="text-lg font-semibold mb-2">Documentation</h3><p class="text-gray-600">Read our guides</p></div></div>',1))])])]))}}),hb={class:"min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},pb={class:"max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"},gb={key:0,class:"rounded-md bg-red-50 p-4"},mb={class:"text-sm text-red-700"},vb={class:"rounded-md shadow-sm -space-y-px"},yb=["disabled"],_b={class:"text-center"},bb={__name:"Register",setup(t){const e=ve(""),n=ve(""),r=ve(""),s=ve(!1),i=Gi(),o=async()=>{r.value="",s.value=!0;try{const a=$n();await ky(a,e.value,n.value),i.push("/explore")}catch(a){switch(a.code){case"auth/network-request-failed":r.value="Network error. Please check your internet connection.";break;case"auth/email-already-in-use":r.value="This email is already registered.";break;case"auth/weak-password":r.value="Password should be at least 6 characters.";break;default:r.value="Failed to create account. Please try again."}}finally{s.value=!1}},l=async()=>{r.value="",s.value=!0;try{const a=$n(),c=new ct;await ju(a,c),i.push("/explore")}catch(a){switch(a.code){case"auth/popup-closed-by-user":r.value="Sign-in cancelled.";break;case"auth/network-request-failed":r.value="Network error. Please check your internet connection.";break;default:r.value="Failed to sign in with Google. Please try again."}}finally{s.value=!1}};return(a,c)=>{const u=_n("router-link");return q(),J("div",hb,[v("div",pb,[c[5]||(c[5]=v("div",null,[v("h1",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Create an Account"),v("p",{class:"mt-2 text-center text-sm text-gray-600"}," Join the Sanskrit.dev community ")],-1)),r.value?(q(),J("div",gb,[v("div",mb,me(r.value),1)])):fn("",!0),v("form",{class:"mt-8 space-y-6",onSubmit:Ki(o,["prevent"])},[v("div",vb,[v("div",null,[ut(v("input",{type:"email","onUpdate:modelValue":c[0]||(c[0]=d=>e.value=d),required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[Tt,e.value]])]),v("div",null,[ut(v("input",{type:"password","onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d),required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[Tt,n.value]])])]),v("div",null,[v("button",{type:"submit",disabled:s.value,class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"},[c[2]||(c[2]=v("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[v("svg",{class:"h-5 w-5 text-amber-500 group-hover:text-amber-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[v("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])],-1)),X(" "+me(s.value?"Creating account...":"Sign up"),1)],8,yb)])],32),c[6]||(c[6]=Un('<div class="relative my-6"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500">Or continue with</span></div></div>',1)),v("div",null,[v("button",{type:"button",onClick:l,class:"w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"},c[3]||(c[3]=[v("img",{src:"https://www.google.com/favicon.ico",alt:"Google",class:"w-5 h-5"},null,-1),X(" Continue with Google ")]))]),v("div",_b,[z(u,{to:"/login",class:"font-medium text-amber-600 hover:text-amber-500"},{default:le(()=>c[4]||(c[4]=[X(" Already have an account? Sign in ")])),_:1,__:[4]})])])])}}},wb={class:"min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},Ib={class:"max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"},Eb={key:0,class:"rounded-md bg-red-50 p-4"},Sb={class:"text-sm text-red-700"},Tb={class:"rounded-md shadow-sm -space-y-px"},Cb=["disabled"],xb={class:"text-center"},Ab={__name:"Login",setup(t){const e=ve(""),n=ve(""),r=ve(""),s=ve(!1),i=Gi(),o=async()=>{r.value="",s.value=!0;try{const a=$n();await Ry(a,e.value,n.value),i.push("/explore")}catch(a){switch(a.code){case"auth/user-not-found":case"auth/wrong-password":r.value="Invalid email or password.";break;case"auth/network-request-failed":r.value="Network error. Please check your internet connection.";break;default:r.value="Failed to sign in. Please try again."}}finally{s.value=!1}},l=async()=>{r.value="",s.value=!0;try{const a=$n(),c=new ct;await ju(a,c),i.push("/explore")}catch(a){switch(a.code){case"auth/popup-closed-by-user":r.value="Sign-in cancelled.";break;case"auth/network-request-failed":r.value="Network error. Please check your internet connection.";break;default:r.value="Failed to sign in with Google. Please try again."}}finally{s.value=!1}};return(a,c)=>{const u=_n("router-link");return q(),J("div",wb,[v("div",Ib,[c[5]||(c[5]=v("div",null,[v("h1",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Sign in to your account"),v("p",{class:"mt-2 text-center text-sm text-gray-600"}," Welcome back to Sanskrit.dev ")],-1)),r.value?(q(),J("div",Eb,[v("div",Sb,me(r.value),1)])):fn("",!0),v("form",{class:"mt-8 space-y-6",onSubmit:Ki(o,["prevent"])},[v("div",Tb,[v("div",null,[ut(v("input",{type:"email","onUpdate:modelValue":c[0]||(c[0]=d=>e.value=d),required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[Tt,e.value]])]),v("div",null,[ut(v("input",{type:"password","onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d),required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[Tt,n.value]])])]),v("div",null,[v("button",{type:"submit",disabled:s.value,class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"},[c[2]||(c[2]=v("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[v("svg",{class:"h-5 w-5 text-amber-500 group-hover:text-amber-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[v("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])],-1)),X(" "+me(s.value?"Signing in...":"Sign in"),1)],8,Cb)])],32),c[6]||(c[6]=Un('<div class="relative my-6"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500">Or continue with</span></div></div>',1)),v("div",null,[v("button",{type:"button",onClick:l,class:"w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"},c[3]||(c[3]=[v("img",{src:"https://www.google.com/favicon.ico",alt:"Google",class:"w-5 h-5"},null,-1),X(" Continue with Google ")]))]),v("div",xb,[z(u,{to:"/register",class:"font-medium text-amber-600 hover:text-amber-500"},{default:le(()=>c[4]||(c[4]=[X(" Don't have an account? Sign up ")])),_:1,__:[4]})])])])}}},kb=bs({name:"NotFound"}),Rb={class:"min-h-screen flex items-center justify-center px-4"},Pb={class:"text-center"};function Ob(t,e,n,r,s,i){const o=_n("router-link");return q(),J("div",Rb,[v("div",Pb,[e[1]||(e[1]=v("h1",{class:"text-9xl font-bold text-red-500"},"404",-1)),e[2]||(e[2]=v("h2",{class:"text-4xl font-semibold text-gray-800 mt-4"},"Page Not Found",-1)),e[3]||(e[3]=v("p",{class:"text-gray-600 mt-4 mb-8"}," The page you are looking for doesn't exist or has been moved. ",-1)),z(o,{to:"/",class:"inline-block px-6 py-3 bg-sanskrit text-white rounded-lg transition-colors duration-300"},{default:le(()=>e[0]||(e[0]=[X(" Return to Homepage ")])),_:1,__:[0]})])])}const Nb=Wu(kb,[["render",Ob]]),Db=[{path:"/",component:R0},{path:"/explore",component:K0},{path:"/pricing",component:sb},{path:"/contact",component:fb},{path:"/login",component:Ab},{path:"/register",component:bb},{path:"/:pathMatch(.*)*",component:Nb}],Mb=Tp({history:ep(),routes:Db,scrollBehavior(t,e,n){return{top:0}}}),Lb={apiKey:"AIzaSyA0tsHYFB0-mXH4h1AeaWDnJa4lLwf5NDw",authDomain:"login.sanskrit.dev",projectId:"sanskrit-dev-3e22f",storageBucket:"sanskrit-dev-3e22f.firebasestorage.app",messagingSenderId:"1060293128191",appId:"1:1060293128191:web:565c8806fddaa29a42c1ca",measurementId:"G-VKQER865MQ"},$b=Uc(Lb);xv($b);const zu=wh(f0);zu.use(Mb);zu.mount("#app");
