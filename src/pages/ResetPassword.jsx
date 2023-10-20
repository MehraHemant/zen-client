import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import logo from "../utils/Images/download.png";
import bg_img from "../utils/Images/home_bg.png";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useResetPasswordMutation } from "../features/api";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  
  const [showPassword, setShowPassword] = useState();
  const [resetPassword, { isLoading, isSuccess, isError, error, reset }] =
    useResetPasswordMutation();
  
  const validationSchema = yup.object({
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const resetref = useRef(reset);
  resetref.current = reset;

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: async (value) => {
      await resetPassword(token, value.password);
      setTimeout(() => resetref.current(), 2000);
    },
  });

  return (
    <Box boxSizing={"border-box"}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Container>
              <Box
                component="img"
                height={120}
                src={logo}
                onClick={() => navigate("/")}
              ></Box>
              <Box display="flex" justifyContent="center">
                <Box
                  component="form"
                  onSubmit={formik.handleSubmit}
                  width={420}
                >
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
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <TextField
                    color="secondary"
                    type="password"
                    name="confirmPassword"
                    margin="normal"
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    variant="standard"
                    fullWidth
                    label="Confirm Password"
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
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
                      "Change Password"
                    )}
                  </Button>
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
      {isSuccess && (
        <Snackbar open={true} autoHideDuration={4000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Password Changed Successfully
          </Alert>
        </Snackbar>
      )}
      {isError && (
        <Snackbar open={true} autoHideDuration={4000}>
          <Alert severity="error" sx={{ width: "100%" }}>
            {error?.data?.message}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default ResetPassword;
