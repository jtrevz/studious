import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { BsHourglassSplit } from "react-icons/bs";
import "./styles.css";

export default function Login() {
  return (
    <div className="loginContent">
      <div className="container">
        <div className="brand">
          <h1>studious</h1>
          <BsHourglassSplit size={80} color="white" />
        </div>
        <Form className="form col-lg-6 col-md-8 col-sm-10 col-xs-11">
          <h3>Welcome Back!</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <h5 className="smallBanner">
            Don't have an account? <a href="./signup">Sign Up</a>
          </h5>
          <Button className="btn-custom float-end">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
