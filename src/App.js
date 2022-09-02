import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Flashcards from "./pages/Flashcards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sets from "./pages/Sets";
import Set from "./pages/Set";
import NewSet from "./pages/NewSet";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Account from "./pages/Account";

import { NewCardProvider } from "./utils/NewCardContext";
import { AuthContextProvider } from "./utils/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <NavBar />
        <div className="content">
          <Router>
            <NewCardProvider>
              <Routes>
                <Route exact path="/" element={<Set />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="sets" element={<Sets />} />
                <Route exact path="collection" element={<Set />} />
                <Route path="/newset" element={<NewSet />} />
                <Route exact path="/account" element={<Account />} />
              </Routes>
            </NewCardProvider>
          </Router>
        </div>
      </AuthContextProvider>

      <Footer />
    </div>
  );
}

export default App;
