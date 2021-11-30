import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import singleProductsReducer from "./singleProducts";

const store = configureStore({
  reducer: {
    products: productsReducer,
    selectedProduct: singleProductsReducer,
  },
});

export default store;
