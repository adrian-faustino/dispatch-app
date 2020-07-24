/** Redux **/
import { useSelector } from "react-redux";
import { updateDate } from "../../actions/timetableNavigation";
import { openForm, closeForm } from "../../actions/entryFormActions";
/** Helpers **/
import entryValidation from "../../util/entryValidationHelpers";

const SlotHandlers = (dispatch, dateObj, store) => {
  const validation = entryValidation(store.driver);

  const handleStyling = (callback) => {
    // check if slot is booked
    const bookedData = validation.isBooked(dateObj);
    callback(bookedData);
  };

  // update redux - to indicate which current date/timeslot is being selected
  const handleSlotDate = () => {
    dispatch(updateDate(dateObj));
  };

  return { handleStyling, handleSlotDate };
};

export default SlotHandlers;
