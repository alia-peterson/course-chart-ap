import React from "react";
import { useAppContext } from '../context/app-context';
import { Doughnut } from "react-chartjs-2";

import styles from "../styles/dashboard.module.scss";

export default function CircleChart({ data }) {
  const { activityColors } = useAppContext();

  const chartLabels = data.map((p) => Object.keys(p));
  const chartData = data.map((p) => Object.values(p));
  const config = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: activityColors,
        hoverBackgroundColor: activityColors,
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
