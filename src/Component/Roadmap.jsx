import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useGetSessionQuery } from "../features/api";

const RoadmapIcon = ({ title, onClick }) => {
  return (
    <>
      <IconButton
        sx={{
          backgroundColor: "#4b0dba",
          width: 42,
          height: 42,
          color: "white",
          "&.MuiIconButton-root:hover": {
            backgroundColor: "#4b0dba",
          },
        }}
        disableFocusRipple
        onClick={onClick}
      >
        <Typography variant="h6">{title}</Typography>
      </IconButton>
    </>
  );
};

const Roadmap = ({ handleClick }) => {
  const { data, isLoading, isError, isSuccess } = useGetSessionQuery();
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Paper
        elevation={3}
        sx={{
          width: "450px",
          minHeight: "500px",
          pb: "16px",
          borderRadius: "7px",
        }}
      >
        <Typography
          variant="h5"
          p={2}
          bgcolor="secondary.light"
          borderRadius="7px 7px 0px 0px"
        >
          Session Roadmap
        </Typography>
        <Grid container rowSpacing={2} margin={"auto"} p="8px">
          {isError && (
            <Typography variant="h4" color="primary.light" textAlign={"center"}>
              No Batch assigned to you.
            </Typography>
          )}
          {isSuccess &&
            data?.map((value, index) => (
              <Grid item xs={2.4} key={value._id} textAlign={"center"}>
                <RoadmapIcon
                  title={index + 1}
                  onClick={() => handleClick(value._id)}
                />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Roadmap;
