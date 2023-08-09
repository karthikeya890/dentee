import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
// api Url

const apiurl = "http://localhost:3006/users";

// async thunk for fecthing basic user details

export const getBasicUserDetails = createAsyncThunk(
  "users/fetchUserBasicDetails",
  async () => {
    try {
      const response = await fetch(`${apiurl}/basicDetails`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("jwtToken")}`,
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// async thunk for updating User Details

export const updateUserDetails = createAsyncThunk(
  "users/updateUserDetails",
  async (details) => {
    try {
      const response = await fetch(`${apiurl}/updateDetails`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("jwtToken")}`,
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// initial Store

const initialState = {
  items: [],
  status: "idle",
  checkInOutStatus: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasicUserDetails.pending, (store, action) => {
        store.status = "pending";
      })
      .addCase(getBasicUserDetails.fulfilled, (store, action) => {
        store.status = "fulfilled";
        store.items.push(action.payload);
      })
      .addCase(getBasicUserDetails.rejected, (store, action) => {
        store.status = "rejected";
        store.error = "An Error occured";
      })
      .addCase(updateUserDetails.pending, (store, action) => {
        store.checkInOutStatus = "pending";
      })
      .addCase(updateUserDetails.fulfilled, (store, action) => {
        store.items = [action.payload];
        store.checkInOutStatus = "fulfilled";
      });
  },
});

export default usersSlice.reducer;
