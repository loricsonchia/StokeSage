import React, { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "./Marquee"; // Adjust the import path as needed

const StockContainer = () => {
  const defaultTickers = [
    { name: "GME", close: "24.01", change: 1.5 },
    { name: "AAPL", close: "224.07", change: 3.5 },
    { name: "TSLA", close: "238.70", change: 12.5 },
    { name: "TSM", close: "167.01", change: 2.3 },
    { name: "JPM", close: "211.04", change: 1.7 },
    { name: "NVDA", close: "118.92", change: 5.6 },
  ];

  const [tickers, setTickers] = useState(defaultTickers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tickersList = ["GME", "AAPL", "TSLA", "TSM", "JPM", "NVDA"]; // List of tickers to fetch
  const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY; // Load API key from .env

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const tickersData = await Promise.all(
          tickersList.map(async (symbol) => {
            try {
              const response = await axios.get(
                "https://www.alphavantage.co/query",
                {
                  params: {
                    function: "TIME_SERIES_WEEKLY",
                    symbol: symbol,
                    apikey: apiKey,
                  },
                }
              );

              const weeklyData = response.data["Weekly Time Series"];
              if (!weeklyData) throw new Error("No weekly data found");

              const dates = Object.keys(weeklyData);
              dates.sort((a, b) => new Date(b) - new Date(a));

              const latestWeek = dates[0];
              const closePrice = parseFloat(weeklyData[latestWeek]["4. close"]);
              const prevClosePrice = dates[1]
                ? parseFloat(weeklyData[dates[1]]["4. close"])
                : closePrice;

              const percentageChange =
                ((closePrice - prevClosePrice) / prevClosePrice) * 100;

              return {
                name: symbol,
                close: closePrice.toFixed(2),
                change: percentageChange.toFixed(2),
              };
            } catch (error) {
              console.error(`Failed to fetch data for ${symbol}:`, error);
              return null; // Return null in case of an error
            }
          })
        );

        // Filter out any null values (failed fetches)
        const validTickersData = tickersData.filter(
          (ticker) => ticker !== null
        );

        // Only update the state if we have valid data
        if (validTickersData.length > 0) {
          setTickers(validTickersData);
        }

        setError(null); // Reset error state if data is fetched successfully
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [apiKey]);

  // Display loading indicator or default data until API call completes
  return <Marquee tickers={tickers} />;
};

export default StockContainer;
