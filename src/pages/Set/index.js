import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { BsPlusCircleFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import "./styles.css";
import { useNewCardContext } from "./../../utils/NewCardContext";

export default function Set() {
  const [sets, setSets] = useState([]);
  const [newSet, setNewSet] = useState([]);

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
  const navigateSet = () => {
    navigate("/sets");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getSets = async () => {
    const data = await getDocs(cardCollectionRef);
    await setSets(data.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
  };

  useEffect(() => {
    getSets();
  }, []);

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
          {sets.length > 0 ? (
            sets.map((set) => (
              <Col
                s={12}
                md={6}
                lg={4}
                xl={4}
                xxl={3}
                className="cardColumn"
                key={set.key}
              >
                <Card className="setCard" onClick={() => navigateSet()}>
                  <Card.Title className="setName">{set.name}</Card.Title>
                  {/* <Card.Subtitle className="cardAmount text-muted">
                    {set.size} cards
                  </Card.Subtitle> */}
                </Card>
              </Col>
            ))
          ) : (
            <Spinner animation="border" />
          )}
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
