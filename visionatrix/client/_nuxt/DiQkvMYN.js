import{_ as pe}from"./BJY4RRvd.js";import{_ as ye}from"./Cl6SwG8X.js";import{_ as _e,o as d,c as g,a as y,F as J,r as te,q as D,b as c,w as n,s as j,i as C,h as oe,l as b,t as _,v as X,x as le,f as q,y as ge,z as Y,A as ve,B as Z,C as he,D as be,E as ke,G as se,H as Ue,I as m,d as p,m as e,J as R,K,k as ae,L as Ce,M as F,u as Ie,N as xe,O as H,j as we,p as Ve}from"./1aFDprAc.js";import{_ as Be}from"./BCl20x8G.js";import{_ as $e}from"./D1fQ8q2o.js";import{_ as ne}from"./5oW-9HAu.js";import{_ as Fe}from"./-L1LWKsu.js";import"./ZBJJIzvG.js";const Me={wrapper:"relative min-w-0",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",base:"flex items-center gap-x-1.5 group font-semibold min-w-0",label:"block truncate",icon:{base:"flex-shrink-0 w-5 h-5",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5 rtl:rotate-180"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid"}},ee=ve(Z.ui.strategy,Z.ui.breadcrumb,Me),ze=q({components:{UIcon:oe,ULink:le},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>ee.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(s){const{ui:I,attrs:f}=ge("breadcrumb",Y(s,"ui"),ee,Y(s,"class"));return{ui:I,attrs:f,getULinkProps:ke,twMerge:be,twJoin:he}}}),Se={key:1,role:"presentation"};function De(s,I,f,k,x,U){const i=oe,v=le;return d(),g("nav",X({"aria-label":"Breadcrumb",class:s.ui.wrapper},s.attrs),[y("ol",{class:D(s.ui.ol)},[(d(!0),g(J,null,te(s.links,(o,r)=>(d(),g("li",{key:r,class:D(s.ui.li)},[c(v,X({as:"span",class:[s.ui.base,r===s.links.length-1?s.ui.active:o.to?s.ui.inactive:""],"aria-current":r===s.links.length-1?"page":void 0,ref_for:!0},s.getULinkProps(o),{onClick:o.click}),{default:n(()=>[j(s.$slots,"icon",{link:o,index:r,isActive:r===s.links.length-1},()=>[o.icon?(d(),C(i,{key:0,name:o.icon,class:D(s.twMerge(s.twJoin(s.ui.icon.base,r===s.links.length-1?s.ui.icon.active:o.to?s.ui.icon.inactive:""),o.iconClass))},null,8,["name","class"])):b("",!0)]),j(s.$slots,"default",{link:o,index:r,isActive:r===s.links.length-1},()=>[o.label?(d(),g("span",{key:0,class:D(s.twMerge(s.ui.label,o.labelClass))},_(o.label),3)):b("",!0)])]),_:2},1040,["class","aria-current","onClick"]),r<s.links.length-1?j(s.$slots,"divider",{key:0},()=>[s.divider?(d(),g(J,{key:0},[s.divider.startsWith("i-")?(d(),C(i,{key:0,name:s.divider,class:D(s.ui.divider.base),role:"presentation"},null,8,["name","class"])):(d(),g("span",Se,_(s.divider),1))],64)):b("",!0)]):b("",!0)],2))),128))],2)],16)}const Ee=_e(ze,[["render",De]]),Ae={class:"orphan-models"},Le={class:"text-md font-bold"},Oe={key:0,class:"text-red-500"},Re={key:0,class:"flex justify-end items-center space-x-2 mt-3"},Pe={class:"text-gray-500 text-sm"},Ge=["href"],Te={key:1},Ne={class:"p-4 flex flex-col space-y-2 max-h-60 overflow-y-auto"},je={key:2,class:"text-gray-500"},He=q({__name:"OrphanModels",setup(s){const I=se();Ue(()=>{f()});function f(){I.getOrphanModelsList().then(o=>{console.debug("[DEBUG] Orphan models: ",o),U.value=o})}const k=[{key:"",label:"",sortable:!1,class:""},{key:"full_path",label:"Path",sortable:!0,class:""},{key:"size",label:"Size",sortable:!0,class:""},{key:"creation_time",label:"Created time",sortable:!0,class:""},{key:"res_model",label:"Model",sortable:!0,class:""},{key:"possible_flows",label:"Possible Flows",sortable:!0,class:""},{key:"actions",label:"Actions",sortable:!1,class:""}];function x(){console.debug("[DEBUG] Deleting orphan models: ",i),v.value=!0,Promise.all(i.value.map(o=>I.deleteOrphanModel(o.full_path,o.creation_time))).then(()=>{f(),v.value=!1,i.value=i.value.filter(o=>o.full_path!==o.full_path)}).catch(o=>{console.error("[ERROR] Failed to delete orphan models: ",o),K().add({title:"Failed to delete orphan models",description:o.details}),v.value=!1})}const U=m([]),i=m([]),v=m(!1);return(o,r)=>{const M=ae,P=Ce,G=ne;return d(),g("div",Ae,[y("h3",Le,[r[2]||(r[2]=p(" Orphan models ")),e(U).length>0?(d(),g("span",Oe,"("+_(e(U).length)+" - "+_(("formatBytes"in o?o.formatBytes:e(R))(e(U).reduce((a,h)=>a+h.size,0)))+")",1)):b("",!0)]),r[5]||(r[5]=y("p",{class:"text-gray-500 text-sm"}," Orphan models are models that are not associated with any model type. They are not used in any installed flow and can be deleted. ",-1)),e(i).length>0?(d(),g("div",Re,[y("span",Pe," Selected: "+_(e(i).length)+" ("+_(("formatBytes"in o?o.formatBytes:e(R))(e(i).reduce((a,h)=>a+h.size,0)))+") ",1),c(M,{icon:"i-heroicons-trash-16-solid",variant:"outline",color:"red",loading:e(v),onClick:r[0]||(r[0]=()=>{x()})},{default:n(()=>r[3]||(r[3]=[p(" Delete selected ")])),_:1},8,["loading"])])):b("",!0),e(U).length>0?(d(),C(G,{key:1,modelValue:e(i),"onUpdate:modelValue":r[1]||(r[1]=a=>F(i)?i.value=a:null),class:"mt-5",ui:{thead:"sticky top-0 dark:bg-gray-800 bg-white z-10"},rows:e(U),columns:k,style:{"max-height":"40vh"}},{"full_path-data":n(({row:a})=>[p(_(a.full_path),1)]),"size-data":n(({row:a})=>[p(_(a.size?("formatBytes"in o?o.formatBytes:e(R))(a.size):"-"),1)]),"creation_time-data":n(({row:a})=>[p(_(a.creation_time?new Date(a.creation_time*1e3).toLocaleString():"-"),1)]),"res_model-data":n(({row:a})=>[a.res_model?(d(),g("a",{key:0,href:a.res_model.homepage,target:"_blank",class:"text-blue-500"},_(a.res_model.name),9,Ge)):(d(),g("span",Te,"-"))]),"possible_flows-data":n(({row:a})=>[c(P,null,{panel:n(()=>[y("div",Ne,[(d(!0),g(J,null,te(a.possible_flows,h=>(d(),C(M,{key:h.id,to:`/workflows/${h==null?void 0:h.name}`,variant:"soft",color:"blue",target:"_blank"},{default:n(()=>[p(_(h.name),1)]),_:2},1032,["to"]))),128))])]),default:n(()=>[c(M,{icon:"i-heroicons-chevron-down-16-solid",variant:"outline",color:"blue"},{default:n(()=>[p(_(a.possible_flows.length),1)]),_:2},1024)]),_:2},1024)]),"actions-data":n(({row:a})=>[c(M,{icon:"i-heroicons-trash-16-solid",variant:"outline",color:"red",loading:e(v),disabled:a.readonly===!0,onClick:()=>{console.debug("[DEBUG] Deleting orphan model: ",a),v.value=!0,e(I).deleteOrphanModel(a.full_path,a.creation_time).then(()=>{f()}).catch(h=>{console.error("[ERROR] Failed to delete orphan model: ",h),("useToast"in o?o.useToast:e(K))().add({title:"Failed to delete orphan model",description:h.details})}).finally(()=>{v.value=!1})}},{default:n(()=>r[4]||(r[4]=[p(" Delete ")])),_:2},1032,["loading","disabled","onClick"])]),_:1},8,["modelValue","rows"])):(d(),g("span",je,"No orphan models found."))])}}}),Je={class:"flex flex-col md:flex-row"},Ke={class:"px-5 pb-5 md:w-4/5"},qe={key:0,class:"admin-settings mb-3"},We={class:"mt-3 mb-5"},Qe={key:0},Xe={key:1},Ye={class:"flex flex-row w-full md:flex-col"},Ze={class:"flex mt-3"},et={class:"p-4 max-h-screen"},tt=["onClick"],ut=q({__name:"comfyui",setup(s){Ie({title:"ComfyUI settings - Visionatrix",meta:[{name:"description",content:"ComfyUI settings - Visionatrix"}]});const I=xe(),f=se(),k=K(),x=m(!1),U=m(!1),i=m([]),v=m("../vix_models"),o=m(""),r=H(()=>i.value.length===0?[]:o.value===""?Object.keys(i.value).map(u=>{let t=0;return i.value[u].length>0&&(t=i.value[u].reduce((B,w)=>B+(w.total_size??0),0)),{full_path:u,total_size:t,create_time:null,is_default:null,readonly:null}}):i.value[o.value]??[]),M=H(()=>{const u=[{label:"Root",to:""}];if(o.value==="")return u;const t=o.value.split("/");let B="";return t.forEach(w=>{B+=w,u.push({label:w,to:B}),B+="/"}),u}),P=H(()=>{const u=[{key:"full_path",label:"Path",sortable:!0,class:""},{key:"total_size",label:"Size",sortable:!0,class:""}];return o.value!==""&&(u.push({key:"create_time",label:"Created time",sortable:!0,class:""}),u.push({key:"actions",label:"Actions",sortable:!1,class:""})),u});function G(u){u.full_path in i.value&&(o.value=u.full_path)}const a=m(!1);function h(){a.value=!0,f.performComfyUiAutoconfig(v.value).then(u=>{"folders"in u&&(console.debug("[DEBUG] ComfyUI folders: ",u.folders),i.value=u.folders,f.loadAllSettings(),k.add({title:"Autoconfig performed",description:"Autoconfig performed successfully"}))}).catch(u=>{k.add({title:"Error performing autoconfig",description:u.details})}).finally(()=>{a.value=!1})}const L=m(null),T=m(!1),E=m(""),z=m(!1),S=m(""),A=m(!1),N=m(!1),W=m(!1),O=m(!0);return(u,t)=>{const B=pe,w=ye,V=ae,Q=Be,ie=$e,re=we,de=Ee,ue=ne,fe=Fe,ce=He,me=Ve;return d(),C(me,{class:"lg:h-dvh"},{default:n(()=>[y("div",Je,[c(B,{links:e(f).links,class:"md:w-1/5"},null,8,["links"]),y("div",Ke,[e(I).isAdmin?(d(),g("div",qe,[t[21]||(t[21]=y("h3",{class:"mb-3 text-xl font-bold"},"ComfyUI settings (global)",-1)),y("div",We,[c(ie,{size:"md",class:"py-3",label:"ComfyUI models folder",description:"Relative or absolute path to the models folders"},{default:n(()=>[e(f).settingsMap.comfyui_folders.value===""?(d(),g("div",Qe,[t[13]||(t[13]=y("p",{class:"text-gray-500"},"No ComfyUI folders initialized.",-1)),c(w,{modelValue:e(v),"onUpdate:modelValue":t[0]||(t[0]=l=>F(v)?v.value=l:null),placeholder:"ComfyUI folder path",class:"w-fit mt-3",type:"text",size:"sm",icon:"i-heroicons-folder-16-solid",disabled:e(a),autocomplete:"off"},null,8,["modelValue","disabled"]),c(V,{class:"mt-3",icon:"i-heroicons-cog-6-tooth-20-solid",color:"orange",loading:e(a),onClick:h},{default:n(()=>t[12]||(t[12]=[p(" Perform autoconfig ")])),_:1},8,["loading"])])):b("",!0),e(T)?(d(),g("div",Xe,[y("div",Ye,[c(w,{ref_key:"newComfyUiFolderInput",ref:L,modelValue:e(S),"onUpdate:modelValue":t[1]||(t[1]=l=>F(S)?S.value=l:null),placeholder:"External folder to use for model types",class:"w-full mt-3",type:"text",size:"sm",icon:"i-heroicons-folder-16-solid",autocomplete:"off",disable:e(z)},null,8,["modelValue","disable"]),c(w,{modelValue:e(E),"onUpdate:modelValue":t[2]||(t[2]=l=>F(E)?E.value=l:null),placeholder:"Folder Name (model type, e.g. checkpoints, loras, vae)",class:"w-full mt-3",type:"text",size:"sm",icon:"i-heroicons-folder-16-solid",autocomplete:"off",disable:e(z)},null,8,["modelValue","disable"]),c(Q,{modelValue:e(A),"onUpdate:modelValue":t[3]||(t[3]=l=>F(A)?A.value=l:null),class:"mt-3",label:"Is default"},null,8,["modelValue"])]),y("div",Ze,[c(V,{class:"mr-2",color:"white",icon:"i-heroicons-x-mark",variant:"outline",disabled:e(z),onClick:t[4]||(t[4]=()=>{T.value=!1,S.value="",E.value="",A.value=!1})},{default:n(()=>t[14]||(t[14]=[p(" Cancel ")])),_:1},8,["disabled"]),c(V,{icon:"i-heroicons-check-16-solid",loading:e(z),onClick:t[5]||(t[5]=()=>{e(S)!==""&&(z.value=!0,e(f).addComfyUiFolder(e(E),e(S),e(A)).then(l=>{"folders"in l&&(console.debug("[DEBUG] ComfyUI folders: ",l.folders),i.value=l.folders,e(k).add({title:"ComfyUI folder added",description:"ComfyUI folder added successfully"}))}).catch(l=>{e(k).add({title:"Error adding ComfyUI folder",description:l.details})}).finally(()=>{z.value=!1}))})},{default:n(()=>t[15]||(t[15]=[p(" Add ")])),_:1},8,["loading"])])])):b("",!0),e(f).settingsMap.comfyui_folders.value!==""?(d(),C(V,{key:2,class:"mt-3",icon:"i-heroicons-folder-16-solid",color:"cyan",onClick:t[6]||(t[6]=()=>{e(f).getComfyUiFolderListing().then(l=>{console.debug("[DEBUG] ComfyUI folders: ",l),i.value=l.folders}),x.value=!0})},{default:n(()=>t[16]||(t[16]=[p(" Show ComfyUI folders ")])),_:1})):b("",!0),e(f).settingsMap.comfyui_folders.value!==""?(d(),C(V,{key:3,class:"mt-3 ml-2",color:"white",variant:"outline",icon:"i-heroicons-folder-plus-16-solid",onClick:t[7]||(t[7]=()=>{T.value=!0,u.$nextTick(()=>{e(L)&&e(L).$refs.input.focus()})})},{default:n(()=>t[17]||(t[17]=[p(" Add ComfyUI folder ")])),_:1})):b("",!0),e(f).settingsMap.comfyui_folders.value!==""?(d(),C(V,{key:4,class:"mt-3 ml-2",color:"red",variant:"outline",icon:"i-heroicons-trash-16-solid",onClick:t[8]||(t[8]=()=>{W.value=!0,e(f).saveGlobalSetting(e(f).settingsMap.comfyui_folders.key,"",e(f).settingsMap.comfyui_folders.sensitive).then(()=>{e(k).add({title:"ComfyUI folders reset",description:"ComfyUI folders reset successfully"}),e(f).settingsMap.comfyui_folders.value=""}).catch(l=>{e(k).add({title:"Error resetting ComfyUI folders",description:l.details})}).finally(()=>{W.value=!1})})},{default:n(()=>t[18]||(t[18]=[p(" Reset ComfyUI folders ")])),_:1})):b("",!0)]),_:1}),e(f).settingsMap.comfyui_folders.value!==""?(d(),C(fe,{key:0,modelValue:e(x),"onUpdate:modelValue":t[11]||(t[11]=l=>F(x)?x.value=l:null),class:"z-[90]",fullscreen:""},{default:n(()=>[c(V,{class:"absolute top-4 right-4",icon:"i-heroicons-x-mark",variant:"ghost",onClick:t[9]||(t[9]=()=>x.value=!1)}),y("div",et,[t[20]||(t[20]=y("h3",{class:"text-xl text-center"},"ComfyUI folders",-1)),y("div",null,[c(Q,{modelValue:e(O),"onUpdate:modelValue":t[10]||(t[10]=l=>F(O)?O.value=l:null),class:"mt-3",label:"Hide empty folders"},null,8,["modelValue"])]),c(de,{links:e(M),class:"my-2"},{default:n(({link:l,isActive:$})=>[c(re,{color:$?"primary":"gray",class:"rounded-full truncate cursor-pointer select-none",onClick:()=>{o.value=l.to}},{default:n(()=>[p(_(l.label),1)]),_:2},1032,["color","onClick"])]),_:1},8,["links"]),c(ue,{loading:e(U),"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},rows:e(r).filter(l=>e(O)?l.total_size>0:!0),columns:e(P),style:{"max-height":"80vh"}},{"full_path-data":n(({row:l})=>[y("span",{class:D({"text-blue-500":l.full_path in e(i),"cursor-pointer":l.full_path in e(i)}),onClick:()=>G(l)},_(l.full_path),11,tt)]),"total_size-data":n(({row:l})=>[p(_(l.total_size?("formatBytes"in u?u.formatBytes:e(R))(l.total_size):"-"),1)]),"create_time-data":n(({row:l})=>[p(_(l.create_time&&new Date(l.create_time).getTime()!==0?new Date(l.create_time).toLocaleString():"-"),1)]),"actions-data":n(({row:l})=>[c(V,{icon:"i-heroicons-trash-16-solid",variant:"outline",color:"red",loading:e(N),disabled:l.readonly===!0,onClick:()=>{N.value=!0,e(f).deleteComfyUiFolder(e(o),l.full_path).then($=>{"folders"in $&&(console.debug("[DEBUG] ComfyUI folders: ",$.folders),i.value=$.folders,e(k).add({title:"ComfyUI folder removed",description:"ComfyUI folder removed successfully"}),e(i)[e(o)]||(o.value=""))}).catch($=>{e(k).add({title:"Error removing ComfyUI folder",description:$.details})}).finally(()=>{N.value=!1})}},{default:n(()=>t[19]||(t[19]=[p(" Remove ")])),_:2},1032,["loading","disabled","onClick"])]),_:1},8,["loading","rows","columns"])])]),_:1},8,["modelValue"])):b("",!0)]),c(ce,{class:"mt-3"})])):b("",!0)])])]),_:1})}}});export{ut as default};
