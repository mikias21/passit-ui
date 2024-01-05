import axios from "axios";

import constants from "../utils/constants";

const verifyAccountService = async (token, otp, ip_address, user_agent) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const API = constants.API
    ? constants.RELEASE === false
    : constants.RELEASE_API;

  try {
    const response = await axios.post(
      `${API}/auth/verify/${token}`,
      { otp, ip_address, user_agent },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default verifyAccountService;
