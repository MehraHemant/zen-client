import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const PlacementCard = ({data}) => {
  return (
    <>
      <Box margin={3}>
        <Card
          variant="outlined"
          sx={{ color: "text.secondary", width: {md:540}, paddingX: 1 }}
        >
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"Center"}
          >
            <CardContent>
              <Typography variant="h5">{data.name}</Typography>
              <Typography variant="body1">{data.batch}</Typography>
              <Typography variant="body1">{data.course}</Typography>
            </CardContent>
            <CardContent sx={{ height: "100%" }}>
              <Avatar />
            </CardContent>
          </Stack>
          <Divider />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              Company : <strong>{data.company}</strong>
            </Typography>

            <Typography variant="body1" gutterBottom>
              Current CTC : <strong>{data.ctc}</strong>
            </Typography>
            <Typography variant="body1">
              Placed Through : <strong>{data.placedThrough}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default PlacementCard;
