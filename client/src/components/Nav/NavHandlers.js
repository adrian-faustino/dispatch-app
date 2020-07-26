import React from "react";
/** Redux **/
import { updateAppView } from "../../actions/appViewActions";
import { APP_VIEWS } from "../../util/constants";

const NavHandlers = (dispatch) => {
  const handleChangeView = () => {
    dispatch(updateAppView("REPORT_VIEW"));
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
