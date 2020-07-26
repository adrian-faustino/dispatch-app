import React, { useState } from "react";
/** Subcomponents **/
import NavControllers from "./NavControllers";
/** Styles **/
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav__navbar">
      <button className="Nav__toggle-btn"></button>
      {/* todo: change inner text to site name (same constant as tab title) */}
      <div className="Nav__site-logo">Truck Dispatcher App</div>

      <div className="Nav__slide-in">
        <NavControllers />
      </div>
    </div>
  );
};

export default Nav;
