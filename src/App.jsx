import { HashRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { ThemeProvider } from "./theme/ThemeContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blog from "./blog/Blog";
import BlogItem from "./blog/BlogItem";
import Project from "./projects/Project";
import Tools from "./tools/Tools";
import Links from "./links/Links";
import AboutMe from "./about-me/AboutMe";
import ErrorPage from "./routes/error-page";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <Container
            className="flex-grow-1 py-4 py-lg-5"
            style={{ maxWidth: 960 }}
          >
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="projects" element={<Project />} />
              <Route path="tools" element={<Tools />} />
              <Route path="links" element={<Links />} />
              <Route path="about-me" element={<AboutMe />} />
              <Route path="blog/:id" element={<BlogItem />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
