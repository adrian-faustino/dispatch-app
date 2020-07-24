/** Redux **/
import { useSelector } from "react-redux";
import { updateDate } from "../../actions/timetableNavigation";
import { openForm, closeForm } from "../../actions/entryFormActions";
/** Helpers **/
import { isBooked } from "../../util/entryValidationHelpers";
import { createNewEntry } from "../../util/dbHelpers";

const SlotHandlers = (dispatch, dateObj) => {
  /** Redux **/
  const formOpen = useSelector((state) => state.entryForm);

  const handleStyling = (callback) => {
    // check if slot is booked
    if (isBooked(dateObj)) {
      callback(true);
    } else {
      callback(false);
    }
  };

  const toggleEntryForm = () => {
    if (formOpen) {
      return dispatch(closeForm());
    } else {
      return dispatch(openForm());
    }
  };

  return { handleStyling, toggleEntryForm };
};

export default SlotHandlers;
