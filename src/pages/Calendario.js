import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles.css";

export default function Calendario() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1>Calendario</h1>
    </div>
  );
}
