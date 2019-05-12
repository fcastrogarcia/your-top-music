import React, { Fragment } from "react";
import "../../styles/Header.css";
import { Container, Row, Col } from "react-bootstrap";
import UserDisplay from "./UserDisplay";

export default function Header() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <span className="header-emojis" role="img" aria-label="emojis">
              🤘🎧🎵
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
