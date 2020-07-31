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

  const { data, headers } = handlers.cachedCSVdata();

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

      <CSVLink data={data} headers={headers}>
        Download me
      </CSVLink>
    </section>
  );
};

export default ReportTable;
