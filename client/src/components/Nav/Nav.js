import React, { useState } from "react";
/** Subcomponents **/
import NavControllers from "./NavControllers";
/** Styles **/
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav__navbar">
      <div className="Nav__site-logo">navbar</div>
      <btn className="Nav__toggle-btn"></btn>

      <div className="Nav__li-container">
        <NavControllers />
      </div>
    </div>
  );
};

export default Nav;
