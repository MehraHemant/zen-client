import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import RequirementCard from "../Component/RequirementCard";
import axios from "axios";
import {base_url} from "../features/utils"

const Requirement = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/requirements/get`).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <Box>
      <Header title={"Requirements"} />
      <Stack spacing={5} padding={5}>
        {data.map((item, i) => (
          <RequirementCard key={i} data={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Requirement;
