import React from "react";
import { Doughnut } from "react-chartjs-2";

import styles from "../styles/dashboard.module.scss";

export default function CircleChart({ data }) {
  const chartLabels = data.map((p) => Object.keys(p));
  const chartData = data.map((p) => Object.values(p));
  const config = {
    labels: [...chartLabels],
    datasets: [
      {
        data: [...chartData],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#1dea49",
          "#ef1aae",
          "#0b04fa",
          "#9a1aa0",
          "#3f218c",
          "#ebfc05",
          "#42e6d0",
          "#bb0935",
          "#5d9b35",
          // '#ffa500',
          // '#ff2500'
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#1dea49",
          "#ef1aae",
          "#0b04fa",
          "#9a1aa0",
          "#3f218c",
          "#ebfc05",
          "#42e6d0",
          "#bb0935",
          "#5d9b35",
          // '#ffa500',
          // '#ff2500'
        ],
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2>Activity Percentages</h2>
      <Doughnut data={config} />
    </div>
  );
}
