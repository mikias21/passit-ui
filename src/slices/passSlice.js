import { createSlice } from "@reduxjs/toolkit";

const passSlice = createSlice({
  name: "pass",
  initialState: {
    userPassData: [],
  },
  reducers: {
    setPassData: (state, action) => {
      state.userPassData = action.payload;
    },
  },
});

export const { setPassData } = passSlice.actions;

export default passSlice.reducer;
