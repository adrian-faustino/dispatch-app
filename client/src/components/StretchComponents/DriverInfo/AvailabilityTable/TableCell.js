import React, { useState } from "react";
/** Constants **/
import { HOURS } from "../../../../util/constants";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";
/** Redux **/
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../../../../actions/editModeActions";

const TableCell = (props) => {
  /** State **/
  const [currentHour, setCurrentHour] = useState(props.children);

  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const handleEditMode = () => {
    dispatch(setEditMode(true));
  };

  const handleSliderChange = (e) => {
    setCurrentHour(e.target.value);
  };

  return (
    <th onClick={handleEditMode}>
      {hourTo12hFormat(currentHour)}
      {store.editMode && (
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
