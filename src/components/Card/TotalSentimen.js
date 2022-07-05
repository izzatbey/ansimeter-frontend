import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function HighestRiskWeb() {
  return (
    <Card sx={{ minWidth: 275, margin: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Total Sentimen
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 1 }} color="text.primary">
          100
        </Typography>
      </CardContent>
    </Card>
  );
}
