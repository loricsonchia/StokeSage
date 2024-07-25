// import React from "react";

// const Marquee = ({ tickers }) => {
//   return (
//     <>
//       <div className="flex">
//         <div className="ticker-container flex animate-scroll flex-shrink-0">
//           <div className="flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3 ">AAPL</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $224.07</p>
//             <p className="text-red-700 text-base pl-3 pb-3 font-bold">-3.5%</p>
//           </div>
//           <div className="ml-5 flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3 ">TSLA</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $238.79</p>
//             <p className="text-green-500 text-base pl-3 pb-3 font-bold">
//               +12.5%
//             </p>
//           </div>
//           <div className="ml-5 flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3">TSM</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $167.01</p>
//             <p className="text-green-500 text-base pl-3 pb-3 font-bold">
//               +2.3%
//             </p>
//           </div>
//           <div className="ml-5 flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3">JPM</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $211.04</p>
//             <p className="text-green-500 text-base pl-3 pb-3 font-bold">
//               +1.7%
//             </p>
//           </div>
//           <div className="ml-5 pr-5 flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3 ">NVDA</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $118.92</p>
//             <p className="text-red-700 text-base pl-3 pb-3 font-bold">-5.6%</p>
//           </div>
//           {/* Duplicating tickers */}
//           <div className="flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3 ">AAPL</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $224.07</p>
//             <p className="text-red-700 text-base pl-3 pb-3 font-bold">-3.5%</p>
//           </div>
//           <div className="ml-5 flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3 ">TSLA</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $238.79</p>
//             <p className="text-green-500 text-base pl-3 pb-3 font-bold">
//               +12.5%
//             </p>
//           </div>
//           <div className="ml-5 flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3">TSM</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $167.01</p>
//             <p className="text-green-500 text-base pl-3 pb-3 font-bold">
//               +2.3%
//             </p>
//           </div>
//           <div className="ml-5 flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3">JPM</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $211.04</p>
//             <p className="text-green-500 text-base pl-3 pb-3 font-bold">
//               +1.7%
//             </p>
//           </div>
//           <div className="ml-5 pr-5  flex-col whitespace-nowrap">
//             <h1 className="text-3xl font-bold text-white pt-3 pl-3 ">NVDA</h1>
//             <p className="text-white font-bold text-2xl pl-3">US $118.92</p>
//             <p className="text-red-700 text-base pl-3 pb-3 font-bold">-5.6%</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Marquee;

import React from "react";

const Marquee = ({ tickers = [] }) => {
  // Duplicate the tickers array to ensure continuous scrolling
  const displayTickers = [...tickers, ...tickers];

  return (
    <div className="flex">
      <div className="ticker-container flex animate-scroll flex-shrink-0">
        {displayTickers.length > 0 ? (
          displayTickers.map((ticker, index) => (
            <div key={index} className="ml-5 flex-col whitespace-nowrap">
              <h1 className="text-3xl font-bold text-white pt-3 pl-3">
                {ticker.name}
              </h1>
              <p className="text-white font-bold text-2xl pl-3">
                US ${ticker.close}
              </p>
              <p
                className={`text-base pl-3 pb-3 font-bold ${
                  ticker.change >= 0 ? "text-green-500" : "text-red-700"
                }`}
              >
                {ticker.change >= 0
                  ? `+${ticker.change}%`
                  : `${ticker.change}%`}
              </p>
            </div>
          ))
        ) : (
          <div className="ml-5 flex-col whitespace-nowrap">
            <p className="text-white font-bold text-xl pl-3">
              No data available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marquee;
