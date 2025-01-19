import{aX as E,_ as V,o,c as i,x,af as G,n as l,a as h,t as k,l as f,bl as P,y as C,F as U,r as J,d as j,f as q,A as M,B as $,C as O,D as b,s as t,E as d,ad as L,bn as R,G as T}from"./CgZMe2Un.js";import{u as X}from"./CFrT0eEM.js";const H=E,K={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},Q={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},p=O(b.ui.strategy,b.ui.progress,K),W=q({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>p.default.animation,validator(e){return Object.keys(p.animation).includes(e)}},size:{type:String,default:()=>p.default.size,validator(e){return Object.keys(p.progress.size).includes(e)}},color:{type:String,default:()=>p.default.color,validator(e){return b.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:s}=M("progress",$(e,"ui"),p,$(e,"class")),m=t(()=>d(r.value.indicator.container.base,r.value.indicator.container.width,r.value.indicator.container.transition)),v=t(()=>d(r.value.indicator.align,r.value.indicator.width,r.value.indicator.color,r.value.indicator.size[e.size])),u=t(()=>{var g;const a=[r.value.progress.base,r.value.progress.width,r.value.progress.size[e.size],r.value.progress.rounded,r.value.progress.track,r.value.progress.bar,(g=r.value.progress.color)==null?void 0:g.replaceAll("{color}",e.color),r.value.progress.background,r.value.progress.indeterminate.base,r.value.progress.indeterminate.rounded];return w.value&&a.push(r.value.animation[e.animation]),d(...a)}),n=t(()=>{var a;return d(r.value.steps.base,(a=r.value.steps.color)==null?void 0:a.replaceAll("{color}",e.color),r.value.steps.size[e.size])}),c=t(()=>d(r.value.step.base,r.value.step.align)),z=t(()=>d(r.value.step.active)),S=t(()=>d(r.value.step.first));function A(a){return a===Number(e.value)}function B(a){return a===0}function y(a){a=Number(a);const g=[c.value];return B(a)&&g.push(S.value),A(a)&&g.push(z.value),g.join(" ")}const w=t(()=>e.value===void 0||e.value===null),F=t(()=>Array.isArray(e.max)),I=t(()=>w.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),D=t(()=>{if(!w.value)switch(!0){case e.value<0:return 0;case e.value>I.value:return 100;default:return e.value/I.value*100}});return{ui:r,attrs:s,indicatorContainerClass:m,indicatorClass:v,progressClass:u,stepsClass:n,stepClasses:y,isIndeterminate:w,isSteps:F,realMax:I,percent:D}}}),Y=["aria-valuemax","aria-valuenow"];function Z(e,r,s,m,v,u){return o(),i("div",{class:l(e.ui.wrapper),role:"progressbar"},[e.indicator||e.$slots.indicator?x(e.$slots,"indicator",P(C({key:0},{percent:e.percent})),()=>[e.isSteps?f("",!0):(o(),i("div",{key:0,class:l(e.indicatorContainerClass),style:G({width:`${e.percent}%`})},[h("div",{class:l(e.indicatorClass)},k(Math.round(e.percent))+"% ",3)],6))],!0):f("",!0),h("progress",C({"aria-valuemax":e.realMax,"aria-valuenow":e.value,class:e.progressClass},{value:e.value,max:e.realMax,...e.attrs}),k(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17,Y),e.isSteps?(o(),i("div",{key:1,class:l(e.stepsClass)},[(o(!0),i(U,null,J(e.max,(n,c)=>(o(),i("div",{key:c,class:l(e.stepClasses(c))},[x(e.$slots,`step-${c}`,C({ref_for:!0},{step:n}),()=>[j(k(n),1)],!0)],2))),128))],2)):f("",!0)],2)}const ne=V(W,[["render",Z],["__scopeId","data-v-157fbd8e"]]),N=O(b.ui.strategy,b.ui.checkbox,Q),_=q({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>N.default.color,validator(e){return b.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:s,attrs:m}=M("checkbox",$(e,"ui"),N,$(e,"class")),{emitFormChange:v,color:u,name:n,inputId:c}=X(e),z=c.value??H(),S=t({get(){return e.modelValue},set(y){r("update:modelValue",y)}}),A=y=>{r("change",y.target.checked),v()},B=t(()=>T(d(s.value.base,s.value.form,s.value.rounded,s.value.background,s.value.border,u.value&&s.value.ring.replaceAll("{color}",u.value),u.value&&s.value.color.replaceAll("{color}",u.value)),e.inputClass));return{ui:s,attrs:m,toggle:S,inputId:z,name:n,inputClass:B,onChange:A}}}),ee=["data-n-ids"],re=["id","name","required","value","disabled","indeterminate"],ae=["for"];function te(e,r,s,m,v,u){return o(),i("div",{class:l(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[h("div",{class:l(e.ui.container)},[L(h("input",C({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=n=>e.toggle=n),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:r[1]||(r[1]=(...n)=>e.onChange&&e.onChange(...n))}),null,16,re),[[R,e.toggle]])],2),e.label||e.$slots.label?(o(),i("div",{key:0,class:l(e.ui.inner)},[h("label",{for:e.inputId,class:l(e.ui.label)},[x(e.$slots,"label",{label:e.label},()=>[j(k(e.label),1)]),e.required?(o(),i("span",{key:0,class:l(e.ui.required)},"*",2)):f("",!0)],10,ae),e.help||e.$slots.help?(o(),i("p",{key:0,class:l(e.ui.help)},[x(e.$slots,"help",{help:e.help},()=>[j(k(e.help),1)])],2)):f("",!0)],2)):f("",!0)],10,ee)}const oe=V(_,[["render",te]]);export{ne as _,oe as a};
