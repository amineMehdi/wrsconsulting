(this.webpackJsonpwrsconsutling=this.webpackJsonpwrsconsutling||[]).push([[0],{18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){"use strict";i.r(t);var s=i(2),c=i.n(s),n=i(7),r=i.n(n),a=i(8),l=i(9),o=i(13),d=i(11),j=(i(18),i(12)),u=i(5),b=(i(19),i.p+"static/media/wrs-80x80.41ac646a.png"),h=i.p+"static/media/google_social.e0c128ec.svg",O=i.p+"static/media/facebook_social.32e7def9.svg",x=i.p+"static/media/linkedin_social.ff4f7386.svg",v=i.p+"static/media/twitter_social.3d3c2ea9.svg",p=i(1),m=i(0);var f=function(e){var t=Object(s.useState)(!1),i=Object(u.a)(t,2),c=i[0],n=i[1];return Object(s.useEffect)((function(){var e=document.querySelector(".navbar-container");e.style.borderBottomColor=c?"#67b7e1":"transparent"}),[c]),Object(s.useEffect)((function(){var e=function(e,i){window.innerWidth>=900&&t(e),n(i)},t=function(e){e.parentElement.classList.length||e.classList.toggle("item-selected")},i=document.querySelector(".navbar-container");i.addEventListener("mouseenter",(function(){n(!0)})),i.addEventListener("mouseleave",(function(){n(!1)}));var s=i.querySelectorAll(".items-list> li>a"),c=document.querySelector(".item-dropdown-content");[].concat(Object(j.a)(s),[c]).forEach((function(t){t.addEventListener("mouseenter",(function(){e(t,!1)})),t.addEventListener("mouseleave",(function(){e(t,!0)}))}));var r=document.querySelector(".items-menu");r.addEventListener("click",(function(){r.classList.toggle("menu-active"),document.querySelector(".items-list").classList.toggle("items-slide-active")})),document.querySelector(".item-dropdown-arrow").addEventListener("click",(function(){document.querySelector(".item-dropdown-back-arrow").style="visibility: visible; display: block",c.style="visibility: visible; display:block"}));var a=document.querySelector(".item-dropdown-back-arrow");a.addEventListener("click",(function(){document.querySelector(".items-list").style.visibility="visible",a.style.display="none",c.style.display="none"})),window.addEventListener("scroll",(function(){window.scrollY>90?Object(p.a)({targets:".navbar-container",translateY:window.innerWidth<1010?"-95px":"-50px",duration:100,easing:"linear"}):window.scrollY<60&&(Object(p.a)({targets:".navbar-container",translateY:"0px",duration:100,easing:"linear"}),document.querySelector(".navbar-contact-container").style.display="flex")}))}),[]),Object(m.jsxs)("div",{className:"navbar-container",children:[Object(m.jsxs)("div",{className:"navbar-contact-container",children:[Object(m.jsx)("div",{className:"navbar-contact",children:Object(m.jsxs)("p",{children:["Contactez nous +336 34 27 40 69 |"," ",Object(m.jsx)("a",{href:"mailto:contact@wrsconsulting.fr",children:"contact@wrsconsulting.fr"})]})}),Object(m.jsxs)("div",{className:"navbar-social",children:[Object(m.jsx)("a",{href:"#",title:"facebook",children:Object(m.jsx)("img",{src:O,alt:"facebook"})}),Object(m.jsx)("a",{href:"#",title:"google",children:Object(m.jsx)("img",{src:h,alt:"google"})}),Object(m.jsx)("a",{href:"#",title:"twitter",children:Object(m.jsx)("img",{src:v,alt:"twitter"})}),Object(m.jsx)("a",{href:"#",title:"linkedin",children:Object(m.jsx)("img",{src:x,alt:"linkedin"})})]})]}),Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("div",{className:"logo-container",children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)("img",{src:b,alt:"logo"})})}),Object(m.jsxs)("ul",{className:"items-list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"ACCEUIL "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"A PROPOS"})}),Object(m.jsxs)("li",{className:"item-dropdown",children:[Object(m.jsx)("a",{href:"#",children:"EXPERTISE WRS"}),Object(m.jsxs)("ul",{className:"item-dropdown-content",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"INFRASTRUCTURES & R\xc9SEAUX"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"D\xc9VELOPPEMENT LOGICIEL"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"GESTION DE PROJET"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"CONSULTING EN STRAT\xc9GIE IT"})})]}),Object(m.jsx)("span",{className:"item-dropdown-arrow",children:"\u276f"}),Object(m.jsx)("span",{className:"item-dropdown-back-arrow",children:"\u2770"})]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"REALISATIONS"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"NOS PARTENAIRES"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"CONTACT"})})]}),Object(m.jsxs)("div",{className:"items-menu",children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})]})]})},g=i(10);i(21);var y=function(e){var t=function(e,t){return Object(p.a)({targets:"."+e,top:["60%",t.toString()],duration:2e3,easing:"easeOutQuad"})},i=function(){return Object(p.a)({targets:".learn-more",opacity:["0%","100%"],delay:500,duration:2e3,easing:"easeOutExpo"})},c=function(){return Object(p.a)({targets:".slide-img",filter:"blur(3px)",duration:2200,easing:"easeOutExpo"})};Object(s.useEffect)((function(){window.innerWidth<=1e3&&(document.querySelector(".slide-controllers").style.display="none"),t("slide-section",25).play(),t("slide-details",50).play(),i().play(),c().play()}),[]);var n=Object(s.useState)(1),r=Object(u.a)(n,2),a=r[0],l=r[1];Object(s.useEffect)((function(){t("slide-section",25).play(),t("slide-details",52).play(),i().play(),c().play();var s,n=document.querySelectorAll(".slide"),r=Object(g.a)(n);try{for(r.s();!(s=r.n()).done;){s.value.style.display="none"}}catch(d){r.e(d)}finally{r.f()}a>e.children.length?l(1):a<1?l(e.children.length):(n[a-1].style.display="block",o())}),[a]);var o=function(){document.querySelectorAll("span[class^='dot-']").forEach((function(e,t){a-1!==t?e.classList.remove("active-dot"):e.classList.add("active-dot")}))};return Object(m.jsxs)("div",{className:"slideshow-container",children:[e.children,Object(m.jsxs)("div",{className:"slide-controllers",children:[Object(m.jsx)("span",{className:"prev",onClick:function(){return l(a-1)}}),Object(m.jsx)("span",{className:"next",onClick:function(){return l(a+1)}})]}),Object(m.jsx)("div",{className:"dots-container",children:function(){for(var t=[],i=function(e){var i="dot-"+e;t.push(Object(m.jsx)("span",{className:i,onClick:function(){l(e+1),o()}},e.toString()))},s=0;s<e.children.length;s++)i(s);return t}()})]})};var w=function(e){return Object(m.jsxs)("div",{className:"slide",children:[Object(m.jsx)("div",{className:"slide-img",style:{backgroundImage:"url(".concat(e.src,")")}}),Object(m.jsx)("div",{className:"slide-section",children:e.section}),Object(m.jsx)("p",{className:"slide-details",children:e.details}),Object(m.jsx)("div",{className:"learn-more",children:Object(m.jsx)("button",{onClick:function(){return window.location.href="/".concat(e.link)},children:"En savoir plus"})})]})},N=1500;var S=function(e){return Object(m.jsxs)("div",{className:"tile",children:[Object(m.jsx)("div",{className:"tile-logo",children:Object(m.jsx)("img",{src:e.logo,alt:"p"})}),Object(m.jsx)("div",{className:"tile-header",children:e.header}),Object(m.jsx)("div",{className:"tile-details",children:Object(m.jsx)("p",{children:e.details})}),Object(m.jsx)("div",{className:"tile-arrow arrow-down",onClick:function(e){return function(e){var t=e.parentNode;e.classList.contains("arrow-down")?(Object(p.a)({targets:t,height:"45vh",duration:N}),t.querySelector(".tile-details").style="display: block",t.querySelector(".tile-learn-more").style="display: block",Object(p.a)({targets:t.querySelector(".tile-learn-more"),opacity:["0","1"],delay:500,duration:N}),e.classList.add("arrow-up"),e.classList.remove("arrow-down")):(t.querySelector(".tile-details").style="display: none",t.querySelector(".tile-learn-more").style="display: none",Object(p.a)({targets:t,height:"32vh",duration:N}),e.classList.add("arrow-down"),e.classList.remove("arrow-up"))}(e.target)}}),Object(m.jsx)("div",{className:"tile-learn-more",children:Object(m.jsx)("button",{onClick:function(){return window.location.href="/".concat(e.link)},children:"En savoir plus"})})]})},E=(i(22),1e3);var k=function(e){return Object(s.useEffect)((function(){var e=document.querySelectorAll(".tile");window.innerWidth>1010&&(console.log(),e.forEach((function(t){t.addEventListener("mouseenter",(function(){Object(p.a)({targets:t,width:"100%",duration:E}),Object(p.a)({targets:t.querySelector(".tile-logo"),width:"55px",height:"55px",top:"12%",borderRadius:"10px",duration:E}),Object(p.a)({targets:t.querySelector(".tile-header"),fontSize:"50px",duration:500,easing:"linear"}),t.querySelector(".tile-details").style.display="block",t.querySelector(".tile-learn-more").style.display="block",e.forEach((function(e){e.isSameNode(t)||(Object(p.a)({targets:e,opacity:["1","0"],duration:E}),e.querySelector(".tile-header").style.display="none")}))})),t.addEventListener("mouseleave",(function(){Object(p.a)({targets:t.querySelector(".tile-logo"),top:"-15%",duration:E,borderRadius:"50%",easing:"linear"}),Object(p.a)({targets:t,width:"25vw",duration:E,easing:"linear"}),Object(p.a)({targets:t.querySelector(".tile-header"),fontSize:"28px",duration:500,easing:"linear"}),t.querySelector(".tile-details").style.display="none",t.querySelector(".tile-learn-more").style.display="none",e.forEach((function(e){e.isSameNode(t)||(Object(p.a)({targets:e,opacity:["0.25","1"],width:"25vw",duration:E}),e.querySelector(".tile-header").style="display:block; opacity: 0",Object(p.a)({targets:e.querySelector(".tile-header"),opacity:["0","1"],duration:3e3,delay:500}))}))}))})))}),[]),Object(m.jsxs)("div",{className:"tiles-section",children:[Object(m.jsx)("div",{className:"tiles-section-header",children:Object(m.jsx)("p",{children:"Nos Expertises"})}),Object(m.jsx)("div",{className:"tiles-container",children:e.children})]})};i(23);var q=function(){return Object(m.jsxs)("div",{className:"contact-container",children:[Object(m.jsx)("div",{className:"contact-img"}),Object(m.jsx)("div",{className:"contact-header",children:Object(m.jsx)("header",{children:"Avez-vous une Question ? Contactez-nous"})}),Object(m.jsx)("div",{className:"contact-btn",children:Object(m.jsx)("button",{onClick:function(){return window.location.href="/contact"},children:"Contact"})})]})},L=i.p+"static/media/img-1.7490343c.jpg",C=i.p+"static/media/img-2.0d6db3b7.jpg",I=i.p+"static/media/img-3.055330cf.jpg",A=i.p+"static/media/img-4.c292d4ba.jpg",R=i.p+"static/media/developpement_logiciel_icon.ba80f6c0.svg",T=i.p+"static/media/edition_logiciel_icon.b21df7f2.svg",z=i.p+"static/media/reseaux_infrastructure_icon.c1f9d5e5.svg",_=i.p+"static/media/strategie_it_icon.d48b5807.svg";i(24);var G=function(){return Object(m.jsx)("div",{className:"footer-container",children:Object(m.jsxs)("footer",{children:[Object(m.jsx)("div",{className:"footer-logo",children:Object(m.jsx)("img",{src:b})}),Object(m.jsxs)("div",{className:"footer-services",children:[Object(m.jsx)("h2",{children:"Services"}),Object(m.jsxs)("ul",{className:"footer-services-list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/infrastructure-reseaux",children:"Infrastructures & R\xe9seaux"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/developpement-logiciel",children:"D\xe9veloppement logiciel"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/gestion-de-projet",children:"Gestion de projet"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/consulting-en-strategie-it",children:"Consulting en strat\xe9gie IT"})})]})]}),Object(m.jsxs)("div",{className:"footer-entreprise",children:[Object(m.jsx)("h2",{children:"Entreprise"}),Object(m.jsxs)("ul",{className:"footer-entreprise-list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/realisations",children:"Realisations"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/partenaires",children:"Nos Partenaires"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/a-propos",children:"A propos"})})]})]}),Object(m.jsxs)("div",{className:"footer-contact",children:[Object(m.jsx)("h2",{children:"Contact"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("div",{children:"4 bis rue cadet de vaux 95130 Franconville"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("div",{children:"+336 34 27 40 69"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"mailto:contact@wrsconsulting.fr",children:"contact@wrsconsulting.fr"})})]})]})]}),Object(m.jsxs)("div",{className:"footer-social",children:[Object(m.jsx)("div",{className:"footer-copyright",children:Object(m.jsx)("p",{children:"\xa9 WRSConsulting 2021. All rights reserved."})}),Object(m.jsxs)("div",{className:"footer-social-icons",children:[Object(m.jsx)("a",{href:"#",title:"Facebook",children:Object(m.jsx)("img",{src:O,alt:"facebook"})}),Object(m.jsx)("a",{href:"#",title:"Google",children:Object(m.jsx)("img",{src:h,alt:"google"})}),Object(m.jsx)("a",{href:"#",title:"Twitter",children:Object(m.jsx)("img",{src:v,alt:"twitter"})}),Object(m.jsx)("a",{href:"#",title:"Linkedin",children:Object(m.jsx)("img",{src:x,alt:"linkedin"})})]})]})]})})},P=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsxs)(y,{children:[Object(m.jsx)(w,{src:L,section:"Reseaux & Infrastructure",details:"Ma\xeetrisez l\u2019\xe9volution de votre Datacenter, vos Clouds et vos applications Saas.",link:"infrastructure-reseaux"}),Object(m.jsx)(w,{src:C,section:"D\xe9veloppement logiciel",details:"Ma\xeetrisez vos d\xe9veloppements et garantissez la meilleure exp\xe9rience utilisateur \xe0 vos clients.",link:"developpement-logiciel"}),Object(m.jsx)(w,{src:I,section:"Gestion de projet",details:"Bordez vos budgets, pr\xe9venez vos risques, en garantissant vos co\xfbts, vos d\xe9lais, et votre qualit\xe9 logicielle.",link:"gestion-de-projet"}),Object(m.jsx)(w,{src:A,section:"Consulting en strat\xe9gie IT",details:"Ayez toujours un coup d\u2019avance en garantissant l\u2019efficacit\xe9 de votre veille strat\xe9gique.",link:"consulting-en-strategie-it"})]}),Object(m.jsxs)(k,{children:[Object(m.jsx)(S,{logo:z,header:"Reseaux & Infrastructure",details:"Ma\xeetrisez l\u2019\xe9volution de votre Datacenter, vos Clouds et vos applications Saas.",link:"infrastructure-reseaux"}),Object(m.jsx)(S,{logo:R,header:"D\xe9veloppement logiciel",details:"Ma\xeetrisez vos d\xe9veloppements et garantissez la meilleure exp\xe9rience utilisateur \xe0 vos clients.",link:"developpement-logiciel"}),Object(m.jsx)(S,{logo:T,header:"Gestion de projet",details:"Bordez vos budgets, pr\xe9venez vos risques, en garantissant vos co\xfbts, vos d\xe9lais, et votre qualit\xe9 logicielle.",link:"gestion-de-projet"}),Object(m.jsx)(S,{logo:_,header:"Consulting en strat\xe9gie IT",details:"Ayez toujours un coup d\u2019avance en garantissant l\u2019efficacit\xe9 de votre veille strat\xe9gique.",link:"consulting-en-strategie-it"})]}),Object(m.jsx)(q,{}),Object(m.jsx)(G,{})]})}}]),i}(c.a.Component);i(25);r.a.render(Object(m.jsx)(P,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.9bc10317.chunk.js.map