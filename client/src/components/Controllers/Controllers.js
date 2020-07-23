import React, { useState } from "react";
/** Styles **/
import "./Controllers.css";
/** Redux */
import { useDispatch, useSelector } from "react-redux";
/** Reacstrap **/
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
/** Handlers **/
import ControllersHandlers from "./ControllersHandlers";
/** Constants **/
import { DRIVERS } from "../../util/constants";

const Controllers = () => {
  /** State **/
  const [state, setState] = useState({
    dropdownOpen: false,
  });

  /** Redux **/
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driver);

  /** Handlers **/
  const handlers = ControllersHandlers(setState, dispatch);
  const dropdownItemJSX = handlers.renderDropdownItems();

  return (
    <div>
      <div>controllers.js</div>
      {dropdownItemJSX}

      {/* BEGIN: week navigation */}
      <div>
        <button onClick={handlers.goPrevWeek}>prev</button>
        <button onClick={handlers.goNextWeek}>next</button>
      </div>
      {/* END: week navigation */}

      {/* BEGIN: driver selection dropdown */}
      <ButtonDropdown
        isOpen={state.dropdownOpen}
        toggle={handlers.toggleDropdown}
      >
        <DropdownToggle caret>{driver}</DropdownToggle>
        <DropdownMenu>{dropdownItemJSX}</DropdownMenu>
      </ButtonDropdown>
      {/* END: driver selection dropdown */}
    </div>
  );
};

export default Controllers;

/* Component notes:
 * This component is contains all of the buttons to navigate the app */
