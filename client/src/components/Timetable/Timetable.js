import React from "react";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
/** Handlers **/
import TimetableHandlers from "./TimetableHandlers";
/** npm **/
import moment from "moment";
/** Redux */
import { useSelector, useDispatch } from "react-redux";

const Timetable = () => {
  /** Redux **/
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();

  /** Handlers **/
  const handlers = TimetableHandlers(dispatch);

  return (
    <div>
      Week: {date.week}
      <div>
        <button onClick={handlers.goPrevWeek}>prev</button>
        <button onClick={handlers.goNextWeek}>next</button>
      </div>
    </div>
  );
};

export default Timetable;
