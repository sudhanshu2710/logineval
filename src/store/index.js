import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import authReducer from "./auth";

const store = configureStore({
  reducer: { auth: authReducer },
});

export default store;
