import React, { useEffect, useState, useContext } from "react";
// import Set from "../../components/Set";
import Flashcard from "../../components/Flashcard";
import NewCard from "../../components/NewCard";
import NavBar from "../../components/NavBar";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsPlusCircleFill,
  // BsPencil,
} from "react-icons/bs";
import "./styles.css";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNewCardContext } from "./../../utils/NewCardContext";

export default function Flashcards() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  const { currentSet } = useNewCardContext();
  const q = query(collection(db, "card"), where("set", "==", currentSet.id));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const cardCollectionRef = collection(db, "card");

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

  const getCards = async () => {
    const data = await getDocs(q);
    await setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="buttons">
        <BsPlusCircleFill className="button" onClick={handleShow} />
        {/* <BsPencil className="button pencil" /> */}
      </div>
      <div className="flash">
        {cards.length > 0 ? (
          <Flashcard card={cards[currentCard]} key={currentCard} />
        ) : (
          <Spinner animation="border" />
        )}
        <div className="counter">
          <div className="arrows">
            <BsFillArrowLeftCircleFill className="arrow last" onClick={last} />
            <BsFillArrowRightCircleFill className="arrow next" onClick={next} />
          </div>
          <div className="count">{`${currentCard + 1} / ${cards.length}`}</div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Card</Modal.Title>
        </Modal.Header>
        <NewCard handleClose={handleClose} getCards={getCards} />
      </Modal>
    </div>
  );
}
