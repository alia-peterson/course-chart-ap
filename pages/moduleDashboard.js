import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar'

export default function moduleDashboard() {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}></main>
    </div>
  )
}
