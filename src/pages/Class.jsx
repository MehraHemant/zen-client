import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../Component/Header";
import Roadmap from "../Component/Roadmap";
import { useState } from "react";
import {
  useGetActivityQuery,
  useGetAdditionalSessionQuery,
  useGetAnswerByIdQuery,
  useGetOneSessionQuery,
} from "../features/api";
import ActivityCard from "../Component/ActivityCard";

const Class = () => {
  const [id, setId] = useState(undefined);
  const { data: additionalSession, isSuccess } = useGetAdditionalSessionQuery();

  const { data } = useGetOneSessionQuery(id, {
    skip: id ? false : true,
  });
  const { data: activityData } = useGetActivityQuery(data?._id, {
    skip: data ? false : true,
  });
  const { data: answers, isSuccess: answerSuccess } = useGetAnswerByIdQuery(
    activityData?._id,
    {
      skip: activityData ? false : true,
    }
  );
  return (
    <Box>
      <Header title={"Class"} />
      <Grid container spacing={3} marginY={3}>
        <Grid item xs={12} md={7} lg={8}>
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
              {data?.recording && (
                <Button
                  href={data?.recording}
                  target="_blank"
                  variant="outlined"
                >
                  Play Recording
                </Button>
              )}
            </Stack>
            <Box boxShadow="0px 0px 4px gray" borderRadius={1} padding={2}>
              <Box sx={{ paddingBottom: 2 }}>
                <Typography variant="h4" color={"text.main"}>
                  {!data ? "No session title available" : data?.title}
                </Typography>
                <Typography color={"text.main"}>
                  {!data ? "Class schedule is not available" : data?.time}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ paddingBlock: 2 }}>
                <Typography fontSize={16} fontWeight={"bold"}>
                  Contents :
                </Typography>
                <Typography fontSize={15} ml={1}>
                  {!data
                    ? "No content available"
                    : data?.contents?.map((item, i) => <li key={i}>{item}</li>)}
                </Typography>
              </Box>
              <Box sx={{ paddingBottom: 2 }}>
                <Typography fontSize={16} fontWeight={600}>
                  Pre-read :
                </Typography>
                <Typography fontSize={15} ml={1}>
                  {data?.pre_read.length < 0
                    ? data?.pre_read?.map((item, i) => <li key={i}>{item}</li>)
                    : "No pre-read available"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box p={3}>
            {answerSuccess && (
              <ActivityCard data={activityData} answers={answers} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Roadmap
            handleClick={(id) => setId(id)}
          />
          {isSuccess && additionalSession?.length > 0 && (
            <Box display={"flex"} justifyContent={"center"}>
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mt: 2,
                  width: "450px",
                  minHeight: "30px",
                  borderRadius: "7px",
                  background: "#F7F7F8",
                  p: 2,
                }}
              >
                <Typography
                  variant="h5"
                  p={2}
                  bgcolor="secondary.lighter"
                  borderRadius="7px 7px 0px 0px"
                >
                  Additional Sessions
                </Typography>
                {additionalSession.map((value, i) => (
                  <Card key={i} onClick={()=> setId(value._id)} sx={{cursor:"pointer"}}>
                    <CardContent>
                      <Typography variant="h5" fontWeight={600}>
                        {value.title}
                      </Typography>
                      <Typography variant="subtitle1">{value.time}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Paper>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Class;
