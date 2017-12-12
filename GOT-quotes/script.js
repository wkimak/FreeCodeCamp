
$("document").ready(function(){

$(".front").append("<button class='quoteBtn'> Get Quote </button>");

$(".quoteBtn").click(function(event){

if(event.target.className != "learnMoreBtn"){	

//get value of Img to pass along to http request
var character = event.target.previousElementSibling.previousElementSibling.getAttribute("value");
console.log(character);

//Quote API url	
var url = 'https://got-quotes.herokuapp.com/quotes?char=' + character;


//Quote API Callback
var showHTML = "";
 function showQuote (data){
showHTML += "<div class='quote-container'>";
showHTML += '<p>"' + data.quote + '"</p>';
showHTML += "<p><i>" + data.character + "</i></p>";
showHTML += "</div>";

$.each($(".front"), function(index,value){
	if(character == value.getAttribute("value")){
		$(this).next().html(showHTML);
	}
});
   }

//Quote API
$.getJSON(url, showQuote);
}
});


/* ---------------- Learn More Section ----------- */

//Ice and Fire API
$("button").click(function(event){

var charVal = event.target.getAttribute("value");


var url = "https://anapioficeandfire.com/api/characters?name=" + charVal;

var showHTML = "";
function showInfo(data){
	showHTML += "<div class='learnContainer'>";
	showHTML += "<p> <i> Character:</i> " + data[0].name + "</p>";
	showHTML += "<p> <i> Born:</i> " + data[0].born + "</p>";
	showHTML += "<p> <i> Aliases:</i> " + data[0].aliases + "</p>";
	showHTML += "<p> <i> Titles:</i> " + data[0].titles + "</p>";
	showHTML += "</div>";


$.each($(".learnMoreBtn"), function(index, value){
  if(charVal == value.getAttribute("value")){
  	$(this).parent().next().html(showHTML);
  }

});
}

$.getJSON(url, showInfo);

});



});
