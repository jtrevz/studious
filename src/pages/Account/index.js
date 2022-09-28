import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import stickFigure from "../../utils/pics/rihannastickfigure.jpeg";
import NavBar from "../../components/NavBar";
import { BsPencil } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { useAuthContext } from "../../utils/AuthContext";
import "./styles.css";

export default function Account() {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuthContext();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [showNameEdit, setShowNameEdit] = useState(false);
  const [showEditEmail, setShowEditEmail] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);

  const handleClose = () => {
    setShowEditEmail(false);
    setShowNameEdit(false);
    setShowEditPassword(false);
    setError("");
    setMessage("");
  };

  const handleShow = (type) => {
    if (type === "editName") {
      setShowNameEdit(true);
    } else if (type === "editEmail") {
      setShowEditEmail(true);
    } else if (type === "editPassword") {
      setShowEditPassword(true);
    }
  };

  async function handleSubmitPassword(e) {
    e.preventDefault();

    if (passwordRef && passwordRef.current.value < 6) {
      return setError("Password must be at least 6 characters long");
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setMessage("");
      setLoading(true);
      console.log(passwordRef.current.value);
      await updateUserPassword(passwordRef.current.value);
      setMessage("Password updated successfully");
    } catch {
      setError("Failed to update account");
    }
    setLoading(false);
  }

  async function handleSubmitEmail(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await updateUserEmail(emailRef.current.value);
      setMessage("Email updated successfully");
    } catch {
      setError("Failed to update account");
    }
    setLoading(false);
  }

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="d-flex justify-content-start">
          <div className="accountPTitle">Account Settings</div>
        </Row>
      </Container>
      <Container className="accountCont mt-2">
        <Row className="infoRow">
          <Col
            className="d-flex justify-content-center userPic userCard"
            sm={4}
          >
            <div className="imageCont d-flex justify-content-center">
              <img id="userPicture" src={stickFigure} alt=""></img>
              <div className="userND">
                @<span className="bigUserName">jtrevz</span>
              </div>
            </div>
          </Col>
          <Col sm={7} className="userInfo userCard">
            <Row className="inputCards inTop">
              <Col className="accountInfoText col flex-grow-4">
                <h3 className="inputTitles">Name</h3>
                <p className="inputText">Jennifer Trevizo</p>
              </Col>
              <Col className="accountLink col ml-auto">
                <BsPencil
                  className="accTool"
                  onClick={() => handleShow("editName")}
                />
              </Col>
            </Row>
            <Row className="inputCards">
              <Col className="accountInfoText col flex-grow-4">
                <h3 className="inputTitles">Email</h3>
                <p className="inputText">{currentUser.email}</p>
              </Col>
              <Col className="accountLink col ml-auto">
                <BsPencil
                  className="accTool"
                  onClick={() => handleShow("editEmail")}
                />
              </Col>
            </Row>
            <Row className="inputCards inBottom">
              <Col className="accountInfoText col flex-grow-4">
                <h3 className="inputTitles">Password </h3>
                <p className="inputText"></p>
              </Col>
              <Col className="accountLink col ml-auto">
                <BsPencil
                  className="accTool"
                  onClick={() => handleShow("editPassword")}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal show={showNameEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="jFont">Edit Name</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="editSet">
              <Form.Control
                type="name"
                defaultValue="CURRENT NAME"
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="mb-0">
            <Button
              style={{ backgroundColor: "#e85a4f", borderColor: "#e85a4f" }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal show={showEditEmail} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="jFont">Edit Email</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form.Group className="editSet">
              <Form.Control
                type="email"
                ref={emailRef}
                defaultValue={currentUser.email}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="mb-0">
            <Button
              style={{ backgroundColor: "#e85a4f", borderColor: "#e85a4f" }}
              type="submit"
              disabled={loading}
              onClick={handleSubmitEmail}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal show={showEditPassword} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="jFont">Edit Password</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmitPassword}>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form.Group className="editSet mb-3">
              <Form.Control
                type="new-password"
                ref={passwordRef}
                placeholder="Write new password here"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="editSet mt-3">
              <Form.Control
                type="new-password"
                ref={confirmPasswordRef}
                placeholder="Confirm new password"
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="mb-0">
            <Button
              style={{ backgroundColor: "#e85a4f", borderColor: "#e85a4f" }}
              type="submit"
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
