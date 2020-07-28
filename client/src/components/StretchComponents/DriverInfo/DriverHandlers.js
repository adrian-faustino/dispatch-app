import React, { useState } from "react";
/** Helpers **/
import { updateDriverData } from "../../../util/driverDbHelpers";
/** Redux **/
import { setEditMode } from "../../../actions/editModeActions";

const DriverHandlers = (dispatch, store) => {
  /** State **/
  const [driverData, setDriverData] = useState({
    name: "",
    color: "",
    availability: {
      0: [],
    },
  });
  const { editMode } = store;

  const handleColorChange = (e) => {
    e.persist();
    setDriverData((state) => ({ ...state, color: e.target.value }));
  };

  const handleToggleEditMode = (e) => {
    e && e.preventDefault();
    dispatch(setEditMode(!editMode));
  };

  const handleUpdateDB = (e) => {
    e.preventDefault();
    updateDriverData(driverData, () => {
      dispatch(setEditMode(false));
    });
  };

  return {
    editMode,
    driverData,
    setDriverData,
    handleToggleEditMode,
    handleColorChange,
    handleUpdateDB,
  };
};

export default DriverHandlers;
