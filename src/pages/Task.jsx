import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import { TaskCard, ExtendCard } from "../Component/TaskCard";
import { Grid, Skeleton, Stack, Typography } from "@mui/material";
import { useGetTasksQuery } from "../features/api";

const Task = () => {
  const { data: taskData, isLoading, isSuccess, isError } = useGetTasksQuery();
  const [data, setData] = useState();
  return (
    <div>
      <Header title={"Task"} />
      <Grid container direction={"row"} justifyContent={"center"}>
        {taskData?.length <= 0 && (
          <Grid title xs={12}>
            <Typography variant="h3" mt={5} textAlign={'center'} fontWeight={400}>
              No Tasks Found
            </Typography>
          </Grid>
        )}
        {data && (
          <Grid item xs={12} lg={6}>
            <ExtendCard data={data} />
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          {isLoading && (
            <Stack direction={"column"} gap={1} alignItems={"center"} mt={1}>
              <Skeleton
                animation={"wave"}
                variant="rounded"
                height={80}
                width={720}
              />
              <Skeleton
                animation={"wave"}
                variant="rounded"
                height={80}
                width={720}
              />
              <Skeleton
                animation={"wave"}
                variant="rounded"
                height={80}
                width={720}
              />
            </Stack>
          )}
          <Stack direction="column" alignItems={"center"}>
            {taskData?.map((item, i) => {
              return (
                <TaskCard
                  data={item}
                  key={i}
                  handleClick={() => {
                    setData(item);
                    window.scrollTo(0, 0);
                  }}
                />
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Task;
