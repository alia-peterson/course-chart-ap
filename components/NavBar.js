import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

import { useState } from 'react'
import { useAppContext } from '../context/app-context'

export default function NavBar() {
  const { sharedState, setSharedState} = useAppContext()
  const [selected, setSelected ] = useState('home')

  const checkIfSelected = (id) => {
      if (id === selected) {
          return styles.selected
      }
  }

  const courses = sharedState.courses.map((course, i) => {

    const modules = course.modules.map((mod, j) => {
        let selectedCheck = checkIfSelected(mod.id)
      return (
        <Link key={j} href={`/moduleDashboard`}>
          <div className={styles.module}>
            <a
              onClick={() => {
                setSharedState({
                  ...sharedState,
                  currentModule: mod.id
                })
                }
              }>
              {mod.name}
            </a>
          </div>
        </Link>
      )
    })

    return (
      <div key={i}>
        <Link href={`/courseDashboard`}>
          <div className={styles.course}>
            <a
              id={i}
              onClick={() => {
                setSharedState({
                  ...sharedState,
                  currentCourse: course.id,
                })
                setSelected(course.id)
            }
              }>
                {course.name}
              </a>
          </div>
        </Link>

        {(sharedState.currentCourse === course.id) &&
        <div className={styles.courseButtons}>

          {modules}

          <Link href='/addModuleForm'>
            <div className={styles.addCourse}>
              <a>+ Add New Module</a>
            </div>
          </Link>
        </div>
        }
      </div>
    )
  })

  return (
    <nav className={styles.navbar}>
        <Link href='/' className={styles.homeLogo}>
            <section className={styles.container}>
              <div className={styles.logo}>
                <Image src='/icon.png' alt='Course chart icon' height={50} width={50} />
              </div>
              <h1>CourseChart</h1>
            </section>
      </Link>

      <section className={styles.courseButtons}>
        <Link href='/'>
          <div className={styles.home}>
            <a>Home</a>
          </div>
        </Link>

        {courses}
      </section>

      <section className={styles.navButtons}>
        <Link href='/addCourseForm'>
          <div className={styles.courseButtons}>
            <a>+ Add New Course</a>
          </div>
        </Link>
        <Link href='/instructions'>
          <a>Instructions</a>
        </Link>

        <Link href='/instructions'>
          <a>About Site</a>
        </Link>
      </section>
    </nav>
  )
}
