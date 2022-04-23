import React from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-item-middle">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="logo display-5 mt-2">Header</h1>
        </div>
        <div>
          <Form.Group
            className="align-items-center mt-3"
            controlId="formLocation"
          >
            <Form.Control type="text" placeholder="Enter a Location" />
          </Form.Group>
        </div>
      </div>
    </Container>
  );
};

export default Header;
