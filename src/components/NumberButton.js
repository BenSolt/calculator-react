import React from "react";


const NumberButton = (props) => {
  return (
    <button className="btnNums"onClick={() => console.log (props.text)}>
     
    {props.text}
    
    </button>
  );
};

export default NumberButton;