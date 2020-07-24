import React from "react";
/** Styles **/
import "./ErrorPrompt.css";
/** Reactstrap **/
import { Button } from "reactstrap";
/** Redux **/
import { useSelector } from "react-redux";
/** Handlers **/
import ErrorPromptHandlers from "./ErrorPromptHandlers";
import { TIMESLOT_CONFLICT } from "../../util/constants";

const ErrorPrompt = () => {
  /** Redux **/
  const error = useSelector((state) => state.error);

  /** Handlers */
  const handlers = ErrorPromptHandlers(error);

  return (
    <div className="ErrorPrompt__container">
      <Button close />
      <span>{error.errMsg}</span>

      {/* display error on timesplot conflict */}
      {error.errMsg === TIMESLOT_CONFLICT &&
        handlers.renderConflictingBooking()}
    </div>
  );
};

export default ErrorPrompt;
