import{_ as A}from"./D9M9BLBl.js";import{f as O,u as G,q as I,s as P,v as C,g as N,x,n as L,h as y,w as n,p as $,o as m,a,b as l,j as t,c as k,d as v,i as w,k as q,l as B}from"./CDKl61T1.js";import{_ as E,a as j}from"./B9hwGN7M.js";import{_ as H,a as T}from"./Cp3au7vA.js";const R={class:"flex flex-col md:flex-row"},D={class:"px-5 pb-5 md:w-4/5"},W={key:0,class:"admin-settings mb-3"},J={class:"flex items-center"},K={class:"flex items-center"},Q={key:1,class:"upload-flow mb-5 py-4 rounded-md"},X={class:"flex items-center space-x-3"},Y={class:"user-settings mb-3"},se=O({__name:"index",setup(Z){G({title:"Settings - Visionatrix",meta:[{name:"description",content:"Settings - Visionatrix"}]});const V=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],c=I(),o=P(),r=C();function b(){console.debug("Saving settings",o.settingsMap),Promise.all(Object.keys(o.settingsMap).map(i=>o.settingsMap[i].admin&&c.isAdmin?o.saveGlobalSetting(o.settingsMap[i].key,o.settingsMap[i].value,o.settingsMap[i].sensitive):o.saveUserSetting(o.settingsMap[i].key,o.settingsMap[i].value))).then(()=>{r.add({title:"Settings saved",description:"Settings saved successfully"})}).catch(i=>{r.add({title:"Error saving setting",description:i.message})})}const p=N(),g=x(null),f=x(!1);function h(){const i=g.value.$refs.input.files[0]||null;if(!i){r.add({title:"No file selected",description:"Please select a file to upload"});return}f.value=!0,p.uploadFlow(i).then(e=>{if(console.debug("uploadFlow",e),e&&"detail"in e&&(e==null?void 0:e.detail)!==""){r.add({title:"Error uploading flow",description:e.detail});return}else r.add({title:"Flow uploaded",description:"Flow uploaded successfully"});g.value.$refs.input.value=""}).catch(e=>{console.debug("uploadFlow error",e),r.add({title:"Error uploading flow",description:e.message})}).finally(()=>{f.value=!1})}return L(()=>p.outputMaxSize,()=>{p.saveUserOptions()}),(i,e)=>{const M=A,U=q,u=E,d=H,S=T,_=B,z=j,F=$;return m(),y(F,{class:"lg:h-dvh"},{default:n(()=>[a("div",R,[l(M,{links:V,class:"md:w-1/5"}),a("div",D,[e[17]||(e[17]=a("h2",{class:"mb-3 text-xl"},"Settings",-1)),t(c).isAdmin?(m(),k("div",W,[e[11]||(e[11]=a("h3",{class:"mb-3"},"Admin settings",-1)),a("div",J,[l(U,{name:"i-heroicons-question-mark-circle",class:"mr-2 text-amber-400"}),e[10]||(e[10]=a("p",{class:"text-amber-400"},[a("span",null,"Access tokens are required for "),a("a",{class:"hover:underline underline-offset-4",href:"https://visionatrix.github.io/VixFlowsDocs/GatedModels.html",target:"_blank"},"gated models"),v(". ")],-1))]),l(d,{size:"md",class:"py-3",label:"Huggingface Auth token",description:"Bearer authentication token from your Huggingface account to allow downloading gated models with limited access"},{default:n(()=>[l(u,{modelValue:t(o).settingsMap.huggingface_auth_token.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t(o).settingsMap.huggingface_auth_token.value=s),placeholder:"Huggingface Auth token",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{size:"md",class:"py-3",label:"Google API key",description:"Global Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used"},{default:n(()=>[l(u,{modelValue:t(o).settingsMap.google_api_key.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t(o).settingsMap.google_api_key.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{size:"md",class:"py-3",label:"Proxy",description:"Proxy configuration string (to access Gemini)"},{default:n(()=>[l(u,{modelValue:t(o).settingsMap.google_proxy.value,"onUpdate:modelValue":e[2]||(e[2]=s=>t(o).settingsMap.google_proxy.value=s),placeholder:"Proxy",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{size:"md",class:"py-3",label:"Ollama URL",description:"URL to server where Ollama is running, required for flows using node with it"},{default:n(()=>[l(u,{modelValue:t(o).settingsMap.ollama_url.value,"onUpdate:modelValue":e[3]||(e[3]=s=>t(o).settingsMap.ollama_url.value=s),placeholder:"Ollama URL",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{size:"md",class:"py-3",label:"Ollama Vision Model",description:"Override Ollama Vision model used in workflows by default"},{default:n(()=>[l(u,{modelValue:t(o).settingsMap.ollama_vision_model.value,"onUpdate:modelValue":e[4]||(e[4]=s=>t(o).settingsMap.ollama_vision_model.value=s),placeholder:"Ollama Vision Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{size:"md",class:"py-3",label:"Ollama LLM Model",description:"Ollama LLM model used in workflows by default"},{default:n(()=>[l(u,{modelValue:t(o).settingsMap.ollama_llm_model.value,"onUpdate:modelValue":e[5]||(e[5]=s=>t(o).settingsMap.ollama_llm_model.value=s),placeholder:"Ollama Vision Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{size:"md",class:"py-3",label:"Translations provider",description:"Prompt translations provider. Empty if not enabled."},{default:n(()=>[a("div",K,[l(S,{modelValue:t(o).settingsMap.translations_provider.value,"onUpdate:modelValue":e[6]||(e[6]=s=>t(o).settingsMap.translations_provider.value=s),color:"white",variant:"outline",placeholder:"Select translations provider",options:t(o).settingsMap.translations_provider.options},null,8,["modelValue","options"]),t(o).settingsMap.translations_provider.value?(m(),y(_,{key:0,icon:"i-heroicons-x-mark",variant:"outline",color:"white",class:"ml-2",onClick:e[7]||(e[7]=()=>t(o).settingsMap.translations_provider.value="")})):w("",!0)])]),_:1})])):w("",!0),t(c).isAdmin?(m(),k("div",Q,[e[13]||(e[13]=a("h3",{class:"mb-3 text-xl font-bold"},"Upload Flow",-1)),e[14]||(e[14]=a("p",{class:"text-gray-400 text-sm mb-3"}," Upload a Visionatrix workflow file (.json) to add it to the available flows. On successful upload of the valid workflow file, the installation will start automatically. ",-1)),a("div",X,[l(u,{ref_key:"flowFileInput",ref:g,type:"file",accept:".json",class:"w-auto"},null,512),l(_,{icon:"i-heroicons-arrow-up-tray-16-solid",variant:"outline",loading:t(f),onClick:h},{default:n(()=>e[12]||(e[12]=[v(" Upload Flow ")])),_:1},8,["loading"])])])):w("",!0),a("div",Y,[e[15]||(e[15]=a("h3",{class:"mb-3"},"User settings",-1)),l(d,{size:"md",class:"py-3",label:"Google API key",description:"Google API key, required for Flows where, e.g. ComfyUI-Gemini Node is used"},{default:n(()=>[l(u,{modelValue:t(o).settingsMap.google_api_key_user.value,"onUpdate:modelValue":e[8]||(e[8]=s=>t(o).settingsMap.google_api_key_user.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{size:"md",class:"py-3",label:"Outputs maximum image size",description:"To keep the output seamless, we limit the size of the outputs (512px by default)"},{default:n(()=>[l(z,{modelValue:t(p).$state.outputMaxSize,"onUpdate:modelValue":e[9]||(e[9]=s=>t(p).$state.outputMaxSize=s),options:["512","768","1024","1536","2048"]},null,8,["modelValue"])]),_:1})]),l(_,{icon:"i-heroicons-check-16-solid",onClick:b},{default:n(()=>e[16]||(e[16]=[v(" Save ")])),_:1})])])]),_:1})}}});export{se as default};
