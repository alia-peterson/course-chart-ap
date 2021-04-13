import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../context/app-context';
import styles from '../styles/BarChart.module.scss'

const BarChart = () => {

    const { sharedState } = useAppContext()

    const data = {
        labels: sharedState.courses[0].Modules.map(mod => mod.number),
        datasets: [{
          label: 'Reading',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(242, 71, 38, 0.2)',
          borderColor: 'rgba(242, 71, 38, 1)',
          borderWidth: 1
        }]
    }

    const opts = {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: `Comparison of Individual Task for ${sharedState.courses[0].Name}`,
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
                maxWidth={700}
                height={500}
                options={opts}
            />
            <section className={styles.activityOptions}>
               <button className={styles.firstActivity}>
                    Lessons Objects
                </button>
                <button className={styles.secondActivity}>
                    Quizzes
                </button>
                <button className={styles.thirdActivity}>
                    Writings
                </button>
                <button className={styles.forthActivity}>
                    Readings
                </button>
                <button className={styles.fifthActivity}>
                    Videos
                </button>
                <button className={styles.sixthActivity}>
                    Discussion Boards
                </button> 
            </section>
        </>
    )
}

export default BarChart;

