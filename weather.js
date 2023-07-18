const form = document.querySelector("form"); // Faster way
const input = document.querySelector("form input");
const msgSpan = form.querySelector(".msg");
const listCities = document.querySelector(".container .cities");

// localStorage.setItem(
//   "apiKey",
// ? Encrypted Our Api to save it local storage.
//   EncryptStringAES("c329c3b96528c0c0f92577a6850e5a5e")
// );

form.addEventListener("submit", (e) => {
  alert("Form was Submitted!");
  //* to prevent default function behind submit method.
  e.preventDefault();
  getWeatherDataFromAPI();

  // form.reset();
  // input.value = "";
  // e.currentTarget.reset();
  e.target.reset();
});

// ! We are going to be using axios in React !
const getWeatherDataFromAPI = async () => {
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  const cityName = input.value;
  const units = "metric";
  const lang = "en";

  try {
    // ! Http request url ( endpoint )
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

    const response = await fetch(url).then((response) => response.json());
    console.log(response);

    //* obj destructuring
    const { main, name, sys, weather } = response;

    const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    console.log(iconUrl);
  } catch (error) {
    msgSpan.innerText = `City Not Found !`;
  }
};

// ! -------------- INTERVIEW QUESTION -------------- //
// ? .class .class vs. .class.class
// ? inline(-HTML-), addEventListener, onClick, setAttribute("submit", submitFunction) - to set click method.
// ? target vs. currentTarget
// ? Status Codes Meanings
// ? What is Http and http reques and endpoint
// ! -------------- ------------------ -------------- //
