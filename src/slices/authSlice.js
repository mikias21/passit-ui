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

    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.value;
    },

    setUserPassData: (state, action) => {
      state.usePassData = action.payload.data;
    },

    updateUserPassData: (state, action) => {
      const entry = action.payload;
      state.usePassData = [...state.usePassData, entry];
    },
  },
});

export const {
  setToken,
  setIsAuthenticated,
  setUserPassData,
  updateUserPassData,
} = authSlice.actions;

export default authSlice.reducer;
