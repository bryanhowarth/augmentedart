/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope(
         {
         nope:[
         'jquery.cookie.js',
         'geturlparams.js'
         ],
         complete: init
         }
         );
         //when yepnope has loaded everything execute init();
         
         function init (){
         console.log(jQuery(document).getUrlParam('reset_cookie'));
            if(jQuery(document).getUrlParam('explore_cookie') != null){
               jQuery.cookie('explore_cookie', jQuery(document).getUrlParam('explore_cookie'), { expires: 3, path: '/' });
            }
         }//end init

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "edge-animation");