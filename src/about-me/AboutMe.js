import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Links() {
  return (
    <Row>
      <Col>
        <Row className="row text-center">
          <Col className="col">
            <img src="/me.jpeg" alt="me" />
          </Col>
        </Row>
        <Row className="row text-center mt-5">
          <Col className="col">
            I am Nicolas Riquelme, also known as Ricky, I am a father of a lovely little girl.<br />
            I currently work at Kuzzle.io as there lead software engineer.<br />
            I am specialized in backend development and infrastructure.<br />
            I have been working with NodeJS and Kubernetes (and a lot of other tools) for the last few years.<br />
            I have built a lot of tools to help me and my team to be more efficient.<br /><br />
            My best quality is that I never give up and will always try to close any subject I am involved in.<br />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Links;
