import React from "react";
/** Styles **/
import "./Nav.css";
/** Redux **/
import { useDispatch, useSelector } from "react-redux";
/** Handlers **/
import NavHandlers from "./NavHandlers";

const NavControllers = () => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = NavHandlers(dispatch, store);

  return (
    <div className="Nav__slide-in">
      <ul className="Nav__slide-in-ul">{handlers.renderNavItems()}</ul>
    </div>
  );
};

export default NavControllers;
