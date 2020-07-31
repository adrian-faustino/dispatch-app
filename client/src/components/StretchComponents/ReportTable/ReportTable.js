import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
/** Subcomponents **/
import { DriverDropdown } from "../../";
/** Redux **/
import { useSelector } from "react-redux";

const ReportTable = () => {
  /** Redux **/
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = ReportTableHandlers(store);

  return (
    <section>
      <DriverDropdown />
      <div>{handlers.handleRenderDropdown()}</div>
      <div>{handlers.handleRenderTable()}</div>
    </section>
  );
};

export default ReportTable;
