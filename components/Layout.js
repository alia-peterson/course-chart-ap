import Head from 'next/head'
import Footer from './Footer'
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

                <div className={styles.main}>
                  {children}

                  <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout;
