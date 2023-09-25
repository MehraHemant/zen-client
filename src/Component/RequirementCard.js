import { EditAttributesOutlined } from "@mui/icons-material";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const RequirementCard = ({ data, onEdit, onDelete }) => {
  const { name, website, role, ctc, natureOfJob, openings, deadline, program } =
    data;
  return (
    <Card sx={{ paddingX: 3, backgroundColor:"action.hover" }}>
      <Grid container color={"text.secondary"} >
        <Grid item xs={4} alignSelf={"center"}>
          <Typography variant="h5" color="initial">
            {name}
          </Typography>
          <Typography component="a" fontSize={"13px"} href={website}>
            {website}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Grid container my={3} direction={"row"}>
            <Grid item xs={4}>
              <Typography variant="body1">Role :</Typography>
              <Typography variant="body2">{role}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">Nature of Job :</Typography>
              <Typography variant="body2">{natureOfJob}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">Deadline :</Typography>
              <Typography variant="body2">
                {moment(deadline).utc().format("DD-MMM-YYYY")}
              </Typography>
            </Grid>
          </Grid>
          <Grid container my={3} color={"text.secondary"} direction={"row"}>
            <Grid item xs={4}>
              <Typography variant="body1">CTC :</Typography>
              <Typography variant="body2">{ctc}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">Openings :</Typography>
              <Typography variant="body2">{openings}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">Program :</Typography>
              <Typography variant="body2">{program}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Stack
            direction={"column"}
            height={"100%"}
            justifyContent={"space-evenly"}
          >
            <Button
              variant="outlined"
              fullWidth
              startIcon={<EditAttributesOutlined />}
              onClick={onEdit}
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
