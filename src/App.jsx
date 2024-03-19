import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ItemDetails from "./components/ItemDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <Link to="/" id="home">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/contactUs">CONTACT US</Link>
          </li>
          <li>
            <Link to="/places">PLACES</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/places/*"  element={<ItemDetails />}/>
      </Routes>
    </Router>
  );
};

export default App;
