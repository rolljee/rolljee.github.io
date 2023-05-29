import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import Project from "./Project";
import Tools from "./Tools";
import Links from "./Links";

function App() {
  return (
    <Container>
      <Row className="row text-center">
        <Col className="col">
          <img src="/Intro.png" alt="Intro.png" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Project />
      </Row>
      <Row className="mt-4">
        <Tools />
      </Row>
      <Row className="mt-4">
        <Links />
      </Row>
    </Container>
  );
}

export default App;
