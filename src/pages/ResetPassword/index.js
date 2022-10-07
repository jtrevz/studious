import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useAuthContext } from "../../utils/AuthContext";
import { BsHourglassSplit } from "react-icons/bs";
import "./styles.css";

export default function ResetPassword() {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div className="loginContent">
      <div className="container">
        <div className="brand brand d-flex align-items-center">
          <h1>studious</h1>
          <BsHourglassSplit size={80} color="white" />
        </div>
        <Form
          className="form col-lg-6 col-md-8 col-sm-10 col-xs-11 py-3"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-3 text">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
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
        <h5 className="smallBanner mt-3">
          Don't have an account? <a href="./signup">Sign Up</a>
        </h5>
      </div>
    </div>
  );
}
