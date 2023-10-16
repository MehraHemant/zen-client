import { EditAttributesOutlined } from "@mui/icons-material";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const RequirementCard = ({ data, onDelete }) => {
  const { name, website, role, ctc, natureOfJob, openings, deadline, program } =
    data;
  return (
    <Card
      sx={{
        paddingX: 3,
        overflow: "auto",
        backgroundColor: "action.hover",
        width: { xs: "320px", md: "100%" },
      }}
    >
      <Grid container color={"text.secondary"}>
        <Grid item xs={12} md={3} my={3} alignSelf={"center"}>
          <Typography variant="h5" color="initial">
            {name}
          </Typography>
          <Typography component="a" fontSize={"13px"} href={website}>
            {website}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container my={{ md: 3 }} direction={"row"}>
            <Grid item xs={12} md={4} display={{ xs: "flex", md: "block" }}>
              <Typography variant="subtitle1">Role :&nbsp;</Typography>
              <Typography variant="subtitle1">
                {role
                  .split(" ")
                  .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
                  .join(" ")}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} display={{ xs: "flex", md: "block" }}>
              <Typography variant="subtitle1" >Nature of Job :</Typography>
              <Typography variant="subtitle1">{natureOfJob}</Typography>
            </Grid>
            <Grid item xs={12} md={4} display={{ xs: "flex", md: "block" }}>
              <Typography variant="subtitle1">Deadline :</Typography>
              <Typography variant="subtitle1">
                {moment(deadline).utc().format("DD-MMM-YYYY")}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            my={{ md: 3 }}
            color={"text.secondary"}
            direction={"row"}
          >
            <Grid item xs={12} md={4} display={{ xs: "flex", md: "block" }}>
              <Typography variant="subtitle1">CTC :</Typography>
              <Typography variant="subtitle1">{ctc}</Typography>
            </Grid>
            <Grid item xs={12} md={4} display={{ xs: "flex", md: "block" }}>
              <Typography variant="subtitle1">Openings :</Typography>
              <Typography variant="subtitle1">{openings}</Typography>
            </Grid>
            <Grid item xs={12} md={4} display={{ xs: "flex", md: "block" }}>
              <Typography variant="subtitle1">Program :</Typography>
              <Typography variant="subtitle1">{program}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} my={3}>
          <Stack
            direction={"column"}
            height={"100%"}
            justifyContent={"space-evenly"}
          >
            <Button
              variant="outlined"
              fullWidth
              startIcon={<EditAttributesOutlined />}
              href={website}
              target="_blank"
            >
              Apply
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RequirementCard;
