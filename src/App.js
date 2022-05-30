import "./App.css";
import Flashcards from "./pages/Flashcards";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Flashcards />
    </div>
  );
}

export default App;
