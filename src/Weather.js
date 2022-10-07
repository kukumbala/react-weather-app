import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import "./Weather.css";

export default function Weather() {
  let [cityName, setCityName] = useState("null");
  let apiKey = `dbfe710d4217359672738bda52809ad7`;
  let [currentWeather, setCurrentWeather] = useState({});
  setCurrentWeather.icon = `http://openweathermap.org/img/wn/04d@2x.png`;
  console.log(currentWeather.icon);

  function takeCityName(event) {
    setCityName(event.target.value);
  }

  function getWeather(event) {
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

  // let iconUrl = `http://openweathermap.org/img/wn/${currentWeatherIconIndex}@2x.png`;
  return (
    <div className="Weather">
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
  );
}
