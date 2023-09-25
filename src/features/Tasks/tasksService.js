import axios from "axios";
import {config, base_url} from "../utils.js";

const getTask = async()=>{
    const response = await axios.get(`${base_url}/answers/get`, config);
    return response.data;
}

const taskService = {getTask}
export default taskService;