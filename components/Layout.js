import Head from 'next/head'
import Footer from './Footer'
import NavBar from './NavBar'
import styles from '../styles/Home.module.scss'

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>Course Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <NavBar />

        <main className={styles.main}>
          {children}

          <Footer />
        </main>
      </div>
    </html>
  )
}

export default Layout;
