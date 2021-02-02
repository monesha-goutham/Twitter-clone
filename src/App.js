import React from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  // BEM
  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgetbar */}
        <Widgets />
      </div>
    </div>
  );
}

export default App;
