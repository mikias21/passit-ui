import axios from "axios";
import constants from "../utils/constants";

const signOutService = async (token) => {
  const response = await axios.get(`${constants.API}/auth/signout/${token}`);
  return response;
};

export default signOutService;
