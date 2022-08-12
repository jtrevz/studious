import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stickFigure from "../../utils/pics/rihannastickfigure.jpeg";
import "./styles.css";

export default function Account() {
  return (
    <div className="d-flex justify-content-center">
      <Container className="accountCont mt-4">
        <Row className="infoRow">
          <Col
            className="d-flex justify-content-center userPic userCard"
            sm={4}
          >
            <div className="imageCont d-flex justify-content-center">
              <img id="userPicture" src={stickFigure}></img>
              <div className="userND">@<span >jtrevz</span></div>
            </div>
          </Col>
          <Col sm={7} className="userInfo userCard">
            <Row>name</Row>
            <Row>username</Row>
            <Row>password</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
