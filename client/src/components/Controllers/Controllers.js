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
    <div className="Controllers__container">
      {/* week navigation */}
      <div className="Controllers__week-nav-container">
        {handlers.renderWeekNavBtns()}
        <span className="Controllers__week-span medium-text">
          Week {store.date.week}
        </span>
      </div>

      {/* driver selection dropdown */}
      <div className="Controllers__button-dropdown">
        <span className="small-text">View Driver</span>
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
    </div>
  );
};

export default Controllers;

/* Component notes: [CONTROLLERS]
 * This component is contains all of the buttons to navigate the app */
