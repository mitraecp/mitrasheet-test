import I from"./SquaredBadge.8fadbfe8.js";import{f as D,aX as w,ae as F,al as U,H as h,r as B,i as s,au as q,cC as W,av as M,v as O,o as _,b as S,e as l,l as t,u as n,t as H,w as c,ar as V,c as z,aw as J,J as L,ax as A,cF as X,ay as K,cG as Q,cz as Y,s as Z,x as oo,a as eo}from"./entry.102678be.js";import{_ as to}from"./HeaderBar.vue.02da9777.js";import ro from"./ProjectSettings.24d1af27.js";import no from"./MitraButton.1bc6f00c.js";import{b as ao}from"./useGoToScreen.2d5a4740.js";import{G as io}from"./global_constants.3e2bf4d4.js";import{s as so}from"./simple_grid_grey.66d15878.js";import"./ProjectView.vue.c9650a78.js";import"./useMappedIcons.1032e4dc.js";/* empty css                         */import"./MitraIconButton.142ef623.js";import"./useFormRules.a113b67d.js";import"./legacy_store.afec42ea.js";import"./useLegacyService.c9b3bbf8.js";import"./useHeadSettings.f1985dcc.js";import"./composables.aec528df.js";import"./useURLPaths.92126496.js";/* empty css                    *//* empty css                             */import"./members_store.a95d955a.js";import"./dimension_store.1aca34b5.js";import"./dataset_store.f318df7c.js";import"./metadata_store.49c5a48c.js";/* empty css                                    *//* empty css                           */import"./useChartsSettings.971a22bb.js";/* empty css                         *//* empty css                            *//* empty css                             */import"./regexp.6086e722.js";/* empty css                        *//* empty css                        */const lo={class:"header"},co={class:"flex items-center max-w-[50vw] truncate"},po=["title"],mo={class:"w-[169px]"},uo={key:0,class:"flex items-center"},fo={class:"w-[169px]"},vo=D({__name:"ProjectHeader",props:{loading:{type:Boolean,required:!1,default:!1},openingProject:{type:Boolean,required:!1,default:!1},project:{type:Object,required:!0},readonly:{type:Boolean,required:!1,default:!1}},emits:["update","delete-project"],setup(r,{emit:j}){const a=r,f=w(),g=F(),{projectSettingsController:p}=U(f),v=h(()=>[{label:s().$translate("GLOBAL.spreadsheet"),icon:so,typeImg:!0,onClick:({optionIdx:e})=>N(e)},{label:s().$translate("GLOBAL.folder"),icon:Q,onClick:$,disabled:!0}]),P=B([{label:s().$translate("GLOBAL.edit"),icon:q,class:"m-0",onClick:()=>f.switchDialog("projectSettingsController",!0)},{label:s().$translate("GLOBAL.share"),icon:W,accessTypes:["CREATOR","OWNER","BUSINESS"],onClick:()=>f.switchDialog("invitationPanelController",!0)},{divider:!0,class:"m-0"},{label:s().$translate("GLOBAL.delete"),icon:M,accessTypes:["CREATOR","OWNER"],onClick:()=>j("delete-project",a.project.id)}]),G=h(()=>{var o,d,u;const e={color:(u=(d=(o=a.project)==null?void 0:o.projectConfig)==null?void 0:d.color)!=null?u:"#7839EE"};return a.project.projectConfig.icon===io.INITIALS?e.label=Y().getInitals(a.project.name):e.icon=a.project.projectConfig.icon,e}),m=B(!1);async function $(){}function E(){w().switchDialog("uploadFileController",!0)}async function N(e){v.value[e].loading=!0;try{const o=await g.addWorbook(a.project.id);m.value=!1,ao(o,{newTab:!0}),g.fetchWorkbooks(a.project.id)}catch(o){Z(o)}v.value[e].loading=!1}return(e,o)=>{const d=I,u=oo,y=to,R=O("a-dropdown"),T=ro,C=O("a-popover"),b=no;return _(),S("div",lo,[l("div",co,[t(d,{content:n(G)},null,8,["content"]),l("span",{title:r.project.name,class:"text-xl font-semibold text-grey-900 truncate"},H(r.project.name),9,po),t(R,{trigger:"click","destroy-popup-on-hide":"","overlay-class-name":"py-2 px-3 mitra-popover-wrapper"},{overlay:c(()=>[l("div",mo,[t(y,{options:n(P)},null,8,["options"])])]),default:c(()=>[l("div",{class:"icon-button icon-more",onClick:o[0]||(o[0]=V(()=>{},["stop"]))},[r.readonly?L("",!0):(_(),z(u,{key:0,size:"15px",type:"mdi",class:"ml-3","data-cy":"project-header-chevron",path:n(J)},null,8,["path"]))])]),_:1}),t(C,{visible:n(p),"onUpdate:visible":o[3]||(o[3]=i=>A(p)?p.value=i:null),"overlay-class-name":"project-settings-popover mitra-popover-wrapper",trigger:"click","destroy-popup-on-hide":"",class:"cursor-pointer",placement:"bottom"},{content:c(()=>{var i,x;return[t(T,{"project-info":{color:(i=r.project.projectConfig)==null?void 0:i.color,icon:(x=r.project.projectConfig)==null?void 0:x.icon,name:r.project.name},onClose:o[1]||(o[1]=k=>p.value=!1),onUpdate:o[2]||(o[2]=k=>j("update",k))},null,8,["project-info"])]}),_:1},8,["visible"])]),r.readonly?L("",!0):(_(),S("div",uo,[t(b,{text:e.$t("PROJECT.import_spreadsheet"),"text-color":"var(--violet-600)",icon:n(X),outlined:"","fit-to-content":"",class:"mr-2",onClick:E},null,8,["text","icon"]),t(C,{visible:n(m),"onUpdate:visible":o[4]||(o[4]=i=>A(m)?m.value=i:null),"overlay-class-name":"py-2 px-3 mitra-popover-wrapper",trigger:"click","destroy-popup-on-hide":"",class:"cursor-pointer",placement:"bottomLeft"},{content:c(()=>[l("div",fo,[t(y,{options:n(v)},null,8,["options"])])]),default:c(()=>[t(b,{text:e.$t("GLOBAL.new"),color:"var(--violet-600)",icon:n(K),"icon-class":"clean-svg","fit-to-content":"",class:"ml-2"},null,8,["text","icon"])]),_:1},8,["visible"])]))])}}}),Xo=eo(vo,[["__scopeId","data-v-710a8f53"]]);export{Xo as default};
