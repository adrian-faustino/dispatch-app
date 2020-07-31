import React, { useState } from "react";
/** Redux **/
import { setEditMode } from "../../../../actions/editModeActions";
/** Constants **/
import { HOURS } from "../../../../util/constants";

/** Subcomponents **/
import Option from "./Option";

const TableCellHandlers = (store, dispatch, driverHandlers) => {
  /** State **/
  const [currentHour, setCurrentHour] = useState("");
  const [thisEditMode, setThisEditMode] = useState(false);
  const state = { currentHour, thisEditMode };

  const handleEditMode = () => {
    // only allow editing when in edit mode
    if (!store.editMode) return;

    if (thisEditMode) return;
    setThisEditMode(true);
  };

  const renderOptions = (dayIndex) => {
    const availability = driverHandlers.driverData.availability[dayIndex];

    const optionsJSX = [];
    for (let hour = 0; hour < HOURS; hour++) {
      const isSelected = availability && availability.includes(hour);
      optionsJSX.push(
        <Option
          key={`${hour}-availability-options`}
          availability={availability}
          isSelected={isSelected}
        >
          {hour}
        </Option>
      );
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
