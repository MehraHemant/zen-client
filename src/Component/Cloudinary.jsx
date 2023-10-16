import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const Cloudinary = () => {
  const [image, setImage] = useState();

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lwxv5qlp");
    formData.append("cloud_name", "dcmmsxbjf");
    await axios
      .post("https://api.cloudinary.com/v1_1/dcmmsxbjf/image/upload", formData)
      .then((response) => {
        console.log(response.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = async (e) => {
    await uploadToCloudinary(image);
  };
  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload a file
        <VisuallyHiddenInput
          type="file"
          onClick={(e) =>setImage(e.target.files[0])}
        />
      </Button>
      <Button type="submit" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
};

export default Cloudinary;
