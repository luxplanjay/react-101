import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    text: "",
  },
  reducers: {
    changeTextFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeTextFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
