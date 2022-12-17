import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import base from './api/airtable';

function App() {
  const [allRecords, setRecords] = useState(null)
  useEffect(()=>{
    base('company').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Company Name'));
        });

        setRecords(prevState=>records[0]["fields"])
    });
  })
  return (
    <>
    {allRecords===null && <div class="lds-ripple"><div></div><div></div></div>}
      <TopBar details ={{...allRecords}} className="header" id="myHeader"/>
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
