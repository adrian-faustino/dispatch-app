/** Redux **/
import { useSelector } from "react-redux";
import { updateDate } from "../../actions/timetableNavigation";
import { openForm, closeForm } from "../../actions/entryFormActions";
/** Helpers **/
import entryValidation from "../../util/entryValidationHelpers";

const SlotHandlers = (dispatch, dateObj) => {
  /** Redux **/
  const formOpen = useSelector((state) => state.entryForm);
  const validation = entryValidation();

  const handleStyling = (callback) => {
    // check if slot is booked
    const bookedData = validation.isBooked(dateObj);
    callback(bookedData);
  };

  // update redux - to indicate which current date/timeslot is being selected
  const handleSlotDate = () => {
    dispatch(updateDate(dateObj));
  };

  const toggleEntryForm = () => {
    if (formOpen) {
      return dispatch(closeForm());
    } else {
      return dispatch(openForm());
    }
  };

  return { handleStyling, handleSlotDate, toggleEntryForm };
};

export default SlotHandlers;
