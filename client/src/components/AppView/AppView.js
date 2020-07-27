import React from "react";
/** Subcomponents **/
import ErrorPrompt from "../ErrorPrompt/ErrorPrompt";
/** Redux **/
import { useSelector } from "react-redux";
/** Styles **/
import "./AppView.css";

function AppView() {
  const error = useSelector((state) => state.error);
  const date = useSelector((state) => state.date);
  return (
    <div className="AppView">
      <div className="AppView__week-span medium-text">Week {date.week}</div>
      {error.errMsg && <ErrorPrompt />}
    </div>
  );
}

export default AppView;
