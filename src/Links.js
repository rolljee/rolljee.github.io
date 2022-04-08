import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function Links() {
  const links = [
    {
      link: "https://www.scaleway.com/fr/livre-blanc-multi-cloud/",
      description: "Scaleway multicloud white book",
    },
    {
      link: "https://awesome-architecture.com/software-architecture/",
      description: "Awesome list of Software architecture",
    },
    {
      link: "https://blog.kuzzle.io/tag/engineering",
      description: "Kuzzle blog, You know for reading about my company",
    }
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
