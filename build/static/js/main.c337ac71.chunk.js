(this["webpackJsonpreact-primeiro"]=this["webpackJsonpreact-primeiro"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n,a,s=c(1),r=c.n(s),i=c(30),o=c.n(i),l=(c(39),c(2)),j=c(3),d=(c(40),c(0)),u=function(){var e=Object(s.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{className:"base-component",children:[Object(d.jsxs)("div",{className:"counter-frame",children:[Object(d.jsx)("h1",{children:"Counter"}),Object(d.jsxs)("div",{className:"cont-format",children:[Object(d.jsx)("button",{onClick:function(){n(c-1)},children:"-"}),Object(d.jsx)("div",{children:c}),Object(d.jsx)("button",{onClick:function(){n(c+1)},children:"+"})]})]}),Object(d.jsxs)("div",{className:"card text-center",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h1",{children:"Simple react component with a counting function"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h2",{className:"card-title",children:"This was made with the use of the useState react hook"}),Object(d.jsxs)("div",{className:"useState-structure",children:[Object(d.jsx)("p",{className:"card-text",children:"Main useState structure:"}),Object(d.jsxs)("code",{children:["const [variable, variableSetter] = useState(initialValue) ",Object(d.jsx)("br",{})]}),Object(d.jsx)("code",{children:"const (clickingFunction) ( variableSetter(functionRule) )"})]}),Object(d.jsx)("h3",{children:"Then, atribute the function to each button"}),Object(d.jsx)("a",{href:"https://en.reactjs.org/docs/hooks-reference.html#usestate",target:"blank",children:Object(d.jsx)("button",{children:"Documentation"})})]}),Object(d.jsx)("div",{className:"card-footer text-muted"})]})]})},b=(c(42),function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),i=r[0],o=r[1],l=Object(s.useState)(""),u=Object(j.a)(l,2),b=u[0],h=u[1];return Object(d.jsxs)("div",{className:"cont-format input base-component",children:[Object(d.jsx)("h1",{style:{color:"#FFFFFF"},children:"Input exercise:"}),Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){n(e.target.value)},placeholder:"first name"}),Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"last name"}),Object(d.jsx)("input",{type:"number",value:b,onChange:function(e){h(e.target.value)},placeholder:"---"}),Object(d.jsx)("div",{style:{color:"#FFFFFF"},children:Object(d.jsxs)("h2",{children:[" Hey"," ".concat(c," ").concat(i),", ",Object(d.jsx)("br",{}),"how are you?",Object(d.jsx)("br",{}),"you are ",b," years old."]})}),Object(d.jsxs)("div",{class:"card text-center",children:[Object(d.jsx)("div",{class:"card-header",children:Object(d.jsx)("h1",{children:"Exploring the useState functionalities using an input"})}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h2",{class:"card-title",children:"This was made with the use of the useState react hook"}),Object(d.jsxs)("div",{className:"useState-structure",children:[Object(d.jsx)("p",{class:"card-text",children:"Main useState structure:"}),Object(d.jsx)("p",{children:"const [variable, variableSetter] = useState(initialValue)"}),Object(d.jsx)("p",{children:" const (clickingFunction) ( variableSetter(functionRule) )"})]}),Object(d.jsx)("a",{href:"https://en.reactjs.org/docs/hooks-reference.html#usestate",children:Object(d.jsx)("button",{children:"Documentation"})})]}),Object(d.jsx)("div",{class:"card-footer text-muted"})]})]})}),h=(c(43),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"cont-format input",children:[Object(d.jsx)("h2",{children:"List exhibition"}),Object(d.jsx)("ul",{className:"list-ex1",children:[{name:"Paulo",age:31},{name:"Marcos",age:45},{name:"Lucas",age:18},{name:"Junior",age:64},{name:"Jose",age:28},{name:"Carlos",age:19},{name:"Maria",age:15},{name:"Ana",age:23}].map((function(e,t){return Object(d.jsx)("li",{className:"list-item1",children:"".concat(e.name," - ").concat(e.age," anos")},t)}))})]})]})}),x=(c(44),function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{className:"conditional-format",children:[Object(d.jsx)("button",{onClick:function(){n(!c)},children:c?"Ocultar texto":"Mostrar texto"}),Object(d.jsx)("aside",{children:!0===c&&Object(d.jsx)("h4",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse ea quibusdam earum repudiandae! Tempora ipsum nihil facilis laboriosam, in magni ad dignissimos debitis iste, illum vero. Ducimus, magni consequuntur."})})]})}),m=function(){var e=Object(s.useState)("#FFF"),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(d.jsx)("div",{className:"cont-format input",children:Object(d.jsx)("button",{style:{backgroundColor:c},onClick:function(){n("blue")},children:"Click me"})})},O=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),i=r[0],o=r[1],l=Object(s.useState)(""),u=Object(j.a)(l,2),b=u[0],h=u[1];Object(s.useEffect)((function(){h("".concat(c," ").concat(i))}),[c,i]);return Object(d.jsxs)("div",{className:"flex flex-col justify-center",children:[Object(d.jsx)("input",{className:"p-2",type:"text",placeholder:"Digite seu nome",value:c,onChange:function(e){n(e.target.value)}}),Object(d.jsx)("input",{className:"p-2",type:"text",placeholder:"Digite seu sobrenome",value:i,onChange:function(e){o(e.target.value)}}),Object(d.jsxs)("p",{children:["Nome completo: ",b," "]})]})},p=c(8),f=c(6),v=c.n(f),g=(c(46),function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(j.a)(a,2),i=r[0],o=r[1];Object(s.useEffect)((function(){l()}),[]);var l=function(){var e=Object(p.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,fetch("https://api.b7web.com.br/cinema/");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,o(!1),n(c),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),o(!1),n([]),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"p-5",style:{backgroundColor:"#4F4F4F"},children:[i&&Object(d.jsx)("div",{children:"Carregando..."}),Object(d.jsx)("div",{children:!i&&c.length>0&&Object(d.jsx)("div",{className:"flex justify-center",style:{color:"#FFFFFF",fontFamily:"Source Code Pro"},children:Object(d.jsxs)("h1",{children:[" Total de Filmes em cartaz: ",c.length," "]})})}),Object(d.jsx)("div",{className:"grid grid-cols-6 gap-3 ",children:c.map((function(e,t){return Object(d.jsxs)("div",{className:"movie-frame movie-title flex flex-col text-center",children:[Object(d.jsx)("img",{src:e.avatar,alt:""}),Object(d.jsx)("h2",{children:e.titulo})]},t)}))}),!i&&0===c.length&&Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Algo deu errado, tente novamente mais tarde."})})]})}),N=function(e){var t=e.onAdd,c=Object(s.useState)(""),n=Object(j.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(""),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(d.jsxs)("fieldset",{className:"border-2 mb-3 p-3",children:[Object(d.jsx)("legend",{children:Object(d.jsx)("h2",{children:"Adicionar um novo post"})}),Object(d.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)},placeholder:"Digite um t\xedtulo",className:"block",value:a}),Object(d.jsx)("textarea",{onChange:function(e){u(e.target.value)},className:"block border",children:l}),Object(d.jsx)("button",{className:"block",onClick:function(){l&&a?t(a,l):alert("Preencha os dados")},children:"Adicionar"})]})},y=function(e){var t=e.data;return Object(d.jsxs)("div",{style:{border:"1px solid black",borderRadius:"10px",marginBottom:"10px",padding:"10px"},children:[Object(d.jsx)("h4",{className:"font-bold",children:t.title}),Object(d.jsxs)("small",{children:["#",t.id," - Usu\xe1rio: ",t.userId]}),Object(d.jsx)("p",{children:t.body})]})},k=c(31),w=c.n(k).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),F={getAllPosts:function(){var e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addNewPost:function(){var e=Object(p.a)(v.a.mark((function e(t,c,n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/posts",{title:t,body:c,userId:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}()},S=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(j.a)(a,2),i=r[0],o=r[1];Object(s.useEffect)((function(){l()}),[]);var l=function(){var e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,F.getAllPosts();case 3:t=e.sent,o(!1),n(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(p.a)(v.a.mark((function e(t,c){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.addNewPost(t,c,1);case 2:e.sent.id?alert("Post adicionado com sucesso!"):alert("Ocorreu algum erro :(");case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[i&&Object(d.jsx)("div",{children:"Carregando..."}),Object(d.jsx)(N,{onAdd:u}),Object(d.jsx)("div",{children:!i&&c.length>0&&Object(d.jsx)("div",{className:"my-10",children:Object(d.jsxs)("h1",{children:["Total de Posts: ",c.length]})})}),Object(d.jsx)("div",{children:c.map((function(e,t){return Object(d.jsx)(y,{data:e})}))}),!i&&0===c.length&&Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"N\xe3o h\xe1 posts para serem exibidos."})})]})},C=c(11),D={count:0},E=function(e,t){switch(t.type){case"ADD":return Object(C.a)(Object(C.a)({},e),{},{count:e.count+1});case"DEL":return Object(C.a)(Object(C.a)({},e),{},{count:e.count-1});case"RESET":return D}return e},A=function(){var e=Object(s.useReducer)(E,D),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[Object(d.jsxs)("h1",{children:["Contagem: ",c.count]}),Object(d.jsx)("button",{onClick:function(){return n({type:"ADD"})},children:"Adicionar"}),Object(d.jsx)("button",{onClick:function(){return n({type:"DEL"})},children:"Remover"}),Object(d.jsx)("button",{onClick:function(){return n({type:"RESET"})},children:"Resetar"})]})},R=c(14),T=c(71),L=[],P=function(e,t){var c,n;switch(t.type){case"ADD":if(null!==(c=t.payload)&&void 0!==c&&c.name){var a,s=Object(R.a)(e);return e.push({id:Object(T.a)(),name:null===(a=t.payload)||void 0===a?void 0:a.name}),s}break;case"DEL":if(null!==(n=t.payload)&&void 0!==n&&n.id){var r=Object(R.a)(e);return r=r.filter((function(e){var c;return e.id!==(null===(c=t.payload)||void 0===c?void 0:c.id)}))}break;case"ORDER":var i=Object(R.a)(e);return e=e.sort((function(e,t){return e.name>t.name?1:-1})),i}return e},I=function(){var e=Object(s.useReducer)(P,L),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),i=r[0],o=r[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)("h1",{children:"Lista de pessoas"})}),Object(d.jsxs)("div",{className:"flex justify-center",children:[Object(d.jsx)("input",{className:"p-4",type:"text",value:i,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){i&&n({type:"ADD",payload:{name:i}})},children:"Adicionar"}),Object(d.jsx)("button",{onClick:function(){n({type:"ORDER"})},children:"Ordenar"})]}),Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)("ul",{className:"flex items-center flex-col",children:c.map((function(e,t){return Object(d.jsxs)("li",{children:[e.name,Object(d.jsx)("button",{onClick:function(){return t=e.id,void n({type:"DEL",payload:{id:t}});var t},children:"DELETAR"})]},t)}))})})]})},J=c(16),U=c(17),z=U.a.div(n||(n=Object(J.a)(["\n    margin: auto;\n\n    align-items: center;\n    justify-content: space-between;    \n    background-color: blue;\n    color: white;\n\n    span {\n        font-size: 25px;\n        transition: .3s;\n        &:hover {\n            color: red;\n            padding: 15px;\n        }\n    }\n\n    @media (max-width: 500px){\n        transition: .3s;\n        background-color: green;\n    }\n\n"]))),B=U.a.button(a||(a=Object(J.a)(["\n    cursor: pointer;\n    font-size: ",";\n"])),(function(e){return e.small?"15px":"30px"})),M=function(){return Object(d.jsxs)(z,{className:"flex flex-col md:flex-col",children:[Object(d.jsx)("span",{className:"font-bold",children:"Utiliza\xe7\xe3o de Styled Components com tailwind"}),Object(d.jsx)(B,{className:"mt-10",children:"Button 1"}),Object(d.jsx)("div",{className:"mt-10 m-3",children:Object(d.jsx)(B,{small:!0,className:"font-bold",children:"Button 2"})})]})},q=function(){return Object(d.jsx)("div",{className:"flex justify-center flex-col items-center",style:{fontFamily:"Source Code Pro"},children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:"https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png",class:"card-img-top",alt:"..."}),Object(d.jsx)("div",{class:"card-body",style:{textAlign:"center"},children:Object(d.jsx)("h1",{children:"PAGE NOT FOUND"})})]})})},H=[{name:"Contador",link:"contador"},{name:"Input",link:"input"},{name:"Lista",link:"lista"},{name:"Lista com Reducer",link:"lista-reducer"},{name:"Uso do Tailwind",link:"extailwind"},{name:"Exibi\xe7\xe3o condicional",link:"exibicao-condicional"},{name:"Utiliza\xe7\xe3o do useEffect",link:"exercicio-use-effect"},{name:"Requisi\xe7\xe3o de exibi\xe7\xe3o de filmes",link:"movie-request"},{name:"Uso do JSONplaceholder",link:"jsonplaceholder"},{name:"Contador com Reducer",link:"contador-reducer"},{name:"Error page",link:"error"}],V=c(7),G=function(){return Object(d.jsx)("header",{className:"flex justify-center",style:{fontFamily:"Source Code Pro"},children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(V.b,{className:"navbar-brand",to:"/",children:"Home"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsxs)("li",{className:"nav-item dropdown",children:[Object(d.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Tasks completed"}),Object(d.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:H.map((function(e,t){return Object(d.jsx)(V.b,{to:"".concat(e.link),children:Object(d.jsx)("li",{className:"dropdown-item",children:"".concat(e.name)},t)})}))})]})})})]})})})},Q=(c(67),function(){return Object(d.jsxs)("div",{className:"flex justify-center items-center flex-col p-5",style:{backgroundColor:"#222222"},children:[Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)("h1",{className:"main-title",children:"Hey, my name is Juan Augusto, I'm glad you're here."})}),Object(d.jsxs)("div",{className:"card",style:{width:"24rem"},children:[Object(d.jsx)("img",{src:"https://reactjs.org/logo-og.png",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body flex flex-col justify-center items-center",children:[Object(d.jsx)("p",{className:"card-text",children:"This is a compilation of exercises using ReactJS, with different methods and solutions."}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{className:"btn btn-primary m-1","data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:"Show exercises"})}),Object(d.jsx)("div",{className:"collapse",id:"collapseExample",children:Object(d.jsx)("div",{className:"card card-body",children:Object(d.jsx)("ul",{children:H.map((function(e,t){return Object(d.jsx)(V.b,{to:"".concat(e.link),children:Object(d.jsx)("li",{className:"dropdown-item",children:"".concat(e.name)},t)})}))})})})]})]})]})}),W=(c(68),function(){return Object(d.jsxs)("footer",{className:"flex justify-center items-center flex-col p-4",style:{backgroundColor:"#4F4F4F",color:"#FFFFFF"},children:[Object(d.jsx)("h2",{className:"main-footer-text",children:"Thank you for being here, I hope that I've helped you with the solutions presented, please, consider connecting with me using the links bellow:"}),Object(d.jsxs)("div",{class:"flex p-4",children:[Object(d.jsx)("a",{href:"https://www.instagram.com/juannaugusto/",target:"blank",children:Object(d.jsx)("i",{className:"icon-instagram"})}),Object(d.jsx)("a",{href:"https://www.facebook.com/juan.augusto.7169",target:"blank",children:Object(d.jsx)("i",{className:"icon-facebook2"})}),Object(d.jsx)("a",{href:"https://www.youtube.com/channel/UCO_mBpadEe467FAJjNQWD1g",target:"blank",children:Object(d.jsx)("i",{className:"icon-youtube"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/juan-soares-881877177/",target:"blank",children:Object(d.jsx)("i",{className:"icon-linkedin"})}),Object(d.jsx)("a",{href:"https://github.com/Juan-Augusto",target:"blank",children:Object(d.jsx)("i",{className:"icon-github"})})]})]})}),_=function(){return Object(d.jsxs)("main",{children:[Object(d.jsx)(G,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(Q,{})}),Object(d.jsx)(l.a,{path:"/contador",element:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{path:"/input",element:Object(d.jsx)(b,{})}),Object(d.jsx)(l.a,{path:"/lista",element:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"/lista-reducer",element:Object(d.jsx)(I,{})}),Object(d.jsx)(l.a,{path:"/extailwind",element:Object(d.jsx)(M,{})}),Object(d.jsx)(l.a,{path:"/exibicao-condicional",element:Object(d.jsx)(x,{})}),Object(d.jsx)(l.a,{path:"/estilizacao-condicional",element:Object(d.jsx)(m,{})}),Object(d.jsx)(l.a,{path:"/exercicio-use-effect",element:Object(d.jsx)(O,{})}),Object(d.jsx)(l.a,{path:"/movie-request",element:Object(d.jsx)(g,{})}),Object(d.jsx)(l.a,{path:"/jsonplaceholder",element:Object(d.jsx)(S,{})}),Object(d.jsx)(l.a,{path:"/contador-reducer",element:Object(d.jsx)(A,{})}),Object(d.jsx)(l.a,{path:"/*",element:Object(d.jsx)(q,{})})]}),Object(d.jsx)(W,{})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(V.a,{children:Object(d.jsx)(_,{})})}),document.getElementById("root")),K()}},[[69,1,2]]]);
//# sourceMappingURL=main.c337ac71.chunk.js.map