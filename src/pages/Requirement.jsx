import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Header from "../Component/Header";
import RequirementCard from "../Component/RequirementCard";

const Requirement = () => {
  const data = [
    {
      name: "demo",
      website: "demo",
      role: "demo",
      ctc: "demo",
      natureOfJob: "demo",
      openings: "demo",
      deadline: "demo",
      program: "demo",
    },
  ];
  return (
    <Box>
      <Header title={"Requirements"} />
      <Stack spacing={5} padding={5}>
        {data.map((item) => (
          <RequirementCard data={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Requirement;
