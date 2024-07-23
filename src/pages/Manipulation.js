import React, { useState } from "react";
import News from "../components/News";
import Marquee from "../components/Marquee";
import Chart from "../components/Chart";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../services/stock-api";
import Navbar from "../components/Navbar";

const Manipulation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="bg-background">
      <header className="flex justify-start rounded-none relative border-b-1 border-white-800">
        <div className="flex-col">
          <h1 className="text-stockSage text-8xl pl-10 pt-16 pr-96 flex-col">
            StockSage
          </h1>
          <Navbar />
        </div>

        <div className="max-h-fit auto-rows-fr gap-6 font-quicksand overflow-hidden">
          <div className="col-span-3 border-white border-b-1 border-l-1 rounded-none">
            <Marquee />
          </div>
          <div className="col-span-3 border-white border-l-1 rounded-none">
            <News> News </News>
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="flex-col rounded-md border-1 border-white-800 ml-10 mt-10">
          <h1 className="text-white text-5xl mr-240">Chart</h1>
        </div>

        <div className="flex-col">
          <div className="rounded-md border-1 border-white-800 mt-10 mb-5 ml-5 pb-40">
            <h1 className="text-white text-2xl mx-28 mt-3">Parameters</h1>

            <div className="ml-14 mt-10">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white font-medium rounded-lg text-lg px-20 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={toggleDropdown}
              >
                Ticker
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2 left-1/2 transform -translate-x-1/2"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        AAPL
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        GME
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        NVDA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        TSLA
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-md border-1 border-white-800 ml-5">
            <h1 className="text-white text-2xl ml-20 mt-3 mb-80">
              Manipulation Rate
            </h1>
          </div>
        </div>
      </div>

      <footer className="flex justify-between items-center ">
        <div className="pt-10 mb-8 pl-10">
          <h3 className="text-white">where finance meets AI</h3>
        </div>
        <div className="pt-10 mb-8 pr-10">
          <h3 className=" text-white">2024</h3>
        </div>
      </footer>
    </section>
  );
};

export default Manipulation;
