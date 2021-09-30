(this["webpackJsonptime-tracking-dashboard"]=this["webpackJsonptime-tracking-dashboard"]||[]).push([[0],{24:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r,i,o,c,a,s,d,l,u,p,b,h,f,g,j,x,m,y,v,O,k=t(0),w=t.n(k),C=t(8),B=t.n(C),S=(t(24),t(10)),P=t(5),L=t(2),R=t(3),D={blue:"#5847eb",liglhtRed:"#FF8B64",softBlue:"#56C2E6",lightRed:"#FF5E7D",limeGreen:"#4BCF83",violet:"#7235D1",softOrange:"#F1C75B",veryDarkBlue:"#0f1424",darkBlue:"#1c1f4a",desaturatedBlue:"#6f76c8",paleBlue:"#bdc1ff"},F=t(16),W=t.n(F),z=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}],E=t(1),M=R.a.article(r||(r=Object(L.a)(["\n  position: relative;\n  @media screen and (max-width: 1023px) {\n    height: 150px;\n  }\n"]))),G=R.a.main(i||(i=Object(L.a)(["\n  position: relative;\n  height: 100%;\n  background-color: ",";\n  border-radius: 18px;\n  overflow: hidden;\n  @media screen and (max-width: 1023px) {\n    padding: 0;\n  }\n"])),(function(e){return e.background})),I=R.a.header(o||(o=Object(L.a)(["\n  position: absolute;\n  border-radius: 18px;\n  bottom: -1px;\n  left: -1px;\n  border: 1px solid ",";\n  height: 80%;\n  width: 80%;\n  background-color: ",";\n  padding: 0 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  \n  @media screen and (max-width: 1023px) {\n    justify-content: space-evenly;\n  }\n"])),(function(e){return e.background}),(function(e){return e.background})),J=R.a.img(c||(c=Object(L.a)(["\n  position: absolute;\n  top: -2%;\n  right: 6%;\n  object-fit: cover;\n"]))),T=R.a.h1(a||(a=Object(L.a)(["\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n"]))),q=R.a.p(s||(s=Object(L.a)(["\n  color: #fff;\n  font-size: 48px;\n  font-weight: 300;\n  margin: 0;\n"]))),A=R.a.header(d||(d=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),H=R.a.button(l||(l=Object(L.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    filter: brightness(40);\n  }\n"]))),Y=R.a.img(u||(u=Object(L.a)([""]))),K=R.a.small(p||(p=Object(L.a)(["\n  color: #fff;\n  opacity: 0.6;\n  font-size: 14px;\n  margin-top: 10px;\n  font-weight: 300;\n"]))),N=R.a.div(b||(b=Object(L.a)(["\n  @media screen and (max-width: 1023px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]))),Q=function(e){switch(e){case 0:return"liglhtRed";case 1:return"softBlue";default:return"lightRed";case 3:return"limeGreen";case 4:return"violet";case 5:return"softOrange"}},U=function(e){var n="./images/icon-";switch(e){default:return n.concat("work.svg");case"Play":return n.concat("play.svg");case"Study":return n.concat("study.svg");case"Exercise":return n.concat("exercise.svg");case"Social":return n.concat("social.svg");case"Self Care":return n.concat("self-care.svg")}},V=function(e){return console.log("+++++++++++++"),console.log(e),"Daily"===e?"Yesterday":"Weekly"===e?"Last Week":"Monthly"===e?"Last Month":"Last Week"},X=function(e){var n=e.title,t=e.timeframes,r=e.index,i=Object(k.useContext)(oe).selectedPeriod,o=Object(k.useState)(!1),c=Object(P.a)(o,2),a=c[0],s=c[1];return Object(E.jsxs)(M,{children:[Object(E.jsx)(G,{background:D[Q(r)],children:Object(E.jsx)(J,{src:U(n)})}),Object(E.jsxs)(I,{background:D.darkBlue,hover:D.veryDarkBlue,children:[Object(E.jsxs)(A,{children:[Object(E.jsx)(T,{children:n}),Object(E.jsxs)(W.a,{isOpen:a,onRequestClose:function(){return s(!1)},style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.4)",border:0},content:{opacity:1,borderRadius:28,backgroundColor:D[Q(r)],position:"absolute",top:"30%",bottom:"30%",right:"40%",left:"40%",padding:0,overflow:"clip",margin:0}},children:[Object(E.jsxs)("div",{style:{position:"relative",backgroundColor:D[Q(r)],height:"15%",border:0},children:[Object(E.jsx)(T,{style:{fontSize:"30px",paddingLeft:"40px",paddingTop:"10px"},children:n}),Object(E.jsx)("img",{src:U(n),alt:"",style:{position:"absolute",top:"-2%",right:"6%",objectFit:"cover"}})]}),Object(E.jsx)("div",{style:{position:"absolute",backgroundColor:D.darkBlue,width:"100%",height:"85%",border:0,borderRadius:"28px",bottom:"-1px",left:"-1px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(E.jsxs)(N,{children:[Object(E.jsx)(q,{children:"".concat(t[i.toLowerCase()].current,"hrs")}),Object(E.jsx)(K,{children:"Last Week - ".concat(t[i.toLowerCase()].previous,"hrs")})]})})]}),Object(E.jsx)(H,{onClick:function(){return s(!0)},children:Object(E.jsx)(Y,{src:"./images/icon-ellipsis.svg"})})]}),Object(E.jsxs)(N,{children:[Object(E.jsx)(q,{children:"".concat(t[i.toLowerCase()].current,"hrs")}),Object(E.jsx)(K,{children:"".concat(V(i)," - ").concat(t[i.toLowerCase()].previous,"hrs")})]})]})]})},Z=R.a.div(h||(h=Object(L.a)(["\n  position: relative;\n  color: #fff;\n  background-color: ",";\n  grid-row: 1/3;\n  grid-column: 1;\n  height: 100%;\n  width: 95%;\n  border-radius: 18px;\n  @media (max-width: 1023px) {\n    padding-bottom: 4%;\n    grid-row: 1/3;\n    height: fit-content;\n  }\n"])),(function(e){return e.background})),$=R.a.div(f||(f=Object(L.a)(["\n  position: relative;\n  top: 0;\n  left: 0;\n  padding: 10% 10%;\n  width: 80%;\n  height: 50%;\n  border-radius: 18px;\n  background-color: ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n  @media screen and (max-width: 1023px) {\n    flex-direction: row;\n    align-items: center;\n    padding: 6% 10%;\n    gap: 10%;\n  }\n"])),(function(e){return e.background})),_=R.a.img(g||(g=Object(L.a)(["\n  border-radius: 50%;\n  border: 3px solid #fff;\n  width: 40%;\n  height: auto;\n  @media screen and (max-width: 1023px) {\n    width: 25%;\n  }\n"]))),ee=R.a.small(j||(j=Object(L.a)(["\n  font-weight: 400;\n  opacity: 0.6;\n"]))),ne=R.a.h1(x||(x=Object(L.a)(["\n  font-weight: 300;\n  font-size: 40px;\n"]))),te=R.a.div(m||(m=Object(L.a)(["\n  padding: 5% 10%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  @media screen and (max-width: 1023px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    padding: 0;\n    padding-top: 3%;\n  }\n"]))),re=R.a.button(y||(y=Object(L.a)(['\n  color: #fff;\n  font-family: "Rubik", Arial, Helvetica, sans-serif;\n  font-weight: 200;\n  opacity: ',";\n  cursor: pointer;\n  font-size: 18px;\n  background-color: transparent;\n  border: none;\n  @media screen and (max-width: 1023px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n  }\n  &:hover {\n    opacity: 1;\n  }\n"])),(function(e){return e.opacity})),ie=function(e){var n=e.gridPosition,t=Object(k.useContext)(oe),r=t.selectedPeriod,i=t.setSelectedPeriod;return Object(E.jsxs)(Z,{gridPos:n,background:D.darkBlue,children:[Object(E.jsxs)($,{background:D.blue,children:[Object(E.jsx)(_,{src:"./images/image-jeremy.png"}),Object(E.jsxs)("div",{style:{paddingTop:"40px"},children:[Object(E.jsx)(ee,{children:"Report for"}),Object(E.jsx)(ne,{children:"Michael Solomon"})]})]}),Object(E.jsx)(te,{children:["Daily","Weekly","Monthly"].map((function(e){return Object(E.jsx)(re,{opacity:e===r?1:.4,onClick:function(){i(e)},children:e},e)}))})]})},oe=w.a.createContext({}),ce=R.a.main(v||(v=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  height: 52vh;\n  padding: 24vh 14%;\n  @media screen and (max-width: 1023px) {\n    min-height: 100vh;\n    padding: 6vh 4%;\n    height: auto;\n  }\n"])),(function(e){return e.background})),ae=R.a.section(O||(O=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: 100%;\n  height: 100%;\n  gap: 2em;\n  @media screen and (max-width: 1023px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(8, fit-content);\n    gap: 2em;\n  }\n"])));var se=function(){var e=Object(k.useState)("Weekly"),n=Object(P.a)(e,2),t=n[0],r=n[1];return Object(E.jsx)(ce,{background:D.veryDarkBlue,children:Object(E.jsx)(oe.Provider,{value:{selectedPeriod:t,setSelectedPeriod:r},children:Object(E.jsxs)(ae,{children:[Object(E.jsx)(ie,{}),z.map((function(e,n){return Object(E.jsx)(X,Object(S.a)(Object(S.a)({},e),{},{index:n}),e.title)}))]})})})};B.a.render(Object(E.jsx)(w.a.StrictMode,{children:Object(E.jsx)(se,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2d8cc536.chunk.js.map