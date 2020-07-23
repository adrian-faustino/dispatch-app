import React from "react";
/** Styles **/
import "./Controllers.css";
/** Redux */
import { useDispatch } from "react-redux";
/** Handlers **/
import ControllersHandlers from "./ControllersHandlers";

const Controllers = () => {
  /** Redux **/
  const dispatch = useDispatch();
  const handlers = ControllersHandlers(dispatch);
  return (
    <div>
      <div>controllers.js</div>
      <div>
        <button onClick={handlers.goPrevWeek}>prev</button>
        <button onClick={handlers.goNextWeek}>next</button>
      </div>
    </div>
  );
};

export default Controllers;

/* Component notes:
 * This component is contains all of the buttons to navigate the app */
