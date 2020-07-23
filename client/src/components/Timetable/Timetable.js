import React from "react";
/** Subcomponents **/
import { WeekView } from "../";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

//delete later
import { entries } from "../../db/entries";

const Timetable = () => {
  return (
    <div>
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
