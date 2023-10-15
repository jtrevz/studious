import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsHourglassSplit } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Splash() {
  return (
    <Container id="splash" fluid className="p-0">
      <Row className="d-flex justify-content-end m-0">
        <Col className="g-background col-11 d-flex justify-content-end align-items-end shadow pe-0">
          <div id="splash-logo" className="p-3">
            studious <BsHourglassSplit />
          </div>
        </Col>
      </Row>
      <Row className="card-layer px-2">
        <Container fluid className="w-100 h-100 d-flex align-items-center">
          <Row className="w-100 d-flex justify-content-center justify-content-md-end ps-5 ps-sm-5 py-5">
            <Col className="col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6 card-col px-0 nu-card">
              <div className="splash-card w-100 d-flex align-items-center justify-content-center shadow">
                <h2 className="splash-lettering">studium</h2>
              </div>
            </Col>
            <Col className="col-12 col-sm-8 col-md-4 col-xl-5 d-flex justify-content-center flex-column act-stmt-box">
              <div className="stmt-d">
                <p className="text-center act-stmt">
                  Create, edit, and study flashcard <br /> sets on the go!{" "}
                </p>
              </div>
              {/* <div id="splash-logo" className="mt-auto align-self-end">
                studious <BsHourglassSplit />
              </div> */}
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Col className="design-ft col-10 col-sm-9 col-md-7 shadow-sm"></Col>
      </Row>
      <Row className="w-100 pt-5 m-0 d-flex justify-content-md-end">
        <Col className="d-flex justify-content-center border px-4 px-xl-3 col-12 col-md-4 col-lg-3 col-xl-2">
          <Link to="/signup">
            <Button
              style={{
                backgroundColor: "#e85a4f",
                borderColor: "#e85a4f",
              }}
              size="lg"
              className="btn-custom shadow-sm w-100"
            >
              Start Studying!
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
