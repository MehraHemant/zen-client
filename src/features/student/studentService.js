import axios from 'axios';
import { base_url, config } from '../utils';

const editProfile = async(userData)=>{
    const response = await axios.put(`${base_url}/updateSelf`, userData, config);
    return response.data;
  };

  const getProfile = async()=>{
    const response =await axios.get(`${base_url}/getSelf`, config);
    return response.data;
  }
  
  const forgotPassword = async(userData)=>{
    const response = await axios.post(`${base_url}/forgot-password`, userData);
    return response.data;
  }
  const studentService = {editProfile, getProfile, forgotPassword};
  export default studentService;