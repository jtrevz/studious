import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useAuthContext } from "../../utils/AuthContext";
import { BsHourglassSplit } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function PasswordRecovery() {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      //   await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
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
        <Form
          className="form col-lg-6 col-md-8 col-sm-10 col-xs-11"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-4 text">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <FloatingLabel label="Email" className="mb-4">
            <Form.Control
              type="email"
              placeholder="jsmith@mail.com"
              ref={emailRef}
              required
            />
          </FloatingLabel>
          <Button
            disabled={loading}
            type="submit"
            style={{
              backgroundColor: "#e85a4f",
              borderColor: "#e85a4f",
            }}
            className="btn-custom w-100 mb-2"
          >
            Reset Password
          </Button>
          <h5 className="smallBanner pBanner d-flex justify-content-center mt-2">
            <a href="./login">Login</a>
          </h5>
        </Form>
        <h5 className="smallBanner mt-2">
          Don't have an account? <a href="./signup">Sign Up</a>
        </h5>
      </div>
    </div>
  );
}