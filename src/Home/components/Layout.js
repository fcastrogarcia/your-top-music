import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArtistCard } from "./ArtistCard";
import { TrackCard } from "./TrackCard";
import { DataContext } from "../../context/DataContext";

export default ({ term }) => {
  const { type } = useContext(DataContext);
  return (
    <Container fluid>
      <Row>
        {term.map((item, index) => (
          <Col key={index.toString()} xs={12} lg={6} xl={4} md={6} sm={12}>
            {type === "artists" ? (
              <ArtistCard cardData={item} indx={index + 1} />
            ) : (
              <TrackCard cardData={item} indx={index + 1} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
