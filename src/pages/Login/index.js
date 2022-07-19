import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
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
          <FloatingLabel
            controlId="floatingusername"
            label="Username"
            className="mb-3"
          >
            <Form.Control type="username" placeholder="jsmith" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingpassword"
            label="Password"
            className="mb-3 password"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>

          <h5 className="smallBanner">
            Don't have an account? <a href="./signup">Sign Up</a>
          </h5>
          <Button
            style={{
              backgroundColor: "#e85a4f",
              borderColor: "#e85a4f",
            }}
            className="btn-custom float-end"
          >
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}
