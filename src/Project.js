import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "./components/ListGroupItem";

function Project() {
  const projects = [
    {
      title: "OgameUI",
      link: "/ogame-ui/",
      description: "Tooling UI for Ogame, see universe, planets and players.",
    },
    {
      title: "OgameJS",
      link: "https://github.com/rolljee/ogamejs",
      description:
        "I always wanted an Ogame calculator that suited me, all those I could see online are, either too old in graphic terms, or it didn't work, it was calculating badly the number of resources to send for each exchange... So I decided to write a library in Javascript to create accessible methods to perform all calculations in a simple way for anyone who wants to create a graphical interface.",
    },
    {
      title: "Youtube Background Downloader",
      link: "https://github.com/rolljee/yt-background-downloader",
      description:
        "Download youtube background video, because some of them are just awesome",
    },
    {
      title: "SoundCloud Downloader",
      link: "https://github.com/rolljee/js-scdl",
      description: "Javascript Wrapper for SoundCloud Downloader (scdl)",
    },
    {
      title: "Soundtube",
      link: "https://github.com/rolljee/soundtube",
      description: "Youtube & Soundcloud downloader, you can now drop your links and download your music in mp3",
    }
  ];

  return (
    <Row>
      <Row className="text-center">
        <Col>
          <h3 className="font-header">Projects</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {projects.map((project) => listGroupItem(project))}
          </ListGroup>
        </Col>
      </Row>
    </Row>
  );
}

export default Project;
