
(function($,Edge,compId){var _=null,y=true,n=false,e19='${_Secondary-Attribute}',x8='700',e29='${_Monster-Image}',x35='935px',a='Base State',x33='dice-roll-sprite',bsz='background-size',x26='hidden',dt='Default Timeline',i='none',e28='${_Monster-Title}',lf='left',e20='${_Status}',e21='${_Monster-Description}',x23='bold',bp='background-position',bg='background-color',x37='auto',fs='font-size',tp='top',ta='text-align',ov='overflow',xc='rgba(0,0,0,1)',x17='stage',t='transform',x2='4.0.0.359',c='color',x13='rgba(0,0,0,0)',x36='990px',g='image',po='center',x39='dice-roll-sprite_symbol_1',e30='${_diceRoll}',e42='${_dice-roll-sprite}',x40='@@0@@px @@1@@px',x='text',x6='15',x34='0px',h='height',x22='\'Lucida Console\', Monaco, monospace',p='px',o='opacity',rz='rotateZ',e41='${symbolSelector}',r='deg',x1='4.0.0',x16='Arial, Helvetica, sans-serif',s='style',x7='Lucida Console, Monaco, monospace',x18='rgba(192,192,192,0)',x4='rgba(192,192,192,0.00)',e32='${_Primary-Attribute}',e31='${_PrimaryAttLabel}',x24='rgba(255,255,255,0.00)',w='width',m='rect',x12='24',ql='linear',x3='horizontal',e27='${_SecondaryAttLabel}',ff='font-family',e25='${_Stage}',l='normal';var im='images/';var g14='monster.png',g38='dice-roll-sprite.png';var s9="Secondary Attribute",s15="Status Message",s10="Description goes right here and takes up a couple of lines.",s5="Primary Attribute",s11="Monster Title";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Primary-Attribute',t:m,r:['25px','307px','457px','68px','auto','auto'],f:[x4],s:[0,"rgb(0, 0, 0)",i]},{id:'Secondary-Attribute',t:m,r:['242px','671px','457px','68px','auto','auto'],f:[x4],s:[0,"rgb(0, 0, 0)",i]},{id:'PrimaryAttLabel',t:x,r:['23px','282px','457px','auto','auto','auto'],text:s5,n:[x7,x6,xc,x8,i,""]},{id:'SecondaryAttLabel',t:x,r:['242px','640px','173px','auto','auto','auto'],text:s9,n:[x7,x6,xc,x8,i,""]},{id:'Monster-Description',t:x,r:['23px','562px','422px','78px','auto','auto'],text:s10,n:[x7,x6,xc,x8,i,""]},{id:'Monster-Title',t:x,r:['37px','520px','422px','auto','auto','auto'],text:s11,align:"center",n:[x7,x12,xc,x8,i,""]},{id:'Monster-Image',t:g,r:['67px','39px','349px','367px','auto','auto'],f:[x13,im+g14,'0px','0px']},{id:'Status',t:x,r:['27px','21px','445px','87px','auto','auto'],text:s15,align:"center",n:[x16,x12,xc,l,i,""]},{id:'diceRoll',t:m,r:['198','241','auto','auto','auto','auto']}],sI:[{id:'diceRoll',sN:'dice-roll-sprite_symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:13292,a:y,l:{"monster-attacks":1066,"block":2458,"player-attacks":5084,"battle-results":6931,"tie-game":8883,"tiebreaker":12542,"monster-wins":12792,"player-wins":13106,"loop":13292},tt:[]}}},"dice-roll-sprite_symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x33,t:g,r:[x34,x34,x35,x36,x37,x37],f:[x13,im+g38,x34,x34,x35,x36]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2583,a:n,l:{"roll":83,"loop":927,"frame-1":1000,"frame-2":1083,"frame-3":1166,"frame-4":1250,"frame-5":1333,"frame-6":1416,"frame-7":1500,"frame-8":1583,"frame-9":1666,"frame-10":1750,"frame-11":1833,"frame-12":1916,"frame-13":2000,"frame-14":2083,"frame-15":2166,"frame-16":2250,"frame-17":2333,"frame-18":2416,"frame-19":2500,"frame-20":2583},tt:[]}}}};var S1=symbols[x17];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e19).P(bg,x18,c).P(tp,671).P(lf,242).P(w,173);A1.A(e20).P(tp,21).P(ta,po).P(h,87).P(lf,27).P(w,445);A1.A(e21).P(tp,562).P(fs,14).P(ff,x22).P(h,78).P("font-weight",x23).P(lf,37).P(w,422);A1.A(e25).P(bg,x24,c).P(w,500).P(h,800).P(ov,x26);A1.A(e27).P(tp,640).P(fs,14).P(ff,x22).P(h,31).P("font-weight",x23).P(lf,242).P(w,173);A1.A(e28).P(tp,520).P(fs,24).P(ta,po).P(ff,x22).P(h,31).P("font-weight",x23).P(lf,37).P(w,422);A1.A(e29).P(h,367).P(lf,67).P(w,349).P(tp,111).T(2.458,111);A1.A(e30).P(tp,191).P(lf,156).T(11.26,156).P(o,0,_,_,"").T(0,1,0.143,ql).T(2.25,0,0.143).T(2.458,1,0.143).T(4.876,0,0.143).T(5.084,1,0.143).T(6.78,0,0.151).T(8.882,1,0.143).T(10.658,0,0.13).T(10.787,1,0.068).T(12.393,0,0.149);A1.A(e31).P("font-weight",x23).P(ff,x22).P(tp,640).T(0,640).P(h,31).T(0,31).P(w,161).T(0,161).P(lf,37).T(0,37).P(fs,14).T(0,14);A1.A(e32).P(bg,x4,c).P(tp,671).T(0,671).P(lf,37).T(0,37).P(w,173).T(0,173);var S2=symbols[x39];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e41).P(h,198).P(w,187);A2.A(e42).P(rz,0,t,_,r).P(bsz,[935,990],_,x40).P(tp,0,_,_,p).T(0,0).P(h,198).T(0,198,_,_,0).P(bp,[-561,-594],_,x40).T(0,[-748,-594]).T(0.083,[0,-792]).T(0.167,[-187,-792]).T(0.25,[-374,-792]).T(0.333,[-561,-792]).T(0.417,[-748,-792]).T(0.5,[0,-792]).T(0.594,[-374,-792],_,_,[-187,-792]).T(0.675,[-187,-792]).T(0.75,[-561,-792]).T(0.834,[-748,-792]).T(0.927,[-561,-792]).T(1,[0,0]).T(1.083,[-187,0]).T(1.166,[-374,0]).T(1.25,[-561,0]).T(1.333,[-748,0]).T(1.416,[0,-198]).T(1.5,[-187,-198]).T(1.583,[-374,-198]).T(1.666,[-561,-198]).T(1.75,[-748,-198]).T(1.833,[0,-396]).T(1.916,[-187,-396]).T(2,[-374,-396]).T(2.083,[-561,-396]).T(2.166,[-748,-396]).T(2.25,[0,-594]).T(2.333,[-187,-594]).T(2.416,[-374,-594]).T(2.5,[-561,-594]).T(2.583,[-748,-594]).P(lf,0).T(0,0).P(w,187).T(0,187,_,_,0);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"monster");