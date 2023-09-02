import React from "react";
import Sidebar from "./DrawerNav";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <Box ml={'63px'}>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default MainLayout;
