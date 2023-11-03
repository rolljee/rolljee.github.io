import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "../components/ListGroupItem";

import links from "./links.json";

function Links() {
  return (
    <Row>
      <Col>
        <ListGroup variant="flush">
          {links.map((link) => listGroupItem(link))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Links;
