import React from "react";
/** Subcomponents **/
import { WeekView } from "../";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
/** Handlers **/
import TimetableHandlers from "./TimetableHandlers";

//delete later
import { entries } from "../../db/entries";

const Timetable = () => {
  /** Handlers **/
  const handlers = TimetableHandlers();

  return (
    <div>
      <button
        onClick={() => {
          console.log(entries);
        }}
      >
        show db
      </button>
      {/* render slot frame (days x hours) */}

      {/* render slots */}
      <div className="Timetable__slots-container">{handlers.renderSlots()}</div>

      {/* render modal for new entry */}
    </div>
  );
};

export default Timetable;

/* Component notes: [VIEW]
 * This component is dealing with view render logic only */
