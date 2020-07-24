import React from "react";
/** Styles **/
import "./App.css";
/** Subcomponents **/
import { Test, Timetable, Controllers, AppView } from "./components";

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <AppView />
      <Controllers />
      <Timetable />
    </div>
  );
}

export default App;
