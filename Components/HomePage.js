import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import Skills from './Skills'
import { projects } from '../Constants/projects'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { userinfo } from '../Constants/userinfo'

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2>
                <Link href="#work"><a className={styles.cta1} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>My work</a></Link>
            </div>
            <div className={styles.homeWorkSection} id="work">
                <h1 className={styles.workheading} data-aos="fade-up">Work</h1>
                {
                    projects.slice(0, 3).map((project) => {
                        return (
                            <div key={project.id} data-aos="fade-up">
                                <HomeProject currentTheme={currentTheme} project={project} />
                            </div>
                        )
                    })
                }
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link href="/work"><a className={styles.cta3} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText }}>View All <span>&gt;</span></a></Link></div>
            </div>
            <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading} data-aos="fade-up">{userinfo.about.title}</h1>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">{userinfo.about.subtitle}</p>
                <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex', color: currentTheme.subtext }}>
                    <Link href={userinfo.about.resume} target="_blank"><a className={styles.cta4} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`, display: 'flex', alignItems: 'center' }}>Resume&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} /></a></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
