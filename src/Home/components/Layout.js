import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "./Card";
import { DataContext } from "../../context/DataContext";

export const Layout = () => {
  const { data } = useContext(DataContext);
  const { short_term } = data.artists;
  console.log(short_term);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={4}>
          {short_term.map((item, index) => (
            <Card cardData={item} indx={index + 1} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
