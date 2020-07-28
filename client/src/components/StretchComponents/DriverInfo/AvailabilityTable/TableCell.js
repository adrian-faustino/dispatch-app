import React, { useState, useEffect } from "react";
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
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(HOURS - 1);
  const [thisEditMode, setThisEditMode] = useState(false);

  // set range of how much slider can move depending on start and end time (table)
  useEffect(() => {
    if (props.children === props.start) {
      setMin(0);
      setMax(props.end);
    } else if (props.children === props.end) {
      setMin(props.start);
      setMax(HOURS - 1);
    }

    return () => {
      console.log("unmounting??");
    };
  }, []);

  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const handleEditMode = () => {
    // only allow editing when in edit mode
    if (!store.editMode) return;

    setThisEditMode(!thisEditMode);
    dispatch(setEditMode(true));
  };

  const handleSliderChange = (e) => {
    const val = e.target.value;
    if (val < min || val > max) return;
    setCurrentHour(val);
  };

  // whenever global edit mode is closed, close all slider time editing
  useEffect(() => {
    thisEditMode && setThisEditMode(false);
  }, [store.editMode]);

  return (
    <th onClick={handleEditMode}>
      {hourTo12hFormat(currentHour)}
      {thisEditMode && store.editMode && (
        <input
          value={currentHour}
          onChange={handleSliderChange}
          type="range"
          min={0}
          max={HOURS - 1}
        />
      )}
    </th>
  );
};

export default TableCell;
