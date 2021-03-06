import testReducer from "./testReducer";
import dateReducer from "./dateReducer";
import driverReducer from "./driverReducer";
import entryFormReducer from "./entryFormReducer";
import errorReducer from "./errorReducer";
import appViewReducer from "./appViewReducer";
import slideInReducer from "./slideInReducer";
import editModeReducer from "./editModeReducer";
import timetableFilterReducers from "./timetableFilterReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  test: testReducer,
  date: dateReducer,
  driver: driverReducer,
  entryForm: entryFormReducer,
  error: errorReducer,
  appView: appViewReducer,
  slideInToggled: slideInReducer,
  editMode: editModeReducer,
  viewFilters: timetableFilterReducers,
});

export default allReducers;
