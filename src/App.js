import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Flashcards from "./pages/Flashcards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sets from "./pages/Sets";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { NewCardProvider } from "./utils/NewCardContext";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Router>
          <NewCardProvider>
            <Routes>
              <Route exact path="/" element={<Flashcards />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="sets" element={<Sets />} />
            </Routes>
          </NewCardProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
