import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import background from "../assets/3040067.jpg";
import montserratTtf from "../assets/Montserrat-VariableFont_wght.ttf";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  typography: {
    color: blue["600"],
  },
});

export default function LandingPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/marketplace");
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            fontWeight="800"
            padding={10}
            marginTop={5}
            className={classes.typography}
          >
            WELCOME TO ANSIMETER !
          </Typography>
          <Box justifyContent="center">
            <Typography variant="h6" align="center">
              Ansimeter akan mengolah tweetmu untuk melihat penilaian masyarakat
              terhadap marketplace
            </Typography>
            <br />
            <Typography variant="h6" align="center">
              Kamu bisa melihat bagaimana pengalaman pengguna lain dalam
              menggunakan suatu marketplace
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={changePage}
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography variant="h6" fontWeight="800">
                Let's get Started !
              </Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
