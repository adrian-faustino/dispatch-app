import React from "react";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
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
    return (
      <div>
        <div>
          {`Week ${week} ${dayToWords(
            day
          )} ${hour}h timeslot is booked by ${driver} for ${description}`}
        </div>
        <Button onClick={handleOverwrite}>overwrite</Button>
      </div>
    );
  };

  return {
    renderConflictingBooking,
    handleDismiss,
  };
};

export default ErrorPromptHandlers;
