/** DB **/
import { entries } from "../db/entries";
/** Redux **/
import { useSelector } from "react-redux";
/** Helpers **/
import { getDriverEntries } from "../util/dbHelpers";

const EntryValidationHelpers = () => {
  const currentDriver = useSelector((state) => state.driver);
  const filteredDB = getDriverEntries(currentDriver);

  // check if entry already exists - return entry
  const isBooked = (dateObj) => {
    const { week, day, hour } = dateObj;
    const entryID = `${week}-${day}-${hour}`;

    return filteredDB[entryID];
  };

  return {
    isBooked,
  };
};

export default EntryValidationHelpers;
