import { drivers } from "../db/drivers";

// CREATE

// READ
export const getDriverData = (driver, callback) => {
  console.log("Fetching data for", driver);
  return callback(drivers[driver]);
};

// UPDATE

// DELETE
