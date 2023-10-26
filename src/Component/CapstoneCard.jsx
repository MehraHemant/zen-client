import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Input,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
  useGetAnswerByActivityQuery,
  usePostTaskAnswersMutation,
} from "../features/api";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const CapstoneCard = ({ data, handleClick }) => {
  const user = useSelector((state) => state.myReducer.user);
  const { data: answer } = useGetAnswerByActivityQuery(data?._id, {
    skip: data ? false : true,
  });
  return (
    <>
      <Box
        padding={1}
        maxWidth={{ md: "720px" }}
        width={"100%"}
        sx={{ cursor: "pointer" }}
      >
        <Card
          onClick={handleClick}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
          elevation={2}
        >
          <CardContent color="text.secondary">
            <Typography
              variant="h6"
              fontWeight={500}
              color={"text.secondary"}
              gutterBottom
            >
              {user?.name}
            </Typography>
            <Stack ml={1}>
              <Typography variant="body1" color={"text.disabled"}>
                ({user?.batch?.name} - {data?.type.slice(0, 1).toUpperCase()}
                {data?.type.slice(1)} Project)
              </Typography>
              <Typography variant="body1" color={"text.disabled"}>
                {data?.title}
              </Typography>
            </Stack>
          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" color={"text.disabled"}>
              {answer?.updatedAt}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              {answer?.marks && (
                <Chip
                  variant="outlined"
                  sx={{ paddingX: 1, mr: 1 }}
                  color="warning"
                  label={answer?.marks}
                />
              )}
              <Chip
                variant="filled"
                sx={{ paddingX: 1, mr: 1 }}
                color="warning"
                label={data?.type}
              />
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export const ExtendCapstone = ({ data }) => {
  const user = useSelector((state) => state.myReducer.user);
  const { data: answer } = useGetAnswerByActivityQuery(data?._id, {
    skip: data ? false : true,
  });
  const { postTaskAnswer } = usePostTaskAnswersMutation();

  const formik = useFormik({
    initialValues: {
      deployedClient: "",
      deployedServer: "",
      githubServer: "",
      githubClient: "",
    },
    onSubmit: (value) => {
      postTaskAnswer({ id: data._id, value });
    },
  });
  return (
    <Card variant="outlined" sx={{ margin: 1, padding: 2 }}>
      <Grid container>
        <Grid item xs container>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" color="text.primary">
              {user?.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              ({user?.batch?.name} - {data?.type.slice(0, 1).toUpperCase()}
              {data?.type.slice(1)} Project)
            </Typography>
            <Typography variant="body1" color={"text.disabled"}>
              {data?.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            {answer?.marks && (
              <Stack
                mb={1}
                spacing={1}
                direction={"row"}
                justifyContent={"end"}
              >
                <Chip
                  label={answer?.marks}
                  variant="outlined"
                  color="warning"
                />
                <Chip label={"Task"} variant="filled" color="warning" />
              </Stack>
            )}
            {answer?.updatedAt && (
              <Stack spacing={1} direction={"row"} justifyContent={"end"}>
                <Typography variant="body2" color={"text.secondary"}>
                  submitted on {data?.updatedAt}
                </Typography>
              </Stack>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography variant="h6" color="text.Secondary" gutterBottom>
            Description :
          </Typography>
          <Typography variant="subtitle">{data?.description}</Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Typography variant="h6" color={"text.Secondary"} gutterBottom>
            Task Title : {data?.title}
          </Typography>
        </Grid>
        {data?.requirements && (
          <Grid item xs={12} mt={3}>
            <Typography variant="h6" color={"text.Secondary"} gutterBottom>
              Requirements
            </Typography>
            {data?.requirements?.map((item) => (
              <li>{item}</li>
            ))}
          </Grid>
        )}
        {data?.refrence && (
          <Grid item xs={12} mt={3}>
            <Typography variant="h6" color={"text.Secondary"} gutterBottom>
              Any basic hints/links/reference sites to solve?
            </Typography>
            {data?.refrence?.map((item) => (
              <li>{item}</li>
            ))}
          </Grid>
        )}
        <Grid item xs={12} mt={3}>
          <Typography variant="subtitle1" color={"text.Secondary"} gutterBottom>
            Answers
          </Typography>
          <Stack
            component={"form"}
            onSubmit={formik.handleSubmit}
            direction={"column"}
            spacing={2}
            p={2}
            mb={2}
            border={"1px solid red"}
            borderRadius={1}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="body1" mr={1} flexBasis={280}>
                Front-end Source code :
              </Typography>
              {!answer ? (
                <OutlinedInput
                  margin="dense"
                  fullWidth
                  required
                  name="githubClient"
                  value={formik.values.githubClient}
                  onChange={formik.handleChange}
                  inputProps={{ sx: { padding: "5px" } }}
                />
              ) : (
                <Link href={data?.answer?.githubClient}>
                  {data?.answer?.githubClient}
                </Link>
              )}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="body1" mr={1} flexBasis={280}>
                Back-end Source code :
              </Typography>
              {!answer ? (
                <OutlinedInput
                  margin="dense"
                  fullWidth
                  required
                  name="githubServer"
                  value={formik.values.githubServer}
                  onChange={formik.handleChange}
                  inputProps={{ sx: { padding: "5px" } }}
                ></OutlinedInput>
              ) : (
                <Link href={data?.answer?.githubServer}>
                  {data?.answer?.githubServer}
                </Link>
              )}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="body1" mr={1} flexBasis={280}>
                Front-end Deployed Link :
              </Typography>
              {!answer ? (
                <OutlinedInput
                  margin="dense"
                  fullWidth
                  required
                  name="deployedClient"
                  value={formik.values.deployedClient}
                  onChange={formik.handleChange}
                  inputProps={{ sx: { padding: "5px" } }}
                ></OutlinedInput>
              ) : (
                <Link href={data?.answer?.deployedClient}>
                  {data?.answer?.deployedClient}
                </Link>
              )}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="body1" mr={1} flexBasis={280}>
                Back-end Deployed Link :
              </Typography>
              {!answer ? (
                <OutlinedInput
                  margin="dense"
                  fullWidth
                  required
                  name="deployedServer"
                  value={formik.values.deployedServer}
                  onChange={formik.handleChange}
                  inputProps={{ sx: { padding: "5px" } }}
                ></OutlinedInput>
              ) : (
                <Link href={data?.answer?.deployedServer}>
                  {data?.answer?.deployedServer}
                </Link>
              )}
            </Box>
            {!answer && (
              <Box display={"flex"} justifyContent={"right"}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
            )}
          </Stack>

          <Typography variant="body1" color="warning.main" gutterBottom>
            <strong>Warning : </strong>2 mark will be deducted from your total
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
            {answer?.comment}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CapstoneCard;
