import React, { useRef } from "react";
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { useAuthContext } from "../../utils/AuthContext";
import { BsHourglassSplit } from "react-icons/bs";
import "./styles.css";

export default function Signup() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { register } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();
    register(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className="loginContent">
      <div className="container">
        <div className="brand">
          <h1>studious</h1>
          <BsHourglassSplit size={80} color="white" />
        </div>
        <Form className="form col-lg-6 col-md-8 col-sm-10 col-xs-11">
          <h3 className="bigBanner">Welcome to studious!</h3>

          <FloatingLabel label="Username" className="mb-3">
            <Form.Control
              type="username"
              placeholder="jsmith"
              ref={userNameRef}
              required
            />
          </FloatingLabel>

          <FloatingLabel label="Email Address" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              ref={emailRef}
              required
            />
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="pass123"
              ref={passwordRef}
              required
            />
          </FloatingLabel>
          <h5 className="smallBanner">
            Already have an account? <a href="./login">Login here</a>
          </h5>
          <Button
            style={{
              backgroundColor: "#e85a4f",
              borderColor: "#e85a4f",
            }}
            className="btn-custom float-end"
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}
