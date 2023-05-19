import{cz as ne,f as le,r as I,Y as re,T as u,al as $,H as _,i as G,v as K,aF as ce,o as r,b as p,u as a,e as d,t as C,N as ie,l as h,ax as L,w as H,aw as de,J as N,aE as ue,k as B,M,c as j,C as O,dO as pe,s as X,S as ve,aX as me,x as _e,a as ye}from"./entry.102678be.js";import fe from"./MitraButton.1bc6f00c.js";import he from"./SpaceCollaborator.9a7c5525.js";import{u as ge}from"./members_store.a95d955a.js";import"./HeaderBar.vue.02da9777.js";import"./CollaboratorAvatar.vue.dd08577c.js";import"./useLegacyService.c9b3bbf8.js";import"./dimension_store.1aca34b5.js";function P(T,{keys:c,keyword:v}){var k,g;const i=[],{normalizeText:y}=ne();if(v.length){if(c.length===1)for(const l of T)(k=y(l==null?void 0:l[c==null?void 0:c[0]]))!=null&&k.includes(y(v))&&i.push(l);else for(const l of T)for(const w of c)if((g=y(l==null?void 0:l[w]))!=null&&g.includes(y(v))){i.push(l);break}return i}else return T}const be={class:"shortHeight:max-h-[60vh] max-h-[70vh] overflow-y-auto mt-4"},Se={key:0,class:"p-2.5 bg-grey-100 rounded-md"},Ie={class:"flex"},Ce={class:"input-wrap flex-1 mr-1"},Te={class:"text-grey-700 font-medium"},ke={class:"input-wrap flex-1 ml-1"},we={class:"text-grey-700 font-medium"},Ee={class:"mt-4"},De={class:"text-grey-800"},Re={key:0},xe={class:"my-5"},Ae={class:"flex flex-col justify-center","data-cy":"base-collaborator-list"},Be={key:1,class:"my-5"},Me={class:"flex flex-col teste","data-cy":"workspace-collaborator-list"},je=le({__name:"InvitationPanel",emits:["reload-data","reload-members-access"],setup(T,{emit:c}){const v=I(!1),i=re(),y=u(),k=ge(),{workspaceCollaborators:g,projectCollaborators:l}=$(y),{projectOpened:w,openedSpaceId:f,openedWorkSpaceId:Y}=$(i),{isWorkspace:b}=$(k),E=_(()=>w.value?"PROJECTS":"WORKSPACE"),q=_(()=>w&&(!!J.value.length||!!z.value.length)),Q=_(()=>!!U.value.length||!!W.value.length),U=_(()=>P(g.value.collaborators,{keys:["name"],keyword:m.value})),W=_(()=>P(g.value.openInvitations,{keys:["email"],keyword:m.value})),J=_(()=>P(l.value.collaborators,{keys:["name"],keyword:m.value})),z=_(()=>P(l.value.openInvitations,{keys:["email"],keyword:m.value})),S=I(""),Z=I([{value:"CREATOR",label:G().$translate("METADATA.creator")},{value:"BUSINESS",label:"Business"}]),D=I({value:"CREATOR",label:G().$translate("METADATA.creator")}),m=I("");async function ee(){v.value=!0;const e=S.value.split(",");for(const t of e)if(t.length){try{await u().sendInvite({guestEmail:t.trim(),spaceId:b.value?Y.value:f.value,accessType:D.value.value,spaceType:b.value?"WORKSPACE":"PROJECTS",domainLink:pe().public.FRONT_END_URL})}catch{}S.value=""}else X("TOAST.define_destination_emails");await u().fetchProjectCollaborators(f.value),b.value?c("reload-members-access",u().workspaceCollaborators):c("reload-members-access",u().projectCollaborators),v.value=!1}async function R(e,t){"collaboratorId"in e?await u().updateSpaceCollaborator({collaboratorId:e.collaboratorId,userId:e.userId,accessType:t,spaceId:f.value,spaceType:E.value}):await u().updateSpaceInvite({spaceId:f.value,inviteId:e.inviteId,spaceType:E.value,accessType:t}),c("reload-data")}async function x(e,t){try{"collaboratorId"in e?(await u().deleteSpaceCollaborator({collaboratorId:e.collaboratorId,userId:e.userId,accessType:t,spaceId:f.value,spaceType:E.value}),oe(e.userId),c("reload-data")):(await u().removeSpaceInvite({inviteId:e.inviteId,spaceId:f.value,accessType:t,spaceType:E.value}),c("reload-data"))}catch{X("TOAST.fail_remove_member")}}function oe(e){var t;e===((t=ve().loggedUser)==null?void 0:t.id)&&me().switchDialog("invitationPanelController")}return(e,t)=>{const F=K("a-input"),V=_e,ae=K("a-select"),te=fe,A=he,se=ce("focus");return r(),p("div",be,[a(i).readonlyProject?N("",!0):(r(),p("div",Se,[d("div",Ie,[d("div",Ce,[d("h6",Te,C(e.$t("GLOBAL.email")),1),ie(h(F,{ref:"input",value:a(S),"onUpdate:value":t[0]||(t[0]=o=>L(S)?S.value=o:null),class:"flex-1","data-cy":"input-invite-emails"},null,8,["value"]),[[se]])]),d("div",ke,[d("h6",we,C(e.$t("GLOBAL.permission")),1),h(ae,{value:a(D),"onUpdate:value":t[1]||(t[1]=o=>L(D)?D.value=o:null),"data-cy":"select-invite-type","label-in-value":"",options:a(Z)},{suffixIcon:H(()=>[h(V,{type:"mdi",path:a(de)},null,8,["path"])]),_:1},8,["value","options"])])]),h(te,{class:"mt-2.5",text:e.$t("GLOBAL.invite"),color:"var(--violet-600)","fit-to-content":"",loading:a(v),onClick:ee},null,8,["text","loading"])])),d("div",Ee,[d("h6",De,C(a(b)?e.$t("MEMBERS.workspace_members"):e.$t("MEMBERS.project_members")),1),h(F,{value:a(m),"onUpdate:value":t[2]||(t[2]=o=>L(m)?m.value=o:null),class:"my-4",type:"text",placeholder:e.$t("MEMBERS.search_member")},{prefix:H(()=>[h(V,{size:"16",color:"grey",type:"mdi",path:a(ue)},null,8,["path"])]),_:1},8,["value","placeholder"]),a(q)&&!a(b)?(r(),p("div",Re,[d("h6",xe,C(e.$t("MEMBERS.base_access")),1),d("div",Ae,[(r(!0),p(B,null,M(a(J),(o,s)=>(r(),j(A,{key:`joined-colaborator-${s}`,collaborator:o,idx:s,readonly:a(i).readonlyProject,class:O(["collab-tile light-border-b",{"bg-grey-50":s%2===0}]),onTypeChanged:n=>R(o,n),onDeleteSelected:n=>x(o,n)},null,8,["collaborator","idx","readonly","class","onTypeChanged","onDeleteSelected"]))),128)),(r(!0),p(B,null,M(a(z),(o,s)=>(r(),j(A,{key:`pending-colaborator-${s}`,collaborator:o,idx:s,readonly:a(i).readonlyProject,class:O(["collab-tile light-border-b",{"bg-grey-50":s%2===0}]),"pending-invite":"",onTypeChanged:n=>R(o,n),onDeleteSelected:n=>x(o,n)},null,8,["collaborator","idx","readonly","class","onTypeChanged","onDeleteSelected"]))),128))])])):N("",!0),a(Q)?(r(),p("h6",Be,C(e.$t("MEMBERS.workspace_access")),1)):N("",!0),d("div",Me,[(r(!0),p(B,null,M(a(U),(o,s)=>(r(),j(A,{key:`joined-colaborator-${s}`,idx:s,readonly:a(i).readonlyProject,collaborator:o,class:O(["collab-tile light-border-b",{"bg-grey-50":s%2===0}]),onTypeChanged:n=>R(o,n),onDeleteSelected:n=>x(o,n)},null,8,["idx","readonly","collaborator","class","onTypeChanged","onDeleteSelected"]))),128)),(r(!0),p(B,null,M(a(W),(o,s)=>(r(),j(A,{key:`pending-colaborator-${s}`,collaborator:o,"pending-invite":"",readonly:a(i).readonlyProject,idx:s,class:O(["collab-tile light-border-b",{"bg-grey-50":s%2===0}]),onTypeChanged:n=>R(o,n),onDeleteSelected:n=>x(o,n)},null,8,["collaborator","readonly","idx","class","onTypeChanged","onDeleteSelected"]))),128))])])])}}}),ze=ye(je,[["__scopeId","data-v-fcc08720"]]);export{ze as default};
