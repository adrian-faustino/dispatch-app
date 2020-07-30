import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";

const ReportTable = () => {
  /** Handlers **/
  const handlers = ReportTableHandlers();

  return (
    <section>
      <div>{handlers.handleRenderDropdown()}</div>
      <div>{handlers.handleRenderTable()}</div>
    </section>
  );
};

export default ReportTable;
