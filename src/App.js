import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login1.js";
import Manipulation from "./pages/Manipulation.js";
import Signup from "./pages/Signup.js";
import Home from "./pages/Home.js";
import StockNews from "./pages/StockNews.js";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      {/* <Dashboard /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Home /> */}
      <Manipulation />
      {/* <StockNews /> */}
    </StockContext.Provider>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/manipulation" element={<Manipulation />} />
    //     </Routes>
    // </Router>
  );
}

export default App;
