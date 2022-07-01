import React from "react";
import "./styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { BsHourglassSplit } from "react-icons/bs";
// import { BsLightbulbFill } from "react-icons/bs";
// import { BsLightbulb } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";

export default function NavBar() {
  return (
    <Navbar bg="myCustom" variant="dark" sticky="top" expand="md">
      <Navbar.Brand>
        <BsHourglassSplit className="logo" /> studious
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/collections">Collections</Nav.Link>
          <Nav.Link href="/sets">Sets</Nav.Link>
        </Nav>
        <Nav className="user">
          {/* <div className="pic">
              <BsPerson classname="userPFP" />
            </div> */}
          <NavDropdown title="jtrevz" align="end">
            <NavDropdown.Item>Account</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Sign out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
