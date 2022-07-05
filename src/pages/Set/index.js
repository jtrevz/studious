import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./styles.css";

export default function Set() {
  const [sets, setSets] = useState(sampleSets);
  return (
    <div>
      <Container fluid>
        <Row>
          <h1>Your Sets</h1>
        </Row>
        <Row>
          {sets.map((set) => (
            <Card key={set.name}>
              <Card.Title>{set.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {set.amount} cards
              </Card.Subtitle>
            </Card>
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
