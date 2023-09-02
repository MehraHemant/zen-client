import React from "react";
import Header from "../Component/Header";
import { Box, Typography } from "@mui/material";

const Interview = () => {
  return (
    <div>
      <Header title={"Interview Task"} />
      <Box padding={4}>
        <Typography variant={"body1"} color={"text.secondary"}>
          Content available after completing Placement preparation
        </Typography>
      </Box>
    </div>
  );
};

export default Interview;
