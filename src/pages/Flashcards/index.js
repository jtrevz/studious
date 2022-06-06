import React, { useEffect, useState } from "react";
import Set from "../../components/Set";
import Flashcard from "../../components/Flashcard";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./styles.css";

export default function Flashcards() {
  const [cards, setCards] = useState(sampleInfo);
  const [currentCard, setCurrentCard] = useState(0);

  const next = () => {
    if (currentCard === cards.length - 1) {
      return setCurrentCard(0);
    }
    return setCurrentCard(currentCard + 1);
  };

  const last = () => {
    if (currentCard === 0) {
      return setCurrentCard(cards.length - 1);
    }
    return setCurrentCard(currentCard - 1);
  };

  // useEffect(() => {});

  return (
    <div>
      <Flashcard card={cards[currentCard]} key={currentCard} />
      <div>
        <BsFillArrowLeftCircleFill className="arrows" onClick={last} />
        <BsFillArrowRightCircleFill className="arrows" onClick={next} />
        <p>{`${currentCard + 1}/${cards.length}`}</p>
      </div>
    </div>
  );
}

const sampleInfo = [
  {
    id: 0,
    front: "studium",
    back: "to study or pursuit",
  },
  {
    id: 1,
    front: "amicus",
    back: "friend, companion",
  },
  {
    id: 2,
    front: "pater",
    back: "father",
  },
];
