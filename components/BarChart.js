import { Bar } from 'react-chartjs-2';
import { useAppContext } from '../context/app-context';
import styles from '../styles/BarChart.module.scss'

const BarChart = () => {

    const { sharedState } = useAppContext()
    
    let label = 'Writing'

    // let example = sharedState.courses[0].modules.map(mod => {
    //     let found = mod.moduleActivities.filter(act => act.activity.name.includes(label))
    //     console.log(found)
    //     let totals = 0
    //     found.forEach(act => {
    //          totals += (act.activity.multiplier * act.input)
    //     })
    //     return totals
    // })

    

    // console.log(example, 'example')

    const data = {
        labels: sharedState.courses[0].modules.map(mod => mod.number),
        datasets: [{
          label: label,
          data: sharedState.courses[0].modules.map(mod => {
            let found = mod.moduleActivities.filter(act => act.activity.name.includes(label))
            let totals = 0
            found.forEach(act => {
                 totals += (act.activity.multiplier * act.input)
            })
            return totals
          }),
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

    const changeData = (dataType) => {
        label = dataType
        console.log(label)
    }

    return (
        <>
            <Bar 
                data={data}
                maxWidth={300}
                height={300}
                options={opts}
            />
            <section className={styles.activityOptions}>
                <button 
                    className={styles.firstActivity}
                    onClick={() => changeData('Lessons Objects')}
                >
                    Lessons Objects
                </button>
                <button 
                    className={styles.secondActivity}
                    onClick={() => changeData('Quizzes')}
                >
                    Quizzes
                </button>
                <button 
                    className={styles.thirdActivity}
                    onClick={() => changeData('Writings')}
                >
                    Writings
                </button>
                <button 
                    className={styles.forthActivity}
                    onClick={() => changeData('Reading')}
                >
                    Readings
                </button>
                <button 
                    className={styles.fifthActivity}
                    onClick={() => changeData('Videos')}
                >
                    Videos
                </button>
                <button 
                    className={styles.sixthActivity}
                    onClick={() => changeData('Discussion Boards')}
                >
                    Discussion Boards
                </button> 
            </section>
        </>
    )
}

export default BarChart;

