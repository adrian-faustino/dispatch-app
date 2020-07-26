import React from "react";
/** Redux **/
import { updateAppView } from "../../actions/appViewActions";
import { toggleSlideIn } from "../../actions/slideInActions";
/** Constants **/
import { APP_VIEWS, TOGGLE_SLIDE_IN } from "../../util/constants";

const NavHandlers = (dispatch, store) => {
  const handleChangeView = (view) => {
    // prevent unnecessary update
    if (store.APP_VIEWS === view) return;
    dispatch(updateAppView(view));
  };

  const handleToggleSlideIn = () => {
    dispatch(toggleSlideIn(TOGGLE_SLIDE_IN));
  };

  const renderNavItems = () => {
    return APP_VIEWS.map((view) => {
      let styling = store.appView === view && "Nav__current-view";
      return (
        <li
          key={`${view}-nav-li`}
          className={`medium-text ${styling}`}
          onClick={() => handleChangeView(view)}
        >
          {view}
        </li>
      );
    });
  };

  return { handleChangeView, renderNavItems, handleToggleSlideIn };
};

export default NavHandlers;
