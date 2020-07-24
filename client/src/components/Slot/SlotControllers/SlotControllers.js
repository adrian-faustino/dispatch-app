import React, { useState } from "react";
/** Reactstrap */
import { Button } from "reactstrap";
/** Helpers **/
import { deleteEntry } from "../../../util/dbHelpers";
/** Constants **/
import { ENTRY_DELETE_200 } from "../../../util/constants";

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
        <Button onClick={handleFormToggle}>+</Button>
      )}

      {bookedData && !deleteConfirm && (
        <div>
          <Button onClick={handleFormToggle}>edit</Button>
          <Button color="danger" onClick={toggleDeleteConfirmation}>
            delete
          </Button>
        </div>
      )}

      {deleteConfirm && (
        <div>
          <p>Are you sure?</p>
          <Button onClick={toggleDeleteConfirmation}>cancel</Button>
          <Button color="danger" onClick={handleDelete}>
            delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default SlotControllers;
