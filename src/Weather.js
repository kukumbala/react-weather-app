import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import "./Weather.css";

export default function Weather() {
  let [cityName, setCityName] = useState("Oslo");
  let [cityListener, setCityListener] = useState("1");
  let apiKey = `dbfe710d4217359672738bda52809ad7`;
  let [currentWeather, setCurrentWeather] = useState({});

  function takeCityName(event) {
    // setCityName(event.target.value);
    setCityListener(event.target.value);
  }

  function getWeather(event) {
    setCityName(cityListener);
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setCurrentWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  //if (cityListener === `1`) {
  //  axios
  //   .get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
  //   )
  //   .then(showWeather);
  //}

  return (
    <div className="Weather">
      <div className="WeatherCard">
        <div className="container">
          <form>
            <input
              type="text"
              placeholder="Enter a city..."
              onChange={takeCityName}
            />
            <button onClick={getWeather}>Search</button>
          </form>

          <br />
          <ShowWeather city={cityName} weather={currentWeather} />
        </div>
      </div>
      <div className="Footer">
        <a
          href="https://github.com/kukumbala/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
      </div>
    </div>
  );
}
