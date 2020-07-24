import React from "react";
/** Styles **/
import "./ErrorPrompt.css";
/** Reactstrap **/
import { Button } from "reactstrap";
/** Redux **/
import { useSelector } from "react-redux";

const ErrorPrompt = () => {
  /** Redux **/
  const error = useSelector((state) => state.error);

  return (
    <div>
      <Button close />
      <span>{error.errMsg}</span>
    </div>
  );
};

export default ErrorPrompt;
