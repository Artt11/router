import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Place } from "./Place";

const ItemDetails = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/places/1">PLACES1</Link>
          </li>
          <li>
            <Link to="/places/2">PLACES2</Link>
          </li>
          <li>
            <Link to="/places/3">PLACES3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/places/:placesId" element={<Place />} />
      </Routes>
    </div>
  );
};

export default ItemDetails;
