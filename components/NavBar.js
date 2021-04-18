import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

import { useAppContext } from '../context/app-context'

export default function NavBar() {
    const { sharedState, setSharedState} = useAppContext()

  const courses = sharedState.courses.map((course, i) => {
    const modules = course.modules.map((mod, j) => {
      return (
        <Link key={j} href={`/moduleDashboard`}>
          <div>
            <a onClick={() => console.log('HOWDY')}>{mod.name}</a>
          </div>
        </Link>
      )
    })

    return (
      <div key={i} className={styles.course}>
        <Link href={`/courseDashboard`}>
          <div>
            <a
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
        <div className={styles.content} >
          <Link href='/moduleDashboard'>
            <a>All Modules</a>
          </Link>

          {modules}

          <Link href='/addModuleForm'>
            <a>+ Add New Module</a>
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
          <a className={styles.course}>All Course Dashboard</a>
        </Link>

        {courses}

        <Link href='/addCourseForm'>
        <a className={styles.addCourse}>+ Add New Course</a>
        </Link>
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
