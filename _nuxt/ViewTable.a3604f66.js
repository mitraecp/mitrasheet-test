import{f as F,r as c,H as A,o as t,b as s,t as p,J as _,u as o,l as z,w as g,e,k as b,M as C,I as u,C as H,ay as E,m as P,x as j,y as q,z as G,a as J}from"./entry.102678be.js";import{u as M}from"./useViewService.062f2c04.js";import K from"./SmartSheet.02ade0c8.js";import{T as V}from"./table_constants.06ca38ff.js";import"./ProjectView.vue.c9650a78.js";import"./index.d52a6416.js";import"./index.3105222b.js";import"./DataEntry.class.85823036.js";/* empty css                           *//* empty css                         *//* empty css                    *//* empty css                             */import"./MitraButton.1bc6f00c.js";import"./legacy_store.afec42ea.js";import"./useLegacyService.c9b3bbf8.js";import"./useHeadSettings.f1985dcc.js";import"./composables.aec528df.js";import"./HeaderBar.vue.02da9777.js";import"./members_store.a95d955a.js";import"./dimension_store.1aca34b5.js";import"./dataset_store.f318df7c.js";import"./metadata_store.49c5a48c.js";/* empty css                                    */import"./useChartsSettings.971a22bb.js";import"./MitraIconButton.142ef623.js";/* empty css                         *//* empty css                            *//* empty css                             */import"./regexp.6086e722.js";/* empty css                        *//* empty css                        */const Q=l=>(q("data-v-f9cda5af"),l=l(),G(),l),R={key:0,class:"mb-5 font-bold"},U={key:1,class:"w-full h-full bg-grey-300 absolute z-20"},X=Q(()=>e("div",{class:"bg-grey-200 h-full w-full animate-pulse"},null,-1)),Y=[X],Z=["data-cy"],ee={class:"mr-[15px] pl-[10px] cell-class truncate"},te={key:0,class:"flex"},se=["data-cy"],ae={class:"mr-[15px] pl-[10px] truncate"},oe={key:0,class:"flex"},re=["data-cy"],le={class:"mr-[15px] pl-[10px] truncate"},ne={class:"px-2"},ie={class:"flex items-center text-grey-100 font-sans hover:cursor-not-allowed","data-cy":"btn-add-row"},de=F({__name:"ViewTable",props:{loadOnCreated:{type:Boolean,default:!1},dimension:{type:Object,required:!0},displayName:{type:Boolean,default:!0}},setup(l,{expose:W}){const y=l,{addGeneratedView:$}=M(),m=c({headerHeight:1,headerItems:[]}),k=c(Array([])),v=c([]),D=c(null),n=c(!1),w=30;y.loadOnCreated&&S({displayLoadingFrame:!0,viewForm:{isView:!0}});function x(i,h=0){return{minWidth:i.width*V.COL_WIDTH-h+"px",height:i.height*w+"px"}}const I=A(()=>m.value.headerItems);async function S({displayLoadingFrame:i,viewForm:h}){i&&(n.value=!0);const{viewFormView:f}=await $(h);v.value=f.rowContents,n.value=!1,m.value=f.viewHeaderView,k.value=Array(v.value[0].content.length).fill(V.COL_WIDTH),n.value=!1}return W({loadViewContent:S}),(i,h)=>{const f=j;return t(),s("div",{class:H(["bg-white flex flex-col overflow-hidden w-full relative",{"p-2":!o(n)}])},[y.displayName?(t(),s("div",R,p(y.dimension.name),1)):_("",!0),o(n)?(t(),s("div",U,Y)):_("",!0),z(K,{ref_key:"supersheet",ref:D,items:o(v),"add-line":!0,"add-column":!0,"enable-data-entry":!1,"col-widths":o(k),"nested-headers":o(I)},{headerParent:g(()=>[e("div",{class:"headers-parent",style:u({minHeight:`${o(m).headerHeight*w}px`,maxHeight:`${o(m).headerHeight*w}px`})},[(t(!0),s(b,null,C(o(I),(a,d)=>{var T;return t(),s("div",{key:d,class:"border h-full",style:u({width:a.width*o(V).COL_WIDTH+"px"})},[e("div",{class:"header-flex",style:u(x(a,d)),"data-cy":`header-col-${d}`},[e("div",ee,[e("span",null,p(a.name),1)])],12,Z),(T=a==null?void 0:a.sons)!=null&&T.length?(t(),s("div",te,[(t(!0),s(b,null,C(a.sons,(r,L)=>{var B;return t(),s("div",{key:L,style:u(x(r)),class:H({border:L!==a.sons.length-1})},[e("div",{class:"w-full h-full header-flex","data-cy":`header-col-${d}`},[e("div",ae,[e("span",null,p(r.name),1)])],8,se),(B=r==null?void 0:r.sons)!=null&&B.length?(t(),s("div",oe,[(t(!0),s(b,null,C(r.sons,(N,O)=>(t(),s("div",{key:O,style:u(x(N)),class:H({border:O!==r.sons.length-1})},[e("div",{class:"w-full h-full header-flex","data-cy":`header-col-${d}`},[e("div",le,[e("span",null,p(N.name),1)])],8,re)],6))),128))])):_("",!0)],6)}),128))])):_("",!0)],4)}),128))],4)]),default:g(({item:a})=>[e("span",ne,p(a),1)]),footer:g(()=>[e("div",ie,[z(f,{size:"15",type:"mdi",path:o(E)},null,8,["path"]),P(" Linha ")])]),_:1},8,["items","col-widths","nested-headers"])],2)}}}),Pe=J(de,[["__scopeId","data-v-f9cda5af"]]);export{Pe as default};
