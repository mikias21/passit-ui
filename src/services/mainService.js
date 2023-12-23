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

export { getPasswords };
