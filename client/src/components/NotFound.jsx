import React from "react";
import { Link } from "react-router-dom";
import "../scss/components/NotFound.scss";

export default function NotFound() {
  return (
    <div className="notFound-main-cointainer">
      <div className="notFound-cointainer">
        <div className="notFound-img">
          <img src="assets/ic_Search.png" alt="Icon Search" />
        </div>
        <div className="notFound-text">
          <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
          <ul>
            <li>
              <span>Revisá la ortografía</span> de la palabra.
            </li>
            <li>
              Utilizá <span>palabras más genéricas</span> o menos palabras.
            </li>
            <li>
              <Link to="/">Navegá por las categorías</Link> para encontrar un
              producto similar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
