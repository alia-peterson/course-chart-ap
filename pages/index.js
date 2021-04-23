import { useEffect } from 'react'
import { useAppContext } from '../context/app-context'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const { sharedState, setSharedState } = useAppContext()

  useEffect(() => {
    setSharedState({
      ...sharedState,
      currentCourse: '',
      currentModule: ''
    })
  }, [])

  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeHeader}>
        <h1 className={styles.welcomeTitle}>Welcome to CourseChart!</h1>
        <div className={styles.logoDiv}>
          <div className={styles.logo}>
            <Image src='/icon.png' alt='Course chart icon' height={50} width={50} />
          </div>
        </div>
      </div>
        <section className={styles.instructions}>
          <p className={styles.purpose}>
            <span className={styles.inlineName}>CourseChart</span> Track and visualize tasks assigned to students with estimates of the time needed to complete them.
            <br />
            <br />
            See the breakdown of Time on Task for each module, and wholistically, for each course.
          </p>
          <div className={styles.bullets}>
          <p className={styles.general}>
            This can be used for:
          </p>
            <ul className={styles.ul}>
              <li className={styles.li}>auditors looking to see if a course meets the standards for accredition</li>
              <li className={styles.li}>teachers planning module lessons and estimating the time contributions for students based on their inputs</li>
              <li className={styles.li}>teaching consultants and subject matter experts (SMEs) hoping to provide insight on course design</li>
            </ul>
          <p className={styles.general}>
            To use CourseChart:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>click on the "+ Add New Course" tab in the side bar</li>
            <li className={styles.li}>input information about the institution name, course name, credit hours, and the duration  of course</li>
            <li className={styles.li}>click on the "+ Add Course" button at the bottom of the form to add a new course</li>
            <li className={styles.li}>if you click any course in the sidebar, it will expand to show all modules for that course alongside a button to "+ Add New Module"</li>
            <li className={styles.li}>click on the "+ Add New Module" in the side bar to add another module to any course</li>
            <li className={styles.li}>input information about the added Module, including: name, description, and # of inputs for various activities assigned during that module</li>
            <li className={styles.li}>the total time for each task will be displayed in a bar at the bottom as the task inputs are entered, along with a target hours-per-week for the course based on credit hours and duration</ li>
            <li className={styles.li}>the bar at the bottom of this page will be yellow if you're below the goal time of assignments per week (based on credit hours and length of course), it will turn orange when you're in the suggested goal range, and will be red if you go over!</ li>
            <li className={styles.li}>you will also see time in minutes and hours as you update the form for each individual task, as you enter the input, and as an overall total at the bottom of the page</ li>
            <li className={styles.li}>click on the "Add Module" button at the bottom of the form to add your module</li>
            <li className={styles.li}>click on the logo in the sidebar to come back to this page!</li>
          </ul>
          </div>
      </section>
    </div>
  )
}
