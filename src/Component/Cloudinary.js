import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import axios from 'axios';
import { Button } from '@mui/material';

const Cloudinary = () => {
    const [image, setImage] = useState();
    let [imageUpload, setImageUpload] = useState([]);

    const handleImage = (e) =>{
        if(e.target.files[0]){
            setImage({
                src : URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            })
        }
    }
    const uploadToCloudinary = async (file) =>{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dcmmsxbjf")
        let data = "";
        await axios.post("https://api.cloudinary.com/v1_1/dcmmsxbjf", formData).then((response)=>{
            data = response.data["secure_url"]
        });
        return data;
    }
    const handleSubmit = async(e)=>{
        imageUpload = image;
        await uploadToCloudinary(image);
    }
  return (
    <div>
    <ImageUpload imageUpload={handleImage} image={imageUpload}/>
    <Button type='submit' onClick={(e) => handleSubmit(e)}>Save</Button>
    </div>
  )
}

export default Cloudinary