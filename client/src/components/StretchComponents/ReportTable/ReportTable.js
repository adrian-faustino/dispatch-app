import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
/** Subcomponents **/
import { DriverDropdown } from "../../";
/** Redux **/
import { useSelector } from "react-redux";
/** Styles **/
import "./ReportTable.css";
/** npm **/
import { CSVLink } from "react-csv";

const ReportTable = () => {
  /** Redux **/
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = ReportTableHandlers(store);

  // CSV variables
  const { data, headers } = handlers.cachedCSVdata();
  const fileName = `${store.driver}_dispatch_report.csv`;

  return (
    <section>
      <div className="ReportTable__btns-container">
        <label>Drivers</label>
        <DriverDropdown />
        <label>Day Range</label>
        <div>{handlers.handleRenderDropdown()}</div>
      </div>

      <div className="ReportTable__table-wrapper">
        {handlers.handleRenderTable()}
      </div>

      <CSVLink
        target="_blank"
        filename={fileName}
        data={data}
        headers={headers}
      >
        Download Report
      </CSVLink>
    </section>
  );
};

export default ReportTable;
