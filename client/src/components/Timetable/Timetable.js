import React from "react";
/** Styles **/
import "./Timetable.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
/** npm **/
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const Timetable = () => {
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        className="Calendar"
      />
    </div>
  );
};

export default Timetable;
