import React, { useState, useEffect } from "react";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { BsFillLightningFill, BsPencil, BsTrash } from "react-icons/bs";
import { TiWarningOutline } from "react-icons/ti";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { updateDoc, doc, deleteDoc, where, query } from "firebase/firestore";
import "./styles.css";

export default function Sets() {
  const [set, setSet] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { currentSet, getCurrentSet } = useNewCardContext();

  const navigate = useNavigate();

  const [updateFront, setUpdateFront] = useState("");
  const [updateBack, setUpdateBack] = useState("");
  const [updateID, setUpdateID] = useState();
  const [updatedSetName, setUpdatedSetName] = useState("");

  // Modals

  const [showEditCard, setShowEditCard] = useState(false);
  const [showEditSet, setShowEditSet] = useState(false);
  const [showDeleteSet, setShowDeleteSet] = useState(false);

  const handleClose = () => {
    setShowEditCard(false);
    setShowEditSet(false);
    setShowDeleteSet(false);
  };

  const handleShow = (type) => {
    if (type === "editCard") {
      setShowEditCard(true);
    } else if (type === "editName") {
      setShowEditSet(true);
    } else if (type === "deleteSet") {
      setShowDeleteSet(true);
    }
  };

  //CARDS Read, Update, Delete
  const currentSetDoc = doc(db, "current", "ryO2O3JTb9yVDvOwL2bN");

  const getCards = async () => {
    if (loading === true) {
      const setdata = await getDoc(currentSetDoc);
      const tempSet = setdata.data();
      const currentDOMSet = await getDoc(doc(db, "sets", tempSet.author));
      await setSet({ id: currentDOMSet.id, name: currentDOMSet.data().name });
      const q = query(
        collection(db, "card"),
        where("set", "==", tempSet.author)
      );
      const data = await getDocs(q);
      await setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      return;
    }
    setLoading(false);
  };

  const navigateSet = () => {
    navigate("/flashcards");
  };

  const updateCard = async (id) => {
    const cardDoc = doc(db, "card", id);
    const updates = {
      front: updateFront,
      back: updateBack,
    };

    await updateDoc(cardDoc, updates);
  };

  //set tooltips

  const updateSetName = async () => {
    const setDoc = doc(db, "sets", set.id);
    await updateDoc(setDoc, { name: updatedSetName });
    setLoading(true);
  };

  const deleteSet = async () => {
    const setDoc = doc(db, "sets", set.id);
    await deleteDoc(setDoc);
    navigate("/");
  };

  const renderStudyTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Study Set
    </Tooltip>
  );

  const renderEditTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Set Name
    </Tooltip>
  );

  const renderDeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Set
    </Tooltip>
  );

  //card tooltips
  const renderEditCardTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Card
    </Tooltip>
  );
  const renderDeleteCardTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Card
    </Tooltip>
  );

  const deleteCard = async (id) => {
    const cardDoc = doc(db, "card", id);
    await deleteDoc(cardDoc);
  };

  useEffect(() => {
    getCards();
  }, [loading]);

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col className="setContainer">
            <h1 className="setName">{set ? set.name : <Spinner />}</h1>
          </Col>
          <Col>
            <div className="setEdit">
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={renderStudyTooltip}
                placement="bottom"
              >
                <button className="btnStyling">
                  <BsFillLightningFill className="edit" onClick={navigateSet} />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={renderEditTooltip}
                placement="bottom"
              >
                <button className="btnStyling">
                  <BsPencil
                    className="edit"
                    onClick={() => handleShow("editName")}
                  />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={renderDeleteTooltip}
                placement="bottom"
              >
                <button className="btnStyling">
                  <BsTrash
                    className="edit"
                    onClick={() => handleShow("deleteSet")}
                  />
                </button>
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {!loading ? (
              cards.map((card) => (
                <Stack
                  direction="horizontal"
                  className="flashcard"
                  key={card.id}
                >
                  <div className="term col-4">{card.front}</div>
                  <div className="line"></div>
                  <div className="description col-7">{card.back}</div>
                  <div className="col-1 cardBtn1">
                    <div className="cardBtn2">
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={renderDeleteCardTooltip}
                        placement="left"
                      >
                        <button className="btnStyling">
                          <BsTrash
                            onClick={() => {
                              deleteCard(card.id);
                              setLoading(true);
                              getCards();
                            }}
                          />
                        </button>
                      </OverlayTrigger>
                    </div>
                    <div className="cardBtn2">
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={renderEditCardTooltip}
                        placement="left"
                      >
                        <button className="btnStyling">
                          <BsPencil
                            onClick={() => {
                              setUpdateFront(card.front);
                              setUpdateBack(card.back);
                              setUpdateID(card.id);
                              handleShow("editCard");
                            }}
                          />
                        </button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </Stack>
              ))
            ) : (
              <Spinner animation="border" />
            )}
            {cards.length === 0 && !loading ? (
              <div className="noCardMsg">No cards to diplay yet!</div>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
      <Modal show={showEditCard} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="jFont">Edit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                className="nFont"
                type="front"
                defaultValue={updateFront}
                onChange={(e) => setUpdateFront(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="nFont"
                as="textarea"
                type="back"
                defaultValue={updateBack}
                onChange={(e) => setUpdateBack(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Modal.Footer>
              <Button
                style={{ backgroundColor: "#e85a4f", borderColor: "#e85a4f" }}
                onClick={() => {
                  updateCard(updateID);
                  handleClose();
                  setLoading(true);
                  getCards();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showEditSet} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="jFont">Edit Set Name</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="editSet">
              <Form.Control
                defaultValue={set.name}
                onChange={(e) => setUpdatedSetName(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="mb-0">
            <Button
              style={{ backgroundColor: "#e85a4f", borderColor: "#e85a4f" }}
              onClick={() => {
                updateSetName();
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal show={showDeleteSet} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="jFont">Deletion Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-row">
          <div className="d-flex align-items-center">
            <TiWarningOutline className="warning" />
          </div>
          <div className="deletionQ">
            Are you sure you want to permanently remove this set along with all
            cards? This action cannot be undone.
          </div>
        </Modal.Body>
        <Modal.Footer className="mb-0">
          <Button
            style={{ backgroundColor: "#376e6f", borderColor: "#376e6f" }}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#e85a4f", borderColor: "#e85a4f" }}
            onClick={deleteSet}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
