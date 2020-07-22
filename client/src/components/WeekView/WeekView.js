import React from "react";
/** Redux */
import { useSelector } from "react-redux";

const WeekView = () => {
  /** Redux **/
  const date = useSelector((state) => state.date);

  return (
    <div>
      <div>Week {date.week}</div>
    </div>
  );
};

export default WeekView;
