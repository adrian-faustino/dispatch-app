import React, { useState } from "react";
/** Styles **/
import "./Nav.css";
/** Subcomponents **/
import NavControllers from "./NavControllers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
/** Handlers **/
import NavHandlers from "./NavHandlers";

const Nav = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  /** Handlers **/
  const handlers = NavHandlers(dispatch);

  return (
    <div>
      <div className="Nav__navbar">
        <button className="Nav__toggle-btn">wtf</button>
        <div className="Nav__site-logo large-text">Truck Dispatcher App</div>
      </div>
      <NavControllers />
      {/* todo: change inner text to site name (same constant as tab title) */}
    </div>
  );
};

export default Nav;
