import React, { useState } from "react";
/** Redux **/
import { setEditMode } from "../../../../actions/editModeActions";
/** Constants **/
import { HOURS } from "../../../../util/constants";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";

const TableCellHandlers = (store, dispatch, driverHandlers) => {
  /** State **/
  const [currentHour, setCurrentHour] = useState("");
  const [thisEditMode, setThisEditMode] = useState(false);
  const state = { currentHour, thisEditMode };

  const handleEditMode = () => {
    // only allow editing when in edit mode
    if (!store.editMode) return;

    setThisEditMode(true);
  };

  const renderOptions = (dayIndex) => {
    const availability = driverHandlers.driverData.availability[dayIndex];

    const optionsJSX = [];
    for (let hour = 0; hour < HOURS; hour++) {
      optionsJSX.push(<option>{hourTo12hFormat(hour)}</option>);
    }

    return optionsJSX;
  };

  return {
    setCurrentHour,
    setThisEditMode,
    handleEditMode,
    state,
    renderOptions,
  };
};

export default TableCellHandlers;
