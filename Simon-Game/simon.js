
/* ------------------ variable declarations ------------------ */
//main buttons
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var mainBtns = document.getElementById("mainBtns");
var mainContainer = document.getElementById("main-container");

//Other buttons/counter container
var counter = document.getElementById("count");
var startBtn = document.getElementById("start");
var restartBtn = document.getElementById("restart");
var powerBtn = document.getElementById("switch");

// Button Audio
var btn1Audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var btn2Audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var btn3Audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var btn4Audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

var isOn = false; //variable to store is Simon Game is turned on
var started = false; //variable to store if start button has been clicked
var round = 1; //total number of rounds the user has made it through
// random btn variables -- need global scope so they can be pushed into same pressedBtns[]
var random1 = randomBtn();
var random2 = randomBtn();
var random3 = randomBtn();

/* ---------------------- Data structures -------------------- */
// Data structures
var btnArray = [btn1, btn2, btn3, btn4]; // array of btns for randon btn generator
var btnTracker = []; // array to keep track of clicked buttons by user
var pressedBtns = []; //Keeps track of button that light up


/* ---------------------- Power (on/off) Btn ------------------ */

// turn on/off simon game
function power(){
if(powerBtn.checked){
    counter.textContent = "- -";
    isOn = true;
} else{
    counter.textContent = "";
    location.reload();
}   
}

//On/Off swtich event handler
powerBtn.addEventListener("click", power);

/* -------------------- Random button generator ----------------- */
//random # to light up random btn in btnArray[]
function randomBtn(){
var random = Math.floor(Math.random()* ((3-0)+1));
return random;
}


/* -------------------- Start Btn ---------------------- */



// When user clicks start button function
var start = function(random){
  if(isOn){
     
     started = true;
     //remove game over lights if running
    btn1.classList.remove("gameOver");
    btn2.classList.remove("gameOver");
    btn3.classList.remove("gameOver");
    btn4.classList.remove("gameOver");  

    //round=1;
 counter.innerHTML = round;
 btnArray[random1].className = "light";
 //push first random btn into pressedBtns[]
 pressedBtns.push(btnArray[random1]);
 
 // remove classname after 1 second
 setTimeout(function(){
   btnArray[random1].classList.remove("light");
 },1000);
}
}

//startBtn Event handler
startBtn.addEventListener("click", start);


/* ------------------- Main Btns ------------------ */
function main(event){
if(isOn){

 //push click events into btnTracker[]
 btnTracker.push(event.target);
 
//check if btnTracker[] items match pressedBtns[] items. If not, restart
for(var i = 0; i<btnTracker.length; i++){
  if(btnTracker[i] != pressedBtns[i]){
    counter.textContent = "!!";
    pressedBtns.splice(0);
    btnTracker.splice(0);
    btn1.className = "gameOver";
    btn2.className = "gameOver";
    btn3.className = "gameOver";
    btn4.className = "gameOver";
  }
}

 if(btnTracker.length == pressedBtns.length && pressedBtns.length != 0){
     
     //wipe btnTracker [] clean    
     btnTracker.splice(0);
    //push next random btn into pressedBtns
   pressedBtns.push(btnArray[randomBtn()]);
   pressedBtns.forEach(function(val, i){
    //set className for each array val in increments of 1000ms
    setTimeout(function(){
      val.className = "light";
      if(val == btn1){
      btn1Audio.play();
    } else if (val == btn2){
      btn2Audio.play();
    } else if (val == btn3){
      btn3Audio.play();
    } else{
      btn4Audio.play();
    }
      //remove className right after it was set for each val
      setTimeout(function(){
        val.classList.remove("light");
      }, 1000);
}, i * 1400);
  });
   
   counter.textContent = round++;
 }
 }


if(pressedBtns.length == 20){
  mainContainer.className = "victory";
  alert("YOU WIN!!");
}
};

//individual button handlers
mainBtns.addEventListener("click", main);


/* ------------------ Restart Button --------------------- */

restartBtn.addEventListener("click", function(){
    if(isOn && started){
     pressedBtns.splice(0);
     btnTracker.splice(0); 
     round = 1;
     counter.innerHTML = round;
     btnArray[random3].className = "light";
    //push first random btn into pressedBtns[]
    pressedBtns.push(btnArray[random3]);
 
 // remove classname after 1 second
 setTimeout(function(){
   btnArray[random3].classList.remove("light");
 },1000);
    btn1.classList.remove("gameOver");
    btn2.classList.remove("gameOver");
    btn3.classList.remove("gameOver");
    btn4.classList.remove("gameOver");  
  }
});
 
