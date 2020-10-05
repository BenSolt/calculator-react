import React, { useState } from "react";
import "./App2.css";

import Numbers from "./components/Numbers";



const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "-", "+"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "*": "multiply",
  "-": "subtract",
  "+": "add"
};

function App() {
  // const [press, setPress] = useState(undefined)
  // const [current, setCurrent] = useState("0");
  const [calculator, setCalculator] = useState("0");
  // const [operation, setOperation] = useState(undefined);
  const [lastPressed, setLastPressed] = useState(undefined);

  const handleClick = (e) => {
    const { innerText } = e.target;

    switch (innerText) {
      case "AC":
        setCalculator("0");
        break;
      case "=":
        const evaluated = eval(calculator);
   
        setCalculator(evaluated);
        break;
      case ".":
        const splitted = calculator.split(/[+\-*/]/);
        const last = splitted.slice(-1)[0];
        if (!last.includes(".")) {
          setCalculator(calculator + ".");
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
    }
    setLastPressed(innerText);
    
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        <small>{calculator}</small>
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
        // id1={ids}
        />
        
      {/* 
        {nums.map((num) => (
          <button
            className={`dark-grey ${num === 0 && "big-h"}`}
            key={num}
            onClick={handleClick}
            id={ids[num]}
          >
            {num}
          </button>
        ))} */}

        {/* <button className="light-grey" onClick={handleClick} id="decimal">
          .
        </button> */}
        
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