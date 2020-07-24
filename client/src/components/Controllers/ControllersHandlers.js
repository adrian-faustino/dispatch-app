import React from "react";
/** Redux **/
import { nextWeek, prevWeek } from "../../actions/timetableNavigation";
import { setDriver } from "../../actions/driverActions";
/** Constants **/
import {
  DRIVERS,
  prevWeek_btn,
  nextWeek_btn,
  WEEKS,
} from "../../util/constants";
/** Reacstrap **/
import { DropdownItem } from "reactstrap";

const ControllersHandlers = (setState, dispatch, store) => {
  // update redux - decrease/increase week num
  const toggleWeek = (e) => {
    e.preventDefault();

    switch (e.target.innerHTML) {
      case prevWeek_btn:
        // validate - no below week 0
        if (store.date.week <= 0) return;
        return dispatch(prevWeek());
      case nextWeek_btn:
        // validate - now above week 52
        if (store.date.week >= WEEKS) return;
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
          <div key={`${driver}-app`}>
            <DropdownItem onClick={toggleDriver}>{driver}</DropdownItem>
            <DropdownItem divider />
          </div>
        );

      return (
        <DropdownItem key={`${driver}-${i}`} onClick={toggleDriver}>
          {driver}
        </DropdownItem>
      );
    });
  };

  // spread week nav buttons for rendering
  const renderWeekNavBtns = () => {
    const btns = [prevWeek_btn, nextWeek_btn];
    return btns.map((btn) => (
      <button key={`${btn}-nav`} onClick={toggleWeek}>
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
