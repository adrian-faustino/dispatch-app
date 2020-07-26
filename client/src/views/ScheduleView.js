import React from "react";
/** Redux **/
import { useSelector } from "react-redux";
/** Subcomponents **/
import { AppView, Controllers, Timetable } from "../components";

const ScheduleView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return (
    <div className={`view-offset ${navToggledStyle}`}>
      <AppView />
      <Controllers />
      <Timetable />
    </div>
  );
};

export default ScheduleView;
