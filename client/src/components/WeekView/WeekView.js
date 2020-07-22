import React, { useEffect } from "react";
/** Subcomponents **/
import { Slot } from "../../components";
/** Styles **/
import "./WeekView.css";
/** Redux */
import { useSelector } from "react-redux";
/** Constants **/
import { DAYS, HOURS } from "../../util/constants";

const WeekView = () => {
  /** Redux **/
  console.log("WeekView mounting again.");
  // spread slot for rendering
  useEffect(() => {}, []);
  let daysJSX = [];
  let hoursJSX = [];
  // for (let i = 0; i < DAYS; i++) {
  //   daysJSX[i] = <div>{`Day ${i}`}</div>;
  // }
  // for (let i = 0; i < HOURS; i++) {
  //   hoursJSX[i] = <div>{`${i} h`}</div>;
  // }
  const tiles = [];
  for (let i = 0; i < DAYS; i++) {
    for (let j = 0; j < HOURS; j++) {
      tiles.push(<Slot day={i} hour={j} />);
    }
  }

  return <div className="WeekView__container">{tiles}</div>;
};

export default WeekView;

/* Component notes:
 * This component is dealing with view render logic only */
