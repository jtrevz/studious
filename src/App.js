import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sets from "./pages/Sets";
import Set from "./pages/Set";
import NewSet from "./pages/NewSet";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Account from "./pages/Account";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./pages/ResetPassword";
import { NewCardProvider } from "./utils/NewCardContext";
import { AuthContextProvider } from "./utils/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <div className="content">
          <Router>
            <NewCardProvider>
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route
                  exact
                  path="/reset-password"
                  element={<ResetPassword />}
                />
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="/" element={<Set />} />
                </Route>
                <Route exact path="/sets" element={<PrivateRoute />}>
                  <Route exact path="/sets" element={<Sets />} />
                </Route>
                <Route exact path="/collection" element={<PrivateRoute />}>
                  <Route exact path="/collection" element={<Set />} />
                </Route>
                <Route exact path="/newset" element={<PrivateRoute />}>
                  <Route path="/newset" element={<NewSet />} />
                </Route>
                <Route exact path="/account" element={<PrivateRoute />}>
                  <Route exact path="/account" element={<Account />} />
                </Route>
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
