import React, { useState } from "react";
/** Subcomponents **/
import NavControllers from "./NavControllers";
/** Styles **/
import "./Nav.css";

const Nav = () => {
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
