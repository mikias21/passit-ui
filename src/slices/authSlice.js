import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    token_type: "bearer",
    isAuthenticated: false,
    usePassData: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
    },

    setUserPassData: (state, action) => {
      state.usePassData = action.payload.data;
    },

    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.value;
    },
  },
});

export const { setToken, setIsAuthenticated, setUserPassData } =
  authSlice.actions;

export default authSlice.reducer;
