import { Card, CardContent, Typography } from "@mui/material";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class SentimenGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41],
      charOptions: {
        labels: ["Positif", "Negatif", "Netral"],
      },
    };
  }

  render() {
    return (
      <Card sx={{ margin: 4 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Grafik Sentimen
          </Typography>
          <div className="donut">
            <Chart
              options={this.state.charOptions}
              series={this.state.series}
              type="pie"
              width="380"
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default SentimenGraph;
