import styles from '../styles/Home.module.css'
import Link from 'next/link'

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>Hey there, I am Asavari.</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>Usually, when I am not caught up with my college assignments, I like to try my hand at web development and I think I have gotten pretty good at it!</h2>
                <Link href="#"><a className={styles.cta1} style={{ backgroundColor: currentTheme.name === 'dark' ? '#d7f7f5' : '#263859', color: currentTheme.contrastText}}>My work</a></Link>
            </div>
        </div>
    )
}

export default HomePage
