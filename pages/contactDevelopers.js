import styles from '../styles/Home.module.css'
import Image from 'next/image'

const ContactDevelopers = () => {

    return (
        <>
            <main className={styles.main}>
                <h2>Meet the Developers</h2>
                <article>
                    <section>
                        <h3>Gus Cunningham</h3>
                        <Image 
                            src="/images/Gus-Profile.jpeg" 
                            alt='Gus Github'
                            width={300}
                            height={300}
                        /> 
                        <a href='https://github.com/cunninghamge'>GitHub Profile</a>
                        <a href='https://www.linkedin.com/in/grayson-cunningham/'>LinkedIn Profile</a>
                    </section>
                    <section>
                        <h3>Alice Ruppert</h3>
                        <Image 
                            src="/images/Alice-Profile.jpeg"
                            alt='Alice Github'
                            width={300}
                            height={300}
                        /> 
                        <a href='https://github.com/srslie'>GitHub Profile</a>
                        <a href='https://www.linkedin.com/in/aliceruppert/'>LinkedIn Profile</a>
                    </section>
                    <section>
                        <h3>Ely Hess</h3>
                        <Image 
                            src="/images/Ely-Profile.jpeg" 
                            alt='Ely Github'
                            width={300}
                            height={300}
                        /> 
                        <a href='https://github.com/elyhess'>GitHub Profile</a>
                        <a href='https://www.linkedin.com/in/ely-hess/'>LinkedIn Profile</a>
                    </section>
                    <section>
                        <h3>Alia Peterson</h3>
                        <Image 
                            src="/images/Alia-Profile.jpeg" 
                            alt='Alia Github'
                            width={300}
                            height={300}
                        /> 
                        <a href='https://github.com/alia-peterson'>GitHub Profile</a>
                        <a href='https://www.linkedin.com/in/alia-peterson/'>LinkedIn Profile</a>
                    </section>
                    <section>
                        <h3>Cameron Aragon</h3>
                        <Image 
                            src="/images/Cameron-Profile.jpeg" 
                            alt='Cameron Github'
                            width={300}
                            height={300}
                        /> 
                        <a href='https://github.com/camaragon'>GitHub Profile</a>
                        <a href='https://www.linkedin.com/in/camaragon/'>LinkedIn Profile</a>
                    </section>
                    <section>
                        <h3>Lucas Merchant</h3>
                        <Image 
                            src="/images/Lucas-Profile.jpeg" 
                            alt='Lucas Github'
                            width={300}
                            height={300}
                        /> 
                        <a href='https://github.com/lbmerchant93'>GitHub Profile</a>
                        <a href='https://www.linkedin.com/in/lucas-merchant93/'>LinkedIn Profile</a>
                    </section>
                </article>
            </main>
        </>
    )
}

export default ContactDevelopers;