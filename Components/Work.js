import styles from '../styles/Work.module.css'
import WorkProject from './WorkProject'

const Work = ({ currentTheme }) => {
    return (
        <div>
           <div className={styles.workHeading}>Projects and Blogs</div>
           <WorkProject />
        </div>
    )
}

export default Work
