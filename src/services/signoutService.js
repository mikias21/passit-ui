import axios from "axios";
import constants from "../utils/constants";

const signOutService = async (token) => {
  const API = constants.API
    ? constants.RELEASE === false
    : constants.RELEASE_API;

  const response = await axios.get(`${API}/auth/signout/${token}`);
  return response;
};

export default signOutService;
