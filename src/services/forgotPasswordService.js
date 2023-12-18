import axios from "axios";

import constants from "../utils/constants";

const forgotPasswordService = async (email, ip_address, user_agent) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${constants.API}/auth/forgot/`,
      { email, ip_address, user_agent },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default forgotPasswordService;
