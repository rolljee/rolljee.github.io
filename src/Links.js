import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "./components/ListGroupItem";

function Links() {
  const links = [
    {
      title: "Scaleway white book",
      link: "https://www.scaleway.com/fr/livre-blanc-multi-cloud/",
      description: "Scaleway multicloud white book",
    },
    {
      title: "Awesome architecture",
      link: "https://awesome-architecture.com/software-architecture/",
      description: "Awesome list of Software architecture",
    },
    {
      title: "Kuzzle blog",
      link: "https://blog.kuzzle.io/tag/engineering",
      description:
        "Kuzzle is an open source software platform for the Internet of Things and data management Kuzzle IoT : Open Source Platform to simplify the deployment of your IoT applications Explore Kuzzle IoT",
    },
    {
      title: "Free Ebooks",
      link: "https://github.com/EbookFoundation/free-programming-books",
      description:
        "This list was originally a clone of StackOverflow - List of Freely Available Programming Books with contributions from Karan Bhangui and George Stocker. The list was moved to GitHub by Victor Felder for collaborative updating and maintenance. It has grown to become one of GitHub's most popular repositories, with 271,000+ stars, about 9,700 watchers, more than 8,300 commits, 2,400+ contributors, and 54,000+ forks.",
    },
    {
      title: "minimalist news",
      link: "https://www.newsminimalist.com",
      description:
        "Find here a minimalist news website that list all the news from the world",
    },
  ];

  return (
    <Row>
      <Row className="text-center">
        <Col>
          <h3 className="font-header">Links and resources</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {links.map((link) => listGroupItem(link))}
          </ListGroup>
        </Col>
      </Row>
    </Row>
  );
}

export default Links;
