// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App Data
const weather = {};

weather.temperature = {
    unit : "celsius"
}
// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}
   // SET USER'S POSITION
   function setPosition(position){
       let latitude  = position.cords.latitude;
       let longitude = position.cords.longitude;

       getweather(latitude, longitude);
   }
   // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION
   function showError(error){
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}
   // GET WEATHER FROM API PROVIDER
   function getweather(latitude,longitude){
       let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=$appid=$(key)`; 
       console.log(api);
   }