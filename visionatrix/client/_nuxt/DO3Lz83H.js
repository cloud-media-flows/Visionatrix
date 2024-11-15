<<<<<<<< HEAD:visionatrix/client/_nuxt/DO3Lz83H.js
import{_ as C,a as G}from"./BQFAFXeZ.js";import{_ as O,a as A}from"./BGGURP0E.js";import{_ as P,a as N,b as L}from"./DO0qOKmA.js";import{f as B,u as $,q,s as D,v as E,g as j,x as M,n as H,y as R,h as b,w as a,p as T,o as c,a as i,b as l,j as t,c as V,d,i as v,l as K}from"./DtxFqhnN.js";const W={class:"flex flex-col md:flex-row"},J={class:"px-5 pb-5 md:w-4/5"},Q={key:0,class:"admin-settings mb-3"},X={class:"flex items-center"},Y={class:"flex items-center"},Z={key:1,class:"mb-5 py-4"},ee={class:"flex items-center space-x-3"},oe={class:"user-settings mb-3"},ne=B({__name:"index",setup(te){$({title:"Settings - Visionatrix",meta:[{name:"description",content:"Settings - Visionatrix"}]});const h=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],_=q(),o=D(),p=E();function U(){console.debug("Saving settings",o.settingsMap),Promise.all(Object.keys(o.settingsMap).map(n=>o.settingsMap[n].admin&&_.isAdmin?o.saveGlobalSetting(o.settingsMap[n].key,o.settingsMap[n].value,o.settingsMap[n].sensitive):o.saveUserSetting(o.settingsMap[n].key,o.settingsMap[n].value))).then(()=>{p.add({title:"Settings saved",description:"Settings saved successfully"})}).catch(n=>{p.add({title:"Error saving setting",description:n.message})})}const m=j(),x=M(null),w=M(!1);function S(){const n=x.value.$refs.input.files[0]||null;if(!n){p.add({title:"No file selected",description:"Please select a file to upload"});return}w.value=!0,m.uploadFlow(n).then(e=>{if(console.debug("uploadFlow",e),e&&"detail"in e&&(e==null?void 0:e.detail)!==""){p.add({title:"Error uploading flow",description:e.detail});return}else p.add({title:"Flow uploaded",description:"Flow uploaded successfully"});x.value.$refs.input.value=""}).catch(e=>{console.debug("uploadFlow error",e),p.add({title:"Error uploading flow",description:e.message})}).finally(()=>{w.value=!1})}return H(()=>m.outputMaxSize,()=>{m.saveUserOptions()}),R(()=>{o.loadAllSettings()}),(n,e)=>{const z=C,u=O,r=P,y=N,g=G,k=L,f=K,F=A,I=T;return c(),b(I,{class:"lg:h-dvh"},{default:a(()=>[i("div",W,[l(z,{links:h,class:"md:w-1/5"}),i("div",J,[t(_).isAdmin?(c(),V("div",Q,[e[17]||(e[17]=i("h3",{class:"mb-3 text-xl font-bold"},"Admin preferences (global settings)",-1)),l(r,{size:"md",class:"py-3",label:"Huggingface Auth token",description:"Bearer authentication token from your Huggingface account to allow downloading gated models with limited access."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.huggingface_auth_token.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t(o).settingsMap.huggingface_auth_token.value=s),placeholder:"Huggingface Auth token",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(y,{color:"blue",variant:"soft",icon:"i-heroicons-exclamation-circle",title:"Note"},{description:a(()=>e[14]||(e[14]=[d(" Access tokens are required for gated models. More information can be found "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/GatedModels.html",target:"_blank"},"here",-1),d(". ")])),_:1}),l(g,{class:"mt-3",label:"Gemini"}),e[18]||(e[18]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Can be used by flows and as a translation provider",-1)),l(r,{size:"md",class:"py-3",label:"Google API key"},{description:a(()=>e[15]||(e[15]=[d(" Global Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used. Instruction how to obtain key can be found "),i("a",{class:"hover:underline font-bold",href:"https://ai.google.dev/gemini-api/docs/api-key"},"here",-1),d(". ")])),default:a(()=>[l(u,{modelValue:t(o).settingsMap.google_api_key.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t(o).settingsMap.google_api_key.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Gemini model",description:"Override Gemini model to use."},{default:a(()=>[i("div",X,[l(k,{modelValue:t(o).settingsMap.gemini_model.value,"onUpdate:modelValue":e[2]||(e[2]=s=>t(o).settingsMap.gemini_model.value=s),color:"white",variant:"outline",placeholder:"Select Gemini model",options:t(o).settingsMap.gemini_model.options},null,8,["modelValue","options"]),t(o).settingsMap.gemini_model.value?(c(),b(f,{key:0,icon:"i-heroicons-x-mark",variant:"outline",color:"white",class:"ml-2",onClick:e[3]||(e[3]=()=>t(o).settingsMap.gemini_model.value="")})):v("",!0)])]),_:1}),l(r,{size:"md",class:"py-3",label:"Proxy (for Google)"},{description:a(()=>e[16]||(e[16]=[d(" Proxy to access Gemini configuration "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/AdminManual/Installation/proxy_gemini/"},"string",-1),d(". ")])),default:a(()=>[l(u,{modelValue:t(o).settingsMap.google_proxy.value,"onUpdate:modelValue":e[4]||(e[4]=s=>t(o).settingsMap.google_proxy.value=s),placeholder:"Proxy",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(g,{class:"mt-3",label:"Ollama"}),e[19]||(e[19]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Can be used by flows and as a translation provider",-1)),l(r,{size:"md",class:"py-3",label:"Ollama URL",description:"URL to server where Ollama is running."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_url.value,"onUpdate:modelValue":e[5]||(e[5]=s=>t(o).settingsMap.ollama_url.value=s),placeholder:"Ollama URL",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Ollama Vision Model",description:"Override Ollama Vision model used by default."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_vision_model.value,"onUpdate:modelValue":e[6]||(e[6]=s=>t(o).settingsMap.ollama_vision_model.value=s),placeholder:"Ollama Vision Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Ollama LLM Model",description:"Override Ollama LLM model used by default."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_llm_model.value,"onUpdate:modelValue":e[7]||(e[7]=s=>t(o).settingsMap.ollama_llm_model.value=s),placeholder:"Ollama LLM Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Ollama Keepalive",description:"Keep models in memory for specified minutes (e.g. 0.5 for 30 seconds). 0 unloads immediately; negative numbers keep indefinitely"},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_keepalive.value,"onUpdate:modelValue":e[8]||(e[8]=s=>t(o).settingsMap.ollama_keepalive.value=s),placeholder:"Ollama Keepalive",class:"w-fit",type:"number",size:"md",step:"0.1",autocomplete:"off",onChange:e[9]||(e[9]=()=>{t(o).settingsMap.ollama_keepalive.value=t(o).settingsMap.ollama_keepalive.value.toString()})},null,8,["modelValue"])]),_:1}),l(g,{class:"mt-3",label:"Prompt translations"}),l(r,{size:"md",class:"py-3",label:"Translations provider",description:"Prompt translations provider. Empty if not enabled."},{default:a(()=>[i("div",Y,[l(k,{modelValue:t(o).settingsMap.translations_provider.value,"onUpdate:modelValue":e[10]||(e[10]=s=>t(o).settingsMap.translations_provider.value=s),color:"white",variant:"outline",placeholder:"Select translations provider",options:t(o).settingsMap.translations_provider.options},null,8,["modelValue","options"]),t(o).settingsMap.translations_provider.value?(c(),b(f,{key:0,icon:"i-heroicons-x-mark",variant:"outline",color:"white",class:"ml-2",onClick:e[11]||(e[11]=()=>t(o).settingsMap.translations_provider.value="")})):v("",!0)])]),_:1})])):v("",!0),t(_).isAdmin?(c(),V("div",Z,[e[22]||(e[22]=i("h4",{class:"mb-3 font-bold"},"Upload Flow",-1)),e[23]||(e[23]=i("p",{class:"text-gray-400 text-sm mb-3"}," Upload a Visionatrix workflow file (.json) to add it to the available flows. Upon successful upload of a valid workflow file, the installation will start automatically. ",-1)),i("div",ee,[l(u,{ref_key:"flowFileInput",ref:x,type:"file",accept:".json",class:"w-auto"},null,512),l(f,{icon:"i-heroicons-arrow-up-tray-16-solid",variant:"outline",loading:t(w),onClick:S},{default:a(()=>e[20]||(e[20]=[d(" Upload Flow ")])),_:1},8,["loading"])]),l(y,{class:"mt-3",color:"blue",variant:"soft",icon:"i-heroicons-exclamation-circle",title:"Note"},{description:a(()=>e[21]||(e[21]=[d(" Requires a Visionatrix-adapted ComfyUI workflow, not a standard ComfyUI workflow. Instructions for adapting a ComfyUI workflow for Visionatrix are available "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/FlowsDeveloping/comfyui_vix_migration/"},"here",-1),d(". Custom workflows may require manual installation of dependencies (e.g., custom nodes) before upload. ")])),_:1})])):v("",!0),i("div",oe,[e[25]||(e[25]=i("h3",{class:"mb-3 text-xl font-bold"},"User preferences (overrides global)",-1)),l(r,{size:"md",class:"py-3",label:"Google API key"},{description:a(()=>e[24]||(e[24]=[d(" Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used. Instruction how to obtain key "),i("a",{class:"hover:underline font-bold",href:"https://ai.google.dev/gemini-api/docs/api-key"},"here",-1),d(". ")])),default:a(()=>[l(u,{modelValue:t(o).settingsMap.google_api_key_user.value,"onUpdate:modelValue":e[12]||(e[12]=s=>t(o).settingsMap.google_api_key_user.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(g,{class:"mt-3",label:"UI preferences"}),e[26]||(e[26]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Stored in browser local storage",-1)),l(r,{size:"md",class:"py-3",label:"Outputs maximum image size",description:"To keep the output seamless, we limit the size of the outputs (512px by default)."},{default:a(()=>[l(F,{modelValue:t(m).$state.outputMaxSize,"onUpdate:modelValue":e[13]||(e[13]=s=>t(m).$state.outputMaxSize=s),options:["512","768","1024","1536","2048"]},null,8,["modelValue"])]),_:1})]),l(f,{icon:"i-heroicons-check-16-solid",onClick:U},{default:a(()=>e[27]||(e[27]=[d(" Save ")])),_:1})])])]),_:1})}}});export{ne as default};
========
import{_ as C,a as G}from"./CSy-C03r.js";import{_ as O,a as A}from"./CKBumQZ0.js";import{_ as P,a as N,b as L}from"./h0XIw51-.js";import{f as B,u as $,q,s as D,v as E,g as H,x as M,n as R,y as T,o as c,i as b,w as a,a as i,b as l,m as t,c as V,d,k as j,l as v,p as K}from"./B2NO93_8.js";const W={class:"flex flex-col md:flex-row"},J={class:"px-5 pb-5 md:w-4/5"},Q={key:0,class:"admin-settings mb-3"},X={class:"flex items-center"},Y={class:"flex items-center"},Z={key:1,class:"mb-5 py-4"},ee={class:"flex items-center space-x-3"},oe={class:"user-settings mb-3"},ne=B({__name:"index",setup(te){$({title:"Settings - Visionatrix",meta:[{name:"description",content:"Settings - Visionatrix"}]});const h=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],_=q(),o=D(),p=E();function U(){console.debug("Saving settings",o.settingsMap),Promise.all(Object.keys(o.settingsMap).map(n=>o.settingsMap[n].admin&&_.isAdmin?o.saveGlobalSetting(o.settingsMap[n].key,o.settingsMap[n].value,o.settingsMap[n].sensitive):o.saveUserSetting(o.settingsMap[n].key,o.settingsMap[n].value))).then(()=>{p.add({title:"Settings saved",description:"Settings saved successfully"})}).catch(n=>{p.add({title:"Error saving setting",description:n.message})})}const m=H(),x=M(null),w=M(!1);function S(){const n=x.value.$refs.input.files[0]||null;if(!n){p.add({title:"No file selected",description:"Please select a file to upload"});return}w.value=!0,m.uploadFlow(n).then(e=>{if(console.debug("uploadFlow",e),e&&"detail"in e&&(e==null?void 0:e.detail)!==""){p.add({title:"Error uploading flow",description:e.detail});return}else p.add({title:"Flow uploaded",description:"Flow uploaded successfully"});x.value.$refs.input.value=""}).catch(e=>{console.debug("uploadFlow error",e),p.add({title:"Error uploading flow",description:e.message})}).finally(()=>{w.value=!1})}return R(()=>m.outputMaxSize,()=>{m.saveUserOptions()}),T(()=>{o.loadAllSettings()}),(n,e)=>{const z=C,u=O,r=P,y=N,g=G,k=L,f=j,F=A,I=K;return c(),b(I,{class:"lg:h-dvh"},{default:a(()=>[i("div",W,[l(z,{links:h,class:"md:w-1/5"}),i("div",J,[t(_).isAdmin?(c(),V("div",Q,[e[17]||(e[17]=i("h3",{class:"mb-3 text-xl font-bold"},"Admin preferences (global settings)",-1)),l(r,{size:"md",class:"py-3",label:"Huggingface Auth token",description:"Bearer authentication token from your Huggingface account to allow downloading gated models with limited access."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.huggingface_auth_token.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t(o).settingsMap.huggingface_auth_token.value=s),placeholder:"Huggingface Auth token",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(y,{color:"blue",variant:"soft",icon:"i-heroicons-exclamation-circle",title:"Note"},{description:a(()=>e[14]||(e[14]=[d(" Access tokens are required for gated models. More information can be found "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/GatedModels.html",target:"_blank"},"here",-1),d(". ")])),_:1}),l(g,{class:"mt-3",label:"Gemini"}),e[18]||(e[18]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Can be used by flows and as a translation provider",-1)),l(r,{size:"md",class:"py-3",label:"Google API key"},{description:a(()=>e[15]||(e[15]=[d(" Global Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used. Instruction how to obtain key can be found "),i("a",{class:"hover:underline font-bold",href:"https://ai.google.dev/gemini-api/docs/api-key"},"here",-1),d(". ")])),default:a(()=>[l(u,{modelValue:t(o).settingsMap.google_api_key.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t(o).settingsMap.google_api_key.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Gemini model",description:"Override Gemini model to use."},{default:a(()=>[i("div",X,[l(k,{modelValue:t(o).settingsMap.gemini_model.value,"onUpdate:modelValue":e[2]||(e[2]=s=>t(o).settingsMap.gemini_model.value=s),color:"white",variant:"outline",placeholder:"Select Gemini model",options:t(o).settingsMap.gemini_model.options},null,8,["modelValue","options"]),t(o).settingsMap.gemini_model.value?(c(),b(f,{key:0,icon:"i-heroicons-x-mark",variant:"outline",color:"white",class:"ml-2",onClick:e[3]||(e[3]=()=>t(o).settingsMap.gemini_model.value="")})):v("",!0)])]),_:1}),l(r,{size:"md",class:"py-3",label:"Proxy (for Google)"},{description:a(()=>e[16]||(e[16]=[d(" Proxy to access Gemini configuration "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/AdminManual/Installation/proxy_gemini/"},"string",-1),d(". ")])),default:a(()=>[l(u,{modelValue:t(o).settingsMap.google_proxy.value,"onUpdate:modelValue":e[4]||(e[4]=s=>t(o).settingsMap.google_proxy.value=s),placeholder:"Proxy",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(g,{class:"mt-3",label:"Ollama"}),e[19]||(e[19]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Can be used by flows and as a translation provider",-1)),l(r,{size:"md",class:"py-3",label:"Ollama URL",description:"URL to server where Ollama is running."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_url.value,"onUpdate:modelValue":e[5]||(e[5]=s=>t(o).settingsMap.ollama_url.value=s),placeholder:"Ollama URL",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Ollama Vision Model",description:"Override Ollama Vision model used by default."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_vision_model.value,"onUpdate:modelValue":e[6]||(e[6]=s=>t(o).settingsMap.ollama_vision_model.value=s),placeholder:"Ollama Vision Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Ollama LLM Model",description:"Override Ollama LLM model used by default."},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_llm_model.value,"onUpdate:modelValue":e[7]||(e[7]=s=>t(o).settingsMap.ollama_llm_model.value=s),placeholder:"Ollama LLM Model",class:"w-full",type:"text",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(r,{size:"md",class:"py-3",label:"Ollama Keepalive",description:"Keep models in memory for specified minutes (e.g. 0.5 for 30 seconds). 0 unloads immediately; negative numbers keep indefinitely"},{default:a(()=>[l(u,{modelValue:t(o).settingsMap.ollama_keepalive.value,"onUpdate:modelValue":e[8]||(e[8]=s=>t(o).settingsMap.ollama_keepalive.value=s),placeholder:"Ollama Keepalive",class:"w-fit",type:"number",size:"md",step:"0.1",autocomplete:"off",onChange:e[9]||(e[9]=()=>{t(o).settingsMap.ollama_keepalive.value=t(o).settingsMap.ollama_keepalive.value.toString()})},null,8,["modelValue"])]),_:1}),l(g,{class:"mt-3",label:"Prompt translations"}),l(r,{size:"md",class:"py-3",label:"Translations provider",description:"Prompt translations provider. Empty if not enabled."},{default:a(()=>[i("div",Y,[l(k,{modelValue:t(o).settingsMap.translations_provider.value,"onUpdate:modelValue":e[10]||(e[10]=s=>t(o).settingsMap.translations_provider.value=s),color:"white",variant:"outline",placeholder:"Select translations provider",options:t(o).settingsMap.translations_provider.options},null,8,["modelValue","options"]),t(o).settingsMap.translations_provider.value?(c(),b(f,{key:0,icon:"i-heroicons-x-mark",variant:"outline",color:"white",class:"ml-2",onClick:e[11]||(e[11]=()=>t(o).settingsMap.translations_provider.value="")})):v("",!0)])]),_:1})])):v("",!0),t(_).isAdmin?(c(),V("div",Z,[e[22]||(e[22]=i("h4",{class:"mb-3 font-bold"},"Upload Flow",-1)),e[23]||(e[23]=i("p",{class:"text-gray-400 text-sm mb-3"}," Upload a Visionatrix workflow file (.json) to add it to the available flows. Upon successful upload of a valid workflow file, the installation will start automatically. ",-1)),i("div",ee,[l(u,{ref_key:"flowFileInput",ref:x,type:"file",accept:".json",class:"w-auto"},null,512),l(f,{icon:"i-heroicons-arrow-up-tray-16-solid",variant:"outline",loading:t(w),onClick:S},{default:a(()=>e[20]||(e[20]=[d(" Upload Flow ")])),_:1},8,["loading"])]),l(y,{class:"mt-3",color:"blue",variant:"soft",icon:"i-heroicons-exclamation-circle",title:"Note"},{description:a(()=>e[21]||(e[21]=[d(" Requires a Visionatrix-adapted ComfyUI workflow, not a standard ComfyUI workflow. Instructions for adapting a ComfyUI workflow for Visionatrix are available "),i("a",{class:"hover:underline font-bold",href:"https://visionatrix.github.io/VixFlowsDocs/FlowsDeveloping/comfyui_vix_migration/"},"here",-1),d(". Custom workflows may require manual installation of dependencies (e.g., custom nodes) before upload. ")])),_:1})])):v("",!0),i("div",oe,[e[25]||(e[25]=i("h3",{class:"mb-3 text-xl font-bold"},"User preferences (overrides global)",-1)),l(r,{size:"md",class:"py-3",label:"Google API key"},{description:a(()=>e[24]||(e[24]=[d(" Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used. Instruction how to obtain key "),i("a",{class:"hover:underline font-bold",href:"https://ai.google.dev/gemini-api/docs/api-key"},"here",-1),d(". ")])),default:a(()=>[l(u,{modelValue:t(o).settingsMap.google_api_key_user.value,"onUpdate:modelValue":e[12]||(e[12]=s=>t(o).settingsMap.google_api_key_user.value=s),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md",autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(g,{class:"mt-3",label:"UI preferences"}),e[26]||(e[26]=i("p",{class:"text-slate text-sm text-orange-300 dark:text-orange-100 text-center"},"Stored in browser local storage",-1)),l(r,{size:"md",class:"py-3",label:"Outputs maximum image size",description:"To keep the output seamless, we limit the size of the outputs (512px by default)."},{default:a(()=>[l(F,{modelValue:t(m).$state.outputMaxSize,"onUpdate:modelValue":e[13]||(e[13]=s=>t(m).$state.outputMaxSize=s),options:["512","768","1024","1536","2048"]},null,8,["modelValue"])]),_:1})]),l(f,{icon:"i-heroicons-check-16-solid",onClick:U},{default:a(()=>e[27]||(e[27]=[d(" Save ")])),_:1})])])]),_:1})}}});export{ne as default};
>>>>>>>> cf42774 (chore: build-client):visionatrix/client/_nuxt/DqJBXfkW.js
