import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import { TaskCard, ExtendCard } from "../Component/TaskCard";
import { Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../features/Tasks/tasksSlice";

const Task = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  const [data, setData] = useState();
  const handleClick = (item) => {
    setData(item);
  };
  useEffect(() => {
    dispatch(getTask());
  }, []);
  return (
    <div>
      <Header title={"Task"} />
      <Grid container direction={"row"} justifyContent={"center"}>
        <Grid item xs={6}>
          <Stack direction="column" alignItems={"center"}>
            {task.tasks.map((item, i) => {
              return (
                <TaskCard data={item} key={i} handleClick={() => handleClick(item)} />
              );
            })}
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
