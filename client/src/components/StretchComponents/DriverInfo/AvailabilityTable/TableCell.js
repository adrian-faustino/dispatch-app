import React, { useState } from "react";
/** Constants **/
import { HOURS } from "../../../../util/constants";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";

const TableCell = (props) => {
  /** State **/
  const [currentHour, setCurrentHour] = useState(props.children);
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSliderChange = (e) => {
    setCurrentHour(e.target.value);
  };

  return (
    <th onClick={handleEditMode}>
      {hourTo12hFormat(currentHour)}
      {editMode && (
        <input
          value={currentHour}
          onChange={handleSliderChange}
          type="range"
          min="0"
          max={HOURS - 1}
        />
      )}
    </th>
  );
};

export default TableCell;
