import React, { useState } from "react";
import Header from "../Component/Header";
import { TaskCard, ExtendCard } from "../Component/TaskCard";
import { Grid, Stack } from "@mui/material";

const Task = () => {
  let fakeData = [1, 2, 3, 4, 5];
  const [data, setData] = useState();
  const handleClick = (item) => {
    setData(item);
  };
  return (
    <div>
      <Header title={"Task"} />
      <Grid container direction={"row"} justifyContent={"center"}>
        <Grid item xs={6}>
          <Stack direction="column" alignItems={"center"}>
            {fakeData.map((item) => (
              <TaskCard handleClick={() => handleClick(item)} />
            ))}
          </Stack>
        </Grid>
        {data && (
          <Grid item xs={6}>
            <ExtendCard />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Task;
