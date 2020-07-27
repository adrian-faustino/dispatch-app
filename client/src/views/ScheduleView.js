import React from "react";
/** Redux **/
import { useSelector } from "react-redux";
/** Subcomponents **/
import { Controllers, Timetable } from "../components";

const ScheduleView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return (
    <div className={`view-offset ${navToggledStyle}`}>
      <Controllers />
      <Timetable />
    </div>
  );
};

export default ScheduleView;
