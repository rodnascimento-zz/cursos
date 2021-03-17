import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card-Cursos/Card";
import { CardData } from "../components/Card-Cursos/CardData";
import "./pages.css";

export default function Cursos() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {CardData.map((item, index) => {
        return (
          <Card
            title={item.title}
            imageUrl={item.image}
            body={item.body}
            key={index}
          />
        );
      })}
    </div>
  );
}
