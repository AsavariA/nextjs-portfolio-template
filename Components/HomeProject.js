import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

const HomeProject = ({ currentTheme, project }) => {
    return (
        <div className={styles.projectmain} style={{borderColor: currentTheme.name === 'dark' ? '#d7f7f5' : '#263859', borderRadius: project.borderRadius}}>
            <div className={styles.projectContent}>
                <div className={styles.projectIcon} style={{color: currentTheme.name === 'dark' ? '#d7f7f5' : '#263859', backgroundColor: currentTheme.footerColor, borderColor: currentTheme.name === 'dark' ? '#d7f7f5' : '#263859'}}><FontAwesomeIcon icon={faTelegramPlane} /></div>
                <h1 className={styles.projectTitle}>{project.name}</h1>
                <h2 className={styles.projectSubTitle} style={{color: currentTheme.subtext}}>{project.description}</h2>
                <Link href="#"><a className={styles.cta2} style={{ color: currentTheme.tertiary }}>View More</a></Link>
            </div>
        </div>
    )
}

export default HomeProject
