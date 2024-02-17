//const $ = document.querySelector("");

let inputValue = document.querySelector(".searchBox");
let searchButton = document.querySelector(".searchButton");
let weatherIcon = document.querySelector(".weatherIcon");
let tempArea = document.querySelector(".temparature");
let cityLocation = document.querySelector(".location");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
const apiKey = "9dc718197d69dcb51d5db26b0c13a73b";


searchButton.addEventListener("click", async()=> {
  
let URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=Metric&appid=${apiKey}`;

let response = await fetch(URL);
let data = await response.json();

//console.log(URL);
tempArea.innerHTML = data.main.temp + " °C";
cityLocation.innerHTML = data.name;
humidity.innerHTML = data.main.humidity +"%";
windSpeed.innerHTML = data.wind.speed + " km/h";

});

// here is the json format , Also fetch them starting with data.temp.etc   =     https://api.openweathermap.org/data/2.5/weather?q=florida&units=Metric&appid=9dc718197d69dcb51d5db26b0c13a73b
