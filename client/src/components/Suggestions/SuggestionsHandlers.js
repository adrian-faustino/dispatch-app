import React from "react";
/** Helpers **/
import { getOccupiedSlots, createEntry } from "../../util/dbHelpers";
import { dateObjToStringID } from "../../util/formatHelpers";
import dateUtil from "../../util/dateHelpers";
/** Constants **/
import {
  WEEK_SELECTOR,
  DAY_SELECTOR,
  HOUR_SELECTOR,
  WEEKS,
  DAYS,
  HOURS,
  DRIVERS,
} from "../../util/constants";
import { dateStrToWords } from "../../util/formatHelpers";
/** Reactstrap **/
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
/** Redux **/
import { setDriver } from "../../actions/driverActions";
import { resetError } from "../../actions/errorActions";
/** Schema **/
import { Entry } from "../../db/schema/Entry";

const SuggestionsHandlers = (dispatch, store, state, setState) => {
  const dateObj = store.date;
  const currentDate = dateObjToStringID(dateObj);
  const occupiedSlots = getOccupiedSlots();

  // suggestions within same day
  const calcWithinHour = () => {
    let breaker = HOURS;
    let delta = 1;

    const results = ["ahead", "behind"].map((type) => {
      let suggestion;
      switch (type) {
        case "ahead":
          suggestion = dateUtil.aheadDate(currentDate, HOUR_SELECTOR, delta);
          while (occupiedSlots.includes(suggestion)) {
            suggestion = dateUtil.aheadDate(currentDate, HOUR_SELECTOR, delta);
            delta++;
            breaker--;
            if (breaker === 0) break;
          }
          delta = 1;
          return suggestion;
        case "behind":
          suggestion = dateUtil.behindDate(currentDate, HOUR_SELECTOR, delta);
          while (occupiedSlots.includes(suggestion)) {
            suggestion = dateUtil.behindDate(currentDate, HOUR_SELECTOR, delta);
            delta++;
            breaker--;
            if (breaker === 0) break;
          }
          delta = 1;
          return suggestion;
      }
    });
    return results;
  };

  const generateSuggestions = (selector) => {
    let breaker = dateUtil.setBreaker(selector);
    let delta = 1;

    const results = ["behind", "ahead"].map((type) => {
      let suggestion;
      switch (type) {
        case "ahead":
          suggestion = dateUtil.aheadDate(currentDate, selector, delta);
          while (occupiedSlots.includes(suggestion)) {
            suggestion = dateUtil.aheadDate(currentDate, selector, delta);
            delta++;
            breaker--;
            if (breaker === 0) break;
          }
          delta = 1;
          return suggestion;
        case "behind":
          suggestion = dateUtil.behindDate(currentDate, selector, delta);
          while (occupiedSlots.includes(suggestion)) {
            suggestion = dateUtil.behindDate(currentDate, selector, delta);
            delta++;
            breaker--;
            if (breaker === 0) break;
          }
          delta = 1;
          return suggestion;
      }
    });
    return results;
  };

  // updates suggestion to selected option
  const handleSelectOption = (suggestionObj) => {
    setState((state) => ({ ...state, selectedSuggestion: suggestionObj }));
  };

  const handleSuggestionSubmit = (e) => {
    const date = state.selectedSuggestion;
    e.preventDefault();
    const description = store.error.bookingAttempt.description;
    const driver = store.error.bookingAttempt.driver;

    let entry = Entry({ date, description, driver });

    createEntry(entry, (success, err) => {
      if (err) return console.error(err.errMsg);
      else console.log(success.msg);
      // trigger change view
      dispatch(setDriver(DRIVERS[0]));
      // close error
      dispatch(resetError());
    });
  };

  const renderSuggestions = (suggestions) => {
    return suggestions.map((suggestion) => {
      if (!suggestion) return;
      return (
        <DropdownItem
          onClick={() => handleSelectOption(suggestion)}
          key={`${suggestion}-suggestion`}
        >
          {dateStrToWords(suggestion)}
        </DropdownItem>
      );
    });
  };

  return {
    calcWithinHour,
    generateSuggestions,
    handleSuggestionSubmit,
    renderSuggestions,
  };
};

export default SuggestionsHandlers;
