import testReducer from "./testReducer";
import dateReducer from "./dateReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  test: testReducer,
  date: dateReducer,
});

export default allReducers;
