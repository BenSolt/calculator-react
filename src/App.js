import React, { useState } from "react";
import "./App.css";
import './Calculator.css';

import CoffeeForm from './components/CoffeeForm';
import AppCalc from './AppCalc';

function App() {

  return (
    <div className='holder'>

    <CoffeeForm/> 
    <AppCalc/> 

  </div>
  );
}



export default App;
// const domContainer = document.querySelector('#ben_solt_project');
// ReactDOM.render(e(App), domContainer);