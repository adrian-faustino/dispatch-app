import React from "react";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
/** Redux **/
import { resetError } from "../../actions/errorActions";

const ErrorPromptHandlers = (dispatch, error) => {
  // close error prompt
  const handleDismiss = () => {
    dispatch(resetError());
  };

  // return JSX displaying booking conflict
  const renderConflictingBooking = () => {
    // #todo 6
    const booking = error.payload;
    console.log("Booking", booking);
    const { time, description, driver } = booking;
    const [week, day, hour] = time.split("-");
    console.log("Booked by:", booking);
    return (
      <div>
        {`Week ${week} ${dayToWords(
          day
        )} ${hour}h timeslot is booked by ${driver} for ${description}`}
      </div>
    );
  };

  return {
    renderConflictingBooking,
    handleDismiss,
  };
};

export default ErrorPromptHandlers;
