import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "../components/ListGroupItem";

import blogs from "./blogs.json";

function Blog() {
  return (
    <Row>
      <Col>
        <ListGroup variant="flush">
          {blogs.map((link) => listGroupItem(link))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Blog;
