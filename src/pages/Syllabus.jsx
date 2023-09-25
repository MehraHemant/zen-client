import React from "react";
import Header from "../Component/Header";
import mern from "../utils/mern-syllabus.pdf";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Syllabus = () => {
  return (
    <div>
      <Header title={"Syllabus"} />
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
              <TableCell>Mern Stack</TableCell>
              <TableCell>
                <Button
                  LinkComponent={"a"}
                  href={mern}
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
    </div>
  );
};

export default Syllabus;
