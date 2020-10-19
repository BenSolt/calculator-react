import React, { useState } from "react";

import Display from "./components/ADisplay";
import ButtonPanel from "./components/AButtonPanel";
import calculate from "./logic/calculate";



// function App2() {

// }
// export default App2;

export default class App extends React.Component {
    state = {
      total: null,
      next: null,
      operation: null
    };
  
    handleClick = buttonName => {
      console.log(this.state);
      let result = calculate(this.state, buttonName);
      this.setState(result);
      //console.log(result);
    };
  
    render() {
      return ( 
        <div className="calculator">
            <Display value={this.state.next || this.state.total || "0"} />
            <ButtonPanel clickHandler={this.handleClick} />
        </div>
      );
    }
  }