/** DB **/
import { entries } from "../db/entries";
/** Helpers **/
import { getDriverEntries } from "../util/dbHelpers";
/** Constants **/
import { DRIVERS } from "../util/constants";
const ALL = DRIVERS[0];

const entryValidationHelpers = (currentDriver) => {
  // if no driver param is provided, use full db
  const filteredDB =
    currentDriver && currentDriver !== ALL
      ? getDriverEntries(currentDriver)
      : entries;

  // check if entry already exists - return entry
  const isBooked = (dateID) => {
    return filteredDB[dateID];
  };

  return {
    isBooked,
  };
};

export default entryValidationHelpers;

// Note: validating if entry exists in DB, entry validation is done in Entry.js schema
// Todo: change file name to be more descriptive
