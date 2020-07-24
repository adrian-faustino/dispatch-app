import React from "react";
/** Subcomponents **/
import ErrorPrompt from "../ErrorPrompt/ErrorPrompt";
/** Redux **/
import { useSelector } from "react-redux";

function AppView() {
  const error = useSelector((state) => state.error);
  const date = useSelector((state) => state.date);
  return (
    <div>
      <div>Week: {date.week}</div>
      {error.errMsg && <ErrorPrompt />}
    </div>
  );
}

export default AppView;
