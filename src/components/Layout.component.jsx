import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";

// Style Imports
import "./Layout.styles.css";

const drawerWidth = 240;

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className="flex-container">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        className="drawer"
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" sx={{ p: 2 }}>
            Note App
          </Typography>
        </div>

        {/* Menu Items as List Links */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              sx={{
                backgroundColor:
                  location.pathname === item.path ? "#f4f4f4" : "#fff",
              }}
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
