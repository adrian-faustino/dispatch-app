import React from "react";
/** Reactstrap */
import { Button } from "reactstrap";
/** Helpers **/
import { deleteEntry } from "../../../util/dbHelpers";
/** Constants **/
import { ENTRY_DELETE_200 } from "../../../util/constants";

const SlotControllers = (props) => {
  const { setFormOpen, formOpen, bookedData, setBookedData } = props;

  const handleFormToggle = (e) => {
    e.preventDefault();
    setFormOpen((state) => !state);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteEntry(bookedData.date, () => {
      console.log(ENTRY_DELETE_200);
      // clear booked data
      setBookedData(null);
    });
  };

  return (
    <div>
      {!formOpen && !bookedData && (
        <Button onClick={handleFormToggle}>+</Button>
      )}

      {bookedData && (
        <div>
          <Button onClick={handleFormToggle}>edit</Button>
          <Button onClick={handleDelete}>delete</Button>
        </div>
      )}
    </div>
  );
};

export default SlotControllers;
