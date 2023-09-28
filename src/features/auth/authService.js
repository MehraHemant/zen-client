import axios from "axios";
import { base_url } from "../utils";

const login = async (userData) => {
  const response = await axios.post(`${base_url}/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = { login };
export default authService;
