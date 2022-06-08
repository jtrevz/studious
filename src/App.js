import React from "react";
import "./App.css";
import Flashcards from "./pages/Flashcards";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { NewCardProvider } from "./contexts/NewCardContext";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <NewCardProvider>
          <Flashcards />
        </NewCardProvider>
      </div>
    </div>
  );
}

export default App;
