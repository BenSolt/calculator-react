import React, { useState } from "react";
import "./App.css";

import Numbers from "./components/Numbers";
 
import {nums} from './data';
import {ops} from './data';
import {ids} from './data';

// const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
// const ops = ["/", "*", "-", "+"];
// const ids = {
//   7: "seven",
//   8: "eight",
//   9: "nine",
//   4: "four",
//   5: "five",
//   6: "six",
//   1: "one",
//   2: "two",
//   3: "three",
//   0: "zero",
//   "/": "divide",
//   "*": "multiply",
//   "-": "subtract",
//   "+": "add"
// };

function App() {

  const [oper, setOper] = useState(" ");

  const [calculator, setCalculator] = useState("0");
  const [lastPressed, setLastPressed] = useState(undefined);

  const handleClick = (e) => {
    const { innerText } = e.target;

    switch (innerText) {
      case "AC":
        setCalculator("0");
        setOper(" ")
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
          setOper(oper + ".");
        }
        break;

      default:
        let e = undefined;
        if (ops.includes(innerText)) {
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
    <div className="calculator">
      <div id="display" className="display">
        <small>{oper}</small>
        {/* <small>{calculator}</small> */}
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
  );
}

export default App;