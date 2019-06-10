import React, { Fragment } from "react";
import "../../styles/Header.css";
import { Container, Row, Col } from "react-bootstrap";
import UserDisplay from "./UserDisplay";
import useMouseMoveShadow from "../../../customHooks/useMouseMoveShadow";

export default function Header() {
  useMouseMoveShadow();

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="col-container">
            <span>
              <span className="header-emojis" role="img" aria-label="emojis">
                🤘🎧🎵
              </span>
            </span>
          </Col>
          <Col>
            <UserDisplay />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
