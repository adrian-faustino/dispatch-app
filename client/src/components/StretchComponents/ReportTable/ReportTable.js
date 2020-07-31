import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
/** Subcomponents **/
import { DriverDropdown } from "../../";
/** Redux **/
import { useSelector } from "react-redux";
/** Styles **/
import "./ReportTable.css";

const ReportTable = () => {
  /** Redux **/
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = ReportTableHandlers(store);

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
    </section>
  );
};

export default ReportTable;
