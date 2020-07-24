import React from "react";
/** Reactstrap */
import { Button } from "reactstrap";

const SlotControllers = ({ setFormOpen, formOpen }) => {
  const handleFormToggle = () => {
    setFormOpen((state) => !state);
  };

  return (
    <div>{!formOpen && <Button onClick={handleFormToggle}>+</Button>}</div>
  );
};

export default SlotControllers;
