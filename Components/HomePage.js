import styles from '../styles/Home.module.css'

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>Hey there, I am Asavari.</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>Usually, when I am not caught up with my college assignments, I like to try my hand at web development and I think I have gotten pretty good at it!</h2>
            </div>
        </div>
    )
}

export default HomePage
