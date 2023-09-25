import axios from 'axios';
import { base_url, config } from '../utils';

const editProfile = async(userData)=>{
    const response = await axios.post(`${base_url}/${userData.id}`, userData.data, config);
    return response.data;
  };

  const getProfile = async(id)=>{
    const response =await axios.get(`${base_url}/${id}`, config);
    return response.data;
  }
  
  const studentService = {editProfile, getProfile};
  export default studentService;