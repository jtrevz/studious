import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import NavBar from "../../components/NavBar";
import { useNewCardContext } from "./../../utils/NewCardContext";
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./styles.css";

export default function NewSet() {
  const { currentSet } = useNewCardContext();
  const [input, setInput] = useState([
    { front: "", back: "", set: currentSet.id },
  ]);

  const cardCollectionRef = collection(db, "card");

  const handleFormChange = (i, e) => {
    let data = [...input];
    data[i][e.target.name] = e.target.value;
    data[i].set = currentSet.id;
    setInput(data);
  };

  const { estNewSet } = useNewCardContext();

  const addCardInput = () => {
    let newInput = { front: "", back: "", set: currentSet.id };
    setInput([...input, newInput]);
  };

  const inputAll = async () => {
    await input.forEach((card) => {
      addDoc(cardCollectionRef, card);
    });
  };

  const navigate = useNavigate();
  const navigateNewSet = () => {
    navigate("/sets");
  };

  return (
    <div>
      <NavBar/>
      <Container fluid>
        {currentSet.name ? (
          <>
            <Row className="mb-2 mt-1">
              <Col className="setNameContainer">
                <h1 className="setName" key={currentSet.id}>
                  {currentSet.name}
                </h1>
              </Col>
            </Row>
            <Row xs={1} className="cardContainer">
              <Form>
                {input.map((input, i) => (
                  <>
                    {i > 0 ? <Col className="cardLine"></Col> : null}
                    <Col md={1} className="mt-2 d-flex justify-content-start">
                      <h1 className="cardNumber">{i + 1}</h1>
                    </Col>
                    <Col className="iField mt-2">
                      <FloatingLabel controlId="floatingfront" label="Term">
                        <Form.Control
                          name="front"
                          placeholder="Term"
                          value={input.front}
                          key={i}
                          onChange={(e) => handleFormChange(i, e)}
                        ></Form.Control>
                      </FloatingLabel>
                    </Col>
                    <Col className="mb-1  iField">
                      <FloatingLabel label="Description" className="mb-2 ">
                        <Form.Control
                          placeholder="Description"
                          name="back"
                          value={input.back}
                          onChange={(e) => handleFormChange(i, e)}
                        ></Form.Control>
                      </FloatingLabel>
                    </Col>
                  </>
                ))}
              </Form>
              <Col md={12} className="d-flex justify-content-end">
                <Button
                  className="mb-3 addCardButton"
                  style={{
                    backgroundColor: "#376e6f",
                    borderColor: "#376e6f",
                  }}
                  onClick={addCardInput}
                >
                  + Add Card
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="d-flex justify-content-center">
                <Button
                  className="mt-4 addCardButton"
                  style={{
                    backgroundColor: "#e85a4f",
                    borderColor: "#e85a4f",
                  }}
                  onClick={() => {
                    inputAll();
                    navigateNewSet();
                    estNewSet(currentSet.id, currentSet.name)
                  }}
                >
                  Create Set
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <Spinner animation="border" />
        )}
      </Container>
    </div>
  );
}
