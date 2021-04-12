import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

import { useAppContext } from '../context/app-context'

export default function NavBar() {
  const { sharedState } = useAppContext()

  const courses = sharedState.courses.map((course, i) => {
    const modules = course.Modules.map((mod, j) => {
      return (
        <Link key={j} href='/moduleDashboard'>
          <a>{mod.name}</a>
        </Link>
      )
    })

    return (
      <div key={i} className={styles.course}>
        <Link href='/courseDashboard'>
          <a>{course.Name}</a>
        </Link>
        <div className={styles.content}>
          <Link href='/moduleDashboard'>
            <a>All Modules</a>
          </Link>

          {modules}

          <Link href='/addModuleForm'>
            <a>+ Add New Module</a>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <nav className={styles.navbar}>
      <secton className={styles.container}>
        <div className={styles.logo}>
          <Image src='/icon.png' height={50} width={50} />
        </div>
        <h1>CourseChart</h1>
      </secton>

      <secton className={styles.courseButtons}>
        <Link href='/'>
          <a className={styles.course}>All Courses</a>
        </Link>

        {courses}

        <Link href='/addCourseForm'>
        <a className={styles.addCourse}>+ Add New Course</a>
        </Link>
      </secton>

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
