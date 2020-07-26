import React from "react";
/** Styles **/
import "./Nav.css";

const NavControllers = () => {
  return (
    <div className="Nav__slide-in">
      <ul className="Nav__slide-in-ul">
        <li className="medium-text">Drivers</li>
        <li className="medium-text">Tasks</li>
        <li className="medium-text">Schedule</li>
        <li className="medium-text">Report</li>
      </ul>
    </div>
  );
};

export default NavControllers;
