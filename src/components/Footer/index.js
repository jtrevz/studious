import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import "./styles.css";

export default function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <Container>
          <Row>
            <Col md={6} className="py-3 d-flex justify-content-center">
              <MdAlternateEmail className="Icon" />
              <FaGithub className="Icon" />
              <FaLinkedinIn className="Icon" />
            </Col>
            <Col
              md={6}
              className="py-3 d-flex justify-content-center align-items-center"
            >
              <div>Contact</div>
              <div className="vline"></div>
              <div></div>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <div>Jtrevz</div>
            </Col>
          </Row> */}
        </Container>
      </footer>
    </div>
  );
}
