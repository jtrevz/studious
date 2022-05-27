import React, {useState} from "react";
import Set from "../../components/Set";

export default function Flashcards() {
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
