import React, { useState } from "react";
import "./styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../utils/AuthContext";
import { BsHourglassSplit } from "react-icons/bs";

export default function NavBar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuthContext();

  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <Navbar bg="myCustom" variant="dark" sticky="top" expand="md">
        <Navbar.Brand className="brandPointer" href="/">
          <BsHourglassSplit className="logo" /> studious
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Sets</Nav.Link>
          </Nav>
          <Nav className="user">
            {/* <div className="pic">
              <BsPerson classname="userPFP" />
            </div> */}
            <NavDropdown title={currentUser.email} align="end">
              <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}
