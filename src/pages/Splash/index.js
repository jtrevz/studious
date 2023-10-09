import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsHourglassSplit } from "react-icons/bs";
import "./styles.css";

export default function Splash() {
  return (
    <Container id="splash" fluid className="p-0">
      <Row className="d-flex justify-content-end p-0">
        <Col className="g-background col-11 d-flex justify-content-end align-items-end">
          <div id="splash-logo" className="p-3">
            studious <BsHourglassSplit />
          </div>
        </Col>
      </Row>
      <Row className="card-layer px-2">
        <Container fluid className="w-100 h-100 d-flex align-items-center">
          <Row className="w-100 d-flex justify-content-end ps-5 py-5">
            <Col className="col-8">
              <div className="splash-card w-100 d-flex align-items-center justify-content-center">
                <h2 className="splash-lettering">studium</h2>
              </div>
            </Col>
            <Col className="col-4  d-flex justify-content-center flex-column">
              <div className=" ">
                <p className="text-center act-stmt">
                  Create, edit, and study flashcard sets on the go!{" "}
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
        <Col className="design-ft col-7"></Col>
      </Row>
      <Row className="w-100 pt-5">
        <Col className=" d-flex justify-content-end">
          <Button
            style={{
              backgroundColor: "#e85a4f",
              borderColor: "#e85a4f",
            }}
            className="btn-custom btn-lg"
          >
            Start Studying!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
