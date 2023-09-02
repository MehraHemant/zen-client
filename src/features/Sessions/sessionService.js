import axios from "axios";

const base_url = "http://localhost:8080/api";
const getSessions = async () => {
  const response = await axios.get(`${base_url}/session/get-all-sessions`);
  return response.data;
};

const sessionService = { getSessions, };
export default sessionService;
