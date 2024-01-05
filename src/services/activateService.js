import axios from "axios";

import constants from "../utils/constants";

const activateAccount = async (token, otp) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

  try {
    const response = await axios.post(
      `${API}/auth/activate/${token}`,
      { otp },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default activateAccount;
