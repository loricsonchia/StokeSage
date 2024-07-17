import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className="w-full rounded-md relative border-2 bg-gray-900 border-white-800">
      {children}
    </div>
  );
};

export default Card;
