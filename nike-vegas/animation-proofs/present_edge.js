
(function($,Edge,compId){var _=null,y=true,n=false,zy='scaleY',t='transform',x1='4.0.0',x15='no-access-message',c='color',x3='rgba(0,0,0,0)',g='image',x6='rgba(192,192,192,0.00)',x33='foreground_400px_400400_symbol_1',e32='${_present_button_99x97pxCopy}',x31='download_button_200x200px_symbol_1',a='Base State',x24='@@0@@px @@1@@px',x29='485px',bsz='background-size',x11='hidden',x28='396px',e8='${_bg_400px}',m='rect',s='style',zx='scaleX',x9='rgba(255,255,255,0.00)',e13='${_Athlete_Trigger}',i='none',e25='${_foreground_400px_400400}',rz='rotateZ',r='deg',x21='auto',p='px',o='opacity',lf='left',x23='ladder_athlete_sprite_symbol_1',x17='foreground_400px_400400',x2='4.0.0.359',e16='${symbolSelector}',x27='present_button_99x97pxCopy',x18='0px',bp='background-position',h='height',bg='background-color',x20='2800px',x26='present_button_99x97px_symbol_1',qok='easeOutBack',e12='${_Button}',tp='top',w='width',x19='2400px',ql='linear',ov='overflow',e10='${_Stage}',dt='Default Timeline',x7='stage',e14='${_error-message_foreground}';var im='images/';var g30='present_button_99x97px2.png',g22='foreground_400px_%23%5B400%2C400%5D.png',g5='error-message_foreground.png',g4='bg_400px.jpg';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'bg_400px',t:g,r:['0px','0','400px','399px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'Athlete',t:m,r:['0','0','auto','auto','auto','auto']},{id:'error-message_foreground',t:g,r:['28px','20px','348px','348px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'Athlete_Trigger',t:m,r:['37px','146px','189px','233px','auto','auto'],o:1,f:[x6],s:[0,"rgb(0, 0, 0)",i]},{id:'Button',t:m,r:['61','64','auto','auto','auto','auto']}],sI:[{id:'Athlete',sN:'ladder_athlete_sprite_symbol_1',a:{}},{id:'Button',sN:'download_button_200x200px_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:40000,a:y,l:{"loop":2000,"reset":33000,"no-access":40000},tt:[]}}},"no-access-message":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:20000,a:n,tt:[]}}},"ladder_athlete_sprite_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x17,t:g,r:[x18,x18,x19,x20,x21,x21],f:[x3,im+g22,x18,x18,x19,x20]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3976,a:y,l:{"loop":1944},tt:[]}}},"present_button_99x97px_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"download_button_200x200px_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x27,t:g,r:[x18,x18,x28,x29,x21,x21],f:[x3,im+g30,x18,x18,x28,x29]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:12250,a:y,l:{"loop":0,"off-position":12250},tt:[]}}},"foreground_400px_400400_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x17,t:g,r:[x18,x18,x19,x20,x21,x21],f:[x3,im+g22,x18,x18,x19,x20]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3976,a:y,l:{"loop":1944},tt:[]}}}};var S1=symbols[x7];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e8).P(lf,0);A1.A(e10).P(bg,x9,c).P(ov,x11).P(h,400).P(w,400);A1.A(e12).P(tp,0).P(o,1,_,_,"").P(lf,0,_,_,p).P(zy,0,t,_,"").T(1.187,1,0.66,qok).P(zx,0,t).T(1.187,1,0.66);A1.A(e13).P(bg,x6,c).P(o,0,_,_,"").T(40,0);A1.A(e14).P(tp,20).P(h,348).P(lf,28).P(w,348).P(zx,0,t,_,"").T(0,0).T(40,1).P(o,0).T(0,0).T(40,1).P(zy,0,t).T(0,0).T(40,1);var S2=symbols[x15];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e16).P(h,348).P(w,348);var S3=symbols[x23];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e16).P(h,400).P(w,400);A3.A(e25).P(rz,0,t,_,r).P(bsz,[2400,2800],_,x24).P(tp,0,_,_,p).T(0,0).P(h,400).T(0,400).P(lf,0).T(0,0).P(bp,[-0,-0],_,x24).T(0,[-0,-0]).T(0.055,[-400,-0]).T(0.111,[-800,-0]).T(0.166,[-1200,-0]).T(0.222,[-1600,-0]).T(0.277,[-2000,-0]).T(0.333,[-0,-400]).T(0.388,[-400,-400]).T(0.444,[-800,-400]).T(0.5,[-1200,-400]).T(0.555,[-1600,-400]).T(0.611,[-2000,-400]).T(0.666,[-0,-800]).T(0.722,[-400,-800]).T(0.777,[-800,-800]).T(0.833,[-1200,-800]).T(0.888,[-1600,-800]).T(0.944,[-2000,-800]).T(1,[-0,-1200]).T(1.055,[-400,-1200]).T(1.111,[-800,-1200]).T(1.166,[-1200,-1200]).T(1.222,[-1600,-1200]).T(1.277,[-2000,-1200]).T(1.333,[-0,-1600]).T(1.388,[-400,-1600]).T(1.444,[-800,-1600]).T(1.5,[-1200,-1600]).T(1.555,[-1600,-1600]).T(1.611,[-2000,-1600]).T(1.666,[-0,-2000]).T(1.722,[-400,-2000]).T(1.777,[-800,-2000]).T(1.833,[-1200,-2000]).T(1.888,[-1600,-2000]).T(1.944,[-2000,-2000]).T(2,[-0,-2400]).T(2.055,[-400,-2400]).T(2.111,[-800,-2400]).T(2.166,[-1200,-2400]).T(2.215,[-2000,-2000]).T(2.271,[-0,-2400]).T(2.326,[-400,-2400]).T(2.382,[-800,-2400]).T(2.437,[-1200,-2400]).T(2.5,[-2000,-2000]).T(2.556,[-0,-2400]).T(2.611,[-400,-2400]).T(2.667,[-800,-2400]).T(2.722,[-1200,-2400]).T(2.771,[-2000,-2000]).T(2.827,[-0,-2400]).T(2.882,[-400,-2400]).T(2.938,[-800,-2400]).T(2.993,[-1200,-2400]).T(3.038,[-400,-2400]).T(3.094,[-800,-2400]).T(3.149,[-1200,-2400]).T(3.198,[-2000,-2000]).T(3.254,[-0,-2400]).T(3.309,[-400,-2400]).T(3.365,[-800,-2400]).T(3.42,[-1200,-2400]).T(3.483,[-2000,-2000]).T(3.539,[-0,-2400]).T(3.594,[-400,-2400]).T(3.65,[-800,-2400]).T(3.705,[-1200,-2400]).T(3.754,[-2000,-2000]).T(3.81,[-0,-2400]).T(3.865,[-400,-2400]).T(3.921,[-800,-2400]).T(3.976,[-1200,-2400]).P(w,400).T(0,400);var S4=symbols[x26];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e16).P(h,97).P(w,99);var S5=symbols[x31];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e16).P(h,200).P(w,200);A5.A(e32).P(rz,0,t,_,r).P(bsz,[396,485],_,x24).P(tp,30,_,_,p).T(0,30).P(h,97).T(0,97).P(bp,[0,-194],_,x24).T(0,[-99,-194]).T(0.042,[-198,-194]).T(0.083,[-297,-194]).T(0.123,[0,-291]).T(0.167,[-99,-291]).T(0.212,[-198,-291]).T(0.25,[-297,-291]).T(0.291,[0,-388]).T(0.333,[-99,-388]).T(0.37,[-198,-388]).T(0.417,[-297,-388]).T(0.46,[-198,-388]).T(0.5,[-198,-388]).T(0.546,[-99,-388]).T(0.583,[0,-388]).T(0.617,[-297,-291]).T(0.667,[-198,-291]).T(0.71,[-99,-291]).T(0.75,[0,-291]).T(0.792,[-297,-194]).T(0.833,[-198,-194]).T(0.879,[-99,-194]).T(0.917,[0,-194]).T(0.964,[0,-194]).T(1,[-297,-97]).T(1.036,[-198,-97]).T(1.083,[-99,-97]).T(1.119,[0,-97]).T(1.167,[-297,0]).T(1.206,[-198,0]).T(1.25,[-99,0]).T(1.291,[0,0]).T(1.333,[0,0]).T(1.375,[-99,0]).T(1.417,[-198,0]).T(1.466,[-297,0]).T(1.5,[0,-97]).T(1.545,[-99,-97]).T(1.583,[-198,-97]).T(1.629,[-297,-97]).T(1.667,[0,-194]).P(lf,56).T(0,56).P(w,99).T(0,99);var S6=symbols[x33];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e16).P(h,400).P(w,400);A6.A(e25).P(rz,0,t,_,r).P(bsz,[2400,2800],_,x24).P(tp,0,_,_,p).T(0,0).P(h,400).T(0,400,_,_,0).P(lf,0).T(0,0).P(bp,[0,0],_,x24).T(0,[-0,-0]).T(0.055,[-400,-0]).T(0.111,[-800,-0]).T(0.166,[-1200,-0]).T(0.222,[-1600,-0]).T(0.277,[-2000,-0]).T(0.333,[-0,-400]).T(0.388,[-400,-400]).T(0.444,[-800,-400]).T(0.5,[-1200,-400]).T(0.555,[-1600,-400]).T(0.611,[-2000,-400]).T(0.666,[-0,-800]).T(0.722,[-400,-800]).T(0.777,[-800,-800]).T(0.833,[-1200,-800]).T(0.888,[-1600,-800]).T(0.944,[-2000,-800]).T(1,[-0,-1200]).T(1.055,[-400,-1200]).T(1.111,[-800,-1200]).T(1.166,[-1200,-1200]).T(1.222,[-1600,-1200]).T(1.277,[-2000,-1200]).T(1.333,[-0,-1600]).T(1.388,[-400,-1600]).T(1.444,[-800,-1600]).T(1.5,[-1200,-1600]).T(1.555,[-1600,-1600]).T(1.611,[-2000,-1600]).T(1.666,[-0,-2000]).T(1.722,[-400,-2000]).T(1.777,[-800,-2000]).T(1.833,[-1200,-2000]).T(1.888,[-1600,-2000]).T(1.944,[-2000,-2000]).T(2,[-0,-2400]).T(2.055,[-400,-2400]).T(2.111,[-800,-2400]).T(2.166,[-1200,-2400]).T(2.215,[-2000,-2000]).T(2.271,[-0,-2400]).T(2.326,[-400,-2400]).T(2.382,[-800,-2400]).T(2.437,[-1200,-2400]).T(2.5,[-2000,-2000]).T(2.556,[-0,-2400]).T(2.611,[-400,-2400]).T(2.667,[-800,-2400]).T(2.722,[-1200,-2400]).T(2.771,[-2000,-2000]).T(2.827,[-0,-2400]).T(2.882,[-400,-2400]).T(2.938,[-800,-2400]).T(2.993,[-1200,-2400]).T(3.038,[-400,-2400]).T(3.094,[-800,-2400]).T(3.149,[-1200,-2400]).T(3.198,[-2000,-2000]).T(3.254,[-0,-2400]).T(3.309,[-400,-2400]).T(3.365,[-800,-2400]).T(3.42,[-1200,-2400]).T(3.483,[-2000,-2000]).T(3.539,[-0,-2400]).T(3.594,[-400,-2400]).T(3.65,[-800,-2400]).T(3.705,[-1200,-2400]).T(3.754,[-2000,-2000]).T(3.81,[-0,-2400]).T(3.865,[-400,-2400]).T(3.921,[-800,-2400]).T(3.976,[-1200,-2400]).P(w,400).T(0,400,_,_,0);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-116472068");