
(function($,Edge,compId){var _=null,y=true,n=false,x60='petal2',x150='crown-flame-sprite-small',e22='${_petals}',x97='15px',x1='2.0.1',x86='95px',x113='EllipseCopy',x66='231px',x4='rgba(200,37,37,0.00)',e140='${_Ellipse}',e135='${_EllipseCopy2}',i='none',x244='2550px',x44='141px',e129='${_petal-4}',x201='rgba(255,209,0,1.00)',x231='rgba(154,0,255,1.00)',x69='petal3',e145='${_EllipseCopy}',x89='112px',e11='${_petal-trigger}',x27='500px',x266='-1800px',x252='100px',x7='stage',x54='shadow5',rz='rotateZ',c='color',e20='${_background2}',x226='rl5-1',zx='scaleX',x139='132.5px 54px',x161='1',x34='0',oz='-moz-transform-origin',x128='113.89px 55.41px',x56='122px',x202='rl1-1',x214='rl3-1',x119='petals',x52='18px',x57='28px',x112='EllipseCopy2',qoi='easeOutQuint',oo='-o-transform-origin',x176='rightleaf6',x166='rightleaf1',x198='132px',x184='38px',x116='48px',qq='easeInOutQuad',e280='${_triad-sprite-2}',x191='121px',x73='shadow3',x39='torch',qii='easeInQuint',x258='120px',x75='109px',x208='rgb(255,255,255)',x154='rect(0px 40px 60px 0px)',x233='99px',x204='79px',x173='273',x167='115',x165='leftleaf3',bsz='background-size',e31='${_background}',x263='triad-sparkles-sprite-small',s='style',x126='135.5px 13.75px',x88='petal-5',x178='96',e127='${_shadow6}',x96='petal6',lf='left',x180='262',x70='126px',e123='${_shadow2}',bp='background-position',x29='auto',x49='107px',x104='101px',tp='top',e14='${_crown-flame-13}',ov='overflow',qk='easeInOutBack',x251='5933px',t='transform',x16='rgba(255,255,255,0.00)',x270='-204px',x5='rgba(0,0,0,0)',r='deg',e141='${_shadow1}',x25='background',x93='162px',e148='${_petal-5}',x41='@@0@@px @@1@@px',x84='shadow4',m='rect',h='height',e21='${_crown_flame_1}',x33='torch-sprite-short-desat',e19='${_crown-flame-15}',x110='Ellipse',on='msTransformOrigin',x170='rightleaf3',x196='ll3',x108='50%',e249='${_eye_sprite_sheet_small2}',x162='leftleaf2',x101='174px',x159='leftleaf',x142='148px 59px',e143='${_shadow4}',x254='triad-sprite',cl='clip',x58='12px',e12='${_crown-flame-18}',x189='rgba(255,0,0,1.00)',x9='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x99='shadow',x124='136.5px 15.75px',e188='${_ll1}',e262='${_second-triad-sprite-sheet_small}',x261='triad-sprite-2',om='-ms-transform-origin',x42='shadow6',x190='ll2',x80='153px',x225='rgba(255,255,255,1)',x109='rgba(0,0,0,0.50)',x172='rightleaf4',e218='${_rl3-1}',x279='horned-god-symbol',x175='317',x160='65',e182='${_leftleaf}',x213='rgba(0,108,255,1.00)',e40='${_torch-sprite-short-desat}',x197='63px',x221='53px',x105='83px',x67='30px',x107='10px',x248='eye-sprite',x37='rect(0px 5400pxpx 250pxpx 0px)',e15='${_crown-flame-17}',x2='2.0.0',x238='rl7-1',p='px',e268='${_triad-sparkles-sprite-small}',e136='${_petal3}',x168='rightleaf2',x114='Arm-small',e32='${symbolSelector}',x100='52px',x234='62px',x158='horned-god',x82='23px',x149='123.2px 14.2px',x45='33px',x85='133px',x151='-3px',x144='121.5px 57px',x164='24',ql='linear',x186='ll1',x284='rect(0px 98px 100px 0px)',or='-webkit-transform-origin',e283='${_sparkle-sprite}',e282='${_first-triad-sprite}',x275='-639px',e194='${_ll2}',x277='0.44106',e281='${_eye-sprite}',x179='rightleaf7',x273='42',x272='rect(0px 5933pxpx 100pxpx 0px)',x271='first-triad-sprite',x276='71px',x130='131.5px 8px',x137='138.4px 7.09px',x267='sparkle-sprite',x264='rect(0px 120px 120px 0px)',a='Base State',e241='${_rl7-1}',x257='7200px',x256='second-triad-sprite-sheet_small',x18='hidden',e255='${_first-triad-sprite-sheet_small}',x117='197px',dt='Default Timeline',x250='first-triad-sprite-sheet_small',x115='-169px',x232='rl6-1',e121='${_Arm-small}',x245='25px',x243='eye_sprite_sheet_small2',x242='rgba(207,0,255,1.00)',x259='rect(0px 7200pxpx 120pxpx 0px)',x46='16px',x239='140px',x237='rgba(255,0,242,1.00)',e236='${_rl6-1}',x269='-181px',x183='66px',x246='rect(0px 50px 25px 0px)',x106='70px',x215='80px',e230='${_rl5-1}',x153='60px',bg='background-color',x122='@@0@@% @@1@@%',x76='21px',x228='111px',x227='86px',x43='-16px',x224='rgba(29,0,255,1.00)',e13='${_crown-flame-14}',e223='${_rl4-1}',x169='160',x174='rightleaf5',x220='rl4-1',x35='5400px',x219='rgba(0,66,255,1.00)',zy='scaleY',x111='ellipse',x28='803px',x278='rect(0px 2550pxpx 25pxpx 0px)',x74='155px',x61='124px',x185='rgba(255,255,255,1.00)',x51='27px',x216='88px',g='image',e24='${_crown-flame-1}',x274='29',e212='${_rl2-1}',x192='87px',x102='123px',x147='136px 7px',e8='${_crown-flame-12}',x81='105px',x77='8px',x3='2.0.1.268',e10='${_crown-flame-16}',e200='${_ll3}',e206='${_rl1-1}',x55='72px',x181='tree',x26='0px',x195='rgba(255,139,0,1.00)',x207='rgba(0,143,255,1.00)',e131='${_petal1}',x90='13px',e17='${_Stage}',x209='rl2-1',e120='${_shadow}',x65='shadow1',x62='24px',x92='shadow2',x63='14px',x163='48',x48='petal1',e133='${_shadow5}',e138='${_shadow3}',x177='303',o='opacity',x203='84px',x210='94px',x171='212',e157='${_crown-flame-sprite-small}',x132='120.44px 15.17px',x156='crown-flame-1',e23='${_torch}',x79='petal-4',e146='${_petal2}',w='width',x36='250px',x71='-1px',x134='135px 68px',e125='${_petal6}',x94='74px',xc='rgba(0,0,0,1)',x50='6px',x152='1200px';var im='images/';var g91='petal-5.png',g95='shadow2.png',g98='petal6.png',g260='second-triad-sprite-sheet_small.png',g72='petal3.png',g78='shadow3.png',g87='shadow4.png',g103='shadow.png',g6='head.png',g68='shadow1.png',g222='rl4-1.png',g187='ll1-1.png',g211='rl2-1.png',g193='ll2-1.png',g30='background.jpg',g59='shadow5.png',g265='triad-sparkles-sprite-small.png',g240='rl7-1.png',g217='rl3-1.png',g199='ll3-1.png',g47='shadow6.png',g155='crown-flame-sprite-small.png',g205='rl1-1.png',g235='rl6-1.png',g118='Arm-small.png',g253='first-triad-sprite-sheet_small.png',g38='torch-sprite-short-desat.png',g247='eye_sprite_sheet_small.png',g229='rl5-1.png',g53='petal1.png',g64='petal2.png',g83='petal-4.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'background2',t:m,r:['-49px','-78px','auto','auto','auto','auto'],tf:[[],[],[],['0.80946','0.80946']]},{id:'tree',t:m,r:['-1','-1','auto','auto','auto','auto']},{id:'petals',t:m,r:['99','464','auto','auto','auto','auto']},{id:'petal-trigger',t:m,r:['200px','345px','61px','155px','auto','auto'],f:[x4],s:[0,"rgb(0, 0, 0)",i]},{id:'torch',t:m,r:['0','374','auto','auto','auto','auto'],cl:['rect(0px 5400pxpx 250pxpx 0px)'],tf:[[],[],[],['0.80946','0.80946']]},{id:'crown-flame-18',t:m,r:['-89px','159px','auto','auto','auto','auto'],cl:['rect(0px 40px 60px 0px)'],filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.50513','0.50513']]},{id:'crown-flame-17',t:m,r:['-174px','129px','auto','auto','auto','auto'],cl:['rect(0px 40px 60px 0px)'],o:0.69183349609375,filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.50513','0.50513']]},{id:'head2',t:g,r:['135','99','92px','121px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'crown-flame-16',t:m,r:['-18px','146px','auto','auto','auto','auto'],cl:['rect(0px 40px 60px 0px)'],filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.60013','0.60013']]},{id:'crown-flame-13',t:m,r:['-132px','119px','auto','auto','auto','auto'],cl:['rect(0px 1200pxpx 60pxpx 0px)'],o:0.848388671875,filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.60013','0.60013']]},{id:'crown-flame-15',t:m,r:['81px','131px','auto','auto','auto','auto'],cl:['rect(0px 40px 60px 0px)'],filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.79327','0.79327']]},{id:'crown-flame-12',t:m,r:['-119px','111px','auto','auto','auto','auto'],cl:['rect(0px 1200pxpx 60pxpx 0px)'],filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.60013','0.60013']]},{id:'crown-flame-1',t:m,r:['182','174','auto','auto','auto','auto'],cl:['rect(0px 1200pxpx 60pxpx 0px)'],filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0]},{id:'crown-flame-14',t:m,r:['67px','119px','auto','auto','auto','auto'],cl:['rect(0px 40px 60px 0px)'],filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.80946','0.80946']]},{id:'crown_flame_1',t:m,r:['41px','109px','auto','auto','auto','auto'],cl:['rect(0px 1200pxpx 60pxpx 0px)'],filter:[0,10,1,0.5,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0.80946','0.80946']]},{id:'horned-god-symbol',t:m,r:['181','204','auto','auto','auto','auto']}],sI:[{id:'crown-flame-14',sN:'crown-flame-1'},{id:'crown-flame-15',sN:'crown-flame-1'},{id:'horned-god-symbol',sN:'horned-god-symbol'},{id:'tree',sN:'tree'},{id:'crown-flame-12',sN:'crown-flame-1'},{id:'crown-flame-16',sN:'crown-flame-1'},{id:'crown-flame-13',sN:'crown-flame-1'},{id:'crown-flame-1',sN:'crown-flame-1'},{id:'torch',sN:'torch'},{id:'crown_flame_1',sN:'crown-flame-1'},{id:'crown-flame-18',sN:'crown-flame-1'},{id:'crown-flame-17',sN:'crown-flame-1'},{id:'petals',sN:'petals'},{id:'background2',sN:'background'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"background":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x25,t:g,r:[x26,x26,x27,x28,x29,x29],f:[x5,im+g30,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"torch":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x33,r:[x34,x34,x35,x36,x29,x29],cl:[x37],f:[x5,im+g38,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1733.3333333333,a:n,l:{"loop point":700},tt:[]}}},"petals":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x42,t:g,r:[x43,x44,x45,x46,x29,x29],f:[x5,im+g47,x26,x26]},{id:x48,t:g,r:[x49,x50,x51,x52,x29,x29],f:[x5,im+g53,x26,x26]},{id:x54,t:g,r:[x55,x56,x57,x58,x29,x29],f:[x5,im+g59,x26,x26]},{id:x60,t:g,r:[x61,x26,x62,x63,x29,x29],f:[x5,im+g64,x26,x26]},{id:x65,t:g,r:[x66,x56,x67,x63,x29,x29],f:[x5,im+g68,x26,x26]},{id:x69,t:g,r:[x70,x71,x62,x46,x29,x29],f:[x5,im+g72,x26,x26]},{id:x73,t:g,r:[x74,x75,x76,x77,x29,x29],f:[x5,im+g78,x26,x26]},{id:x79,t:g,r:[x80,x81,x82,x58,x29,x29],f:[x5,im+g83,x26,x26]},{id:x84,t:g,r:[x85,x86,x51,x58,x29,x29],f:[x5,im+g87,x26,x26]},{id:x88,t:g,r:[x89,x77,x82,x90,x29,x29],f:[x5,im+g91,x26,x26]},{id:x92,t:g,r:[x93,x94,x51,x90,x29,x29],f:[x5,im+g95,x26,x26]},{id:x96,t:g,r:[x61,x50,x82,x97,x29,x29],f:[x5,im+g98,x26,x26]},{t:g,id:x99,o:0.32,r:[x26,x100,x101,x102,x29,x29],f:[x5,im+g103,x26,x26]},{r:[x104,x105,x106,x107,x29,x29],br:[x108,x108,x108,x108],f:[x109],id:x110,s:[0,xc,i],t:x111,boxShadow:['',0,0,8,3,x109]},{r:[x104,x105,x106,x107,x29,x29],br:[x108,x108,x108,x108],f:[x109],id:x112,s:[0,xc,i],t:x111,boxShadow:['',0,0,8,3,x109]},{r:[x104,x105,x106,x107,x29,x29],br:[x108,x108,x108,x108],f:[x109],id:x113,s:[0,xc,i],t:x111,boxShadow:['',0,0,8,3,x109]},{t:g,id:x114,o:1,r:[x49,x115,x116,x117,x29,x29],f:[x5,im+g118,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4800,a:y,l:{"end":4449,"fade start":4481,"fade out":4800},tt:[]}}},"crown-flame-1":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x150,r:[x26,x151,x152,x153,x29,x29],cl:[x154],f:[x5,im+g155,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1200,a:n,tt:[]}}},"horned-god":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:y,tt:[]}}},"tree":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x159,t:m,r:[x160,x161,x29,x29,x29,x29]},{id:x162,t:m,r:[x163,x164,x29,x29,x29,x29]},{id:x165,t:m,r:[x34,x34,x29,x29,x29,x29]},{id:x166,t:m,r:[x167,x34,x29,x29,x29,x29]},{id:x168,t:m,r:[x169,x34,x29,x29,x29,x29]},{id:x170,t:m,r:[x171,x34,x29,x29,x29,x29]},{id:x172,t:m,r:[x173,x34,x29,x29,x29,x29]},{id:x174,t:m,r:[x175,x34,x29,x29,x29,x29]},{id:x176,t:m,r:[x177,x178,x29,x29,x29,x29]},{id:x179,t:m,r:[x180,x34,x29,x29,x29,x29]}],sI:[{id:'leftleaf3',sN:'leftleaf3'},{id:'rightleaf7',sN:'rightleaf7'},{id:'leftleaf2',sN:'leftleaf2'},{id:'rightleaf2',sN:'rightleaf2'},{id:'rightleaf3',sN:'rightleaf3'},{id:'rightleaf6',sN:'rightleaf6'},{id:'rightleaf1',sN:'rightleaf1'},{id:'leftleaf',sN:'leftleaf'},{id:'rightleaf4',sN:'rightleaf4'},{id:'rightleaf5',sN:'rightleaf5'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:n,tt:[{id:"eid2220",tr:[function(e,d){this.eSA(e,d);},['play','${_leftleaf3}',[0]],""],p:33.333333333333},{id:"eid2218",tr:[function(e,d){this.eSA(e,d);},['play','${_leftleaf}',[0]],""],p:66.666666666667},{id:"eid2219",tr:[function(e,d){this.eSA(e,d);},['play','${_leftleaf2}',[0]],""],p:100},{id:"eid2221",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf1}',[0]],""],p:200},{id:"eid2222",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf2}',[0]],""],p:300},{id:"eid2223",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf3}',[0]],""],p:367},{id:"eid2224",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf4}',[0]],""],p:467},{id:"eid2227",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf7}',[0]],""],p:566.66666666667},{id:"eid2225",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf5}',[0]],""],p:666.66666666667},{id:"eid2226",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf6}',[0]],""],p:700},{id:"eid2469",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf4}',[0]],""],p:1667},{id:"eid2470",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf5}',[0]],""],p:1800},{id:"eid2471",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf3}',[0]],""],p:1900},{id:"eid2472",tr:[function(e,d){this.eSA(e,d);},['play','${_rightleaf2}',[0]],""],p:2000},{id:"eid2473",tr:[function(e,d){this.eSA(e,d);},['play','${_leftleaf3}',[0]],""],p:2167},{id:"eid2474",tr:[function(e,d){this.eSA(e,d);},['play','${_leftleaf2}',[0]],""],p:2300},{id:"eid2475",tr:[function(e,d){this.eSA(e,d);},['play','${_leftleaf}',[0]],""],p:2400}]}}},"leftleaf":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x26,x26,x183,x184,x29,x29],filter:[0,0,1,2,0,0,0,0,x185,0,0,0],id:x186,tf:[],t:g,f:[x5,im+g187,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"leftleaf2":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x190,t:g,r:[x26,x26,x191,x192,x29,x29],f:[x5,im+g193,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"leftleaf3":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x196,t:g,r:[x26,x26,x197,x198,x29,x29],f:[x5,im+g199,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"rightleaf1":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x202,t:g,r:[x26,x26,x203,x204,x29,x29],f:[x5,im+g205,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"rightleaf2":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x209,t:g,r:[x26,x26,x192,x210,x29,x29],f:[x5,im+g211,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"rightleaf3":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x214,t:g,r:[x26,x26,x215,x216,x29,x29],f:[x5,im+g217,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"rightleaf4":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x220,t:g,r:[x26,x26,x183,x221,x29,x29],f:[x5,im+g222,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"rightleaf5":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x226,t:g,r:[x26,x26,x227,x228,x29,x29],f:[x5,im+g229,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"rightleaf6":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x232,t:g,r:[x26,x26,x233,x234,x29,x29],f:[x5,im+g235,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"rightleaf7":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x238,t:g,r:[x26,x26,x239,x75,x29,x29],f:[x5,im+g240,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"eye-sprite":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x243,r:[x26,x26,x244,x245,x29,x29],cl:[x246],f:[x5,im+g247,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:n,tt:[]}}},"triad-sprite":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x250,t:g,r:[x34,x34,x251,x252,x29,x29],f:[x5,im+g253,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:n,tt:[]}}},"triad-sprite-2":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x256,r:[x26,x26,x257,x258,x29,x29],cl:[x259],f:[x5,im+g260,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:n,tt:[]}}},"sparkle-sprite":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x263,r:[x51,x26,x257,x258,x29,x29],cl:[x264],f:[x5,im+g265,x266,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4000,a:n,tt:[]}}},"horned-god-symbol":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x261,t:m,r:[x269,x270,x29,x29,x29,x29]},{id:x271,t:m,cl:[x272],r:[x273,x274,x29,x29,x29,x29]},{r:[x275,x276,x29,x29,x29,x29],id:x248,tf:[[],[],[],[x277,x277]],cl:[x278],t:m},{id:x267,t:m,cl:[x259],r:[x269,x270,x29,x29,x29,x29]}],sI:[{id:'sparkle-sprite',sN:'sparkle-sprite'},{id:'triad-sprite-2',sN:'triad-sprite-2'},{id:'eye-sprite',sN:'eye-sprite'},{id:'first-triad-sprite',sN:'first-triad-sprite'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:10467,a:n,tt:[{id:"eid2579",tr:[function(e,d){this.eSA(e,d);},['play','${_first-triad-sprite}',[0]],""],p:0},{id:"eid1306",tr:[function(e,d){this.eSA(e,d);},['play','${_sparkle-sprite}',[0]],""],p:1000},{id:"eid1307",tr:[function(e,d){this.eSA(e,d);},['play','${_triad-sprite-2}',[0]],""],p:2000},{id:"eid1308",tr:[function(e,d){this.eSA(e,d);},['play','${_eye-sprite}',[0]],""],p:3000},{id:"eid2580",tr:[function(e,d){this.eSA(e,d);},['play','${_first-triad-sprite}',[0]],""],p:4000},{id:"eid1333",tr:[function(e,d){this.eSA(e,d);},['play','${_triad-sprite-2}',[0]],""],p:5000},{id:"eid1363",tr:[function(e,d){this.eSA(e,d);},['play','${_sparkle-sprite}',[0]],""],p:5500},{id:"eid1364",tr:[function(e,d){this.eSA(e,d);},['play','${_eye-sprite}',[0]],""],p:6467},{id:"eid1462",tr:[function(e,d){this.eSA(e,d);},['stop','${_sparkle-sprite}',[]],""],p:10467},{id:"eid1464",tr:[function(e,d){this.eSA(e,d);},['stop','${_triad-sprite-2}',[]],""],p:10467},{id:"eid2581",tr:[function(e,d){this.eSA(e,d);},['stop','${_first-triad-sprite}',[]],""],p:10467},{id:"eid1461",tr:[function(e,d){this.eSA(e,d);},['stop','${_eye-sprite}',[]],""],p:10467}]}}},"first-triad-sprite":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x26,x26,x251,x252,x29,x29],id:x250,t:g,cl:[x284],f:[x5,im+g253,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3000,a:n,tt:[]}}}};var S1=symbols[x7];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e8).P(tp,111).P(zy,0.60013,t,_,"").P("filter.hue-rotate",10,"subproperty",_,r).P(zx,0.60013,t,_,"").P(cl,[0,40,60,0],_,x9).P(lf,-119,_,_,p).P("filter.saturate",0.5,"subproperty",_,"");A1.A(e10).P(tp,146).P(zy,0.60013,t,_,"").P("filter.hue-rotate",10,"subproperty",_,r).P(zx,0.60013,t,_,"").P(cl,[0,40,60,0],_,x9).P(lf,-18,_,_,p).P("filter.saturate",0.5,"subproperty",_,"");A1.A(e11).P(bg,x4,c).P(h,155).P(tp,345).P(lf,200).P(w,61);A1.A(e12).P(tp,159).P(zy,0.50513,t,_,"").P("filter.hue-rotate",10,"subproperty",_,r).P(zx,0.50513,t,_,"").P(cl,[0,40,60,0],_,x9).P(lf,-89,_,_,p).P("filter.saturate",0.5,"subproperty",_,"");A1.A(e13).P(tp,119).P(zy,0.80946,t,_,"").P("filter.hue-rotate",10,"subproperty",_,r).P(zx,0.80946,t,_,"").P(lf,67,_,_,p).P(cl,[0,40,60,0],_,x9).P("filter.saturate",0.5,"subproperty",_,"");A1.A(e14).P(tp,119).P(zx,0.60013,t,_,"").P(zy,0.60013,t).P(cl,[0,40,60,0],_,x9).P("filter.hue-rotate",10,"subproperty",_,r).P(o,0.85,_,_,"").P(lf,-132,_,_,p).P("filter.saturate",0.5,"subproperty",_,"");A1.A(e15).P(tp,129).P(zx,0.50513,t,_,"").P(zy,0.50513,t).P(cl,[0,40,60,0],_,x9).P("filter.hue-rotate",10,"subproperty",_,r).P(o,0.69,_,_,"").P(lf,-174,_,_,p).P("filter.saturate",0.5,"subproperty",_,"");A1.A(e17).P(bg,x16,c).P(ov,x18).P(h,650).P(w,403);A1.A(e19).P(tp,131).P(zy,0.79327,t,_,"").P("filter.hue-rotate",10,"subproperty",_,r).P(zx,0.79327,t,_,"").P(cl,[0,40,60,0],_,x9).P(lf,81,_,_,p).P("filter.saturate",0.5,"subproperty",_,"");A1.A(e20).P(zx,0.80946,t,_,"").P(tp,-78,_,_,p).P(zy,0.80946,t,_,"").P(lf,-49,_,_,p);A1.A(e21).P(tp,109).P(zy,0.80946,t,_,"").P(zx,0.80946,t).P(cl,[0,40,60,0],_,x9).P(lf,41,_,_,p).P("filter.saturate",1,"subproperty",_,"").P("filter.hue-rotate",12,"subproperty",_,r).T(0,12);A1.A(e22).P(zx,1,t,_,"").P(zy,1,t).P(lf,96,_,_,p).P(tp,473).T(0,473);A1.A(e23).P(zy,0.80946,t,_,"").P(zx,0.80946,t).P(tp,267,_,_,p).T(0,267).P(cl,[0,180,250,0],_,x9).T(0,[0,180,250,0]).P(lf,-510).T(0,-510);A1.A(e24).P("filter.hue-rotate",10,"subproperty",_,r).P("filter.saturate",0.5,"subproperty",_,"").P(tp,156,_,_,p).T(0,109).P(zy,0.60013,t,_,"").T(0,0.6,_,_,0.6).P(zx,0.62681,t).T(0,0.63,_,_,0.63).P(lf,170,_,_,p).T(0,-87).P(cl,[0,40,60,0],_,x9).T(0,[0,40,60,0]);var S2=symbols[x25];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e31).P(lf,0).P(tp,0);A2.A(e32).P(h,803).P(w,500);var S3=symbols[x39];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e32).P(h,250).P(w,5400);A3.A(e40).P(bp,[0,0],_,x41).T(0,[0,0]).T(0.033,[-180,0]).T(0.067,[-360,0]).T(0.1,[-540,0]).T(0.133,[-720,0]).T(0.167,[-900,0]).T(0.2,[-1080,0]).T(0.233,[-1260,0]).T(0.267,[-1440,0]).T(0.3,[-1620,0]).T(0.333,[-1800,0]).T(0.367,[-1980,0]).T(0.4,[-2160,0]).T(0.433,[-2340,0]).T(0.467,[-2520,0]).T(0.5,[-2700,0]).T(0.533,[-2880,0]).T(0.567,[-3060,0]).T(0.6,[-3240,0]).T(0.633,[-3420,0]).T(0.667,[-3600,0]).T(0.7,[-3780,0]).T(0.733,[-3600,0]).T(0.767,[-3420,0]).T(0.8,[-3240,0]).T(0.833,[-3060,0]).T(0.867,[-2880,0]).T(0.9,[-2700,0]).T(0.933,[-2520,0]).T(0.967,[-2340,0]).T(1,[-2160,0]).T(1.033,[-1980,0]).T(1.067,[-1800,0]).T(1.1,[-1980,0]).T(1.133,[-2160,0]).T(1.167,[-2340,0]).T(1.2,[-2520,0]).T(1.233,[-2700,0]).T(1.267,[-2880,0]).T(1.3,[-3060,0]).T(1.333,[-3240,0]).T(1.367,[-3420,0]).T(1.4,[-3600,0]).T(1.433,[-3780,0]).T(1.466,[-3960,0],_,_,[-3960,0]).T(1.5,[-4140,0]).T(1.533,[-4320,0]).T(1.566,[-4500,0]).T(1.6,[-4680,0]).T(1.633,[-4860,0]).T(1.666,[-5040,0]).T(1.7,[-5220,0]).T(1.733,[-5400,0]).P(cl,[0,180,250,0],_,x9).T(0,[0,180,250,0]);var S4=symbols[x119];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e120).P(tp,52).P(o,0.32,_,_,"").P(lf,0,_,_,p);A4.A(e32).P(h,175).P(w,174);A4.A(e121).P(o,1,_,_,"").P(w,48,_,_,p).P(tp,-169).T(0,-169).P(rz,360,t,_,r).T(0,362,0.4,qk).T(0.4,360,0.436).P(zx,1,t,_,"").T(0,1).P(h,195,_,_,p).T(0,195).P(lf,109).T(0,109).P(or,[26,10],_,x122).T(0,[26,10]).P(oz,[26,10],_,x122).T(0,[26,10]).P(om,[26,10],_,x122).T(0,[26,10]).P(on,[26,10],_,x122).T(0,[26,10]).P(oo,[26,10],_,x122).T(0,[26,10]);A4.A(e123).P(h,13).P(w,27).P(zx,0,t,_,"").T(1.361,1,0.49,ql).P(o,0).T(0.467,0).T(1.361,1,0.49).T(4.449,0,0.218).T(4.7,0).P(zy,0,t).T(1.361,1,0.49).P("location",x124,"motion").T(1.361,[[136.5,15.75,0,0],[133.23,30.67,0.38,18.15,0.52,24.91],[140.3,48.5,3.48,23.45,2.65,17.83],[137.5,63.5,0,0]],0.49).T(1.851,[[137.5,63.5,0,0],[137.47,72.39,12.21,5.46,16.08,7.19],[161.15,73.18,32.45,6.64,18.4,3.77],[175.5,80.5,0,0]],1.14);A4.A(e125).P(zx,1,t,_,"").T(4.449,0.9,0.351,ql).P(o,0).T(0.1,1,0.367).T(4.481,0,0.319).P(zy,1,t).T(4.449,0.9,0.351).P("location",x126,"motion").T(1.361,[[135.5,13.75,0,0],[132.23,28.67,0.38,18.15,0.52,24.91],[139.3,46.5,3.48,23.45,2.65,17.83],[136.5,61.5,0,0]],0.49).T(1.851,[[136.5,61.5,0,0],[136.47,70.39,12.21,5.46,16.08,7.19],[160.15,71.18,32.45,6.64,18.4,3.77],[174.5,78.5,0,0]],1.14).T(4.449,[[174.5,78.5,0,0],[174.5,88.5,0,0]],0.351);A4.A(e127).P(zx,0,t,_,"").T(0.533,0.9,0.5,ql).P(o,0).T(0.467,0).T(0.533,1,0.5).T(4.449,0,0.218).T(4.7,0).P(zy,0,t).T(0.533,0.9,0.5).P("location",x128,"motion").T(1.033,[[113.89,55.41,0,0],[110.18,66.63,13.45,21.87,11.76,19.13],[125.83,79.66,-6.04,32.04,-3.59,19.03],[111.06,89.91,-31.77,7.29,-40.09,9.2],[82.42,102.52,-32.23,6.13,-40.81,7.76],[15.21,103.69,-62.19,0.73,-39.18,0.46],[0.58,125.94,-122.32,50.13,-23.13,9.48],[0.5,149,0,0]],3.241);A4.A(e129).P(zx,0.9,t,_,"").T(0.836,1,2.63,ql).T(4.449,0.9,0.351).P(o,0).T(0.1,1,0.367).T(4.481,0,0.319).P(zy,0.9,t).T(0.836,1,2.63).T(4.449,0.9,0.351).P("location",x130,"motion").T(0.836,[[131.5,8,0,0],[131.5,52,0,0]],0.401).T(1.237,[[131.5,52,0,0],[164.5,111,0,0]],2.229).T(4.449,[[164.5,111,0,0],[164.5,121,0,0]],0.351);A4.A(e131).P(zx,0.6,t,_,"").T(0.533,0.9,0.478,ql).T(1.011,1,3.263).T(4.274,0.9,0.526).P(o,0).T(0.1,1,0.367).T(4.322,0,0.478).P(zy,0.9,t).T(0.533,0.9).T(1.011,1,3.263).T(4.274,0.9,0.526).P("location",x132,"motion").T(0.533,[[120.44,15.17,0,0],[121.48,30.4,-4.51,14.5,-6.57,21.13],[116.29,40.37,2.53,31.73,1.29,16.19],[114.89,53.41,0,0]],0.478,qq).T(1.011,[[114.89,53.41,0,0],[111.18,64.63,13.45,21.87,11.76,19.13],[126.83,77.66,-6.04,32.04,-3.59,19.03],[112.06,87.91,-31.77,7.29,-40.09,9.2],[83.42,100.52,-32.23,6.13,-40.81,7.76],[16.21,101.69,-62.19,0.73,-39.18,0.46],[1.58,123.94,-122.32,50.13,-23.13,9.48],[1.5,147,0,0]],3.263,ql).T(4.274,[[1.5,147,0,0],[1.5,157,0,0]],0.526);A4.A(e133).P(h,12).P(w,28).P(zx,0,t,_,"").T(0.533,1,0.617,ql).P(o,0).T(0.467,0).T(0.533,1,0.617).T(4.449,0,0.218).T(4.7,0).P(zy,0,t).T(0.533,1,0.617).P("location",x134,"motion").T(1.15,[[135,68,0,0],[136.95,84.78,-17.21,21.07,-19.19,23.5],[98.8,102.36,-41.12,33.75,-27.07,22.22],[86,128,0,0]],2.426);A4.A(e135).P(bg,x109,c).P("boxShadow.color",x109,"subproperty").P(lf,133).P(tp,70).P("boxShadow.blur",8,"subproperty").P("boxShadow.spread",3,"subproperty").P("boxShadow.offsetH",0,"subproperty").P("boxShadow.offsetV",0,"subproperty").P(zx,0.26,t,_,"").T(1.033,0.3,0.828,ql).P(o,0.5).T(1.65,0,0.701).P(zy,0.26,t).T(1.033,0.4,0.828);A4.A(e136).P(zx,0.8,t,_,"").T(1.443,1,2.907,ql).T(4.449,0.9,0.351).P(o,0).T(0.1,1,0.367).T(4.481,0,0.319).P(zy,0.8,t).T(1.443,1,2.907).T(4.449,0.9,0.351).P("location",x137,"motion").T(1.033,[[138.4,7.09,0,0],[137.92,26.23,1.77,9.04,5.81,29.6],[145.72,35.37,-0.84,32.68,-0.24,9.45],[148,56,0,0]],0.41).T(1.443,[[148,56,0,0],[169.23,64.27,10.2,7.28,28.23,20.16],[173.18,77.37,11.49,8.74,11.74,8.93],[200.19,83.07,19.22,13.65,12.91,9.17],[214.63,107.57,51.71,45.32,15.99,14.01],[246,126,0,0]],2.907).T(4.449,[[246,126,0,0],[246,136,0,0]],0.351);A4.A(e138).P(h,8).P(w,21).P(zx,0,t,_,"").T(0.836,0.92,0.401,ql).T(1.237,0.92).P(o,0).T(0.467,0).T(0.836,1,0.401).T(4.449,0,0.218).T(4.7,0).P(zy,0,t).T(0.836,0.92,0.401).T(1.237,0.92).P("location",x139,"motion").T(1.237,[[132.5,54,0,0],[165.5,113,0,0]],2.229);A4.A(e140).P(bg,x109,c).P("boxShadow.color",x109,"subproperty").P("boxShadow.spread",3,"subproperty").P("boxShadow.offsetV",0,"subproperty").P("boxShadow.offsetH",0,"subproperty").P("boxShadow.blur",8,"subproperty").P(tp,81).T(1.033,81).P(zy,0.26,t,_,"").T(0.533,0.6,0.828,ql).P(zx,0.26,t).T(0.533,0.6,0.828).P(o,0.5).T(1.15,0,0.701).P(lf,92,_,_,p).T(1.033,95,0.117);A4.A(e141).P("location",x142,"motion").T(1.443,[[148,59,0,0],[169.23,67.27,10.2,7.28,28.23,20.16],[173.18,80.37,11.49,8.74,11.74,8.93],[200.19,86.07,19.22,13.65,12.91,9.17],[214.63,110.57,51.71,45.32,15.99,14.01],[246,129,0,0]],2.907,ql).P(o,0,_,_,"").T(0.467,0).T(1.033,1,0.41).T(4.449,0,0.218).T(4.7,0).P(zy,0,t).T(1.033,0.8,0.41).T(1.443,0.8).P(zx,0,t).T(1.033,0.8,0.41).T(1.443,0.8);A4.A(e143).P(h,12).P(w,27).P(zx,0,t,_,"").T(1.213,0.8,0.401,ql).T(1.614,0.8).P(o,0).T(0.467,0).T(1.213,1,0.401).T(4.449,0,0.218).T(4.7,0).P(zy,0,t).T(1.213,0.8,0.401).T(1.614,0.8).P("location",x144,"motion").T(1.614,[[121.5,57,0,0],[123.82,67.02,3,5.28,8.47,14.9],[133.2,71.9,-18.47,58.03,-2.15,6.75],[146.5,101,0,0]],1.594);A4.A(e145).P(bg,x109,c).P("boxShadow.color",x109,"subproperty").P(lf,95).P(tp,68).P("boxShadow.blur",8,"subproperty").P("boxShadow.spread",3,"subproperty").P("boxShadow.offsetH",0,"subproperty").P("boxShadow.offsetV",0,"subproperty").P(zx,0.26,t,_,"").T(1.033,0.6,0.828,ql).P(o,0.5).T(1.65,0,0.701).P(zy,0.26,t).T(1.033,0.6,0.828);A4.A(e146).P(zx,1,t,_,"").T(4.449,0.9,0.351,ql).P(o,0).T(0.1,1,0.367).T(4.481,0,0.319).P(zy,1,t).T(4.449,0.9,0.351).P("location",x147,"motion").T(0.533,[[136,7,0,0],[129.47,22.8,0,20.06,0,28.21],[138.59,44.04,5.72,34.81,3.55,21.62],[136,66,0,0]],0.617).T(1.15,[[136,66,0,0],[137.95,82.78,-17.21,21.07,-19.19,23.5],[99.8,100.36,-41.12,33.75,-27.07,22.22],[87,126,0,0]],2.426).T(4.449,[[87,126,0,0],[87,136,0,0]],0.351);A4.A(e148).P("location",x149,"motion").T(1.213,[[123.2,14.2,0,0],[121.69,23.15,-0.23,13.72,-0.27,15.66],[124.6,38.79,0.74,26.57,0.45,16.04],[122.5,55.5,0,0]],0.401,ql).T(1.614,[[122.5,55.5,0,0],[124.82,65.52,3,5.28,8.47,14.9],[134.2,70.4,-18.47,58.03,-2.15,6.75],[147.5,99.5,0,0]],1.594).T(4.449,[[147.5,99.5,0,0],[147.5,109.5,0,0]],0.351).P(o,0,_,_,"").T(0.1,1,0.367).T(4.481,0,0.319).P(zy,0.8,t).T(1.614,1,1.594).T(4.449,0.9,0.351).P(zx,0.8,t).T(1.614,1,1.594).T(4.449,0.9,0.351);var S5=symbols[x156];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e32).P(h,60).P(w,1200);A5.A(e157).P(tp,0).P(lf,0).P(cl,[0,40,60,0],_,x9).P("filter.hue-rotate",0,"subproperty",_,r).T(0.867,0).T(1.2,0).P(bp,[0,0],_,x41).T(0,[0,0]).T(0.033,[-40,0]).T(0.067,[-80,0]).T(0.1,[-120,0]).T(0.133,[-160,0]).T(0.167,[-200,0]).T(0.2,[-240,0]).T(0.233,[-280,0]).T(0.267,[-320,0]).T(0.3,[-360,0]).T(0.333,[-400,0]).T(0.367,[-440,0]).T(0.4,[-480,0]).T(0.433,[-520,0]).T(0.467,[-560,0]).T(0.5,[-600,0]).T(0.533,[-640,0]).T(0.567,[-680,0]).T(0.6,[-720,0]).T(0.633,[-760,0]).T(0.667,[-800,0]).T(0.7,[-840,0]).T(0.733,[-880,0]).T(0.767,[-920,0]).T(0.8,[-960,0]).T(0.833,[-1000,0]).T(0.867,[-1040,0],_,_,[-980,0]).T(0.9,[-1080,0]).T(0.933,[-1120,0]).T(0.967,[-280,0]).T(1,[-240,0]).T(1.033,[-200,0]).T(1.067,[-160,0]).T(1.1,[-120,0]).T(1.133,[-80,0]).T(1.167,[-40,0]).T(1.2,[0,0]).P("filter.saturate",0.6,"subproperty",_,"").T(0.867,0.6).T(1.1,1,0.1,qoi);var S6=symbols[x158];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e32).P(h,169).P(w,6864);var S7=symbols[x181];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e32).P(h,158).P(w,403);A7.A(e182).P(tp,0).T(0,0).P(lf,65).T(0,65);var S8=symbols[x159];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e32).P(h,38).P(w,66);A8.A(e188).P("filter.sepia",0,"subproperty",_,"").P("filter.contrast",1,"subproperty").P(rz,0,t,_,r).P("filter.hue-rotate",0,"subproperty").P(lf,0,_,_,p).P("filter.saturate",2,"subproperty",_,"").P(tp,0,_,_,p).P("filter.grayscale",0,"subproperty",_,"").P("filter.invert",0,"subproperty").P("filter.drop-shadow.offsetH",0,"subproperty",_,p).P(bp,[0,0],_,x41).P("filter.drop-shadow.color",x185,"subproperty").T(0,x189,0.5,qoi).P("filter.drop-shadow.blur",0,"subproperty").T(0,20,0.5,qii).T(0.5,0,0.5,qoi);var S9=symbols[x162];var tl8=S9.tl[dt].tt,st9=S9.s[a]={},A9=A(_,tl8,st9);A9.A(e32).P(h,87).P(w,121);A9.A(e194).P(tp,0).P(zy,1,t,_,"").P(rz,0,t,_,r).P(zx,1,t,_,"").P(lf,0,_,_,p).P("filter.drop-shadow.color",x185,"subproperty").T(0,x195,0.5,qoi).P(bsz,[98.6,98.6],_,x122).T(0,[98.6,98.6]).P("filter.drop-shadow.blur",0,"subproperty").T(0,29,0.5,qii).T(0.5,0,0.5,qoi);var S10=symbols[x165];var tl9=S10.tl[dt].tt,st10=S10.s[a]={},A10=A(_,tl9,st10);A10.A(e32).P(h,132).P(w,63);A10.A(e200).P(tp,0).P(zy,1,t,_,"").P(rz,0,t,_,r).P(zx,1,t,_,"").P(lf,0,_,_,p).P("filter.drop-shadow.color",x185,"subproperty").T(0,x201,0.5,qoi).P("filter.drop-shadow.blur",0,"subproperty").T(0,20,0.5,qii).T(0.5,0,0.5,qoi);var S11=symbols[x166];var tl10=S11.tl[dt].tt,st11=S11.s[a]={},A11=A(_,tl10,st11);A11.A(e32).P(h,79).P(w,84);A11.A(e206).P(tp,0).P(lf,0).P("filter.drop-shadow.color",x185,"subproperty").T(0,x207,0.5,qoi,x208).P("filter.drop-shadow.blur",0,"subproperty").T(0,20,0.5,qii).T(0.5,0,0.5,qoi);var S12=symbols[x168];var tl11=S12.tl[dt].tt,st12=S12.s[a]={},A12=A(_,tl11,st12);A12.A(e32).P(h,94).P(w,87);A12.A(e212).P(tp,0).P(lf,0).P("filter.drop-shadow.color",x185,"subproperty").T(0,x213,0.5,qoi,x208).P("filter.drop-shadow.blur",0,"subproperty").T(0,20,0.5,qii).T(0.5,0,0.5,qoi);var S13=symbols[x170];var tl12=S13.tl[dt].tt,st13=S13.s[a]={},A13=A(_,tl12,st13);A13.A(e32).P(h,88).P(w,80);A13.A(e218).P(tp,0).P(lf,0).P("filter.drop-shadow.color",x185,"subproperty").T(0,x219,0.5,qoi,x208).P("filter.drop-shadow.blur",0,"subproperty").T(0,20,0.5,qii).T(0.5,0,0.5,qoi);var S14=symbols[x172];var tl13=S14.tl[dt].tt,st14=S14.s[a]={},A14=A(_,tl13,st14);A14.A(e32).P(h,53).P(w,66);A14.A(e223).P(tp,0).P(lf,0).P("filter.drop-shadow.color",x185,"subproperty").T(0,x224,0.5,qoi,x225).P("filter.drop-shadow.blur",0,"subproperty").T(0,5,0.5,qii).T(0.5,0,0.5,qoi);var S15=symbols[x174];var tl14=S15.tl[dt].tt,st15=S15.s[a]={},A15=A(_,tl14,st15);A15.A(e32).P(h,111).P(w,86);A15.A(e230).P(tp,0).P(lf,0).P("filter.drop-shadow.color",x185,"subproperty").T(0,x231,0.5,qoi,x225).P("filter.drop-shadow.blur",0,"subproperty").T(0,5,0.5,qii).T(0.5,0,0.5,qoi);var S16=symbols[x176];var tl15=S16.tl[dt].tt,st16=S16.s[a]={},A16=A(_,tl15,st16);A16.A(e32).P(h,62).P(w,99);A16.A(e236).P(tp,0).P(lf,0).P("filter.drop-shadow.color",x185,"subproperty").T(0,x237,0.5,qoi,x225).P("filter.drop-shadow.blur",0,"subproperty").T(0,5,0.5,qii).T(0.5,0,0.5,qoi);var S17=symbols[x179];var tl16=S17.tl[dt].tt,st17=S17.s[a]={},A17=A(_,tl16,st17);A17.A(e32).P(h,109).P(w,140);A17.A(e241).P(tp,0).P(lf,0).P("filter.drop-shadow.color",x185,"subproperty").T(0,x242,0.5,qoi,x225).P("filter.drop-shadow.blur",0,"subproperty").T(0,5,0.5,qii).T(0.5,0,0.5,qoi);var S18=symbols[x248];var tl17=S18.tl[dt].tt,st18=S18.s[a]={},A18=A(_,tl17,st18);A18.A(e32).P(h,25).P(w,2550);A18.A(e249).P(tp,0).P(lf,0).P(cl,[0,50,25,0],_,x9).P(bp,[0,0],_,x41).T(0,[0,0]);var S19=symbols[x254];var tl18=S19.tl[dt].tt,st19=S19.s[a]={},A19=A(_,tl18,st19);A19.A(e32).P(h,69).P(w,4094);A19.A(e255).P("filter.contrast",0.95,"subproperty",_,"").T(0,0.95).P(bp,[0,0],_,x41).T(0,[0,0]);var S20=symbols[x261];var tl19=S20.tl[dt].tt,st20=S20.s[a]={},A20=A(_,tl19,st20);A20.A(e32).P(h,120).P(w,7200);A20.A(e262).P(tp,25).P(zy,0.88008,t,_,"").P(zx,0.88008,t).P(cl,[0,120,120,0],_,x9).P(lf,-427,_,_,p).P(bp,[0,0],_,x41).T(0,[0,0]);var S21=symbols[x267];var tl20=S21.tl[dt].tt,st21=S21.s[a]={},A21=A(_,tl20,st21);A21.A(e32).P(h,120).P(w,7200);A21.A(e268).P(tp,5).P(zy,1.09654,t,_,"").P(zx,1.1,t).P(cl,[0,120,120,0],_,x9).P(lf,382,_,_,p).P(bp,[0,0],_,x41).T(0,[0,0]);var S22=symbols[x279];var tl21=S22.tl[dt].tt,st22=S22.s[a]={},A22=A(_,tl21,st22);A22.A(e32).P(h,130).P(w,7227);A22.A(e280).P(tp,0).P(lf,27);A22.A(e281).P(tp,71).P(zy,0.44106,t,_,"").P(zx,0.44106,t).P(cl,[0,50,25,0],_,x9).P(lf,-639,_,_,p);A22.A(e282).P(tp,24).T(0,24).P(zy,0.89243,t,_,"").T(0,0.89,_,_,0.89).P(zx,0.89243,t).T(0,0.89,_,_,0.89).P(lf,-286,_,_,p).T(0,-286).P(cl,[0,99,100,0],_,x9).T(0,[0,99,100,0]);A22.A(e283).P(lf,0).P(cl,[0,7200,120,0],_,x9).P(tp,8).T(0,8);var S23=symbols[x271];var tl22=S23.tl[dt].tt,st23=S23.s[a]={},A23=A(_,tl22,st23);A23.A(e255).P(tp,0).P(cl,[0,98,100,0],_,x9).P(bp,[0,0],_,x41).P(lf,0);A23.A(e32).P(h,100).P(w,5933);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"into-the-woods");