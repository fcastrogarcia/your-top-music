import React, { Fragment } from "react";

export default ({ tabs }) => {
  const { tab, setTab } = tabs;
  return (
    <Fragment>
      <ul className="navbar">
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
    </Fragment>
  );
};
