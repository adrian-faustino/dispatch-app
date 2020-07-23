import testReducer from "./testReducer";
import dateReducer from "./dateReducer";
import driverReducer from "./driverReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  test: testReducer,
  date: dateReducer,
  driver: driverReducer,
});

export default allReducers;
