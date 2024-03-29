import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useAuthContext } from "../../utils/AuthContext";
import { BsHourglassSplit } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div className="loginContent">
      <div className="container">
        <div className="brand d-flex align-items-center">
          <h1>studious</h1>
          <BsHourglassSplit color="white" className="studious" />
        </div>
        <Form
          className="form col-lg-6 col-md-8 col-sm-10 col-xs-12"
          onSubmit={handleSubmit}
        >
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
              placeholder="pass123"
              ref={passwordRef}
              required
              autoComplete="on"
            />
          </FloatingLabel>
          <h5 className="smallBanner">
            <a href="./reset-password">Forgot Password?</a>
          </h5>
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
