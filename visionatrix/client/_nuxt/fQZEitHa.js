import{f as H,M as h,v as d,aX as qe,S as D,ai as Y,s as te,aw as U,aY as j,ax as E,aZ as pe,aF as M,a_ as vt,a$ as Ge,b0 as pt,b1 as T,b2 as ke,b3 as Ae,aN as W,b4 as ce,ay as ae,F as Ke,b5 as mt,b6 as gt,av as q,aL as ee,au as ye,aA as Je,aB as A,b7 as ht,b8 as yt,aH as bt,Y as wt,aD as De,b9 as St,ba as Et,bb as je,aC as Be,aG as $t,bc as Tt,bd as Qe,be as Ct,bf as x,aM as Ft,bg as Lt,n as k,_ as Xe,ad as ie,o as Z,i as Oe,w as X,b as _,B as me,a as ge,l as he,A as kt,D as Ze,E as Ie,G as _e,H as se,aU as et,aV as tt,c as Ce,h as at,J as At,I as ne}from"./B86QgrFR.js";import{t as Ue,a as lt,o as be,d as Dt,p as Bt,u as Ot}from"./Di9Y9BMZ.js";const It={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500",loading:"animate-spin text-{color}-500 dark:text-{color}-400"},default:{onIcon:null,offIcon:null,loadingIcon:"i-heroicons-arrow-path-20-solid",color:"primary",size:"md"}},Rt={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function nt(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let o=E(a);o instanceof HTMLElement&&t.add(o)}return t}var ot=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ot||{});let oe=Object.assign(H({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:h(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:o}){let n=h(null);o({el:n,$el:n});let l=d(()=>qe(n)),r=h(!1);D(()=>r.value=!0),Y(()=>r.value=!1),Pt({ownerDocument:l},d(()=>r.value&&!!(e.features&16)));let i=Vt({ownerDocument:l,container:n,initialFocus:d(()=>e.initialFocus)},d(()=>r.value&&!!(e.features&2)));Nt({ownerDocument:l,container:n,containers:e.containers,previousActiveElement:i},d(()=>r.value&&!!(e.features&8)));let s=pt();function u(g){let m=E(n);m&&(S=>S())(()=>{W(s.value,{[ce.Forwards]:()=>{pe(m,M.First,{skipElements:[g.relatedTarget]})},[ce.Backwards]:()=>{pe(m,M.Last,{skipElements:[g.relatedTarget]})}})})}let f=h(!1);function w(g){g.key==="Tab"&&(f.value=!0,requestAnimationFrame(()=>{f.value=!1}))}function v(g){if(!r.value)return;let m=nt(e.containers);E(n)instanceof HTMLElement&&m.add(E(n));let S=g.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(rt(m,S)||(f.value?pe(E(n),W(s.value,{[ce.Forwards]:()=>M.Next,[ce.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&j(g.target)))}return()=>{let g={},m={ref:n,onKeydown:w,onFocusout:v},{features:S,initialFocus:y,containers:C,...c}=e;return T(Ke,[!!(S&4)&&T(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Ae.Focusable}),ae({ourProps:m,theirProps:{...t,...c},slot:g,attrs:t,slots:a,name:"FocusTrap"}),!!(S&4)&&T(ke,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:Ae.Focusable})])}}}),{features:ot});function Ht(e){let t=h(Ue.slice());return te([e],([a],[o])=>{o===!0&&a===!1?lt(()=>{t.value.splice(0)}):o===!1&&a===!0&&(t.value=Ue.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(o=>o!=null&&o.isConnected))!=null?a:null}}function Pt({ownerDocument:e},t){let a=Ht(t);D(()=>{U(()=>{var o,n;t.value||((o=e.value)==null?void 0:o.activeElement)===((n=e.value)==null?void 0:n.body)&&j(a())},{flush:"post"})}),Y(()=>{t.value&&j(a())})}function Vt({ownerDocument:e,container:t,initialFocus:a},o){let n=h(null),l=h(!1);return D(()=>l.value=!0),Y(()=>l.value=!1),D(()=>{te([t,a,o],(r,i)=>{if(r.every((u,f)=>(i==null?void 0:i[f])===u)||!o.value)return;let s=E(t);s&&lt(()=>{var u,f;if(!l.value)return;let w=E(a),v=(u=e.value)==null?void 0:u.activeElement;if(w){if(w===v){n.value=v;return}}else if(s.contains(v)){n.value=v;return}w?j(w):pe(s,M.First|M.NoScroll)===vt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(f=e.value)==null?void 0:f.activeElement})},{immediate:!0,flush:"post"})}),n}function Nt({ownerDocument:e,container:t,containers:a,previousActiveElement:o},n){var l;Ge((l=e.value)==null?void 0:l.defaultView,"focus",r=>{if(!n.value)return;let i=nt(a);E(t)instanceof HTMLElement&&i.add(E(t));let s=o.value;if(!s)return;let u=r.target;u&&u instanceof HTMLElement?rt(i,u)?(o.value=u,j(u)):(r.preventDefault(),r.stopPropagation(),j(s)):j(o.value)},!0)}function rt(e,t){for(let a of e)if(a.contains(t))return!0;return!1}function Mt(e){let t=mt(e.getSnapshot());return Y(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function xt(e,t){let a=e(),o=new Set;return{getSnapshot(){return a},subscribe(n){return o.add(n),()=>o.delete(n)},dispatch(n,...l){let r=t[n].call(a,...l);r&&(a=r,o.forEach(i=>i()))}}}function zt(){let e;return{before({doc:t}){var a;let o=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-o.clientWidth},after({doc:t,d:a}){let o=t.documentElement,n=o.clientWidth-o.offsetWidth,l=e-n;a.style(o,"paddingRight",`${l}px`)}}}function jt(){return gt()?{before({doc:e,d:t,meta:a}){function o(n){return a.containers.flatMap(l=>l()).some(l=>l.contains(n))}t.microTask(()=>{var n;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=be();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let l=(n=window.scrollY)!=null?n:window.pageYOffset,r=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let s=i.target.closest("a");if(!s)return;let{hash:u}=new URL(s.href),f=e.querySelector(u);f&&!o(f)&&(r=f)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(o(i.target)){let s=i.target;for(;s.parentElement&&o(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(o(i.target)){let s=i.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let s=(i=window.scrollY)!=null?i:window.pageYOffset;l!==s&&window.scrollTo(0,l),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})})}}:{}}function Ut(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Wt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let z=xt(()=>new Map,{PUSH(e,t){var a;let o=(a=this.get(e))!=null?a:{doc:e,count:0,d:be(),meta:new Set};return o.count++,o.meta.add(t),this.set(e,o),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let o={doc:e,d:t,meta:Wt(a)},n=[jt(),zt(),Ut()];n.forEach(({before:l})=>l==null?void 0:l(o)),n.forEach(({after:l})=>l==null?void 0:l(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});z.subscribe(()=>{let e=z.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let o=t.get(a.doc)==="hidden",n=a.count!==0;(n&&!o||!n&&o)&&z.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&z.dispatch("TEARDOWN",a)}});function Yt(e,t,a){let o=Mt(z),n=d(()=>{let l=e.value?o.value.get(e.value):void 0;return l?l.count>0:!1});return te([e,t],([l,r],[i],s)=>{if(!l||!r)return;z.dispatch("PUSH",l,a);let u=!1;s(()=>{u||(z.dispatch("POP",i??l,a),u=!0)})},{immediate:!0}),n}let Fe=new Map,re=new Map;function We(e,t=h(!0)){U(a=>{var o;if(!t.value)return;let n=E(e);if(!n)return;a(function(){var r;if(!n)return;let i=(r=re.get(n))!=null?r:1;if(i===1?re.delete(n):re.set(n,i-1),i!==1)return;let s=Fe.get(n);s&&(s["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",s["aria-hidden"]),n.inert=s.inert,Fe.delete(n))});let l=(o=re.get(n))!=null?o:0;re.set(n,l+1),l===0&&(Fe.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}let it=Symbol("StackContext");var Re=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Re||{});function qt(){return q(it,()=>{})}function Gt({type:e,enabled:t,element:a,onUpdate:o}){let n=qt();function l(...r){o==null||o(...r),n(...r)}D(()=>{te(t,(r,i)=>{r?l(0,e,a):i===!0&&l(1,e,a)},{immediate:!0,flush:"sync"})}),Y(()=>{t.value&&l(1,e,a)}),ee(it,l)}let Kt=Symbol("DescriptionContext");function Jt({slot:e=h({}),name:t="Description",props:a={}}={}){let o=h([]);function n(l){return o.value.push(l),()=>{let r=o.value.indexOf(l);r!==-1&&o.value.splice(r,1)}}return ee(Kt,{register:n,slot:e,name:t,props:a}),d(()=>o.value.length>0?o.value.join(" "):void 0)}var Qt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qt||{});let He=Symbol("DialogContext");function st(e){let t=q(He,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,st),a}return t}let fe="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Xt=H({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:fe},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:o,expose:n}){var l,r;let i=(l=e.id)!=null?l:`headlessui-dialog-${ye()}`,s=h(!1);D(()=>{s.value=!0});let u=!1,f=d(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(u||(u=!0,console.warn(`Invalid role [${f}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),w=h(0),v=Je(),g=d(()=>e.open===fe&&v!==null?(v.value&A.Open)===A.Open:e.open),m=h(null),S=d(()=>qe(m));if(n({el:m,$el:m}),!(e.open!==fe||v!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof g.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${g.value===fe?void 0:e.open}`);let y=d(()=>s.value&&g.value?0:1),C=d(()=>y.value===0),c=d(()=>w.value>1),$=q(He,null)!==null,[G,P]=ht(),{resolveContainers:O,mainTreeNodeRef:K,MainTreeNode:J}=yt({portals:G,defaultContainers:[d(()=>{var p;return(p=Q.panelRef.value)!=null?p:m.value})]}),Se=d(()=>c.value?"parent":"leaf"),ue=d(()=>v!==null?(v.value&A.Closing)===A.Closing:!1),Ee=d(()=>$||ue.value?!1:C.value),$e=d(()=>{var p,b,F;return(F=Array.from((b=(p=S.value)==null?void 0:p.querySelectorAll("body > *"))!=null?b:[]).find(L=>L.id==="headlessui-portal-root"?!1:L.contains(E(K))&&L instanceof HTMLElement))!=null?F:null});We($e,Ee);let B=d(()=>c.value?!0:C.value),le=d(()=>{var p,b,F;return(F=Array.from((b=(p=S.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(L=>L.contains(E(K))&&L instanceof HTMLElement))!=null?F:null});We(le,B),Gt({type:"Dialog",enabled:d(()=>y.value===0),element:m,onUpdate:(p,b)=>{if(b==="Dialog")return W(p,{[Re.Add]:()=>w.value+=1,[Re.Remove]:()=>w.value-=1})}});let I=Jt({name:"DialogDescription",slot:d(()=>({open:g.value}))}),R=h(null),Q={titleId:R,panelRef:h(null),dialogState:y,setTitleId(p){R.value!==p&&(R.value=p)},close(){t("close",!1)}};ee(He,Q);let Me=d(()=>!(!C.value||c.value));bt(O,(p,b)=>{p.preventDefault(),Q.close(),wt(()=>b==null?void 0:b.focus())},Me);let xe=d(()=>!(c.value||y.value!==0));Ge((r=S.value)==null?void 0:r.defaultView,"keydown",p=>{xe.value&&(p.defaultPrevented||p.key===De.Escape&&(p.preventDefault(),p.stopPropagation(),Q.close()))});let ze=d(()=>!(ue.value||y.value!==0||$));return Yt(S,ze,p=>{var b;return{containers:[...(b=p.containers)!=null?b:[],O]}}),U(p=>{if(y.value!==0)return;let b=E(m);if(!b)return;let F=new ResizeObserver(L=>{for(let Te of L){let de=Te.target.getBoundingClientRect();de.x===0&&de.y===0&&de.width===0&&de.height===0&&Q.close()}});F.observe(b),p(()=>F.disconnect())}),()=>{let{open:p,initialFocus:b,...F}=e,L={...a,ref:m,id:i,role:f.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":R.value,"aria-describedby":I.value},Te={open:y.value===0};return T(je,{force:!0},()=>[T(St,()=>T(Et,{target:m.value},()=>T(je,{force:!1},()=>T(oe,{initialFocus:b,containers:O,features:C.value?W(Se.value,{parent:oe.features.RestoreFocus,leaf:oe.features.All&~oe.features.FocusLock}):oe.features.None},()=>T(P,{},()=>ae({ourProps:L,theirProps:{...F,...a},slot:Te,attrs:a,slots:o,visible:y.value===0,features:Be.RenderStrategy|Be.Static,name:"Dialog"})))))),T(J)])}}}),Zt=H({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:o}){var n;let l=(n=e.id)!=null?n:`headlessui-dialog-panel-${ye()}`,r=st("DialogPanel");o({el:r.panelRef,$el:r.panelRef});function i(s){s.stopPropagation()}return()=>{let{...s}=e,u={id:l,ref:r.panelRef,onClick:i};return ae({ourProps:u,theirProps:s,slot:{open:r.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}}),_t=Symbol("GroupContext"),ea=H({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:t,attrs:a,slots:o,expose:n}){var l;let r=(l=e.id)!=null?l:`headlessui-switch-${ye()}`,i=q(_t,null),[s,u]=Dt(d(()=>e.modelValue),c=>t("update:modelValue",c),d(()=>e.defaultChecked));function f(){u(!s.value)}let w=h(null),v=i===null?w:i.switchRef,g=$t(d(()=>({as:e.as,type:a.type})),v);n({el:v,$el:v});function m(c){c.preventDefault(),f()}function S(c){c.key===De.Space?(c.preventDefault(),f()):c.key===De.Enter&&Bt(c.currentTarget)}function y(c){c.preventDefault()}let C=d(()=>{var c,$;return($=(c=E(v))==null?void 0:c.closest)==null?void 0:$.call(c,"form")});return D(()=>{te([C],()=>{if(!C.value||e.defaultChecked===void 0)return;function c(){u(e.defaultChecked)}return C.value.addEventListener("reset",c),()=>{var $;($=C.value)==null||$.removeEventListener("reset",c)}},{immediate:!0})}),()=>{let{name:c,value:$,form:G,tabIndex:P,...O}=e,K={checked:s.value},J={id:r,ref:v,role:"switch",type:g.value,tabIndex:P===-1?0:P,"aria-checked":s.value,"aria-labelledby":i==null?void 0:i.labelledby.value,"aria-describedby":i==null?void 0:i.describedby.value,onClick:m,onKeyup:S,onKeypress:y};return T(Ke,[c!=null&&s.value!=null?T(ke,Tt({features:Ae.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:s.value,form:G,disabled:O.disabled,name:c,value:$})):null,ae({ourProps:J,theirProps:{...a,...Qe(O,["modelValue","defaultChecked"])},slot:K,attrs:a,slots:o,name:"Switch"})])}}});function ta(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function Le(e,...t){e&&t.length>0&&e.classList.add(...t)}function ve(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Pe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Pe||{});function aa(e,t){let a=be();if(!e)return a.dispose;let{transitionDuration:o,transitionDelay:n}=getComputedStyle(e),[l,r]=[o,n].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,f)=>f-u);return s});return l!==0?a.setTimeout(()=>t("finished"),l+r):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Ye(e,t,a,o,n,l){let r=be(),i=l!==void 0?ta(l):()=>{};return ve(e,...n),Le(e,...t,...a),r.nextFrame(()=>{ve(e,...a),Le(e,...o),r.add(aa(e,s=>(ve(e,...o,...t),Le(e,...n),i(s))))}),r.add(()=>ve(e,...t,...a,...o,...n)),r.add(()=>i("cancelled")),r.dispose}function V(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Ve=Symbol("TransitionContext");var la=(e=>(e.Visible="visible",e.Hidden="hidden",e))(la||{});function na(){return q(Ve,null)!==null}function oa(){let e=q(Ve,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function ra(){let e=q(Ne,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ne=Symbol("NestingContext");function we(e){return"children"in e?we(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ut(e){let t=h([]),a=h(!1);D(()=>a.value=!0),Y(()=>a.value=!1);function o(l,r=x.Hidden){let i=t.value.findIndex(({id:s})=>s===l);i!==-1&&(W(r,{[x.Unmount](){t.value.splice(i,1)},[x.Hidden](){t.value[i].state="hidden"}}),!we(t)&&a.value&&(e==null||e()))}function n(l){let r=t.value.find(({id:i})=>i===l);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:l,state:"visible"}),()=>o(l,x.Unmount)}return{children:t,register:n,unregister:o}}let dt=Be.RenderStrategy,ct=H({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:o,expose:n}){let l=h(0);function r(){l.value|=A.Opening,t("beforeEnter")}function i(){l.value&=~A.Opening,t("afterEnter")}function s(){l.value|=A.Closing,t("beforeLeave")}function u(){l.value&=~A.Closing,t("afterLeave")}if(!na()&&Ct())return()=>T(ft,{...e,onBeforeEnter:r,onAfterEnter:i,onBeforeLeave:s,onAfterLeave:u},o);let f=h(null),w=d(()=>e.unmount?x.Unmount:x.Hidden);n({el:f,$el:f});let{show:v,appear:g}=oa(),{register:m,unregister:S}=ra(),y=h(v.value?"visible":"hidden"),C={value:!0},c=ye(),$={value:!1},G=ut(()=>{!$.value&&y.value!=="hidden"&&(y.value="hidden",S(c),u())});D(()=>{let B=m(c);Y(B)}),U(()=>{if(w.value===x.Hidden&&c){if(v.value&&y.value!=="visible"){y.value="visible";return}W(y.value,{hidden:()=>S(c),visible:()=>m(c)})}});let P=V(e.enter),O=V(e.enterFrom),K=V(e.enterTo),J=V(e.entered),Se=V(e.leave),ue=V(e.leaveFrom),Ee=V(e.leaveTo);D(()=>{U(()=>{if(y.value==="visible"){let B=E(f);if(B instanceof Comment&&B.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function $e(B){let le=C.value&&!g.value,I=E(f);!I||!(I instanceof HTMLElement)||le||($.value=!0,v.value&&r(),v.value||s(),B(v.value?Ye(I,P,O,K,J,R=>{$.value=!1,R===Pe.Finished&&i()}):Ye(I,Se,ue,Ee,J,R=>{$.value=!1,R===Pe.Finished&&(we(G)||(y.value="hidden",S(c),u()))})))}return D(()=>{te([v],(B,le,I)=>{$e(I),C.value=!1},{immediate:!0})}),ee(Ne,G),Ft(d(()=>W(y.value,{visible:A.Open,hidden:A.Closed})|l.value)),()=>{let{appear:B,show:le,enter:I,enterFrom:R,enterTo:Q,entered:Me,leave:xe,leaveFrom:ze,leaveTo:p,...b}=e,F={ref:f},L={...b,...g.value&&v.value&&Lt.isServer?{class:k([a.class,b.class,...P,...O])}:{}};return ae({theirProps:L,ourProps:F,slot:{},slots:o,attrs:a,features:dt,visible:y.value==="visible",name:"TransitionChild"})}}}),ia=ct,ft=H({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:o}){let n=Je(),l=d(()=>e.show===null&&n!==null?(n.value&A.Open)===A.Open:e.show);U(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=h(l.value?"visible":"hidden"),i=ut(()=>{r.value="hidden"}),s=h(!0),u={show:l,appear:d(()=>e.appear||!s.value)};return D(()=>{U(()=>{s.value=!1,l.value?r.value="visible":we(i)||(r.value="hidden")})}),ee(Ne,i),ee(Ve,u),()=>{let f=Qe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),w={unmount:e.unmount};return ae({ourProps:{...w,as:"template"},theirProps:{},slot:{},slots:{...o,default:()=>[T(ia,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...w,...f},o.default)]},attrs:{},features:dt,visible:r.value==="visible",name:"Transition"})}}});const sa=_e(se.ui.strategy,se.ui.modal,Rt),ua=H({components:{HDialog:Xt,HDialogPanel:Zt,TransitionRoot:ft,TransitionChild:ct},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:a,attrs:o}=Ze("modal",Ie(e,"ui"),sa,Ie(e,"class")),n=d({get(){return e.modelValue},set(s){t("update:modelValue",s)}}),l=d(()=>e.transition?{...a.value.transition}:{});function r(s){if(e.preventClose){t("close-prevented");return}n.value=s,t("close")}const i=()=>{t("after-leave")};return et(()=>tt()),{ui:a,attrs:o,isOpen:n,transitionClass:l,onAfterLeave:i,close:r}}});function da(e,t,a,o,n,l){const r=ie("TransitionChild"),i=ie("HDialogPanel"),s=ie("HDialog"),u=ie("TransitionRoot");return Z(),Oe(u,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:X(()=>[_(s,me({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:X(()=>[e.overlay?(Z(),Oe(r,me({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:X(()=>[ge("div",{class:k([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):he("",!0),ge("div",{class:k(e.ui.inner)},[ge("div",{class:k([e.ui.container,!e.fullscreen&&e.ui.padding])},[_(r,me({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:X(()=>[_(i,{class:k([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:X(()=>[kt(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const ma=Xe(ua,[["render",da]]),N=_e(se.ui.strategy,se.ui.toggle,It),ca=H({components:{HSwitch:ea,UIcon:at},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onIcon:{type:String,default:()=>N.default.onIcon},offIcon:{type:String,default:()=>N.default.offIcon},loadingIcon:{type:String,default:()=>N.default.loadingIcon},color:{type:String,default:()=>N.default.color,validator(e){return se.ui.colors.includes(e)}},size:{type:String,default:()=>N.default.size,validator(e){return Object.keys(N.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:a,attrs:o}=Ze("toggle",Ie(e,"ui"),N),{emitFormChange:n,color:l,inputId:r,name:i}=Ot(e),s=d({get(){return e.modelValue},set(m){t("update:modelValue",m),t("change",m),n()}}),u=d(()=>At(ne(a.value.base,a.value.size[e.size],a.value.rounded,l.value&&a.value.ring.replaceAll("{color}",l.value),l.value&&(s.value?a.value.active:a.value.inactive).replaceAll("{color}",l.value)),e.class)),f=d(()=>ne(a.value.container.base,a.value.container.size[e.size],s.value?a.value.container.active[e.size]:a.value.container.inactive)),w=d(()=>ne(a.value.icon.size[e.size],l.value&&a.value.icon.on.replaceAll("{color}",l.value))),v=d(()=>ne(a.value.icon.size[e.size],l.value&&a.value.icon.off.replaceAll("{color}",l.value))),g=d(()=>ne(a.value.icon.size[e.size],l.value&&a.value.icon.loading.replaceAll("{color}",l.value)));return et(()=>tt()),{ui:a,attrs:o,name:i,inputId:r,active:s,switchClass:u,containerClass:f,onIconClass:w,offIconClass:v,loadingIconClass:g}}});function fa(e,t,a,o,n,l){const r=at,i=ie("HSwitch");return Z(),Oe(i,me({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":t[0]||(t[0]=s=>e.active=s),name:e.name,disabled:e.disabled||e.loading,class:e.switchClass},e.attrs),{default:X(()=>[ge("span",{class:k(e.containerClass)},[e.loading?(Z(),Ce("span",{key:0,class:k([e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[_(r,{name:e.loadingIcon,class:k(e.loadingIconClass)},null,8,["name","class"])],2)):he("",!0),!e.loading&&e.onIcon?(Z(),Ce("span",{key:1,class:k([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[_(r,{name:e.onIcon,class:k(e.onIconClass)},null,8,["name","class"])],2)):he("",!0),!e.loading&&e.offIcon?(Z(),Ce("span",{key:2,class:k([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[_(r,{name:e.offIcon,class:k(e.offIconClass)},null,8,["name","class"])],2)):he("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const ga=Xe(ca,[["render",fa]]);export{ma as _,ga as a};
