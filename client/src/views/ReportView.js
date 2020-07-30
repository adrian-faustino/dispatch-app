import React from "react";
/** Redux **/
import { useSelector } from "react-redux";
/** Subcomponents **/
import { CsvExporter, ReportTable } from "../components";

const ReportView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return (
    <div className={`view-offset ${navToggledStyle}`}>
      report view
      <CsvExporter />
      <ReportTable />
    </div>
  );
};

export default ReportView;
