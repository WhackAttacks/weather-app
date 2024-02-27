fetch('http://api.openweathermap.org/data/2.5/weather?id=524901&appid=51ba1058f88521716afaf7b9c9565a49')
  .then(res => res.json())
  .then(data => console.log(data))

fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=51ba1058f88521716afaf7b9c9565a49')
  .then(res => res.json())
  .then(data => console.log(data))