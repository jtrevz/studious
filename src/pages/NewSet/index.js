import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNewCardContext } from "./../../utils/NewCardContext";
import "./styles.css";

export default function NewSet() {
  const { currentSet } = useNewCardContext();

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="setNameContainer">
            <h1 className="setName">Latin Ch. 2</h1>
          </Col>
        </Row>
        <Row xs={1} className="cardContainer">
          <Col md={4}>
            <div className="term">hello</div>
          </Col>
          <Col md={8}>
            <div className="description">hello</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
