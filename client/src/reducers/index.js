import testReducer from "./testReducer";
import dateReducer from "./dateReducer";
import driverReducer from "./driverReducer";
import entryFormReducer from "./entryFormReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  test: testReducer,
  date: dateReducer,
  driver: driverReducer,
  entryForm: entryFormReducer,
});

export default allReducers;
