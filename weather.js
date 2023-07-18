const form = document.querySelector("form"); // Faster way
const input = document.querySelector("form input");
const msgSpan = form.querySelector(".msg");
const listCities = document.querySelector(".container .cities");

localStorage.setItem(
  "apiKey",
  // ? Encrypted Our Api to save it local storage.
  EncryptStringAES("c329c3b96528c0c0f92577a6850e5a5e")
);

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
const getWeatherDataFromAPI = () => {

};

// ! -------------- INTERVIEW QUESTION -------------- //
// ? .class .class vs. .class.class
// ? inline(-HTML-), addEventListener, onClick, setAttribute("submit", submitFunction) - to set click method.
// ? target vs. currentTarget
// ? Status Codes Meanings
// ! -------------- ------------------ -------------- //
