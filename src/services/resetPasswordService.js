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

  try {
    const response = await axios.post(
      `${constants.API}/auth/reset_password/${token}`,
      { password, confirm_password, ip_address, user_agent },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default resetPasswordService;
