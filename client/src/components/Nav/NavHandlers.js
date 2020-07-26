/** Redux **/
import { updateAppView } from "../../actions/appViewActions";

const NavHandlers = (dispatch) => {
  const handleChangeView = () => {
    dispatch(updateAppView("REPORT_VIEW"));
  };

  return { handleChangeView };
};

export default NavHandlers;
