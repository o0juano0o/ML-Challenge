import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

export const cleanSingleProductsRequest = createAction(
  "CLEARSINGLEPRODUCT",
  () => {
    return {};
  }
);
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
    [cleanSingleProductsRequest]: (state, action) => {
      let clear = state;
      clear = {};
      return clear;
    },
  }
);

export default singleProductsReducer;
