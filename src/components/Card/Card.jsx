import { CardContent, Card, Typography } from "@mui/material";

export const CardValue = ({ title, data }) => {
  const totalSentimen = () => {
    let temp;
    let totalCount = 0;

    data.forEach((row) => {
      temp = Object.values(row.count);
      temp = temp.pop();
      console.log(temp);
      totalCount = totalCount + temp;
    });
    return totalCount;
  };
  return (
    <Card sx={{ minWidth: 275, margin: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 1 }} color="text.primary">
          {totalSentimen()}
        </Typography>
      </CardContent>
    </Card>
  );
};
