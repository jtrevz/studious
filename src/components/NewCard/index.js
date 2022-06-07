import React, { useEffect, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import NewCardContext  from '../../contexts/NewCardContext';

export default function NewCard(props) {
  const { NewCardInfo } = useContext(NewCardContext);

  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");

  return (
    <div>
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
        <Form.Group className="mb-3" controlId="Card Back, ">
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
    </div>
  );
}
