import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
import NotFound from "../components/NotFound";
import "../scss/Main.scss";

export default function Main() {
  return (
    <main>
      <div className="main-core">
        <Routes>
          <Route path="/items" element={<Products />} />
          <Route exact path="/items/:id" element={<SingleProduct />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}
