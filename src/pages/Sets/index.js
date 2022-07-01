import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { BsFillLightningFill, BsPencil } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

export default function Sets() {
  const [cards, setCards] = useState([]);
  const cardCollectionRef = collection(db, "card");

  const getCards = async () => {
    const data = await getDocs(cardCollectionRef);
    await setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCards();
  }, []);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Latin Ch. 1</h1>
          </Col>
          <Col>
            <div>
              <BsFillLightningFill />
              <BsPencil />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {cards.length > 0 ? (
              cards.map((card) => <div>{card.front}</div>)
            ) : (
              <Spinner animation="border" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
