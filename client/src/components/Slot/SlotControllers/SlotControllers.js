import React from "react";
/** Reactstrap */
import { Button } from "reactstrap";

const SlotControllers = (props) => {
  const { setFormOpen, formOpen, bookedData } = props;

  const handleFormToggle = () => {
    setFormOpen((state) => !state);
  };

  return (
    <div>
      {!formOpen && !bookedData && (
        <Button onClick={handleFormToggle}>+</Button>
      )}

      {bookedData && <Button onClick={handleFormToggle}>edit</Button>}
    </div>
  );
};

export default SlotControllers;
