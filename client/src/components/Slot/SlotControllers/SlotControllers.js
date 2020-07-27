import React, { useState } from "react";
/** Reactstrap */
import { Button } from "reactstrap";
/** Helpers **/
import { deleteEntry } from "../../../util/dbHelpers";
/** Constants **/
import {
  ENTRY_DELETE_200,
  edit_btn,
  delete_btn,
  cancel_btn,
} from "../../../util/constants";
/** Styles **/
import "./SlotControllers.css";

const SlotControllers = (props) => {
  const { setFormOpen, formOpen, bookedData, setBookedData } = props;

  /** State **/
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const handleFormToggle = (e) => {
    e && e.preventDefault();
    setFormOpen((state) => !state);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteEntry(bookedData.date, () => {
      console.log(ENTRY_DELETE_200);
      // clear booked data
      setBookedData(null);
      // close confirmation
      toggleDeleteConfirmation();
    });
  };

  const toggleDeleteConfirmation = (e) => {
    e && e.preventDefault();
    // close entry form
    setFormOpen(false);
    setDeleteConfirm(!deleteConfirm);
  };

  return (
    <div>
      {!formOpen && !bookedData && (
        <Button className="show-btn-on-hover" onClick={handleFormToggle}>
          ➕
        </Button>
      )}

      {bookedData && !deleteConfirm && (
        <div className="SlotControllers__btn-container">
          <Button onClick={handleFormToggle}>{edit_btn}</Button>
          <Button color="danger" onClick={toggleDeleteConfirmation}>
            {delete_btn}
          </Button>
        </div>
      )}

      {deleteConfirm && (
        <>
          <span className="SlotControllers__warning-prompt">Are you sure?</span>
          <div className="SlotControllers__btn-container">
            <Button color="danger" onClick={handleDelete}>
              {delete_btn}
            </Button>
            <Button color="primary" onClick={toggleDeleteConfirmation}>
              {cancel_btn}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SlotControllers;
