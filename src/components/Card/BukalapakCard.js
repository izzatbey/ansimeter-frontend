import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function BukalapakCard() {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate("/bukalapak-data-tweet");
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 4 }}>
      <CardMedia
        component="img"
        alt="bukalapak"
        height="250"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-wLr0kO3vi0o%2FXvdEPGvH0zI%2FAAAAAAAABVA%2F9fFxTqMSmOQNQpDd29mZ4mMRPA315rzSQCLcBGAsYHQ%2Fs1600%2FArtboard%252B1.png&f=1&nofb=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Bukalapak
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>Pilih</Button>
      </CardActions>
    </Card>
  );
}
