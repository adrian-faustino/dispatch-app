/** DB **/
import { entries } from "../db/entries";
/** Helpers **/
import { getDriverEntries } from "../util/dbHelpers";

const EntryValidationHelpers = (currentDriver) => {
  const filteredDB = currentDriver ? getDriverEntries(currentDriver) : entries;

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
