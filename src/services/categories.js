import axios from "axios";

import constants from "../utils/constants";

const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

const getCategories = async (token) => {
  try {
    const response = await axios.get(`${API}/categories/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const addCategory = async (token, category_name) => {
  const customHeader = {
    // Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(
      `${API}/categories/${token}`,
      { category_name },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export { getCategories, addCategory };
