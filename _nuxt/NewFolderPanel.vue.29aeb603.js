import _ from"./MitraButton.1bc6f00c.js";import{f as v,aX as a,r as x,v as g,o as h,b as w,e,t as r,l,u as i,ax as y,k as C}from"./entry.102678be.js";import{u as b}from"./legacy_store.afec42ea.js";const B=""+new URL("folder_violet.25ed1b6f.svg",import.meta.url).href,S=e("div",{class:"h-[48px] w-[48px] bg-violet-100 rounded-xl flex items-center justify-center"},[e("div",{class:"h-[20px] w-[16px] flex items-center"},[e("img",{src:B,style:{width:"100%",height:"100%"}})])],-1),L={class:"text-grey-900 text-lg font-medium pt-4"},k={class:"text-grey-700 text-sm font-medium pt-4"},N={class:"pt-1.5"},O={class:"flex pt-6 space-x-3"},R=v({__name:"NewFolderPanel",setup($){const c=a(),d=b(),t=x();function u(){a().switchDialog("newFolderModelController",!1)}function p(){d.createModule(t.value).then(()=>{c.switchDialog("newFolderModelController",!1)})}return(o,s)=>{const m=g("a-input"),n=_;return h(),w(C,null,[S,e("div",L,r(o.$t("PROJECT.new_folder")),1),e("div",k,r(o.$t("GLOBAL.name")),1),e("div",N,[l(m,{value:i(t),"onUpdate:value":s[0]||(s[0]=f=>y(t)?t.value=f:null),"data-cy":"input-email",placeholder:o.$t("PROJECT.insert_name"),class:"input-class rounded-full py-1.5"},null,8,["value","placeholder"])]),e("div",O,[l(n,{text:o.$t("BUTTONS.cancel"),color:"var(--violet-600)","fit-to-content":"",outlined:"","text-color":"var(--violet-600)",class:"flex-1 pr-2",onClick:u},null,8,["text"]),l(n,{disabled:!i(t),"data-cy":"btn-submit",text:o.$t("GLOBAL.actions.create"),color:"var(--violet-600)",class:"flex-1 pl-2",onClick:p},null,8,["disabled","text"])])],64)}}});export{R as _};
