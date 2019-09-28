import React from "react";
import "../../styles/TabToggler.css";
import { Container, Row, Col } from "react-bootstrap";
import TypeToggler from "./TypeToggler";
import TabToggler from "./TabToggler";

export default props => {
  return (
    <Container fluid>
      <Row style={{ marginTop: "2em" }}>
        <Col sm={12} xs={12} md={6} lg={6} className="tab-toggler-col">
          <TabToggler {...props} />
        </Col>
        <Col sm={12} xs={12} md={6} lg={6}>
          <TypeToggler />
        </Col>
      </Row>
    </Container>
  );
};
