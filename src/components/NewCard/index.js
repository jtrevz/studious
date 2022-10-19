import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNewCardContext } from "./../../utils/NewCardContext";
// import NewCardContext from "../../contexts/NewCardContext";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./styles.css";

export default function NewCard({ handleClose, getCards, set, loading }) {
  const { currentSet } = useNewCardContext();
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");

  const cardCollectionRef = collection(db, "card");

  const createNewCard = async () => {
    await addDoc(cardCollectionRef, {
      front: newFront,
      back: newBack,
      set: set.id,
    });
  };

  return (
    <div>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="Card Front, Term">
            <Form.Label>Term</Form.Label>
            <Form.Control
              type="front"
              placeholder="studium"
              autoFocus
              onChange={(e) => setNewFront(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Card Back, Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="back"
              placeholder="study, zeal, pursuit "
              rows={3}
              onChange={(e) => setNewBack(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: "#e85a4f", borderColor: "#e85a4f" }}
          onClick={() => {
            createNewCard();
            handleClose();
            getCards();
            loading();
          }}
        >
          Save Card
        </Button>
      </Modal.Footer>
    </div>
  );
}
