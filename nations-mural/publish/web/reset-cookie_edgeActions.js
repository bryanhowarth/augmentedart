
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({nope:['jquery.cookie.js','geturlparams.js'],complete:init});function init(){console.log(jQuery(document).getUrlParam('reset_cookie'));if(jQuery(document).getUrlParam('explore_cookie')!=null){jQuery.cookie('explore_cookie',jQuery(document).getUrlParam('explore_cookie'),{expires:3,path:'/'});}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.$('Message').html('your cookie was reset!');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-296390700");