import React from "react";
import Flashcard from "../Flashcard";

export default function Set({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => {
        return <Flashcard card={card} key={card.id}></Flashcard>;
      })}
    </div>
  );
}
