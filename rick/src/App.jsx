import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import MainHarry from './components/main'

const App = () => (
  <div className="container">
   <MainHarry/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
