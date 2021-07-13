import Head from 'next/head'
import Contact from '../Components/Contact'
import styles from '../styles/Contact.module.css'

const contact = ({ currentTheme }) => {

    return (
        <>
            <Head>
                <title>Asavari Ambavane | Contact</title>
                <link rel="icon" href="/A2.png" />
                <meta name="title" content="Asavari Ambavane" />
                <meta name="description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Asavari Ambavane" />
                <meta property="og:description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/daily-productivity.appspot.com/o/meta1.PNG?alt=media&token=17ee3549-9296-4cb0-b1e0-5e6fd933f9b3" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Asavari Ambavane" />
                <meta property="twitter:description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />
                <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/daily-productivity.appspot.com/o/meta1.PNG?alt=media&token=17ee3549-9296-4cb0-b1e0-5e6fd933f9b3" />
            </Head>
            <div className={styles.contactFullDiv}>
                <Contact currentTheme={currentTheme} />
            </div>
        </>
    )
}

export default contact
