import "./Main.css";
import { Container } from "react-bootstrap";
import sunup from "../../assets/sunup.svg";
import sundown from "../../assets/sundown.svg";
import infoicon from "../../assets/infoicon.svg";

const Main = ({ main, weather, clouds, visibility, sys, timezone }) => {
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
      weekday: "long",
      day: "numeric",
      month: "long",
    },
    sun: {
      hour: "2-digit",
      minute: "2-digit",
    },
  };

  /* const dateTime = new Date(1650855933);
  dateTime.toISOString();
  console.log("HEJ" + dateTime); */

  return (
    <Container>
      <h4>{weather[0].description}</h4>
      <div className="d-flex justify-content-around align-items-center">
        <h1 className="temp">
          {Math.round(main.temp)}
          <span>&deg;</span>
        </h1>
        <img src={infoicon} className="infoIcon" />
      </div>

      <div className="d-flex justify-content-around">
        <div>
          <img className="me-2" src={sunup} />
          <h2>
            {unixTimeToDate(sys.sunrise, timezone).toLocaleTimeString(
              [],
              options.sun
            )}
          </h2>
        </div>
        <div>
          <img className="me-2" src={sundown} />
          <h2>
            {unixTimeToDate(sys.sunset, timezone).toLocaleTimeString(
              [],
              options.sun
            )}
          </h2>
        </div>
      </div>

      <div>
        <div className="d-flex mt-5 flex-direction-row justify-content-around align-items-center">
          <div className="info">
            <h4>Visibility: {visibility / 1000} km</h4>
            <h4>
              Feels like: {Math.round(main.feels_like)}
              <span>&deg;</span>
            </h4>
          </div>
          <div>
            <h4>Humidity: {main.humidity} %</h4>
            <h4>Cloudiness: {clouds} %</h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
