import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProductRequest } from "../store/singleProducts";
import { getDecimals, numberWithDot } from "../hooks/priceFormat";
import NotFound from "../components/NotFound";
import Breadcrumb from "../components/Breadcrumb";
import "../scss/components/SingleProduct.scss";

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.selectedProduct);
  if (product.picture) console.log(product);
  useEffect(() => {
    dispatch(getSingleProductRequest(id));
  }, [id]);
  if (!product.item) {
    return <NotFound />;
  } else {
    return (
      <>
        <Breadcrumb />
        <div className="result-container">
          <div className="item-container">
            <div className="item-container-top">
              <div className="item-img-container">
                <img src={product.picture} alt={product.title} />
              </div>
              <div className="item-buy-box">
                <span className="item-condition-sold">
                  {product.condition} - {product.sold_quantity} vendidos
                </span>
                <h1 className="product-title">{product.title}</h1>
                <div className="product-price-container">
                  <span className="product-price-sign">$</span>
                  <span className="product-price-amount">
                    {product.price && product.price.amount ? (
                      numberWithDot(product.price.amount)
                    ) : (
                      <></>
                    )}
                  </span>
                  <span className="product-price-decimals">
                    {product.price && product.price.decimals
                      ? getDecimals(product.price.decimals)
                      : "00"}
                  </span>
                  {product.free_shipping ? (
                    <img
                      className="product-icon-shipping"
                      src="/assets/ic_shipping@2x.png"
                      alt=""
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <button className="btn-secondary">Comprar</button>
              </div>
            </div>
            <div className="item-container-bottom">
              <h2>Descripción del producto</h2>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
