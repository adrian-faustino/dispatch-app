import React from "react"; /** Redux **/
import { useSelector } from "react-redux";

const ReportView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return <div className={`view-offset ${navToggledStyle}`}>report view</div>;
};

export default ReportView;
