window.addEventListener("load", () => {
  const temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  const temperatureDegree = document.querySelector(".temperature-degree");
  const locationTimezone = document.querySelector(".location-timezone");
  const weatherIcon = document.querySelector(".weather-icon");
  const degreeSection = document.querySelector(".degree-section");
  const temperatureSpan = document.querySelector(".temperature span");

  const api =
    "http://api.weatherapi.com/v1/current.json?key=b28be1a6ef48424c9bf125711222304&q=Skopje&aqi=no";

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      const { name, country } = data.location;
      const { temp_c, temp_f } = data.current;
      const { text, icon } = data.current.condition;
      //   console.log(name, country, temp_c, temp_f, text, icon);

      //   Set DOM elements from the API
      temperatureDegree.textContent = temp_c;
      locationTimezone.textContent = `${name} / ${country}`;
      temperatureDescription.textContent = text;
      weatherIcon.src = icon;

      //   Change temperature
      degreeSection.addEventListener("click", () => {
        if (temperatureSpan.textContent === "F") {
          temperatureSpan.textContent = "C";
          temperatureDegree.textContent = temp_c;
        } else {
          temperatureSpan.textContent = "F";
          temperatureDegree.textContent = temp_f;
        }
      });
    });
});
