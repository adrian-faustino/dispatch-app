import React from "react";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
import { TIMESLOT_CONFLICT } from "../../util/constants";

const ErrorPromptHandlers = (error) => {
  // return JSX displaying booking conflict
  const renderConflictingBooking = () => {
    // #todo 6
    const booking = error.payload;
    const { hour, description, driver } = booking;
    const [week, day, _hour] = hour.split("-");
    console.log("Booked by:", booking);
    return (
      <div>
        {`Week ${week} ${dayToWords(
          day
        )} ${_hour}h timeslot is booked by ${driver} for ${description}`}
      </div>
    );
  };

  return {
    renderConflictingBooking,
  };
};

export default ErrorPromptHandlers;
