import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../utils/Images/download.png";
import bg_img from "../utils/Images/home_bg.png";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useCreateStudentMutation } from "../features/api";

const Createuser = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [createStudent, { isSuccess, isError, isLoading, error }] =
    useCreateStudentMutation();
  const validation = yup.object({
    name: yup.string().required("Name is required"),
    contact: yup.string().required("number is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", name: "", contact: "" },
    validationSchema: validation,
    onSubmit: async(value, {resetForm}) => {
      await createStudent(value);
      resetForm();
    },
  });
  return (
    <>
      <Box boxSizing={"border-box"}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Container>
                <Typography
                  component="img"
                  height={120}
                  src={logo}
                ></Typography>
                <Box display="flex" justifyContent="center">
                  <Box
                    component="form"
                    onSubmit={formik.handleSubmit}
                    maxWidth={420}
                  >
                    <TextField
                      color="secondary"
                      type="name"
                      name="name"
                      margin="normal"
                      placeholder="Enter Full Name"
                      variant="standard"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      label="Name"
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                      color="secondary"
                      type="number"
                      name="contact"
                      margin="normal"
                      placeholder="Enter Mobile Number"
                      variant="standard"
                      value={formik.values.contact}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      label="Number"
                      error={
                        formik.touched.contact && Boolean(formik.errors.contact)
                      }
                      helperText={
                        formik.touched.contact && formik.errors.contact
                      }
                    />
                    <TextField
                      color="secondary"
                      type="email"
                      name="email"
                      margin="normal"
                      placeholder="Enter Email Address"
                      variant="standard"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      label="Email"
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      color="secondary"
                      type={!showPassword ? "password" : "text"}
                      name="password"
                      margin="normal"
                      placeholder="Enter Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      variant="standard"
                      fullWidth
                      label="Password"
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => setShowPassword((state) => !state)}
                          >
                            {showPassword ? (
                              <VisibilityOutlined />
                            ) : (
                              <VisibilityOffOutlined />
                            )}
                          </IconButton>
                        ),
                      }}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      size="large"
                      fullWidth
                    >
                      {isLoading ? (
                        <CircularProgress sx={{ color: "#fff" }} />
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                    <Box width={"100%"}>
                      <Typography
                        component="span"
                        color="secondary"
                        sx={{ cursor: "pointer" }}
                        mx={"auto"}
                        onClick={() => navigate("/login")}
                      >
                        Already have an account?
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display={{ xs: "none", md: "block" }}
            position="relative"
            boxSizing="border-box"
            height="100vh"
          >
            <Box
              position="absolute"
              right="0"
              overflow={"hidden"}
              height={"100vh"}
            >
              <Box component={"img"} height="100vh" src={bg_img}></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Snackebar */}
      {isSuccess && (
        <Snackbar open={true} autoHideDuration={3000}>
          <Alert severity={"success"} sx={{ width: "100%" }}>
            Account has been created successfully.
          </Alert>
        </Snackbar>
      )}
      {isError && (
        <Snackbar open={true} autoHideDuration={3000}>
          <Alert severity={"error"} sx={{ width: "100%" }}>
            {error?.data.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Createuser;
