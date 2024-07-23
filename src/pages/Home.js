import React, { useContext, useState } from "react";
import News from "../components/News";
import Marquee from "../components/Marquee";
import Card from "../components/Card";
import image1 from "../news.png";
import image2 from "../prices.webp";
import image3 from "../chart.jpg";
import Navbar from "../components/Navbar";

const Home = () => {
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

      <div className="flex pt-10">
        <div className="-mr-10">
          <div
            className="rounded-xl border-1 border-white-800 ml-10 mr-20 mb-10 opacity-50"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <h2 className="text-white text-5xl justify-center place-content-center pl-10 pt-10 pb-44 pr-80">
              Market News
            </h2>
          </div>

          <div
            className="rounded-xl border-1 border-white-800 ml-10 mr-20 opacity-50"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <h3 className="text-white text-5xl place-content-center pl-10 pt-10 pb-44 pr-80">
              Stock Prices
            </h3>
          </div>
        </div>

        <div
          className="rounded-xl border-1 border-white-800 pb-72 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <h1 className="text-white text-8xl place-content-center p-10 mr-80">
            AI Model
          </h1>
        </div>
      </div>

      <footer className="flex justify-between items-center">
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

export default Home;
