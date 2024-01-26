import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    token_type: "bearer",
    isAuthenticated: false,
    usePassData: [],
    userPassDataDeleted: [],
    userPassDataImportant: [],
    passDataCounter: 0,
    deletedPassDataCounter: 0,
    importantPassDataCounter: 0,
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
      state.passDataCounter = state.usePassData.length;
    },

    setImportUserPassData: (state, action) => {
      state.userPassDataImportant = action.payload.data;
      state.importantPassDataCounter = state.userPassDataImportant?.length;
    },

    updateUserPassData: (state, action) => {
      const entry = action.payload;
      state.usePassData = [...state.usePassData, entry];
    },

    deleteSinglePassword: (state, action) => {
      const passwordToRemove = action.payload;

      state.userPassDataDeleted = [
        ...state.userPassDataDeleted,
        state.usePassData.filter(
          (password) => password.password_id === passwordToRemove
        ),
      ];

      state.usePassData = state.usePassData.filter(
        (password) => password.password_id !== passwordToRemove
      );

      state.deletedPassDataCounter = state.userPassDataDeleted.length;
    },

    updateSpecificPassword: (state, action) => {
      const updatedPassword = action.payload;

      state.usePassData = state.usePassData.map((password) =>
        password.password_id === updatedPassword.password_id
          ? updatedPassword
          : password
      );
    },

    removeDataFromImportant: (state, action) => {
      const passwordToRemove = action.payload;
      state.userPassDataImportant = [
        ...state.userPassDataImportant,
        state.userPassDataImportant.filter(
          (password) => password.password_id !== passwordToRemove
        ),
      ];
      state.importantPassDataCounter = state.userPassDataImportant.length;
    },
  },
});

export const {
  setToken,
  setIsAuthenticated,
  setUserPassData,
  updateUserPassData,
  deleteSinglePassword,
  updateSpecificPassword,
  setImportUserPassData,
  removeDataFromImportant,
} = authSlice.actions;

export default authSlice.reducer;
