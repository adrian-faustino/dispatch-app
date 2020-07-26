import React from "react";
/** Redux **/
import { updateAppView } from "../../actions/appViewActions";
import { APP_VIEWS } from "../../util/constants";

const NavHandlers = (dispatch, store) => {
  const handleChangeView = (view) => {
    // prevent unnecessary update
    if (store.APP_VIEWS === view) return;
    dispatch(updateAppView(view));
  };

  const renderNavItems = () => {
    return APP_VIEWS.map((view) => (
      <li className="medium-text" onClick={() => handleChangeView(view)}>
        {view}
      </li>
    ));
  };

  return { handleChangeView, renderNavItems };
};

export default NavHandlers;
