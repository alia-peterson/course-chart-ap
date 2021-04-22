import styles from '../styles/contactDevelopers.module.scss'
import Image from 'next/image'

const ContactDevelopers = () => {

    return (
        <>
            <main className={styles.main}>
                <h2>Meet the Developers</h2>
                <article className={styles.developers}>
                    <section className={styles.dev}>
                        <h3 className={styles.h3}>Gus Cunningham<br/>(he/him)</h3>
                        <Image
                            src="/images/Gus-Profile.jpeg"
                            alt='Gus Github'
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                        <div className={styles.wrapper}>
                            <a href='https://github.com/cunninghamge' className={styles.link}>GitHub Profile</a>
                            <a href='https://www.linkedin.com/in/grayson-cunningham/'>LinkedIn Profile</a>
                        </div>
                    </section>
                    <section className={styles.dev}>
                        <h3 className={styles.h3}>Alice Ruppert<br/>(they/her)</h3>
                        <Image
                            src="/images/Alice-Profile.jpeg"
                            alt='Alice Github'
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                        <div className={styles.wrapper}>
                            <a href='https://github.com/srslie' className={styles.link}>GitHub Profile</a>
                            <a href='https://www.linkedin.com/in/aliceruppert/'>LinkedIn Profile</a>
                        </div>
                    </section>
                    <section className={styles.dev}>
                        <h3 className={styles.h3}>Ely Hess<br/>(he/him)</h3>
                        <Image
                            src="/images/Ely-Profile.jpeg"
                            alt='Ely Github'
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                        <div className={styles.wrapper}>
                            <a href='https://github.com/elyhess' className={styles.link}>GitHub Profile</a>
                            <a href='https://www.linkedin.com/in/ely-hess/'>LinkedIn Profile</a>
                        </div>
                    </section>
                    <section className={styles.dev}>
                        <h3 className={styles.h3}>Alia Peterson<br/>(she/her)</h3>
                        <Image
                            src="/images/Alia-Profile.jpeg"
                            alt='Alia Github'
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                        <div className={styles.wrapper}>
                            <a href='https://github.com/alia-peterson' className={styles.link}>GitHub Profile</a>
                            <a href='https://www.linkedin.com/in/alia-peterson/'>LinkedIn Profile</a>
                        </div>
                    </section>
                    <section className={styles.dev}>
                        <h3 className={styles.h3}>Cameron Aragon<br/>(he/him)</h3>
                        <Image
                            src="/images/Cameron-Profile.jpeg"
                            alt='Cameron Github'
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                        <div className={styles.wrapper}>
                            <a href='https://github.com/camaragon' className={styles.link}>GitHub Profile</a>
                            <a href='https://www.linkedin.com/in/camaragon/'>LinkedIn Profile</a>
                        </div>
                    </section>
                    <section className={styles.dev}>
                        <h3 className={styles.h3}>Lucas Merchant<br/>(he/him)</h3>
                        <Image
                            src="/images/Lucas-Profile.jpeg"
                            alt='Lucas Github'
                            width={100}
                            height={100}
                            className={styles.img}
                        />
                        <div className={styles.wrapper}>
                            <a href='https://github.com/lbmerchant93' className={styles.link}>GitHub Profile</a>
                            <a href='https://www.linkedin.com/in/lucas-merchant93/'>LinkedIn Profile</a>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}

export default ContactDevelopers;
