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
      <Container>
        <Row>
          <Col className="setContainer">
            <h1 className="setName">{currentSet}</h1>
          </Col>
        </Row>
        <Row xs={12} className="cardContainer">
          <Col sm={12} md={4}>
            <div className="term">hello</div>
          </Col>
          <Col>
            <div className="line"></div>
          </Col>
          <Col sm={12} md={8}>
            <div className="description col-sm-12  col-7">hello</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
