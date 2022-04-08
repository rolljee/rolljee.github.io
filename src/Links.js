import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function Links() {
  const links = [
    {
      link: "https://www.scaleway.com/fr/livre-blanc-multi-cloud/",
      description: "Scaleway multicloud white book",
    },
  ];

  return (
    <Row>
      <Row>
        <Col>
          <h1>Links</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>See here, some usefull links and resources to read</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {links.map((link) => (
              <ListGroup.Item>
                <a href={link.link}>{link.description}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Row>
  );
}

export default Links;
