import React, {useState} from "react";
import "./App.css";


// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

import Display from "./components/Display";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Specials from "./components/Specials";



function App(props) {

 const[display, setDisplay] = useState(0);
 

  return (


    <div className="container">

      <div className="App">

      <Display displaynumber = {display} />
      <div className="keypad">

        <div>

        <Specials/>
         <Numbers number = {display}/>

        </div>

      <Operators/>
      </div>
     
      </div>
    </div>
  );
}

export default App;
