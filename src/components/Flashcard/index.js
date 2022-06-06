import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./styles.css";

export default function Flashcard({ card }) {
  const [flip, setFlip] = useState(false);
  return (
    <Card
      className={`flashcard ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">{card.front}</div>
      <div className="back">{card.back}</div>
    </Card>
  );
}
