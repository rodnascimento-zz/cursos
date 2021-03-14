import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/Navbar";
import "./pages.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container">
        <div className="white-box">
          <Slider />
        </div>
      </div>
    </div>
  );
}
