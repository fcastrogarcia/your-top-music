import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArtistCard } from "./Cards/ArtistCard";
import { TrackCard } from "./Cards/TrackCard";
import { DataContext } from "../../context/DataContext";
import { PlayerContext } from "../../context/PlayerContext";

import "../styles/Tabs.css";

export default ({ term }) => {
  const { type } = useContext(DataContext);
  const { track } = useContext(PlayerContext);
  const { trackPlaying, isPlaying } = track;

  return (
    <Container fluid className="tab-container">
      <Row>
        {term.map((item, index) => (
          <Col
            key={index.toString()}
            xs={12}
            lg={6}
            xl={4}
            md={6}
            sm={12}
            className={
              isPlaying && trackPlaying === index + 1 && type === "tracks"
                ? "playing"
                : ""
            }
          >
            {type === "artists" ? (
              <ArtistCard {...item} index={index + 1} />
            ) : (
              <TrackCard {...item} index={index + 1} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
