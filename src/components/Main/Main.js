import React from "react";
import "./Main.css";
import { Container } from "react-bootstrap";
import sunup from "../../assets/sunup.svg"
import sundown from "../../assets/sundown.svg";
import infoicon from "../../assets/infoicon.svg";

const Main = () => {

  const unixTimeToDate = (UTC, timeZoneOffset) => {
    const dateTime = UTC * 1000 + timeZoneOffset;
    return new Date(dateTime);
  };

  return (
    <Container>
      <div className="d-flex justify-content-around align-baseline">
        <h1 className="temp">15 °</h1>
        <div className="sunTime">
          <div className="d-flex">
            <img className="me-2" src={sunup} />
            <p>06:32</p>
          </div>
          <div className="d-flex">
            <img className="me-2" src={sundown} />
            <p>20:32</p>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex flex-direction-row justify-content-around ms-5">
          <div>
            <h4 className="scale">°C | °F</h4>
            <div className="info mt-5">
              <h4>Feels like: 20°</h4>
              <h4>Humidity: 40%</h4>
              <h4>Rain: 100%</h4>
              <h4>Cloudiness: 20%</h4>
            </div>
          </div>
          <img src={infoicon} className="infoIcon" />
        </div>
      </div>

    </Container>
  );
};

export default Main;
