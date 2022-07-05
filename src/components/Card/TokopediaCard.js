import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function TokopediaCard() {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate("/tokped-data-tweet");
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 4 }}>
      <CardMedia
        component="img"
        alt="tokopedia"
        height="250"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mBoaZMsQWFXVTLU8Ij_DaUJKIwelmUGjANeKQ%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Tokopedia
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>Pilih</Button>
      </CardActions>
    </Card>
  );
}
