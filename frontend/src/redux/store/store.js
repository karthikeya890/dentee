import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../slices/employees-slice";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
