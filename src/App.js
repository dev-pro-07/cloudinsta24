// src/App.js

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pige from "./components/Pige";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Pige" element={<Pige />} />
      </Routes>
    </Router>
  );
};

export default App;
