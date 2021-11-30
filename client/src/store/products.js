import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsRequest = createAsyncThunk("PRODUCTS", (product) => {
  return axios.get(`http://localhost:3001/api/items?q=${product}`).then((r) => {
    return r.data;
  });
});

const productsReducer = createReducer(
  {},
  {
    [getProductsRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default productsReducer;
