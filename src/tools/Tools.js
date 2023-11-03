import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "../components/ListGroupItem";

import tools from "./tools.json";

function Tools() {
  return (
    <Row>
      <Col>
        <ListGroup variant="flush">
          {tools.map((tool) => listGroupItem(tool))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Tools;
