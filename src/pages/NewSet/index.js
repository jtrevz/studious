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
              <Form.Group className="mb-3 description">
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
      </Container>
    </div>
  );
}
