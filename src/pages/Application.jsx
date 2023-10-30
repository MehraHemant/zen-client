import React from "react";
import Header from "../Component/Header";
import { Box, Typography } from "@mui/material";
import { useApplicationQuery } from "../features/api";

const Application = () => {
  const { data } = useApplicationQuery();
  return (
    <div>
      <Header title={"My Application"} />
      {data ? (
        <Box>
          <Typography variant="h3">{data?.heading}</Typography>
        </Box>
      ) : (
        <Box padding={4}>
          <Typography variant={"body1"} color={"text.secondary"}>
            Content available after completing Placement preparation
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default Application;
