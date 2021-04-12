import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function NavBar() {
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
          <a className={styles.link}>All Courses</a>
        </Link>

        <Link href='/courseDashboard'>
          <a className={styles.link}>Course 1</a>
        </Link>

        <Link href='/addCourseForm'>
          <a className={styles.add}>+ Add New Course</a>
        </Link>

        <Link href='/moduleDashboard'>
          <a className={styles.link}>All Modules</a>
        </Link>

        <Link href='/moduleDashboard'>
          <a className={styles.link}>Module 1</a>
        </Link>

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
