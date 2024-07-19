import React, { useState, useContext } from "react";
import News from "./News";
import Marquee from "../components/Marquee";

const StockNews = () => {
  return (
    <section className="bg-background">
      <header className="flex justify-start rounded-none relative border-b-1 border-white-800">
        <div className="text-8xl flex-shrink-0 pl-10 pt-10 pr-96">
          <h1 className="text-stockSage">StockSage</h1>
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

export default StockNews;
