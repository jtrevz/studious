import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNewCardContext } from "./../../utils/NewCardContext";

export default function NewSet() {
  const { currentSet } = useNewCardContext();

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="setContainer">
            <h1 className="setName">{currentSet}</h1>
          </Col>
        </Row>
        <Row>
          <Col >
            <div className="term col-sm-12 col-4">hello</div>
            <div className="line"></div>
            <div className="description col-sm-12  col-7">hello</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
