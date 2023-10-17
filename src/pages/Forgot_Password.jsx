import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import logo from "../utils/Images/download.png";
import bg_img from "../utils/Images/home_bg.png";
import { useForgotPasswordMutation } from "../features/api";
import { Navigate, useNavigate } from "react-router-dom";

const Forgot_password = () => {
  const [forgotPassword, { isLoading, isSuccess, isError, error }] =
    useForgotPasswordMutation();
const navigate = useNavigate();
  const validation = yup.object({
    email: yup.string().required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { email: "user@demo.com" },
    validationSchema: validation,
    onSubmit: (value) => {
      forgotPassword(value);
    },
  });

  return (
    <Box boxSizing={"border-box"}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Container>
              <Box component="img" height={120} src={logo} onClick={()=>navigate("/")}></Box>
              <Box display="flex" justifyContent="center">
                <Box
                  component="form"
                  onSubmit={formik.handleSubmit}
                  width={420}
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
                      "Send Reset Link"
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
      {isSuccess &&
      <Snackbar open={true} autoHideDuration={4000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Passwor Reset Link send successfully!
        </Alert>
      </Snackbar>
      }
      {isError && (
            <Snackbar open={true} autoHideDuration={4000}>
        <Alert severity="error" sx={{ width: "100%" }}>
            Please Try again with correct email.
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default Forgot_password;
