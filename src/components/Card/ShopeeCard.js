import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ShopeeCard() {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 4 }}>
      <CardMedia
        component="img"
        alt="shopee"
        height="250"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79VdeolnDeUBtvLdsClEm6eWssSSV677xKK0w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Shopee
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Pilih</Button>
      </CardActions>
    </Card>
  );
}
