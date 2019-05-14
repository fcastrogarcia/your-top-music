import React from "react";
import "../../styles/TabToggler.css";
import { Container, Row, Col } from "react-bootstrap";
import TypeToggler from "./TypeToggler";
import TabToggler from "./TabToggler";

export default props => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} sm={6} xs={12} className="tab-toggler-col">
          <TabToggler tabs={props} />
        </Col>
        <Col lg={6} md={6} sm={6} xs={12}>
          <TypeToggler />
        </Col>
      </Row>
    </Container>
  );
};
