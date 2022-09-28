import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { BsFillHouseDoorFill, BsTelephoneFill } from "react-icons/bs";
import "./styles.css";

export default function Footer() {
  return (
    <div>
      <footer className="page-footer mt-5">
        <Container>
          <Row className="foot">
            <Col
              md={6}
              className="pt-3 d-flex justify-content-center align-items-center cLinksFooter"
            >
              <a className="Icon" href="https://jtrevz.github.io/portfolio/">
                <MdAlternateEmail className="Icon" />
              </a>

              <a className="Icon" href="https://github.com/jtrevz">
                <FaGithub className="Icon" />
              </a>
              <a
                className="Icon"
                href="https://www.linkedin.com/in/jennifertrevizo/"
              >
                <FaLinkedinIn className="Icon" />
              </a>
            </Col>
            <Col
              md={6}
              className="py-3 d-flex justify-content-center align-items-center"
            >
              <div className="contact">CONTACT</div>
              <div className="vline"></div>
              <div className="contactInfo">
                <div className="contactIc d-flex flex-direction-row">
                  <BsFillHouseDoorFill className="ic" />{" "}
                  <span>Houston, TX</span>
                </div>
                <div className="contactIc d-flex flex-direction-row">
                  <a id="mail" href="mailto:jenny.trevizo2013@gmail.com">
                    <MdEmail className="ic" />
                    <span id="mail">jenny.trevizo2013@gmail.com</span>
                  </a>
                </div>
                <div className="contactIc d-flex flex-direction-row">
                  <a id="phone" href="tel:+17133825761">
                    <BsTelephoneFill className="ic" />{" "}
                    <span>(713) 382-5761</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="hline"></div>
          <Row className="foot">
            <Col className="bottom">
              <div className="name">
                JENNIFER TREVIZO <span className="year">2022</span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
