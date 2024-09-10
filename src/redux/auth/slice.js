import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.rejected, handleRejected)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(refreshUser.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state) => {
        return INITIAL_STATE;
      }),
});

const handlePending = (state) => {
  state.error = null;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
};
const handleFulfilled = (state, action) => {
  state.isLoggedIn = true;
  state.token = action.payload.token;
  state.user = action.payload.user;
};
export const authReducer = authSlice.reducer;
