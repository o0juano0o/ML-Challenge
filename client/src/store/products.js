import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

export const cleanProductsRequest = createAction("CLEARPRODUCTS", () => {
  return { payload: [] };
});
export const getProductsRequest = createAsyncThunk("PRODUCTS", (product) => {
  return axios.get(`http://localhost:3001/api/items?q=${product}`).then((r) => {
    return r.data;
  });
});

const productsReducer = createReducer(
  {},
  {
    [getProductsRequest.fulfilled]: (state, action) => action.payload,
    [cleanProductsRequest]: (state, action) => action.payload,
  }
);

export default productsReducer;
