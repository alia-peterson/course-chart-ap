import React from "react";
import { Doughnut } from "react-chartjs-2";
import mockData from "../context/mock-data";
import styles from "../styles/CircleChart.module.scss";

const chartData = chartLabels.map((label) => mockData.miscMultipliers[label]);

// console.log(chartLabels)
// console.log(chartData)

export default function CircleChart({ id, allActivities, activityTotals }) {
  if (id) {
    const currentModData = allActivities.map((activity) => {
      if (activity.moduleId === id) {
        return {
          [activity.name]: activity.percentage,
        };
      }
    });
  }
  const chartLabels = Object.keys(currentModData) || Object.keys(activityTotals);
  const chartData = Object.values(currentModData) || Object.values(activityTotals);
  const config = {
    labels: [...chartLabels],
    datasets: [
      {
        data: [...chartData],
        backgroundColor: [
          // '#FF6384',
          // '#36A2EB',
          // '#FFCE56',
          // '#1dea49',
          // '#ef1aae',
          // '#0b04fa',
          // '#9a1aa0',
          // '#3f218c',
          // '#ebfc05',
          // '#42e6d0',
          // '#bb0935',
          // '#5d9b35',
          // '#ffa500',
          // '#ff2500'
        ],
        hoverBackgroundColor: [
          // '#FF6384',
          // '#36A2EB',
          // '#FFCE56',
          // '#1dea49',
          // '#ef1aae',
          // '#0b04fa',
          // '#9a1aa0',
          // '#3f218c',
          // '#ebfc05',
          // '#42e6d0',
          // '#bb0935',
          // '#5d9b35',
          // '#ffa500',
          // '#ff2500'
        ],
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2>Circle Chart</h2>
      <Doughnut data={config} width={400} height={400} />
      <p># Total Hours</p>
    </div>
  );
}

// export default () => (
// <div className={styles.chartContainer}>
//   <h2>Circle Chart</h2>
//   <Doughnut
//      data={config}
//      width={400}
//      height={400}
//   />
//   <p># Total Hours</p>
// </div>
// );
