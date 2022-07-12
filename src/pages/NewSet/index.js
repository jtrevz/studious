import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNewCardContext } from "./../../utils/NewCardContext";
import "./styles.css";

export default function NewSet() {
  const { currentSet } = useNewCardContext();

  const addCardInput = () => {};

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="setNameContainer">
            <h1 className="setName">Latin Ch. 2</h1>
          </Col>
        </Row>
        <Row xs={1} className="cardContainer">
          <Form>
            <Col md={4}>
              <Form.Group className="mb-2 mt-3 term">
                <Form.Control
                  className="frontInput"
                  type="front"
                  defaultValue="term"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={8}>
              <Form.Group className="mb-2 description">
                <Form.Control
                  className="backInput"
                  as="textarea"
                  type="back"
                  defaultValue="description"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form>
        </Row>
        <Row className="buttonCont mb-3 mt-3">
          <Col md={12} className="d-flex justify-content-center">
            <Button
              className="mb-3 mt-3 addCardButton"
              style={{
                backgroundColor: "#e85a4f",
                borderColor: "#e85a4f",
              }}
              onClick={addCardInput}
            >
              Add Card
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
