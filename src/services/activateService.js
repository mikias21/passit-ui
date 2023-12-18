import axios from "axios";

import constants from "../utils/constants";

const activateAccount = async (token, otp) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      `${constants.API}/auth/activate/${token}`,
      { otp },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default activateAccount;
