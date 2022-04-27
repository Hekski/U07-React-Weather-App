import { useState } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = ({ setUnits }) => {
  const [unitClicked, setUnitClicked] = useState("metric");

  const unit = {
    metric: { unit: "metric", deg: "C", speed: "m/s" },
    imperial: { unit: "imperial", deg: "F", speed: "mph" },
  };

  

  const btnClicked = (unit) => {
    setUnits(unit);
    setUnitClicked(unit.unit);
    console.log(unit);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-middle">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="logo display-5 mt-2">Header</h1>
        </div>

        <div className="d-flex">
          <button
            href="#"
            className="unitBtn me-2"
            onClick={() => btnClicked(unit.metric)}
          >
            C&deg;{" "}
          </button>
          <button
            href="#"
            className="unitBtn me-2"
            onClick={() => btnClicked(unit.imperial)}
          >
            F&deg;
          </button>

          <div className="d-flex flex-row align-middle">
            <Form.Group
              className="align-items-center mt-3"
              controlId="formLocation"
            >
              <Form.Control type="text" placeholder="Enter a Location" />
            </Form.Group>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
