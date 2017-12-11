$("document").ready(function(){

  //hiding #articles before submit event
  $("#articles").hide();
	

// submit event
$("form").submit(function(event){
event.preventDefault();

//animations
$("h1,h2").css("visibility", "hidden");
$("#search").animate({bottom:'90px'}, 400);
$("#articles").fadeIn(700);
$("#globe").animate({opacity: "0.2"}, 400);


//input variable
var searchTerm = $("#search").val();

// clear input field
$("#search").val(" ");

// request url
var offset = 0;
var url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500prop=info&pageids=14640471&inprop=url`;

//data
var options = {
search: searchTerm,
};

//callback function
function showArticles(data){
    var showHTML = "<ul class='ul-style'>";
	$.each(data.query.search, function(index, term){
     showHTML += "<li class='li-style'> <a href='https://en.wikipedia.org/wiki/" + term.title + "'target='_blank'> <h2>" + term.title + "</h2> </a>";
     showHTML += " <p>" + term.snippet + "</p> </li>";
	}); //each loop
     showHTML += "</ul>";
	$("#articles").html(showHTML);
};

$.getJSON(url, options, showArticles);

}); // submit event handler


}); //ready function
