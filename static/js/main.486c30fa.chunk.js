(this.webpackJsonpwrsconsutling=this.webpackJsonpwrsconsutling||[]).push([[0],{30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var i=s(12),c=s(13),n=s(16),r=s(14),a=s(1),l=s.n(a),o=s(21),d=s.n(o),j=s(25),u=s(15),b=(s(30),s.p+"static/media/wrs-80x80.41ac646a.png"),h=s.p+"static/media/google_social.e0c128ec.svg",O=s.p+"static/media/facebook_social.32e7def9.svg",x=s.p+"static/media/linkedin_social.ff4f7386.svg",p=s.p+"static/media/twitter_social.3d3c2ea9.svg",v=s(2),m=s(0);var f=function(e){var t=Object(a.useState)(!1),s=Object(u.a)(t,2),i=s[0],c=s[1];return Object(a.useEffect)((function(){var e=document.querySelector(".navbar-container");e.style.borderBottomColor=i?"#67b7e1":"transparent"}),[i]),Object(a.useEffect)((function(){var e=function(e,s){window.innerWidth>=900&&t(e),c(s)},t=function(e){e.parentElement.classList.length||e.classList.toggle("item-selected")},s=document.querySelector(".navbar-container");s.addEventListener("mouseenter",(function(){c(!0)})),s.addEventListener("mouseleave",(function(){c(!1)}));var i=s.querySelectorAll(".items-list> li>a"),n=document.querySelector(".item-dropdown-content");[].concat(Object(j.a)(i),[n]).forEach((function(t){t.addEventListener("mouseenter",(function(){e(t,!1)})),t.addEventListener("mouseleave",(function(){e(t,!0)}))}));var r=document.querySelector(".items-menu");r.addEventListener("click",(function(){r.classList.toggle("menu-active"),document.querySelector(".items-list").classList.toggle("items-slide-active")})),document.querySelector(".item-dropdown-arrow").addEventListener("click",(function(){document.querySelector(".item-dropdown-back-arrow").style="visibility: visible; display: block",n.style="visibility: visible; display:block"}));var a=document.querySelector(".item-dropdown-back-arrow");a.addEventListener("click",(function(){document.querySelector(".items-list").style.visibility="visible",a.style.display="none",n.style.display="none"})),window.addEventListener("scroll",(function(){window.scrollY>90?Object(v.a)({targets:".navbar-container",translateY:window.innerWidth<1010?"-95px":"-50px",duration:100,easing:"linear"}):window.scrollY<60&&(Object(v.a)({targets:".navbar-container",translateY:"0px",duration:100,easing:"linear"}),document.querySelector(".navbar-contact-container").style.display="flex")}))}),[]),Object(m.jsxs)("div",{className:"navbar-container",children:[Object(m.jsxs)("div",{className:"navbar-contact-container",children:[Object(m.jsx)("div",{className:"navbar-contact",children:Object(m.jsxs)("p",{children:["Contactez nous +336 34 27 40 69 |"," ",Object(m.jsx)("a",{href:"mailto:contact@wrsconsulting.fr",children:"contact@wrsconsulting.fr"})]})}),Object(m.jsxs)("div",{className:"navbar-social",children:[Object(m.jsx)("a",{href:"#",title:"facebook",children:Object(m.jsx)("img",{src:O,alt:"facebook"})}),Object(m.jsx)("a",{href:"#",title:"google",children:Object(m.jsx)("img",{src:h,alt:"google"})}),Object(m.jsx)("a",{href:"#",title:"twitter",children:Object(m.jsx)("img",{src:p,alt:"twitter"})}),Object(m.jsx)("a",{href:"#",title:"linkedin",children:Object(m.jsx)("img",{src:x,alt:"linkedin"})})]})]}),Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("div",{className:"logo-container",children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)("img",{src:b,alt:"logo"})})}),Object(m.jsxs)("ul",{className:"items-list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:"ACCEUIL "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/a-propos",children:"A PROPOS"})}),Object(m.jsxs)("li",{className:"item-dropdown",children:[Object(m.jsx)("a",{href:"#",children:"EXPERTISE WRS"}),Object(m.jsxs)("ul",{className:"item-dropdown-content",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"INFRASTRUCTURES & R\xc9SEAUX"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"D\xc9VELOPPEMENT LOGICIEL"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"GESTION DE PROJET"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"CONSULTING EN STRAT\xc9GIE IT"})})]}),Object(m.jsx)("span",{className:"item-dropdown-arrow",children:"\u276f"}),Object(m.jsx)("span",{className:"item-dropdown-back-arrow",children:"\u2770"})]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"REALISATIONS"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"NOS PARTENAIRES"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"CONTACT"})})]}),Object(m.jsxs)("div",{className:"items-menu",children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})]})]})},g=(s(32),s(22));s(33);var y=function(e){var t=function(e,t){return Object(v.a)({targets:"."+e,top:["60%",t.toString()],duration:2e3,easing:"easeOutQuad"})},s=function(){return Object(v.a)({targets:".learn-more",opacity:["0%","100%"],delay:500,duration:2e3,easing:"easeOutExpo"})},i=function(){return Object(v.a)({targets:".slide-img",filter:"blur(3px)",duration:2200,easing:"easeOutExpo"})};Object(a.useEffect)((function(){window.innerWidth<=1e3&&(document.querySelector(".slide-controllers").style.display="none"),t("slide-section",25).play(),t("slide-details",50).play(),s().play(),i().play()}),[]);var c=Object(a.useState)(1),n=Object(u.a)(c,2),r=n[0],l=n[1];Object(a.useEffect)((function(){t("slide-section",25).play(),t("slide-details",52).play(),s().play(),i().play();var c,n=document.querySelectorAll(".slide"),a=Object(g.a)(n);try{for(a.s();!(c=a.n()).done;){c.value.style.display="none"}}catch(d){a.e(d)}finally{a.f()}r>e.children.length?l(1):r<1?l(e.children.length):(n[r-1].style.display="block",o())}),[r]);var o=function(){document.querySelectorAll("span[class^='dot-']").forEach((function(e,t){r-1!==t?e.classList.remove("active-dot"):e.classList.add("active-dot")}))};return Object(m.jsxs)("div",{className:"slideshow-container",children:[e.children,Object(m.jsxs)("div",{className:"slide-controllers",children:[Object(m.jsx)("span",{className:"prev",onClick:function(){return l(r-1)}}),Object(m.jsx)("span",{className:"next",onClick:function(){return l(r+1)}})]}),Object(m.jsx)("div",{className:"dots-container",children:function(){for(var t=[],s=function(e){var s="dot-"+e;t.push(Object(m.jsx)("span",{className:s,onClick:function(){l(e+1),o()}},e.toString()))},i=0;i<e.children.length;i++)s(i);return t}()})]})};var N=function(e){return Object(m.jsxs)("div",{className:"slide",children:[Object(m.jsx)("div",{className:"slide-img",style:{backgroundImage:"url(".concat(e.src,")")}}),Object(m.jsx)("div",{className:"slide-section",children:e.section}),Object(m.jsx)("p",{className:"slide-details",children:e.details}),Object(m.jsx)("div",{className:"learn-more",children:Object(m.jsx)("button",{onClick:function(){return window.location.href="/".concat(e.link)},children:"En savoir plus"})})]})},w=1500;var S=function(e){return Object(m.jsxs)("div",{className:"tile",children:[Object(m.jsx)("div",{className:"tile-logo",children:Object(m.jsx)("img",{src:e.logo,alt:"p"})}),Object(m.jsx)("div",{className:"tile-header",children:e.header}),Object(m.jsx)("div",{className:"tile-details",children:Object(m.jsx)("p",{children:e.details})}),Object(m.jsx)("div",{className:"tile-arrow arrow-down",onClick:function(e){return function(e){var t=e.parentNode;e.classList.contains("arrow-down")?(Object(v.a)({targets:t,height:"45vh",duration:w}),t.querySelector(".tile-details").style="display: block",t.querySelector(".tile-learn-more").style="display: block",Object(v.a)({targets:t.querySelector(".tile-learn-more"),opacity:["0","1"],delay:500,duration:w}),e.classList.add("arrow-up"),e.classList.remove("arrow-down")):(t.querySelector(".tile-details").style="display: none",t.querySelector(".tile-learn-more").style="display: none",Object(v.a)({targets:t,height:"32vh",duration:w}),e.classList.add("arrow-down"),e.classList.remove("arrow-up"))}(e.target)}}),Object(m.jsx)("div",{className:"tile-learn-more",children:Object(m.jsx)("button",{onClick:function(){return window.location.href="/".concat(e.link)},children:"En savoir plus"})})]})},k=(s(34),1e3);var E=function(e){return Object(a.useEffect)((function(){var e=document.querySelectorAll(".tile");window.innerWidth>1010&&(console.log(),e.forEach((function(t){t.addEventListener("mouseenter",(function(){Object(v.a)({targets:t,width:"100%",duration:k}),Object(v.a)({targets:t.querySelector(".tile-logo"),width:"55px",height:"55px",top:"12%",borderRadius:"10px",duration:k}),Object(v.a)({targets:t.querySelector(".tile-header"),fontSize:"50px",duration:500,easing:"linear"}),t.querySelector(".tile-details").style.display="block",t.querySelector(".tile-learn-more").style.display="block",e.forEach((function(e){e.isSameNode(t)||(Object(v.a)({targets:e,opacity:["1","0"],duration:k}),e.querySelector(".tile-header").style.display="none")}))})),t.addEventListener("mouseleave",(function(){Object(v.a)({targets:t.querySelector(".tile-logo"),top:"-15%",duration:k,borderRadius:"50%",easing:"linear"}),Object(v.a)({targets:t,width:"25vw",duration:k,easing:"linear"}),Object(v.a)({targets:t.querySelector(".tile-header"),fontSize:"28px",duration:500,easing:"linear"}),t.querySelector(".tile-details").style.display="none",t.querySelector(".tile-learn-more").style.display="none",e.forEach((function(e){e.isSameNode(t)||(Object(v.a)({targets:e,opacity:["0.25","1"],width:"25vw",duration:k}),e.querySelector(".tile-header").style="display:block; opacity: 0",Object(v.a)({targets:e.querySelector(".tile-header"),opacity:["0","1"],duration:3e3,delay:500}))}))}))})))}),[]),Object(m.jsxs)("div",{className:"tiles-section",children:[Object(m.jsx)("div",{className:"tiles-section-header",children:Object(m.jsx)("p",{children:"Nos Expertises"})}),Object(m.jsx)("div",{className:"tiles-container",children:e.children})]})};s(35);var q=function(){return Object(m.jsxs)("div",{className:"contact-container",children:[Object(m.jsx)("div",{className:"contact-img"}),Object(m.jsx)("div",{className:"contact-header",children:Object(m.jsx)("header",{children:"Avez-vous une Question ? Contactez-nous"})}),Object(m.jsx)("div",{className:"contact-btn",children:Object(m.jsx)("button",{onClick:function(){return window.location.href="/contact"},children:"Contact"})})]})},C=s.p+"static/media/img-1.7490343c.jpg",L=s.p+"static/media/img-2.0d6db3b7.jpg",R=s.p+"static/media/img-3.055330cf.jpg",I=s.p+"static/media/img-4.c292d4ba.jpg",A=s.p+"static/media/developpement_logiciel_icon.ba80f6c0.svg",T=s.p+"static/media/edition_logiciel_icon.b21df7f2.svg",z=s.p+"static/media/reseaux_infrastructure_icon.c1f9d5e5.svg",_=s.p+"static/media/strategie_it_icon.d48b5807.svg";s(36);var G=function(){return Object(m.jsx)("div",{className:"footer-container",children:Object(m.jsxs)("footer",{children:[Object(m.jsx)("div",{className:"footer-logo",children:Object(m.jsx)("img",{src:b})}),Object(m.jsxs)("div",{className:"footer-services",children:[Object(m.jsx)("h2",{children:"Services"}),Object(m.jsxs)("ul",{className:"footer-services-list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/infrastructure-reseaux",children:"Infrastructures & R\xe9seaux"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/developpement-logiciel",children:"D\xe9veloppement logiciel"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/gestion-de-projet",children:"Gestion de projet"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/consulting-en-strategie-it",children:"Consulting en strat\xe9gie IT"})})]})]}),Object(m.jsxs)("div",{className:"footer-entreprise",children:[Object(m.jsx)("h2",{children:"Entreprise"}),Object(m.jsxs)("ul",{className:"footer-entreprise-list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/realisations",children:"Realisations"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/partenaires",children:"Nos Partenaires"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/a-propos",children:"A propos"})})]})]}),Object(m.jsxs)("div",{className:"footer-contact",children:[Object(m.jsx)("h2",{children:"Contact"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("div",{children:"4 bis rue cadet de vaux 95130 Franconville"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("div",{children:"+336 34 27 40 69"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"mailto:contact@wrsconsulting.fr",children:"contact@wrsconsulting.fr"})})]})]})]}),Object(m.jsxs)("div",{className:"footer-social",children:[Object(m.jsx)("div",{className:"footer-copyright",children:Object(m.jsx)("p",{children:"\xa9 WRSConsulting 2021. All rights reserved."})}),Object(m.jsxs)("div",{className:"footer-social-icons",children:[Object(m.jsx)("a",{href:"#",title:"Facebook",children:Object(m.jsx)("img",{src:O,alt:"facebook"})}),Object(m.jsx)("a",{href:"#",title:"Google",children:Object(m.jsx)("img",{src:h,alt:"google"})}),Object(m.jsx)("a",{href:"#",title:"Twitter",children:Object(m.jsx)("img",{src:p,alt:"twitter"})}),Object(m.jsx)("a",{href:"#",title:"Linkedin",children:Object(m.jsx)("img",{src:x,alt:"linkedin"})})]})]})]})})},P=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"home-container",children:[Object(m.jsxs)(y,{children:[Object(m.jsx)(N,{src:C,section:"Reseaux & Infrastructure",details:"Ma\xeetrisez l\u2019\xe9volution de votre Datacenter, vos Clouds et vos applications Saas.",link:"infrastructure-reseaux"}),Object(m.jsx)(N,{src:L,section:"D\xe9veloppement logiciel",details:"Ma\xeetrisez vos d\xe9veloppements et garantissez la meilleure exp\xe9rience utilisateur \xe0 vos clients.",link:"developpement-logiciel"}),Object(m.jsx)(N,{src:R,section:"Gestion de projet",details:"Bordez vos budgets, pr\xe9venez vos risques, en garantissant vos co\xfbts, vos d\xe9lais, et votre qualit\xe9 logicielle.",link:"gestion-de-projet"}),Object(m.jsx)(N,{src:I,section:"Consulting en strat\xe9gie IT",details:"Ayez toujours un coup d\u2019avance en garantissant l\u2019efficacit\xe9 de votre veille strat\xe9gique.",link:"consulting-en-strategie-it"})]}),Object(m.jsxs)(E,{children:[Object(m.jsx)(S,{logo:z,header:"Reseaux & Infrastructure",details:"Ma\xeetrisez l\u2019\xe9volution de votre Datacenter, vos Clouds et vos applications Saas.",link:"infrastructure-reseaux"}),Object(m.jsx)(S,{logo:A,header:"D\xe9veloppement logiciel",details:"Ma\xeetrisez vos d\xe9veloppements et garantissez la meilleure exp\xe9rience utilisateur \xe0 vos clients.",link:"developpement-logiciel"}),Object(m.jsx)(S,{logo:T,header:"Gestion de projet",details:"Bordez vos budgets, pr\xe9venez vos risques, en garantissant vos co\xfbts, vos d\xe9lais, et votre qualit\xe9 logicielle.",link:"gestion-de-projet"}),Object(m.jsx)(S,{logo:_,header:"Consulting en strat\xe9gie IT",details:"Ayez toujours un coup d\u2019avance en garantissant l\u2019efficacit\xe9 de votre veille strat\xe9gique.",link:"consulting-en-strategie-it"})]}),Object(m.jsx)(q,{}),Object(m.jsx)(G,{})]})}}]),s}(l.a.Component);s(37);var D=function(){return Object(m.jsxs)("div",{className:"about-container",children:[Object(m.jsxs)("div",{className:"about-section",children:[Object(m.jsx)("h2",{children:"Qui Sommes Nous ?"}),Object(m.jsx)("p",{children:"WRSConsulting est une soci\xe9t\xe9 qui a \xe9t\xe9 cr\xe9e en 2010 pour r\xe9pondre aux besoins en service informatique de clients de divers secteurs d\u2019activit\xe9 (ex : banques/assurances, Groupes pharmaceutiques)."}),Object(m.jsx)("p",{children:"WRSConsulting est bas\xe9e \xe0 Paris et collabore avec des clients aussi bien nationaux qu\u2019internationaux, sur des probl\xe9matiques d\u2019ing\xe9nierie de syst\xe8mes complexes et hautement strat\xe9giques. Depuis 2010, nous n\u2019avons de cesse de collaborer \xe0 la refonte et \xe0 l\u2019optimisation des processus m\xe9tier de nos clients."})]}),Object(m.jsx)("div",{className:"about-expertise"})]})},W=s(23),M=s(3),U=(s(38),function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(m.jsx)(W.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsxs)(M.c,{children:[Object(m.jsx)(M.a,{path:"/",exact:!0,component:P}),Object(m.jsx)(M.a,{path:"/a-propos",component:D})]})]})})}}]),s}(l.a.Component));d.a.render(Object(m.jsx)(U,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.486c30fa.chunk.js.map