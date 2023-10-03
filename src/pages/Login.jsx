import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../utils/Images/download.png";
import bg_img from "../utils/Images/home_bg.png";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { login } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const validation = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "user@demo.com", password: "User@demo" },
    validationSchema: validation,
    onSubmit: (value) => {
      dispatch(login(value));
    },
  });
  useEffect(() => {
    localStorage.getItem("user") && navigate("/class");
    state.isSuccess&&window.location.reload();
  }, [state.isLoading]);
  return (
    <Box boxSizing={"border-box"}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Container>
              <Typography component="img" height={120} src={logo}></Typography>
              <Box display="flex" justifyContent="center">
                <Box
                  component="form"
                  onSubmit={formik.handleSubmit}
                  maxWidth={420}
                >
                  <TextField
                    color="secondary"
                    type="email"
                    name="email"
                    margin="normal"
                    autoFocus
                    placeholder="Enter Email Address"
                    variant="standard"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    label="Email"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    color="secondary"
                    type="password"
                    name="password"
                    margin="normal"
                    placeholder="Enter Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    variant="standard"
                    fullWidth
                    label="Password"
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
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
                    {state.isLoading?<CircularProgress sx={{color:"#fff"}}/>:"Login"}
                  </Button>
                  <Box width={"100%"}>
                    <Typography
                      component="span"
                      color="secondary"
                      sx={{ cursor: "pointer" }}
                      mx={"auto"}
                      onClick={()=>navigate('/forgot_password')}
                    >
                      Forgot Password ?
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
  );
};

export default Login;
