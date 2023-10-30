import React, { useState } from "react";
import Header from "../Component/Header";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import { Add } from "@mui/icons-material";
import LeaveDialog from "../Component/LeaveDialog";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import moment from "moment";

const Leave = () => {
  const state = useSelector((state) => state.myReducer.user);
  const [open, setOpen] = useState(false);
  const [send, setSend] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleSubmit = async (values) => {
    setSend(true);
    const templateParams = {
      to_name: "mehrahemu7@gmail.com",
      message: `application for ${values.days} days leave, from ${
        moment(values?.fromDate) ? moment(values?.fromDate) : moment(values?.onDate)
      } to ${moment(values?.toDate) ? moment(values?.toDate) : moment(values?.onDate)}`,
      from_name: state.name,
    };
    await emailjs.send(
      "service_ztobtmt",
      "template_ev9l1p1",
      templateParams,
      "Z94NObITapB4VhnXu"
    );
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
        <Box>{state?.leave}</Box>
      </Box>
      <Snackbar
        open={send}
        autoHideDuration={3000}
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
