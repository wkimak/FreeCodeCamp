
// var declarations

var container = document.getElementById("container");
var screen = document.getElementById("screen");
var buttons = document.getElementById("buttons");


//buttons event listener
buttons.addEventListener("click", function(event){

var value = event.target.value;
if(value != undefined){
screen.textContent +=  value;
}

// String
var string = screen.textContent;
console.log(string);

//regex
function isAddition (){
var regex = /[+]/;
return regex.test(string);
}

function isSubtraction(){
  var regex = /[-]/;
  return regex.test(string);
}

function isDivision(){
  var regex = /[/]/
  return regex.test(string);
}

function isMultiplication(){
  var regex = /[*]/;
  return regex.test(string);
}

// AC/equals button event
if(event.target.id == "ac"){
  arr = [];
  screen.textContent = " ";
} else if(event.target.id == "equals"){
 if(isAddition() == true){
  screen.textContent = eval(string);
} else if(isSubtraction() == true){
  screen.textContent = eval(string);
} else if(isDivision() == true){
  screen.textContent = eval(string);
} else if(isMultiplication() == true){
  screen.textContent = eval(string);
}
}

}); //event listener
