import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
/** Subcomponents **/
import { DriverDropdown } from "../../";
/** Redux **/
import { useSelector } from "react-redux";
/** Styles **/
import "./ReportTable.css";
/** Constants **/
import { DRIVERS } from "../../../util/constants";
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

        {store.driver !== DRIVERS[0] && handlers.timeFrame !== "Select" && (
          <CSVLink
            className="ReportTable__csv-dl-btn"
            target="_blank"
            filename={fileName}
            data={data}
            headers={headers}
          >
            Download Report
          </CSVLink>
        )}
      </div>

      <div className="ReportTable__table-wrapper">
        {store.driver !== DRIVERS[0] && handlers.timeFrame !== "Select" ? (
          handlers.handleRenderTable()
        ) : (
          <span className="ReportTable__empty-span medium-text">
            Make a selection to view driver reports.
          </span>
        )}
      </div>
    </section>
  );
};

export default ReportTable;
