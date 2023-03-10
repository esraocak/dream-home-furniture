import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import filterReducer from "../features/filterSlice";
import favoriteReducer from "../features/favoriteSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    favorite: favoriteReducer,
  },
});

export default store;
