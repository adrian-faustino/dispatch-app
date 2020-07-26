import React from "react";
/** Subcomponents **/
import { AppView, Controllers, Timetable } from "../components";

const ScheduleView = () => {
  return (
    <div className="view-offset">
      <AppView />
      <Controllers />
      <Timetable />
    </div>
  );
};

export default ScheduleView;
