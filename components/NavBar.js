import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

import { useAppContext } from '../context/app-context'

export default function NavBar() {
  const { sharedState, setSharedState } = useAppContext()

  const courses = sharedState.courses.map((course, i) => {

    const modules = course.modules.map((mod, j) => {
      return (
        <Link key={j} href={`/moduleDashboard`}>
          <div className={styles.module}>
            <a
              onClick={() =>
                setSharedState({
                  ...sharedState,
                  currentModule: mod.id
                })
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
              onClick={() =>
                setSharedState({
                  ...sharedState,
                  currentCourse: course.id,
                })
              }>
                {course.name}
              </a>
          </div>
        </Link>

        {(sharedState.currentCourse === course.id) &&
        <div className={styles.courseButtons}>
          <Link href='/moduleDashboard'>
            <div className= {styles.module}>
              <a>All Modules</a>
            </div>
          </Link>

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
      <section className={styles.container}>
        <div className={styles.logo}>
          <Image src='/icon.png' alt='Course chart icon' height={50} width={50} />
        </div>
        <h1>CourseChart</h1>
      </section>

      <section className={styles.courseButtons}>
        <Link href='/'>
          <div className={styles.course}>
            <a>Home</a>
          </div>
        </Link>

        <Link href='/addCourseForm'>
          <div className={styles.addCourse}>
            <a>+ Add New Course</a>
          </div>
        </Link>

        {courses}
      </section>

      <section className={styles.navButtons}>
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
