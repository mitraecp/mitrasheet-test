import{et as S,R as s,ev as d,T as v,Y as A,S as E,$ as L,s as T,q as g}from"./entry.102678be.js";import{u as h}from"./useGoToScreen.2d5a4740.js";import{u as O}from"./useSpaceHelpers.ee842422.js";import"./legacy_store.afec42ea.js";import"./useLegacyService.c9b3bbf8.js";import"./useHeadSettings.f1985dcc.js";import"./composables.aec528df.js";import"./useURLPaths.92126496.js";const W=S(async(o,u)=>{var l,I,f,w;let e,r;if(o.fullPath===u.fullPath||[s.LOGIN,s.VALIDATE_EMAIL,s.INVITE_VALIDATION].includes(u.path)){let t=parseInt(o.params.baseId),c=parseInt((l=o.params)==null?void 0:l.workspaceId);const i=([e,r]=d(()=>v().validateInvitation()),e=await e,r(),e);i&&(t=i.projectId,c=i.workspaceId);const m=A(),_=E();if(_.setUserLocale((f=(I=_.loggedUser)==null?void 0:I.language)!=null?f:"pt-BR"),m.selectedProject.id&&m.selectedProject.id===t)return;try{if(t===void 0||!c)throw new Error("O ID da URL deve conter apenas n\xFAmeros!");const{workspace:a,error:p}=([e,r]=d(()=>L().getWorkspaceById(c)),e=await e,r(),e);if((p||!a)&&p.statusCode===403){h(),T("PROJECT.no_access");return}const n=(w=a.projects)==null?void 0:w.find(k=>k.id===t);if(!p.statusCode)[e,r]=d(()=>O().setupSpaceData(a,{project:n!=null?n:0})),await e,r();else throw new Error("Falha ao carregar dados do Workspace!")}catch(a){return console.warn(a),g(s.LOGIN)}}});export{W as default};
