import React from "react";
/** Subcomponents **/
import { EntryForm } from "../";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
/** Handlers **/
import TimetableHandlers from "./TimetableHandlers";

const Timetable = () => {
  /** Handlers **/
  const handlers = TimetableHandlers();

  return (
    <div>
      {/* render slot frame (days x hours) */}

      {/* render slots */}
      <div className="Timetable__slots-container">{handlers.renderSlots()}</div>

      {/* render modal for new entry */}
      <EntryForm />
    </div>
  );
};

export default Timetable;

/* Component notes: [VIEW]
 * This component is dealing with view render logic only */
