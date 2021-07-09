import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Skills = ({currentTheme}) => {
    return (
        <>
            <h1 className={styles.workheading}>Capabilities</h1>
            <div className={styles.skills} style={{ color: currentTheme.subtext }}>
                <ul className={styles.skillList}>
                    <h1 className={styles.skillHeading} style={{ color: currentTheme.text }}>Frontend</h1>
                    <h2>HTML5, CSS3, JS</h2>
                    <h2>React JS, Next JS</h2>
                    <h2>SASS</h2>
                </ul>
                <div className={styles.line} style={{ backgroundColor: currentTheme.subtext }}></div>
                <ul className={styles.skillList}>
                    <h1 className={styles.skillHeading} style={{ color: currentTheme.text }}>Backend</h1>
                    <h2>Node JS</h2>
                    <h2>Express JS</h2>
                    <h2>Python</h2>
                </ul>
                <div className={styles.line} style={{ backgroundColor: currentTheme.subtext }}></div>
                <ul className={styles.skillList}>
                    <h1 className={styles.skillHeading} style={{ color: currentTheme.text }}>Database</h1>
                    <h2>Firebase</h2>
                    <h2>MongoDB</h2>
                </ul>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem 0' }}><Link href="/contact"><a className={styles.cta3} style={{ background: 'transparent', border: `2px solid ${currentTheme.accent}` }}>Get in touch <span>&gt;</span></a></Link></div>
        </>
    )
}

export default Skills
