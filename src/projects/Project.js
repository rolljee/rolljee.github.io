import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "../components/ListGroupItem";

import projects from "./projects.json";

function Project() {
  return (
    <Row>
      <Col>
        <ListGroup variant="flush">
          {projects.map((project) => listGroupItem(project))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Project;
