import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "./components/ListGroupItem";

function Tools() {
  const tools = [
    {
      title: "Heimdall",
      link: "https://github.com/linuxserver/Heimdall",
      description: "As the name suggests Heimdall Application Dashboard is a dashboard for all your web applications. It doesn't need to be limited to applications though, you can add links to anything you like. Heimdall is an elegant solution to organise all your web applications. It’s dedicated to this purpose so you won’t lose your links in a sea of bookmarks. Why not use it as your browser start page? It even has the ability to include a search bar using either Google, Bing or DuckDuckGo.",
    },
    {
      title: "Terraform",
      link: "https://www.terraform.io/",
      description: "With HashiCorp Terraform, provisioning and security can be automated with declarative infrastructure and policy as code. Infrastructure and policies are codified, shared, versioned, and executed within a workflow that is consistent across all infrastructure.",
    },
    {
      title: "Excalidraw",
      link: "https://excalidraw.com",
      description: "Draw like what you want in a white canvas, pen and paper style",
    },
    {
      title: "Erase.bg",
      link: "https://www.erase.bg/fr",
      description: "Remove background from any image",
    },
    {
      title: "Notion",
      link: "https://www.notion.so/",
      description: "Notion is a freemium productivity and note-taking web application developed by Notion Labs Inc. It offers organizational tools including task management, project tracking, to-do lists, bookmarking, and more.",
    },
    {
      title: "Asana",
      link: "https://asana.com/fr",
      description: "Asana, Inc., is an American software company based in San Francisco whose flagship Asana service is a web and mobile work management platform designed to help teams organize, track, and manage their work",
    },
    {
      title: "Github",
      link: "https://github.com/",
      description: "GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.",
    },
    {
      title: "Lens",
      link: "https://github.com/lensapp/lens",
      description: "Kubernetes is the OS for the cloud. Thousands of businesses and people develop and operate their Kubernetes on Lens — The largest and most advanced Kubernetes platform in the world.",
    },
    {
      title: "VSCode",
      link: "https://github.com/microsoft/vscode",
      description: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
    },
  ];

  return (
    <Row>
      <Row className="text-center">
        <Col>
          <h3 className="font-header">Tools I use or used</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {tools.map((tool) => listGroupItem(tool))}
          </ListGroup>
        </Col>
      </Row>
    </Row>
  );
}

export default Tools;
