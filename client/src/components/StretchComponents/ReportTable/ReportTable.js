import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";

const ReportTable = () => {
  /** Handlers **/
  const handlers = ReportTableHandlers();

  return <section>{handlers.handleRenderDropdown()}</section>;
};

export default ReportTable;
