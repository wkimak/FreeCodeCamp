
// variable declarations
var button = document.getElementById("button");
var p = document.getElementById("quote");
var div = document.getElementById("quotesParent");

//var body = document.getElementsByTagName("body")[0];


//quotes object
var quotes = {

quote: ['"The best preparation for tomorrow is doing your best today."',
 '"We must let go of the life we have planned, so as to accept the one that is waiting for us."',
 '"Put your heart, mind, and soul into even your smalled acts. This is the secret of success."',
 '"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."',
 '"Happiness is not something you postpone for the future; it is something you design for the present."',
 '"No act of kindness, no matter how small, is ever wasted."'],

random: function (){	
var random = Math.floor(Math.random()*6);
return random;
}
};

//Button event Handler

$(document).ready(function(){
button.addEventListener("click", function(){
p.innerHTML = quotes.quote[quotes.random()];
if(p.innerHTML == quotes.quote[0]){
$("body").animate({backgroundColor: "purple"}, 1000);
} else if (p.innerHTML == quotes.quote[1]){
	$("html body").animate({backgroundColor: "purple"}, 1000);
} else if(p.innerHTML == quotes.quote[2]){
	$("html body").animate({backgroundColor: "blue"}, 1000);
} else if(p.innerHTML == quotes.quote[3]){
	$("html body").animate({backgroundColor: "green"}, 1000);
} else if(p.innerHTML == quotes.quote[4]){
	$("html body").animate({backgroundColor: "orange"}, 1000);
} else{
	$("html body").animate({backgroundColor: "yellow"}, 1000);
}
});
});
