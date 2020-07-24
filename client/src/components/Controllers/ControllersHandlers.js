import React from "react";
/** Redux **/
import { nextWeek, prevWeek } from "../../actions/timetableNavigation";
import { setDriver } from "../../actions/driverActions";
/** Constants **/
import { DRIVERS, prevWeek_btn, nextWeek_btn } from "../../util/constants";
/** Reacstrap **/
import { DropdownItem } from "reactstrap";
/** npm **/
import { v4 as uuidv4 } from "uuid";

const ControllersHandlers = (setState, dispatch) => {
  // update redux - decrease/increase week num
  const toggleWeek = (e) => {
    e.preventDefault();

    // todo: validate so it doesnt go below 0 or 52 (week range)

    switch (e.target.innerHTML) {
      case prevWeek_btn:
        return dispatch(prevWeek());
      case nextWeek_btn:
        return dispatch(nextWeek());
    }
  };

  // update state - open/close dropdown
  const toggleDropdown = () => {
    setState((state) => ({ ...state, dropdownOpen: !state.dropdownOpen }));
  };

  // update redux - current driver
  const toggleDriver = (e) => {
    const driver = e.target.innerHTML;
    dispatch(setDriver(driver));
  };

  // spread dropdown items for rendering
  const renderDropdownItems = () => {
    return DRIVERS.map((driver, i) => {
      if (i === 0)
        return (
          <>
            <DropdownItem key={uuidv4()} onClick={toggleDriver}>
              {driver}
            </DropdownItem>
            <DropdownItem divider />
          </>
        );

      return (
        <DropdownItem key={uuidv4()} onClick={toggleDriver}>
          {driver}
        </DropdownItem>
      );
    });
  };

  // spread week nav buttons for rendering
  const renderWeekNavBtns = () => {
    const btns = [prevWeek_btn, nextWeek_btn];
    return btns.map((btn) => (
      <button key={btn} onClick={toggleWeek}>
        {btn}
      </button>
    ));
  };

  return {
    toggleDropdown,
    renderDropdownItems,
    renderWeekNavBtns,
  };
};

export default ControllersHandlers;
