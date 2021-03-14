import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "./pages.css";

export default function Cursos() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1>Cursos</h1>
      <div className="container">
        <div className="white-box-small"></div>
      </div>
    </div>
  );
}
