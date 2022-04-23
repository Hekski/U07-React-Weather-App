import "./Location.css";
import { Container } from "react-bootstrap";

const Location = () => {
  return (
    <Container className="d-flex justify-content-center mt-4">
      <h5 className="display-5 me-4">Luleå</h5>
      <h5 className="display-5 me-4">15 april</h5>
      <h5 className="display-5">11:34</h5>
    </Container>
  );
};

export default Location;