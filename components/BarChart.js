import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../context/app-context';
import { calculations } from '../utilities/calculations';

import styles from '../styles/dashboard.module.scss';

const BarChart = (props) => {
    const { activityColors } = useAppContext()

    const [barData, setData] = useState({
        label: 'Reading (understand)',
        dataToDisplay: {},
        color: activityColors[0],
        course: props.course,
        activityTotals: props.activityTotals
    })

    useEffect(() => {
        let dataToDisplay = calculations.formatDataForBarChart(props.course, barData.label, props.activityTotals)
        console.log('DATATODISAPLY', dataToDisplay)
        // const filteredData = data.filter(type => Object.values(type)[0])

        // const sortedData = filteredData.sort((a, b) => {
        //   return Object.values(b)[0] - Object.values(a)[0]
        // })
        setData({ ...barData, dataToDisplay })
    }, [props.activityTotals])

    const changeData = (dataType, color) => {
            let dataToDisplay = calculations.formatDataForBarChart(props.course, dataType, props.activityTotals)
            setData({ label: dataType, dataToDisplay, color })
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

    const opts = {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: `Comparison of Individual Task for ${props.course.name}`,
            fontSize: 18,
            fontFamily: 'IBM Plex Mono',
            fontColor: 'gray'
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



    return (
        <div className='barChart'>
            <Bar 
                data={data}
                width={200}
                height={100}
                options={opts}
            />
            <section className={styles.activityOptions}>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[0]}`}}
                    onClick={() => changeData('Reading (understand)', activityColors[0])}
                >
                    Readings (understand)
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[1]}`}}
                    onClick={() => changeData('Reading (study guide)', activityColors[1])}
                >
                    Readings (study guide)
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[2]}`}}
                    onClick={() => changeData('Writings (research)', activityColors[2])}
                >
                    Writings (research)
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[3]}`}}
                    onClick={() => changeData('Writings (reflection)', activityColors[3])}
                >
                    Writings (reflection)
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[4]}`}}
                    onClick={() => changeData('Lessons Objects (matching/multiple choice)', activityColors[4])}
                >
                    Lessons Objects (matching/multiple choice)
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[5]}`}}
                    onClick={() => changeData('Lessons Objects (case study)', activityColors[5])}
                >
                    Lessons Objects (case study)
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[6]}`}}
                    onClick={() => changeData('Lecture', activityColors[6])}
                >
                    Lecture
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[7]}`}}
                    onClick={() => changeData('Videos', activityColors[7])}
                >
                    Videos
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[8]}`}}
                    onClick={() => changeData('Websites', activityColors[8])}
                >
                    Websites
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[9]}`}}
                    onClick={() => changeData('Discussion Boards', activityColors[9])}
                >
                    Discussion Boards
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[10]}`}}
                    onClick={() => changeData('Quizzes', activityColors[10])}
                >
                    Quizzes
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[11]}`}}
                    onClick={() => changeData('Exams', activityColors[11])}
                >
                    Exams
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[12]}`}}
                    onClick={() => changeData('Self Assessments', activityColors[12])}
                >
                    Self Assessments
                </button>
                <button
                    className={styles.buttonChart}
                    style={{borderColor: `${activityColors[13]}`}}
                    onClick={() => changeData('Miscellaneous', activityColors[13])}
                >
                    Miscellaneous
                </button>
            </section>
        </div>
    )
}

export default BarChart;
