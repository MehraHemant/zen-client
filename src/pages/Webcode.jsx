import React from "react";
import Header from "../Component/Header";
import { Box, Typography } from "@mui/material";
import { useGetWebcodeQuery } from "../features/api";
import WebcodeCard from "../Component/WebcodeCard";

const Webcode = () => {
  const { data, isLoading } = useGetWebcodeQuery();
  return (
    <>
      <Header title={"Capstone"} />
      {data?.length > 0 ? (
        <WebcodeCard data={data} />
      ) : (
        <Box padding={4}>
          <Typography
            textAlign={"center"}
            variant="h4"
            fontWeight={400}
            fontFamily={"ubuntu"}
            color="text.secondary"
          >
            No Webcode available
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Webcode;
