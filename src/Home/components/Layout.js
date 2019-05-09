import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "./Card";

export default ({ term }) => {
  return (
    <Container fluid>
      <Row>
        {term.map((item, index) => (
          <Col key={index.toString()} xs={12} lg={6} xl={4} md={6} sm={12}>
            <Card cardData={item} indx={index + 1} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
