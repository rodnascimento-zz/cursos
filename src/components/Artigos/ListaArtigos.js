import React from "react";
import { ArtigosData } from "./ArtigosData";
import "./artigo.css";

export default function ListaArtigos({ title, author, link }) {
  return (
    <div className="artigo-content">
      <div className="artigo-title">
        <h3>Titulo: {title}</h3>
      </div>
      <div className="artigo-title">
        <h3>Autor: {author}</h3>
      </div>

      <div className="artigo-btn">
        <button>
          <a>Download</a>
        </button>
      </div>
    </div>
  );
}
