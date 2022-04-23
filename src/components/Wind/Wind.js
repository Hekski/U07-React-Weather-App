import React from "react";
import { Container } from "react-bootstrap";
import wind from "../../assets/wind.svg";

const Wind = () => {
  return (
    <Container>
      <div className="container d-flex justify-content-around align-items-center mt-3">
        <img src={wind} className="infoIconWind" />
        <h4>
          Wind <small>(gust wind)</small>
        </h4>
        <h2>1 (2) m/s</h2>
      </div>
      <hr />
    </Container>
  );
};

export default Wind;
