
(function($,Edge,compId){var _=null,y=true,n=false,t='transform',x1='4.0.0',c='color',x4='rgba(0,0,0,0)',x25='990px',zy='scaleY',zx='scaleX',e31='${_dice-roll-sprite}',e30='${symbolSelector}',x28='dice-roll-sprite_symbol_1',x24='935px',bsz='background-size',x29='@@0@@px @@1@@px',e21='${_logo}',a='Base State',x22='dice-roll-sprite',rz='rotateZ',x='text',x15='hidden',r='deg',m='rect',dt='Default Timeline',l='normal',e20='${_dice-roll-sprite_symbol_1}',i='none',x23='0px',qok='easeOutBack',x12='rgba(230,90,11,0.99)',e19='${_Coming_Soon}',p='px',rt='right',lf='left',x13='rgba(0,0,0,1.00)',e17='${_kiosk-bg}',ql='linear',o='opacity',e18='${_Message}',x16='rgba(96,153,132,0.99)',bp='background-position',x8='14',x9='Lucida Console, Monaco, monospace',h='height',x26='auto',bg='background-color',x2='4.0.0.359',w='width',g='image',fs='font-size',tp='top',x3='both',ta='text-align',ov='overflow',e14='${_Stage}',ff='font-family',x11='stage',s='style';var im='images/';var g6='logo.png',g27='dice-roll-sprite2.png',g5='kiosk-bg.jpg';var s10="See the show on the date message",s7="Coming soon to Diode Gallery...";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:x3,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'kiosk-bg',t:g,r:['-5px','-5px','700px','609px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'dice-roll-sprite_symbol_1',t:m,r:['264px','201px','auto','auto','auto','auto']},{id:'logo',t:g,r:['98px','252px','504px','72px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Coming_Soon',t:x,r:['98px','216px','auto','auto','auto','auto'],text:s7,n:[x9,x8,"rgba(96,153,132,0.99)",l,i,""]},{id:'Message',t:x,r:['98px','314px','453px','auto','auto','auto'],text:s10,align:"right",n:[x9,x8,"rgba(230,90,11,0.99)",l,i,""]}],sI:[{id:'dice-roll-sprite_symbol_1',sN:'dice-roll-sprite_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:16118,a:y,tt:[{id:"eid9",tr:[function(e,d){this.eSA(e,d);},['play','${_dice-roll-sprite_symbol_1}',['roll']],""],p:11500}]}}},"dice-roll-sprite_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x22,t:g,r:[x23,x23,x24,x25,x26,x26],f:[x4,im+g27,x23,x23,x24,x25]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2583,a:n,l:{"roll":83,"loop":927,"frame-1":1000,"frame-2":1083,"frame-3":1166,"frame-4":1250,"frame-5":1333,"frame-6":1416,"frame-7":1500,"frame-8":1583,"frame-9":1666,"frame-10":1750,"frame-11":1833,"frame-12":1916,"frame-13":2000,"frame-14":2083,"frame-15":2166,"frame-16":2250,"frame-17":2333,"frame-18":2416,"frame-19":2500,"frame-20":2583},tt:[]}}}};var S1=symbols[x11];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e14).P(bg,x13,c).P(w,700).P(h,600).P(ov,x15);A1.A(e17).P(tp,-5).P(zy,1,t,_,"").P(zx,1,t).P(h,609,_,_,p).P(lf,-5).P(w,700).P(o,0,_,_,"").T(5.618,1,0.5,ql).T(11,0,0.5);A1.A(e18).P(tp,314).P(fs,14).P(ta,rt).P(ff,x9).P(c,x12,c).P(lf,98).P(w,453).P(o,0,_,_,"").T(2.5,1,0.5,ql).T(5.618,0,0.5);A1.A(e19).P(tp,216).P(c,x16,c).P(ff,x9).P(lf,98).P(fs,14).P(o,0,_,_,"").T(0,1,0.5,ql).T(5,0,0.5);A1.A(e20).P(tp,201).P(lf,264).P(o,0,_,_,"").T(11,1,0.5,ql).T(15.618,0,0.5);A1.A(e21).P(tp,252).P(zx,1,t,_,"").P(lf,98,_,_,p).P(h,43).T(2.118,43).P(o,0,_,_,"").T(1.5,1,0.238,qok).T(5.342,0,0.5,ql).P(w,0,_,_,p).T(1.5,453,0.618,qok);var S2=symbols[x28];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e30).P(h,198).P(w,187);A2.A(e31).P(rz,0,t,_,r).P(bsz,[935,990],_,x29).P(tp,0,_,_,p).T(0,0).P(h,198).T(0,198,_,_,0).P(bp,[-561,-594],_,x29).T(0,[-748,-594]).T(0.083,[0,-792]).T(0.167,[-187,-792]).T(0.25,[-374,-792]).T(0.333,[-561,-792]).T(0.417,[-748,-792]).T(0.5,[0,-792]).T(0.594,[-374,-792],_,_,[-187,-792]).T(0.675,[-187,-792]).T(0.75,[-561,-792]).T(0.834,[-748,-792]).T(0.927,[-561,-792]).T(1,[0,0]).T(1.083,[-187,0]).T(1.166,[-374,0]).T(1.25,[-561,0]).T(1.333,[-748,0]).T(1.416,[0,-198]).T(1.5,[-187,-198]).T(1.583,[-374,-198]).T(1.666,[-561,-198]).T(1.75,[-748,-198]).T(1.833,[0,-396]).T(1.916,[-187,-396]).T(2,[-374,-396]).T(2.083,[-561,-396]).T(2.166,[-748,-396]).T(2.25,[0,-594]).T(2.333,[-187,-594]).T(2.416,[-374,-594]).T(2.5,[-561,-594]).T(2.583,[-748,-594]).P(lf,0).T(0,0).P(w,187).T(0,187,_,_,0);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"kiosk");