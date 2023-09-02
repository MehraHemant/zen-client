import styled from "@emotion/styled";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../utils/Images/download.png";
import { sideBarData } from "./config";

const HoveredList = styled(List)({
  maxWidth: 63,
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  overflowY: "hidden",
  borderRight: "1px solid grey",
  transition: "all 200ms",
  "&:hover": {
    maxWidth: 260,
    overflowY: "auto",
  },
});

const StyledListItem = styled(ListItemButton)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-block: 13px;
  padding-inline: 8px;
  color: red;
  position: relative;
  color: grey;
  :hover {
    color: #4b0dba;
  }
`;

const Sidebar = () => {
  // sidebar data
  return (
    <HoveredList
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "background.paper",
        zIndex: 1000
      }}
    >
      <ListItem sx={{ paddingX: "7px", paddingY: "15px" }}>
        <Box component="img" width={47} src={logo}></Box>
        <ListItemText
          sx={{ whiteSpace: "nowrap", color: "black", marginLeft: 3 }}
          primaryTypographyProps={{
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: 0,
          }}
          primary="Student"
        />
      </ListItem>
      <Divider />
      {sideBarData.items.map((item, index) => (
        <StyledListItem
          key={item.describe}
          component={NavLink}
          to={item.link}
          sx={{
            display:'flex',
            alignItems:'center',
            "&.active": {
              color: "text.primary",
              backgroundColor: "secondary.light",
              fontWeight: "fontWeightBold",
            },
          }}
        >
          <ListItemAvatar sx={{ paddingX: "12px" }}>{item.logo}</ListItemAvatar>
          <ListItemText
            sx={{
              whiteSpace: "nowrap",
              color: "black",
              fontSize: "14px",
              fontFamily: "DM sans",
              fontWeight: "600",
            }}
            primary={item.describe}
          />
        </StyledListItem>
      ))}
    </HoveredList>
  );
};

export default Sidebar;
