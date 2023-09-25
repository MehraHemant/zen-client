import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Step,
  StepButton,
  Stepper,
  Typography,
  makeStyles,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSession,
  getSingleSession,
} from "../features/Sessions/sessionSlice";

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
        {title}
      </IconButton>
    </>
  );
};
const Roadmap = () => {
  const session = useSelector((state) => state.session.sessions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSession());
  }, []);
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Paper
        elevation={3}
        sx={{ maxWidth: "450px", pb: "16px", borderRadius: "7px" }}
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
          {session.map((value, index) => (
            <Grid item xs={2.4} key={value._id} textAlign={"center"}>
              <RoadmapIcon
                title={index + 1}
                onClick={() => dispatch(getSingleSession(value._id))}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Roadmap;
