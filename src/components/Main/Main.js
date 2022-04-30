import "./Main.css";
import { Container } from "react-bootstrap";
import horizon from "../../assets/wi-horizon.svg";
import horizonalt from "../../assets/wi-horizon-alt.svg";
import cloudy from "../../assets/Weather/wi-cloudy.svg";
import clear from "../../assets/Weather/wi-day-sunny.svg";
import fog from "../../assets/Weather/wi-fog.svg";
import snow from "../../assets/Weather/wi-night-snow.svg";
import thunderstorm from "../../assets/Weather/wi-storm-showers.svg";
import drizzle from "../../assets/Weather/wi-storm-showers.svg";
import rain from "../../assets/Weather/wi-rain.svg";
import dust from "../../assets/Weather/wi-dust.svg";
import mist from "../../assets/Weather/wi-dust.svg";
import haze from "../../assets/Weather/wi-dust.svg";
import smoke from "../../assets/Weather/wi-dust.svg";
import logo from "../../assets/logo.svg";

const Main = ({ main, weather, clouds, visibility, sys, timezone, dt }) => {
  const unixTimeToDate = (UTC, timeZoneOffset) => {
    const dateTime = UTC * 1000 + timeZoneOffset;
    return new Date(dateTime);
  };

  const options = {
    time: {
      hour: "2-digit",
      minute: "2-digit",
    },
    date: {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    },
    sun: {
      hour: "2-digit",
      minute: "2-digit",
    },
  };

  const icons = {
    Clear: clear,
    Clouds: cloudy,
    Haze: haze,
    Dust: dust,
    Mist: mist,
    Rain: rain,
    Drizzle: drizzle,
    Thunderstorm: thunderstorm,
    Fog: fog,
    Smoke: smoke,
    Snow: snow,
  };

  const cloudIcon = icons[weather[0].main];

  return (
    <Container>
      <h6 className="date">
        {unixTimeToDate(dt, timezone).toLocaleTimeString([], options.date)}
      </h6>
      <h4 className="underscore">Mostly {weather[0].description}</h4>
      <div className="d-flex justify-content-around align-items-center">
        <h1 className="temp">
          {Math.round(main.temp)}
          <span>&deg;</span>
        </h1>
        <img src={cloudIcon} className="infoIcon" />
      </div>

      <div className="container d-flex justify-content-between align-items-end border-bottom">
        <img src={horizon} className="App-logo-horizon ms-3" />
        <img src={horizonalt} className="App-logo-horizon-alt me-4" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={horizonalt} className="App-logo-horizon-alt ms-4" />
        <img src={horizon} className="App-logo-horizon me-3" />
      </div>

      <div className="d-flex justify-content-between mt-1">
        <h2>
          {unixTimeToDate(sys.sunrise, timezone).toLocaleTimeString(
            [],
            options.sun
          )}
        </h2>
        <h2>
          {unixTimeToDate(sys.sunset, timezone).toLocaleTimeString(
            [],
            options.sun
          )}
        </h2>
      </div>

      <div className="d-flex mt-4 flex-direction-row justify-content-around align-items-center">
        <div className="text-start">
          <h4>
            Min temp&nbsp;&nbsp; {Math.round(main.temp_min)}
            <span>&deg;</span>
          </h4>
          <h4>
            Max temp&nbsp;&nbsp; {Math.round(main.temp_max)}
            <span>&deg;</span>
          </h4>
          <h4>
            Feels like&nbsp;&nbsp; {Math.round(main.feels_like)}
            <span>&deg;</span>
          </h4>
        </div>
        <div className="text-start">
          <h4>Visibility&nbsp;&nbsp; {visibility / 1000} km</h4>
          <h4>Humidity&nbsp;&nbsp; {main.humidity} %</h4>
          <h4>Cloudiness&nbsp;&nbsp; {clouds} %</h4>
        </div>
      </div>
    </Container>
  );
};

export default Main;
