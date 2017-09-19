$("document").ready(function(){  

// array declaration
var posArray = [];

//Pushing lat/lon into array
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
return posArray.push(position.coords.latitude, position.coords.longitude);
  });
}

//convert celcius to fahrenheight
function fare(celcius){
var fahrenheight = celcius*9/5+32;
return fahrenheight;
}

//event listener
$("#btn").click(function(){
  
//ajax
var url = "https://fcc-weather-api.glitch.me/api/current?";

//data
var coords = {
  lat: posArray[0],
  lon: posArray[1]
};

//callback function
function showWeather(data){
   weatherHTML = "<h1>" + data.name + ", " + data.sys.country + "</h1>";
   weatherHTML += '<img src=' + data.weather[0].icon + '">';
   weatherHTML += "<h2 class='main'>" + data.weather[0].main + "</h2>";
   weatherHTML += "<h3> Temp: " + fare(data.main.temp) + " deg </h3>";
   weatherHTML += "<h3> Wind Speed: " + data.wind.speed + "mph </h3>";

$("#info").html(weatherHTML);

//background images
var background = document.getElementsByTagName("body")[0];
var h2 = document.querySelector("h2.main");

if(h2.textContent == "Rain"){
 background.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/02/26/16/52/rain-275316_960_720.jpg')";
} else if(h2.textContent == "Clouds"){
 background.style.backgroundImage = "url('https://icons.wxug.com/data/wximagenew/o/ozcazz/249.jpg')";
} else if(h2.textContent == "Mist"){
	background.style.backgroundImage = "url('https://static.pexels.com/photos/157304/pexels-photo-157304.jpeg')"
}
};

// getJSON method
$.getJSON(url, coords, showWeather);

}); // btn click event

}); //ready function
