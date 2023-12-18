import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    token_type: "bearer",
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      console.log(action.payload);
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
