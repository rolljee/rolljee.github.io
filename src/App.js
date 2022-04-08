import Container from "react-bootstrap/Container";
import Project from "./Project";
import Tools from "./Tools";
import Links from "./Links";

function App() {
  return (
    <Container fluid>
      <Project />
      <Tools />
      <Links />
    </Container>
  );
}

export default App;
