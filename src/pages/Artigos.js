import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import ListaArtigos from "../components/Artigos/ListaArtigos";
import { ArtigosData } from "../components/Artigos/ArtigosData";
import "./pages.css";

export default function Cursos() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="artigo-container">
        {ArtigosData.map((item, index) => {
          return (
            <ListaArtigos
              title={item.title}
              author={item.author}
              link={item.link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
