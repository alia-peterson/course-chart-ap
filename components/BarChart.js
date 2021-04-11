import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
//import PropTypes from 'prop-types';

const BarChart = () => {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
          label: 'Reading',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
    }

    const opts = {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: "Comparison of Individual Task for Courses",
            fontSize: 16,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Minutes',
                    fontStyle: 'bold'
                }
            }],
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Module',
                    fontStyle: 'bold'
                }
            }]
        }
    }

    return (
        <>
        <h2>Bar Chart</h2>
        <Bar 
            data={data}
            maxWidth={'auto'}
            height={700}
            options={opts}
        />
        </>
    )
}

export default BarChart;

//PropTypes
//BarChart.propTypes = {

//}
