import React, { useState } from "react";
import Header from "../Component/Header";
import { Box, Button, Container } from "@mui/material";
import { Add } from "@mui/icons-material";
import LeaveDialog from "../Component/LeaveDialog";

const Leave = () => {
  const leave = 0;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Header title={"Leave Application"} />
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
          Add
        </Button>
        <LeaveDialog open={open} onClose={handleClose} />
      </Box>
      <Box m={5}>
        <Box>{leave}</Box>
      </Box>
    </>
  );
};

export default Leave;
