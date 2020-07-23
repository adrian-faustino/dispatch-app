import React from "react";
/** Styles **/
import "./App.css";
/** Subcomponents **/
import { Test, Timetable, Controllers } from "./components";

function App() {
  return (
    <div className="App">
      <Controllers />
      <Test />
      <Timetable />
    </div>
  );
}

export default App;
