import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import NavBar from "../../components/NavBar";
import { BsPlusCircleFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import "./styles.css";
import { useAuthContext } from "./../../utils/AuthContext";
import { useNewCardContext } from "./../../utils/NewCardContext";

export default function Set() {
  const [sets, setSets] = useState([]);
  const [newSet, setNewSet] = useState([]);
  const { currentUser } = useAuthContext();

  const { estNewSet } = useNewCardContext();

  const cardCollectionRef = collection(db, "sets");

  const q = query(
    collection(db, "sets"),
    where("author", "==", currentUser.uid)
  );

  const createNewSet = async () => {
    await addDoc(cardCollectionRef, {
      name: newSet,
      author: currentUser.uid,
    }).then((set) => estNewSet(set.id));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Create Set
    </Tooltip>
  );

  const navigate = useNavigate();
  const navigateNewSet = async () => {
    await createNewSet();
    navigate("/newset");
  };
  const navigateSet = () => {
    createNewSet();
    navigate("/sets");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getSets = async () => {
    const data = await getDocs(q);
    await setSets(data.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
  };

  useEffect(() => {
    getSets();
  }, []);

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <h1 className="pageTitle">Your Sets</h1>
          </Col>
          <Col className="addButtonContainer">
            <OverlayTrigger
              delay={{ hide: 450, show: 300 }}
              overlay={renderTooltip}
              placement="left"
            >
              <Button className="addButtonCont">
                <BsPlusCircleFill className="addButton" onClick={handleShow} />
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          {sets.length > 0 ? (
            sets.map((set) => (
              <Col
                s={12}
                md={6}
                lg={4}
                xl={4}
                xxl={3}
                className="cardColumn"
                key={set.key}
              >
                <Card
                  className="setCard"
                  onClick={() => {
                    estNewSet(set.key, set.name);
                    navigateSet();
                  }}
                >
                  <Card.Title className="setName">{set.name}</Card.Title>
                  {/* <Card.Subtitle className="cardAmount text-muted">
                    {set.size} cards
                  </Card.Subtitle> */}
                </Card>
              </Col>
            ))
          ) : (
            <Spinner animation="border" />
          )}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="">Create New Set</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingName"
                label="Set Name"
                className="mb-3"
              >
                <Form.Control
                  type="Name"
                  placeholder="Latin Ch. 1"
                  autoFocus
                  onChange={(e) => setNewSet(e.target.value)}
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
            <Modal.Footer>
              <Button
                onClick={() => {
                  handleClose();
                  navigateNewSet();
                }}
              >
                Create Set
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
