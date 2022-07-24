import React from "react";
import "../src/index.css";
import People from "./containers/People";
import Home from "./containers/Home";
import Planets from "./containers/Planets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/People" element={<People />} />
          <Route path="/Planets" element={<Planets />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
