import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function Tools() {
  const tools = [
    {
      link: "https://github.com/linuxserver/Heimdall",
      description: "An application dashboard and launcher",
    },
    {
      link: "https://www.terraform.io/",
      description: "Terraform infrastructure management as code",
    },
    {
      link: "https://www.ansible.com/",
      description: "Ansible is a tool for automating deployment",
    },
    {
      link: "https://www.notion.so/",
      description: "Notion is a collaborative project management tool",
    },
    {
      link: "https://asana.com/fr",
      description: "Asana, manage your work as a team",
    },
    {
      link: "https://github.com/",
      description: "Github Collaborative platform for code",
    },
    {
      link: "https://github.com/lensapp/lens",
      description: "Lens - The way the world runs Kubernetes ",
    },
    {
      link: "https://github.com/microsoft/vscode",
      description: "VSCode, because it is my favorite code editor",
    }
  ];

  return (
    <Row>
      <Row>
        <Col>
          <h1>Tools</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>See here, some of the tools I use or used</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {tools.map((tool) => (
              <ListGroup.Item>
                <a href={tool.link}>{tool.description}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Row>
  );
}

export default Tools;
