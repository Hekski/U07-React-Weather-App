import "./Location.css";
import { Container } from "react-bootstrap";

const Location = ({ data, sys }) => {
  return (
    <Container className="title d-flex justify-content-center mt-4">
      <h3 className="display-5">
        {data.name} ({sys.country})
      </h3>
    </Container>
  );
};

export default Location;
