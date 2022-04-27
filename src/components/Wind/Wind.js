import React from "react";
import { Container } from "react-bootstrap";
import windy from "../../assets/windy.svg";

const Wind = ({ wind, units }) => {
  return (
    <Container>
      <div className="container d-flex justify-content-around align-items-center mt-5">
        <img src={windy} style={{ transform: `rotate(${wind.deg}deg)` }} />
        <div>
          <h4>
            Wind <small>(gust wind)</small>
          </h4>
          <h2>
            {Math.round(wind.speed)} ({Math.round(wind.gust)}) {units.speed}
          </h2>
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default Wind;
