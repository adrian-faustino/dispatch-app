import React from "react";
/** Redux **/
import { nextWeek, prevWeek } from "../../actions/timetableNavigation";
import { setDriver } from "../../actions/driverActions";
import { toggleFilter } from "../../actions/timetableFilterActions";
/** Constants **/
import {
  DRIVERS,
  prevWeek_btn,
  nextWeek_btn,
  WEEKS,
} from "../../util/constants";
/** Reacstrap **/
import { DropdownItem } from "reactstrap";
/** Constants **/
import {
  SET_SHOW_BOOKABLE_SLOTS,
  SET_SHOW_OUTSIDE_AVAILABILITY,
} from "../../util/constants";

const ControllersHandlers = (setState, dispatch, store) => {
  const { showBookableSlots, showOutsideAvailability } = store.viewFilters;

  // update redux - decrease/increase week num
  const toggleWeek = (e) => {
    e.preventDefault();

    switch (e.target.innerHTML) {
      case prevWeek_btn:
        // validate - no below week 0
        if (store.date.week <= 0) return;
        return dispatch(prevWeek());
      case nextWeek_btn:
        // validate - now above week 51
        if (store.date.week >= WEEKS - 1) return;
        return dispatch(nextWeek());
    }
  };

  // update state - open/close dropdown
  const toggleDropdown = () => {
    setState((state) => ({ ...state, dropdownOpen: !state.dropdownOpen }));
  };

  const handleCheckbox = (e) => {
    dispatch(toggleFilter(e.target.name));
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
      <button
        className={`Controllers__week-nav-btn ${btn}`}
        key={`${btn}-nav`}
        onClick={toggleWeek}
      >
        {btn}
      </button>
    ));
  };

  // driver filter controls
  const renderFilterCheckboxes = (driver) => {
    return (
      <div className="Controllers__filter-checkboxes-container">
        {driver !== DRIVERS[0] && (
          <>
            <input
              type="checkbox"
              checked={showBookableSlots}
              onChange={handleCheckbox}
              name="showBookableSlots"
            />
            <label htmlFor="showBookableSlots">
              Show timeslots within driver availability
            </label>
          </>
        )}

        <input
          type="checkbox"
          checked={showOutsideAvailability}
          onChange={handleCheckbox}
          name="showOutsideAvailability"
        />
        <label htmlFor="showOutsideAvailability">
          Show bookings outside driver availability
        </label>
      </div>
    );
  };

  return {
    toggleDropdown,
    renderDropdownItems,
    renderWeekNavBtns,
    renderFilterCheckboxes,
  };
};

export default ControllersHandlers;
