
/* ----------------------- Declarations --------------------------------*/

//DOM declarations
var cell0 = document.getElementById("cell0");
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");
var cell7 = document.getElementById("cell7");
var cell8 = document.getElementById("cell8");
var cells = document.getElementById("cells");

var xContainer = document.getElementById("x");
var oContainer = document.getElementById("o");
var playerContainer = document.getElementById("player-container");
var chooseContainer = document.getElementById("chooseContainer");
var chooseX = document.getElementById("chooseX");
var chooseO = document.getElementById("chooseO");


    //cell array
  var cellsArray = [cell0,cell1,cell2,
          cell3,cell4,cell5,
          cell6,cell7,cell8]; 

  //oArray and xArray declaration
  var oArray = [];
  var xArray = []; 


  /* ----------------------- GamePlay ----------------------------------------------------- */
// ----------------- Start Game ------------------ //


var players = {
  user: "",
  computer: "",
}


//Choose Player
chooseContainer.addEventListener("click", function(event){

if(event.target == chooseX){
players.user = function(){
   var x = document.createElement("SPAN");
      x.setAttribute("width", "200px");
      x.innerHTML = "<span class='playerText'>X</span>";
      return x;
}

players.computer = function(){
      var o = document.createElement("SPAN");
      o.innerHTML = "<span class='playerText'>O</span>";
      return o;
}

chooseContainer.style.display = "none";
cells.style.display = "block";

} else if(event.target == chooseO){
players.user = function(){
      var o = document.createElement("SPAN");
      o.innerHTML = "<span class='playerText'>O</span>";
      return o;
};

players.computer = function(){
      var x = document.createElement("SPAN");
      x.setAttribute("width", "200px");
      x.innerHTML = "<span class='playerText'>X</span>";
      return x;
}

chooseContainer.style.display = "none";
cells.style.display = "block";
}

});





// ----------- MAIN Moves function -------------- //
function move(){
console.log(cellsArray.length);
function x(){
 
//append players.user() to event.target 
if(event.target.style.backgroundColor != "rgb(102, 198, 144)" && event.target.textContent != "X" && event.target.style.backgroundColor != "rgb(255,132,141)" && event.target.textContent != "O"){
event.target.appendChild(players.user());
event.target.className="x";

console.log(players.user().textContent == "X");

if(players.user().textContent == "X"){
event.target.style.backgroundColor = "rgb(102,198,144)";
} else{
  event.target.style.backgroundColor = "rgb(255,132,141)";
}

//push removed event.target index into xArray
xArray.push(cellsArray.splice(cellsArray.indexOf(event.target),1));
//flatten xArray
xArray = xArray.reduce(function(prev, next){
  return prev.concat(next);
},[]);
}
}

function o(){
//if cellArray length is more than 1, append player 2
if(cellsArray.length > 1){
cellsArray[0].appendChild(players.computer());
cellsArray[0].className = "o";

if(players.user().textContent == "O"){
    cellsArray[0].style.backgroundColor = "rgb(102,198,144)";
} else{
    cellsArray[0].style.backgroundColor = "rgb(255,132,141)";
}

//push removed cellsArray index into oArray
oArray.push(cellsArray.splice(0,1));
//flatten oArray
oArray = oArray.reduce(function(prev, next){
 return prev.concat(next);
},[]);
} 
}

//move function returns callbacks of x and o
x();
o();
winner();
}

//Cells event listener
cells.addEventListener("click", move);

// function that decides the winner
function winner(){

  //victory cells
  var victory = [[cell0,cell1,cell2], [cell3,cell4,cell5], [cell6,cell7,cell8], [cell0,cell3,cell6], 
                [cell1,cell4,cell7],  [cell2,cell5,cell8], [cell0,cell4,cell8], [cell2,cell4,cell6]]; 

for(var i = 0; i <= 7; i++){
if(xArray.includes(victory[i][0]) && xArray.includes(victory[i][1]) && xArray.includes(victory[i][2])){
    alert("You Win!");
     var reload = setTimeout(function(){
      location.reload();
    },2000);
    

     if(players.user().textContent == "X"){
    victory[i][0].style.backgroundColor = "darkgreen";
    victory[i][1].style.backgroundColor = "darkgreen";
    victory[i][2].style.backgroundColor = "darkgreen";
  } else{
     victory[i][0].style.backgroundColor = "darkred";
     victory[i][1].style.backgroundColor = "darkred";
     victory[i][2].style.backgroundColor = "darkred";
  }
    break;  
  
  } else if(oArray.includes(victory[i][0]) && oArray.includes(victory[i][1]) && oArray.includes(victory[i][2])){
    alert("You Lose");
    
    if(players.user().textContent == "O"){
     victory[i][0].style.backgroundColor = "darkgreen";
     victory[i][1].style.backgroundColor = "darkgreen";
     victory[i][2].style.backgroundColor = "darkgreen";
  } else{
    victory[i][0].style.backgroundColor = "darkred";
    victory[i][1].style.backgroundColor = "darkred";
    victory[i][2].style.backgroundColor = "darkred";
  }

    var reload = setTimeout(function(){
      location.reload();
    },2000);
    break;
  } else if(cellsArray.length == 0 && !xArray.includes(victory[i][0]) && !xArray.includes(victory[i][1]) && !xArray.includes(victory[i][2] && !oArray.includes(victory[i][0]) && !oArray.includes(victory[i][1]) && !oArray.includes(victory[i][2]))){
    alert("Tie Game");
    var reload = setTimeout(function(){
      location.reload();
    },2000);
    break;
  } 
}

}

/*
switch(true){
case  cell0.className === cell1.className && cell1.className === cell2.className:
alert("Player" + cell3.textContent + " Won");
break;
case  cell3.className === cell4.className && cell4.className === cell5.className:
alert("Player" + cell3.textContent + " Won");
break;
case  cell6.className === cell7.className && cell7.className === cell8.className:
alert("Player" + cell6.textContent + " Won");
break;
case  cell0.className === cell3.className && cell3.className === cell6.className:
alert("Player" + cell0.textContent + " Won");
break;
case  cell1.className == cell4.className && cell4.className == cell7.className:
alert("Player" + cell1.textContent + " Won");
break;
case  cell2.className == cell5.className && cell5.className == cell8.className:
alert("Player" + cell2.textContent + " Won");
break;
case  cell0.className == cell4.className && cell4.className == cell8.className:
alert("Player" + cell0.textContent + " Won");
break;
case  cell2.className == cell4.className && cell4.className == cell6.className:
alert("Player" + cell2.textContent + " Won");
break;
}
*/
