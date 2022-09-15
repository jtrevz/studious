import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useAuthContext } from "../../utils/AuthContext";
import { BsHourglassSplit } from "react-icons/bs";
import "./styles.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      register(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="loginContent">
      <div className="container">
        <div className="brand">
          <h1>studious</h1>
          <BsHourglassSplit size={80} color="white" />
        </div>
        <Form className="form col-lg-6 col-md-8 col-sm-10 col-xs-11">
          {error && <Alert variant="danger">{error}</Alert>}
          <FloatingLabel label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="jsmith@mail.com"
              ref={emailRef}
              required
            />
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-3 password">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </FloatingLabel>

          <h5 className="smallBanner">
            Don't have an account? <a href="./signup">Sign Up</a>
          </h5>
          <Button
            disabled={loading}
            type="submit"
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
