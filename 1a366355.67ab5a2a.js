(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return g})),a.d(t,"metadata",(function(){return f})),a.d(t,"rightToc",(function(){return j})),a.d(t,"default",(function(){return h}));var n=a(2),c=a(6),l=a(0),r=a.n(l),s=a(83),o=a(79),u=a(74);var i=e=>{const[t,a]=Object(l.useState)({ref:Object(l.useRef)(),color:"primary",idleText:"Primary",loadingText:"Loading",successText:"Success",errorText:"Error",buttonState:"idle",endState:"success"}),[n,c]=Object(l.useState)({ref:Object(l.useRef)(),color:"secondary",idleText:"Secondary",loadingText:"Loading",successText:"Success",errorText:"Error",buttonState:"idle",endState:"success"}),[s,o]=Object(l.useState)({ref:Object(l.useRef)(),color:"teal",idleText:"Teal",loadingText:"Loading",successText:"Success",errorText:"Error",buttonState:"idle",endState:"success"}),[i,m]=Object(l.useState)({ref:Object(l.useRef)(),color:"green",idleText:"Green",loadingText:"Loading",successText:"Success",errorText:"Error",buttonState:"idle",endState:"success"}),[d,b]=Object(l.useState)({ref:Object(l.useRef)(),color:"red",idleText:"Red",loadingText:"Loading",successText:"Success",errorText:"Error",buttonState:"idle",endState:"success"}),E=[[t,a],[n,c],[s,o],[i,m],[d,b]];return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"flex-section"},E.map((e,t)=>r.a.createElement("div",{className:"item",key:t},r.a.createElement(u.a,{buttonRef:e[0].ref,color:e[0].color,idleText:e[0].idleText,loadingText:e[0].loadingText,successText:e[0].successText,errorText:e[0].errorText,buttonState:e[0].buttonState,onClick:()=>{(e=>{E[e][1]({...E[e][0],buttonState:"loading"}),setTimeout(()=>{E[e][1]({...E[e][0],buttonState:E[e][0].endState})},2e3)})(t)}})))))},m=a(80);var d=e=>{const[t,a]=Object(l.useState)({ref:Object(l.useRef)(),color:"violet",idleText:"Violet",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m})," Error"),buttonState:"idle",endState:"success"}),[n,c]=Object(l.useState)({ref:Object(l.useRef)(),color:"blue",idleText:"Blue",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.e})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m})," Error"),buttonState:"idle",endState:"success"}),[s,i]=Object(l.useState)({ref:Object(l.useRef)(),color:"yellow",idleText:"Yellow",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.c})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m})," Error"),buttonState:"idle",endState:"success"}),[d,b]=Object(l.useState)({ref:Object(l.useRef)(),color:"dark",idleText:"Dark",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.l})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m})," Error"),buttonState:"idle",endState:"success"}),[E,p]=Object(l.useState)({ref:Object(l.useRef)(),color:"light",idleText:"Light",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.n})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m})," Error"),buttonState:"idle",endState:"success"}),T=[[t,a],[n,c],[s,i],[d,b],[E,p]];return Object(l.useEffect)(()=>{const e=T.map((e,t)=>{e[0].ref.current.click()});return()=>{clearTimeout(e)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"flex-section"},T.map((e,t)=>r.a.createElement("div",{className:"item",key:t},r.a.createElement(u.a,{rounded:!0,buttonRef:e[0].ref,color:e[0].color,idleText:e[0].idleText,successText:e[0].successText,errorText:e[0].errorText,buttonState:e[0].buttonState,onClick:()=>(e=>{T[e][1]({...T[e][0],buttonState:"loading"}),setTimeout(()=>{T[e][1]({...T[e][0],buttonState:T[e][0].endState})},2e3)})(t)})))))},b=a(146),E=a(96),p=a(147);var T=e=>{const[t,a]=Object(l.useState)({ref:Object(l.useRef)(),color:"violet",idleText:"Violet",loadingText:"Loading",successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d})," Success"),errorText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m}))," Error"),buttonState:"loading",endState:"success"}),[n,c]=Object(l.useState)({ref:Object(l.useRef)(),color:"blue",idleText:"Blue",loadingText:r.a.createElement("span",{className:"center-this"},r.a.createElement(b.a,{className:"icon-spin mr-1"})," Loading"),successText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d}))," Success"),errorText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m}))," Error"),buttonState:"loading",endState:"success"}),[s,i]=Object(l.useState)({ref:Object(l.useRef)(),color:"yellow",idleText:"Yellow",loadingText:r.a.createElement("span",{className:"center-this"},r.a.createElement(E.b,{className:"icon-spin mr-1"})," Loading"),successText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d}))," Success"),errorText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m}))," Error"),buttonState:"loading",endState:"success"}),[d,T]=Object(l.useState)({ref:Object(l.useRef)(),color:"dark",idleText:"Dark",loadingText:r.a.createElement("span",{className:"center-this"},r.a.createElement(p.a,{className:"icon-spin mr-1"})," Loading"),successText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d}))," Success"),errorText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m}))," Error"),buttonState:"loading",endState:"success"}),[x,S]=Object(l.useState)({ref:Object(l.useRef)(),color:"light",idleText:"Light",loadingText:r.a.createElement("span",{className:"center-this"},r.a.createElement(E.a,{className:"icon-spin mr-1"})," Loading"),successText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d}))," Success"),errorText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m}))," Error"),buttonState:"loading",endState:"success"}),g=[[t,a],[n,c],[s,i],[d,T],[x,S]];return Object(l.useEffect)(()=>{setTimeout(()=>{g.map((e,t)=>{e[0].autoStart&&e[0].ref.current.click()})},1e3)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"flex-section"},g.map((e,t)=>r.a.createElement("div",{className:"item",key:t},r.a.createElement(u.a,{outline:!0,rounded:!0,shadow:!0,buttonRef:e[0].ref,color:e[0].color,idleText:e[0].idleText,loadingText:e[0].loadingText,successText:e[0].successText,errorText:e[0].errorText,buttonState:e[0].buttonState,onClick:()=>(e=>{g[e][1]({...g[e][0],buttonState:"loading"}),setTimeout(()=>{g[e][1]({...g[e][0],buttonState:g[e][0].endState})},2e3)})(t)})))))};var x=e=>{const[t,a]=Object(l.useState)({ref:Object(l.useRef)(),color:"primary",idleText:"Primary",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.m})," Error"),buttonState:"idle",endState:"error"}),[n,c]=Object(l.useState)({ref:Object(l.useRef)(),color:"secondary",idleText:"Secondary",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.k})," Error"),buttonState:"idle",endState:"error"}),[s,i]=Object(l.useState)({ref:Object(l.useRef)(),color:"teal",idleText:"Teal",loadingText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0})," Loading"),successText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d})," Success"),errorText:r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.o})," Error"),buttonState:"idle",endState:"error"}),[d,b]=Object(l.useState)({ref:Object(l.useRef)(),color:"green",idleText:"Green",loadingText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0}))," Loading"),successText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d}))," Success"),errorText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.g}))," Error"),buttonState:"idle",endState:"error"}),[E,p]=Object(l.useState)({ref:Object(l.useRef)(),color:"red",idleText:"Red",loadingText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.j,spin:!0}))," Loading"),successText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.d}))," Success"),errorText:r.a.createElement("span",null," ",r.a.createElement("span",null,r.a.createElement(o.a,{icon:m.h}))," Error"),buttonState:"idle",endState:"error"}),T=[[t,a],[n,c],[s,i],[d,b],[E,p]];return Object(l.useEffect)(()=>{const e=T.map((e,t)=>{e[0].ref.current.click()});return()=>{clearTimeout(e)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"flex-section"},T.map((e,t)=>r.a.createElement("div",{className:"item",key:t},r.a.createElement(u.a,{outline:!0,rounded:!1,shadow:!0,buttonRef:e[0].ref,color:e[0].color,idleText:e[0].idleText,loadingText:e[0].loadingText,successText:e[0].successText,errorText:e[0].errorText,buttonState:e[0].buttonState,onClick:()=>(e=>{T[e][1]({...T[e][0],buttonState:"loading"}),setTimeout(()=>{T[e][1]({...T[e][0],buttonState:T[e][0].endState})},2e3)})(t)})))))};a(148);var S=()=>r.a.createElement("div",{className:"card example-component-wrapper shadow-dim"},r.a.createElement("div",{className:"card__body py-5"},r.a.createElement(i,null),r.a.createElement(d,null),r.a.createElement(x,null),r.a.createElement(T,null))),g={id:"introduction",title:"Reactive Button",sidebar_label:"Introduction",slug:"/"},f={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Reactive Button",description:"--\x3e",source:"@site/docs\\introduction.md",slug:"/",permalink:"/reactive-button/docs/",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Installation",permalink:"/reactive-button/docs/installation"}},j=[{value:"Example",id:"example",children:[]},{value:"Features",id:"features",children:[]},{value:"Support",id:"support",children:[]},{value:"License",id:"license",children:[]}],O={rightToc:j};function h(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("span",{className:"keyword"},"Reactive Button")," is a beautiful react component to replace the traditional boring buttons. Comes with customization on top. The goal is to let the users visualize what is happening after a button click.",Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)(S,{mdxType:"Example"}),Object(s.b)("h2",{id:"features"},"Features"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Reactive"),Object(s.b)("li",{parentName:"ul"},"Animated"),Object(s.b)("li",{parentName:"ul"},"Lightweight ",Object(s.b)("small",null,Object(s.b)("code",null,"<20KB"))),Object(s.b)("li",{parentName:"ul"},"Supports icons"),Object(s.b)("li",{parentName:"ul"},"Zero dependency "),Object(s.b)("li",{parentName:"ul"},"Super easy to setup"),Object(s.b)("li",{parentName:"ul"},"Super easy to customize"),Object(s.b)("li",{parentName:"ul"},"And much more !")),Object(s.b)("h2",{id:"support"},"Support"),Object(s.b)("p",null,"Show your \u2764\ufe0f and support by giving a \u2b50 on ",Object(s.b)("a",{href:"https://github.com/arifszn/reactive-button"},"Github"),"."),Object(s.b)("h2",{id:"license"},"License"),Object(s.b)("p",null,"MIT Licensed."),Object(s.b)("p",null,"Copyright \xa9 ",Object(s.b)("a",{href:"https://arifszn.github.io",target:"_blank"},"MD. Ariful Alam")," ",(new Date).getFullYear(),"."))}h.isMDXComponent=!0}}]);