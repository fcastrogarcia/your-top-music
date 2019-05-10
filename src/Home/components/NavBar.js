import React, { useContext } from "react";
import "../styles/NavBar.css";
import { DataContext } from "../../context/DataContext";
import { Container, Row, Col } from "react-bootstrap";

export default ({ setTab, tab }) => {
  const { type } = useContext(DataContext);
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <ul className="NavBar">
            <li
              className={tab === 1 ? "tab-active" : "tab"}
              onClick={() => setTab(1)}
            >
              <span>All-time</span>
              <span className={tab === 1 ? "tab-overlay" : ""} />
            </li>
            <li
              className={tab === 2 ? "tab-active" : "tab"}
              onClick={() => setTab(2)}
            >
              <span>Six Months</span>
              <span className={tab === 2 ? "tab-overlay" : ""} />
            </li>
            <li
              className={tab === 3 ? "tab-active" : "tab"}
              onClick={() => setTab(3)}
            >
              <span>Last Month</span>
              <span className={tab === 3 ? "tab-overlay" : ""} />
            </li>
          </ul>
        </Col>
        <Col lg={6}>
          <div className="selector-container">
            <span className="selector">
              <i class="fas fa-caret-down" />
              <p>Top {type}</p>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
