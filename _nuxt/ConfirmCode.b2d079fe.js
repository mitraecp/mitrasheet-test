import{r as h,f as P,b as v,e as p,k as g,M as V,u as o,N as k,O as I,l as y,m as w,x as F,v as T,o as _,P as D,a as R}from"./entry.102678be.js";import{R as j}from"./regexp.6086e722.js";/* empty css                        */function q({callback:l}){const t=h([0,0,0,0,0,0]),d=h([]);return{code:t,inputs:d,validateNumber:(e,a)=>{const s=parseInt(e==null?void 0:e.toString().replace(j.NOT_NUMBER,""));s!==t.value[a]&&!!e&&(t.value[a]=s)},resetNumber:(e,a)=>{a==="focus"?t.value[e]=NaN:t.value[e]||(t.value[e]=0)},validateCode:e=>{e+1===t.value.length&&l()},focusNextElement:e=>{e==null||e.focus()},validatePastedValue:e=>{var s,r;const a=(s=e.clipboardData)==null?void 0:s.getData("text");if(a!=null&&a.length){const b=a.split("").map(Number);for(let c=0;c<6;c++)t.value[c]=(r=b[c])!=null?r:0;setTimeout(()=>{l()},1500)}},resetCode:()=>t.value=[0,0,0,0,0,0]}}const M={class:"flex w-full mt-8 mb-8"},O={class:"digit-card rounded-lg text-center h-[64px] min-w-[64px] ml-3 flex"},S={class:"text-grey flex items-center"},z=P({__name:"ConfirmCode",props:{invalidCode:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1}},emits:["validate"],setup(l,{expose:t,emit:d}){const N=l,{code:u,inputs:m,resetNumber:f,resetCode:C,validateNumber:x,validateCode:e,focusNextElement:a,validatePastedValue:s}=q({callback:r});function r(){!N.disabled&&d("validate",parseInt(u.value.join("")))}return t({emitCode:r,resetCode:C}),(b,c)=>{const B=T("a-input"),E=F;return _(),v(g,null,[p("div",M,[(_(!0),v(g,null,V(o(u),(A,n)=>(_(),v("div",{key:n,class:"flex items-center justify-center"},[p("div",O,[y(B,{ref_for:!0,ref_key:"inputs",ref:m,value:o(u)[n],"max-length":1,max:9,min:0,type:"number",tabindex:-1,class:"card-number",onInput:i=>!!i.data&&(o(x)(i.data,n),o(a)(o(m)[n+1]),o(e)(n)),onPaste:o(s),onFocus:i=>o(f)(n,"focus"),onBlur:i=>o(f)(n,"blur")},null,8,["value","onInput","onPaste","onFocus","onBlur"])])]))),128))]),k(p("h6",S,[y(E,{class:"mr-2",size:"15px",type:"mdi",path:o(D)},null,8,["path"]),w("C\xF3digo incorreto! Tente novamente. ")],512),[[I,l.invalidCode]])],64)}}}),X=R(z,[["__scopeId","data-v-7e7df3b5"]]);export{X as default};
