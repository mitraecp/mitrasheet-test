import{f as n,o as l,b as d,D as c}from"./entry.102678be.js";const f=n({__name:"DraggableWrapper",props:{transferData:{type:Object,default:()=>{}}},setup(t){const r=t,s=e=>{e.srcElement.style.opacity=1},o=e=>{e.srcElement.style.transition=".5s",e.srcElement.style.opacity=.5,e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move";const a=e.srcElement.cloneNode(!0);a.style.backgroundColor="white",a.style.position="absolute",a.style.padding="10px",a.style.borderRadius="10px",a.style.top="-999px",document.body.appendChild(a),e.dataTransfer.setDragImage(a,0,0),e.dataTransfer.setData("value",JSON.stringify({data:r.transferData}))};return(e,a)=>(l(),d("div",{class:"flex items-center",draggable:"true",onDragstart:o,onDragend:s},[c(e.$slots,"default")],32))}});export{f as default};
