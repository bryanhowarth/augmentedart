
(function($,Edge,compId){var _=null,y=true,n=false,e19='${_boats}',x10='rgba(255,255,255,0.00)',c='color',x4='rgba(0,0,0,0)',x14='37px',g='image',x1='2.0.1',x11='boats',a='Base State',x7='hidden',m='rect',dt='Default Timeline',x21='zepellin',x3='2.0.1.268',x20='43px 18.5px',o='opacity',lf='left',e26='${_zepellin}',x22='44px',e18='${symbolSelector}',x13='86px',qiq='easeInQuad',x27='22px 14.5px',x25='Zepellin',bg='background-color',x23='29px',x15='auto',x17='Boat',x12='0px',tp='top',w='width',e8='${_bg}',s='style',ql='linear',ov='overflow',e9='${_Stage}',h='height',x6='stage',x2='2.0.0';var im='images/';var g24='zepellin.png',g16='boats.png',g5='bg.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'bg',t:g,r:['13px','38px','550px','357px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Boat',t:m,r:['451','32','auto','auto','auto','auto']},{id:'Zepellin',t:m,r:['44','53','auto','auto','auto','auto']}],sI:[{id:'Zepellin',sN:'Zepellin'},{id:'Boat',sN:'Boat'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"Boat":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x11,t:g,r:[x12,x12,x13,x14,x15,x15],f:[x4,im+g16,x12,x12]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"Zepellin":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x21,t:g,r:[x12,x12,x22,x23,x15,x15],f:[x4,im+g24,x12,x12]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:9000,a:y,tt:[]}}}};var S1=symbols[x6];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e8).P(lf,13).P(tp,38);A1.A(e9).P(w,600).P(h,400).P(ov,x7).P(bg,x10,c).T(0,x10);var S2=symbols[x17];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e18).P(h,37).P(w,86);A2.A(e19).P("location",x20,"motion").T(0,[[43,18.5,0,0],[106,18.5,0,0]],1,ql).T(1.25,[[106,17.5,0,0],[-56.99,17.5,0,0]]).T(1.387,[[-56.99,17.5,0,0],[44.35,18.5,0,0]],2.613).P(o,1,_,_,"").T(0.5,0,0.5).T(1.387,1,0.363);var S3=symbols[x25];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e18).P(h,29).P(w,44);A3.A(e26).P("location",x27,"motion").T(0,[[22,14.5,0,0],[-13.52,-10.57,0,0]],1,ql).T(1.25,[[223.19,246.24,-129.57,-148.67],[22.1,15.5,0,0]],7.75,qiq).P(o,1,_,_,"").T(0.5,0,0.5,ql).T(1.25,1,0.25);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"edge-animate");