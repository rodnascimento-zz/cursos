import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "../styles.css";

export default function Artigos() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1>Artigos</h1>
    </div>
  );
}
