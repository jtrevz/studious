import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NewCardContext from "../../contexts/NewCardContext";

export default function NewCard({ handleClose }) {
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");

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
              onChange={(e) => setNewFront({ front: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Card Back, ">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="back"
              placeholder="study, zeal, pursuit "
              rows={3}
              onChange={(e) => setNewBack({ back: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Card
        </Button>
      </Modal.Footer>
    </div>
  );
}
