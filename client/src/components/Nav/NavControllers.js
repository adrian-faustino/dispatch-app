import React from "react";
/** Styles **/
import "./Nav.css";
/** Redux **/
import { useDispatch } from "react-redux";
/** Handlers **/
import NavHandlers from "./NavHandlers";

const NavControllers = () => {
  /** Redux **/
  const dispatch = useDispatch();

  /** Handlers **/
  const handlers = NavHandlers(dispatch);

  return (
    <div className="Nav__slide-in">
      <ul className="Nav__slide-in-ul">
        <li onClick={handlers.handleChangeView} className="medium-text">
          Drivers
        </li>
        <li className="medium-text">Tasks</li>
        <li className="medium-text">Schedule</li>
        <li className="medium-text">Report</li>
      </ul>
    </div>
  );
};

export default NavControllers;
