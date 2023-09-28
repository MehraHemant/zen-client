import React from "react";
import Header from "../Component/Header";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../features/student/studentSlice";

const validationSchema = yup.object({
  github: yup.string().required(),
});
const Portfolio = () => {
  useSelector((state) => state.student.student);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {github: "", portfolio: "", resume: ""},
    validationSchema,
    onSubmit: (values) => {
      dispatch(editProfile(values));
    },
  });
  return (
    <div>
      <Header title={"Portfolio"} />
      <Grid container>
        <Grid item>
          <Box width={450} m={4}>
            <Box component={"form"} mb={5} onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  variant="filled"
                  fullWidth
                  id="github"
                  name="github"
                  label="Github URL"
                  value={formik.values.github}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <TextField
                  variant="filled"
                  fullWidth
                  id="portfolio"
                  name="portfolio"
                  label="Portfolio URL"
                  value={formik.values.portfolio}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  id="resume"
                  name="resume"
                  label="Resume URL"
                  value={formik.values.resume}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Stack direction={"row"} justifyContent={"end"}>
                  <Button variant="outlined" type="submit" size="large">
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Box>
            <Typography variant="body1" color="text.secondary">
              <strong>Note: </strong>
              You Wont be Able to Submit When the Portfolio is under Review or
              Reviewed.
            </Typography>
          </Box>
        </Grid>
        <Grid
          xs={7}
          padding={5}
          borderLeft={"1px solid"}
          borderColor="action.disabled"
          item
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center" }}
            fontWeight={"500"}
          >
            Portfolio Review
          </Typography>
          <Divider />
          <Grid container direction={"row"}>
            <Grid item xs={6} padding={3}>
              <Typography variant="body1" color={"text.primary"}>
                Status :
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                No Submitted
              </Typography>
            </Grid>
            <Grid item xs={6} padding={3}>
              <Typography variant="body1" color={"text.primary"}>
                Batch :
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                No Submitted
              </Typography>
            </Grid>
            <Grid item xs={6} padding={3}>
              <Typography variant="body1" color={"text.primary"}>
                Comment:
              </Typography>
              <Typography variant="body2" color={"text.secondary"}></Typography>
            </Grid>
            <Grid item xs={6} padding={3}>
              <Typography variant="body1" color={"text.primary"}>
                Reviewed By:
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                Not Submitted
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
