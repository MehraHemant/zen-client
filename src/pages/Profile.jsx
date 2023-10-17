import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import Header from "../Component/Header";
import {useSelector } from "react-redux";
import { useUpdateSelfMutation } from "../features/api";

const Profile = () => {
  const user = useSelector(state => state.myReducer.user)

  const [updateSelf, {isSuccess, isLoading}] = useUpdateSelfMutation();
  const formik = useFormik({
    initialValues: {...user, batch: user?.batch?.name},
    onSubmit: (values) => {
      updateSelf(values);
    },
  });
  return (
    <>
      <Header title="My Profile" />
      {user ? (
        <Box
          component={"form"}
          onSubmit={formik.handleSubmit}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid
            container
            spacing={5}
            maxWidth={"md"}
            paddingX={4}
            pb={5}
            margin={3}
            borderRadius={3}
            border={"2px solid #efefef"}
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Name
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Example: John Doe"
                name="name"
                value={formik.values?.name
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Phone
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                value={formik.values?.contact}
                onChange={formik.handleChange}
                name="contact"
                placeholder="Example: 9876543210"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Email
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                value={formik.values?.email}
                onChange={formik.handleChange}
                name="email"
                placeholder="Example: john.doe@email.com"
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Batch{" "}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                name="batch"
                value={formik.values?.batch}
                disabled
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            maxWidth={"md"}
            paddingX={4}
            pb={5}
            margin={3}
            borderRadius={3}
            border={"2px solid #efefef"}
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Qualification
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                name="qualification"
                value={formik.values?.qualification}
                onChange={formik.handleChange}
                placeholder="Example: BE Mechanical Engineering"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Year of Passing
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                name="yearOfPassing"
                value={formik.values?.yearOfPassing}
                onChange={formik.handleChange}
                placeholder="Example: 2020"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Year of Experience
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                name="yearOfExperience"
                value={formik.values?.yearOfExperience}
                onChange={formik.handleChange}
                fullWidth
                placeholder="Example: 2"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Notice Period :
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                value={formik.values?.noticePeriod}
                name="noticePeriod"
                onChange={formik.handleChange}
                placeholder="Example: in days"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={5}
            maxWidth={"md"}
            paddingX={4}
            pb={5}
            margin={3}
            borderRadius={3}
            border={"2px solid #efefef"}
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Github URL
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                name="github"
                value={formik.values?.github}
                onChange={formik.handleChange}
                fullWidth
                placeholder="Example: github.com/<Your-Username"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Portfolio URL
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                value={formik.values?.portfolio}
                name="portfolio"
                onChange={formik.handleChange}
                placeholder="Example: YourSite.com"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                fontWeight={400}
                color="text.secondary"
              >
                Resume URL
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                value={formik.values?.resume}
                name="resume"
                onChange={formik.handleChange}
                variant="outlined"
                fullWidth
                placeholder="Example: docs.google.com/yourResumeParams"
              />
            </Grid>
          </Grid>
          <Grid item alignSelf={"end"} padding={5}>
            <Button
              variant="contained"
              sx={{ fontSize: 16, padding: "8px 18px" }}
              type="submit"
              disabled={isLoading}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
