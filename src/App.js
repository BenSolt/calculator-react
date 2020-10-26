import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import './Calculator.css';
import "./Calculator2.css";



import AppCalc from './AppCalc';
import AppCalc2 from './AppCalc2';
import Charts from "./components/Charts";




function App() {


  const [coinData, setCoinData] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  },[]);



  return (
    <div className='holder'>
      {/* <Charts coinData={coinData} /> */}
      <AppCalc/>
      {/* <AppCalc2/> */}
  
      
  </div>
  );
}


export default App;
// const domContainer = document.querySelector('#ben_solt_project');
// ReactDOM.render(e(App), domContainer);