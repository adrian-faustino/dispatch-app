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
  const isBooked = (dateObj) => {
    const { week, day, hour } = dateObj;
    const entryID = `${week}-${day}-${hour}`;

    return filteredDB[entryID];
  };

  return {
    isBooked,
  };
};

export default entryValidationHelpers;
