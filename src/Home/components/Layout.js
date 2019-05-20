import React, { useContext, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArtistCard } from "./ArtistCard";
import { TrackCard } from "./TrackCard";
import { DataContext } from "../../context/DataContext";
import { PlayerProvider } from "../../context/PlayerContext";

import "../styles/Tabs.css";

export default ({ term }) => {
  const { type } = useContext(DataContext);

  console.log(term);
  return (
    <PlayerProvider>
      <Container fluid className="tab-container">
        <Row>
          {term.map((item, index) => (
            <Col key={index.toString()} xs={12} lg={6} xl={4} md={6} sm={12}>
              {type === "artists" ? (
                <ArtistCard {...item} index={index + 1} />
              ) : (
                <TrackCard {...item} index={index + 1} />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </PlayerProvider>
  );
};
