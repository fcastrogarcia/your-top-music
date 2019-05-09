import React, { useContext } from "react";
import "../styles/NavBar.css";
import { DataContext } from "../../context/DataContext";
import { Container, Row, Col } from "react-bootstrap";

export default () => {
  const { tab, setTab } = useContext(DataContext);
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <ul className="NavBar">
            <li
              value={1}
              className={tab === 1 ? "tab-active" : ""}
              onClick={e => setTab(e.target.value)}
            >
              All-time
            </li>
            <li
              value={2}
              className={tab === 2 ? "tab-active" : ""}
              onClick={e => setTab(e.target.value)}
            >
              Six Months
            </li>
            <li
              value={3}
              className={tab === 3 ? "tab-active" : ""}
              onClick={e => setTab(e.target.value)}
            >
              Last Month
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
