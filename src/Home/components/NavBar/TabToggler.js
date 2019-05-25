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
          className={tab === 1 ? "tab tab-active" : "tab"}
          onClick={tabSelector(1)}
        >
          All-time
          <span className={tab === 1 ? "tab-overlay" : ""} />
        </li>
        <li
          className={tab === 2 ? "tab tab-active" : "tab"}
          onClick={tabSelector(2)}
        >
          Six Months
          <span className={tab === 2 ? "tab-overlay" : ""} />
        </li>
        <li
          className={tab === 3 ? "tab tab-active" : "tab"}
          onClick={tabSelector(3)}
        >
          Last Month
          <span className={tab === 3 ? "tab-overlay" : ""} />
        </li>
      </ul>
    </Fragment>
  );
};
