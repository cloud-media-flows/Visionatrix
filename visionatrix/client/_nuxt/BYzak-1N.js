import{_ as J,o,c as r,a as M,v as y,i as B,n as s,h as V,l as g,x as A,$ as R,d as L,t as O,F as z,r as j,U,m as X,f as H,z as K,B as Q,C as p,A as W,P as u,E as F,D as I,b as D,bj as ue,bk as se,X as E}from"./BkmaeSbd.js";import{u as de}from"./DOs2DJj1.js";const ce={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},m=Q(p.ui.strategy,p.ui.alert,ce),ge=H({components:{UIcon:V,UAvatar:R,UButton:X},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>m.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>m.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>m.default.color,validator(e){return[...p.ui.colors,...Object.keys(m.color)].includes(e)}},variant:{type:String,default:()=>m.default.variant,validator(e){return[...Object.keys(m.variant),...Object.values(m.color).flatMap(a=>Object.keys(a))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:a,attrs:$}=K("alert",W(e,"ui"),m),t=u(()=>{var v,n;const d=((n=(v=a.value.color)==null?void 0:v[e.color])==null?void 0:n[e.variant])||a.value.variant[e.variant];return F(I(a.value.wrapper,a.value.rounded,a.value.shadow,a.value.padding,d==null?void 0:d.replaceAll("{color}",e.color)),e.class)});function C(d){d.click&&d.click()}return{ui:a,attrs:$,alertClass:t,onAction:C,twMerge:F}}});function ve(e,a,$,t,C,d){const v=V,n=R,f=X;return o(),r("div",A({class:e.alertClass},e.attrs),[M("div",{class:s(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[y(e.$slots,"icon",{icon:e.icon},()=>[e.icon?(o(),B(v,{key:0,name:e.icon,class:s(e.ui.icon.base)},null,8,["name","class"])):g("",!0)]),y(e.$slots,"avatar",{avatar:e.avatar},()=>[e.avatar?(o(),B(n,A({key:0},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):g("",!0)]),M("div",{class:s(e.ui.inner)},[e.title||e.$slots.title?(o(),r("p",{key:0,class:s(e.ui.title)},[y(e.$slots,"title",{title:e.title},()=>[L(O(e.title),1)])],2)):g("",!0),e.description||e.$slots.description?(o(),r("div",{key:1,class:s(e.twMerge(e.ui.description,!e.title&&!e.$slots.title&&"mt-0 leading-5"))},[y(e.$slots,"description",{description:e.description},()=>[L(O(e.description),1)])],2)):g("",!0),(e.description||e.$slots.description)&&(e.actions.length||e.$slots.actions)?(o(),r("div",{key:2,class:s(e.ui.actions)},[y(e.$slots,"actions",{},()=>[(o(!0),r(z,null,j(e.actions,(i,k)=>(o(),B(f,A({key:k,ref_for:!0},{...e.ui.default.actionButton||{},...i},{onClick:U(N=>e.onAction(i),["stop"])}),null,16,["onClick"]))),128))])],2)):g("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),r("div",{key:0,class:s(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&(e.actions.length||e.$slots.actions)?y(e.$slots,"actions",{key:0},()=>[(o(!0),r(z,null,j(e.actions,(i,k)=>(o(),B(f,A({key:k,ref_for:!0},{...e.ui.default.actionButton||{},...i},{onClick:U(N=>e.onAction(i),["stop"])}),null,16,["onClick"]))),128))]):g("",!0),e.closeButton?(o(),B(f,A({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:a[0]||(a[0]=U(i=>e.$emit("close"),["stop"]))}),null,16)):g("",!0)],2)):g("",!0)],2)],16)}const Ie=J(ge,[["render",ve]]),c=Q(p.ui.strategy,p.ui.select,ue),fe=H({components:{UIcon:V},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>c.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>c.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(c.size).includes(e)}},color:{type:String,default:()=>c.default.color,validator(e){return[...p.ui.colors,...Object.keys(c.color)].includes(e)}},variant:{type:String,default:()=>c.default.variant,validator(e){return[...Object.keys(c.variant),...Object.values(c.color).flatMap(a=>Object.keys(a))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:a,slots:$}){const{ui:t,attrs:C}=K("select",W(e,"ui"),c,W(e,"class")),{size:d,rounded:v}=se({ui:t,props:e}),{emitFormChange:n,inputId:f,color:i,size:k,name:N}=de(e,c),b=u(()=>d.value??k.value),Y=l=>{a("update:modelValue",l.target.value)},Z=l=>{a("change",l.target.value),n()},_=l=>E(l,e.valueAttribute,""),x=l=>E(l,e.optionAttribute,""),q=l=>["string","number","boolean"].includes(typeof l)?{[e.valueAttribute]:l,[e.optionAttribute]:l}:{...l,[e.valueAttribute]:_(l),[e.optionAttribute]:x(l)},G=u(()=>e.options.map(l=>q(l))),P=u(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...G.value]:G.value),ee=u(()=>{const l=q(e.modelValue),h=P.value.find(w=>w[e.valueAttribute]===l[e.valueAttribute]);return h?h[e.valueAttribute]:""}),te=u(()=>{var h,w;const l=((w=(h=t.value.color)==null?void 0:h[i.value])==null?void 0:w[e.variant])||t.value.variant[e.variant];return F(I(t.value.base,t.value.form,v.value,t.value.size[b.value],e.padded?t.value.padding[b.value]:"p-0",l==null?void 0:l.replaceAll("{color}",i.value),(S.value||$.leading)&&t.value.leading.padding[b.value],(T.value||$.trailing)&&t.value.trailing.padding[b.value]),e.placeholder&&!e.modelValue&&t.value.placeholder,e.selectClass)}),S=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),T=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),ae=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),le=u(()=>e.loading&&!S.value?e.loadingIcon:e.trailingIcon||e.icon),ne=u(()=>I(t.value.icon.leading.wrapper,t.value.icon.leading.pointer,t.value.icon.leading.padding[b.value])),ie=u(()=>I(t.value.icon.base,i.value&&p.ui.colors.includes(i.value)&&t.value.icon.color.replaceAll("{color}",i.value),t.value.icon.size[b.value],e.loading&&t.value.icon.loading)),oe=u(()=>I(t.value.icon.trailing.wrapper,t.value.icon.trailing.pointer,t.value.icon.trailing.padding[b.value])),re=u(()=>I(t.value.icon.base,i.value&&p.ui.colors.includes(i.value)&&t.value.icon.color.replaceAll("{color}",i.value),t.value.icon.size[b.value],e.loading&&!S.value&&t.value.icon.loading));return{ui:t,attrs:C,name:N,inputId:f,normalizedOptionsWithPlaceholder:P,normalizedValue:ee,isLeading:S,isTrailing:T,selectClass:te,leadingIconName:ae,leadingIconClass:ie,leadingWrapperIconClass:ne,trailingIconName:le,trailingIconClass:re,trailingWrapperIconClass:oe,onInput:Y,onChange:Z}}}),be=["id","name","value","required","disabled"],me=["value","label"],ye=["value","selected","disabled","textContent"],pe=["value","selected","disabled","textContent"];function ke(e,a,$,t,C,d){const v=V;return o(),r("div",{class:s(e.ui.wrapper)},[M("select",A({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:a[0]||(a[0]=(...n)=>e.onInput&&e.onInput(...n)),onChange:a[1]||(a[1]=(...n)=>e.onChange&&e.onChange(...n))}),[(o(!0),r(z,null,j(e.normalizedOptionsWithPlaceholder,(n,f)=>(o(),r(z,null,[n.children?(o(),r("optgroup",{key:`${n[e.valueAttribute]}-optgroup-${f}`,value:n[e.valueAttribute],label:n[e.optionAttribute]},[(o(!0),r(z,null,j(n.children,(i,k)=>(o(),r("option",{key:`${i[e.valueAttribute]}-${f}-${k}`,value:i[e.valueAttribute],selected:i[e.valueAttribute]===e.normalizedValue,disabled:i.disabled,textContent:O(i[e.optionAttribute])},null,8,ye))),128))],8,me)):(o(),r("option",{key:`${n[e.valueAttribute]}-${f}`,value:n[e.valueAttribute],selected:n[e.valueAttribute]===e.normalizedValue,disabled:n.disabled,textContent:O(n[e.optionAttribute])},null,8,pe))],64))),256))],16,be),e.isLeading&&e.leadingIconName||e.$slots.leading?(o(),r("span",{key:0,class:s(e.leadingWrapperIconClass)},[y(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[D(v,{name:e.leadingIconName,class:s(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):g("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(o(),r("span",{key:1,class:s(e.trailingWrapperIconClass)},[y(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[D(v,{name:e.trailingIconName,class:s(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):g("",!0)],2)}const Ce=J(fe,[["render",ke],["__scopeId","data-v-9f80dc9e"]]);export{Ie as _,Ce as a};
