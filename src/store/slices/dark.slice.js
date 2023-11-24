import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "darkSlice",
  initialState: false,
  reducers: {
    setDarkG: (state, action) => action.payload,
  },
});

export const { setDarkG } = darkSlice.actions;

export default darkSlice.reducer;
