import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <secton className={styles.container}>
        <div className={styles.logo}>
          <Image src='/icon.png' height={50} width={50} />
        </div>
        <h1>CourseChart</h1>
      </secton>

      <secton className={styles.buttons}>
        <Link href='/courseDashboard'>
          <a>All Courses</a>
        </Link>

        <Link href='/courseDashboard'>
          <a>Course 1</a>
        </Link>

        <Link href='/moduleDashboard'>
          <a>All Modules</a>
        </Link>

        <Link href='/moduleDashboard'>
          <a>Module 1</a>
        </Link>

      </secton>
    </nav>
  )
}
