import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  usePostTaskAnswersMutation,
  useUpdateAnswersMutation,
} from "../features/api";

const ActivityCard = ({ data, answers }) => {
  const [postTaskAnswers] = usePostTaskAnswersMutation();
  const [updateAnswer] = useUpdateAnswersMutation();
  const formik = useFormik({
    initialValues: answers.answer,
    onSubmit: (value) => {
      if (!answers) {
        postTaskAnswers({id:data?._id, value});
      } else {
        updateAnswer({id:answers?._id, value});
      }
    },
  });
  return (
    <>
      <Typography variant="h5" color="primary">
        Activities
      </Typography>
      <Accordion
        display={"grid"}
        gap={2}
        padding={3}
        sx={{ boxShadow: "0px 0px 2px gray", borderRadius: 1 }}
      >
        <AccordionSummary
          sx={{
            pointerEvents: "none",
            userSelect: "text",
          }}
          expandIcon={
            <ExpandMoreIcon
              sx={{
                pointerEvents: "auto",
              }}
            />
          }
        >
          <Grid container>
            <Grid item xs={7} md={9}>
              <Typography
                display={"inline-block"}
                sx={{ wordBreak: "break-word" }}
              >
                {data?.title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              md={2}
              sx={{ justifySelf: "end", textAlign: "right" }}
            >
              <Chip label={data?.type} color="warning" />
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component={"form"}
            sx={{
              display: "grid",
              gap: 2,
              border: "1px solid yellow",
              marginX: { md: 10 },
              marginBlock: 2,
              padding: "15px 20px",
              borderRadius: 2,
            }}
            onSubmit={formik.handleSubmit}
          >
            <Box sx={{ display: { md: "flex" } }} alignItems={"center"} gap={4}>
              <InputLabel color="primary" sx={{ flexBasis: "180px" }}>
                Front End Code
              </InputLabel>
              <Input
                color="action"
                value={formik.values.githubClient}
                name="githubClient"
                onChange={formik.handleChange}
                fullWidth
              />
            </Box>
            <Box sx={{ display: { md: "flex" } }} alignItems={"center"} gap={4}>
              <InputLabel color="primary" sx={{ flexBasis: "180px" }}>
                Front End Deployment
              </InputLabel>
              <Input
                name="deployedClient"
                value={formik.values.deployedClient}
                onChange={formik.handleChange}
                fullWidth
              />
            </Box>
            <Box sx={{ display: { md: "flex" } }} alignItems={"center"} gap={4}>
              <InputLabel color="primary" sx={{ flexBasis: "180px" }}>
                Back End Code
              </InputLabel>
              <Input
                value={formik.values.githubServer}
                name="githubServer"
                onChange={formik.handleChange}
                fullWidth
              />
            </Box>
            <Box sx={{ display: { md: "flex" } }} alignItems={"center"} gap={4}>
              <InputLabel color="primary" sx={{ flexBasis: "180px" }}>
                Back End Deployment
              </InputLabel>
              <Input
                name="deployedServer"
                value={formik.values.deployedServer}
                onChange={formik.handleChange}
                fullWidth
              />
            </Box>
            <Box sx={{ placeSelf: "end", mt: 2 }}>
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ActivityCard;
