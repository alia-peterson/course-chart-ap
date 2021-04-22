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
          <p className={styles.general}>
            This can be used for: 
          </p>
            <ul className={styles.ul}>
              <li className={styles.li}>auditors looking to see if a course meets the standards for accredition</li>
              <li className={styles.li}>teachers in order to plan module lessons and estimate the needed time     contributions for students based on their inputs</li>
              <li className={styles.li}>teaching consultants and subject matter experts (SMEs) to provide insight on course design</li>
            </ul>
          <p className={styles.general}>
            To use CourseChart:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>click on the "Add a course" tab in the side bar</li>
            <li className={styles.li}>input information about the course name, description, credit hours, duration  of   course, and the institution associated</li>
            <li className={styles.li}>click on the "Add Course" button, you will be taken to your new page for that     course, which will be updated with composit </li>
            <li className={styles.li}>if hovering over a course in the sidebar, a dropdown will appear to the side    showing all modules </li>
            <li className={styles.li}>click on the "Add a module" in the side bar</li>
            <li className={styles.li}>input information about the add Module name, description, and inputs for  various  tasks assigned during that module</li>
            <li className={styles.li}>the total time per each task will be displayed as the task inputs are entered,    along with a target hours per week for the course based on credit hours and   duration</ li>
            <li className={styles.li}>click on the "Add Module" button, you will be taken to your new page for that     module</li>
            <li className={styles.li}>click on the 'See All Courses' or logo in the sidebar to see all courses    dashboard</li>
          </ul>
      </section>
    </div>
  )
}