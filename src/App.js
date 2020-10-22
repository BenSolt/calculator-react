import React, { useState } from "react";
import "./App.css";
import './Calculator.css';
import "./Calculator2.css";


import CoffeeForm from './components/CoffeeForm';
import AppCalc from './AppCalc';
import AppCalc2 from './AppCalc2';


function App() {

  const [state, setState] = useState("");
  



  return (
    <div className='holder'>

    <AppCalc/> 
    <AppCalc2/> 


  </div>
  );
}


export default App;
// const domContainer = document.querySelector('#ben_solt_project');
// ReactDOM.render(e(App), domContainer);