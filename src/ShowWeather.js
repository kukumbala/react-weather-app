import React from "react";

export default function ShowWeather(props) {
  return (
    <div className="row">
      <div className="col-4">
        <h1>{props.city}</h1>
        <h2>{Math.round(props.weather.temperature)}°C</h2>
        <h6>{props.weather.description}</h6>
      </div>
      <div className="col-2">
        <img src={props.weather.icon} alt="Weather icon" />
      </div>
      <div className="col-4">
        <ul>
          <li>Pressure {props.weather.pressure}hPa</li>
          <li>Humidity {props.weather.humidity}%</li>
          <li>Wind {props.weather.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
