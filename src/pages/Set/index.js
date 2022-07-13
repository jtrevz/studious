import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { BsPlusCircleFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./styles.css";
import { useNewCardContext } from "./../../utils/NewCardContext";

export default function Set() {
  const [sets, setSets] = useState(sampleSets);
  const [newSet, setNewSet] = useState("");

  const { estNewSet } = useNewCardContext();

  const cardCollectionRef = collection(db, "sets");
  const createNewSet = async () => {
    await addDoc(cardCollectionRef, { name: newSet }).then((set) =>
      estNewSet(set.id, newSet)
    );
  };

  const navigate = useNavigate();
  const navigateNewSet = () => {
    navigate("/newset");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="pageTitle">Your Sets</h1>
          </Col>
          <Col className="addButtonContainer">
            <BsPlusCircleFill className="addButton" onClick={handleShow} />
          </Col>
        </Row>
        <Row>
          {sets.map((set) => (
            <Col s={12} md={6} lg={4} xl={4} xxl={3} className="cardColumn">
              <Card className="setCard" key={set.name}>
                <Card.Title className="setName">{set.name}</Card.Title>
                <Card.Subtitle className="cardAmount text-muted">
                  {set.amount} cards
                </Card.Subtitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="">Create New Set</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingName"
                label="Set Name"
                className="mb-3"
              >
                <Form.Control
                  type="Name"
                  placeholder="Latin Ch. 1"
                  autoFocus
                  onChange={(e) => setNewSet(e.target.value)}
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
            <Modal.Footer>
              <Button
                onClick={() => {
                  createNewSet();
                  handleClose();
                  navigateNewSet();
                }}
              >
                Create Set
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const sampleSets = [
  {
    name: "Ch. 14 Federal and State",
    amount: 17,
  },
  {
    name: "Ch. 15 Contemporary Real Estate",
    amount: 12,
  },
  {
    name: "Ch. 13 VA Loans",
    amount: 19,
  },
];
