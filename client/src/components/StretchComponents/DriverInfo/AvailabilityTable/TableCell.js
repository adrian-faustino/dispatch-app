import React, { useEffect } from "react";

/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";
/** Redux **/
import { useDispatch, useSelector } from "react-redux";
/** Reacstrap **/
import { Input } from "reactstrap";

/** Handlers **/
import TableCellHandlers from "./TableCellHandlers";

// These props are passed down from AvailabilityHandlers.js
// props.driverHandlers is from DriverHandlers.js
const TableCell = (props) => {
  const { dayIndex, driverHandlers } = props;

  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = TableCellHandlers(store, dispatch, driverHandlers);
  const { currentHour, thisEditMode } = handlers.state;

  // whenever global edit mode is closed, close all slider time editing
  useEffect(() => {
    thisEditMode && handlers.setThisEditMode(false);
  }, [store.editMode]);

  useEffect(() => {
    handlers.setCurrentHour(props.children);
  }, []);

  return (
    <th className="pointer_mouse" onClick={handlers.handleEditMode}>
      {hourTo12hFormat(currentHour)}
      {store.editMode && (
        <Input type="select" multiple>
          {handlers.renderOptions(dayIndex)}
        </Input>
      )}
    </th>
  );
};

export default TableCell;

// function switchItemsInArr(arr, item_in, item_out) {
//   const newArr = arr;
//   const index = arr.indexOf(item_out);
//   if (index !== -1) {
//     newArr[index] = item_in;
//   }
//   return newArr;
// }
