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
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import "./styles.css";

export default function NewSet() {
  const [set, setSet] = useState([]);
  const [input, setInput] = useState([{ front: "", back: "", set: set.id }]);

  const [loading, setLoading] = useState(true);

  const cardCollectionRef = collection(db, "card");

  const handleFormChange = (i, e) => {
    let data = [...input];
    data[i][e.target.name] = e.target.value;
    data[i].set = set.id;
    setInput(data);
  };

  const { estNewSet } = useNewCardContext();

  const addCardInput = () => {
    let newInput = { front: "", back: "", set: set.id };
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

  const currentSetDoc = doc(db, "current", "ryO2O3JTb9yVDvOwL2bN");

  const getSet = async () => {
    if (loading === true) {
      const setdata = await getDoc(currentSetDoc);
      const tempSet = setdata.data();
      const currentDOMSet = await getDoc(doc(db, "sets", tempSet.author));
      console.log(currentDOMSet.id);
      await setSet({ id: currentDOMSet.id, name: currentDOMSet.data().name });
    } else {
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    getSet();
  }, [loading]);

  return (
    <div>
      <NavBar />
      <Container fluid>
        {set.name ? (
          <>
            <Row className="mb-2 mt-1">
              <Col className="setNameContainer">
                <h1 className="setName" key={set.id}>
                  {set.name}
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
                    estNewSet(set.id);
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
