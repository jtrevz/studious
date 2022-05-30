import logo from "./logo.svg";
import "./App.css";
import Flashcards from "./pages/Flashcards";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="info" variant="dark" sticky="top" expand="md">
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" /> studious
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className="link">Collections</Nav.Link>
            <Nav.Link className="link">Sets</Nav.Link>
          </Nav>
          <Nav className="link userNav">
            <NavDropdown title="jtrevz" className="user">
              <NavDropdown.Item>Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <Flashcards />
      </div>
    </div>
  );
}

export default App;
