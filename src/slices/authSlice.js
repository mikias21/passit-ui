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
    userPassDataStarred: [],
    userPassCategories: [],
    passDataCounter: 0,
    deletedPassDataCounter: 0,
    importantPassDataCounter: 0,
    showAddCategoriesModal: false,
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

    setStarredUserPassData: (state, action) => {
      state.userPassDataStarred = action.payload.data;
    },

    setDeleteduserData: (state, action) => {
      state.userPassDataDeleted = action.payload.data;
      state.deletedPassDataCounter = state.userPassDataDeleted?.length;
    },

    setAddCategoryModal: (state, action) => {
      state.showAddCategoriesModal = action.payload;
    },

    setUserPassCategories: (state, action) => {
      state.userPassCategories = action.payload.data;
    },

    updateUserPassData: (state, action) => {
      const entry = action.payload;
      state.usePassData = [...state.usePassData, entry];
    },

    updateUserPassImportantData: (state, action) => {
      const entry = action.payload;
      state.userPassDataImportant = [...state.userPassDataImportant, entry];
    },

    updateUserPassStarredData: (state, action) => {
      const entry = action.payload;
      state.userPassDataStarred = [...state.userPassDataStarred, entry];
    },

    updateUserPassCategoriesData: (state, action) => {
      const entry = action.payload;
      state.userPassCategories = [...state.userPassCategories, entry];
    },

    deleteSinglePassword: (state, action) => {
      const passwordToRemove = action.payload;

      state.userPassDataDeleted = state.usePassData.filter(
        (password) => password.password_id === passwordToRemove
      );

      state.usePassData = state.usePassData.filter(
        (password) => password.password_id !== passwordToRemove
      );

      state.deletedPassDataCounter = state.userPassDataDeleted.length;
    },

    restorePassword: (state, action) => {
      const passwordToRemove = action.payload;
      state.userPassDataDeleted = state.userPassDataDeleted.filter(
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

    removeDataFromStarred: (state, action) => {
      const passwordToRemove = action.payload;
      state.userPassDataStarred = [
        ...state.userPassDataStarred,
        state.userPassDataStarred.filter(
          (password) => password.password_id !== passwordToRemove
        ),
      ];
    },
  },
});

export const {
  setToken,
  setIsAuthenticated,
  setUserPassData,
  setDeleteduserData,
  updateUserPassData,
  deleteSinglePassword,
  updateSpecificPassword,
  setImportUserPassData,
  removeDataFromImportant,
  updateUserPassImportantData,
  restorePassword,
  removeDataFromStarred,
  updateUserPassStarredData,
  setStarredUserPassData,
  setAddCategoryModal,
  setUserPassCategories,
  updateUserPassCategoriesData,
} = authSlice.actions;

export default authSlice.reducer;
