(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t),n.d(t,"AppContext",(function(){return Vt}));var a=n(10),r=n(14),c=n(309),o=n(313),i=n(1),s=n.n(i),u=n(58),l=n.n(u),d=n(277),j=n(316),b=n(318),p=n(319),h=n(320),m=n(321),f=n(0),O=function(e){var t=function(){e.onCancel&&e.onCancel(),e.onClose()};return Object(f.jsx)("div",{children:Object(f.jsxs)(d.a,{open:e.open,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(f.jsx)(j.a,{id:"alert-dialog-title",children:e.title}),Object(f.jsx)(b.a,{children:Object(f.jsx)(p.a,{id:"alert-dialog-description",children:e.msg?Array.isArray(e.msg)?e.msg.map((function(e,t){return Object(f.jsxs)("span",{children:[Object(f.jsx)("b",{children:e[0]}),":"," ","object"===typeof e[1][0]?Object.entries(e[1][0]).map((function(e,t){return Object(f.jsxs)("span",{style:{marginLeft:10},children:[Object(f.jsx)("b",{children:e[0]}),": ",e[1][0]]},t)})):e[1][0],Object(f.jsx)("br",{})]},t)})):Object(f.jsx)("span",{children:e.msg}):null})}),Object(f.jsx)(h.a,{children:"message"===e.type?Object(f.jsx)(m.a,{onClick:t,color:"primary",autoFocus:!0,children:"Ok"}):Object(f.jsxs)("div",{children:[Object(f.jsx)(m.a,{onClick:t,color:"primary",autoFocus:!0,children:"Cancelar"}),Object(f.jsx)(m.a,{variant:"contained",onClick:function(){e.onConfirm(),e.onClose()},color:"primary",autoFocus:!0,style:{marginLeft:10},children:"Ok"})]})})]})})},x=n(113),g=n(303),v=n(323),y=n(145),w=n.n(y),C=n(146),k=n.n(C),S=n(283),I=Object(S.a)(g.a)((function(e){e.theme;return{}}));var D=function(e){var t=e.type,n=e.decimals,a=e.perc,c=e.name,o=e.normalize,i=e.mask,s=e.value,u=e.label,l=e.disabled,d=e.readOnly,j=e.inputRef,b=e.onChange,p=e.maskchar,h=e.children,m=e.id,O=e.money,g=e.variant,y=Object(x.a)(e,["type","decimals","perc","name","normalize","mask","value","label","disabled","readOnly","inputRef","onChange","maskchar","children","id","money","variant"]),C=a?{startAdornment:Object(f.jsx)(v.a,{position:"start",children:" % "})}:{startAdornment:Object(f.jsx)(v.a,{position:"start",children:" R$ "})},S={locale:"pt-BR",formats:{number:{BRL:{style:"decimal",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:n||2}}}};return i?Object(f.jsx)(k.a,{onChange:function(e){return b(o?{target:{name:e.target.name,value:e.target.value.replaceAll(o,"")}}:e)},mask:i,maskChar:p||"",disabled:!!l,value:s,children:function(){return Object(f.jsx)(I,Object(r.a)(Object(r.a)({},y),{},{inputRef:j,label:u||h,disabled:!!l,fullWidth:!0,name:c,variant:g||"standard",id:m||"custom-text-field-".concat(c),value:s,InputProps:{readOnly:!!d}}))}}):O||a?Object(f.jsx)(I,Object(r.a)(Object(r.a)({},e),{},{InputProps:Object(r.a)({separator:".",inputComponent:w.a,readOnly:!!d},C),inputProps:{currency:"BRL",config:S},onChange:function(e,t){return b({target:{name:c,value:t}})},variant:g||"standard",fullWidth:!0,id:c},y)):Object(f.jsx)(I,Object(r.a)(Object(r.a)({InputProps:Object(r.a)({readOnly:!!d},e.InputProps)},e),{},{variant:g||"standard",fullWidth:!0,id:e.name,type:t||null},y))},M=n(156),F=Object(S.a)(M.a)((function(e){e.theme;return{boxSizing:"border-box",position:"relative"}})),R=Object(S.a)(m.a)((function(e){e.theme;return{}}));n(314),n(304);var z=n(317),H=n(310),N=n(286),P=n(69),B=Object(S.a)("span")((function(e){e.theme;return{margin:"0px 0px 0.35em",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:500,fontSize:14,lineHeight:1.6,letterSpacing:-.05,color:"rgb(107, 119, 140)"}})),L=Object(S.a)(z.a)((function(e){e.theme;return{margin:0,fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:500,fontSize:24,lineHeight:1.167,letterSpacing:-.06,color:"rgb(23, 43, 77)"}})),A=Object(S.a)(N.a)((function(e){e.theme;return{width:50,height:50,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:180,color:"white"}}));function E(e){var t=e.value,n=e.Icon,a=e.title,r=e.iconbg,c=Object(P.a)();return Object(f.jsx)(F,{children:Object(f.jsxs)(H.a,{container:!0,children:[Object(f.jsx)(H.a,{item:!0,xs:8,children:Object(f.jsxs)(N.a,{p:2,children:[Object(f.jsx)(N.a,{children:Object(f.jsx)(B,{children:a})}),Object(f.jsx)(N.a,{children:Object(f.jsx)(L,{variant:"h5",children:t})})]})}),Object(f.jsx)(H.a,{item:!0,xs:4,display:"flex",justifyContent:"center",alignItems:"center",children:Object(f.jsx)(A,{style:{background:r||c.palette.primary.main},children:Object(f.jsx)(n,{})})})]})})}var Y=n(305);function _(e){var t=e.count,n=e.page,a=e.setPage,r=e.pageSize;return Object(f.jsx)(Y.a,{count:(t<r?0:Number(t/r)+Number(t%r!==0?1:0)).toFixed(0),showFirstButton:!0,showLastButton:!0,page:n,onChange:function(e,t){a(t)}})}var W=n(287),T=n(288),$=n(289),G=n(325),U=n(285),J=n(326),V=n(327),q=n(328),X=n(329),K=n(330),Q=n(324);var Z=n(23),ee=function(e,t,n){n.push({pathname:t+"/"+e})},te=Object(S.a)(G.a)((function(e){return{color:e.theme.palette.primary.dark}}));function ne(e){var t,n=e.model,r=(e.params,e.columns),c=Object(Z.g)(),o=Object(Z.i)().path,i=s.a.useContext(Vt),u=i.dialog,l=i.snack,d=s.a.useState(1),j=Object(a.a)(d,2),b=j[0],p=j[1],h=s.a.useState(""),m=Object(a.a)(h,2),O=m[0],x=m[1],g=function(e){var t=s.a.useState(null),n=Object(a.a)(t,2),r=n[0],c=n[1],o=s.a.useState(null),i=Object(a.a)(o,2),u=i[0],l=i[1];return s.a.useEffect((function(){u&&clearTimeout(u);var t=setTimeout((function(){c(e)}),200);l(t)}),[e]),r}(O),y=n.useModel({page:b,search:g||void 0}),w=y.data,C=y.mutate;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(U.a,{in:!0,children:Object(f.jsxs)(F,{children:[Object(f.jsxs)(N.a,{p:2,pb:0,display:"flex",children:[Object(f.jsx)(D,{fullWidth:!0,id:"campo-pesquisa",label:"Pesquisa em ".concat(null===w||void 0===w?void 0:w.count," itens..."),autoFocus:!0,onChange:function(e){x(e.target.value)},value:O,InputProps:{startAdornment:Object(f.jsx)(v.a,{position:"start",children:Object(f.jsx)(W.a,{color:"primary"})})},style:{marginRight:10}}),Object(f.jsx)(R,{onClick:function(){return ee("novo",o,c)},variant:"contained",children:"Incluir"})]}),Object(f.jsx)(J.a,{}),Object(f.jsxs)(V.a,{size:"small",style:{minHeight:688,flexDirection:"column"},children:[Object(f.jsxs)(q.a,{children:[r.map((function(e,t){return Object(f.jsx)(te,{align:"left",children:e.Header},t)})),Object(f.jsx)(te,{align:"center",style:{width:"10%"},children:"A\xe7\xf5es"})]}),Object(f.jsx)(X.a,{children:null===w||void 0===w||null===(t=w.rows)||void 0===t?void 0:t.map((function(e,t){return Object(f.jsxs)(K.a,{style:{height:43.39},children:[r.map((function(t,n){return Object(f.jsx)(G.a,{children:"function"===typeof t.acessor?t.acessor(e):e[t.acessor]},n)})),Object(f.jsxs)(G.a,{align:"center",children:[Object(f.jsx)(Q.a,{size:"small",onClick:function(){return ee(e.id,o,c)},children:Object(f.jsx)(T.a,{fontSize:"small"})}),Object(f.jsx)(Q.a,{size:"small",onClick:function(){return function(e){u.showConfirm("'Voc\xea deseja remover: \"".concat(e.nome,'"" da lista ?'),"Aten\xe7\xe3o",(function(){n.delete(e.id).then((function(){C(),l.success("Removido com sucesso!")})).catch((function(){l.error("Por favor, contatar o suporte.")}))}))}(e)},children:Object(f.jsx)($.a,{fontSize:"small"})})]})]},t)}))})]}),Object(f.jsx)(N.a,{display:"flex",justifyContent:"center",p:1,children:Object(f.jsx)(_,{setPage:p,page:b,count:null===w||void 0===w?void 0:w.count,pageSize:15})})]})})})}var ae=n(4),re=n(212),ce=n(331),oe=function e(t,n,a){return a.map((function(a,c){if(a.collapse)return e(t,n,a.views);if(a.layout===t){var o=a.component;return Object(f.jsx)(Z.b,{path:a.layout+a.path,render:function(e){return Object(f.jsx)(o,Object(r.a)({history:n},e))},exact:!0},c)}return null}))},ie=function e(t){var n={};return t.map((function(t){return t.collapse&&(n=Object(r.a)(Object(r.a)(Object(ae.a)({},t.state,se(t.views)),e(t.views)),n)),null})),n},se=function e(t){for(var n=t,a=0;a<n.length;a++){if(n[a].collapse&&e(n[a].views))return!0;if(-1!==window.location.href.indexOf(n[a].path))return!0}return!0},ue=function e(t){for(var n=t,a=0;a<n.length;a++)if(n[a].collapse){var r=e(n[a].views);if(""!==r)return r}else{if(n[a].form){var c=window.location.pathname.split("/");if(c.splice(-1,c.length).join("/"),c.join("/")===n[a].layout+n[a].path)return n[a]}if(window.location.pathname===n[a].layout+n[a].path)return n[a]}return""},le=function e(t,n,a){return a.map((function(a,r){return a.collapse?e(t,n,a.views):a.layout===t?Object(f.jsx)(Z.b,{path:a.layout+a.path+"/:id",component:a.form,exact:!0},r+1e3):null}))},de=function(e,t){var n=e.target,a=n.name,c=n.value;t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(ae.a)({},a,c))}))};function je(e){var t=e.replace(/\D/g,"");return 11===t.length?t.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"):t.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5")}var be=n(298),pe=n(296),he=n(297),me=n(290),fe=n(291),Oe=n(36),xe=n(37),ge=n(50),ve=n(109),ye=n.n(ve);function we(){var e=localStorage.getItem("token"),t=ye.a.create({baseURL:"http://177.153.58.112:8000/api/",headers:{authorization:e?"Token ".concat(e):""}});return t.interceptors.response.use((function(e){var t;return(null===(t=e.headers)||void 0===t?void 0:t.newtoken)&&(localStorage.removeItem("token"),localStorage.setItem("token",e.headers.newtoken)),e}),(function(e){return Promise.reject(e)})),t}var Ce=new(function(){function e(){Object(Oe.a)(this,e),this.login=function(e){return we().post("login/",e).then((function(e){return e.data}))}}return Object(xe.a)(e,[{key:"useCurrentUser",value:function(){return Object(ge.a)("current_user",(function(){return we().get("login/current/").then((function(e){return e.data}))}))}}]),e}()),ke=Object(S.a)(N.a)((function(e){var t=e.theme;return{borderRadius:t.spacing(1),position:"relative",top:t.spacing(-2),marginBottom:t.spacing(-4),background:"linear-gradient(60deg, ".concat(t.palette.primary.light,", ").concat(t.palette.primary.dark,")"),boxShadow:"0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(60 114 193 / 40%)",width:"fit-content",margin:"auto",padding:t.spacing(2,4)}})),Se=Object(S.a)(N.a)((function(e){return{padding:e.theme.spacing(0,2,2,2)}})),Ie=Object(S.a)(z.a)((function(e){return{color:"white",size:e.theme.spacing(8),fontSize:70,fontWeight:"bold"}}));var De=function(e){var t=e.history,n=s.a.useContext(Vt).snack,r=s.a.useState({username:"",password:""}),c=Object(a.a)(r,2),o=c[0],i=c[1];return s.a.useEffect((function(){localStorage.clear()}),[]),Object(f.jsx)(H.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(f.jsx)(H.a,{item:!0,xs:3,children:Object(f.jsx)(F,{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.username&&o.password?Ce.login(o).then((function(e){n.success("Sucesso ao Logar!"),localStorage.setItem("token","".concat(e.token)),t.push("/admin/dashboard")})).catch((function(e){n.error("Usu\xe1rio ou Senha Inv\xe1lidos :( ")})):n.error("Usu\xe1rio ou Senha Inv\xe1lidos :( ")},children:[Object(f.jsx)(ke,{display:"flex",justifyContent:"center",children:Object(f.jsx)(Ie,{variant:"h1",children:"ADMIN"})}),Object(f.jsxs)(Se,{children:[Object(f.jsx)(D,{label:"Usu\xe1rio",name:"username",onChange:function(e){return de(e,i)},value:o.username,InputProps:{startAdornment:Object(f.jsx)(v.a,{position:"start",children:Object(f.jsx)(me.a,{})})},style:{marginBottom:10}}),Object(f.jsx)(D,{label:"Senha",name:"password",type:"password",onChange:function(e){return de(e,i)},value:o.password,InputProps:{startAdornment:Object(f.jsx)(v.a,{position:"start",children:Object(f.jsx)(fe.a,{})})},style:{marginBottom:10}}),Object(f.jsx)(R,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"LOGIN"})]})]})})})})},Me=n(292),Fe=n(293),Re=n(294),ze=n(22),He=n.n(ze),Ne=n(45),Pe=n(67),Be=n(65),Le=function(){function e(t){var n=this;Object(Oe.a)(this,e),this.namespace="",this.response=void 0,this.save=function(){var e=Object(Ne.a)(He.a.mark((function e(t){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id){e.next=6;break}return e.next=3,we().patch("/".concat(n.namespace,"/").concat(t.id,"/"),t);case 3:n.response=e.sent,e.next=9;break;case 6:return e.next=8,we().post("/".concat(n.namespace,"/"),t);case 8:n.response=e.sent;case 9:return 201!==n.response.status&&200!==n.response.status||n.refreshModel(),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.get=function(){var e=Object(Ne.a)(He.a.mark((function e(t){var a,r,c=arguments;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,we().get(t?"/".concat(n.namespace,"/").concat(t,"/"):"/".concat(n.namespace,"/"),{params:a});case 3:if(!(r=e.sent)){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delete=function(){var e=Object(Ne.a)(He.a.mark((function e(t){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we().delete("/".concat(n.namespace,"/").concat(t,"/"));case 2:if(204!==e.sent.status){e.next=8;break}return n.refreshModel(),e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.action=function(){var e=Object(Ne.a)(He.a.mark((function e(t,a,r){var c,o=arguments;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=o.length>3&&void 0!==o[3]?o[3]:"",console.log(r),e.t0=t,e.next="post"===e.t0?5:"get"===e.t0?8:"delete"===e.t0?11:14;break;case 5:return e.next=7,we().post(c?"/".concat(n.namespace,"/").concat(c,"/").concat(a,"/"):"/".concat(n.namespace,"/").concat(a,"/"),r);case 7:return e.abrupt("return",e.sent);case 8:return e.next=10,we().get(c?"/".concat(n.namespace,"/").concat(c,"/").concat(a,"/"):"/".concat(n.namespace,"/").concat(a,"/"),{params:r});case 10:return e.abrupt("return",e.sent);case 11:return e.next=13,we().delete("/".concat(n.namespace,"/").concat(a,"/").concat(c,"/"));case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),this.namespace=t}return Object(xe.a)(e,[{key:"refreshModel",value:function(e){return Object(ge.b)(e||this.namespace,void 0)}},{key:"useModel",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;return Object(ge.a)("".concat(this.namespace).concat(JSON.stringify(t)),Object(Ne.a)(He.a.mark((function r(){var c;return He.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,we().get(0!==n?"/".concat(e.namespace,"/").concat(n,"/"):"/".concat(e.namespace,"/"),{params:t,paramsSerializer:a});case 2:return c=r.sent,r.abrupt("return",c.data);case 4:case"end":return r.stop()}}),r)}))))}},{key:"_inserir",value:function(){var e=Object(Ne.a)(He.a.mark((function e(t){var n;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we().post("/".concat(this.namespace,"/"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Ae=new(function(e){Object(Pe.a)(n,e);var t=Object(Be.a)(n);function n(){return Object(Oe.a)(this,n),t.apply(this,arguments)}return Object(xe.a)(n,[{key:"useModel",value:function(e){var t=this,n=Object(r.a)({cliente:!0,cliente_ativo:!0},e);return Object(ge.a)("".concat(this.namespace,"?").concat(JSON.stringify(n)),Object(Ne.a)(He.a.mark((function e(){var a;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we().get("/".concat(t.namespace,"/"),{params:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)}))))}}]),n}(Le))("pessoa"),Ee=new(function(e){Object(Pe.a)(n,e);var t=Object(Be.a)(n);function n(){return Object(Oe.a)(this,n),t.apply(this,arguments)}return Object(xe.a)(n,[{key:"useModel",value:function(e){var t=this,n=Object(r.a)({func:!0,funcionario_ativo:!0},e);return Object(ge.a)("".concat(this.namespace,"?").concat(JSON.stringify(n)),Object(Ne.a)(He.a.mark((function e(){var a;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we().get("/".concat(t.namespace,"/"),{params:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)}))))}}]),n}(Le))("pessoa"),Ye=new(function(e){Object(Pe.a)(n,e);var t=Object(Be.a)(n);function n(){return Object(Oe.a)(this,n),t.apply(this,arguments)}return Object(xe.a)(n,[{key:"useModel",value:function(e){var t=this,n=Object(r.a)({gerente:!0,gerente_ativo:!0},e);return Object(ge.a)("".concat(this.namespace,"?").concat(JSON.stringify(n)),Object(Ne.a)(He.a.mark((function e(){var a;return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we().get("/".concat(t.namespace,"/"),{params:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)}))))}}]),n}(Le))("pessoa");var _e=function(){var e=Ae.useModel().data,t=Ee.useModel().data,n=Ye.useModel().data;return Object(f.jsxs)(H.a,{container:!0,spacing:2,children:[Object(f.jsx)(H.a,{item:!0,xs:4,children:Object(f.jsx)(E,{title:"Clientes",value:null===e||void 0===e?void 0:e.count,Icon:Me.a})}),Object(f.jsx)(H.a,{item:!0,xs:4,children:Object(f.jsx)(E,{title:"Funcion\xe1rios",value:null===t||void 0===t?void 0:t.count,Icon:Fe.a})}),Object(f.jsx)(H.a,{item:!0,xs:4,children:Object(f.jsx)(E,{title:"Gerentes",value:null===n||void 0===n?void 0:n.count,Icon:Re.a})})]})},We=n(295);var Te=function(){return Object(f.jsx)("div",{})};var $e=function(){return Object(f.jsx)("div",{})};var Ge=function(){return Object(f.jsx)(ne,{columns:[{Header:"Nome",acessor:"nome"},{Header:"CPF",acessor:function(e){return je(e.cpf)}},{Header:"Data de Nascimento",acessor:function(e){return new Date(e.data_nascimento).format("DD/MM/YYYY")}}],model:Ee})};var Ue=function(){return Object(f.jsx)("div",{})};var Je=function(){return Object(f.jsx)(ne,{columns:[{Header:"Nome",acessor:"nome"},{Header:"CPF",acessor:function(e){return je(e.cpf)}},{Header:"Data de Nascimento",acessor:function(e){return new Date(e.data_nascimento).format("DD/MM/YYYY")}}],model:Ye})};var Ve=function(){return Object(f.jsx)("div",{})},qe=[{path:"/cadastros/clientes",name:"Clientes",component:function(){return Object(f.jsx)(ne,{columns:[{Header:"Nome",acessor:"nome"},{Header:"CPF",acessor:function(e){return je(e.cpf)}},{Header:"Data de Nascimento",acessor:function(e){return new Date(e.data_nascimento).format("DD/MM/YYYY")}}],model:Ae})},form:function(){var e=s.a.useState({cpf:"",enderecos:[{bairro:"",cep:"",cidade:"",complemento:"",endereco:"",estado:"",ibge:"",numero:"",observacao:"",pais:"Brasil",requst:!0,uf:"RJ"}],cliente:!0,cliente_ativo:!0,data_nascimento:new Date,email:"",func:!1,funcionario_ativo:!1,gerente:!1,gerente_ativo:!1,nome:"",sexo:1,tel_cel:"",isRefresh:!0}),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(f.jsx)(tt,{model:Ae,state:n,setState:r,title:"Cadastro de Cliente",children:Object(f.jsxs)(H.a,{container:!0,spacing:2,children:[Object(f.jsx)(H.a,{item:!0,xs:4,children:Object(f.jsx)(D,{label:"CPF",value:n.cpf,setState:function(e){return de(e,r)},name:"cpf"})}),Object(f.jsx)(H.a,{item:!0,xs:12,children:Object(f.jsx)(dt,{state:n,setState:r})})]})})},Icon:Me.a,layout:"/admin"},{path:"/cadastros/funcionarios",name:"Funcion\xe1rios",component:Ge,Icon:Fe.a,form:Ue,layout:"/admin"},{path:"/cadastros/gerentes",name:"Gerentes",component:Je,form:Ve,Icon:Re.a,layout:"/admin"},{path:"/cadastros/agendamentos",name:"Agendamentos",component:Te,form:$e,Icon:We.a,layout:"/admin"}],Xe=[{norender:!0,path:"/login",name:"Login",component:De,layout:"/auth"},{path:"/dashboard",name:"Dashboard",component:_e,Icon:pe.a,layout:"/admin"},{collapse:!0,name:"Cadastro",state:"CadastroscCollapse",views:qe,Icon:he.a}],Ke=Object(S.a)("div")((function(e){e.theme;return{backgroundColor:"rgba(0,0,0,0.3)",width:"100%",height:"100%",top:0,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}})),Qe=Object(S.a)(z.a)((function(e){return{color:e.theme.palette.primary.main,fontWeight:300,position:"relative"}}));var Ze=function(e){var t=e.formTitle,n=e.customTitle,r=e.path,c=e.history,o=e.disableInclude,i=e.isModal,u=Object(x.a)(e,["formTitle","customTitle","path","history","disableInclude","isModal"]),l=Object(Z.h)().id,d=s.a.useState(!1),j=Object(a.a)(d,2),b=j[0],p=j[1];return s.a.useEffect((function(){b||p(!0)}),[]),ue(Xe).Icon,Object(f.jsx)("div",{children:i?Object(f.jsx)(f.Fragment,{children:u.children}):Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(M.a,{style:u.minHeight?{minHeight:500}:{},children:[Object(f.jsx)(re.a,{in:u.loading,style:{zIndex:1},children:Object(f.jsx)(Ke,{children:Object(f.jsx)(ce.a,{color:"primary"})})}),Object(f.jsxs)(be.a,{display:"flex",pl:2,pr:2,pt:2,children:[Object(f.jsx)(be.a,{flexGrow:1,children:Object(f.jsx)(Qe,{variant:"h5",children:n||"".concat("novo"!==l&&isNaN(l)?"Lista":"Inclus\xe3o"," de ").concat(ue().name)})}),t?Object(f.jsx)(be.a,{children:Object(f.jsx)(R,{disabled:o,onClick:function(){return ee("novo",r,c)},children:"Incluir"})}):null]}),u.children]})})})},et=Object(S.a)("div")((function(e){e.theme;return{backgroundColor:"rgba(0,0,0,0.3)",width:"100%",height:"100%",top:0,display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}}));function tt(e){var t=e.model,n=e.noValidate,c=e.isModal,o=e.dontSet,i=e.state,u=e.setState,l=e.size,d=e.title,j=e.children,b=Object(Z.h)().id,p=s.a.useContext(Vt),h=p.snack,m=p.dialog,O=s.a.useState(!1),x=Object(a.a)(O,2),g=x[0],v=x[1],y=Object(Z.g)();s.a.useEffect((function(){console.log(b),"novo"===b||!t||o||c||(console.log(b),v(!0),t.get(b).then((function(e){var t=e;Object.keys(e).forEach((function(n){t=Object(r.a)(Object(r.a)({},t),{},Object(ae.a)({},n,e[n]))})),u((function(e){return Object(r.a)(Object(r.a)(Object(r.a)({},e),t),{},{isRefresh:!0})})),v(!1)})).catch((function(){v(!1),m.showMessage("Verifique sua conex\xe3o de internet, caso persista, favor consultar um administrador.","Houve um erro ao processar solicita\xe7\xe3o."),y.goBack()})))}),[b]);var w=function(){return Object(f.jsx)(N.a,{pl:c?2:0,children:Object(f.jsx)(R,{variant:"outlined",onClick:function(){return c?c(!1):y.goBack()},children:c?"Cancelar":"Voltar para Lista"})})},C=function(e){var n;e.preventDefault(),n="novo"===b?Object(r.a)({},i):Object(r.a)(Object(r.a)({},i),{},{id:b}),t.save(n).then((function(e){e?h.success("Criado com Sucesso!",2e3):h.error("Erro 400!",1e3),c?c(!1):y.goBack()})).catch((function(e){console.log(e),m.showMessage(function(e){return e.response?"object"===typeof e.response.data?Object.entries(e.response.data):"":e.response.data}(e),"Houve um erro ao processar seu pedido")}))},k=function(){return Object(f.jsx)(f.Fragment,{children:c?Object(f.jsx)(R,{type:"button",variant:"contained",onClick:C,disabled:g,color:"primary",children:"Gravar"}):Object(f.jsx)(R,{type:"submit",disabled:g,color:"primary",variant:"contained",children:"Gravar"})})};return Object(f.jsx)("form",{noValidate:!!n,onSubmit:C,children:Object(f.jsx)(H.a,{justify:"center",container:!0,spacing:2,children:Object(f.jsxs)(H.a,{item:!0,xs:l||12,children:[Object(f.jsxs)(Ze,{customTitle:d,children:[Object(f.jsx)(N.a,{p:2,children:j}),Object(f.jsx)(re.a,{in:g,children:Object(f.jsx)(et,{children:Object(f.jsx)(ce.a,{color:"primary"})})})]}),Object(f.jsxs)(N.a,{display:"flex",pt:2,children:[Object(f.jsx)(N.a,{flexGrow:"1",children:Object(f.jsx)(w,{})}),Object(f.jsx)(N.a,{children:Object(f.jsx)(k,{})})]})]})})})}var nt=n(311),at=n(333),rt=n(334),ct=n(299),ot=Object(S.a)(nt.a)((function(e){e.theme;return{border:"0px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}}})),it=Object(S.a)(at.a)((function(e){e.theme;return{backgroundColor:"rgba(0, 0, 0, .03)",paddingLeft:8,borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:"48px !important",maxHeight:48,height:48}})),st=Object(S.a)(rt.a)((function(e){return{padding:e.theme.spacing(1)}})),ut=Object(S.a)(z.a)((function(e){var t=e.theme;return{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}));var lt=function(e){var t=e.title,n=e.children,r=e.startExpanded,c=s.a.useState(r),o=Object(a.a)(c,2),i=o[0],u=o[1];return Object(f.jsxs)(ot,{expanded:i,onChange:function(){u(!i)},children:[Object(f.jsx)(it,{expandIcon:Object(f.jsx)(ct.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(f.jsx)(ut,{children:t})}),Object(f.jsx)(st,{children:n})]})};var dt=function(e){var t=e.state,n=e.setState,a=s.a.useContext(Vt).dialog,c=s.a.useRef(null),o=function(e){var t=e.target,a=t.value,c=t.name;return n((function(e){return Object(r.a)(Object(r.a)({},e),{},{enderecos:[Object(r.a)(Object(r.a)({},e.enderecos[0]),{},Object(ae.a)({},c,a))]})}))};return s.a.useEffect((function(){t.enderecos&&8===t.enderecos[0].cep.length&&ye.a.get("https://viacep.com.br/ws/".concat(t.enderecos[0].cep,"/json/")).then((function(e){e.data.erro?a.showMessage("Imposs\xedvel Realizar Preenchimento autom\xe1tico","CEP Inv\xe1lido"):(n((function(t){return Object(r.a)(Object(r.a)({},t),{},{enderecos:[Object(r.a)(Object(r.a)({},t.enderecos[0]),{},{endereco:e.data.logradouro,complemento:e.data.complemento,uf:e.data.uf,bairro:e.data.bairro,cidade:e.data.localidade,ibge:e.data.ibge})]})})),c.current.focus())}))}),[t.enderecos[0].cep]),Object(f.jsx)(lt,{title:"Endere\xe7o",startExpanded:!0,children:Object(f.jsxs)(H.a,{container:!0,spacing:2,children:[Object(f.jsx)(H.a,{item:!0,xs:2,children:Object(f.jsx)(D,{label:"CEP",mask:"99.999-999",normalize:/[-.]/g,onChange:o,name:"cep",value:t.enderecos[0].cep})}),Object(f.jsx)(H.a,{item:!0,xs:7,children:Object(f.jsx)(D,{label:"Logradouro",onChange:o,name:"endereco",value:t.enderecos[0].endereco})}),Object(f.jsx)(H.a,{item:!0,xs:1,children:Object(f.jsx)(D,{label:"N\xfamero",mask:"999999",inputRef:c,onChange:o,name:"numero",value:t.enderecos[0].numero})}),Object(f.jsx)(H.a,{item:!0,xs:2,children:Object(f.jsx)(D,{label:"Bairro",onChange:o,name:"bairro",value:t.enderecos[0].bairro})}),Object(f.jsx)(H.a,{item:!0,xs:2,children:Object(f.jsx)(D,{label:"Cidade",onChange:o,name:"cidade",value:t.enderecos[0].cidade})}),Object(f.jsx)(H.a,{item:!0,xs:1,children:Object(f.jsx)(D,{label:"UF",onChange:o,name:"uf",value:t.enderecos[0].uf})}),Object(f.jsx)(H.a,{item:!0,xs:4,children:Object(f.jsx)(D,{label:"Email",onChange:o,name:"email",value:t.enderecos[0].email})}),Object(f.jsx)(H.a,{item:!0,xs:5,children:Object(f.jsx)(D,{label:"Observa\xe7\xf5es",onChange:o,name:"observacao",value:t.enderecos[0].observacao})})]})})},jt=(n(206),n(207),n(125)),bt=Object(jt.a)({typography:{fontFamily:["Poppins","Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},palette:{primary:{light:"#5e92f3",main:"#1565c0",dark:"#003c8f",50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3"}}}),pt=n(302),ht=n(219),mt=n(306),ft=n(42),Ot=n(149),xt=n.n(Ot),gt=n(148),vt=n.n(gt),yt=n(312),wt=n(335),Ct=n(30),kt=n(308),St=n(336),It=n(337),Dt=n(332),Mt=n(322),Ft=n(338),Rt=n(300),zt=n(301),Ht=240,Nt=Object(S.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary[100],height:"100%",display:"flex"}})),Pt=function(e){return{width:Ht,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},Bt=function(e){return Object(ae.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},Lt=Object(S.a)("div")((function(e){var t=e.theme;return Object(r.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),At=Object(S.a)(wt.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(r.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:Ht,width:"calc(100% - ".concat(Ht,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),Et=Object(S.a)(yt.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(r.a)(Object(r.a)({width:Ht,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},n&&Object(r.a)(Object(r.a)({},Pt(t)),{},{"& .MuiDrawer-paper":Pt(t)})),!n&&Object(r.a)(Object(r.a)({},Bt(t)),{},{"& .MuiDrawer-paper":Bt(t)}))}));function Yt(){var e=Object(Z.g)(),t=Object(Ct.e)(),n=s.a.useState(!1),c=Object(a.a)(n,2),o=c[0],i=c[1],u=s.a.useState(Object(r.a)({},ie(Xe))),l=Object(a.a)(u,2),d=l[0],j=l[1];return Object(f.jsxs)(Nt,{children:[Object(f.jsx)(At,{position:"fixed",open:o,children:Object(f.jsxs)(Ft.a,{children:[Object(f.jsx)(Q.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",sx:Object(r.a)({marginRight:"36px"},o&&{display:"none"}),children:Object(f.jsx)(zt.a,{})}),Object(f.jsx)(z.a,{variant:"h6",noWrap:!0,component:"div",children:ue(Xe).name})]})}),Object(f.jsxs)(Et,{variant:"permanent",open:o,children:[Object(f.jsx)(Lt,{children:Object(f.jsx)(Q.a,{onClick:function(){i(!1)},children:"rtl"===t.direction?Object(f.jsx)(vt.a,{}):Object(f.jsx)(xt.a,{})})}),Object(f.jsx)(J.a,{}),function n(a){return a.map((function(a,c){if(a.redirect)return null;if(a.norender)return null;var o=a.Icon,i={backgroundColor:ue(Xe)===a?t.palette.primary.main:"unset",color:ue(Xe)===a?"white":"inherit",icon:ue(Xe)===a?"white":t.palette.primary.main};if(a.collapse){var s={};return s[a.state]=!d[a.state],Object(f.jsxs)("div",{children:[Object(f.jsxs)(kt.a,{disabled:!!a.disabled&&a.disabled,button:!0,onClick:function(){!function(e){j((function(t){return Object(r.a)(Object(r.a)({},t),e)}))}(s)},children:[Object(f.jsx)(St.a,{style:{color:i.icon},children:Object(f.jsx)(o,{})}),Object(f.jsx)(It.a,{primary:a.name,disableTypography:!0}),d[a.state]?Object(f.jsx)(Rt.a,{}):Object(f.jsx)(ct.a,{})]},c),Object(f.jsx)(Dt.a,{timeout:"auto",in:d[a.state],children:Object(f.jsx)(Mt.a,{component:"div",children:n(a.views)})})]},c)}return Object(f.jsxs)(kt.a,{disabled:!!a.disabled&&a.disabled,button:!0,onClick:function(){return e.push(a.layout+a.path)},style:{backgroundColor:i.backgroundColor},children:[Object(f.jsx)(St.a,{style:{color:i.icon},children:Object(f.jsx)(o,{})}),Object(f.jsx)(It.a,{primary:a.name,disableTypography:!0,style:{color:i.color}})]},c)}))}(Xe)]}),Object(f.jsxs)(N.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(f.jsx)(Lt,{}),Object(f.jsxs)(Z.d,{children:[oe("/admin",e,Xe),le("/admin",e,Xe),Object(f.jsx)(Z.a,{from:"/admin",to:"/admin/login"})]})]})]})}var _t=Object(S.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary[50],height:"100%"}}));function Wt(){var e=Object(Z.g)();return Object(f.jsx)(_t,{children:Object(f.jsxs)(Z.d,{children:[oe("/admin",e,Xe),Object(f.jsx)(Z.a,{from:"/admin",to:"/admin/login"})]})})}var Tt=Object(S.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary[100],height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}));function $t(){var e=Object(Z.g)();return Object(f.jsx)(Tt,{children:Object(f.jsxs)(Z.d,{children:[oe("/auth",e,Xe),Object(f.jsx)(Z.a,{from:"/auth",to:"/auth/login"})]})})}var Gt=n(70),Ut=n.n(Gt);Date.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0},Date.getDaysInMonth=function(e,t){return[31,Date.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},Date.prototype.isLeapYear=function(){return Date.isLeapYear(this.getFullYear())},Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth())},Date.prototype.addMonths=function(e){var t=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+e),this.setDate(Math.min(t,this.getDaysInMonth())),this},Date.prototype.format=function(e){return Ut()(this).format(e)},String.prototype.toBRL=function(){return new Intl.NumberFormat("id",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}).format(this)},Number.prototype.toBRL=function(){return new Intl.NumberFormat("id",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2}).format(this)},Array.prototype.dontHave=function(e,t){return!this.find((function(n){return n[t]===e[t]}))},Array.prototype.sumBy=function(e){return this.map("function"===typeof e?e:function(t){return t[e]}).reduce((function(e,t){return Number(e)+Number(t)}),0)},[String,Number].forEach((function(e){return e.prototype.in=function(e){return!!~e.indexOf(this)}}));var Jt={snack:{error:function(e,t){return t},warning:function(e,t){return t},info:function(e,t){return t},success:function(e,t){return t},clear:function(e,t){return t}},dialog:{showMessage:function(e,t){return t},showConfirm:function(e,t,n,a){return a}}},Vt=s.a.createContext(Jt),qt=s.a.forwardRef((function(e,t){return Object(f.jsx)(mt.a,Object(r.a)({elevation:6,ref:t,variant:"filled"},e))})),Xt=function(){var e=s.a.useContext(Vt),t=s.a.useState({open:!1,type:"",msg:"",timer:1e3}),n=Object(a.a)(t,2),i=n[0],u=n[1],l=s.a.useState({open:!1,type:"message",msg:"",title:"",onConfirm:void 0,onCancel:void 0}),d=Object(a.a)(l,2),j=d[0],b=d[1],p=function(e,t,n){u((function(a){return Object(r.a)(Object(r.a)({},a),{},{open:!0,type:e,msg:t,timer:n})}))},h=function(e,t,n,a,c){b((function(o){return Object(r.a)(Object(r.a)({},o),{},{open:!0,type:e,msg:t,title:n,onConfirm:a,onCancel:c,onClose:x})}))},m=function(e,t){"clickaway"!==t&&u((function(e){return Object(r.a)(Object(r.a)({},e),{},{open:!1,type:"",msg:""})}))},x=function(){b((function(e){return Object(r.a)(Object(r.a)({},e),{},{onConfirm:void 0,onCancel:void 0,open:!1})}))};s.a.useEffect((function(){e.snack.error=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return p("error",e,t)},e.snack.warning=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return p("warning",e,t)},e.snack.info=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return p("info",e,t)},e.snack.success=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return p("success",e,t)},e.snack.clear=m,e.dialog.showMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Alerta";return h("message",e,t)},e.dialog.showConfirm=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Mensagem de Confirma\xe7\xe3o",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return h("confirm",e,t,n,a)}}),[e]);return Object(f.jsx)(o.a,{theme:bt,children:Object(f.jsx)(ht.b,{dateAdapter:pt.a,children:Object(f.jsxs)(Vt.Provider,{value:e,children:[i.open?Object(f.jsx)("div",{children:Object(f.jsx)(c.a,{open:i.open,autoHideDuration:i.timer,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:Object(f.jsx)(qt,{severity:i.type,children:i.msg})})}):null,Object(f.jsx)(O,Object(r.a)({},j)),Object(f.jsx)(ft.a,{children:Object(f.jsxs)(Z.d,{children:[Object(f.jsx)(Z.b,{path:"/client",component:Wt}),Object(f.jsx)(Z.b,{path:"/admin",component:Yt}),Object(f.jsx)(Z.b,{path:"/auth",component:$t}),Object(f.jsx)(Z.a,{from:"/",to:"/auth"})]})})]})})})};l.a.render(Object(f.jsx)(Xt,{}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.0dae9a84.chunk.js.map