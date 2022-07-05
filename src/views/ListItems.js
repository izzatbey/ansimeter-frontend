import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListIcon from "@mui/icons-material/List";
import BarChartIcon from "@mui/icons-material/BarChart";
import CheckBoxIcon from "@mui/icons-material/CheckBoxOutlined";
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const mainList = [
  {
    to: "/marketplace",
    title: "Marketplace",
    icon: <ShoppingCartIcon sx={{ color: "white" }} />,
  },
  {
    to: "/data-tweet",
    title: "Data Tweet",
    icon: <ListIcon sx={{ color: "white" }} />,
  },
  {
    to: "/data-sentimen",
    title: "Data Sentimen",
    icon: <CheckBoxIcon sx={{ color: "white" }} />,
  },
  {
    to: "/visualize",
    title: "Visualisasi Data",
    icon: <BarChartIcon sx={{ color: "white" }} />,
  },
];

const handleClick = () => {};

export const MainListItems = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {mainList.map((item) => (
        <ListItemButton onClick={() => navigate(item.to)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
