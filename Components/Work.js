import styles from '../styles/Work.module.css'
import WorkProject from './WorkProject'
import { projects } from '../Collections/projects'

const Work = ({ currentTheme }) => {
    return (
        <div>
           <div className={styles.workHeading}>Projects and Blogs</div>
           <div className={styles.workmain} style={{color: currentTheme.subtext}}>
              {
                  projects.map((project) => {
                      return (
                          <div key={project.id}>
                              <WorkProject currentTheme={currentTheme} project={project}/>
                          </div>
                      )
                  })
              }
           </div>
        </div>
    )
}

export default Work
