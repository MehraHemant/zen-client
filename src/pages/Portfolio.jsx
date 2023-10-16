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
import { useUpdateSelfMutation } from "../features/api";

const validationSchema = yup.object({
  github: yup.string().required(),
});
const Portfolio = () => {
  const student = useSelector(state=> state.myReducer.user)
  const [updateSelf, {isLoading, isSuccess}] = useUpdateSelfMutation();
  const formik = useFormik({
    initialValues: {github: student.github, portfolio: student.portfolio, resume: student.resume},
    validationSchema,
    onSubmit: (values) => {
      (updateSelf(values));
    },
  });
  return (
    <div>
      <Header title={"Portfolio"} />
      <Grid container>
        <Grid item>
          <Box width={{md:450}} m={4}>
            <Box component={"form"} mb={5} onSubmit={formik.handleSubmit}>
              <Stack spacing={3} width={"100%"}>
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
          xs={12} md={7}
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
                {student.batch.name}
              </Typography>
            </Grid>
            <Grid item xs={6} padding={3}>
              <Typography variant="body1" color={"text.primary"}>
                Comment:
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                No Comment Yet
              </Typography>
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
