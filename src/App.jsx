import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<OurWork />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
