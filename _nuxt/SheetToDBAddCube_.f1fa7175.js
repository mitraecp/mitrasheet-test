import{f as M,r as l,v as P,o as N,b as D,e as o,t as r,l as u,u as f,ah as O,w as S,dQ as j,ax as q,x as F,a as G}from"./entry.102678be.js";import H from"./AddCubeAutocomplete.6aa2d88e.js";import{_ as Z}from"./MButton.vue.eb72e6c7.js";/* empty css                    */import"./ProjectView.vue.c9650a78.js";import"./dataset_store.f318df7c.js";import"./useLegacyService.c9b3bbf8.js";import"./dimension_store.1aca34b5.js";/* empty css                         *//* empty css                             */import"./MitraButton.1bc6f00c.js";import"./legacy_store.afec42ea.js";import"./useHeadSettings.f1985dcc.js";import"./composables.aec528df.js";import"./HeaderBar.vue.02da9777.js";import"./members_store.a95d955a.js";import"./metadata_store.49c5a48c.js";/* empty css                                    *//* empty css                           */import"./useChartsSettings.971a22bb.js";import"./MitraIconButton.142ef623.js";/* empty css                         *//* empty css                            *//* empty css                             */import"./regexp.6086e722.js";/* empty css                        *//* empty css                        */const z={class:"flex flex-col w-[290px]"},L={class:"flex justify-between items-center mb-[8px]"},U={class:"title"},Q={class:"flex flex-col"},J={class:"py-1"},K={class:"py-1 sub-title"},W={class:"flex flex-col"},X={class:"py-1"},Y={class:"py-1 sub-title"},ee={class:"flex items-center mt-2"},te=M({__name:"SheetToDBAddCube_",props:{selectedMetricByProp:{type:Object,required:!0,default:()=>({})},name:{type:String,required:!0,default:""},contentRange:{type:String,required:!0,default:""}},emits:["submit","cancel","set-dynamic-selection-by-range"],setup(A,{emit:i}){const p=A,c=l(p.selectedMetricByProp.value),_=l(p.name),n=l(p.contentRange),v=l(null),d=l(null);function B(){var a;if(!$())return;const t={name:(a=_.value)!=null?a:c.value.name,contentRange:n.value,metricType:c.value.metricType,metricId:c.value.metricId,datasetId:c.value.datasetId};i("submit",t),i("cancel")}function I(e){var t;c.value=e,(t=d.value)==null||t.$el.focus()}function w(e){const t=/([A-Z]+)([0-9]+):([A-Z]+)([0-9]+)/,a=/([A-Z]+)([0-9]+)/,m=t.test(e);return e.split(":").length===1?a.test(e):m?(()=>{const[,s,k,E,T]=e.match(t)||[],h=s.charCodeAt(0),V=E.charCodeAt(0),R=parseInt(k),C=parseInt(T);return h<=V&&R<=C&&h>=65&&V>=65&&R>=1&&C>=1})():!1}const g=l({isValid:!0});function y(){g.value.isValid=w(n.value),g.value.isValid&&i("set-dynamic-selection-by-range",n.value)}function $(){var e,t;return _.value===""&&v.value?((e=v.value)==null||e.focus(),!1):n.value===""&&d.value?((t=d.value)==null||t.focus(),!1):!0}return(e,t)=>{const a=F,m=H,b=P("a-input"),x=Z;return N(),D("div",z,[o("div",L,[o("div",U,r(e.$t("SHEET.add_cube")),1),u(a,{class:"cursor-pointer",size:"15",color:"grey",type:"mdi",path:f(O),onClick:t[0]||(t[0]=s=>i("cancel"))},null,8,["path"])]),o("div",Q,[o("div",J,[o("div",K,r(e.$t("DATABASE.cube")),1),u(m,{onSelectedMetric:I})])]),o("div",W,[o("div",X,[o("div",Y,r(e.$t("SHEET.table_range")),1),u(b,{ref_key:"inputContentRange",ref:d,value:f(n),"onUpdate:value":t[1]||(t[1]=s=>q(n)?n.value=s:null),class:"interval-btn rounded-md range-btn mr-4",placeholder:e.$t("SHEET.RANGE.select_range"),style:{border:"1px solid #c7cbdd"},onChange:y,onFocus:y},{suffix:S(()=>[u(a,{color:"#8D95B3",type:"mdi",size:"16",path:f(j)},null,8,["path"])]),_:1},8,["value","placeholder"])])]),o("div",ee,[o("div",{class:"cancel cursor-pointer",mockup:!1,onClick:t[2]||(t[2]=s=>i("cancel"))},r(e.$t("BUTTONS.cancel")),1),u(x,{mockup:!1,style:{"background-color":"#7839ee",color:"#fff"},class:"!w-[80px] !h-[33px] flex justify-center items-center","data-cy":"btn-submit",onClick:B},{default:S(()=>[o("div",null,r(e.$t("GLOBAL.confirm")),1)]),_:1})])])}}}),we=G(te,[["__scopeId","data-v-42b42899"]]);export{we as default};
