import React from "react";
import Card from "./Card";
// import ThemeIcon from "./ThemeIcon";

const Marquee = ({ tickers }) => {
  return (
    // <div className="marquee">
    //   <div className="marquee-content">
    //     {tickers.map((ticker, index) => (
    //       <div key={index} className="ticker">
    //         <span>{ticker.symbol}</span>
    //         <span>{ticker.price}</span>
    //         <span>{ticker.change}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
    <div>
      <h1 className="text-2xl font-bold text-white pt-3 pl-3 ">AAPL</h1>
      <p className="text-white font-bold text-xl pl-3">US $189.50</p>
      <p className="text-green-500 text-base pl-3 pb-3">+1.5%</p>
    </div>
    </>
  );
};

export default Marquee;
