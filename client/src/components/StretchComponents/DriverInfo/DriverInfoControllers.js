import React from "react";
/** Reactstrap **/
import { Button } from "reactstrap";
/** Constants **/
import { edit_btn, cancel_btn, submit_btn } from "../../../util/constants";

// This handler is passed down from DriverHandlers.js
const DriverInfoControllers = ({ handlers }) => {
  return (
    <div className="DriverInfo__btns-container">
      {!handlers.editMode && (
        <Button
          onClick={handlers.handleToggleEditMode}
          color="primary"
          className="DriverInfo__edit-btn"
        >
          {edit_btn}
        </Button>
      )}

      {handlers.editMode && (
        <>
          <Button
            color="success"
            onClick={handlers.handleUpdateDB}
            className="DriverInfo__edit-btn"
          >
            done
          </Button>
          {/* <Button
            onClick={handlers.handleCancel}
            className="DriverInfo__edit-btn"
          >
            {cancel_btn}
          </Button> */}
        </>
      )}
    </div>
  );
};

export default DriverInfoControllers;
