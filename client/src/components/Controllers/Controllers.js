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

      {/* BEGIN: week navigation */}
      <div>
        <button onClick={handlers.goPrevWeek}>prev</button>
        <button onClick={handlers.goNextWeek}>next</button>
      </div>
      {/* END: week navigation */}

      {/* BEGIN: driver selection dropdown */}
      {/* END: driver selection dropdown */}
    </div>
  );
};

export default Controllers;

/* Component notes:
 * This component is contains all of the buttons to navigate the app */
