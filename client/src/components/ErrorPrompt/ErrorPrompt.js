import React from "react";
/** Styles **/
import "./ErrorPrompt.css";
/** Reactstrap **/
import { Button } from "reactstrap";
/** Redux **/
import { useDispatch, useSelector } from "react-redux";
/** Handlers **/
import ErrorPromptHandlers from "./ErrorPromptHandlers";
import { TIMESLOT_CONFLICT } from "../../util/constants";
import { Suggestions } from "../";

const ErrorPrompt = () => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const error = useSelector((state) => state.error);

  /** Handlers */
  const handlers = ErrorPromptHandlers(dispatch, error);

  return (
    <div className="ErrorPrompt__container">
      <Button
        className="ErrorPrompt__dismiss-btn"
        close
        onClick={handlers.handleDismiss}
      />
      <span className="ErrorPrompt__header">{error.errMsg}</span>

      {/* display error on timesplot conflict */}
      {error.errMsg === TIMESLOT_CONFLICT &&
        handlers.renderConflictingBooking()}

      {/* display other time slots suggestions */}
      {error.errMsg === TIMESLOT_CONFLICT && <Suggestions />}
    </div>
  );
};

export default ErrorPrompt;
