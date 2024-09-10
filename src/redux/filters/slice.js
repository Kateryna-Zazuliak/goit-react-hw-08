import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  query: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
