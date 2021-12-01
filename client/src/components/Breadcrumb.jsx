import React from "react";
import { useSelector } from "react-redux";
import "../scss/components/Breadcrumb.scss";

export default function Breadcrumb() {
  const categories = useSelector((state) => state.products.categories);
  return (
    <div>
      <section className="breadcrum-container">
        <ul className="breadcrumb">
          {categories?.map((category, index) => {
            return categories.length - 1 === index ? (
              <li key={category} className="bold">
                {category}{" "}
              </li>
            ) : (
              <>
                <li>{category}</li>
                <li>{">"}</li>
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
