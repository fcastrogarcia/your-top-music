import React, { Fragment } from "react";

export default ({ tab, setTab }) => {
  const tabSelector = i => () => {
    window.scrollTo(0, 0);
    setTab(i);
  };
  return (
    <Fragment>
      <ul className="navbar">
        <li
          className={tab === 1 ? "tab-active" : "tab"}
          onClick={tabSelector(1)}
        >
          <span>All-time</span>
          <span className={tab === 1 ? "tab-overlay" : ""} />
        </li>
        <li
          className={tab === 2 ? "tab-active" : "tab"}
          onClick={tabSelector(2)}
        >
          <span>Six Months</span>
          <span className={tab === 2 ? "tab-overlay" : ""} />
        </li>
        <li
          className={tab === 3 ? "tab-active" : "tab"}
          onClick={tabSelector(3)}
        >
          <span>Last Month</span>
          <span className={tab === 3 ? "tab-overlay" : ""} />
        </li>
      </ul>
    </Fragment>
  );
};
