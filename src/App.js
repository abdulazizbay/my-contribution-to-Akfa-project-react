import React from "react";
import './styles/base.scss'
import FirstWindow from "./components/main/FirstWindow";
import { CalculatorCost } from "./components/main/CalculatorCost";

function App() {
  return (
    <div className="app">
      <FirstWindow/>
      <CalculatorCost/>
    </div>
  );
}

export default App;
