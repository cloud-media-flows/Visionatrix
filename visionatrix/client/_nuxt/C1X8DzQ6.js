import{a0 as S,I as O,bv as Z,O as u,_ as G,o as F,c as L,a as p,v as _,s as E,q as I,b as q,h as T,l as M,f as x,y as P,z as $,A as ee,bw as ae,B as z,bi as ne,U as le,Q as te,D as ie,C as b,aA as ue}from"./fH7QqWsv.js";function de(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(l=>setTimeout(()=>{throw l}))}function oe(){let e=[],l={addEventListener(t,a,n,o){return t.addEventListener(a,n,o),l.add(()=>t.removeEventListener(a,n,o))},requestAnimationFrame(...t){let a=requestAnimationFrame(...t);l.add(()=>cancelAnimationFrame(a))},nextFrame(...t){l.requestAnimationFrame(()=>{l.requestAnimationFrame(...t)})},setTimeout(...t){let a=setTimeout(...t);l.add(()=>clearTimeout(a))},microTask(...t){let a={current:!0};return de(()=>{a.current&&t[0]()}),l.add(()=>{a.current=!1})},style(t,a,n){let o=t.style.getPropertyValue(a);return Object.assign(t.style,{[a]:n}),this.add(()=>{Object.assign(t.style,{[a]:o})})},group(t){let a=oe();return t(a),this.add(()=>a.dispose())},add(t){return e.push(t),()=>{let a=e.indexOf(t);if(a>=0)for(let n of e.splice(a,1))n()}},dispose(){for(let t of e.splice(0))t()}};return l}function se(e){function l(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",l))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",l),l())}let C=[];se(()=>{function e(l){l.target instanceof HTMLElement&&l.target!==document.body&&C[0]!==l.target&&(C.unshift(l.target),C=C.filter(t=>t!=null&&t.isConnected),C.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});const re=(e,l,t=!0)=>{const a=S("form-events",void 0),n=S("form-group",void 0),o=S("form-inputs",void 0);n&&(!t||e!=null&&e.legend?n.inputId.value=void 0:e!=null&&e.id&&(n.inputId.value=e==null?void 0:e.id),o&&(o.value[n.name.value]=n.inputId.value));const v=O(!1);function d(c,m){a&&a.emit({type:c,path:m})}function B(){d("blur",n==null?void 0:n.name.value),v.value=!0}function w(){d("change",n==null?void 0:n.name.value)}const s=Z(()=>{(v.value||n!=null&&n.eagerValidation.value)&&d("input",n==null?void 0:n.name.value)},300);return{inputId:u(()=>(e==null?void 0:e.id)??(n==null?void 0:n.inputId.value)),name:u(()=>(e==null?void 0:e.name)??(n==null?void 0:n.name.value)),size:u(()=>{var m;const c=l.size[n==null?void 0:n.size.value]?n==null?void 0:n.size.value:null;return(e==null?void 0:e.size)??c??((m=l.default)==null?void 0:m.size)}),color:u(()=>{var c;return(c=n==null?void 0:n.error)!=null&&c.value?"red":e==null?void 0:e.color}),emitFormBlur:B,emitFormInput:s,emitFormChange:w}},r=ee(z.ui.strategy,z.ui.input,ae),ce=x({components:{UIcon:T},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>r.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(r.size).includes(e)}},color:{type:String,default:()=>r.default.color,validator(e){return[...z.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(l=>Object.keys(l))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:l,slots:t}){const{ui:a,attrs:n}=P("input",$(e,"ui"),r,$(e,"class")),{size:o,rounded:v}=ne({ui:a,props:e}),{emitFormBlur:d,emitFormInput:B,size:w,color:s,inputId:c,name:m}=re(e,r),g=u(()=>o.value??w.value),y=O(le({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),k=O(null),V=()=>{var i;e.autofocus&&((i=k.value)==null||i.focus())},j=i=>{y.value.trim&&(i=i.trim()),(y.value.number||e.type==="number")&&(i=ue(i)),y.value.nullify&&(i||(i=null)),l("update:modelValue",i),B()},D=i=>{y.value.lazy||j(i.target.value)},U=i=>{if(e.type==="file"){const f=i.target.files;l("change",f)}else{const f=i.target.value;l("change",f),y.value.lazy&&j(f),y.value.trim&&(i.target.value=f.trim())}},W=i=>{d(),l("blur",i)};te(()=>{setTimeout(()=>{V()},e.autofocusDelay)});const H=u(()=>{var f,N;const i=((N=(f=a.value.color)==null?void 0:f[s.value])==null?void 0:N[e.variant])||a.value.variant[e.variant];return ie(b(a.value.base,a.value.form,v.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[g.value],e.padded?a.value.padding[g.value]:"p-0",i==null?void 0:i.replaceAll("{color}",s.value),(h.value||t.leading)&&a.value.leading.padding[g.value],(A.value||t.trailing)&&a.value.trailing.padding[g.value]),e.inputClass)}),h=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),A=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),J=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Q=u(()=>e.loading&&!h.value?e.loadingIcon:e.trailingIcon||e.icon),R=u(()=>b(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[g.value])),K=u(()=>b(a.value.icon.base,s.value&&z.ui.colors.includes(s.value)&&a.value.icon.color.replaceAll("{color}",s.value),a.value.icon.size[g.value],e.loading&&a.value.icon.loading)),X=u(()=>b(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[g.value])),Y=u(()=>b(a.value.icon.base,s.value&&z.ui.colors.includes(s.value)&&a.value.icon.color.replaceAll("{color}",s.value),a.value.icon.size[g.value],e.loading&&!h.value&&a.value.icon.loading));return{ui:a,attrs:n,name:m,inputId:c,input:k,isLeading:h,isTrailing:A,inputClass:H,leadingIconName:J,leadingIconClass:K,leadingWrapperIconClass:R,trailingIconName:Q,trailingIconClass:Y,trailingWrapperIconClass:X,onInput:D,onChange:U,onBlur:W}}}),ge=["id","name","type","required","placeholder","disabled"];function fe(e,l,t,a,n,o){const v=T;return F(),L("div",{class:I(e.type==="hidden"?"hidden":e.ui.wrapper)},[p("input",_({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:l[0]||(l[0]=(...d)=>e.onInput&&e.onInput(...d)),onBlur:l[1]||(l[1]=(...d)=>e.onBlur&&e.onBlur(...d)),onChange:l[2]||(l[2]=(...d)=>e.onChange&&e.onChange(...d))}),null,16,ge),E(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(F(),L("span",{key:0,class:I(e.leadingWrapperIconClass)},[E(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[q(v,{name:e.leadingIconName,class:I(e.leadingIconClass)},null,8,["name","class"])])],2)):M("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(F(),L("span",{key:1,class:I(e.trailingWrapperIconClass)},[E(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[q(v,{name:e.trailingIconName,class:I(e.trailingIconClass)},null,8,["name","class"])])],2)):M("",!0)],2)}const me=G(ce,[["render",fe]]);export{me as _,de as a,oe as o,C as t,re as u};