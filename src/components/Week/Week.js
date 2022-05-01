import "./Week.css";
import { Container } from "react-bootstrap";

const unixTimeToDate = (unixUTC) => {
  return new Date(unixUTC * 1000);
};

const options = {
  time: {
    hour: "2-digit",
  },
};

const Week = ({ dataweek }) => {
  return (
    <Container>
      <div className="pb-3 border-bottom">
        <h4 className="pt-3 pb-2">Next 7 days</h4>
        <ul className="Item d-flex flex-row text-start justify-content-around mb-1">
          {dataweek.map((item) => (
            <>
              <li key={item}>
                {unixTimeToDate(item.dt).toLocaleTimeString([], options.time)}
              </li>
            </>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Week;
