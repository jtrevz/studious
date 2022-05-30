import logo from "./logo.svg";
import "./App.css";
import Flashcards from "./pages/Flashcards";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar bg="info" variant="dark" sticky="top">
        <Navbar.Brand>
          <img src={logo} />
          {""}
          studious
        </Navbar.Brand>
      </Navbar>
      <div className="content">
        <Flashcards />
      </div>
    </div>
  );
}

export default App;
