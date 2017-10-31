
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


    //cell array
  var cellsArray = [cell0,cell1,cell2,
          cell3,cell4,cell5,
          cell6,cell7,cell8]; 

  //oArray and xArray declaration
  var oArray = [];
  var xArray = []; 


  /* ----------------------- GamePlay ----------------------------------------------------- */


// ----------------- Start Game ------------------ //


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
    },1500);
    break;  
  } else if(oArray.includes(victory[i][0]) && oArray.includes(victory[i][1]) && oArray.includes(victory[i][2])){
    alert("You Lose");
    var reload = setTimeout(function(){
      location.reload();
    },1500);
    break;
  } else if(cellsArray.length == 0){
    alert("Tie Game");
    var reload = setTimeout(function(){
      location.reload();
    },1500);
    break;
  }
}
}

// players object
var players = {
  player1: function(){
      var x = document.createElement("IMG");
      x.setAttribute("src", "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/magic-marker-icons-alphanumeric/114602-magic-marker-icon-alphanumeric-letter-x.png");
      x.setAttribute("width", "100");
      x.setAttribute("height", "auto");
      return x;
  },

  player2: function(){
      var o = document.createElement("IMG");
      o.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/2000px-Letter_o.svg.png");
      o.setAttribute("width", "100");
      o.setAttribute("height", "auto");
      return o;
  }
};


// ----------- MAIN Moves function -------------- //
function move(){

function x(){
//append "x" to event.target 
 event.target.appendChild(players.player1());
//push removed event.target index into xArray
xArray.push(cellsArray.splice(cellsArray.indexOf(event.target),1));
//flatten xArray
xArray = xArray.reduce(function(prev, next){
  return prev.concat(next);
},[]);
}

function o(){
//if cellArray length is more than 1, append player 2
if(cellsArray.length > 1){
cellsArray[0].appendChild(players.player2());
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
