import{f as q,J as v,K as d,a$ as We,P as C,a0 as U,n as J,a1 as j,b0 as M,a3 as E,b1 as ue,ab as k,b2 as et,b3 as Ie,b4 as tt,ak as F,al as Oe,an as Re,aj as V,b5 as oe,a4 as X,F as at,b6 as nt,b7 as lt,$ as z,ah as Y,Z as Fe,a6 as Ye,a7 as L,b8 as ot,b9 as rt,ad as it,a2 as st,a9 as ut,ba as dt,bb as ft,bc as Pe,a8 as Ee,bd as ct,be as H,ao as vt,ai as pt,bf as mt,q as G,_ as gt,ap as re,o as ke,i as He,w as Q,b as ge,v as he,a as ye,l as ht,s as yt,y as bt,z as Ne,A as wt,B as Me,av as Et,aw as Tt}from"./Dq0jrfx7.js";import{t as je,a as qe,o as de}from"./LHNEU0ua.js";const $t={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function ze(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let l=E(a);l instanceof HTMLElement&&t.add(l)}return t}var Ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ke||{});let Z=Object.assign(q({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:l}){let n=v(null);l({el:n,$el:n});let o=d(()=>We(n)),r=v(!1);C(()=>r.value=!0),U(()=>r.value=!1),Ft({ownerDocument:o},d(()=>r.value&&!!(e.features&16)));let i=Lt({ownerDocument:o,container:n,initialFocus:d(()=>e.initialFocus)},d(()=>r.value&&!!(e.features&2)));Ct({ownerDocument:o,container:n,containers:e.containers,previousActiveElement:i},d(()=>r.value&&!!(e.features&8)));let s=tt();function u(y){let g=E(n);g&&(b=>b())(()=>{V(s.value,{[oe.Forwards]:()=>{ue(g,k.First,{skipElements:[y.relatedTarget]})},[oe.Backwards]:()=>{ue(g,k.Last,{skipElements:[y.relatedTarget]})}})})}let c=v(!1);function w(y){y.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function m(y){if(!r.value)return;let g=ze(e.containers);E(n)instanceof HTMLElement&&g.add(E(n));let b=y.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(Qe(g,b)||(c.value?ue(E(n),V(s.value,{[oe.Forwards]:()=>k.Next,[oe.Backwards]:()=>k.Previous})|k.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&M(y.target)))}return()=>{let y={},g={ref:n,onKeydown:w,onFocusout:m},{features:b,initialFocus:h,containers:O,...T}=e;return F(at,[!!(b&4)&&F(Oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Re.Focusable}),X({ourProps:g,theirProps:{...t,...T},slot:y,attrs:t,slots:a,name:"FocusTrap"}),!!(b&4)&&F(Oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Re.Focusable})])}}}),{features:Ke});function St(e){let t=v(je.slice());return J([e],([a],[l])=>{l===!0&&a===!1?qe(()=>{t.value.splice(0)}):l===!1&&a===!0&&(t.value=je.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(l=>l!=null&&l.isConnected))!=null?a:null}}function Ft({ownerDocument:e},t){let a=St(t);C(()=>{j(()=>{var l,n;t.value||((l=e.value)==null?void 0:l.activeElement)===((n=e.value)==null?void 0:n.body)&&M(a())},{flush:"post"})}),U(()=>{t.value&&M(a())})}function Lt({ownerDocument:e,container:t,initialFocus:a},l){let n=v(null),o=v(!1);return C(()=>o.value=!0),U(()=>o.value=!1),C(()=>{J([t,a,l],(r,i)=>{if(r.every((u,c)=>(i==null?void 0:i[c])===u)||!l.value)return;let s=E(t);s&&qe(()=>{var u,c;if(!o.value)return;let w=E(a),m=(u=e.value)==null?void 0:u.activeElement;if(w){if(w===m){n.value=m;return}}else if(s.contains(m)){n.value=m;return}w?M(w):ue(s,k.First|k.NoScroll)===et.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),n}function Ct({ownerDocument:e,container:t,containers:a,previousActiveElement:l},n){var o;Ie((o=e.value)==null?void 0:o.defaultView,"focus",r=>{if(!n.value)return;let i=ze(a);E(t)instanceof HTMLElement&&i.add(E(t));let s=l.value;if(!s)return;let u=r.target;u&&u instanceof HTMLElement?Qe(i,u)?(l.value=u,M(u)):(r.preventDefault(),r.stopPropagation(),M(s)):M(l.value)},!0)}function Qe(e,t){for(let a of e)if(a.contains(t))return!0;return!1}function At(e){let t=nt(e.getSnapshot());return U(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Dt(e,t){let a=e(),l=new Set;return{getSnapshot(){return a},subscribe(n){return l.add(n),()=>l.delete(n)},dispatch(n,...o){let r=t[n].call(a,...o);r&&(a=r,l.forEach(i=>i()))}}}function Bt(){let e;return{before({doc:t}){var a;let l=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-l.clientWidth},after({doc:t,d:a}){let l=t.documentElement,n=l.clientWidth-l.offsetWidth,o=e-n;a.style(l,"paddingRight",`${o}px`)}}}function Ot(){return lt()?{before({doc:e,d:t,meta:a}){function l(n){return a.containers.flatMap(o=>o()).some(o=>o.contains(n))}t.microTask(()=>{var n;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=de();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let o=(n=window.scrollY)!=null?n:window.pageYOffset,r=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let s=i.target.closest("a");if(!s)return;let{hash:u}=new URL(s.href),c=e.querySelector(u);c&&!l(c)&&(r=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(l(i.target)){let s=i.target;for(;s.parentElement&&l(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(l(i.target)){let s=i.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let s=(i=window.scrollY)!=null?i:window.pageYOffset;o!==s&&window.scrollTo(0,o),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})})}}:{}}function Rt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Pt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let N=Dt(()=>new Map,{PUSH(e,t){var a;let l=(a=this.get(e))!=null?a:{doc:e,count:0,d:de(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let l={doc:e,d:t,meta:Pt(a)},n=[Ot(),Bt(),Rt()];n.forEach(({before:o})=>o==null?void 0:o(l)),n.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});N.subscribe(()=>{let e=N.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let l=t.get(a.doc)==="hidden",n=a.count!==0;(n&&!l||!n&&l)&&N.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&N.dispatch("TEARDOWN",a)}});function kt(e,t,a){let l=At(N),n=d(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return J([e,t],([o,r],[i],s)=>{if(!o||!r)return;N.dispatch("PUSH",o,a);let u=!1;s(()=>{u||(N.dispatch("POP",i??o,a),u=!0)})},{immediate:!0}),n}let be=new Map,x=new Map;function Ve(e,t=v(!0)){j(a=>{var l;if(!t.value)return;let n=E(e);if(!n)return;a(function(){var r;if(!n)return;let i=(r=x.get(n))!=null?r:1;if(i===1?x.delete(n):x.set(n,i-1),i!==1)return;let s=be.get(n);s&&(s["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",s["aria-hidden"]),n.inert=s.inert,be.delete(n))});let o=(l=x.get(n))!=null?l:0;x.set(n,o+1),o===0&&(be.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}let Ze=Symbol("StackContext");var Te=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Te||{});function Ht(){return z(Ze,()=>{})}function Nt({type:e,enabled:t,element:a,onUpdate:l}){let n=Ht();function o(...r){l==null||l(...r),n(...r)}C(()=>{J(t,(r,i)=>{r?o(0,e,a):i===!0&&o(1,e,a)},{immediate:!0,flush:"sync"})}),U(()=>{t.value&&o(1,e,a)}),Y(Ze,o)}let Mt=Symbol("DescriptionContext");function jt({slot:e=v({}),name:t="Description",props:a={}}={}){let l=v([]);function n(o){return l.value.push(o),()=>{let r=l.value.indexOf(o);r!==-1&&l.value.splice(r,1)}}return Y(Mt,{register:n,slot:e,name:t,props:a}),d(()=>l.value.length>0?l.value.join(" "):void 0)}var Vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Vt||{});let $e=Symbol("DialogContext");function xe(e){let t=z($e,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,xe),a}return t}let ie="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ut=q({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ie},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:l,expose:n}){var o,r;let i=(o=e.id)!=null?o:`headlessui-dialog-${Fe()}`,s=v(!1);C(()=>{s.value=!0});let u=!1,c=d(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(u||(u=!0,console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),w=v(0),m=Ye(),y=d(()=>e.open===ie&&m!==null?(m.value&L.Open)===L.Open:e.open),g=v(null),b=d(()=>We(g));if(n({el:g,$el:g}),!(e.open!==ie||m!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof y.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${y.value===ie?void 0:e.open}`);let h=d(()=>s.value&&y.value?0:1),O=d(()=>h.value===0),T=d(()=>w.value>1),R=z($e,null)!==null,[_,ee]=ot(),{resolveContainers:W,mainTreeNodeRef:te,MainTreeNode:ae}=rt({portals:_,defaultContainers:[d(()=>{var f;return(f=I.panelRef.value)!=null?f:g.value})]}),ce=d(()=>T.value?"parent":"leaf"),ne=d(()=>m!==null?(m.value&L.Closing)===L.Closing:!1),ve=d(()=>R||ne.value?!1:O.value),pe=d(()=>{var f,p,$;return($=Array.from((p=(f=b.value)==null?void 0:f.querySelectorAll("body > *"))!=null?p:[]).find(S=>S.id==="headlessui-portal-root"?!1:S.contains(E(te))&&S instanceof HTMLElement))!=null?$:null});Ve(pe,ve);let A=d(()=>T.value?!0:O.value),K=d(()=>{var f,p,$;return($=Array.from((p=(f=b.value)==null?void 0:f.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find(S=>S.contains(E(te))&&S instanceof HTMLElement))!=null?$:null});Ve(K,A),Nt({type:"Dialog",enabled:d(()=>h.value===0),element:g,onUpdate:(f,p)=>{if(p==="Dialog")return V(f,{[Te.Add]:()=>w.value+=1,[Te.Remove]:()=>w.value-=1})}});let D=jt({name:"DialogDescription",slot:d(()=>({open:y.value}))}),B=v(null),I={titleId:B,panelRef:v(null),dialogState:h,setTitleId(f){B.value!==f&&(B.value=f)},close(){t("close",!1)}};Y($e,I);let Ae=d(()=>!(!O.value||T.value));it(W,(f,p)=>{f.preventDefault(),I.close(),st(()=>p==null?void 0:p.focus())},Ae);let De=d(()=>!(T.value||h.value!==0));Ie((r=b.value)==null?void 0:r.defaultView,"keydown",f=>{De.value&&(f.defaultPrevented||f.key===ut.Escape&&(f.preventDefault(),f.stopPropagation(),I.close()))});let Be=d(()=>!(ne.value||h.value!==0||R));return kt(b,Be,f=>{var p;return{containers:[...(p=f.containers)!=null?p:[],W]}}),j(f=>{if(h.value!==0)return;let p=E(g);if(!p)return;let $=new ResizeObserver(S=>{for(let me of S){let le=me.target.getBoundingClientRect();le.x===0&&le.y===0&&le.width===0&&le.height===0&&I.close()}});$.observe(p),f(()=>$.disconnect())}),()=>{let{open:f,initialFocus:p,...$}=e,S={...a,ref:g,id:i,role:c.value,"aria-modal":h.value===0?!0:void 0,"aria-labelledby":B.value,"aria-describedby":D.value},me={open:h.value===0};return F(Pe,{force:!0},()=>[F(dt,()=>F(ft,{target:g.value},()=>F(Pe,{force:!1},()=>F(Z,{initialFocus:p,containers:W,features:O.value?V(ce.value,{parent:Z.features.RestoreFocus,leaf:Z.features.All&~Z.features.FocusLock}):Z.features.None},()=>F(ee,{},()=>X({ourProps:S,theirProps:{...$,...a},slot:me,attrs:a,slots:l,visible:h.value===0,features:Ee.RenderStrategy|Ee.Static,name:"Dialog"})))))),F(ae)])}}}),Wt=q({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:l}){var n;let o=(n=e.id)!=null?n:`headlessui-dialog-panel-${Fe()}`,r=xe("DialogPanel");l({el:r.panelRef,$el:r.panelRef});function i(s){s.stopPropagation()}return()=>{let{...s}=e,u={id:o,ref:r.panelRef,onClick:i};return X({ourProps:u,theirProps:s,slot:{open:r.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}});function It(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function we(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Se=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Se||{});function Yt(e,t){let a=de();if(!e)return a.dispose;let{transitionDuration:l,transitionDelay:n}=getComputedStyle(e),[o,r]=[l,n].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return s});return o!==0?a.setTimeout(()=>t("finished"),o+r):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Ue(e,t,a,l,n,o){let r=de(),i=o!==void 0?It(o):()=>{};return se(e,...n),we(e,...t,...a),r.nextFrame(()=>{se(e,...a),we(e,...l),r.add(Yt(e,s=>(se(e,...l,...t),we(e,...n),i(s))))}),r.add(()=>se(e,...t,...a,...l,...n)),r.add(()=>i("cancelled")),r.dispose}function P(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Le=Symbol("TransitionContext");var qt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(qt||{});function zt(){return z(Le,null)!==null}function Kt(){let e=z(Le,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Qt(){let e=z(Ce,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ce=Symbol("NestingContext");function fe(e){return"children"in e?fe(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ge(e){let t=v([]),a=v(!1);C(()=>a.value=!0),U(()=>a.value=!1);function l(o,r=H.Hidden){let i=t.value.findIndex(({id:s})=>s===o);i!==-1&&(V(r,{[H.Unmount](){t.value.splice(i,1)},[H.Hidden](){t.value[i].state="hidden"}}),!fe(t)&&a.value&&(e==null||e()))}function n(o){let r=t.value.find(({id:i})=>i===o);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:o,state:"visible"}),()=>l(o,H.Unmount)}return{children:t,register:n,unregister:l}}let Je=Ee.RenderStrategy,Xe=q({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:l,expose:n}){let o=v(0);function r(){o.value|=L.Opening,t("beforeEnter")}function i(){o.value&=~L.Opening,t("afterEnter")}function s(){o.value|=L.Closing,t("beforeLeave")}function u(){o.value&=~L.Closing,t("afterLeave")}if(!zt()&&ct())return()=>F(_e,{...e,onBeforeEnter:r,onAfterEnter:i,onBeforeLeave:s,onAfterLeave:u},l);let c=v(null),w=d(()=>e.unmount?H.Unmount:H.Hidden);n({el:c,$el:c});let{show:m,appear:y}=Kt(),{register:g,unregister:b}=Qt(),h=v(m.value?"visible":"hidden"),O={value:!0},T=Fe(),R={value:!1},_=Ge(()=>{!R.value&&h.value!=="hidden"&&(h.value="hidden",b(T),u())});C(()=>{let A=g(T);U(A)}),j(()=>{if(w.value===H.Hidden&&T){if(m.value&&h.value!=="visible"){h.value="visible";return}V(h.value,{hidden:()=>b(T),visible:()=>g(T)})}});let ee=P(e.enter),W=P(e.enterFrom),te=P(e.enterTo),ae=P(e.entered),ce=P(e.leave),ne=P(e.leaveFrom),ve=P(e.leaveTo);C(()=>{j(()=>{if(h.value==="visible"){let A=E(c);if(A instanceof Comment&&A.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function pe(A){let K=O.value&&!y.value,D=E(c);!D||!(D instanceof HTMLElement)||K||(R.value=!0,m.value&&r(),m.value||s(),A(m.value?Ue(D,ee,W,te,ae,B=>{R.value=!1,B===Se.Finished&&i()}):Ue(D,ce,ne,ve,ae,B=>{R.value=!1,B===Se.Finished&&(fe(_)||(h.value="hidden",b(T),u()))})))}return C(()=>{J([m],(A,K,D)=>{pe(D),O.value=!1},{immediate:!0})}),Y(Ce,_),pt(d(()=>V(h.value,{visible:L.Open,hidden:L.Closed})|o.value)),()=>{let{appear:A,show:K,enter:D,enterFrom:B,enterTo:I,entered:Ae,leave:De,leaveFrom:Be,leaveTo:f,...p}=e,$={ref:c},S={...p,...y.value&&m.value&&mt.isServer?{class:G([a.class,p.class,...ee,...W])}:{}};return X({theirProps:S,ourProps:$,slot:{},slots:l,attrs:a,features:Je,visible:h.value==="visible",name:"TransitionChild"})}}}),Zt=Xe,_e=q({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:l}){let n=Ye(),o=d(()=>e.show===null&&n!==null?(n.value&L.Open)===L.Open:e.show);j(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=v(o.value?"visible":"hidden"),i=Ge(()=>{r.value="hidden"}),s=v(!0),u={show:o,appear:d(()=>e.appear||!s.value)};return C(()=>{j(()=>{s.value=!1,o.value?r.value="visible":fe(i)||(r.value="hidden")})}),Y(Ce,i),Y(Le,u),()=>{let c=vt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),w={unmount:e.unmount};return X({ourProps:{...w,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[F(Zt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...w,...c},l.default)]},attrs:{},features:Je,visible:r.value==="visible",name:"Transition"})}}});const xt=wt(Me.ui.strategy,Me.ui.modal,$t),Gt=q({components:{HDialog:Ut,HDialogPanel:Wt,TransitionRoot:_e,TransitionChild:Xe},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:a,attrs:l}=bt("modal",Ne(e,"ui"),xt,Ne(e,"class")),n=d({get(){return e.modelValue},set(s){t("update:modelValue",s)}}),o=d(()=>e.transition?{...a.value.transition}:{});function r(s){if(e.preventClose){t("close-prevented");return}n.value=s,t("close")}const i=()=>{t("after-leave")};return Et(()=>Tt()),{ui:a,attrs:l,isOpen:n,transitionClass:o,onAfterLeave:i,close:r}}});function Jt(e,t,a,l,n,o){const r=re("TransitionChild"),i=re("HDialogPanel"),s=re("HDialog"),u=re("TransitionRoot");return ke(),He(u,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:Q(()=>[ge(s,he({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:Q(()=>[e.overlay?(ke(),He(r,he({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:Q(()=>[ye("div",{class:G([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):ht("",!0),ye("div",{class:G(e.ui.inner)},[ye("div",{class:G([e.ui.container,!e.fullscreen&&e.ui.padding])},[ge(r,he({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:Q(()=>[ge(i,{class:G([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:Q(()=>[yt(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const ea=gt(Gt,[["render",Jt]]);export{ea as _};
