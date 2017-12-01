

$("document").ready(function(){ 

var latitude;
var longitude;
// -------------- get location from geolocator ----------- //

$.getJSON("https://ipinfo.io/geo", getLocation);

function getLocation(data){
  var location = data.loc.split(",");
   var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + location[0] + "&lon=" + location[1] + "&format=json";
 
$("#btn").click(function(){
$(".divTiles").fadeOut(2000);
$("#btn").fadeOut(2000); 



$("#div1").animate({
  height: "100%",
  width:"50%",
  backgroundColor: "rgba(5,5,150,1.0)",
},{
  duration: 2000,
  queue: false,
});


$("#div13").animate({
  height: "100%", 
  width: "50%", 
  position: "absolute", 
  left: "50%", 
  top: "0"
},{
duration: 2000,
queue: false
});


//convert celcius to fahrenheight
function fare(celcius){
var fahrenheight = celcius*9/5+32;
return Math.floor(fahrenheight);
}

function showWeather(data){
   weatherHTML = "<h1 id='location'>" + data.name + ", " + data.sys.country + "</h1>";
   weatherHTML += "<h2>" + data.weather[0].main + "</h2>";
   weatherHTML += '<img src=' + data.weather[0].icon + '">';
   weatherHTML += "<h2 class='main'>" + data.weather[0].description + "</h2>";
   weatherHTML += "<h3> Temp: " + fare(data.main.temp) + " deg </h3>";
  

   weatherDiv3 = "<div id='weatherDiv3'> Humidity <br>" + data.main.humidity + "</div>";
   weatherDiv2 = "<div id='weatherDiv2'> Max Temperature <br>" + fare(data.main["temp_max"]) + " deg</div>";
   weatherDiv1 = "<div id='weatherDiv1'> Min Temperature <br>" + fare(data.main["temp_min"]) + " deg</div>";
   weatherDiv4 = "<div id='weatherDiv4'> Wind Speed <br>" + data.wind.speed + "mph</div>";

$("#div1").html(weatherHTML);

setTimeout(function(){
$("#div13").append(weatherDiv1);
$("#div13").append(weatherDiv2);
$("#div13").append(weatherDiv3);
$("#div13").append(weatherDiv4);
}, 2000);
}


  $.getJSON(url, showWeather);
}); //click event
 
} //get location function

});// ready function

