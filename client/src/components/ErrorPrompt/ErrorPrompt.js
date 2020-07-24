import React from "react";
/** Styles **/
import "./ErrorPrompt.css";
/** Redux **/
import { useSelector } from "react-redux";

const ErrorPrompt = () => {
  /** Redux **/
  const error = useSelector((state) => state.error);

  return (
    <div>
      <span>{error.errMsg}</span>
    </div>
  );
};

export default ErrorPrompt;
