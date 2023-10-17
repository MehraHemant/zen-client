import React from "react";
import Header from "../Component/Header";
import { Box, Card, Typography } from "@mui/material";
import leader from "../utils/Images/leader.svg";

const Leaderboard = () => {
  return (
    <>
      <Header title={"Leaderboard"} />
      <Box paddingX={5} paddingY={2}>
        <Card
          sx={{ minWidth:{xs: 240, md: 420}, height: 150, position: "relative" }}
          variant="outlined"
        >
          <Typography variant="h4" fontWeight={400} color="initial" padding={2}>
            Compitition is a good thing; it forces us to do our best.
          </Typography>
          <Box
            component={"img"}
            src={leader}
            position={"absolute"}
            bottom={0}
            sx={{ opacity: "0.8" }}
            right={"10%"}
          />
        </Card>
      </Box>
    </>
  );
};

export default Leaderboard;
