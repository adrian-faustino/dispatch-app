import React, { useEffect, useState } from "react";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
/** Handlers **/
import TimetableHandlers from "./TimetableHandlers";
/** Redux **/
import { useSelector } from "react-redux";

const Timetable = () => {
  /** Redux **/
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = TimetableHandlers(store);

  useEffect(() => {
    handlers.handleGetDriverAvailability();
  }, [store.driver]);

  return (
    <div>
      {/* render slots */}
      <div className="Timetable__slots-container">
        {handlers.renderSlots(store.driver)}
      </div>
    </div>
  );
};

export default Timetable;

/* Component notes: [VIEW]
 * This component is dealing with view render logic only */
