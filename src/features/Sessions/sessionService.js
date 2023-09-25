import axios from "axios";
import { base_url } from "../utils";

const getSessions = async () => {
  const response = await axios.get(`${base_url}/session/get-all-sessions`);
  return response.data;
};

const getSingleSession = async (id) =>{
  const response = await axios.get(`${base_url}/session/get-session/${id}`);
  return response.data;
}


const sessionService = { getSessions, getSingleSession};
export default sessionService;
