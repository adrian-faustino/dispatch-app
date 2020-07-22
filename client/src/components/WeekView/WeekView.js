import React, { useEffect } from "react";
/** Styles (*/
import "./WeekView.css";
/** Redux */
import { useSelector } from "react-redux";
/** Constants **/
import { DAYS, HOURS } from "../../util/constants";

const WeekView = () => {
  /** Redux **/
  const date = useSelector((state) => state.date);

  // spread slot for rendering
  useEffect(() => {}, []);
  let daysJSX = [];
  let hoursJSX = [];
  for (let i = 0; i < DAYS; i++) {
    daysJSX[i] = <div>{`Day ${i}`}</div>;
  }

  return (
    <div className="WeekView__container">
      <div>Week {date.week}</div>

      <div className="WeekView__column-title-container">{daysJSX}</div>
    </div>
  );
};

export default WeekView;

/* Component notes:
 * This component is dealing with view render logic only */
