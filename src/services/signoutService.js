import axios from "axios";
import constants from "../utils/constants";

const signOutService = async (token) => {
  const API = !constants.RELEASE ? constants.API : constants.RELEASE_API;

  console.log(API);
  const response = await axios.get(`${API}/auth/signout/${token}`);
  return response;
};

export default signOutService;
