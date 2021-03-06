import "./Day.css";
import { Container } from "react-bootstrap";
import time from "../../assets/wi-time-4.svg";
import hum from "../../assets/wi-humidity.svg";
import temp from "../../assets/wi-thermometer.svg";
import wind from "../../assets/wi-small-craft-advisory.svg";


const unixTimeToDate = (unixUTC) => {
  return new Date(unixUTC * 1000);
};

const options = {
  time: {
    hour: "2-digit",
  },
};

const Day = ({ dataday, units }) => {
  return (
    <Container>
      <div className="pb-3 border-bottom">
        <h4 className="pt-4 pb-2">Next 24 hours</h4>
        <ul className="Hour d-flex flex-row justify-content-around mb-3">
          <img className="time" src={time} alt="Wind direction" />
          {dataday.map((item) => (
            <>
              <li key={item}>
                <strong>
                  {unixTimeToDate(item.dt).toLocaleTimeString([], options.time)}
                </strong>
              </li>
            </>
          ))}
        </ul>
        <ul className="Temp d-flex flex-row text-start justify-content-around mb-3">
          <img className="time" src={temp} alt="Wind direction" />
          {dataday.map((item) => (
            <>
              <li key={item}>
                {Math.round(item.main.temp)}
                <span>&deg;</span>
              </li>
            </>
          ))}
        </ul>
        <ul className="Temp d-flex flex-row text-start justify-content-around mb-3">
          <img
              className="hum"
              src={hum}
              alt="Wind direction"
            />
          {dataday.map((item) => (
            <>
              <li key={item.list}>{Math.round(item.main.humidity)}</li>
            </>
          ))}
        </ul>
        <ul className="Temp d-flex flex-row text-start justify-content-around mb-3">
          <img
              className="time"
              src={wind}
              alt="Wind direction"
            />
          {dataday.map((item) => (
            <>
              <li key={item.list}>
                {Math.round(item.wind.speed)}
                <small>{units.speed}</small>
              </li>
            </>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Day;

// Inspiration
//https://stackoverflow.com/questions/38282997/rendering-an-array-map-in-react
