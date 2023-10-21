import React from "react";
import PlacementCard from "../Component/PlacementCard";
import Header from "../Component/Header";
import { useGetPlacementQuery } from "../features/api";
import { Stack } from "@mui/material";

const Placement = () => {
  const { data, isLoading } = useGetPlacementQuery();
  return (
    <div>
      <Header title={"Placement Board"} />
      <Stack direction={"row"} flexWrap={"wrap"}>
      {data?.map((item, i) => 
        <PlacementCard key={i} data={item} />
        )}
        </Stack>
    </div>
  );
};

export default Placement;
