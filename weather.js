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
  // alert("Form was Submitted!");
  //* to prevent default function behind submit method.
  e.preventDefault();
  getWeatherDataFromAPI();
  form.reset();

  // input.value = "";
  // e.currentTarget.reset();
  // e.target.reset();
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

    //* obj destructuring
    const { main, name, sys, weather } = response;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    // ! Checking if the city has already been added to the list of cities.
    const cityNameSpans = listCities.querySelectorAll("span");
    //filter, map, reduce, forEach ==> array
    //forEach => nodeList
    if (cityNameSpans.length > 0) {
      const filteredArray = [...cityNameSpans].filter(
        (span) => span.innerText == name
      );
      if (filteredArray.length > 0) {
        msgSpan.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
        setTimeout(() => {
          msgSpan.innerText = "";
        }, 5000);
        return;
      }
    }

    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = ` <h2 class="city-name" data-name="${name},${
      sys.country
    }">
                <span>${name}</span>
                <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
                <img class="city-icon" src="${iconUrlAWS}">
                <figcaption>${weather[0].description}</figcaption>
          </figure>`;
    listCities.append(createdLi);

    //Capturing => parent to child
    listCities.addEventListener("click", (e) => {
      alert("List clicked!");
    });

    //Bubbling => child to parent
    createdLi.addEventListener("click", (e) => {
      // alert("li element clicked");
      window.location.href = `https://openweathermap.org/find?q=${name}`;
    });
  } catch (error) {
    msgSpan.innerText = `City Not Found !`;
    setTimeout(() => {
      msgSpan.innerText = "";
    }, 5000);
  }
};

// ! -------------- INTERVIEW QUESTION -------------- //
// ? .class .class vs. .class.class
// ? inline(-HTML-), addEventListener, onClick, setAttribute("submit", submitFunction) - to set click method.
// ? target vs. currentTarget
// ? Status Codes Meanings
// ? What is Http and http reques and endpoint
// ? //append vs. prepend
// ? filter, map, reduce, forEach ==> array
// ? forEach => nodeList

// ! -------------- ------------------ -------------- //
