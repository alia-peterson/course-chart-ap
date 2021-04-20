import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "../styles/CircleChart.module.scss";
import { useAppContext } from '../context/app-context'

export default function CircleChart({ data, view }) {
  const { sharedState } = useAppContext()
  const chartLabels = data.map((p) => Object.keys(p));
  const chartData = data.map((p) => Object.values(p));
  const chartColors = sharedState.activities.map(activity => activity.color)
  const config = {
    labels: [...chartLabels],
    datasets: [
      {
        data: [...chartData],
        backgroundColor: [...chartColors],
        hoverBackgroundColor: [...chartColors]
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      {view === 'Course' ? <h2>{`Activities in ${view}`}</h2> : <h2>{`Activities in ${view}`}</h2>}
      <Doughnut className='circleChart' data={config} width={400} height={400} />
    </div>
  );
}
