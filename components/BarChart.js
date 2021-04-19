import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../context/app-context';
import { formatDataForBarChart } from '../utilities/calculations';
import styles from '../styles/BarChart.module.scss';

const BarChart = (props) => {
    // const { sharedState } = useAppContext()
    console.log(props)
    const [barData, setData] = useState({
        label: 'Reading (understand)',
        dataToDisplay: {},
        color: '242, 71, 38,',
        course: props.course,
        activityTotals: props.activityTotals
    })

    useEffect(() => {
        let dataToDisplay = formatDataForBarChart(props.course, barData.label, props.activityTotals)
        setData({ ...barData, dataToDisplay })
    }, [])

    const changeData = (dataType, color) => {
            let dataToDisplay = formatDataForBarChart(props.course, dataType, props.activityTotals)
            setData({ label: dataType, dataToDisplay, color })
        }

    const data = {
        labels: Object.keys(barData.dataToDisplay),
        datasets: [{
          label: barData.label,
          data: Object.values(barData.dataToDisplay),
          backgroundColor: `rgba(${barData.color} 0.2)`,
          borderColor: `rgba(${barData.color} 1)`,
          borderWidth: 1
        }]
    }

    const opts = {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: `Comparison of Individual Task for ${props.course.name}`,
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
            <Bar 
                data={data}
                width={200}
                height={200}
                options={opts}
            />
            <section className={styles.activityOptions}>
                <button 
                    className={styles.firstActivity}
                    onClick={() => changeData('Reading (understand)', '242, 71, 38,')}
                >
                    Readings (understand)
                </button>
                <button 
                    className={styles.firstActivity}
                    onClick={() => changeData('Reading (study guide)', '242, 71, 38,')}
                >
                    Readings (study guide)
                </button>
                <button 
                    className={styles.secondActivity}
                    onClick={() => changeData('Writings (research)', '143, 209, 80,')}
                >
                    Writings (research)
                </button>
                <button 
                    className={styles.secondActivity}
                    onClick={() => changeData('Writings (reflection)', '143, 209, 80,')}
                >
                    Writings (reflection)
                </button>
                <button 
                    className={styles.thirdActivity}
                    onClick={() => changeData('Lessons Objects (matching/multiple choice)', '13, 167, 137,')}
                >
                    Lessons Objects (matching/multiple choice)
                </button>
                <button 
                    className={styles.thirdActivity}
                    onClick={() => changeData('Lessons Objects (case study)', '13, 167, 137,')}
                >
                    Lessons Objects (case study)
                </button>
                <button 
                    className={styles.forthActivity}
                    onClick={() => changeData('Lecture', '45, 155, 240,')}
                >
                    Lecture
                </button>
                <button 
                    className={styles.fifthActivity}
                    onClick={() => changeData('Videos', '149, 16, 172,')}
                >
                    Videos
                </button>
                <button 
                    className={styles.sixthActivity}
                    onClick={() => changeData('Websites', '250, 199, 17,')}
                >
                    Websites
                </button>
                <button 
                    className={styles.seventhActivity}
                    onClick={() => changeData('Discussion Boards', '250, 199, 17,')}
                >
                    Discussion Boards
                </button>
                <button 
                    className={styles.eighthActivity}
                    onClick={() => changeData('Quizzes', '250, 199, 17,')}
                >
                    Quizzes
                </button>
                <button 
                    className={styles.ninthActivity}
                    onClick={() => changeData('Exams', '250, 199, 17,')}
                >
                    Exams
                </button>
                <button 
                    className={styles.tenthActivity}
                    onClick={() => changeData('Self Assessments', '250, 199, 17,')}
                >
                    Self Assessments
                </button> 
                <button 
                    className={styles.eleventhActivity}
                    onClick={() => changeData('Miscellaneous', '250, 199, 17,')}
                >
                    Miscellaneous
                </button> 
            </section>
        </>
    )
}

export default BarChart;

