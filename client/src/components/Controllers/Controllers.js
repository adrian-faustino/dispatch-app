import React, { useState } from "react";
/** Styles **/
import "./Controllers.css";
/** Redux */
import { useDispatch, useSelector } from "react-redux";
/** Reacstrap **/
import { ButtonDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
/** Handlers **/
import ControllersHandlers from "./ControllersHandlers";

const Controllers = () => {
  /** State **/
  const [state, setState] = useState({
    dropdownOpen: false,
  });

  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = ControllersHandlers(setState, dispatch, store);

  return (
    <div>
      {/* week navigation */}
      <div>{handlers.renderWeekNavBtns()}</div>

      {/* driver selection dropdown */}
      <ButtonDropdown
        isOpen={state.dropdownOpen}
        toggle={handlers.toggleDropdown}
      >
        <DropdownToggle caret>{store.driver}</DropdownToggle>
        <DropdownMenu>
          {/* driver options */}
          {handlers.renderDropdownItems()}
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
};

export default Controllers;

/* Component notes: [CONTROLLERS]
 * This component is contains all of the buttons to navigate the app */
