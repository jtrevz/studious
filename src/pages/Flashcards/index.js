import React, { useEffect, useState, useContext } from "react";
import Set from "../../components/Set";
import Flashcard from "../../components/Flashcard";
import NewCard from "../../components/NewCard";
import { Modal, Button } from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsPlusCircleFill,
  BsPencil,
} from "react-icons/bs";
import "./styles.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NewCardContext from "./../../contexts/NewCardContext";

export default function Flashcards() {
  const [cards, setCards] = useState(sampleInfo);
  const [currentCard, setCurrentCard] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { newCard } = useContext(NewCardContext);

  const cardCollectionRef = collection(db, "card");

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

  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(cardCollectionRef);
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCards();
  }, []);

  return (
    <div>
      <div className="buttons">
        <BsPlusCircleFill className="button" onClick={handleShow} />
      </div>
      <div>
        <Flashcard card={cards[currentCard]} key={currentCard} />
        <div className="counter">
          <div className="arrows">
            <BsFillArrowLeftCircleFill className="arrow" onClick={last} />
            <BsFillArrowRightCircleFill className="arrow" onClick={next} />
          </div>
          <div>{`${currentCard + 1} / ${cards.length}`}</div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewCard />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Card
          </Button>
        </Modal.Footer>
      </Modal>
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
