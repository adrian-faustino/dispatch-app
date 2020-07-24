import React from "react";
/** Reactstrap */
import { Button } from "reactstrap";

const SlotControllers = ({ handlers }) => {
  return (
    <div>
      <Button onClick={handlers.toggleEntryForm}>+</Button>
    </div>
  );
};

export default SlotControllers;
