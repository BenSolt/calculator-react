import React, { useState } from "react";
import "./App.css";

import Numbers from "./components/Numbers";
 
import {nums} from './data';
import {ops} from './data';
import {ids} from './data';

import CoffeeForm from './components/CoffeeForm';



function App() {

  const [oper, setOper] = useState("a");

  const [calculator, setCalculator] = useState("0");
  const [lastPressed, setLastPressed] = useState(undefined);

 

  const handleClick = (e) => {
    
    const { innerText } = e.target;

    switch (innerText) {
      case "AC":
        setCalculator("0");
        setOper("a")
        break;

      case "=":
        const evaluated = eval(calculator);
        
        setCalculator(evaluated);
        setOper(evaluated)
        break;

      case ".":
        const splitted = calculator.split(/[+\-*/]/);
        const last = splitted.slice(-1)[0];
        if (!last.includes(".")) {
          setCalculator(calculator + ".");
          // setOper(oper + ".");
        }
        break;

      default:
        let e = undefined;
        if (ops.includes(innerText)) {
            console.log(innerText)
          if (ops.includes(lastPressed) && innerText !== "-") {
              const lastNumberIdx = calculator.split('').reverse()
                .findIndex(char => char !== ' ' && nums.includes(+char))
              e = calculator.slice(0, calculator.length - lastNumberIdx) + ` ${innerText} `;
          } else {
            e = `${calculator} ${innerText} `;
          }
        } else {
          e = calculator === "0" ? innerText : calculator + innerText;
         
        }

        
        setCalculator(e);
        // setOper(e)
    }
    setLastPressed(innerText);
    
  };

  return (
    <div className='holder'>

    <div className="calculator">
      <div id="display" className="display">
        <small>{oper}</small>
        {calculator}
      </div>
      <div className="nums-container">
        <button
          className="btnClear"
          onClick={handleClick}
          id="clear"
        >
          AC
        </button>


        <Numbers
        onClick1={handleClick}
        nums1={nums}
        />
        

      </div>
      <div className="ops-container">
        {ops.map((op) => (
          <button
            className="orange"
            key={op}
            onClick={handleClick}
            id={ids[op]}
          >
            {op}
          </button>
        ))}
        <button className="orange" onClick={handleClick} id="equals">
          =
        </button>
      </div>      
      
      


    </div> 

  </div>
  );
}


export default App;
// const domContainer = document.querySelector('#ben_solt_project');
// ReactDOM.render(e(App), domContainer);