import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";

function listGroupItem(props) {
  const redirect = (p) => {
    window.open(p.link, "_blank");
  };

  return (
    <ListGroup.Item
      action
      onClick={() => redirect(props)}
      key={props.title}
      className="mt-3"
    >
      <Row description="horizontal" gap={3}>
        <Col xs={6} md={2}>
          <Image src={props.image} rounded />
        </Col>
        <Col xs={6} md={10} className="d-flex flex-column align-self-center">
          <h4 className="font-title">{props.title}</h4>
          <h6 className="font-description">{props.description}</h6>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default listGroupItem;
