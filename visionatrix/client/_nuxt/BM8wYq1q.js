import{_ as I,a as C}from"./CnYlHb7E.js";import{_ as F}from"./CFrT0eEM.js";import{_ as O}from"./DIj-kcOr.js";import{_ as G,a as P}from"./jwXNdJFH.js";import{f as N,u as L,P as B,I as $,M as q,g as D,K as M,q as T,J as E,o as c,i as y,w as a,a as i,b as t,p as l,c as V,d as r,m as H,l as v,v as K}from"./CgZMe2Un.js";import{_ as R}from"./YbZGECbT.js";const j={class:"flex flex-col md:flex-row"},J={class:"px-5 pb-5 md:w-4/5"},Q={key:0,class:"admin-settings mb-3"},W={class:"flex items-center"},X={class:"flex items-center"},Y={key:1,class:"mb-5 py-4"},Z={class:"flex items-center space-x-3"},ee={class:"user-settings mb-3"},de=N({__name:"index",setup(oe){L({title:"Settings - Visionatrix",meta:[{name:"description",content:"Settings - Visionatrix"}]});const _=B(),o=$(),p=q();function h(){console.debug("Saving settings",o.settingsMap),Promise.all(Object.keys(o.settingsMap).map(n=>o.settingsMap[n].admin&&_.isAdmin?o.saveGlobalSetting(o.settingsMap[n].key,o.settingsMap[n].value,o.settingsMap[n].sensitive):o.saveUserSetting(o.settingsMap[n].key,o.settingsMap[n].value))).then(()=>{p.add({title:"Settings saved",description:"Settings saved successfully"})}).catch(n=>{p.add({title:"Error saving setting",description:n.message})})}const m=D(),w=M(null),x=M(!1);function U(){const n=w.value.$refs.input.files[0]||null;if(!n){p.add({title:"No file selected",description:"Please select a file to upload"});return}x.value=!0,m.uploadFlow(n).then(e=>{if(console.debug("uploadFlow",e),e&&"detail"in e&&(e==null?void 0:e.detail)!==""){p.add({title:"Error uploading flow",description:e.detail});return}else p.add({title:"Flow uploaded",description:"Flow uploaded successfully"});w.value.$refs.input.value=""}).catch(e=>{console.debug("uploadFlow error",e),p.add({title:"Error uploading flow",description:e.message})}).finally(()=>{x.value=!1})}return T(()=>m.outputMaxSize,()=>{m.saveUserOptions()}),E(()=>{o.loadAllSettings()}),(n,e)=>{const z=I,u=F,d=O,b=G,f=C,k=P,g=H,S=R,A=K;return c(),y(A,{class:"lg:h-dvh"},{default:a(()=>[i("div",j,[t(z,{links:l(o).links,class:"md:w-1/5"},null,8,["links"]),i("div",J,[l(_).isAdmin?(c(),V("div",Q,[e[18]||(e[18]=i("h3",{class:"mb-3 text-xl font-bold"},"Admin preferences (global settings)",-1)),t(d,{size:"md",class:"py-3",label:"Huggingface Auth token",description:"Bearer authentication token from your Huggingface account to allow downloading gated models with limited access."},{default:a(()=>[t(u,{modelValue:l(o).settingsMap.huggingface_auth_token.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l(o).settingsMap.huggingface_auth_token.value=s),placeholder:"Huggingface Auth token",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(d,{size:"md",class:"py-3",label:"CivitAI Auth Token",description:"Auth token for CivitAI flows and models."},{default:a(()=>[t(u,{modelValue:l(o).settingsMap.civitai_auth_token.value,"onUpdate:modelValue":e[1]||(e[1]=s=>l(o).settingsMap.civitai_auth_token.value=s),placeholder:"CivitAI Auth Token",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(b,{color:"blue",variant:"soft",icon:"i-heroicons-exclamation-circle",title:"Note"},{description:a(()=>e[15]||(e[15]=[r(" Access tokens are required for gated models. More information can be found "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/FlowsDeveloping/gated_models/",target:"_blank"},"here",-1),r(". ")])),_:1}),t(f,{class:"mt-3",label:"Gemini"}),e[19]||(e[19]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Can be used by flows and as a translation provider",-1)),t(d,{size:"md",class:"py-3",label:"Google API key"},{description:a(()=>e[16]||(e[16]=[r(" Global Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used. Instruction how to obtain key can be found "),i("a",{class:"hover:underline font-bold",href:"https://ai.google.dev/gemini-api/docs/api-key"},"here",-1),r(". ")])),default:a(()=>[t(u,{modelValue:l(o).settingsMap.google_api_key.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l(o).settingsMap.google_api_key.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(d,{size:"md",class:"py-3",label:"Gemini model",description:"Override Gemini model to use."},{default:a(()=>[i("div",W,[t(k,{modelValue:l(o).settingsMap.gemini_model.value,"onUpdate:modelValue":e[3]||(e[3]=s=>l(o).settingsMap.gemini_model.value=s),color:"white",variant:"outline",placeholder:"Select Gemini model",options:l(o).settingsMap.gemini_model.options},null,8,["modelValue","options"]),l(o).settingsMap.gemini_model.value?(c(),y(g,{key:0,icon:"i-heroicons-x-mark",variant:"outline",color:"white",class:"ml-2",onClick:e[4]||(e[4]=()=>l(o).settingsMap.gemini_model.value="")})):v("",!0)])]),_:1}),t(d,{size:"md",class:"py-3",label:"Proxy (for Google)"},{description:a(()=>e[17]||(e[17]=[r(" Proxy to access Gemini configuration "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/AdminManual/Installation/proxy_gemini/"},"string",-1),r(". ")])),default:a(()=>[t(u,{modelValue:l(o).settingsMap.google_proxy.value,"onUpdate:modelValue":e[5]||(e[5]=s=>l(o).settingsMap.google_proxy.value=s),placeholder:"Proxy",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(f,{class:"mt-3",label:"Ollama"}),e[20]||(e[20]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Can be used by flows and as a translation provider",-1)),t(d,{size:"md",class:"py-3",label:"Ollama URL",description:"URL to server where Ollama is running."},{default:a(()=>[t(u,{modelValue:l(o).settingsMap.ollama_url.value,"onUpdate:modelValue":e[6]||(e[6]=s=>l(o).settingsMap.ollama_url.value=s),placeholder:"Ollama URL",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(d,{size:"md",class:"py-3",label:"Ollama Vision Model",description:"Override Ollama Vision model used by default."},{default:a(()=>[t(u,{modelValue:l(o).settingsMap.ollama_vision_model.value,"onUpdate:modelValue":e[7]||(e[7]=s=>l(o).settingsMap.ollama_vision_model.value=s),placeholder:"Ollama Vision Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(d,{size:"md",class:"py-3",label:"Ollama LLM Model",description:"Override Ollama LLM model used by default."},{default:a(()=>[t(u,{modelValue:l(o).settingsMap.ollama_llm_model.value,"onUpdate:modelValue":e[8]||(e[8]=s=>l(o).settingsMap.ollama_llm_model.value=s),placeholder:"Ollama LLM Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(d,{size:"md",class:"py-3",label:"Ollama Keepalive",description:"Keep models in memory for specified minutes (e.g. 0.5 for 30 seconds). 0 unloads immediately; negative numbers keep indefinitely"},{default:a(()=>[t(u,{modelValue:l(o).settingsMap.ollama_keepalive.value,"onUpdate:modelValue":e[9]||(e[9]=s=>l(o).settingsMap.ollama_keepalive.value=s),placeholder:"Ollama Keepalive",class:"w-fit",type:"number",size:"md",step:"0.1",autocomplete:"off",onChange:e[10]||(e[10]=()=>{l(o).settingsMap.ollama_keepalive.value=l(o).settingsMap.ollama_keepalive.value.toString()})},null,8,["modelValue"])]),_:1}),t(f,{class:"mt-3",label:"Prompt translations"}),t(d,{size:"md",class:"py-3",label:"Translations provider",description:"Prompt translations provider. Empty if not enabled."},{default:a(()=>[i("div",X,[t(k,{modelValue:l(o).settingsMap.translations_provider.value,"onUpdate:modelValue":e[11]||(e[11]=s=>l(o).settingsMap.translations_provider.value=s),color:"white",variant:"outline",placeholder:"Select translations provider",options:l(o).settingsMap.translations_provider.options},null,8,["modelValue","options"]),l(o).settingsMap.translations_provider.value?(c(),y(g,{key:0,icon:"i-heroicons-x-mark",variant:"outline",color:"white",class:"ml-2",onClick:e[12]||(e[12]=()=>l(o).settingsMap.translations_provider.value="")})):v("",!0)])]),_:1})])):v("",!0),l(_).isAdmin?(c(),V("div",Y,[e[23]||(e[23]=i("h4",{class:"mb-3 font-bold"},"Upload Flow",-1)),e[24]||(e[24]=i("p",{class:"text-gray-400 text-sm mb-3"}," Upload a Visionatrix workflow file (.json) to add it to the available flows. Upon successful upload of a valid workflow file, the installation will start automatically. ",-1)),i("div",Z,[t(u,{ref_key:"flowFileInput",ref:w,type:"file",accept:".json",class:"w-auto"},null,512),t(g,{icon:"i-heroicons-arrow-up-tray-16-solid",variant:"outline",loading:l(x),onClick:U},{default:a(()=>e[21]||(e[21]=[r(" Upload Flow ")])),_:1},8,["loading"])]),t(b,{class:"mt-3",color:"blue",variant:"soft",icon:"i-heroicons-exclamation-circle",title:"Note"},{description:a(()=>e[22]||(e[22]=[r(" Requires a Visionatrix-adapted ComfyUI workflow, not a standard ComfyUI workflow. Instructions for adapting a ComfyUI workflow for Visionatrix are available "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/FlowsDeveloping/comfyui_vix_migration/"},"here",-1),r(". Custom workflows may require manual installation of dependencies (e.g., custom nodes) before upload. ")])),_:1})])):v("",!0),i("div",ee,[e[26]||(e[26]=i("h3",{class:"mb-3 text-xl font-bold"},"User preferences (overrides global)",-1)),t(d,{size:"md",class:"py-3",label:"Google API key"},{description:a(()=>e[25]||(e[25]=[r(" Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used. Instruction how to obtain key "),i("a",{class:"hover:underline font-bold",href:"https://ai.google.dev/gemini-api/docs/api-key"},"here",-1),r(". ")])),default:a(()=>[t(u,{modelValue:l(o).settingsMap.google_api_key_user.value,"onUpdate:modelValue":e[13]||(e[13]=s=>l(o).settingsMap.google_api_key_user.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(f,{class:"mt-3",label:"UI preferences"}),e[27]||(e[27]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Stored in browser local storage",-1)),t(d,{size:"md",class:"py-3",label:"Outputs maximum image size",description:"To keep the output seamless, we limit the size of the outputs (512px by default)."},{default:a(()=>[t(S,{modelValue:l(m).$state.outputMaxSize,"onUpdate:modelValue":e[14]||(e[14]=s=>l(m).$state.outputMaxSize=s),options:["512","768","1024","1536","2048"]},null,8,["modelValue"])]),_:1})]),t(g,{icon:"i-heroicons-check-16-solid",onClick:h},{default:a(()=>e[28]||(e[28]=[r(" Save ")])),_:1})])])]),_:1})}}});export{de as default};
