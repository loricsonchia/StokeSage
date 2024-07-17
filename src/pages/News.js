import React, { useContext } from "react";
import Card from "../components/Card";

const News = () => {
  return (
    <div>
      <p className="bold text-3xl text-white pt-3 pl-3 break-words">GDP grows at sharply slower pace to 
      start 2024</p>
      <div className="flex pt-1 pl-3">
        <p className="text-gray-500 text-base flex-col ">Alex Jones</p>
        <p className="text-gray-500 text-base flex-col ml-10">2 minutes ago</p>
      </div>
      <p className="text-gray-400 text-lg break-words pt-3 pl-3 pb-3">The Bureau of Economic Analysis's advance estimate of first quarter US gross domestic product (GDP) showed the economy grew at an annualized pace of 1.6% during the period. </p>
    </div>
  );
};

export default News;
