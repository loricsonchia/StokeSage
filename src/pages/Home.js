import React from "react";
import News from "../components/News";
import image1 from "../news.png";
import image2 from "../login.jpg";
import image3 from "../chart.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import StockContainer from "../components/StockContainer";
import Login from "../pages/Login1";

const Home = () => {
  return (
    <section className="bg-background">
      <header className="flex justify-start rounded-none relative border-b-1 border-white-800">
        <div className="flex-col">
          <h1 className="text-stockSage text-9xl pl-10 pt-16 pr-64 flex-col">
            StockSage
          </h1>
          <Navbar />
        </div>

        <div className="max-h-fit auto-rows-fr gap-6 font-quicksand overflow-hidden">
          <div className="col-span-3 border-white border-b-1 border-l-1 rounded-none">
            <StockContainer />
          </div>
          <div className="col-span-3 border-white border-l-1 rounded-none">
            <News> News </News>
          </div>
        </div>
      </header>

      <div className="flex pt-10 px-10 space-x-10">
        {" "}
        {/* Added px-10 here */}
        <div className="flex flex-col space-y-10">
          <a
            href="https://finance.yahoo.com/topic/stock-market-news/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-1 border-white-800 relative flex-1"
          >
            <div
              className="absolute inset-0 rounded-xl opacity-50"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h2 className="text-white text-5xl pl-10 pt-10 pb-44 pr-80 relative">
              Market News
            </h2>
          </a>

          <Link
            to="/login"
            className="rounded-xl border-1 border-white-800 relative flex-1"
          >
            <div
              className="absolute inset-0 rounded-xl opacity-50"
              style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h3 className="text-white text-5xl pl-10 pt-10 pb-44 pr-80 relative">
              Login
            </h3>
          </Link>
        </div>
        <Link
          to="/manipulation"
          className="rounded-xl border-1 border-white-800 relative flex-1"
        >
          {" "}
          {/* Removed pr-10 here */}
          <div
            className="absolute inset-0 rounded-xl opacity-50"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h1 className="text-white text-8xl pl-10 pt-10 pb-44 pr-80 relative">
            AI Model
          </h1>
        </Link>
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
