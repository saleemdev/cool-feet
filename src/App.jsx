import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import OurWork from "./components/OurWork";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Index page={<Home/>} />} />
        <Route path="/about" exact element={<Index page={<About/>} />} />
        <Route path="/services" exact element={<Index page={<OurWork/>} />} />
        <Route path="/contact" exact element={<Index page={<Contact/>} />} />
      </Routes>
    </Router>
  );
}

export default App;
