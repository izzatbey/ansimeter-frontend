import React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems } from "./ListItems";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";
import TokopediaCard from "../components/Card/TokopediaCard";
import ShopeeCard from "../components/Card/ShopeeCard";
import LazadaCard from "../components/Card/LazadaCard";
import BlibliCard from "../components/Card/BlibliCard";
import BukalapakCard from "../components/Card/BukalapakCard";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    color: "white",
    backgroundColor: "blue",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const useStyles = makeStyles({
  sidebar: {
    color: blue,
  },
});

const Marketplace = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "36px",
            backgroundColor: "white",
            color: "blue",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="blue"
            noWrap
            sx={{ flexGrow: 1 }}
            align="right"
          >
            Marketplace
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "blue",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav" sx={{ color: "white" }}>
          <MainListItems sx={{ color: "white" }} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="xl">
          <Grid container spacing={2} marginTop={4}>
            <Grid item xs={4}>
              <TokopediaCard />
            </Grid>
            <Grid item xs={4}>
              <ShopeeCard />
            </Grid>
            <Grid item xs={4}>
              <LazadaCard />
            </Grid>
          </Grid>
          <Grid container marginTop={4}>
            <Grid xs={2} />
            <Grid item xs={4}>
              <BlibliCard />
            </Grid>
            <Grid item xs={4}>
              <BukalapakCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Marketplace;
