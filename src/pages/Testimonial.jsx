import React, { useState } from "react";
import Header from "../Component/Header";
import TestimonialDialog from "../Component/TestimonialDialog";
import { Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const Testimonial = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Header title={"Testimonial"} />
      <Box
        height={80}
        width={"100%"}
        sx={{ backgroundColor: "#f0efff" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
        pr={8}
      >
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Add />}
          onClick={handleOpen}
        >
          Add Testimonial
        </Button>
      </Box>
      <TestimonialDialog open={open} onClose={handleClose} />
    </>
  );
};

export default Testimonial;
