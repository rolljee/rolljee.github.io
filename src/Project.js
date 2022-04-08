import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function Project() {
  const projects = [
    {
      link: "/ogame-ui/",
      description: "Tooling UI for Ogame",
    },
    {
      link: "https://github.com/rolljee/ogamejs",
      description: "OgameJS library",
    },
    {
      link: "https://github.com/rolljee/yt-background-downloader",
      description: "Download youtube background video",
    },
    {
      link: "https://github.com/rolljee/js-scdl",
      description: "Javascript Wrapper for SoundCloud Downloader (scdl)",
    },
    {
      link: "https://github.com/rolljee/i18n-file-translator",
      description: "i18n file translator using deepL",
    },
  ];

  return (
    <Row>
      <Row>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>See here, some of my public work</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {projects.map((project) => (
              <ListGroup.Item>
                <a href={project.link}>{project.description}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Row>
  );
}

export default Project;
