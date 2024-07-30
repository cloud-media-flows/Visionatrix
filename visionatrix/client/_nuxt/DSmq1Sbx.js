import{_ as S}from"./DDvezOak.js";import{g as F,u as A,v as z,x as G,h as I,y as w,i as P,w as n,s as C,o as _,a,b as t,k as s,c as v,j as y,d as f,z as u,l as O,m as N}from"./DzO3x-f9.js";import{_ as B}from"./DmnQI-6J.js";import{_ as q}from"./BKII-2FS.js";import"./fGnOYTS6.js";const j={class:"flex flex-col md:flex-row"},E={class:"px-5 pb-5 md:w-4/5"},H=a("h2",{class:"mb-3 text-xl"},"Settings",-1),$={key:0,class:"admin-settings mb-3"},L=a("h3",{class:"mb-3"},"Admin settings",-1),R={class:"flex items-center"},T=a("p",{class:"text-amber-400"},[a("span",null,"Access tokens are required for "),a("a",{class:"hover:underline underline-offset-4",href:"https://visionatrix.github.io/VixFlowsDocs/GatedModels.html",target:"_blank"},"gated models"),f(". ")],-1),D={key:1,class:"upload-flow mb-5 py-4 rounded-md"},W=a("h3",{class:"mb-3 text-xl font-bold"},"Upload Flow",-1),J=a("p",{class:"text-gray-400 text-sm mb-3"}," Upload a Visionatrix workflow file (.json) to add it to the available flows. On successful upload of the valid workflow file, the installation will start automatically. ",-1),K={class:"flex items-center space-x-3"},Q={class:"user-settings mb-3"},X=a("h3",{class:"mb-3"},"User settings",-1),le=F({__name:"index",setup(Y){A({title:"Settings - Visionatrix",meta:[{name:"description",content:"Settings - Visionatrix"}]});const x=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],p=z(),o=G();function k(){console.debug("Saving settings",o.settingsMap.value),Promise.all(Object.keys(o.settingsMap).map(l=>o.settingsMap[l].admin&&p.isAdmin?o.saveGlobalSetting(o.settingsMap[l].key,o.settingsMap[l].value,o.settingsMap[l].sensitive):o.saveUserSetting(o.settingsMap[l].key,o.settingsMap[l].value))).then(()=>{u().add({title:"Settings saved",description:"Settings saved successfully"})}).catch(l=>{u().add({title:"Error saving setting",description:l.message})})}const b=I(),m=w(null),g=w(!1);function V(){const l=m.value.$refs.input.files[0]||null;if(!l){u().add({title:"No file selected",description:"Please select a file to upload"});return}g.value=!0,b.uploadFlow(l).then(e=>{console.debug("uploadFlow",e);const c=u();if(e&&"detail"in e&&(e==null?void 0:e.detail)!==""){c.add({title:"Error uploading flow",description:e.detail});return}else c.add({title:"Flow uploaded",description:"Flow uploaded successfully"});m.value.$refs.input.value=""}).catch(e=>{console.debug("uploadFlow error",e),u().add({title:"Error uploading flow",description:e.message})}).finally(()=>{g.value=!1})}return(l,e)=>{const c=S,M=O,d=B,r=q,h=N,U=C;return _(),P(U,{class:"lg:h-dvh"},{default:n(()=>[a("div",j,[t(c,{links:x,class:"md:w-1/5"}),a("div",E,[H,s(p).isAdmin?(_(),v("div",$,[L,a("div",R,[t(M,{name:"i-heroicons-question-mark-circle",class:"mr-2 text-amber-400"}),T]),t(r,{size:"md",class:"py-3",label:"Huggingface Auth token",description:"Bearer authentication token from your Huggingface account to allow downloading gated models with limited access"},{default:n(()=>[t(d,{modelValue:s(o).settingsMap.huggingface_auth_token.value,"onUpdate:modelValue":e[0]||(e[0]=i=>s(o).settingsMap.huggingface_auth_token.value=i),placeholder:"Huggingface Auth token",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md"},null,8,["modelValue"])]),_:1}),t(r,{size:"md",class:"py-3",label:"Google API key",description:"Global Google API key, required for Flows, e.g. where ComfyUI-Gemini Node is used"},{default:n(()=>[t(d,{modelValue:s(o).settingsMap.google_api_key.value,"onUpdate:modelValue":e[1]||(e[1]=i=>s(o).settingsMap.google_api_key.value=i),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md"},null,8,["modelValue"])]),_:1}),t(r,{size:"md",class:"py-3",label:"Proxy",description:"Proxy configuration string (to access Gemini)"},{default:n(()=>[t(d,{modelValue:s(o).settingsMap.google_proxy.value,"onUpdate:modelValue":e[2]||(e[2]=i=>s(o).settingsMap.google_proxy.value=i),placeholder:"Proxy",class:"w-full",type:"text",size:"md"},null,8,["modelValue"])]),_:1}),t(r,{size:"md",class:"py-3",label:"Ollama URL",description:"URL to server where Ollama is running, required for flows using node with it"},{default:n(()=>[t(d,{modelValue:s(o).settingsMap.ollama_url.value,"onUpdate:modelValue":e[3]||(e[3]=i=>s(o).settingsMap.ollama_url.value=i),placeholder:"Ollama URL",class:"w-full",type:"text",size:"md"},null,8,["modelValue"])]),_:1}),t(r,{size:"md",class:"py-3",label:"Ollama Vision Model",description:"Override Ollama Vision model used in workflows by default"},{default:n(()=>[t(d,{modelValue:s(o).settingsMap.ollama_vision_model.value,"onUpdate:modelValue":e[4]||(e[4]=i=>s(o).settingsMap.ollama_vision_model.value=i),placeholder:"Ollama Vision Model",class:"w-full",type:"text",size:"md"},null,8,["modelValue"])]),_:1})])):y("",!0),s(p).isAdmin?(_(),v("div",D,[W,J,a("div",K,[t(d,{ref_key:"flowFileInput",ref:m,type:"file",accept:".json",class:"w-auto"},null,512),t(h,{icon:"i-heroicons-arrow-up-tray-16-solid",variant:"outline",loading:s(g),onClick:V},{default:n(()=>[f(" Upload Flow ")]),_:1},8,["loading"])])])):y("",!0),a("div",Q,[X,t(r,{size:"md",class:"py-3",label:"Google API key",description:"Google API key, required for Flows where, e.g. ComfyUI-Gemini Node is used"},{default:n(()=>[t(d,{modelValue:s(o).settingsMap.google_api_key_user.value,"onUpdate:modelValue":e[5]||(e[5]=i=>s(o).settingsMap.google_api_key_user.value=i),placeholder:"Google API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md"},null,8,["modelValue"])]),_:1})]),t(h,{icon:"i-heroicons-check-16-solid",onClick:k},{default:n(()=>[f(" Save ")]),_:1})])])]),_:1})}}});export{le as default};