import React from "react";
/** Styles **/
import "./App.css";
/** Subcomponents **/
import { Test, AppView, Nav } from "./components";
/** Views **/
import { DriversView, TasksView, ScheduleView, ReportView } from "./views";
/** Redux **/
import { useSelector } from "react-redux";
/** Actions **/
import {
  DRIVERS_VIEW,
  TASKS_VIEW,
  SCHEDULE_VIEW,
  REPORT_VIEW,
} from "./util/constants";

function App() {
  /** Redux **/
  const store = useSelector((state) => state);

  return (
    <div className="App">
      <Nav />
      <AppView />

      {store.appView === DRIVERS_VIEW && <DriversView />}
      {store.appView === TASKS_VIEW && <TasksView />}
      {store.appView === SCHEDULE_VIEW && <ScheduleView />}
      {store.appView === REPORT_VIEW && <ReportView />}

      <Test />
    </div>
  );
}

export default App;
