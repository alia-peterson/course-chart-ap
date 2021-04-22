import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../context/app-context';
import { calculations } from '../utilities/calculations';

import styles from '../styles/dashboard.module.scss';

const BarChart = (props) => {
    const { activityColors, sharedState } = useAppContext()

    const [barData, setData] = useState({
        label: 'Reading (understand)',
        dataToDisplay: {},
        color: activityColors[0],
        course: props.course,
        activityTotals: props.activityTotals,
        activitiesThatExist: []
    })


    useEffect(() => {
        let [ dataToDisplay, activitiesThatExist ] = calculations.formatDataForBarChart(props.course, barData.label, props.activityTotals)
        setData({ ...barData, dataToDisplay, activitiesThatExist })
    }, [props.activityTotals])

    const changeData = (dataType, color) => {
            let [ dataToDisplay, activitiesThatExist ]  = calculations.formatDataForBarChart(props.course, dataType, props.activityTotals)
            setData({ label: dataType, dataToDisplay, color, activitiesThatExist  })
    }

    const data = {
        labels: Object.keys(barData.dataToDisplay),
        datasets: [{
            label: barData.label,
            data: Object.values(barData.dataToDisplay),
            backgroundColor: `${barData.color}`,
            borderColor: `${barData.color}`,
            borderWidth: 1
        }]
    }

    const getMax = arrNums => {
        const num = Math.max(...arrNums) + 10
        return Math.ceil((num / 10)) * 10
    }

    const opts = {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: `Comparison of ${barData.label} for ${props.course.name}`,
            fontSize: 18,
            fontFamily: 'IBM Plex Mono',
            fontColor: 'gray'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: getMax(Object.values(barData.dataToDisplay))
                },
                // suggestedMax: 100,
                // //Math.max(...Object.values(barData.dataToDisplay)) + 5,
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Minutes',
                    fontStyle: 'bold',
                    fontFamily: 'IBM Plex Sans'
                }
            }],
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Module',
                    fontStyle: 'bold', 
                    fontFamily: 'IBM Plex Sans'
                }
            }]
        },
    }

    const buttons = activityTypes => {
        const buttonTypes = activityTypes.filter(types => barData.activitiesThatExist.includes(types.name))
        return buttonTypes.map(type => ( 
            <button
                className={styles.buttonChart}
                style={{borderColor: `${type.color}`}}
                onClick={() => changeData(`${type.name}`, type.color)}
                >
                {type.name}
            </button>
        ))
    }

    return (
        <div className='barChart'>
            <Bar 
                data={data}
                width={200}
                height={100}
                options={opts}
            />
            <section className={styles.activityOptions}>
                {barData.activitiesThatExist &&
                buttons(sharedState.activities)}
            </section>
        </div>
    )
}

export default BarChart;
