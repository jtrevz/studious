import React from "react";
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { BsHourglassSplit } from "react-icons/bs";
import "./styles.css";

export default function Signup() {
  return (
    <div className="loginContent">
      <div className="container">
        <div className="brand">
          <h1>studious</h1>
          <BsHourglassSplit size={80} color="white" />
        </div>
        <Form className="form col-lg-6 col-md-8 col-sm-10 col-xs-11">
          <h3 className="bigBanner">Welcome to studious!</h3>

          <Row className="col-xs-12">
            <Col>
              {/* <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="fName" placeholder="First Name" />
              </Form.Group> */}
              <FloatingLabel label="First Name" className="mb-3">
                <Form.Control type="firstName" placeholder="Jane" />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Last Name" className="mb-3">
                <Form.Control type="lastName" placeholder="Smith" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel label="Email Address" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-3">
                <Form.Control type="password" placeholder="pass123" />
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
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}
