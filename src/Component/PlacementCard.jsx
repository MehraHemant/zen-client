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

const PlacementCard = () => {
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
              <Typography variant="h5">Purushothaman Ravichandran</Typography>
              <Typography variant="body1">B38 WD Tamil</Typography>
              <Typography variant="body1">FSD-MERN</Typography>
            </CardContent>
            <CardContent sx={{ height: "100%" }}>
              <Avatar />
            </CardContent>
          </Stack>
          <Divider />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              Company : <strong>Paripooran</strong>
            </Typography>

            <Typography variant="body1" gutterBottom>
              Current CTC : <strong>3 LPA</strong>
            </Typography>
            <Typography variant="body1">
              Placed Through : <strong>Guvi</strong>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default PlacementCard;
