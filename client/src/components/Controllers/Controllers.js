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
import { DRIVERS, prevWeek_btn, nextWeek_btn } from "../../util/constants";

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

  return (
    <div>
      <div>controllers.js</div>

      {/* week navigation */}
      <div>{handlers.renderWeekNavBtns()}</div>

      {/* driver selection dropdown */}
      <ButtonDropdown
        isOpen={state.dropdownOpen}
        toggle={handlers.toggleDropdown}
      >
        <DropdownToggle caret>{driver}</DropdownToggle>
        <DropdownMenu>{handlers.renderDropdownItems()}</DropdownMenu>
      </ButtonDropdown>
    </div>
  );
};

export default Controllers;

/* Component notes: [CONTROLLERS]
 * This component is contains all of the buttons to navigate the app */
