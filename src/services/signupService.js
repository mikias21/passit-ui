import axios from "axios";

import constants from "../utils/constants";

const signUp = async (email, password, ip_address, user_agent) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

  let is_email = false;
  let is_phone = false;

  if (email.length > 0) {
    is_email = true;
  }

  try {
    const response = await axios.post(
      `${API}/auth/signup`,
      { is_email, is_phone, email, password, ip_address, user_agent },
      customHeader
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default signUp;
