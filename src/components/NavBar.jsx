import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { useTheme } from "../theme/ThemeContext";

const links = [
  { to: "/", label: "Blog", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/tools", label: "Tools" },
  { to: "/links", label: "Links" },
  { to: "/about-me", label: "About" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className="theme-toggle ms-lg-2"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" className="app-navbar py-2">
      <Container style={{ maxWidth: 960 }}>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          <span className="brand-dot" />
          Ricky
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">
            {links.map((link) => (
              <Nav.Link key={link.to} as={NavLink} to={link.to} end={link.end}>
                {link.label}
              </Nav.Link>
            ))}
            <ThemeToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
