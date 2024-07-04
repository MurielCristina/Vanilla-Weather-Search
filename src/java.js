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
  console.log(searchCity.value);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchCity.value}, Country`;
}

let searchInput = document.querySelector(".form");
searchInput.addEventListener("submit", search);
