import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
/** Subcomponents **/
import { DriverDropdown } from "../../";

const ReportTable = () => {
  /** Handlers **/
  const handlers = ReportTableHandlers();

  return (
    <section>
      <DriverDropdown />
      <div>{handlers.handleRenderDropdown()}</div>
      <div>{handlers.handleRenderTable()}</div>
    </section>
  );
};

export default ReportTable;
