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
import { MainListItems } from "../ListItems";
import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCrawlDataTokopedia } from "../../service/crawl";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/slice/tweet";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const data = [
  {
    date: "2022-07-05 10:30:25+00:00",
    tweet:
      "b'@BukaBantuan pesanan 223292304153 dari pagi request kurir ga dateng2 sampe kami pulang, coba di drop di agen lion parcel ga bisa, krn wajib di pickup. Mohon dibantu'",
    username: "FJB Android",
  },
  {
    date: "2022-07-05 10:10:59+00:00",
    tweet: "b'@BukaBantuan Pls cdm ya,,'",
    username: "gembrot",
  },
  {
    date: "2022-07-05 10:30:25+00:00",
    tweet:
      "b'@BukaBantuan pesanan 223292304153 dari pagi request kurir ga dateng2 sampe kami pulang, coba di drop di agen lion parcel ga bisa, krn wajib di pickup. Mohon dibantu'",
    username: "FJB Android",
  },
  {
    date: "2022-07-05 10:10:59+00:00",
    tweet: "b'@BukaBantuan Pls cdm ya,,'",
    username: "gembrot",
  },
  {
    date: "2022-07-05 10:30:25+00:00",
    tweet:
      "b'@BukaBantuan pesanan 223292304153 dari pagi request kurir ga dateng2 sampe kami pulang, coba di drop di agen lion parcel ga bisa, krn wajib di pickup. Mohon dibantu'",
    username: "FJB Android",
  },
  {
    date: "2022-07-05 10:10:59+00:00",
    tweet: "b'@BukaBantuan Pls cdm ya,,'",
    username: "gembrot",
  },
  {
    date: "2022-07-05 10:30:25+00:00",
    tweet:
      "b'@BukaBantuan pesanan 223292304153 dari pagi request kurir ga dateng2 sampe kami pulang, coba di drop di agen lion parcel ga bisa, krn wajib di pickup. Mohon dibantu'",
    username: "FJB Android",
  },
  {
    date: "2022-07-05 10:10:59+00:00",
    tweet: "b'@BukaBantuan Pls cdm ya,,'",
    username: "gembrot",
  },
];

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

function TokopediaDataTweet() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const selector = useSelector((state) => state.tweet);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    navigate("/tokped-analyze-tweet");
  };

  //Uncomment Function Berikut
  // React.useEffect(async () => {
  //   const object = await getCrawlDataTokopedia();
  //   dispatch(actions.setData(object));
  //   console.log(selector.data);
  // }, []);

  // React.useEffect(async () => {
  //   dispatch(actions.setData(data));
  //   console.log(selector.data);
  // }, []);

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
            Data Tweet
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
            <Grid container>
              <Grid container xs={6} justifyContent="flex-start">
                <Typography>Data Tweet Tokopedia</Typography>
              </Grid>
              <Grid container xs={6} justifyContent="flex-end">
                <Button onClick={handleClick}>Analisa Tweet</Button>
              </Grid>
            </Grid>
            <Grid container>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tanggal Tweet</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>Data Tweet</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow
                        key={row.date}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.date}
                        </TableCell>
                        <TableCell>{row.username}</TableCell>
                        <TableCell>{row.tweet}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default TokopediaDataTweet;
