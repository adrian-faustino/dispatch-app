import React from "react";
/** Redux **/
import { useSelector } from "react-redux";

const TasksView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return <div className={`view-offset ${navToggledStyle}`}>tasks view</div>;
};

export default TasksView;
