import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1>Zaporizhzhia</h1>
          </div>
          <div className="col-7">
            <form>
              <input type="text" placeholder="Choose your city" id="city" />
              <button type="button" id="button">
                Search
              </button>
            </form>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-3">
            <h2> 10°C</h2>
            <ul>
              <li>Sunny</li>
            </ul>
          </div>
          <div className="col-2">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="Weather icon"
            />
          </div>
          <div className="col-4">
            <ul>
              <li>Pressure 1042hPa</li>
              <li>Humidity 56%</li>
              <li>Wind 2m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
