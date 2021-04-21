import React from "react";
import { useAppContext } from '../context/app-context';
import { Doughnut } from "react-chartjs-2";

import styles from "../styles/dashboard.module.scss";

export default function CircleChart({ data, view }) {
  const filteredData = data.filter(type => Object.values(type)[0])

  const sortedData = filteredData.sort((a, b) => {
    return Object.values(b)[0] - Object.values(a)[0]
  })

  const { activityColors } = useAppContext();

  const getLabelPercent = p => {
    let number = Object.values(p)
    let string = `${number}`
    if (number < 10) {
      string = '  ' + number
    } else if (number < 100) {
      string = ' ' + number
    }
    return string
  }

const normalizeLabelLength = label => {
  let string = ''
  let numSpaces = 55 - label.split('').length
  let spaces = new Array(numSpaces).fill(' ').join('')
  string = label+spaces
  return string
}

  const chartLabels = sortedData.map((p) => {
    let label =  normalizeLabelLength(`${getLabelPercent(p)}%  -  ${Object.keys(p)}`)
    console.log(label, label.length)
    return label
  });

  const chartData = sortedData.map((p) => Object.values(p));
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
    layout: {
      padding: 5
    },
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: `Activities in ${view}`,
      fontFamily: 'IBM Plex Mono',
      fontSize: 18,
      fontColor: 'gray',
      padding: 10
    }
    
    }


  return (
    <div className={styles.chartContainer}>
      <Doughnut className='circleChart' data={datas} options={options} width={300} height={150} />
    </div>
  );
}
