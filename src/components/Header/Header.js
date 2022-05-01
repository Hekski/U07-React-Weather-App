import { useState } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Header.css";
import here from "../../assets/wi-here.svg";
import smoke from "../../assets/Weather/wi-storm-showers.svg";

const Header = ({ setUnits, handleSearch, handleHereClicked }) => {
  const [unitClicked, setUnitClicked] = useState("metric");
  const [newSearch, setNewSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(newSearch);
    setNewSearch("");
  };

  const btnClicked = (unit) => {
    setUnits(unit);
    setUnitClicked(unit);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center pt-2">
        <div className="d-flex">
          <h1 className="logo display-5">Weddy</h1>
          <img className="logo-cloud" src={smoke} alt="logo" />
        </div>

        <div className="d-flex">
          
          <button className="unitBtn me-2" onClick={() => btnClicked("metric")}>
            <h3>C&deg;</h3>
          </button>
          <button className="unitBtn me-2" onClick={() => btnClicked("imperial")}>
            <h3>F&deg;</h3>
          </button>

          <div className="d-flex flex-row">
            <Form controlId="formLocation" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="text"
                id="input"
                placeholder="Enter a Location"
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value)}
              />
            </Form>
            <button
              className="here-btn ms-1"
              onClick={() => handleHereClicked("")}
            >
              <img src={here} className="here ms-3" alt="Your location" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
