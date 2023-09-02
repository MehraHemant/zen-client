import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Header from "../Component/Header";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../features/Sessions/sessionSlice";

const Class = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSession())
  }, [])
  const sessions = useSelector(state=> state.session.sessions)
  return (
    <Box>
      <Header title={"Class"} />
      <Grid container spacing={3} marginY={3}>
        <Grid item xs={12} md={8}>
          <Box padding={2}>
            <Stack
              marginY={2}
              padding={2}
              direction={"row"}
              justifyContent="space-between"
              bgcolor="secondary.main"
              color="white"
              borderRadius={2}
            >
              <Typography variant="h5" fontSize={25} paddingY={1}>
                Join Class on time!
              </Typography>
            </Stack>
            <Box boxShadow="0px 0px 4px gray" borderRadius={1} padding={2}>
              <Box sx={{ paddingBottom: 2 }}>
                <Typography variant="h4" color={"text.main"}>
                  No session title available
                </Typography>
                <Typography color={"text.main"}>
                  Class schedule is not available
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ paddingBlock: 2 }}>
                <Typography fontSize={16} fontWeight={"bold"}>
                  Contents :
                </Typography >
                <Typography fontSize={15} ml={1}>No content available</Typography>
              </Box>
              <Box sx={{ paddingBottom: 2 }}>
                <Typography fontSize={16} fontWeight={600}>
                  Contents :
                </Typography>
                <Typography fontSize={15} ml={1}>No preread available</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Class;
