import React from "react";
/** Redux **/
import { useSelector } from "react-redux";

const DriversView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return <div className={`view-offset ${navToggledStyle}`}>drivers view</div>;
};

export default DriversView;
