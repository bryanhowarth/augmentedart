var firebaseRef = new Firebase("https://ar-taste.firebaseio.com/");
var surveyName = "testSurvey";
//function to draw a visualization when the ref dataset gets updated
//word cloud https://www.jasondavies.com/wordcloud/
//github repo https://github.com/jasondavies/d3-cloud
var wordArray = [''];
var fill = d3.scale.ordinal().range(["#0065c3", "#004c97", "#ee3a43", "#ffe617", "#8dc63f"]);

var i = 1;

var layout = d3.layout.cloud()
    .words(wordArray)
    //.text(function(d){ console.log(d.text);  return d.text;})
    .padding(5)
    .rotate(function() {
      return 45;
    })
    .spiral('archimedean')
    .font("AkkuratBold")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);



function draw(words) {
 var rotation = 1;
 var wordContainer = d3.select('svg');
	 if(wordContainer.empty()){
		 wordContainer = d3.select("body .vis-wrapper-3").append("svg");
	}else{
		wordContainer.select('g').remove();
	}
      wordContainer.attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")

      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "AkkuratBold")	
      .attr("text-anchor", "middle")
      .transition().duration(1e3)
      .style("fill", function(d, i) { return fill(i); })
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" +  d.rotate  + ")";
      })
      .text(function(d) { return d.text; });
}

function generate(wordsArray) {
	words = [];
    layout.stop().words(wordsArray).start();
}



$(document).ready(function(){
	
	$('body').on('click', function(e){
		$('body svg g').animate({'opacity' : 0}, 300, function(){

			firebaseRef.child(surveyName).once('value', function(snapshot){
			
				$.each(snapshot.val(), function(question, answers) {
					var wordArray = [];
					$.each(answers, function(answer, count){
						
						if(answer == 'other'){
							answerRef = snapshot.child(question).child(answer).val();
							
							for(word in answerRef){
								wordArray.push({ text : answerRef[word], size : 18});
							}
							
						}else{
							answerCount = snapshot.child(question).child(answer).val();
							console.log(wordArray);
							wordArray.push({ text : answer, size : 2 * answerCount});

						}
					});
					generate(wordArray);
				});
			});
		});
	});

	var outerWidth = $('.vis-wrapper-3').width();
	var outerHeight = $('.vis-wrapper-3').height() - $('.question-wrapper').outerHeight();
	
	layout.size([outerWidth, outerHeight-100]).start();
	
	firebaseRef.child(surveyName).on('value', function(snapshot){

		$.each(snapshot.val(), function(question, answers) {
			
			
			var questionID = question.replace(/ /g, "-").replace("?", "");
			if(jQuery('#'+questionID).length > 0 ){
				//question exists, update it

			}
			else{
				//new question, create it.
				var qEl = $('<div class="question-wrapper" id="'+questionID+'"></div>');
				$(qEl).prependTo('.vis-wrapper-3');
			}
			var n = 1;
			$.each(answers, function(answer, count){
				if(answer == 'other'){
					answerRef = snapshot.child(question).child(answer).val();
					
					for(word in answerRef){
						wordArray.push({ text : answerRef[word], size : 18});
					}
					
				}else{
					answerCount = snapshot.child(question).child(answer).val();
					wordArray.push({ text : answer, size : 2 * answerCount});

				}

			n++;

			});//end each answer
			$('body svg g').animate({'opacity' : 0}, 300, function(){
				generate(wordArray);
			});


		});//end each question

				
	});//end firebase listener

});//end dom ready


