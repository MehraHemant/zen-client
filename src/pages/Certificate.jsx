import React from "react";
import Header from "../Component/Header";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useCerificateQuery } from "../features/api";

const Certificate = () => {
  const { data } = useCerificateQuery();
  return (
    <>
      <Header title={"Certificate"} />
      {data ? (
        <Box display={"flex"} justifyContent={"center"} mt={15}>
          <Table sx={{ maxWidth: 520 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "whitesmoke" }}>Course</TableCell>
                <TableCell sx={{ bgcolor: "whitesmoke" }}>Syllabus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Cerificate</TableCell>
                <TableCell>
                  <Button
                    LinkComponent={"a"}
                    href={data?.link}
                    download={"mern_stack"}
                    variant="text"
                    size="large"
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      ) : (
        <Box padding={4}>
          <Typography
            textAlign={"center"}
            variant="h4"
            fontWeight={400}
            fontFamily={"ubuntu"}
            color="text.secondary"
          >
            Your Certificate is not yet Generated.
          </Typography>
        </Box>
      )}{" "}
    </>
  );
};

export default Certificate;
