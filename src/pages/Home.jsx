import React from "react";
import imageHome from "../images/hero-5bff5694.png";

const Home = () => {
  return (
    <div className="container" style={{ position: "relative" }}>
      <img
        src={imageHome}
        alt="home"
        style={{ width: "100%", height: "aut0" }}
      />
      <div
        className="text-overlay"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Travel & Explore With{" "}
          <span style={{ color: "#ff9800" }}>Unity Travels</span>
        </h1>
        <div className="bookBox">
          <div className="placeName">
            <span>Where you want to go</span>
            <input type="text" placeholder="search your location"  id="input"/>
          </div>
          <button id="bookNow">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
