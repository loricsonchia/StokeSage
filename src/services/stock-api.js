import React, { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "./components/Marquee";

const StockContainer = () => {
  const [tickers, setTickers] = useState([]);
  const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key
  const symbol = "AAPL";

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "TIME_SERIES_WEEKLY",
            symbol: symbol,
            apikey: apiKey,
          },
        });

        const weeklyData = response.data["Weekly Time Series"];
        const dates = Object.keys(weeklyData);

        // Sort dates in descending order
        dates.sort((a, b) => new Date(b) - new Date(a));

        const tickersData = [];
        for (let i = 0; i < dates.length; i++) {
          const date = dates[i];
          const weekData = weeklyData[date];
          const closePrice = parseFloat(weekData["4. close"]);
          const prevClosePrice =
            i > 0
              ? parseFloat(weeklyData[dates[i - 1]]["4. close"])
              : closePrice;

          const percentageChange =
            ((closePrice - prevClosePrice) / prevClosePrice) * 100;

          tickersData.push({
            name: symbol,
            close: closePrice.toFixed(2),
            change: percentageChange,
          });
        }

        setTickers(tickersData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, [symbol]);

  return <Marquee tickers={tickers} />;
};

export default StockContainer;
