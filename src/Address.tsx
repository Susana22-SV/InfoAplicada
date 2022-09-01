import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";


export function Address() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </Router>
  );
}
