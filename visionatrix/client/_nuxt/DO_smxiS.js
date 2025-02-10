import{_ as de}from"./CCMjHWG6.js";import{_ as ue}from"./Di9Y9BMZ.js";import{_ as ce,o as d,c as y,a as _,F as E,r as q,n as M,b as m,w as n,A as D,i as C,h as K,l as v,t as f,B as G,C as Q,f as N,D as me,E as j,G as fe,H,I as pe,J as _e,K as ge,y as W,L as ye,M as b,s as X,d as g,p as o,N as $,q as P,m as Y,O as he,P as O,u as ve,Q as be,v as R,j as ke,R as Ue,x as Ce}from"./B86QgrFR.js";import{_ as Be}from"./B7tmTU4K.js";import{a as we}from"./9u8g8lTK.js";import{_ as Z}from"./BKqzQcW2.js";import{_ as Se,a as xe}from"./fQZEitHa.js";const Ie={wrapper:"relative min-w-0",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",base:"flex items-center gap-x-1.5 group font-semibold min-w-0",label:"block truncate",icon:{base:"flex-shrink-0 w-5 h-5",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5 rtl:rotate-180"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid"}},J=fe(H.ui.strategy,H.ui.breadcrumb,Ie),Me=N({components:{UIcon:K,ULink:Q},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>J.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(s){const{ui:k,attrs:u}=me("breadcrumb",j(s,"ui"),J,j(s,"class"));return{ui:k,attrs:u,getULinkProps:ge,twMerge:_e,twJoin:pe}}}),ze={key:1,role:"presentation"};function Ve(s,k,u,S,B,U){const i=K,h=Q;return d(),y("nav",G({"aria-label":"Breadcrumb",class:s.ui.wrapper},s.attrs),[_("ol",{class:M(s.ui.ol)},[(d(!0),y(E,null,q(s.links,(e,r)=>(d(),y("li",{key:r,class:M(s.ui.li)},[m(h,G({as:"span",class:[s.ui.base,r===s.links.length-1?s.ui.active:e.to?s.ui.inactive:""],"aria-current":r===s.links.length-1?"page":void 0,ref_for:!0},s.getULinkProps(e),{onClick:e.click}),{default:n(()=>[D(s.$slots,"icon",{link:e,index:r,isActive:r===s.links.length-1},()=>[e.icon?(d(),C(i,{key:0,name:e.icon,class:M(s.twMerge(s.twJoin(s.ui.icon.base,r===s.links.length-1?s.ui.icon.active:e.to?s.ui.icon.inactive:""),e.iconClass))},null,8,["name","class"])):v("",!0)]),D(s.$slots,"default",{link:e,index:r,isActive:r===s.links.length-1},()=>[e.label?(d(),y("span",{key:0,class:M(s.twMerge(s.ui.label,e.labelClass))},f(e.label),3)):v("",!0)])]),_:2},1040,["class","aria-current","onClick"]),r<s.links.length-1?D(s.$slots,"divider",{key:0},()=>[s.divider?(d(),y(E,{key:0},[s.divider.startsWith("i-")?(d(),C(i,{key:0,name:s.divider,class:M(s.ui.divider.base),role:"presentation"},null,8,["name","class"])):(d(),y("span",ze,f(s.divider),1))],64)):v("",!0)]):v("",!0)],2))),128))],2)],16)}const $e=ce(Me,[["render",Ve]]),Oe={class:"orphan-models"},Le={class:"text-md font-bold"},Fe={key:0,class:"text-red-500"},Ae={key:0,class:"flex justify-end items-center space-x-2 mt-3"},De={class:"text-gray-500 text-sm"},Re=["href"],Ee={key:1},Pe={class:"p-4 flex flex-col space-y-2 max-h-60 overflow-y-auto"},Ne={key:2,class:"text-gray-500"},Te=N({__name:"OrphanModels",setup(s){const k=W();ye(()=>{u()});function u(){k.getOrphanModelsList().then(e=>{console.debug("[DEBUG] Orphan models: ",e),U.value=e})}const S=[{key:"full_path",label:"Path",sortable:!0,class:""},{key:"size",label:"Size",sortable:!0,class:""},{key:"creation_time",label:"Created time",sortable:!0,class:""},{key:"res_model",label:"Model",sortable:!0,class:""},{key:"possible_flows",label:"Possible Flows",sortable:!0,class:""},{key:"actions",label:"Actions",sortable:!1,class:""}];function B(){console.debug("[DEBUG] Deleting orphan models: ",i),h.value=!0,Promise.all(i.value.map(e=>k.deleteOrphanModel(e.full_path,e.creation_time))).then(()=>{u(),h.value=!1,i.value=i.value.filter(e=>e.full_path!==e.full_path)}).catch(e=>{console.error("[ERROR] Failed to delete orphan models: ",e),P().add({title:"Failed to delete orphan models",description:e.details}),h.value=!1})}const U=b([]),i=b([]),h=b(!1);return X(()=>k.settingsMap.comfyui_models_folder.value,()=>{u()}),(e,r)=>{const x=Y,L=he,F=Z;return d(),y("div",Oe,[_("h3",Le,[r[2]||(r[2]=g(" Orphan models ")),o(U).length>0?(d(),y("span",Fe,"("+f(o(U).length)+" - "+f(("formatBytes"in e?e.formatBytes:o($))(o(U).reduce((l,p)=>l+p.size,0)))+")",1)):v("",!0)]),r[5]||(r[5]=_("p",{class:"text-gray-500 text-sm"}," Orphan models are models that are not associated with any model type. They are not used in any installed flow and can be deleted. ",-1)),o(i).length>0?(d(),y("div",Ae,[_("span",De," Selected: "+f(o(i).length)+" ("+f(("formatBytes"in e?e.formatBytes:o($))(o(i).reduce((l,p)=>l+p.size,0)))+") ",1),m(x,{icon:"i-heroicons-trash-16-solid",variant:"outline",color:"red",loading:o(h),onClick:r[0]||(r[0]=()=>{B()})},{default:n(()=>r[3]||(r[3]=[g(" Delete selected ")])),_:1},8,["loading"])])):v("",!0),o(U).length>0?(d(),C(F,{key:1,modelValue:o(i),"onUpdate:modelValue":r[1]||(r[1]=l=>O(i)?i.value=l:null),class:"mt-5",ui:{thead:"sticky top-0 dark:bg-gray-800 bg-white z-10"},rows:o(U),columns:S,style:{"max-height":"40vh"}},{"full_path-data":n(({row:l})=>[g(f(l.full_path),1)]),"size-data":n(({row:l})=>[g(f(l.size?("formatBytes"in e?e.formatBytes:o($))(l.size):"-"),1)]),"creation_time-data":n(({row:l})=>[g(f(l.creation_time?new Date(l.creation_time*1e3).toLocaleString():"-"),1)]),"res_model-data":n(({row:l})=>[l.res_model?(d(),y("a",{key:0,href:l.res_model.homepage,target:"_blank",class:"text-blue-500"},f(l.res_model.name),9,Re)):(d(),y("span",Ee,"-"))]),"possible_flows-data":n(({row:l})=>[m(L,null,{panel:n(()=>[_("div",Pe,[(d(!0),y(E,null,q(l.possible_flows,p=>(d(),C(x,{key:p.id,to:`/workflows/${p==null?void 0:p.name}`,variant:"soft",color:"blue",target:"_blank"},{default:n(()=>[g(f(p.name),1)]),_:2},1032,["to"]))),128))])]),default:n(()=>[m(x,{icon:"i-heroicons-chevron-down-16-solid",variant:"outline",color:"blue"},{default:n(()=>[g(f(l.possible_flows.length),1)]),_:2},1024)]),_:2},1024)]),"actions-data":n(({row:l})=>[m(x,{icon:"i-heroicons-trash-16-solid",variant:"outline",color:"red",loading:o(h),disabled:l.readonly===!0,onClick:()=>{console.debug("[DEBUG] Deleting orphan model: ",l),h.value=!0,o(k).deleteOrphanModel(l.full_path,l.creation_time).then(()=>{u()}).catch(p=>{console.error("[ERROR] Failed to delete orphan model: ",p),("useToast"in e?e.useToast:o(P))().add({title:"Failed to delete orphan model",description:p.details})}).finally(()=>{h.value=!1})}},{default:n(()=>r[4]||(r[4]=[g(" Delete ")])),_:2},1032,["loading","disabled","onClick"])]),_:1},8,["modelValue","rows"])):(d(),y("span",Ne,"No orphan models found."))])}}}),Ge={class:"flex flex-col md:flex-row"},je={class:"px-5 pb-5 md:w-4/5"},He={key:0,class:"admin-settings mb-3"},Je={class:"mt-3 mb-5"},qe={key:0},Ke={class:"p-4 max-h-screen"},Qe=["onClick"],We={class:"flex items-center mt-2"},lt=N({__name:"comfyui",setup(s){ve({title:"ComfyUI settings - Visionatrix",meta:[{name:"description",content:"ComfyUI settings - Visionatrix"}]});const k=be(),u=W(),S=P(),B=b(!1),U=b(!1),i=b([]),h=b("../vix_models"),e=b(""),r=R(()=>i.value.length===0?[]:e.value===""?Object.keys(i.value).map(c=>{let t=0;return i.value[c].length>0&&(t=i.value[c].reduce((w,I)=>w+(I.total_size??0),0)),{full_path:c,total_size:t,create_time:null}}):i.value[e.value]??[]),x=R(()=>{const c=[{label:"Root",to:""}];if(e.value==="")return c;const t=e.value.split("/");let w="";return t.forEach(I=>{w+=I,c.push({label:I,to:w}),w+="/"}),c}),L=R(()=>{const c=[{key:"full_path",label:"Path",sortable:!0,class:""},{key:"total_size",label:"Size",sortable:!0,class:""}];return e.value!==""&&c.push({key:"create_time",label:"Created time",sortable:!0,class:""}),c});function F(c){c.full_path in i.value&&(e.value=c.full_path)}const l=b(!1);function p(c){c===""?A.value=!0:l.value=!0,u.performComfyUiAutoconfig(c).then(t=>{"folders"in t&&(console.debug("[DEBUG] ComfyUI folders: ",t.folders),u.loadAllSettings(),c!==""?(i.value=t.folders,S.add({title:"Autoconfig performed",description:"Autoconfig performed successfully"})):(i.value=[],u.settingsMap.comfyui_models_folder.value="",S.add({title:"ComfyUI folders reset",description:"ComfyUI folders reset successfully"})))}).catch(t=>{S.add({title:"Error performing autoconfig",description:t.details})}).finally(()=>{l.value=!1,A.value=!1})}const A=b(!1),V=b(!0);return X(()=>u.localSettings.showComfyUiNavbarButton,()=>{u.saveLocalSettings()}),(c,t)=>{const w=de,I=ue,z=Y,T=Be,ee=we,te=ke,oe=$e,se=Z,le=Se,ae=xe,ne=Te,ie=Ce;return d(),C(ie,{class:"lg:h-dvh"},{default:n(()=>[_("div",Ge,[m(w,{links:o(u).links,class:"md:w-1/5"},null,8,["links"]),_("div",je,[o(k).isAdmin?(d(),y("div",He,[t[14]||(t[14]=_("h3",{class:"mb-3 text-xl font-bold"},"ComfyUI settings (global)",-1)),_("div",Je,[m(T,{size:"md",class:"py-3",label:"ComfyUI models folder",description:"Relative (to ComfyUI folder) or absolute path to the models folders"},{default:n(()=>[o(u).settingsMap.comfyui_models_folder.value===""?(d(),y("div",qe,[t[9]||(t[9]=_("p",{class:"text-gray-500"},"No ComfyUI folders initialized.",-1)),m(I,{modelValue:o(h),"onUpdate:modelValue":t[0]||(t[0]=a=>O(h)?h.value=a:null),placeholder:"ComfyUI folder path",class:"w-fit mt-3",type:"text",size:"sm",icon:"i-heroicons-folder-16-solid",disabled:o(l),autocomplete:"off"},null,8,["modelValue","disabled"]),m(z,{class:"mt-3",icon:"i-heroicons-cog-6-tooth-20-solid",color:"orange",loading:o(l),onClick:t[1]||(t[1]=()=>p(o(h)))},{default:n(()=>t[8]||(t[8]=[g(" Perform autoconfig ")])),_:1},8,["loading"])])):v("",!0),o(u).settingsMap.comfyui_models_folder.value!==""?(d(),C(z,{key:1,class:"mt-3",icon:"i-heroicons-folder-16-solid",color:"cyan",onClick:t[2]||(t[2]=()=>{o(u).getComfyUiFolderListing().then(a=>{console.debug("[DEBUG] ComfyUI folders: ",a),i.value=a.folders}),B.value=!0})},{default:n(()=>t[10]||(t[10]=[g(" Show ComfyUI folders ")])),_:1})):v("",!0),o(u).settingsMap.comfyui_models_folder.value!==""?(d(),C(z,{key:2,class:"mt-3 ml-2",color:"red",variant:"outline",icon:"i-heroicons-trash-16-solid",onClick:t[3]||(t[3]=()=>p(""))},{default:n(()=>t[11]||(t[11]=[g(" Reset ComfyUI folders ")])),_:1})):v("",!0)]),_:1}),o(u).settingsMap.comfyui_models_folder.value!==""?(d(),C(le,{key:0,modelValue:o(B),"onUpdate:modelValue":t[6]||(t[6]=a=>O(B)?B.value=a:null),class:"z-[90]",fullscreen:""},{default:n(()=>[m(z,{class:"absolute top-4 right-4",icon:"i-heroicons-x-mark",variant:"ghost",onClick:t[4]||(t[4]=()=>B.value=!1)}),_("div",Ke,[t[12]||(t[12]=_("h3",{class:"text-xl text-center"},"ComfyUI folders",-1)),_("div",null,[m(ee,{modelValue:o(V),"onUpdate:modelValue":t[5]||(t[5]=a=>O(V)?V.value=a:null),class:"mt-3",label:"Hide empty folders"},null,8,["modelValue"])]),m(oe,{links:o(x),class:"my-2"},{default:n(({link:a,isActive:re})=>[m(te,{color:re?"primary":"gray",class:"rounded-full truncate cursor-pointer select-none",onClick:()=>{e.value=a.to}},{default:n(()=>[g(f(a.label),1)]),_:2},1032,["color","onClick"])]),_:1},8,["links"]),m(se,{loading:o(U),"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},rows:o(r).filter(a=>o(V)?a.total_size>0:!0),columns:o(L),style:{"max-height":"80vh"}},{"full_path-data":n(({row:a})=>[_("span",{class:M({"text-blue-500":a.full_path in o(i),"cursor-pointer":a.full_path in o(i)}),onClick:()=>F(a)},f(a.full_path),11,Qe)]),"total_size-data":n(({row:a})=>[g(f(a.total_size?("formatBytes"in c?c.formatBytes:o($))(a.total_size):"-"),1)]),"create_time-data":n(({row:a})=>[g(f(a.create_time&&new Date(a.create_time).getTime()!==0?new Date(a.create_time).toLocaleString():"-"),1)]),_:1},8,["loading","rows","columns"])])]),_:1},8,["modelValue"])):v("",!0)]),o(u).isNextcloudIntegration?v("",!0):(d(),C(T,{key:0,size:"md",class:"py-3",label:"Show 'Open ComfyUI' navbar button",description:"Toggle Navbar button to open ComfyUI in a new tab (Stored in browser local storage	)"},{default:n(()=>[_("div",We,[m(ae,{modelValue:o(u).localSettings.showComfyUiNavbarButton,"onUpdate:modelValue":t[7]||(t[7]=a=>o(u).localSettings.showComfyUiNavbarButton=a),class:"mr-3"},null,8,["modelValue"]),m(z,{icon:"i-heroicons-rectangle-group-16-solid",variant:"outline",color:"white",to:("buildBackendUrl"in c?c.buildBackendUrl:o(Ue))()+"/comfy/",target:"_blank"},{default:n(()=>t[13]||(t[13]=[g(" Open ComfyUI ")])),_:1},8,["to"])])]),_:1})),m(ne,{class:"mt-3"})])):v("",!0)])])]),_:1})}}});export{lt as default};
