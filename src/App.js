import * as React from "react";
import { Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/navbar";
import ErrorPage from "./routes/error-page";
import Project from "./projects/Project";
import AboutMe from "./about-me/AboutMe";
import Tools from "./tools/Tools";
import Links from "./links/Links";
import Blog from "./blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Project />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tools",
    element: <Tools />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/links",
    element: <Links />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </React.StrictMode>
  );
}

export default App;
