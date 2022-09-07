import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stickFigure from "../../utils/pics/rihannastickfigure.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./styles.css";

export default function Account() {
  return (
    <div className="">
      <Container fluid>
        <Row className="d-flex justify-content-start">
          <div className="accountPTitle">Account Settings</div>
        </Row>
      </Container>
      <Container className="accountCont mt-2">
        <Row className="infoRow">
          <Col
            className="d-flex justify-content-center userPic userCard"
            sm={4}
          >
            <div className="imageCont d-flex justify-content-center">
              <img id="userPicture" src={stickFigure} alt=""></img>
              <div className="userND">
                @<span className="bigUserName">jtrevz</span>
              </div>
            </div>
          </Col>
          <Col sm={7} className="userInfo userCard">
            <Row className="inputCards inTop">
              <Col className="accountInfoText col flex-grow-4">
                <h3 className="inputTitles">Name</h3>
                <p className="inputText">Jennifer Trevizo</p>
              </Col>
              <Col className="accountLink col ml-auto">
                <MdKeyboardArrowRight />
              </Col>
            </Row>
            <Row className="inputCards">
              <Col className="accountInfoText col flex-grow-4">
                <h3 className="inputTitles">Username</h3>
                <p className="inputText">jtrevz</p>
              </Col>
              <Col className="accountLink col ml-auto">
                <MdKeyboardArrowRight />
              </Col>
            </Row>
            <Row className="inputCards inBottom">
              <Col className="accountInfoText col flex-grow-4">
                <h3 className="inputTitles">Password </h3>
                <p className="inputText">*******</p>
              </Col>
              <Col className="accountLink col ml-auto">
                <MdKeyboardArrowRight />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
