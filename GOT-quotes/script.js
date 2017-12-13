
$("document").ready(function(){


$(".quoteBtn").click(function(event){

if(event.target.className != "learnMoreBtn"){	

//get value of Img to pass along to http request
var character = event.target.previousElementSibling.getAttribute("value");
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
	/* Character */
	showHTML += "<p> <b> Character:</b> " + data[0].name + "</p>";
         
	/* Born */
	if(data[0].born != ""){
	showHTML += "<p> <b> Born:</b> " + data[0].born + "</p>";
}
	/* Aliases */
	showHTML += "<b> Aliases:</b> ";
	$.each($(data[0].aliases), function(index, value){
		if(value != ''){
			if(index == $(data[0].aliases).length - 1){
				showHTML += " " + value;
            } else{
            	showHTML +=  value + ", ";
            }
  }
});
      
	/* Titles */
    if(data[0].titles != ""){ 
 	showHTML += "<br> <br> <b> Titles:</b> ";
	$.each($(data[0].titles), function(index, value){
		if(value != ''){
			if(index == $(data[0].titles).length - 1){
				showHTML += " " + value;
			}else{
				showHTML += value + ", ";
			}
		}
});
}
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
