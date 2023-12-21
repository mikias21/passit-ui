import axios from "axios";

const getIpAddress = async () => {
  try {
    const response = await axios.get("https://api.ipify.org/?format=json");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getIpAddress;
