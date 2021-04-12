import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

import { useAppContext } from '../context/app-context'

export default function NavBar() {
  const { sharedState } = useAppContext()
  
  const courses = sharedState.courses.map((course, i) => {
    return (
      <Link key={i} href='/courseDashboard'>
        <a className={styles.course}>{course.Name}</a>
      </Link>
    )
  })

  const modules = sharedState.courses[0].Modules.map((mod, i) => {
    return (
      <Link key={i} href='/moduleDashboard'>
        <a className={styles.module}>{mod.name}</a>
      </Link>
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
          <a className={styles.add}>+ Add New Course</a>
        </Link>

        <Link href='/moduleDashboard'>
          <a className={styles.module}>All Modules</a>
        </Link>

        {modules}

        <Link href='/addModuleForm'>
          <a className={styles.add}>+ Add New Module</a>
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
