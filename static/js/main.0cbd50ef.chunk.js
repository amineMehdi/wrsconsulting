(this.webpackJsonpwrsconsutling=this.webpackJsonpwrsconsutling||[]).push([[0],{30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var i=s(12),c=s(13),r=s(16),n=s(14),a=s(1),l=s.n(a),o=s(21),d=s.n(o),j=s(25),u=s(15),b=(s(30),s.p+"static/media/wrs-80x80.41ac646a.png"),h=s.p+"static/media/google_social.e0c128ec.svg",O=s.p+"static/media/facebook_social.32e7def9.svg",x=s.p+"static/media/linkedin_social.ff4f7386.svg",m=s.p+"static/media/twitter_social.3d3c2ea9.svg",v=s(2),p=s(0);var f=function(e){var t=Object(a.useState)(!1),s=Object(u.a)(t,2),i=s[0],c=s[1];return Object(a.useEffect)((function(){var e=document.querySelector(".navbar-container");e.style.borderBottomColor=i?"#67b7e1":"transparent"}),[i]),Object(a.useEffect)((function(){var e=function(e,s){window.innerWidth>=900&&t(e),c(s)},t=function(e){e.parentElement.classList.length||e.classList.toggle("item-selected")},s=document.querySelector(".navbar-container");s.addEventListener("mouseenter",(function(){c(!0)})),s.addEventListener("mouseleave",(function(){c(!1)}));var i=s.querySelectorAll(".items-list> li>a"),r=document.querySelector(".item-dropdown-content");[].concat(Object(j.a)(i),[r]).forEach((function(t){t.addEventListener("mouseenter",(function(){e(t,!1)})),t.addEventListener("mouseleave",(function(){e(t,!0)}))}));var n=document.querySelector(".items-menu");n.addEventListener("click",(function(){n.classList.toggle("menu-active"),document.querySelector(".items-list").classList.toggle("items-slide-active")})),document.querySelector(".item-dropdown-arrow").addEventListener("click",(function(){document.querySelector(".item-dropdown-back-arrow").style="visibility: visible; display: block",r.style="visibility: visible; display:block"}));var a=document.querySelector(".item-dropdown-back-arrow");a.addEventListener("click",(function(){document.querySelector(".items-list").style.visibility="visible",a.style.display="none",r.style.display="none"})),window.addEventListener("scroll",(function(){window.scrollY>90?Object(v.a)({targets:".navbar-container",translateY:window.innerWidth<1010?"-95px":"-50px",duration:100,easing:"linear"}):window.scrollY<60&&(Object(v.a)({targets:".navbar-container",translateY:"0px",duration:100,easing:"linear"}),document.querySelector(".navbar-contact-container").style.display="flex")}))}),[]),Object(p.jsxs)("div",{className:"navbar-container",children:[Object(p.jsxs)("div",{className:"navbar-contact-container",children:[Object(p.jsx)("div",{className:"navbar-contact",children:Object(p.jsxs)("p",{children:["Contactez nous +336 34 27 40 69 |"," ",Object(p.jsx)("a",{href:"mailto:contact@wrsconsulting.fr",children:"contact@wrsconsulting.fr"})]})}),Object(p.jsxs)("div",{className:"navbar-social",children:[Object(p.jsx)("a",{href:"#",title:"facebook",children:Object(p.jsx)("img",{src:O,alt:"facebook"})}),Object(p.jsx)("a",{href:"#",title:"google",children:Object(p.jsx)("img",{src:h,alt:"google"})}),Object(p.jsx)("a",{href:"#",title:"twitter",children:Object(p.jsx)("img",{src:m,alt:"twitter"})}),Object(p.jsx)("a",{href:"#",title:"linkedin",children:Object(p.jsx)("img",{src:x,alt:"linkedin"})})]})]}),Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)("div",{className:"logo-container",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:b,alt:"logo"})})}),Object(p.jsxs)("ul",{className:"items-list",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/",children:"ACCEUIL "})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/a-propos",children:"A PROPOS"})}),Object(p.jsxs)("li",{className:"item-dropdown",children:[Object(p.jsx)("a",{href:"#",children:"EXPERTISE WRS"}),Object(p.jsxs)("ul",{className:"item-dropdown-content",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/infrastructure-reseaux",children:"INFRASTRUCTURES & R\xc9SEAUX"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"D\xc9VELOPPEMENT LOGICIEL"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"GESTION DE PROJET"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"CONSULTING EN STRAT\xc9GIE IT"})})]}),Object(p.jsx)("span",{className:"item-dropdown-arrow",children:"\u276f"}),Object(p.jsx)("span",{className:"item-dropdown-back-arrow",children:"\u2770"})]}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"REALISATIONS"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"NOS PARTENAIRES"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"CONTACT"})})]}),Object(p.jsxs)("div",{className:"items-menu",children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})]})]})},g=(s(32),s(22));s(33);var y=function(e){var t=function(e,t){return Object(v.a)({targets:"."+e,top:["60%",t.toString()],duration:2e3,easing:"easeOutQuad"})},s=function(){return Object(v.a)({targets:".learn-more",opacity:["0%","100%"],delay:500,duration:2e3,easing:"easeOutExpo"})},i=function(){return Object(v.a)({targets:".slide-img",filter:"blur(3px)",duration:2200,easing:"easeOutExpo"})};Object(a.useEffect)((function(){window.innerWidth<=1e3&&(document.querySelector(".slide-controllers").style.display="none"),t("slide-section",25).play(),t("slide-details",50).play(),s().play(),i().play()}),[]);var c=Object(a.useState)(1),r=Object(u.a)(c,2),n=r[0],l=r[1];Object(a.useEffect)((function(){t("slide-section",25).play(),t("slide-details",52).play(),s().play(),i().play();var c,r=document.querySelectorAll(".slide"),a=Object(g.a)(r);try{for(a.s();!(c=a.n()).done;){c.value.style.display="none"}}catch(d){a.e(d)}finally{a.f()}n>e.children.length?l(1):n<1?l(e.children.length):(r[n-1].style.display="block",o())}),[n]);var o=function(){document.querySelectorAll("span[class^='dot-']").forEach((function(e,t){n-1!==t?e.classList.remove("active-dot"):e.classList.add("active-dot")}))};return Object(p.jsxs)("div",{className:"slideshow-container",children:[e.children,Object(p.jsxs)("div",{className:"slide-controllers",children:[Object(p.jsx)("span",{className:"prev",onClick:function(){return l(n-1)}}),Object(p.jsx)("span",{className:"next",onClick:function(){return l(n+1)}})]}),Object(p.jsx)("div",{className:"dots-container",children:function(){for(var t=[],s=function(e){var s="dot-"+e;t.push(Object(p.jsx)("span",{className:s,onClick:function(){l(e+1),o()}},e.toString()))},i=0;i<e.children.length;i++)s(i);return t}()})]})};var N=function(e){return Object(p.jsxs)("div",{className:"slide",children:[Object(p.jsx)("div",{className:"slide-img",style:{backgroundImage:"url(".concat(e.src,")")}}),Object(p.jsx)("div",{className:"slide-section",children:e.section}),Object(p.jsx)("p",{className:"slide-details",children:e.details}),Object(p.jsx)("div",{className:"learn-more",children:Object(p.jsx)("button",{onClick:function(){return window.location.href="/".concat(e.link)},children:"En savoir plus"})})]})},w=1500;var S=function(e){return Object(p.jsxs)("div",{className:"tile",children:[Object(p.jsx)("div",{className:"tile-logo",children:Object(p.jsx)("img",{src:e.logo,alt:"p"})}),Object(p.jsx)("div",{className:"tile-header",children:e.header}),Object(p.jsx)("div",{className:"tile-details",children:Object(p.jsx)("p",{children:e.details})}),Object(p.jsx)("div",{className:"tile-arrow arrow-down",onClick:function(e){return function(e){var t=e.parentNode;e.classList.contains("arrow-down")?(Object(v.a)({targets:t,height:"45vh",duration:w}),t.querySelector(".tile-details").style="display: block",t.querySelector(".tile-learn-more").style="display: block",Object(v.a)({targets:t.querySelector(".tile-learn-more"),opacity:["0","1"],delay:500,duration:w}),e.classList.add("arrow-up"),e.classList.remove("arrow-down")):(t.querySelector(".tile-details").style="display: none",t.querySelector(".tile-learn-more").style="display: none",Object(v.a)({targets:t,height:"32vh",duration:w}),e.classList.add("arrow-down"),e.classList.remove("arrow-up"))}(e.target)}}),Object(p.jsx)("div",{className:"tile-learn-more",children:Object(p.jsx)("button",{onClick:function(){return window.location.href="/".concat(e.link)},children:"En savoir plus"})})]})},q=(s(34),1e3);var k=function(e){return Object(a.useEffect)((function(){var e=document.querySelectorAll(".tile");window.innerWidth>1010&&(console.log(),e.forEach((function(t){t.addEventListener("mouseenter",(function(){Object(v.a)({targets:t,width:"100%",duration:q}),Object(v.a)({targets:t.querySelector(".tile-logo"),width:"55px",height:"55px",top:"12%",borderRadius:"10px",duration:q}),Object(v.a)({targets:t.querySelector(".tile-header"),fontSize:"50px",duration:500,easing:"linear"}),t.querySelector(".tile-details").style.display="block",t.querySelector(".tile-learn-more").style.display="block",e.forEach((function(e){e.isSameNode(t)||(Object(v.a)({targets:e,opacity:["1","0"],duration:q}),e.querySelector(".tile-header").style.display="none")}))})),t.addEventListener("mouseleave",(function(){Object(v.a)({targets:t.querySelector(".tile-logo"),top:"-15%",duration:q,borderRadius:"50%",easing:"linear"}),Object(v.a)({targets:t,width:"25vw",duration:q,easing:"linear"}),Object(v.a)({targets:t.querySelector(".tile-header"),fontSize:"28px",duration:500,easing:"linear"}),t.querySelector(".tile-details").style.display="none",t.querySelector(".tile-learn-more").style.display="none",e.forEach((function(e){e.isSameNode(t)||(Object(v.a)({targets:e,opacity:["0.25","1"],width:"25vw",duration:q}),e.querySelector(".tile-header").style="display:block; opacity: 0",Object(v.a)({targets:e.querySelector(".tile-header"),opacity:["0","1"],duration:3e3,delay:500}))}))}))})))}),[]),Object(p.jsxs)("div",{className:"tiles-section",children:[Object(p.jsx)("div",{className:"tiles-section-header",children:Object(p.jsx)("header",{children:"Nos Expertises"})}),Object(p.jsx)("div",{className:"tiles-container",children:e.children})]})};s(35);var E=function(){return Object(p.jsxs)("div",{className:"contact-container",children:[Object(p.jsx)("div",{className:"contact-img"}),Object(p.jsx)("div",{className:"contact-header",children:Object(p.jsx)("header",{children:"Avez-vous une Question ? Contactez-nous"})}),Object(p.jsx)("div",{className:"contact-btn",children:Object(p.jsx)("button",{onClick:function(){return window.location.href="/contact"},children:"Contact"})})]})},C=s.p+"static/media/img-1.7490343c.jpg",L=s.p+"static/media/img-2.0d6db3b7.jpg",A=s.p+"static/media/img-3.055330cf.jpg",z=s.p+"static/media/img-4.c292d4ba.jpg",R=s.p+"static/media/developpement_logiciel_icon.ba80f6c0.svg",I=s.p+"static/media/edition_logiciel_icon.b21df7f2.svg",T=s.p+"static/media/reseaux_infrastructure_icon.c1f9d5e5.svg",_=s.p+"static/media/strategie_it_icon.d48b5807.svg";s(36);var G=function(){return Object(p.jsx)("div",{className:"footer-container",children:Object(p.jsxs)("footer",{children:[Object(p.jsx)("div",{className:"footer-logo",children:Object(p.jsx)("img",{src:b,alt:"logo"})}),Object(p.jsxs)("div",{className:"footer-services",children:[Object(p.jsx)("h2",{children:"Services"}),Object(p.jsxs)("ul",{className:"footer-services-list",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/infrastructure-reseaux",children:"Infrastructures & R\xe9seaux"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/developpement-logiciel",children:"D\xe9veloppement logiciel"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/gestion-de-projet",children:"Gestion de projet"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/consulting-en-strategie-it",children:"Consulting en strat\xe9gie IT"})})]})]}),Object(p.jsxs)("div",{className:"footer-entreprise",children:[Object(p.jsx)("h2",{children:"Entreprise"}),Object(p.jsxs)("ul",{className:"footer-entreprise-list",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/realisations",children:"Realisations"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/partenaires",children:"Nos Partenaires"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/a-propos",children:"A propos"})})]})]}),Object(p.jsxs)("div",{className:"footer-contact",children:[Object(p.jsx)("h2",{children:"Contact"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{}),Object(p.jsx)("div",{children:"4 bis rue cadet de vaux 95130 Franconville"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{}),Object(p.jsx)("div",{children:"+336 34 27 40 69"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{}),Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"mailto:contact@wrsconsulting.fr",children:"contact@wrsconsulting.fr"})})]})]})]}),Object(p.jsxs)("div",{className:"footer-social",children:[Object(p.jsx)("div",{className:"footer-copyright",children:Object(p.jsx)("p",{children:"\xa9 WRSConsulting 2021. All rights reserved."})}),Object(p.jsxs)("div",{className:"footer-social-icons",children:[Object(p.jsx)("a",{href:"/",title:"Facebook",children:Object(p.jsx)("img",{src:O,alt:"facebook"})}),Object(p.jsx)("a",{href:"/",title:"Google",children:Object(p.jsx)("img",{src:h,alt:"google"})}),Object(p.jsx)("a",{href:"/",title:"Twitter",children:Object(p.jsx)("img",{src:m,alt:"twitter"})}),Object(p.jsx)("a",{href:"/",title:"Linkedin",children:Object(p.jsx)("img",{src:x,alt:"linkedin"})})]})]})]})})},P=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"home-container",children:[Object(p.jsxs)(y,{children:[Object(p.jsx)(N,{src:C,section:"Reseaux & Infrastructure",details:"Ma\xeetrisez l\u2019\xe9volution de votre Datacenter, vos Clouds et vos applications Saas.",link:"infrastructure-reseaux"}),Object(p.jsx)(N,{src:L,section:"D\xe9veloppement logiciel",details:"Ma\xeetrisez vos d\xe9veloppements et garantissez la meilleure exp\xe9rience utilisateur \xe0 vos clients.",link:"developpement-logiciel"}),Object(p.jsx)(N,{src:A,section:"Gestion de projet",details:"Bordez vos budgets, pr\xe9venez vos risques, en garantissant vos co\xfbts, vos d\xe9lais, et votre qualit\xe9 logicielle.",link:"gestion-de-projet"}),Object(p.jsx)(N,{src:z,section:"Consulting en strat\xe9gie IT",details:"Ayez toujours un coup d\u2019avance en garantissant l\u2019efficacit\xe9 de votre veille strat\xe9gique.",link:"consulting-en-strategie-it"})]}),Object(p.jsxs)(k,{children:[Object(p.jsx)(S,{logo:T,header:"Reseaux & Infrastructure",details:"Ma\xeetrisez l\u2019\xe9volution de votre Datacenter, vos Clouds et vos applications Saas.",link:"infrastructure-reseaux"}),Object(p.jsx)(S,{logo:R,header:"D\xe9veloppement logiciel",details:"Ma\xeetrisez vos d\xe9veloppements et garantissez la meilleure exp\xe9rience utilisateur \xe0 vos clients.",link:"developpement-logiciel"}),Object(p.jsx)(S,{logo:I,header:"Gestion de projet",details:"Bordez vos budgets, pr\xe9venez vos risques, en garantissant vos co\xfbts, vos d\xe9lais, et votre qualit\xe9 logicielle.",link:"gestion-de-projet"}),Object(p.jsx)(S,{logo:_,header:"Consulting en strat\xe9gie IT",details:"Ayez toujours un coup d\u2019avance en garantissant l\u2019efficacit\xe9 de votre veille strat\xe9gique.",link:"consulting-en-strategie-it"})]}),Object(p.jsx)(E,{}),Object(p.jsx)(G,{})]})}}]),s}(l.a.Component);s(37);var W=function(){return Object(p.jsxs)("div",{className:"about-container",children:[Object(p.jsx)("div",{className:"about-header",children:Object(p.jsx)("header",{children:"Qui Sommes Nous ?"})}),Object(p.jsxs)("div",{className:"about-details",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"WRSConsulting"})," est une soci\xe9t\xe9 qui a \xe9t\xe9 cr\xe9e en 2010 pour r\xe9pondre aux besoins en service informatique de clients de divers secteurs d\u2019activit\xe9 (ex : banques/assurances, Groupes pharmaceutiques)."]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"WRSConsulting"})," est bas\xe9e \xe0 Paris et collabore avec des clients aussi bien nationaux qu\u2019internationaux, sur des probl\xe9matiques d\u2019ing\xe9nierie de syst\xe8mes complexes et hautement strat\xe9giques. Depuis 2010, nous n\u2019avons de cesse de collaborer \xe0 la refonte et \xe0 l\u2019optimisation des processus m\xe9tier de nos clients."]})]}),Object(p.jsx)(G,{})]})},D=s(23),M=s(3),U=(s(38),s(39),s.p+"static/media/infrastructure-1.ea12d180.jpg");var B=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"infrastructure-container",children:[Object(p.jsxs)("div",{className:"infrastructure-header",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("strong",{children:"WRS Consulting : "}),Object(p.jsx)("span",{children:"Infrastructure & reseaux"})]}),Object(p.jsx)("p",{children:"D\xe9veloppez le c\u0153ur de r\xe9seau de votre entreprise"})]}),Object(p.jsxs)("div",{className:"infrastructure-intro",children:[Object(p.jsx)("div",{className:"infrastructure-intro-img",style:{backgroundImage:"url(".concat(U,")")}}),Object(p.jsxs)("p",{children:["L\u2019infrastructure est le pilier de votre r\xe9seau informatique et la base de votre syst\xe8me d\u2019informations. C\u2019est aussi le c\u0153ur de notre m\xe9tier.",Object(p.jsx)("br",{}),"Nous vous accompagnons dans la conception et le dimensionnement de votre environnement de travail en tenant compte de vos contraintes fonctionnelles et budg\xe9taires. ",Object(p.jsx)("br",{}),"Nous veillons \xe9galement \xe0 ce que nos solutions soient coh\xe9rentes avec votre strat\xe9gie de d\xe9veloppement."]})]}),Object(p.jsxs)("div",{className:"infrastructure-tiles-container",children:[Object(p.jsx)("div",{className:"infrastructure-tiles-header",children:Object(p.jsx)("header",{children:"On vous propose"})}),Object(p.jsxs)("div",{className:"infrastructure-tiles-section",children:[Object(p.jsxs)("div",{className:"infrastructure-tile",children:[Object(p.jsx)("header",{children:" Gestion, des comptes et des machines du r\xe9seau"}),Object(p.jsx)("p",{children:"Assure la gestion des comptes et des machines du r\xe9seau informatique des entreprises."})]}),Object(p.jsxs)("div",{className:"infrastructure-tile",children:[Object(p.jsx)("header",{children:" Administrateur syst\xe8me"}),Object(p.jsx)("p",{children:"Assiste \xe0 distance les utilisateurs dans leur environnement informatique et num\xe9rique."})]}),Object(p.jsxs)("div",{className:"infrastructure-tile",children:[Object(p.jsx)("header",{children:" Serveurs de l'entreprise"}),Object(p.jsx)("p",{children:"G\xe8re aussi les postes de travail et les serveurs de l\u2019entreprise."})]}),Object(p.jsxs)("div",{className:"infrastructure-tile",children:[Object(p.jsx)("header",{children:"Conception des r\xe9seaux"}),Object(p.jsx)("p",{children:"Assure la conception des r\xe9seaux de t\xe9l\xe9communications (WAN, LAN, MAN, SAN)"})]}),Object(p.jsxs)("div",{className:"infrastructure-tile",children:[Object(p.jsx)("header",{children:" Architecture du r\xe9seau"}),Object(p.jsx)("p",{children:"L\u2019analyse technique n\xe9cessaire \xe0 la conception du diagramme de l\u2019architecture du r\xe9seau en liaison avec les solutions informatiques"})]})]}),Object(p.jsxs)("div",{className:"infrastructure-list-container",children:[Object(p.jsx)("div",{className:"infrastructure-list-header",children:Object(p.jsx)("header",{children:"Nous assurons"})}),Object(p.jsx)("div",{className:"infrastructure-list-section",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Prot\xe9gez et restaurez facilement vos donn\xe9es."}),Object(p.jsx)("li",{children:"ed\xe9marrez rapidement votre infrastructure en cas de crise majeure."}),Object(p.jsx)("li",{children:"Etendez votre r\xe9seau \xe0 vos sites distants de mani\xe8re s\xe9curis\xe9e."}),Object(p.jsx)("li",{children:"Prot\xe9gez et restaurez facilement vos donn\xe9es."}),Object(p.jsx)("li",{children:"Red\xe9marrez rapidement votre infrastructure en cas de crise majeure."}),Object(p.jsx)("li",{children:"\xc9tendez votre r\xe9seau \xe0 vos sites distants de mani\xe8re s\xe9curis\xe9e."})]})})]})]})]}),Object(p.jsx)(G,{})]})},Y=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(D.a,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)(M.c,{children:[Object(p.jsx)(M.a,{path:"/",exact:!0,component:P}),Object(p.jsx)(M.a,{path:"/a-propos",component:W}),Object(p.jsx)(M.a,{path:"/infrastructure-reseaux",component:B})]})]})}}]),s}(l.a.Component);d.a.render(Object(p.jsx)(Y,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0cbd50ef.chunk.js.map