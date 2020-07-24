import React from "react";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
import { editEntry } from "../../util/dbHelpers";
/** Redux **/
import { resetError } from "../../actions/errorActions";
import { setDriver } from "../../actions/driverActions";
/** Reacstrap **/
import { Button } from "reactstrap";

const ErrorPromptHandlers = (dispatch, error) => {
  // close error prompt
  const handleDismiss = () => {
    dispatch(resetError());
  };

  const handleOverwrite = () => {
    // refactor #5 - simplify
    console.log("Overwriting...", error.bookingAttempt);
    const { date, description, driver } = error.bookingAttempt;
    const [week, day, hour] = date.split("-");
    const values = { driver, description };
    const dateObj = { week, day, hour };

    // update db
    editEntry(values, dateObj, () => {
      // view change to current driver
      dispatch(setDriver(driver));
      // close error
      handleDismiss();
    });
  };

  // return JSX displaying booking conflict
  const renderConflictingBooking = () => {
    // #todo 6
    const booking = error.payload;
    console.log("Booking", booking);
    const { date, description, driver } = booking;
    const [week, day, hour] = date.split("-");
    console.log("Booked by:", booking);
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
