import axios from "axios";

import constants from "../utils/constants";

const signIn = async (email, password, ip_address, user_agent) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

  try {
    const response = await axios.post(
      `${API}/auth/signin`,
      { email, password, ip_address, user_agent },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default signIn;
