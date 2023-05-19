import X from"./BaseContentHeader.0262d7f9.js";import{f as Y,ae as Z,al as ee,r as m,H as h,v as B,o as l,b as d,l as r,u as s,t as p,J as b,w as E,aE as z,ax as S,e as i,k as I,M as H,ap as V,c as A,B as te,m as oe,C as ne,ag as se,x as ae,a as ie}from"./entry.102678be.js";import{_ as le}from"./BaseContentFooter.vue.20fdc5e7.js";import{u as re}from"./dimension_store.1aca34b5.js";import{a as ce}from"./useLegacyService.c9b3bbf8.js";import"./ProjectView.vue.c9650a78.js";import"./MitraIconButton.142ef623.js";import"./MitraButton.1bc6f00c.js";/* empty css                         *//* empty css                    *//* empty css                             */import"./legacy_store.afec42ea.js";import"./useHeadSettings.f1985dcc.js";import"./composables.aec528df.js";import"./HeaderBar.vue.02da9777.js";import"./members_store.a95d955a.js";import"./dataset_store.f318df7c.js";import"./metadata_store.49c5a48c.js";/* empty css                                    *//* empty css                           */import"./useChartsSettings.971a22bb.js";/* empty css                         *//* empty css                            *//* empty css                             */import"./regexp.6086e722.js";/* empty css                        *//* empty css                        */const de={key:0,class:"text-grey-500 text-sm"},me={key:1,class:"container"},pe={class:"container__scroll-area"},ue=["title","onClick"],_e={class:"data-item__text"},ve={key:2},fe={class:"flex items-center my-3"},he={class:"flex w-full relative table-selector-menu"},ye={class:"text-grey-500 text-sm"},Ce={class:"links mb-3 mt-1"},ke={class:"container"},xe={class:"container__scroll-area"},be=["title","onClick"],Ee={class:"check-box"},Se={class:"data-item__text"},ge=Y({__name:"SpreadSheetDynamization",props:{titleText:null,edit:{type:Boolean},dimension:null},emits:["cancel","submit"],setup(_,{emit:y}){const g=_,N=Z(),{activeDynamizations:U}=ee(N),$=m();let w;const C=m({}),O=h(()=>{var e;return(e=u.value)==null?void 0:e.some(t=>t.selected)}),v=m(""),f=m(""),c=m(0),D=re(),F=ce(),u=m();g.dimension&&k(g.dimension),q();const M=h(()=>D.dimensions.map(e=>({label:e.name,value:e.id}))),R=h(()=>{var e;return(e=u.value)==null?void 0:e.filter(t=>{var n,a;return(a=(n=t.name)==null?void 0:n.toLowerCase())==null?void 0:a.includes(v.value.toLowerCase())}).slice(0,1e3)}),G=h(()=>D.dimensions.filter(e=>e.name.toLowerCase().includes(f.value.toLowerCase())));function J(){var n;const e=(n=u.value)==null?void 0:n.filter(a=>a.selected);if(!e)return;y("submit",{list:e,dimension:w})}async function k(e){w=e,c.value=e.id;const{dimensionDataView:t}=await F.getDimensionContent(e.id,{},!0);$.value=t.contents.map(n=>({name:n.dimensionContentAttributesView[0],internalId:n.internalId})),W()}function W(){var e;u.value=(e=$.value)==null?void 0:e.map(t=>{var n,a;return{...t,selected:(a=(n=C.value)==null?void 0:n[c.value])==null?void 0:a[t.internalId]}})}function j(e,{label:t,value:n}){k({name:t,id:n})}function L(e){var t;(t=u.value)==null||t.forEach(n=>n.selected=e)}function q(){U.value.forEach(e=>{C.value[e.dimensionId]={},e.contents.forEach(t=>C.value[e.dimensionId][t.id]=!0)})}return(e,t)=>{const n=X,a=ae,T=B("a-input"),K=B("a-select"),P=le;return l(),d("div",null,[r(n,{title:_.titleText,"content-class":"mb-2",onCancel:t[0]||(t[0]=o=>y("cancel"))},null,8,["title"]),s(c)?b("",!0):(l(),d("span",de,p(e.$t("SHEET.select_data_below"))+":",1)),s(c)?(l(),d("div",ve,[i("div",fe,[_.edit?b("",!0):(l(),A(a,{key:0,class:"mr-2 cursor-pointer",size:"15",color:"grey",type:"mdi",path:s(te),onClick:t[2]||(t[2]=o=>c.value=0)},null,8,["path"])),i("div",he,[r(a,{class:"data-item__icon absolute z-[2] left-2 top-[29%]",size:"16",color:"var(--grey-700)",type:"mdi",path:s(V)},null,8,["path"]),r(K,{value:s(c),"onUpdate:value":t[3]||(t[3]=o=>S(c)?c.value=o:null),disabled:"",options:s(M),class:"w-full input-preffixed",onChange:j},{suffixIcon:E(()=>[]),_:1},8,["value","options"])])]),i("span",ye,p(e.$t("SHEET.set_pivot_range"))+":",1),i("div",Ce,[i("span",{onClick:t[4]||(t[4]=o=>L(!0))},p(e.$t("SHEET.select_all")),1),oe(" - "),i("span",{onClick:t[5]||(t[5]=o=>L(!1))},p(e.$t("SHEET.clear")),1)]),i("div",ke,[r(T,{value:s(v),"onUpdate:value":t[6]||(t[6]=o=>S(v)?v.value=o:null),type:"text",placeholder:e.$t("SHEET.sheet_search")},{prefix:E(()=>[r(a,{size:"15",color:"grey",type:"mdi",path:s(z)},null,8,["path"])]),_:1},8,["value","placeholder"]),i("div",xe,[(l(!0),d(I,null,H(s(R),(o,x)=>(l(),d("div",{key:x,class:ne([{active:o.selected},"data-item-box data-item-box__checkbox"]),title:o.name,onClick:Q=>o.selected=!o.selected},[i("div",Ee,[o.selected?(l(),A(a,{key:0,size:"12",color:"#7839EE",type:"mdi",path:s(se)},null,8,["path"])):b("",!0)]),i("span",Se,p(o.name),1)],10,be))),128))])])])):(l(),d("div",me,[r(T,{value:s(f),"onUpdate:value":t[1]||(t[1]=o=>S(f)?f.value=o:null),type:"text",placeholder:e.$t("SHEET.sheet_search")},{prefix:E(()=>[r(a,{size:"15",color:"grey",type:"mdi",path:s(z)},null,8,["path"])]),_:1},8,["value","placeholder"]),i("div",pe,[(l(!0),d(I,null,H(s(G),(o,x)=>(l(),d("div",{key:x,class:"data-item-box",title:o.name,onClick:Q=>k(o)},[r(a,{class:"data-item__icon",size:"16",color:"var(--grey-700)",type:"mdi",path:s(V)},null,8,["path"]),i("span",_e,p(o.name),1)],8,ue))),128))])])),r(P,{"confirm-text":_.edit?e.$t("BUTTONS.save"):e.$t("GLOBAL.actions.create"),"confirm-disabled":!s(O),divider:!1,onConfirm:J,onCancel:t[7]||(t[7]=o=>y("cancel"))},null,8,["confirm-text","confirm-disabled"])])}}}),Ze=ie(ge,[["__scopeId","data-v-7898b463"]]);export{Ze as default};
