import "./App.css";
import Flashcards from "./pages/Flashcards";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { BsHourglassSplit } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Navbar bg="myCustom" variant="dark" sticky="top" expand="md">
        <Navbar.Brand>
          <BsHourglassSplit className="logo" /> studious
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>collections</Nav.Link>
            <Nav.Link>sets</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="jtrevz">
              <NavDropdown.Item>account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>sign out</NavDropdown.Item>
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
