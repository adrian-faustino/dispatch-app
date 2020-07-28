import React, { useState, useEffect } from "react";
/** Constants **/
import { HOURS } from "../../../../util/constants";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";
/** Redux **/
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../../../../actions/editModeActions";

// These propss are passed down from AvailabilityHandlers.js
const TableCell = (props) => {
  const { dayIndex, setDriverData } = props;

  /** State **/
  const [currentHour, setCurrentHour] = useState(props.children);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(HOURS - 1);
  const [thisEditMode, setThisEditMode] = useState(false);
  const [originalHour, setOriginalHour] = useState(props.children);

  // set range of how much slider can move depending on start and end time (table)
  useEffect(() => {
    if (props.children === props.start) {
      setMin(0);
      setMax(props.end);
    } else if (props.children === props.end) {
      setMin(props.start);
      setMax(HOURS - 1);
    }
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

  const handleSliderSubmit = () => {
    setDriverData((state) => {
      const { availability } = state;
      const updated = switchItemsInArr(
        availability[dayIndex],
        parseInt(currentHour),
        originalHour
      );
      console.log("Submitting updated hour...");
      return { ...state, availability: updated };
    });
  };

  // whenever global edit mode is closed, close all slider time editing
  useEffect(() => {
    thisEditMode && setThisEditMode(false);
  }, [store.editMode]);

  return (
    <th className="pointer_mouse" onClick={handleEditMode}>
      {hourTo12hFormat(currentHour)}
      {thisEditMode && store.editMode && (
        <input
          onMouseUp={handleSliderSubmit}
          className="pointer_mouse"
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

function switchItemsInArr(arr, item_in, item_out) {
  const newArr = arr;
  const index = arr.indexOf(item_out);
  if (index !== -1) {
    newArr[index] = item_in;
  }
  return newArr;
}
