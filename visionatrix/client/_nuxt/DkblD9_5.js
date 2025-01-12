import{_ as V,o as r,c as a,a as h,n as s,v as l,bl as i,x as n,F as t,d as o,t as d,l as m,bm as j,f as w,z as q,A as S,B as I,C as B,a2 as P,P as p,J as A,av as G,ak as N}from"./BkmaeSbd.js";const O={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},b=I(B.ui.strategy,B.ui.formGroup,O),F=w({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(b.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:f,attrs:g}=q("formGroup",S(e,"ui"),b,S(e,"class")),u=P("form-errors",null),y=p(()=>{var z,v;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(v=(z=u==null?void 0:u.value)==null?void 0:z.find(C=>C.path===e.name))==null?void 0:v.message}),k=p(()=>f.value.size[e.size??b.default.size]),$=A(G());return N("form-group",{error:y,inputId:$,name:p(()=>e.name),size:p(()=>e.size),eagerValidation:p(()=>e.eagerValidation)}),{ui:f,attrs:g,inputId:$,size:k,error:y}}}),R=["for"];function D(e,f,g,u,y,k){return r(),a("div",n({class:e.ui.wrapper},e.attrs),[h("div",{class:s(e.ui.inner)},[e.label||e.$slots.label?(r(),a("div",{key:0,class:s([e.ui.label.wrapper,e.size])},[h("label",{for:e.inputId,class:s([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?l(e.$slots,"label",i(n({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(t,{key:1},[o(d(e.label),1)],64))],10,R),e.hint||e.$slots.hint?(r(),a("span",{key:0,class:s([e.ui.hint])},[e.$slots.hint?l(e.$slots,"hint",i(n({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(t,{key:1},[o(d(e.hint),1)],64))],2)):m("",!0)],2)):m("",!0),e.description||e.$slots.description?(r(),a("p",{key:1,class:s([e.ui.description,e.size])},[e.$slots.description?l(e.$slots,"description",i(n({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(t,{key:1},[o(d(e.description),1)],64))],2)):m("",!0)],2),h("div",{class:s([e.label?e.ui.container:""])},[l(e.$slots,"default",i(j({error:e.error}))),typeof e.error=="string"&&e.error?(r(),a("p",{key:0,class:s([e.ui.error,e.size])},[e.$slots.error?l(e.$slots,"error",i(n({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(t,{key:1},[o(d(e.error),1)],64))],2)):e.help||e.$slots.help?(r(),a("p",{key:1,class:s([e.ui.help,e.size])},[e.$slots.help?l(e.$slots,"help",i(n({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(t,{key:1},[o(d(e.help),1)],64))],2)):m("",!0)],2)],16)}const T=V(F,[["render",D]]);export{T as _};
