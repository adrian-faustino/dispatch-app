import React from "react";
/** Subcomponents **/
import { WeekView } from "../";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
/** Handlers **/
import TimetableHandlers from "./TimetableHandlers";
/** npm **/
import moment from "moment";
/** Redux */
import { useSelector, useDispatch } from "react-redux";

//delete later
import { entries } from "../../db/entries";

const Timetable = () => {
  /** Redux **/
  const dispatch = useDispatch();

  /** Handlers **/
  const handlers = TimetableHandlers(dispatch);

  return (
    <div>
      <div>
        <button onClick={handlers.goPrevWeek}>prev</button>
        <button onClick={handlers.goNextWeek}>next</button>
      </div>

      <button
        onClick={() => {
          console.log(entries);
        }}
      >
        show db
      </button>

      <WeekView />
    </div>
  );
};

export default Timetable;
