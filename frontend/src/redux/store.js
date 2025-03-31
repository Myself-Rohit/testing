import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user.js";
const appStore = configureStore({
  user: userReducer,
});
export default appStore;
