import React from "react";
import "./App.css";
import Flashcards from "./pages/Flashcards";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NewCardContext from "./contexts/NewCardContext";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <NewCardContext.Provider>
          <Flashcards />
        </NewCardContext.Provider>
      </div>
    </div>
  );
}

export default App;
