import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const primary = grey[200];
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenUserMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorEl(null);

  return (
    <Box
      bgcolor={primary}
      display="flex"
      height={"96px"}
      sx={{ px: { sm: 10, xs: 3 } }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Typography variant="h4" fontFamily={"ubuntu"}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" sx={{ display: { xs: "block" } }} color={'text.secondary'} fontWeight={500} mr={2}>
          Name Here
        </Typography>
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar></Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            navigate("/profile");
            handleCloseUserMenu();
          }}
        >
          <Typography textAlign="center" onClick={() => navigate("/profile")}>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseUserMenu();
            navigate("/login");
          }}
        >
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
