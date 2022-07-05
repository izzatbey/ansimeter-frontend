import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LazadaCard() {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 4 }}>
      <CardMedia
        component="img"
        alt="lazada"
        height="250"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-BrqMa5NF92M%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FT8FO7svt7o8%2Fs900-c-k-no%2Fphoto.jpg&f=1&nofb=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Lazada
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Pilih</Button>
      </CardActions>
    </Card>
  );
}
