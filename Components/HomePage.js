import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import { projects } from '../Collections/projects'

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>Hey there, I am Asavari.</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>Usually, when I am not caught up with my college assignments, I like to try my hand at web development and I think I have gotten pretty good at it!</h2>
                <Link href="#work"><a className={styles.cta1} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>My work</a></Link>
            </div>
            <div className={styles.homeWorkSection} id="work">
                <h1 className={styles.workheading}>Work</h1>
                {
                    projects.slice(0, 3).map((project) => {
                        return (
                            <div key={project.id}>
                                <HomeProject currentTheme={currentTheme} project={project} />
                            </div>
                        )
                    })
                }
                <div style={{textAlign: 'center', paddingBottom: '2rem'}}><Link href="/work"><a className={styles.cta3} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow}}>View All <span>&gt;</span></a></Link></div>
            </div>
            <div id="skills" className={styles.homeSkillSection} style={{backgroundColor: currentTheme.secondary}}>
                <h1 className={styles.workheading}>Capabilities</h1>
                <div className={styles.skills} style={{color: currentTheme.subtext}}>
                    <ul className={styles.skillList}>  
                        <h1 className={styles.skillHeading} style={{color: currentTheme.text}}>Frontend</h1>
                        <h2>HTML5, CSS3, JS</h2>
                        <h2>React JS</h2>
                        <h2>Next JS</h2>
                    </ul>
                    <div className={styles.line} style={{backgroundColor: currentTheme.subtext}}></div>
                    <ul className={styles.skillList}>
                        <h1 className={styles.skillHeading} style={{color: currentTheme.text}}>Backend</h1>
                        <h2>Node JS</h2>
                        <h2>Express JS</h2>
                        <h2>Python</h2>
                    </ul>
                    <div className={styles.line} style={{backgroundColor: currentTheme.subtext}}></div>
                    <ul className={styles.skillList}>
                        <h1 className={styles.skillHeading} style={{color: currentTheme.text}}>Database</h1>
                        <h2>Firebase</h2>
                        <h2>MongoDB</h2>
                    </ul>
                </div>
                <div style={{textAlign: 'center', padding: '1rem 0'}}><Link href="/contact"><a className={styles.cta3} style={{ background: 'transparent', border: `2px solid ${currentTheme.accent}`}}>Get in touch <span>&gt;</span></a></Link></div>
            </div>
        </div>
    )
}

export default HomePage
