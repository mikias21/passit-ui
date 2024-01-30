import axios from "axios";

import constants from "../utils/constants";

const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

const getPasswords = async (token) => {
  try {
    const response = await axios.get(`${API}/passwords/`, {
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

const addPassword = async (
  token,
  label,
  password,
  category,
  url,
  description
) => {
  const customHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${API}/passwords/`,
      { label, password, category, url, description },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const updatePassword = async (
  token,
  password_id,
  label,
  password,
  url,
  description
) => {
  const customHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.put(
      `${API}/passwords/${password_id}`,
      { label, password, url, description },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deletePassword = async (token, password_id, label) => {
  try {
    const response = await axios.delete(`${API}/passwords/${password_id}`, {
      data: { label },
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

const viewPassword = async (token, password_id) => {
  try {
    const response = await axios.get(`${API}/passwords/view/${password_id}`, {
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

const updatePasswordImportant = async (token, password_id) => {
  const customHeader = {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(
      `${API}/passwords/important/${password_id}/${token}`,
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const getDeletedPasswords = async (token) => {
  const customHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(`${API}/passwords/deleted/`, customHeader);
    return response;
  } catch (error) {
    throw error;
  }
};

const restoreDeletedPassword = async (password_id, token) => {
  const customHeader = {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.put(
      `${API}/passwords/deleted/restore/${password_id}/${token}`,
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deletePasswordForever = async (password_id, label, token) => {
  try {
    const response = await axios.delete(
      `${API}/passwords/deleted/delete/${password_id}/${token}`,
      {
        data: { label },
        headers: {
          // Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const updatePasswordStarred = async (token, password_id) => {
  const customHeader = {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.put(
      `${API}/passwords/starred/${password_id}/${token}`,
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  getPasswords,
  addPassword,
  updatePassword,
  deletePassword,
  viewPassword,
  updatePasswordImportant,
  getDeletedPasswords,
  restoreDeletedPassword,
  deletePasswordForever,
  updatePasswordStarred,
};
