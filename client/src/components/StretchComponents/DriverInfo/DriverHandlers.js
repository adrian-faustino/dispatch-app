import React, { useState } from "react";
/** Helpers **/
import { updateDriverData } from "../../../util/driverDbHelpers";

const DriverHandlers = (dispatch, store) => {
  /** State **/
  const [driverData, setDriverData] = useState({
    name: "",
    color: "",
    availability: {
      hour_availability: [],
      day_availability: [],
    },
  });
  const [editMode, setEditMode] = useState(false);

  const handleColorChange = (e) => {
    e.persist();
    setDriverData((state) => ({ ...state, color: e.target.value }));
  };

  const handleToggleEditMode = (e) => {
    e && e.preventDefault();
    setEditMode(!editMode);
  };

  const handleUpdateDB = (e) => {
    e.preventDefault();
    updateDriverData(driverData, () => {
      handleToggleEditMode();
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
