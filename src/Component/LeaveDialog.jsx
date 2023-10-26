import {
  Alert,
  Box,
  Button,
  Dialog,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "moment/locale/en-gb";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React, { useState } from "react";
import moment from "moment";

const LeaveDialog = ({ open, onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      onDate: "",
      fromDate: "",
      toDate: "",
      days: 1,
      reason: "",
    },
    onSubmit: async (values) => {
      // onSubmit(values);
      console.log(values);
    },
    validateOnChange: false,
  });
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <Box
          component="form"
          sx={{ width: { xs: 320, sm: 450 } }}
          bgcolor={"#f0efff"}
          onSubmit={formik.handleSubmit}
        >
          <Typography padding={2} bgcolor={"#f0cfff"} variant="h5">
            Add Leave
          </Typography>
          <Stack direction={"column"} spacing={2} padding={4}>
            <Box>
              <Typography variant="body1" color={"text.secondary"} gutterBottom>
                Days
              </Typography>
              <TextField
                select
                name="days"
                defaultValue={1}
                onChange={formik.handleChange}
                value={formik.values.days}
                fullWidth
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={"More than 1"}>More than 1</MenuItem>
              </TextField>
            </Box>
            {formik.values.days === 1 ? (
              <Box>
                <Typography
                  variant="body1"
                  color={"text.secondary"}
                  gutterBottom
                >
                  On
                </Typography>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    disablePast
                    value={moment(formik.values.onDate)}
                    name="onDate"
                    format="DD/MM/YYYY"
                    onChange={(value) => {
                      formik.setFieldValue("onDate", value._d.getTime(), true);
                    }}
                    onBlur={formik.handleBlur}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        fullWidth: true,
                      },
                    }}
                  />
                </LocalizationProvider>
              </Box>
            ) : (
              <>
                <Box>
                  <Typography
                    variant="body1"
                    color={"text.secondary"}
                    gutterBottom
                  >
                    From
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      disablePast
                      value={moment(formik.values.fromDate)}
                      name="fromDate"
                      format="DD/MM/YYYY"
                      onChange={(value) => {
                        formik.setFieldValue(
                          "fromDate",
                          value._d.getDate(),
                          true
                        );
                      }}
                      onBlur={formik.handleBlur}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          fullWidth: true,
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    color={"text.secondary"}
                    gutterBottom
                  >
                    To
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      disablePast
                      value={moment(formik.values.toDate)}
                      name="toDate"
                      format="DD/MM/YYYY"
                      onChange={(value) => {
                        formik.setFieldValue(
                          "toDate",
                          value._d.getTime(),
                          true
                        );
                      }}
                      onBlur={formik.handleBlur}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          fullWidth: true,
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </>
            )}
            <Box>
              <Typography variant="body1" color={"text.secondary"} gutterBottom>
                Reason
              </Typography>
              <TextField
                name="reason"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reason}
                fullWidth
              ></TextField>
            </Box>
            <Button type="submit" variant="text" fullWidth>
              Submit
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};

export default LeaveDialog;
