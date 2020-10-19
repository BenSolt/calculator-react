import React from "react";
import AButton from "./AButton";

function ButtonPanel(props) {


  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

    return (
      <div className="button-panel">
        <div>
          <AButton name="AC" clickHandler={handleClick} white/>
          <AButton name="+/-" clickHandler={handleClick} gray/>
          <AButton name="%" clickHandler={handleClick} gray/>
          <AButton name="÷" clickHandler={handleClick}  />
        </div>
        <div>
          <AButton name="7" clickHandler={handleClick} gray/>
          <AButton name="8" clickHandler={handleClick} gray/>
          <AButton name="9" clickHandler={handleClick} gray/>
          <AButton name="x" clickHandler={handleClick}  />
        </div>
        <div>
          <AButton name="4" clickHandler={handleClick} gray/>
          <AButton name="5" clickHandler={handleClick} gray/>
          <AButton name="6" clickHandler={handleClick} gray/>
          <AButton name="-" clickHandler={handleClick}  />
        </div>
        <div>
          <AButton name="1" clickHandler={handleClick} gray/>
          <AButton name="2" clickHandler={handleClick} gray/>
          <AButton name="3" clickHandler={handleClick} gray/>
          <AButton name="+" clickHandler={handleClick}  />
        </div>
        <div>
        
          <AButton name="0" clickHandler={handleClick} gray wide/>
          
          <AButton name="." clickHandler={handleClick} gray/>
          <AButton name="=" clickHandler={handleClick}  />
        </div>
      </div>
    );
}

export default ButtonPanel;