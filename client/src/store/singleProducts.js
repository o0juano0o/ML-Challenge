import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleProductRequest = createAsyncThunk(
  "SINGLEPRODUCT",
  (id) => {
    return axios.get(`http://localhost:3001/api/items/${id}`).then((r) => {
      return r.data;
    });
  }
);

const singleProductsReducer = createReducer(
  {},
  {
    [getSingleProductRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default singleProductsReducer;
