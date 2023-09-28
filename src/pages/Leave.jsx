import React, { useState } from "react";
import Header from "../Component/Header";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import { Add } from "@mui/icons-material";
import LeaveDialog from "../Component/LeaveDialog";
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux";

const Leave = () => {
  const state = useSelector((state) => state.auth.user);
  const leave = 0;
  const [open, setOpen] = useState(false);
  const[send, setSend] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleSubmit = async (values) => {
    const templateParams = {
      to_name: "mentor@gmail.com",
      message: values,
      from_name: state.name,
    };
    await emailjs.send("service_ztobtmt", "template_ev9l1p1", templateParams);
    setSend(true);
    setTimeout(() => setSend(false), 5000);
  };
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
        <LeaveDialog
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      </Box>
      <Box m={5}>
        <Box>{leave}</Box>
      </Box>
      <Snackbar
        open={send}
        autoHideDuration={5000}
        onClose={() => setSend(false)}
      >
        <Alert onClose={() => setSend(false)} severity="success">
          Request Created
        </Alert>
      </Snackbar>
    </>
  );
};

export default Leave;
