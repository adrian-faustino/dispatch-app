import React from "react";
/** Helpers **/
import { dayToWords, dateObjToWords } from "../../util/formatHelpers";
import { editEntry } from "../../util/dbHelpers";
/** Redux **/
import { resetError } from "../../actions/errorActions";
import { setDriver } from "../../actions/driverActions";
/** Reacstrap **/
import { Button } from "reactstrap";
/** Schema **/
import { Entry } from "../../db/schema/Entry";
/** Constants **/
import { DRIVERS, ENTRY_OVERWRITE_200 } from "../../util/constants";

const ErrorPromptHandlers = (dispatch, error) => {
  // close error prompt
  const handleDismiss = () => {
    dispatch(resetError());
  };

  // OVERWRITE BUTTON HANDLER
  const handleOverwrite = () => {
    // refactor #5 - simplify
    const entryObj = Entry(error.bookingAttempt);

    // update db
    editEntry(entryObj, () => {
      console.log(ENTRY_OVERWRITE_200);
      // trigger view update
      dispatch(setDriver(DRIVERS[0]));
      // close error
      handleDismiss();
    });
  };

  // return JSX displaying booking conflict
  const renderConflictingBooking = () => {
    const booking = error.payload;
    const { date, description, driver } = booking;
    const [week, day, hour] = date.split("-");
    const dateObj = { week, day, hour };
    return (
      <div className="ErrorPrompt__conflict-msg-container">
        <span className="span-emphasis">{dateObjToWords(dateObj)}</span>
        <span>{` timeslot is booked by `}</span>
        <span className="span-emphasis">{driver.toUpperCase()}</span>
        <span>{` for `}</span>
        <span className="span-emphasis">{description}</span>
      </div>
    );
  };

  return {
    renderConflictingBooking,
    handleDismiss,
    handleOverwrite,
  };
};

export default ErrorPromptHandlers;
