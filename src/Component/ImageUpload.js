import { DeleteOutline, UploadOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { createRef, useState } from "react";

const ImageUpload = (props) => {
  const [image, setImage] = useState();
  const inputFileRef = createRef();
  const cleanup = () => {
    URL.revokeObjectURL(image && props.image);
    inputFileRef.current.value = null;
  };

  const setNewImage = (newImage) => {
    if (image) {
      cleanup();
    }
    setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
    props.imageUpload(event);
  };

  return(
    <>
    <Box ref={inputFileRef} component={'input'} src={image} accept="image/" type="file" onChange={handleOnChange}/>
    <Button variant="contained" color="primary">
        {image?<DeleteOutline/>:<UploadOutlined/>}
        {image?"Uploaded":"Upload"}
    </Button>
    </>
  )
};

export default ImageUpload;
