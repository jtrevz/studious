import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function NewCard() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Term</Form.Label>
          <Form.Control type="front" placeholder="studium" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}
