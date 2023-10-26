import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { useGetRoadmapSessionQuery } from "../features/api";

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
  const { data, isSuccess, isLoading, isError } = useGetRoadmapSessionQuery();
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Paper
        elevation={3}
        sx={{
          width: "450px",
          minHeight: "300px",
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
          {data?.length <= 0 && (
            <Grid item xs={12}>
              <Typography variant="h5" textAlign={"center"}>
                No Batch assigned to you.
              </Typography>
            </Grid>
          )}
          {isSuccess &&
            data?.map(
              (value, index) =>
                value.sessionType === "roadmap" && (
                  <Grid item xs={2.4} key={value._id} textAlign={"center"}>
                    <RoadmapIcon
                      title={index + 1}
                      onClick={() => handleClick(value._id)}
                    />
                  </Grid>
                )
            )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Roadmap;
