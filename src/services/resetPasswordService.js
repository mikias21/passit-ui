import axios from "axios";

import constants from "../utils/constants";

const resetPasswordService = async (
  token,
  password,
  confirm_password,
  ip_address,
  user_agent
) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

  try {
    const response = await axios.post(
      `${API}/auth/reset_password/${token}`,
      { password, confirm_password, ip_address, user_agent },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default resetPasswordService;
