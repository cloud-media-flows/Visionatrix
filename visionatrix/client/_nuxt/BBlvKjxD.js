import{_ as A,o as r,c as $,s as b,i as h,v as p,k as M,l as g,F as E,r as W,f as S,y as V,z as w,A as N,B as k,O as y,a$ as J,w as R,q as P,at as X,D as H,C as K}from"./fH7QqWsv.js";const Q={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},T={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}},d=N(k.ui.strategy,k.ui.pagination,T),Y=N(k.ui.strategy,k.ui.button,J),Z=S({components:{UButton:M},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},disabled:{type:Boolean,default:!1},size:{type:String,default:()=>d.default.size,validator(e){return Object.keys(Y.size).includes(e)}},to:{type:Function,default:null},activeButton:{type:Object,default:()=>d.default.activeButton},inactiveButton:{type:Object,default:()=>d.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>d.default.firstButton},lastButton:{type:Object,default:()=>d.default.lastButton},prevButton:{type:Object,default:()=>d.default.prevButton},nextButton:{type:Object,default:()=>d.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:s}){const{ui:m,attrs:B}=V("pagination",w(e,"ui"),d,w(e,"class")),o=y({get(){return e.modelValue},set(n){s("update:modelValue",n)}}),v=y(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(n,l)=>l+1)),f=y(()=>{const n=v.value.length,l=o.value,F=Math.max(e.max,5),u=Math.floor((Math.min(F,n)-5)/2),G=l-u,O=l+u,L=G-1>1,j=O+1<n,a=[];if(n<=F){for(let i=1;i<=n;i++)a.push(i);return a}if(a.push(1),L&&a.push(e.divider),!j){const i=l+u+2-n;for(let c=l-u-i;c<=l-u-1;c++)a.push(c)}for(let i=Math.max(2,G);i<=Math.min(n,O);i++)a.push(i);if(!L){const i=1-(l-u-2);for(let c=l+u+1;c<=l+u+i;c++)a.push(c)}return j&&a.push(e.divider),O<n&&a.push(n),a.length>=3&&a[1]===e.divider&&a[2]===3&&(a[1]=2),a.length>=3&&a[a.length-2]===e.divider&&a[a.length-1]===a.length&&(a[a.length-2]=a.length-1),a}),t=y(()=>o.value>1),C=y(()=>o.value<v.value.length);function z(){t.value&&(o.value=1)}function U(){C.value&&(o.value=v.value.length)}function q(n){typeof n!="string"&&(o.value=n)}function D(){t.value&&o.value--}function I(){C.value&&o.value++}return{ui:m,attrs:B,currentPage:o,pages:v,displayedPages:f,canGoLastOrNext:C,canGoFirstOrPrev:t,onClickPrev:D,onClickNext:I,onClickPage:q,onClickFirst:z,onClickLast:U}}});function x(e,s,m,B,o,v){const f=M;return r(),$("div",p({class:e.ui.wrapper},e.attrs),[b(e.$slots,"first",{onClick:e.onClickFirst,canGoFirst:e.canGoFirstOrPrev},()=>{var t;return[e.firstButton&&e.showFirst?(r(),h(f,p({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,1),disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]}),b(e.$slots,"prev",{onClick:e.onClickPrev,canGoPrev:e.canGoFirstOrPrev},()=>{var t;return[e.prevButton?(r(),h(f,p({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,e.currentPage-1),disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]}),(r(!0),$(E,null,W(e.displayedPages,(t,C)=>{var z;return r(),h(f,p({key:`${t}-${C}`,to:typeof t=="number"?(z=e.to)==null?void 0:z.call(e,t):null,size:e.size,disabled:e.disabled,label:`${t}`,ref_for:!0},t===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof t=="string","z-[1]":t===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(t)}),null,16,["to","size","disabled","label","class","onClick"])}),128)),b(e.$slots,"next",{onClick:e.onClickNext,canGoNext:e.canGoLastOrNext},()=>{var t;return[e.nextButton?(r(),h(f,p({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,e.currentPage+1),disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]}),b(e.$slots,"last",{onClick:e.onClickLast,canGoLast:e.canGoLastOrNext},()=>{var t;return[e.lastButton&&e.showLast?(r(),h(f,p({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,e.pages.length),disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]})],16)}const ne=A(Z,[["render",x]]),_=N(k.ui.strategy,k.ui.card,Q),ee=S({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:m}=V("card",w(e,"ui"),_),B=y(()=>H(K(s.value.base,s.value.rounded,s.value.divide,s.value.ring,s.value.shadow,s.value.background),e.class));return{ui:s,attrs:m,cardClass:B}}});function te(e,s,m,B,o,v){return r(),h(X(e.$attrs.onSubmit?"form":e.as),p({class:e.cardClass},e.attrs),{default:R(()=>[e.$slots.header?(r(),$("div",{key:0,class:P([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[b(e.$slots,"header")],2)):g("",!0),e.$slots.default?(r(),$("div",{key:1,class:P([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[b(e.$slots,"default")],2)):g("",!0),e.$slots.footer?(r(),$("div",{key:2,class:P([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[b(e.$slots,"footer")],2)):g("",!0)]),_:3},16,["class"])}const se=A(ee,[["render",te]]);export{se as _,ne as a};