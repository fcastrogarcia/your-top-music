import React from "react";
import "../../styles/NavBar.css";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "./Dropdown";

export default ({ setTab, tab }) => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} sm={6} xs={6}>
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
        <Col lg={6} md={6} sm={6} xs={6}>
          <Dropdown />
        </Col>
      </Row>
    </Container>
  );
};
