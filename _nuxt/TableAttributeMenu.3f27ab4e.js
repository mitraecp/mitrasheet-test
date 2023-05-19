import{u as i,aH as me,f as ve,r as b,h as fe,H as w,v as D,o as d,b as p,e as s,m as L,t as o,l,ah as M,w as f,c as J,N as be,J as T,k as G,M as V,I as Q,aw as ye,ax as S,av as _e,at as he,ay as W,aE as Ae,C as xe,ap as ke,s as we,x as Te,O as Se,ar as $e,a as De}from"./entry.102678be.js";import Le from"./TableComponentsMenu.b916b5cb.js";import{_ as ge}from"./MButton.vue.eb72e6c7.js";/* empty css                    */import{a as Be}from"./useLegacyService.c9b3bbf8.js";import{u as X}from"./dimension_store.1aca34b5.js";import{u as Ce}from"./useDataTypeIcons.d26d6eae.js";import{r as Ee}from"./useFormRules.a113b67d.js";/* empty css                           */function Ue(){function y(F,{options:_=[],referencedDimensionId:r,dimensionId:g,datasetId:z,multiSelect:B}){var A,c,E;const h=i(F),a={id:h.id,dimensionId:g,datasetId:z,name:h.name},C=_!=null?_:[];switch(a.id||(a.dimensionId=g),h.dimensionAttributeType){case"Checkbox":return{...a,dimensionAttributeType:"Checkbox"};case"Date":return{...a,dimensionAttributeType:"Date"};case"Number":return{...a,dimensionAttributeType:"Number",precision:(A=h.precision)!=null?A:2,isUnique:(c=h.isUnique)!=null?c:!1};case"SingleLineText":return{...a,dimensionAttributeType:"SingleLineText",isUnique:(E=h.isUnique)!=null?E:!1};case"Text":return{...a,dimensionAttributeType:"Text"};case"SingleChoice":return{...a,dimensionAttributeType:"SingleChoice",options:C};case"MultiChoice":return{...a,dimensionAttributeType:"MultiChoice",options:C};case"LinkToUser":return{...a,dimensionAttributeType:(B?"Multi":"Single")+"LinkToUser",referencedDimensionId:me.USER};case"LinkDimension":return{...a,dimensionAttributeType:(B?"Multi":"Single")+"LinkDimension",referencedDimensionId:r};case"SecurityMultiLink":case"SecuritySingleLink":return{...a,dimensionAttributeType:B?"SecurityMultiLink":"SecuritySingleLink",referencedDimensionId:r};default:return a}}return{buildAttribute:y}}const Ie={"data-cy":"attribute-modal",class:"w-auto bg-white rounded mx-[-16px] pl-[10px] pr-[6px] table-att-menu"},Ne={class:"mb-[15px] ml-[6px] w-full title flex"},Oe={class:"w-full overflow-hidden"},Me={class:"w-full ml-[6px] max-width-fill"},Fe={class:"mb-[6px] att-title"},ze={key:1,class:"flex items-center relative table-selector-menu"},je={class:"flex items-center"},qe={class:"ml-2 type-list"},Ge={key:0,class:"w-full ml-[6px] max-width-fill"},Ve={key:0,class:"flex items-center mt-[10px] pb-1"},Ke={class:"att-title"},Re={class:"ml-2"};const He={key:2,class:"w-full"},Pe={class:"container !pt-[10px] mt-2"},Je={class:"overflow-auto max-h-[170px px-[16px]"},Qe=["title"],We=["onClick"],Xe={class:"flex items-center justify-center"},Ye={class:"w-[168px]"},Ze={class:"flex justify-between items-center mb-[8px]"},et={class:"title"},tt={class:"mb-[5px]"},it={class:"container !p-0"},st={class:"flex flex-wrap justify-center overflow-y-auto overflow-x-hidden max-h-[2350px] w-full"},nt=["onClick"],lt={class:"truncate"},ot={class:"font-[500] color-[#5D6585] flex items-center justify-center w-full cursor-pointer my-[8px]"},at={class:"w-full ml-[20px] label truncate"},rt={class:"flex option-btn mx-[16px] mb-[6px]"},ct={class:"w-[265px]"},ut={class:"mb-[15px] title flex"},dt={class:"mb-[6px] att-title"},pt={class:"flex justify-end items-center w-full mt-4 table-att-menu pr-0"},mt={key:3,class:"flex flex-col w-full"},vt={key:0,class:"w-full"},ft={class:"flex flex-col container mt-[16px] !p-[10px]"},bt={class:"mb-[6px] att-title"},yt={class:"container mt-[12px] overflow-auto max-h-[152px]"},_t=["data-cy","onClick"],ht={class:"flex aling-center"},At={class:"truncate"},xt={class:"flex dimension-btn mt-[12px]"},kt={class:"w-[265px]"},wt={class:"mb-[6px] title flex"},Tt={class:"mb-[6px] att-title"},St={class:"flex justify-end items-center w-full mt-[8px] table-att-menu"},$t={class:"flex items-center mt-[10px]"},Dt={class:"my-1 multiple-selection"},Lt={class:"flex justify-end items-center w-full mt-4 pr-[10px]"},gt=ve({__name:"TableAttributeMenu",props:{colAttributes:null,dimensionId:null,datasetId:null,isMultiple:{type:Boolean},typeOptions:null,types:null,controller:{type:Boolean}},emits:["add-attribute","on-close","add-col","on-back"],setup(y,{expose:F,emit:_}){var P;const r=y,g=Be(),z=X(),{buildAttribute:B}=Ue(),h=Ce(),a=b(["#FFD78A","#F0A3BF","#D3F7FF","#A29BFF","#F97066","#9FE27E"]),C=b(),A=b(!1),c=b(!1),E=b(0),I=b(""),m=b(""),u=fe({...r.colAttributes,precision:(P=r.colAttributes.precision)!=null?P:2,options:[]}),N=b(r.isMultiple),k=b(r.colAttributes.options||[]),O=b(r.colAttributes.referencedDimensionId||null),Y=w(()=>z.dimensions.filter(n=>n.name.toLocaleLowerCase().includes(I.value.toLocaleLowerCase()))),K=w(()=>u.dimensionAttributeType.includes("User")),R=w(()=>["LinkDimension","MultiLinkDimension","SingleLinkDimension","LinkToUser","SingleLinkToUser","MultiLinkToUser","SecurityMultiLink","SecuritySingleLink"].includes(u.dimensionAttributeType)),Z=w(()=>["SingleChoice","MultiChoice"].includes(u.dimensionAttributeType)),ee=w(()=>["Number","SingleLineText"].includes(u.dimensionAttributeType)),te=w(()=>u.dimensionAttributeType==="Number"),ie=w(()=>u.dimensionAttributeType!==r.colAttributes.dimensionAttributeType);async function se(n){if(!!n.length)if(c.value=!1,r.colAttributes.id)try{const{value:e}=await g.postAttributeOption({label:n.trim(),attributeId:r.colAttributes.id,color:a.value[k.value.length%a.value.length]});k.value.push(e),m.value=""}catch(e){we(e!=null?e:"DIMENSIONS.add_attribute_error")}else k.value.push({label:n.trim(),value:0,color:a.value[k.value.length%a.value.length]}),m.value=""}function ne(n){O.value=n.id,u.name=n.name}function H(){return B(u,{options:k.value,referencedDimensionId:O.value,dimensionId:r.dimensionId,datasetId:r.datasetId,multiSelect:N.value})}async function le(n,e){k.value.splice(e,1),r.colAttributes.id&&await g.deleteAttributeOption({attributeId:r.colAttributes.id,optionId:Number(n.value)})}async function oe(n){await X().addDimension(n)}return F({getDimensionAttributeObj:H}),(n,e)=>{const v=Te,U=D("a-input"),ae=D("a-form-item"),re=Le,ce=D("a-select"),ue=D("a-switch"),j=D("a-popover"),q=ge,de=D("a-form");return d(),p("div",Ie,[s("div",Ne,[L(o(r.colAttributes.id?n.$t("DATABASE.edit_attribute"):n.$t("DATABASE.new_attribute"))+" ",1),l(v,{class:"cursor-pointer ml-auto mr-[17px]",size:"15",color:"#8D95B3",type:"mdi",path:i(M),onClick:e[0]||(e[0]=t=>_("on-close"))},null,8,["path"])]),l(de,{model:i(u),autocomplete:"off",layout:"inline",class:"overflow-auto min-h-[117px] max-h-[55vh] pr-[10px]",onFinish:e[21]||(e[21]=t=>_("add-attribute",H()))},{default:f(()=>[s("div",Oe,[s("div",Me,[l(ae,{name:"name",class:"w-full",rules:[i(Ee)]},{default:f(()=>[s("div",Fe,o(n.$t("GLOBAL.name")),1),l(U,{value:i(u).name,"onUpdate:value":e[1]||(e[1]=t=>i(u).name=t),placeholder:n.$t("GLOBAL.insert"),"data-cy":"input-column-name",class:"mb-2"},null,8,["value","placeholder"])]),_:1},8,["rules"]),y.controller?(d(),p("div",ze,[l(v,{class:"absolute z-[2] left-2 top-[31.5%]",size:"15",color:"#424967",type:"mdi",path:i(h)[i(u).dimensionAttributeType]},null,8,["path"]),l(ce,{value:i(u).dimensionAttributeType,"onUpdate:value":e[3]||(e[3]=t=>i(u).dimensionAttributeType=t),options:y.typeOptions,disabled:!r.colAttributes.id,class:"w-full input-preffixed"},{option:f(({label:t,icon:$})=>[s("div",je,[l(v,{size:"15",color:"#424967",type:"mdi",path:$},null,8,["path"]),s("div",qe,o(t),1)])]),_:1},8,["value","options","disabled"])])):(d(),J(re,{key:0,types:y.types,onAddCol:e[2]||(e[2]=t=>_("add-col",t))},null,8,["types"])),be(s("button",{ref_key:"submit",ref:C,"html-type":"submit"},null,512),[[Se,!1]])]),y.controller?(d(),p("div",Ge,[i(te)?(d(),p("div",Ve,[s("div",Ke,o(n.$t("DIMENSIONS.attributes.precision")),1),l(U,{value:i(u).precision,"onUpdate:value":e[4]||(e[4]=t=>i(u).precision=t),"data-cy":"input-column-precision",class:"basis-1/3 ml-3",type:"number"},null,8,["value"]),s("span",Re,o(n.$t("DATABASE.unique_key")),1)])):T("",!0),(i(ee),T("",!0)),i(Z)?(d(),p("div",He,[s("div",Pe,[s("div",Je,[(d(!0),p(G,null,V(i(k),(t,$)=>(d(),p("div",{key:`${t.value}`,class:"w-full flex cursor-pointer justify-center align-middle mt-[5px] mb-[14px]",title:t.label},[s("div",{class:"flex items-center justify-center rounded-full max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]",style:Q({backgroundColor:t.color}),onClick:x=>(E.value=$,A.value=!0)},[s("div",Xe,[l(v,{size:"15",color:"#0E1428",type:"mdi",path:i(ye)},null,8,["path"])]),i(E)===$?(d(),J(j,{key:0,visible:i(A),"onUpdate:visible":e[7]||(e[7]=x=>S(A)?A.value=x:null),trigger:"click",placement:"bottomLeft"},{content:f(()=>[s("div",Ye,[s("div",Ze,[s("div",et,o(n.$t("DATABASE.color")),1),l(v,{class:"cursor-pointer",size:"15",color:"grey",type:"mdi",path:i(M),onClick:e[6]||(e[6]=x=>A.value=!1)},null,8,["path"])]),s("div",tt,o(n.$t("DATABASE.choose_option_color"))+":",1),s("div",it,[s("div",st,[(d(!0),p(G,null,V(i(a),(x,pe)=>(d(),p("div",{key:pe,class:"color-chip overflow-hidden cursor-pointer flex items-center justify-center rounded-full w-fit max-w-full px-[5px] m-[8px]",style:Q({backgroundColor:x+"80",border:`1px solid ${x}`}),onClick:Bt=>t.color=x},[s("div",lt,o(t.label),1)],12,nt))),128))]),s("div",ot," + "+o(n.$t("DATABASE.more_colors")),1)])])]),_:2},1032,["visible"])):T("",!0)],12,We),s("div",at,o(t.label),1),l(v,{size:"23",color:"grey",type:"mdi",path:i(_e),"data-cy":`btn-delete-option-${t.label}`,onClick:x=>le(t,$)},null,8,["path","data-cy","onClick"])],8,Qe))),128))]),l(j,{visible:i(c),"onUpdate:visible":e[13]||(e[13]=t=>S(c)?c.value=t:null),trigger:"click",placement:"bottomLeft"},{content:f(()=>[s("div",ct,[s("div",ut,[L(o(n.$t("DATABASE.new_option"))+" ",1),l(v,{class:"cursor-pointer ml-auto",size:"15",color:"#8D95B3",type:"mdi",path:i(M),onClick:e[8]||(e[8]=t=>c.value=!1)},null,8,["path"])]),s("div",dt,o(n.$t("GLOBAL.name")),1),l(U,{value:i(m),"onUpdate:value":e[9]||(e[9]=t=>S(m)?m.value=t:null),placeholder:n.$t("DIMENSIONS.attributes.add_option"),"data-cy":"input-add-option",disabled:i(ie),onKeydown:e[10]||(e[10]=he($e(()=>{},["prevent"]),["enter"]))},null,8,["value","placeholder","disabled"]),s("div",pt,[s("div",{class:"cancel cursor-pointer",mockup:!1,onClick:e[11]||(e[11]=t=>c.value=!1)},o(n.$t("BUTTONS.cancel")),1),l(q,{disabled:!i(m),class:"!w-[61px] !h-[33px] flex justify-center items-center","data-cy":"btn-add-column",style:{"background-color":"#7839ee",color:"#fff"},onClick:e[12]||(e[12]=t=>(se(i(m)),c.value=!1))},{default:f(()=>[L(o(n.$t("GLOBAL.actions.create")),1)]),_:1},8,["disabled"])])])]),default:f(()=>[s("div",rt,[l(v,{class:"mr-1",size:"20",color:"#7839EE",type:"mdi",path:i(W)},null,8,["path"]),s("div",null,o(n.$t("DATABASE.option")),1)])]),_:1},8,["visible"])])])):T("",!0),i(R)?(d(),p("div",mt,[i(K)?T("",!0):(d(),p("div",vt,[s("div",ft,[s("div",bt,o(n.$t("DATABASE.select_the_registration")),1),l(U,{value:i(I),"onUpdate:value":e[14]||(e[14]=t=>S(I)?I.value=t:null),placeholder:n.$t("GLOBAL.search"),"data-cy":"input-record-search"},{prefix:f(()=>[l(v,{size:"16",color:"#5D6585",type:"mdi",path:i(Ae)},null,8,["path"])]),_:1},8,["value","placeholder"]),s("div",yt,[(d(!0),p(G,null,V(i(Y),t=>(d(),p("div",{key:`${t.id}`,class:xe(["cursor-pointer hover:bg-[#eaecf0] record-item overflow-hidden",{"bg-[#eaecf0]":i(O)===t.id}]),"data-cy":`select-record-${t.id}`,onClick:$=>ne(t)},[s("div",ht,[l(v,{size:"20",color:"#424967",type:"mdi",class:"mr-[13px]",path:i(ke)},null,8,["path"])]),s("div",At,o(t.name),1)],10,_t))),128))]),l(j,{visible:i(c),"onUpdate:visible":e[19]||(e[19]=t=>S(c)?c.value=t:null),trigger:"click",placement:"bottomLeft"},{content:f(()=>[s("div",kt,[s("div",wt,[L(o(n.$t("DATABASE.new_dimension"))+" ",1),l(v,{class:"cursor-pointer ml-auto",size:"15",color:"#8D95B3",type:"mdi",path:i(M),onClick:e[15]||(e[15]=t=>c.value=!1)},null,8,["path"])]),s("div",Tt,o(n.$t("GLOBAL.name")),1),l(U,{value:i(m),"onUpdate:value":e[16]||(e[16]=t=>S(m)?m.value=t:null),class:"mt-[5px]",placeholder:n.$t("DIMENSIONS.attributes.add_dimension"),"data-cy":"input-add-option"},null,8,["value","placeholder"]),s("div",St,[s("div",{class:"cancel cursor-pointer",mockup:!1,onClick:e[17]||(e[17]=t=>c.value=!1)},o(n.$t("BUTTONS.cancel")),1),l(q,{disabled:!i(m),class:"!w-[61px] !h-[33px] flex justify-center items-center","data-cy":"btn-add-column",style:{"background-color":"#7839ee",color:"#fff"},onClick:e[18]||(e[18]=t=>(oe(i(m)),c.value=!1))},{default:f(()=>[L(o(n.$t("GLOBAL.actions.create")),1)]),_:1},8,["disabled"])])])]),default:f(()=>[s("div",xt,[l(v,{size:"20",color:"#7839EE",type:"mdi",path:i(W)},null,8,["path"]),s("div",null,o(n.$t("DATABASE.add_new_dimension")),1)])]),_:1},8,["visible"])])])),s("div",$t,[l(ue,{checked:i(N),"onUpdate:checked":e[20]||(e[20]=t=>S(N)?N.value=t:null),"data-cy":"switch-multi-select",class:"mr-auto"},null,8,["checked"]),s("div",Dt,o(n.$t("DATABASE.allow_linking_multiple_records")),1)])])):T("",!0)])):T("",!0)])]),_:1},8,["model"]),s("div",Lt,[s("div",{class:"cancel cursor-pointer",mockup:!1,onClick:e[22]||(e[22]=t=>_(y.controller?"on-back":"on-close"))},o(n.$t("BUTTONS.cancel")),1),l(q,{disabled:!((i(O)||!i(R)||i(K))&&y.controller),class:"!w-[61px] !h-[33px] flex justify-center items-center","data-cy":"btn-add-column",style:{"background-color":"#7839ee",color:"#fff"},onClick:e[23]||(e[23]=t=>i(C).click())},{default:f(()=>[L(o(r.colAttributes.id?n.$t("BUTTONS.save"):n.$t("GLOBAL.actions.create")),1)]),_:1},8,["disabled"])])])}}}),jt=De(gt,[["__scopeId","data-v-2076d545"]]);export{jt as default};
