import React from "react";
/** Subcomponents **/
import { EntryForm } from "../";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
/** Handlers **/
import TimetableHandlers from "./TimetableHandlers";
/** Redux **/
import { useSelector } from "react-redux";

const Timetable = () => {
  /** Handlers **/
  const handlers = TimetableHandlers();

  /** Redux **/
  const formOpen = useSelector((state) => state.entryForm);

  return (
    <div>
      {/* render slot frame (days x hours) */}

      {/* render slots */}
      <div className="Timetable__slots-container">{handlers.renderSlots()}</div>

      {/* render modal for new entry */}
      {/* {formOpen && <EntryForm />} */}
    </div>
  );
};

export default Timetable;

/* Component notes: [VIEW]
 * This component is dealing with view render logic only */
