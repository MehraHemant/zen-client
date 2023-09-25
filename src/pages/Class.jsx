import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Header from "../Component/Header";
import { useDispatch, useSelector } from "react-redux";
import Roadmap from "../Component/Roadmap";

const Class = () => {
  const session = useSelector((state) => state.session.session);
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
              {session && (
                <Button href={session.sessionLink} variant="contained">
                  Join
                </Button>
              )}
            </Stack>
            <Box boxShadow="0px 0px 4px gray" borderRadius={1} padding={2}>
              <Box sx={{ paddingBottom: 2 }}>
                <Typography variant="h4" color={"text.main"}>
                  {!session ? "No session title available" : session.title}
                </Typography>
                <Typography color={"text.main"}>
                  {!session ? "Class schedule is not available" : session.time}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ paddingBlock: 2 }}>
                <Typography fontSize={16} fontWeight={"bold"}>
                  Contents :
                </Typography>
                <Typography fontSize={15} ml={1}>
                  {!session
                    ? "No content available"
                    : session.contents?.map((item) => <li>{item}</li>)}
                </Typography>
              </Box>
              <Box sx={{ paddingBottom: 2 }}>
                <Typography fontSize={16} fontWeight={600}>
                  Pre-read :
                </Typography>
                <Typography fontSize={15} ml={1}>
                  {!session
                    ? "No pre-read available"
                    : session.pre_read?.map((item) => <li>{item}</li>)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
            <Roadmap />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Class;
