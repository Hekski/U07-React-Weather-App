import React from "react";
import { Container } from "react-bootstrap";
import windy from "../../assets/windy.svg";

const Wind = ({ wind, units }) => {
  return (
    <Container>
      <div className="container d-flex justify-content-around align-items-center mt-3">
        <img src={windy} className="infoIconWind" />
        <h4>
          Wind <small>(gust wind)</small>
        </h4>
        <h2>
          {Math.round(wind.speed)} ({Math.round(wind.gust)})
        </h2>
      </div>
      <hr />
    </Container>
  );
};

export default Wind;
