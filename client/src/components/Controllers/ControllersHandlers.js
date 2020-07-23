import React from "react";
/** Redux **/
import { nextWeek, prevWeek } from "../../actions/timetableNavigation";
import { setDriver } from "../../actions/driverActions";
/** Constants **/
import { DRIVERS } from "../../util/constants";
/** Reacstrap **/
import { DropdownItem } from "reactstrap";
/** npm **/
import { v4 as uuidv4 } from "uuid";

const ControllersHandlers = (setState, dispatch) => {
  // update redux - increase week num
  const goNextWeek = (e) => {
    e.preventDefault();

    // todo: validate so it doesnt go below 0 or 52 (week range)

    dispatch(nextWeek());
  };
  // update redux - decreaseweek num
  const goPrevWeek = (e) => {
    e.preventDefault();
    dispatch(prevWeek());
  };

  // update state - open/close dropdown
  const toggleDropdown = () => {
    setState((state) => ({ ...state, dropdownOpen: !state.dropdownOpen }));
  };

  // update redux - current driver
  const currentDriver = (e) => {
    const driver = e.target.innerHTML;
    dispatch(setDriver(driver));
  };

  // spread dropdown items for rendering
  const renderDropdownItems = () => {
    return DRIVERS.map((driver) => {
      return (
        <DropdownItem key={uuidv4()} onClick={currentDriver}>
          {driver}
        </DropdownItem>
      );
    });
  };

  return {
    goNextWeek,
    goPrevWeek,
    toggleDropdown,
    currentDriver,
    renderDropdownItems,
  };
};

export default ControllersHandlers;
