import Head from 'next/head'
import NavBar from './NavBar'
import styles from '../styles/Home.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Course Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <NavBar />

        <main className={styles.main}>
          {children}

        </main>
      </div>
    </>
  )
}

export default Layout;
