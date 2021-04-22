import React from "react";
import { useAppContext } from '../context/app-context';
import { Doughnut } from "react-chartjs-2";

import styles from "../styles/dashboard.module.scss";

export default function CircleChart({ data, view }) {
  const filteredData = data.filter(type => Object.values(type)[0])

  const sortedData = filteredData.sort((a, b) => {
    return Object.values(b)[0] - Object.values(a)[0]
  })
  
  const { sharedState } = useAppContext();

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
    return label
  });

  const chartData = sortedData.map((p) => Object.values(p));

  let color = Object.fromEntries(sharedState.activities.map(a => [a.name, a.color]))

  const activityColors = sortedData.map(d => {
    let type = Object.keys(d)[0]
    return color[type]})


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
      padding: 0
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
      padding: 30
    }
    
    }


  return (
    <div className={styles.chartContainer} aria-label={`A color coded doughnut chart for the activities in a ${view}`}>
      <Doughnut className='circleChart' data={datas} options={options} width={400} height={250}  />
    </div>
  );
}
