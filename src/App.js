import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manipulation from "./pages/Manipulation";
import Home from "./pages/Home";
import Login from "./pages/Login1";
import Signup from "./pages/Signup.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manipulation" element={<Manipulation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
