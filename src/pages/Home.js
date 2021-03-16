import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Slider from "../components/Slider/Slider";
import Slider2 from "../components/Slider/Slider2";
import { SliderData } from "../components/Slider/SliderData";
import Navbar from "../components/Navbar/Navbar";
import "./pages.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Slider slides={SliderData} />
      <Slider2 />
    </div>
  );
}
