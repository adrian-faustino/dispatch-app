import React, { useState } from "react";
/** Styles **/
import "./Nav.css";
/** Subcomponents **/
import NavControllers from "./NavControllers";

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
