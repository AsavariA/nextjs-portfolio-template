import Head from 'next/head'
import Contact from '../Components/Contact'
import styles from '../styles/Contact.module.css'
import HeadTag from '../Components/HeadTag'

const contact = ({ currentTheme }) => {

    return (
        <>
            <HeadTag page='Contact'/>
            <div className={styles.contactFullDiv}>
                <Contact currentTheme={currentTheme} />
            </div>
        </>
    )
}

export default contact
