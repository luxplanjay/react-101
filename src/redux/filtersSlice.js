import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    text: "",
  },
  reducers: {
    changeTextFilter: {
      reducer(state, action) {
        state.text = action.payload;
      },
      prepare(value) {
        return {
          payload: value,
          meta: {
            ga: true,
          },
        };
      },
    },
  },
});

export const selectTextFilter = state => state.filters.text;

export const { changeTextFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
