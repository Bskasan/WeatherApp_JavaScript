const form = document.querySelector("form"); // Faster way
const input = document.querySelector("form input");
const msgSpan = form.querySelector(".msg");
const listCities = document.querySelector(".container .cities");

localStorage.setItem(
  "apiKey",
  // ? Encrypted Our Api to save it local storage.
  EncryptStringAES("c329c3b96528c0c0f92577a6850e5a5e")
);

// ! -------------- INTERVIEW QUESTION -------------- //
// ? .class .class vs. .class.class
// ! -------------- ------------------ -------------- //
