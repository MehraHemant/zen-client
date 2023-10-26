import React, { useState } from "react";
import Header from "../Component/Header";
import { Box, Grid, Typography } from "@mui/material";
import {
  useGetAnswerByActivityQuery,
  useGetCapstoneQuery,
} from "../features/api";
import CapstoneCard, { ExtendCapstone } from "../Component/CapstoneCard";

const Capstone = () => {
  const { data, isLoading, isSuccess } = useGetCapstoneQuery();

  const [id, setId] = useState(false);
  const [md, setMd] = useState(12);
  return (
    <>
      <Header title={"Capstone"} />
      <Grid container justifyItems={"center"}>
        <Grid item xs={12} md={md} display={"flex"} justifyContent={"center"}>
          {isSuccess &&
            (data?.length > 0 ? (
              data?.map((item, i) => (
                <CapstoneCard
                  key={i}
                  data={item}
                  handleClick={() => {
                    setId((id) => !id), setMd((md) => (md == 6 ? 12 : 6));
                  }}
                />
              ))
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
            ))}
        </Grid>
        {id && (
          <Grid item xs={12} md={6}>
            {isSuccess &&
              data?.map((item, i) => <ExtendCapstone key={i} data={item} />)}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Capstone;
