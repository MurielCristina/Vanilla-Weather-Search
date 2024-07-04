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
