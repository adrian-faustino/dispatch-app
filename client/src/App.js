import React from "react";
/** Styles **/
import "./App.css";
/** Subcomponents **/
import { Test, Timetable, Controllers, AppView, Nav } from "./components";
/** Redux **/

function App() {
  return (
    <div className="App">
      <Test />
      <Nav />
      <AppView />
      <Controllers />
      <Timetable />
    </div>
  );
}

export default App;
