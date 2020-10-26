import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="container" key={coin.name}>
            <div className="title">
                <img  className='coinImage' src={coin.image}  alt={coin.name} />
                <h2 className="coin__title">{coin.name}</h2>
            </div>
            <div className='test'>
                <h3>SYMBOL:</h3>
                <h4 className="coin__symbol">{coin.symbol}</h4>
            </div>

            <div className='test'>
                <h3>PRICE:</h3>
                <h4>{coin.current_price}</h4>
            </div>

            <div className='test'>
                <h3>HIGH:</h3>
                <h4>{coin.high_24h}</h4>
            </div>

            <div className='test'>
                <h3>LOW:</h3>
                <h4>{coin.low_24h}</h4>
            </div>

            {/* <h4 >Price: {coin.current_price}</h4> */}

          {/* <Chart sparklineData={coin.sparkline_in_7d.price} /> */}
        </div>
      ))}
    </div>
  );
};
export default Charts;