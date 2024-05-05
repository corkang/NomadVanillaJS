function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const API_KEY = "1f7f28e2249f2b08f0f4ebb14be440bd";
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:nth-child(3)");

      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main;
      temp.innerHTML = `${data.main.temp}°C`;
    });
}

function onGeoErr() {
  alert("Can't find your location. Weather info doesn't work");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr);