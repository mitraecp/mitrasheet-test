import{f as Q,r as w,H as N,v as y,aF as Y,o as c,b as _,l as r,w as u,e as i,u as e,ap as R,t as b,c as z,J as B,k as M,M as V,ar as $,N as j,O as q,m as X,ek as Z,ax as ee,aH as D,x as ne}from"./entry.102678be.js";import te from"./AccordionListMenu.10ceb037.js";import{u as se,_ as h}from"./drag.f5ca2003.js";import{u as oe}from"./useDataTypeIcons.d26d6eae.js";import{u as H}from"./dimension_store.1aca34b5.js";import{a as ie}from"./useGoToScreen.2d5a4740.js";const ae=["onDragstart","onDblclick"],le={class:"flex items-center"},re=["title"],de={class:"flex items-center"},me=i("img",{class:"ml-2.5",height:"13.13",src:h},null,-1),ce=["onDragstart"],ue={class:"flex items-center"},pe=["title"],ge=i("img",{class:"ml-4",height:"13.13",src:h},null,-1),ve=["onDragstart","onDblclick"],fe={class:"flex items-center"},_e=["title"],De=i("img",{height:"13.13",src:h},null,-1),xe=["onDragstart"],ye={class:"flex items-center"},be=["title"],he=i("img",{height:"13.13",src:h},null,-1),we={class:"w-full flex"},Ne=Q({__name:"DimensionList",props:{dimensions:{type:Array,default:()=>[]}},emits:["activated","updated","deleted","in-dragging"],setup(L,{emit:v}){const k=L,f=w(!1),p=w(!1),l=w(),{handleDragEnd:d,handleDragStart:x,handleDragging:m}=se(),C=oe(),F=N(()=>k.dimensions.filter(a=>!a.isNative)),O=N(()=>k.dimensions.filter(a=>a.isNative).filter(a=>![D.MONTH,D.YEAR,D.WEEK,D.QUARTER,D.SEMESTER].includes(a.id)));async function U(a){p.value=!0;try{await H().deleteDimension(a),l.value=void 0,f.value=!1,v("deleted")}catch{}p.value=!1}async function I(a,n){p.value=!0;try{await H().updateDimension({id:a,name:n.trim()}),l.value=void 0,v("updated",{id:a,name:n,isDimension:!0})}catch{}p.value=!1}function E(a){ie(`?openDimension=${a}`,{newTab:!0})}return(a,n)=>{const g=ne,K=y("a-badge"),S=te,P=y("a-input"),W=y("a-button"),G=y("a-popover"),J=Y("focus");return c(),_("div",null,[r(S,{options:e(O),"content-keys":{children:"dimensionAttributeViews",type:"dimensionAttributeType",id:"id",childrenName:"name"},onSelected:n[5]||(n[5]=s=>v("activated",s))},{content:u(({item:s})=>[i("div",{class:"flex items-center justify-between w-full tile",draggable:!0,onDrag:n[0]||(n[0]=(...t)=>e(m)&&e(m)(...t)),onDragstart:t=>e(x)(t,s),onDragend:n[1]||(n[1]=(...t)=>e(d)&&e(d)(...t)),onDblclick:t=>E(s.id)},[i("div",le,[r(g,{class:"mr-2.5",color:"var(--grey-700)",path:e(R),type:"mdi",size:"20px"},null,8,["path"]),i("span",{class:"content-name max-w-[80px] truncate",title:s.name},b(s.name),9,re)]),i("div",de,[s.isNative?(c(),z(K,{key:0,count:a.$t("SHEET.native"),"number-style":{backgroundColor:"#E7E8F0",color:"#8D95B3",fontStyle:"normal",fontWeight:"400",fontSize:"12px",borderRadius:"100px",padding:"1px, 6px, 1px, 6px"}},null,8,["count"])):B("",!0),me])],40,ae)]),children:u(({values:s})=>[(c(!0),_(M,null,V(s,t=>(c(),_("div",{key:t.id,class:"flex items-center justify-between w-full tile",draggable:!0,onDragstart:o=>e(x)(o,t),onDragend:n[2]||(n[2]=(...o)=>e(d)&&e(d)(...o)),onContextmenu:n[3]||(n[3]=$(()=>{},["prevent","stop"])),onDrag:n[4]||(n[4]=o=>{e(m)(o),v("in-dragging",o)})},[i("div",ue,[r(g,{size:"15",class:"mr-2.5",color:"var(--grey-500)",type:"mdi",path:e(C)[t.dimensionAttributeType]},null,8,["path"]),i("span",{title:t.name,class:"children-name"},b(t.name),9,pe)]),ge],40,ce))),128))]),_:1},8,["options"]),r(S,{options:e(F),"content-keys":{children:"dimensionAttributeViews",type:"dimensionAttributeType",id:"id",childrenName:"name"},onContextSelect:n[13]||(n[13]=s=>{f.value=!0,l.value=s}),onSelected:n[14]||(n[14]=s=>v("activated",s))},{content:u(({item:s})=>[i("div",{class:"flex items-center justify-between w-full tile",draggable:!0,onDragstart:t=>e(x)(t,s),onDragend:n[6]||(n[6]=(...t)=>e(d)&&e(d)(...t)),onDrag:n[7]||(n[7]=(...t)=>e(m)&&e(m)(...t)),onDblclick:t=>E(s.id)},[i("div",fe,[r(g,{class:"mr-2.5",color:"var(--grey-700)",path:e(R),type:"mdi",size:"20px"},null,8,["path"]),i("span",{class:"content-name max-w-[150px] truncate",title:s.name},b(s.name),9,_e)]),De],40,ve)]),children:u(({values:s})=>[(c(!0),_(M,null,V(s,t=>j((c(),_("div",{key:t.id,class:"flex items-center justify-between w-full tile",draggable:!0,onDragstart:o=>e(x)(o,t),onDragend:n[8]||(n[8]=(...o)=>e(d)&&e(d)(...o)),onDrag:n[9]||(n[9]=(...o)=>e(m)&&e(m)(...o)),onContextmenu:n[10]||(n[10]=$(()=>{},["prevent","stop"]))},[i("div",ye,[r(g,{size:"15",color:"var(--grey-500)",class:"mr-2.5",type:"mdi",path:e(C)[t.dimensionAttributeType]},null,8,["path"]),i("span",{title:t.name,class:"children-name"},b(t.name),9,be)]),he],40,xe)),[[q,t.name!=="Description"]])),128))]),popup:u(({item:s})=>{var t;return[e(l)&&((t=e(l))==null?void 0:t.id)===s.id?(c(),z(G,{key:0,visible:e(f),"onUpdate:visible":n[12]||(n[12]=o=>ee(f)?f.value=o:null),title:"Editar dimens\xE3o: "+s.name},{content:u(()=>[i("div",we,[j(r(P,{value:e(l).name,"onUpdate:value":n[11]||(n[11]=o=>e(l).name=o),"data-cy":"input-rename-dimension",class:"mr-2"},null,8,["value"]),[[J]]),r(W,{class:"m-auto mx-3",disabled:e(p)||!e(l).name.length,onClick:o=>{var T,A;return I(s.id,(A=(T=e(l))==null?void 0:T.name)!=null?A:"")}},{default:u(()=>[X("Renomear")]),_:2},1032,["disabled","onClick"]),r(g,{color:"#929292",class:"cursor-pointer",path:e(Z),"data-cy":"btn-delete-dimension",type:"mdi",size:"40px",onClick:o=>!e(p)&&U(s.id)},null,8,["path","onClick"])])]),_:2},1032,["visible","title"])):B("",!0)]}),_:1},8,["options"])])}}});export{Ne as _};
