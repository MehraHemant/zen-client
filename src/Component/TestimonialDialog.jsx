import React from "react";
import {
  Box,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";

const TestimonialDialog = ({ open, onClose, onSubmit }) => {
  
  const formik = useFormik({
    initialValues: { photoUrl: "", videoUrl: "", description: "" },
    onSubmit: (values, action) => {
      onSubmit(values);
      action.resetForm({ values: "" });
    },
  });
  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <Box component={"form"} onSubmit={formik.handleSubmit} borderRadius={2}>
        <Box padding={2} bgcolor={"#f0efff"}>
          <Typography variant="h4" fontWeight={500} color={"text.secondary"}>
            Add Testimonial
          </Typography>
        </Box>
        <Stack direction={"column"} spacing={3} padding={3}>
          <Box>
            <Typography variant="body1" color={"text.secondary"} gutterBottom>
              Photo
            </Typography>
            <TextField
              fullWidth
              placeholder="Photo url"
              name="photoUrl"
              value={formik.values.photoUrl}
              onChange={formik.handleChange}
            />
          </Box>
          <Box>
            <Typography variant="body1" color={"text.secondary"} gutterBottom>
              Video url
            </Typography>
            <TextField
              fullWidth
              placeholder="Video URL"
              name="videoUrl"
              value={formik.values.videoUrl}
              onChange={formik.handleChange}
            />
          </Box>
          <Box>
            <Typography variant="body1" color={"text.secondary"} gutterBottom>
              Description
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter the description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Box>
          <Stack direction="row" justifyContent={"end"} spacing={2}>
            <Button variant="outlined" sx={{ paddingX: 2 }} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={{ paddingX: 2 }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Dialog>
  );
};
TestimonialDialog.defaultProps = { open: true };

export default TestimonialDialog;
