import{a as Y,_ as Z}from"./BdglOJTp.js";import{_ as fe,o as s,c as p,a as c,x as f,n as u,t as C,l as k,F as $,r as E,b as U,y as v,i as I,m as G,h as H,U as q,d as ge,f as ye,A as me,B as L,C as he,D as J,s as g,V as K,W as F,K as be,X as O,q as ke,Y as T,Z as Se}from"./CgZMe2Un.js";const ve={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",expanded:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function Ce(e){return e?e[0].toUpperCase()+e.slice(1):""}const m=he(J.ui.strategy,J.ui.table,ve);function we(e,l){return Se(e,l)}function W(e,l,h){return e===l?0:h==="asc"?e<l?-1:1:e>l?-1:1}function X(e){return new Set(e.map(l=>JSON.stringify(l)))}function Be(e){return l=>O(l,e)}const Re=ye({components:{UIcon:H,UButton:G,UProgress:Z,UCheckbox:Y},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>we},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>m.default.sortButton},sortAscIcon:{type:String,default:()=>m.default.sortAscIcon},sortDescIcon:{type:String,default:()=>m.default.sortDescIcon},expandButton:{type:Object,default:()=>m.default.expandButton},expand:{type:Object,default:()=>null},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>m.default.loadingState},emptyState:{type:Object,default:()=>m.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>m.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},multipleExpand:{type:Boolean,default:!0},singleSelect:{type:Boolean,default:!1}},emits:["update:modelValue","update:sort","update:expand","select:all"],setup(e,{emit:l,attrs:h}){const{ui:w,attrs:z}=me("table",L(e,"ui"),m,L(e,"class")),j=g(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:Ce(t),sortable:!1,class:void 0,sort:W}))),i=K(e,"sort",l,{passive:!0,defaultValue:F({},e.sort,{column:null,direction:"asc"})}),y=K(e,"expand",l,{passive:!0,defaultValue:F({},e.expand,{openedRows:[],row:null})}),B=be(null),R={column:i.value.column,direction:null},a=g(()=>{var d;if(!((d=i.value)!=null&&d.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:n}=i.value;return e.rows.slice().sort((D,ue)=>{var M;const de=O(D,t),ce=O(ue,t);return(((M=j.value.find(pe=>pe.key===t))==null?void 0:M.sort)??W)(de,ce,n)})}),o=g({get(){return e.modelValue},set(t){l("update:modelValue",t)}}),r=g(()=>e.rows.length),S=g(()=>{const t=X(o.value),n=X(e.rows);return Array.from(t).filter(d=>n.has(d)).length}),A=g(()=>!o.value||!e.rows?!1:S.value>0&&S.value<r.value),b=g(()=>S.value===r.value),Q=g(()=>e.emptyState===null?null:{...w.value.default.emptyState,...e.emptyState}),x=g(()=>e.loadingState===null?null:{...w.value.default.loadingState,...e.loadingState});function V(t,n){if(typeof e.by=="string"){const d=Be(e.by);return d(t)===d(n)}return e.by(t,n)}function N(t){return e.modelValue?o.value.some(n=>V(T(n),T(t))):!1}function _(t){if(i.value.column===t.key){const n=!t.direction||t.direction==="asc"?"desc":"asc";i.value.direction===n?i.value=F({},R,{column:null,direction:"asc"}):i.value={column:i.value.column,direction:i.value.direction==="asc"?"desc":"asc"}}else i.value={column:t.key,direction:t.direction||"asc"}}function ee(t){const n=window.getSelection();n&&n.toString().length>0||h.onSelect&&h.onSelect(t)}function te(t,n){h.onContextmenu&&h.onContextmenu(t,n)}function ae(){const t=[...o.value];e.rows.forEach(n=>{N(n)||t.push(n)}),o.value=t}function ne(t){t?ae():o.value=[],l("select:all",t)}function oe(t,n){if(t)o.value=e.singleSelect?[n]:[...o.value,n];else{const d=o.value.findIndex(D=>V(D,n));o.value.splice(d,1)}}function se(t,n,d=""){return O(t,n,d)}function P(t){var n;return(n=y.value)!=null&&n.openedRows?y.value.openedRows.some(d=>V(d,t)):!1}function le(t,n){return e.columns?t===0&&!e.columns.find(d=>d.key===n):t===0}function ie(t){y.value={openedRows:P(t)?y.value.openedRows.filter(n=>!V(n,t)):e.multipleExpand?[...y.value.openedRows,t]:[t],row:t}}function re(t){if(t.sortable){if(i.value.column!==t.key)return"none";if(i.value.direction==="asc")return"ascending";if(i.value.direction==="desc")return"descending"}}return ke(a,()=>{B.value=new Date},{deep:!0}),{ui:w,attrs:z,sort:i,columns:j,rows:a,selected:o,indeterminate:A,emptyState:Q,loadingState:x,isAllRowChecked:b,onChangeCheckbox:oe,isSelected:N,onSort:_,onSelect:ee,onContextmenu:te,onChange:ne,getRowData:se,toggleOpened:ie,getAriaSort:re,isExpanded:P,shouldRenderColumnInFirstPlace:le,retriggerSlot:B}}}),Ae=["aria-sort"],Ve={key:1},$e={key:0},Ie={key:0},Oe=["colspan"],je={key:1},De=["colspan"],Ee=["onClick","onContextmenu"],Ue={key:0},Fe={colspan:"100%"};function ze(e,l,h,w,z,j){const i=Y,y=G,B=Z,R=H;return s(),p("div",v({class:e.ui.wrapper},e.attrs),[c("table",{class:u([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?f(e.$slots,"caption",{key:0},()=>[c("caption",{class:u(e.ui.caption)},C(e.caption),3)]):k("",!0),c("thead",{class:u(e.ui.thead)},[c("tr",{class:u(e.ui.tr.base)},[e.expand?(s(),p("th",{key:0,scope:"col",class:u(e.ui.tr.base)},l[0]||(l[0]=[c("span",{class:"sr-only"},"Expand",-1)]),2)):k("",!0),(s(!0),p($,null,E(e.columns,(a,o)=>(s(),p("th",{key:o,scope:"col",class:u([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.key==="select"&&e.ui.checkbox.padding,a.class]),"aria-sort":e.getAriaSort(a)},[!e.singleSelect&&e.modelValue&&(a.key==="select"||e.shouldRenderColumnInFirstPlace(o,"select"))?f(e.$slots,"select-header",{key:0,indeterminate:e.indeterminate,checked:e.isAllRowChecked,change:e.onChange},()=>[U(i,v({"model-value":e.isAllRowChecked,indeterminate:e.indeterminate,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])]):f(e.$slots,`${a.key}-header`,{key:1,column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(s(),I(y,v({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:r=>e.onSort(a)}),null,16,["icon","label","onClick"])):(s(),p("span",Ve,C(a[e.columnAttribute]),1))])],10,Ae))),128))],2),e.loading&&e.progress?(s(),p("tr",$e,[c("td",{colspan:0,class:u(e.ui.progress.wrapper)},[U(B,v({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):k("",!0)],2),c("tbody",{class:u(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(s(),p("tr",Ie,[c("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[f(e.$slots,"loading-state",{},()=>[c("div",{class:u(e.ui.loadingState.wrapper)},[e.loadingState.icon?(s(),I(R,{key:0,name:e.loadingState.icon,class:u(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):k("",!0),c("p",{class:u(e.ui.loadingState.label)},C(e.loadingState.label),3)],2)])],8,Oe)])):e.emptyState&&!e.rows.length?(s(),p("tr",je,[c("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[f(e.$slots,"empty-state",{},()=>[c("div",{class:u(e.ui.emptyState.wrapper)},[e.emptyState.icon?(s(),I(R,{key:0,name:e.emptyState.icon,class:u(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):k("",!0),c("p",{class:u(e.ui.emptyState.label)},C(e.emptyState.label),3)],2)])],8,De)])):(s(!0),p($,{key:2},E(e.rows,(a,o)=>(s(),p($,{key:o},[c("tr",{class:u([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.isExpanded(a)&&e.ui.tr.expanded,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a),onContextmenu:r=>e.onContextmenu(r,a)},[e.expand?(s(),p("td",{key:0,class:u([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[e.$slots["expand-action"]?f(e.$slots,"expand-action",{key:0,row:a,isExpanded:e.isExpanded(a),toggle:()=>e.toggleOpened(a)}):(s(),I(y,v({key:1,disabled:a.disabledExpand,ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.isExpanded(a)&&"rotate-180"].join(" ")}},onClickCapture:q(r=>e.toggleOpened(a),["stop"])}),null,16,["disabled","ui","onClickCapture"]))],2)):k("",!0),(s(!0),p($,null,E(e.columns,(r,S)=>{var A;return s(),p("td",{key:S,class:u([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,r==null?void 0:r.rowClass,(A=a[r.key])==null?void 0:A.class,r.key==="select"&&e.ui.checkbox.padding])},[e.modelValue&&(r.key==="select"||e.shouldRenderColumnInFirstPlace(S,"select"))?f(e.$slots,"select-data",{key:0,checked:e.isSelected(a),change:b=>e.onChangeCheckbox(b,a)},()=>[U(i,v({"model-value":e.isSelected(a),ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onChange:b=>e.onChangeCheckbox(b,a),onClickCapture:q(()=>e.onSelect(a),["stop"])}),null,16,["model-value","onChange","onClickCapture"])]):f(e.$slots,`${r.key}-data`,{key:e.retriggerSlot,column:r,row:a,index:o,getRowData:b=>e.getRowData(a,r.key,b)},()=>[ge(C(e.getRowData(a,r.key)),1)])],2)}),128))],42,Ee),e.isExpanded(a)?(s(),p("tr",Ue,[c("td",Fe,[f(e.$slots,"expand",{row:a,index:o})])])):k("",!0)],64))),128))],2)],2)],16)}const qe=fe(Re,[["render",ze]]);export{qe as _};
