import{f as _,v as f,o as x,b as y,e,l as c,u as v,ak as h,t as s,w as u,k as C,x as S,a as g}from"./entry.102678be.js";import{u as b}from"./members_store.a95d955a.js";/* empty css                        */import"./useLegacyService.c9b3bbf8.js";import"./dimension_store.1aca34b5.js";const B={class:"flex items-center justify-center"},M={class:"alert-icon-outside rounded-full px-2 py-2 items-center flex m-2"},E={class:"alert-icon-inside rounded-full px-2 py-2 items-center flex m-2"},k={class:"flex items-center justify-center text-grey-900 text-lg font-medium py-2"},D={class:"flex items-center justify-center text-grey-500 text-sm font-normal text-center py-2"},I={class:"flex items-center justify-center my-4"},N=_({__name:"DeleteSecurityMenu",props:{securityCorpName:null,security:null},emits:["close-delete"],setup(i,{emit:r}){const l=i,n=b();function p(){r("close-delete")}async function m(){const t=n.securityCorpActive.findIndex(o=>o.id===l.security.id),d=n.dimensions.findIndex(o=>o.id===l.security.referencedDimensionId);await n.deleteSecurityCorp(t,d),r("close-delete")}return(t,d)=>{const o=S,a=f("a-button");return x(),y(C,null,[e("div",B,[e("div",M,[e("div",E,[c(o,{color:"#D92D20",path:v(h),type:"mdi",size:"34px"},null,8,["path"])])])]),e("div",k,s(t.$t("MEMBERS.delete_corporative_security")),1),e("div",D,s(t.$t("MEMBERS.delete_corp_body_1"))+' "'+s(i.securityCorpName)+'"? '+s(t.$t("MEMBERS.delete_corp_body_2")),1),e("div",I,[e("div",{class:"px-2",onClick:p},[c(a,{class:"rounded-lg text-violet-600 px-10"},{default:u(()=>[e("div",null,s(t.$t("BUTTONS.cancel")),1)]),_:1})]),e("div",{class:"px-2",onClick:m},[c(a,{class:"rounded-lg text-white px-10 bg-error-600"},{default:u(()=>[e("div",null,s(t.$t("GLOBAL.delete")),1)]),_:1})])])],64)}}}),R=g(N,[["__scopeId","data-v-24088ce5"]]);export{R as default};
