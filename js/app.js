const apiKey = "445ff49c1a8026ac212846be574b710d";

function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`) 
    .then((response) => response.json())
    .then((data) => displayWeather(data)) 
    .catch((error) => console.error("Fetching weather data failed:", error));
}

function displayWeather(data) {
  const name = data.name;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  console.log(`Weather in ${name}: ${description}. Temp: ${temp}°C, Humidity: ${humidity}%, Wind speed: ${speed} km/h`);

  document.querySelector(".city").innerText = `Weather in ${name}`;
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = `${temp}°C`;
  document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
  document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`;
  document.querySelector('.weather').classList.remove("loading")
  document.body.style.backgroundImage = (`url(https://source.unsplash.com/1600x900/?${name})`)
}

function search() {
  fetchWeather(document.querySelector(".search-bar").value);
}

document.querySelector('.search button').addEventListener("click", function(){
  search();
} )

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if(event.key == "Enter"){
    search()
  }
})
