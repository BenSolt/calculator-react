import React, {useState} from "react";


const Numbers = (props) => {


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


  return (
    <div className="numbers">

  {props.nums1.map((num, ids) => (
          <button
            className={`dark-grey ${num === 0 && "big-h"}`}
            key={num}
            onClick={props.onClick1}
            id={ids[num]}
          >
            {num}
          </button>
  ))}  
  
      <button className="light-grey" onClick={props.onClick1} id="decimal">
          .
        </button>
    
    </div>
  );
};

export default Numbers;