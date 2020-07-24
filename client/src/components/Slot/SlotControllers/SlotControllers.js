import React from "react";
/** Reactstrap */
import { Button } from "reactstrap";
/** Helpers **/
import { deleteEntry } from "../../../util/dbHelpers";

const SlotControllers = (props) => {
  const { setFormOpen, formOpen, bookedData, setBookedData } = props;

  const handleFormToggle = () => {
    setFormOpen((state) => !state);
  };

  const handleDelete = () => {
    deleteEntry(bookedData.date, () => {
      console.log("Deleted item.");
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
