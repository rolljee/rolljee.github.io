import * as React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, HashRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar";
import Project from "./projects/Project";
import AboutMe from "./about-me/AboutMe";
import Tools from "./tools/Tools";
import Links from "./links/Links";
import Blog from "./blog/Blog";
import BlogItem from "./blog/BlogItem";
import ErrorPage from "./routes/error-page";

function App() {
  return (
    <HashRouter basename="/">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="projects" element={<Project />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="tools" element={<Tools />} />
          <Route path="links" element={<Links />} />
          <Route path="blog/:id" element={<BlogItem />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
