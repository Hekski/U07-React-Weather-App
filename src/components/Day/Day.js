import "./Day.css";
import { Container } from "react-bootstrap";

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
        <h4 className="pt-3 pb-2">Next 24 hours</h4>
        <ul className="Hour d-flex flex-row text-start justify-content-around mb-1">
          <p>
            <strong>Hour</strong>
          </p>
          {dataday.map((item) => (
            <>
              <li key={item.list}>
                <strong>
                  {unixTimeToDate(item.dt).toLocaleTimeString([], options.time)}
                </strong>
              </li>
            </>
          ))}
        </ul>
        <ul className="Temp d-flex flex-row text-start justify-content-around mb-3">
          <strong>Temp</strong>
          {dataday.map((item) => (
            <>
              <li key={item.list}>
                {Math.round(item.main.temp)}
                <span>&deg;</span>
              </li>
            </>
          ))}
        </ul>
        <ul className="Temp d-flex flex-row text-start justify-content-around mb-3">
          <strong>Hum</strong>
          {dataday.map((item) => (
            <>
              <li key={item.list}>{Math.round(item.main.humidity)}</li>
            </>
          ))}
        </ul>
        <ul className="Temp d-flex flex-row text-start justify-content-around mb-3">
          <strong>&nbsp;&nbsp;Wind</strong>
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
