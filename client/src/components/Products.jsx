import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getProductsRequest } from "../store/products";
import { getDecimals, numberWithDot } from "../hooks/priceFormat";
import NotFound from "../components/NotFound";
import Breadcrumb from "../components/Breadcrumb";
import "../scss/components/Products.scss";

export default function Products() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    dispatch(getProductsRequest(searchValue));
  }, [searchValue]);

  return (
    <>
      <Breadcrumb />
      <div className="card-container">
        <ul className="card-list">
          {products?.map((product) => {
            return (
              <li>
                <div className="card">
                  <Link to={`/items/${product.id}`}>
                    <div className="card-img-container">
                      <img
                        className="card-img"
                        src={product.picture}
                        alt={product.title}
                      />
                    </div>
                  </Link>
                  <div className="card-description">
                    <div className="card-price-container">
                      <Link
                        style={{
                          color: "initial",
                          textDecoration: "initial",
                        }}
                        to={`/items/${product.id}`}
                      >
                        <div>
                          <span className="card-price-sign">$</span>
                          <span className="card-price">
                            {numberWithDot(product.price.amount)}
                          </span>
                          <span className="card-price-decimals">
                            {getDecimals(product.price.decimals)}
                          </span>
                          {product.free_shipping ? (
                            <img
                              className="card-shipping"
                              src="/assets/ic_shipping@2x.png"
                              alt=""
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </Link>
                      <div className="card-address-container">
                        <span className="card-address">
                          {product.address.state}
                        </span>
                      </div>
                    </div>
                    <div className="card-title-container">
                      <Link
                        style={{
                          color: "initial",
                          textDecoration: "initial",
                        }}
                        to={`/items/${product.id}`}
                      >
                        <span className="card-title">{product.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-border-bottom"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
