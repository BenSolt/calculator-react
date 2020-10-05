import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="btnOpers">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operate.char}
    </button>
  );
};

export default OperatorButton;