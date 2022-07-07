import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function BlibliCard() {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate("/blibli-data-tweet");
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 4 }}>
      <CardMedia
        component="img"
        alt="blibli"
        height="250"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fpublic%2Fuploads%2Fpreview%2Flogo-blibli-11550708547os1lsnmgan.png&f=1&nofb=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Blibli
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>Pilih</Button>
      </CardActions>
    </Card>
  );
}
