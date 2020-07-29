import React, { useEffect } from "react";
/** Subcomponents **/
import ErrorPrompt from "../ErrorPrompt/ErrorPrompt";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
import { resetError } from "../../actions/errorActions";
/** Styles **/
import "./AppView.css";

function AppView() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // close any error prompts whenever view changes
    handleCloseError();
  }, [store.appView]);

  const handleCloseError = () => {
    dispatch(resetError());
  };

  // move position of background depending on slider
  const errorStyle = {
    left: store.slideInToggled && "var(--slide-in-width)",
  };
  return (
    <div className="AppView__container">
      {/* Prompt displaying input errors */}
      {store.error.errMsg && <ErrorPrompt />}

      {/* Area around error prompt */}
      {store.error.errMsg && (
        <div
          onClick={handleCloseError}
          style={errorStyle}
          className="App__error-dismiss-area"
        ></div>
      )}
    </div>
  );
}

export default AppView;
