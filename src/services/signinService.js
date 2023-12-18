import axios from "axios";
const signIn = async (email, password, ip_address, user_agent) => {
  const customHeader = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/auth/signin",
      { email, password, ip_address, user_agent },
      customHeader
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default signIn;
