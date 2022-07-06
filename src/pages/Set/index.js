import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { BsPlusCircleFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import "./styles.css";

export default function Set() {
  const [sets, setSets] = useState(sampleSets);
  return (
    <div>
      <Container fluid>
        <Row className="header">
          <div>
            <h1 className="pageTitle">Your Sets</h1>
          </div>
          <div>
            <BsPlusCircleFill />
          </div>
        </Row>
        <Row>
          {sets.map((set) => (
            <Col s={12} md={6} lg={4} xl={4} className="cardColumn">
              <Card className="setCard" key={set.name}>
                <Card.Title className="setName">{set.name}</Card.Title>
                <Card.Subtitle className="cardAmount text-muted">
                  {set.amount} cards
                </Card.Subtitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const sampleSets = [
  {
    name: "Ch. 14 Federal and State",
    amount: 17,
  },
  {
    name: "Ch. 15 Contemporary Real Estate",
    amount: 12,
  },
  {
    name: "Ch. 13 VA Loans",
    amount: 19,
  },
];
