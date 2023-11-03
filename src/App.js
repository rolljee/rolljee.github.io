import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./App.css";
import AboutMe from "./about-me/AboutMe";
import Project from "./projects/Project";
import Tools from "./tools/Tools";
import Links from "./links/Links";


function App() {
  return (
    <Container>
      <Row className="row text-center">
        <Col className="col">
          <img src="/Intro.png" alt="Intro.png" />
        </Col>
      </Row>
      <Tabs
        defaultActiveKey="projects"
        id="default-tab"
        className="mb-3"
        justify
      >
        <Tab eventKey="projects" title="Projects">
          <Project />
        </Tab>
        <Tab eventKey="tools" title="Tools">
          <Tools />
        </Tab>
        <Tab eventKey="links" title="Links">
          <Links />
        </Tab>

        <Tab eventKey="about-me" title="About me">
          <AboutMe />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
