import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const TaskCard = ({ handleClick, data }) => {
  return (
    <Box padding={1}width={{md: "720px"}}>
      <Card
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "space-between" }}
        variant="outlined"
      >
        <CardContent color="text.secondary">
          <Typography
            variant="h6"
            fontWeight={500}
            color={"text.secondary"}
            gutterBottom
          >
            {data?.student.name}
          </Typography>
          <Stack ml={1}>
            <Typography variant="body1" color={"text.disabled"}></Typography>
            <Typography variant="body1" color={"text.disabled"}>
              {data?.activities.session.title}
            </Typography>
          </Stack>
        </CardContent>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" color={"text.disabled"}>
            {data?.updatedAt}
          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Chip
              variant="outlined"
              sx={{ paddingX: 1, mr: 1 }}
              color="warning"
              label={data?.marks}
            />
            <Chip
              variant="filled"
              sx={{ paddingX: 2 }}
              color="warning"
              label={data?.activities.type}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export const ExtendCard = ({ data }) => {
  return (
    <Card variant="outlined" sx={{ margin: 3, padding: 2 }}>
      <Grid container>
        <Grid item xs container>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" color="text.primary">
              {data?.student.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.activities.session.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack mb={1} spacing={1} direction={"row"} justifyContent={"end"}>
              <Chip label={7} variant="outlined" color="warning" />
              <Chip label={"Task"} variant="filled" color="warning" />
            </Stack>
            <Stack spacing={1} direction={"row"} justifyContent={"end"}>
              <Typography variant="body2" color={"text.secondary"}>
                submitted on {data?.updatedAt}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography variant="h6" color="text.Secondary" gutterBottom>
            Student Comments :
          </Typography>
          <Typography variant="subtitle1" color={"text.Secondary"} gutterBottom>
            Answers
          </Typography>
          <Stack
            direction={"column"}
            spacing={1}
            p={2}
            mb={2}
            border={"1px solid red"}
            borderRadius={1}
          >
            <Box display={"flex"}>
              <Typography variant="body1" mr={1}>
                Front-end Source code :
              </Typography>
              <Link href={data?.answer.deployedClient}>
                {data?.answer.deployedClient}
              </Link>
            </Box>
            <Box display={"flex"}>
              <Typography variant="body1" mr={1}>
                Back-end Source code :
              </Typography>
              <Link href={data?.answer.deployedServer}>
                {data?.answer.deployedServer}
              </Link>
            </Box>
            <Box display={"flex"}>
              <Typography variant="body1" mr={1}>
                Front-end Deployment link :
              </Typography>
              <Link href={data?.answer.githubClient}>
                {data?.answer.githubClient}
              </Link>
            </Box>
            <Box display={"flex"}>
              <Typography variant="body1" mr={1}>
                Back-end Deployment link :
              </Typography>
              <Link href={data?.answer.githubServer}>
                {data?.answer.githubServer}
              </Link>
            </Box>
          </Stack>

          <Typography variant="body1" color="warning.main" gutterBottom>
            <strong>Warning : </strong>1 mark will be deducted from your total
            score if you're failed to submit the task within the deadline
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "action.selected", width: "100%", p: "18px" }}
        >
          <Typography variant="subtitle1" color={"text.secondary"} gutterBottom>
            Comments:
          </Typography>
          <Typography
            variant="body1"
            color={"text.secondary"}
            sx={{ backgroundColor: "white", paddingY: 2, paddingX: 1 }}
          >
            Comment Here
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
