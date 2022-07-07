import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const SentimenGraph = ({data}) => {
  const sentimenPercentage = (src) => {
    let data = [];
    let temp;
    let percentage;

    src.forEach((row) => {
      temp = Object.values(row.count);
      temp = temp.pop();
      data.push(temp);
    });
    return data
  };
  const label = {
    options: {
      labels: ['Negatif','Netral','Positif']
    },
    series: sentimenPercentage(data),
  }
  
  return (
    <Card sx={{ margin: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Grafik Sentimen
        </Typography>
        <div className="donut">
          <Chart
            options={label.options}
            series={label.series}
            type="pie"
            width="380"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimenGraph;
