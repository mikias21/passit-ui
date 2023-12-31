import axios from "axios";

const getPasswords = async (token) => {
  try {
    const response = await axios.get("http://localhost:5000/passwords/", {
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
      "http://localhost:5000/passwords/",
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
      `http://localhost:5000/passwords/${password_id}`,
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
    const response = await axios.delete(
      `http://localhost:5000/passwords/${password_id}`,
      {
        data: { label },
        headers: {
          Authorization: `Bearer ${token}`,
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

const viewPassword = async (token, password_id) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/passwords/view/${password_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
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

export {
  getPasswords,
  addPassword,
  updatePassword,
  deletePassword,
  viewPassword,
};
