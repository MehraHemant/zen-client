import React from "react";
import Header from "../Component/Header";
import { Box, Typography } from "@mui/material";
import { useGetCapstoneQuery } from "../features/api";
import CapstoneCard from "../Component/CapstoneCard";

const Capstone = () => {
  const { data, isLoading } = useGetCapstoneQuery();
  return (
    <>
      <Header title={"Capstone"} />

      {data?.length > 0 ? (
        <CapstoneCard data={data} />
      ) : (
        <Box padding={4}>
          <Typography
            textAlign={"center"}
            variant="h4"
            fontWeight={400}
            fontFamily={"ubuntu"}
            color="text.secondary"
          >
            No Capstone available
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Capstone;
