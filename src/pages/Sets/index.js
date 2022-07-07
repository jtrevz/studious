import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { BsFillLightningFill, BsPencil, BsTrash } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import { updateDoc, doc } from "firebase/firestore";
import "./styles.css";

export default function Sets() {
  const [cards, setCards] = useState([]);
  const cardCollectionRef = collection(db, "card");

  const [updateFront, setUpdateFront] = useState("");
  const [updateBack, setUpdateBack] = useState("");
  const [updateID, setUpdateID] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getCards = async () => {
    const data = await getDocs(cardCollectionRef);
    await setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const updateCard = async (id) => {
    const cardDoc = doc(db, "card", id);
    const updates = {
      front: updateFront,
      back: updateBack,
    };

    await updateDoc(cardDoc, updates);
  };

  useEffect(() => {
    getCards();
  }, []);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="setContainer">
            <h1 className="setName">Latin Ch. 1</h1>
          </Col>
          <Col>
            <div className="setEdit">
              <BsFillLightningFill className="edit" />
              <BsPencil className="edit" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {cards.length > 0 ? (
              cards.map((card) => (
                <Stack direction="horizontal" className="flashcard">
                  <div className="term col-4">{card.front}</div>
                  <div className="line"></div>
                  <div className="description col-7">{card.back}</div>
                  <div className="col-1 cardBtn1">
                    <div className="cardBtn2">
                      <BsTrash />
                    </div>
                    <div className="cardBtn2">
                      <BsPencil
                        onClick={() => {
                          setUpdateFront(card.front);
                          setUpdateBack(card.back);
                          setUpdateID(card.id);
                          handleShow();
                        }}
                      />
                    </div>
                  </div>
                </Stack>
              ))
            ) : (
              <Spinner animation="border" />
            )}
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="jFont">Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                className="nFont"
                type="front"
                defaultValue={updateFront}
                onChange={(e) => setUpdateFront(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="nFont"
                as="textarea"
                type="back"
                defaultValue={updateBack}
                onChange={(e) => setUpdateBack(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Modal.Footer>
              <Button
                onClick={() => {
                  updateCard(updateID);
                  handleClose();
                  getCards();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
