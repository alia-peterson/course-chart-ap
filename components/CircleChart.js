import React from "react";
import { useAppContext } from '../context/app-context';
import { Doughnut } from "react-chartjs-2";

import styles from "../styles/dashboard.module.scss";

export default function CircleChart({ data, view }) {
  const { activityColors } = useAppContext();

  const chartLabels = data.map((p) => Object.keys(p));
  const chartData = data.map((p) => Object.values(p));
  const datas = {
    labels: chartLabels,
    fontFamily: 'IBM Plex Sans',
    datasets: [
      {
        data: chartData,
        backgroundColor: activityColors,
        hoverBackgroundColor: activityColors,
      },
    ],
  };

  const options = {
      
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: `Activities in ${view}`,
          fontFamily: 'IBM Plex Mono',
          fontSize: 18,
          fontColor: 'gray'
        }
    
    }


  return (
    <div className={styles.chartContainer}>
      <Doughnut className='circleChart' data={datas} options={options} width={400} height={400} />
    </div>
  );
}
