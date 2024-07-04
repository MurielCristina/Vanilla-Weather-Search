//Current Time

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes().toString().padStart(2, 0);
let currentDateAndHour = `${day} ${hour}:${minute}`;

let dateAndHour = document.querySelector(".date-and-hour");
dateAndHour.innerHTML = currentDateAndHour;

// Search Engine
function search(event) {
  event.preventDefault();

  let searchCity = document.querySelector("#form-text");
  let h2 = document.querySelector("h2");

  //API
  function filter(response) {
    let dataCity = response.data.city;
    let dataCountry = response.data.country;
    let dataTemperature = Math.round(response.data.temperature.current);
    let dataCondition = response.data.condition.description;
    let dataHumidity = response.data.temperature.humidity;
    let dataWind = response.data.wind.speed;

    h2.innerHTML = `${dataCity}, ${dataCountry}`;

    let filterTemperature = document.querySelector(
      ".data-showcase-temperature-container-number"
    );
    filterTemperature.innerHTML = dataTemperature;

    let filterConditions = document.querySelector("#conditions");
    filterConditions.innerHTML = dataCondition;

    let filterHumidity = document.querySelector("#humidity");
    filterHumidity.innerHTML = `${dataHumidity}%`;

    let filterWind = document.querySelector("#wind");
    filterWind.innerHTML = `${dataWind}km/h`;
  }

  let apikEY = "73050fa355794447f81ab5349190dotd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchCity.value}&key=${apikEY}&units=metric`;
  axios.get(apiUrl).then(filter);
}

let searchInput = document.querySelector(".form");
searchInput.addEventListener("submit", search);
