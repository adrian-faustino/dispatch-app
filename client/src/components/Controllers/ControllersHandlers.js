/** Redux **/
import { nextWeek, prevWeek } from "../../actions/timetableNavigation";
import { setDriver } from "../../actions/driverActions";

const ControllersHandlers = (setState, dispatch) => {
  const goNextWeek = (e) => {
    e.preventDefault();

    // todo: validate so it doesnt go below 0 or 52 (week range)

    dispatch(nextWeek());
  };

  const goPrevWeek = (e) => {
    e.preventDefault();
    dispatch(prevWeek());
  };

  // handlers for driver selection dropdown
  const toggleDropdown = () => {
    setState((state) => ({ ...state, dropdownOpen: !state.dropdownOpen }));
  };

  // update redux - current driver
  const currentDriver = (e) => {
    const driver = e.target.innerHTML;
    dispatch(setDriver(driver));
  };

  return {
    goNextWeek,
    goPrevWeek,
    toggleDropdown,
    currentDriver,
  };
};

export default ControllersHandlers;
