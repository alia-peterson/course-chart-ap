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

      <secton>

      </secton>
    </nav>
  )
}
