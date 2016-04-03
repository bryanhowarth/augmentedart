Requests = {
	QueryString : function(item){
	var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
	return svalue ? svalue[1] : svalue;
	}
}

jQuery(document).ready(function($){
	var sigil = false;
	var dishName = "This is the name of the dish"; //override below
	var description = "This is a paragraph or two about the dish they just ate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula sed nisi semper vestibulum porta eu lectus. Pellentesque et lectus a sem maximus venenatis.";//override below
	if(Requests.QueryString("Sigil1") == 'true'){
	 var sigil = "Sigil1"; 
	 var dishName = "This is the name of the first dish";
	}else if(Requests.QueryString("Sigil2") == 'true'){
	 var sigil = "Sigil2";
	 var dishName = "This is the name of the second dish"; 
	}else if(Requests.QueryString("Sigil3") == 'true'){
	 var sigil = "Sigil3"; 
	}else if(Requests.QueryString("Sigil4") == 'true'){
	 var sigil = "Sigil4"; 
	}
	console.log(sigil);
	if(sigil !== false){
		var cta_title = "Is this your favorite? ";
		var cta_text = "Describe your experience > ";
		
		
		var markup ='<div id="'+sigil+'" class="question" >

		<div class="image-wrapper"><img class="sigil" src="images/'+sigil+'.png" width="100%" height="auto" /></div>
		
		<div class="description flex-wrapper orientation-landscape">
			<div class="flex-7"><h3 class="title">'+dishName+'</h3><p>'+description+'</p></div>
			<div class="flex-3 orientation-landscape flex-wrapper vert">
				<h5>'+cta_title+'</h5>
				<a class="cta button" href="/ar-taste?'+sigil+'=true">'+cta_text+'</a>
			</div>
		</div>
		</div>';
		console.log(markup);
		$('body .content').append(markup);
	}
});