import React, { useState, useEffect } from "react";
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
  add_btn,
} from "../../../util/constants";
/** Styles **/
import "./SlotControllers.css";
/** Redux **/
import { useSelector } from "react-redux";
/** npm **/
import classNames from "classnames";

const SlotControllers = (props) => {
  const { setFormOpen, formOpen, bookedData, setBookedData, isVisible } = props;

  /** State **/
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  /** Redux **/
  const store = useSelector((state) => state);

  // When week changes, reset delete confirm
  useEffect(() => setDeleteConfirm(false), [store.date.week]);

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

  const controlsVisibility = classNames("SlotControllers__btn-container", {
    isVisible,
  });

  return (
    <div>
      {/* add new booking btn */}
      {!formOpen && !bookedData && (
        <Button
          className={`show-btn-on-hover ${controlsVisibility}`}
          onClick={handleFormToggle}
        >
          {add_btn}
        </Button>
      )}

      {/* edit / delete btns */}
      {bookedData && !deleteConfirm && (
        <div className={`SlotControllers__btn-container ${controlsVisibility}`}>
          <Button onClick={handleFormToggle}>{edit_btn}</Button>
          <Button color="danger" onClick={toggleDeleteConfirmation}>
            {delete_btn}
          </Button>
        </div>
      )}

      {/* delete confirmation */}
      {deleteConfirm && (
        <>
          <span className="SlotControllers__warning-prompt">Are you sure?</span>
          <div
            className={`SlotControllers__btn-container ${controlsVisibility}`}
          >
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
