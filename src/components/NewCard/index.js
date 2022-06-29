import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import NewCardContext from "../../contexts/NewCardContext";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function NewCard({ handleClose, getCards }) {
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");

  const cardCollectionRef = collection(db, "card");

  const createNewCard = async () => {
    await addDoc(cardCollectionRef, { front: newFront, back: newBack });
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
          variant="primary"
          onClick={() => {
            createNewCard();
            handleClose();
            getCards();
          }}
        >
          Save Card
        </Button>
      </Modal.Footer>
    </div>
  );
}
