import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import NewCardContext from "../../contexts/NewCardContext";

export default function NewCard(props) {
  // const [front, setFront] = useState("");
  // const [back, setBack] = useState("");

  const { createNewFront, createNewBack } = useContext(NewCardContext);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Card Front, Term">
          <Form.Label>Term</Form.Label>
          <Form.Control
            type="front"
            placeholder="studium"
            autoFocus
            onChange={(e) => createNewFront({ front: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Card Back, ">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            type="back"
            placeholder="study, zeal, pursuit "
            rows={3}
            onChange={(e) => createNewBack({ back: e.target.value })}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
