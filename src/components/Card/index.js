import React, { useState } from "react";
import Set from "../Set";

export default function Card() {
  const [cards, setCards] = useState(sampleInfo);
  return <Set cards={cards}></Set>;
}

const sampleInfo = [
  {
    id: 1,
    front: "studium",
    back: "to study or pursuit",
  },
  {
    id: 2,
    front: "amicus",
    back: "friend, companion",
  },
  {
    id: 3,
    front: "pater",
    back: "father",
  },
];
