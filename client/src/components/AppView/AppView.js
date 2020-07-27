import React from "react";
/** Subcomponents **/
import ErrorPrompt from "../ErrorPrompt/ErrorPrompt";
/** Redux **/
import { useSelector } from "react-redux";
/** Styles **/
import "./AppView.css";
/** Constants **/
import { SCHEDULE_VIEW } from "../../util/constants";

function AppView() {
  const store = useSelector((state) => state);
  const date = useSelector((state) => state.date);
  return (
    <div>
      {/* Span displaying week */}
      {store.appView === SCHEDULE_VIEW && (
        <div className="AppView__week-span medium-text">Week {date.week}</div>
      )}

      {/* Prompt displaying input errors */}
      {store.error.errMsg && <ErrorPrompt />}
    </div>
  );
}

export default AppView;
