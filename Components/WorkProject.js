import styles from '../styles/Work.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import { HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { useState } from 'react';

const WorkProject = ({ currentTheme, project }) => {
  const toast = useToast()
  const [index, setIndex] = useState(1)
  const [classname, setClassname] = useState('project' + project.id + '_' + index)

  const showGitToast = () => {
    toast({
      description: "Sorry, this project has a private repository!",
      status: "info",
      isClosable: true,
    })
  }

  const showProjToast = () => {
    toast({
      description: "Sorry, this project has not been deployed yet!",
      status: "info",
      isClosable: true,
    })
  }

  const ahead = () => {
    if (index === 3) {
      setIndex(1)
      setClassname('project' + project.id + '_' + index)
    } else {
      setIndex(index + 1)
      setClassname('project' + project.id + '_' + index)
    }
  }

  const back = () => {
    if (index === 1) {
      setIndex(3)
      setClassname('project' + project.id + '_' + index)
    } else {
      setIndex(index - 1)
      setClassname('project' + project.id + '_' + index)
    }
  }

  return (
    <div className={styles.parentofparentcard} style={{ justifyContent: project.justifyContent }}>
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{project.name}</h1>
          <HStack spacing={2}>
            {
              project.tech.map((tech) => {
                return (
                  <div key={tech}>
                    <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={currentTheme.name === 'light' ? "cyan" : "purple"}>
                      <TagLabel>{tech}</TagLabel>
                    </Tag>
                  </div>
                )
              })
            }
          </HStack>
        </div>
        <div className={styles.imageandsocials}>
          <div className={`${styles.card} ${classname}`} style={{ borderColor: currentTheme.footerColor }}>
            <div className={styles.arrows} style={{ color: 'lightgray' }}>
              <p onClick={back}>&lt;</p>
              <p onClick={ahead}>&gt;</p>
            </div>
          </div>
          <div>
            <Tooltip label="Github link" placement="right">
              <div className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
                {project.githubLink !== '' ? <Link href={project.githubLink}><a><FontAwesomeIcon icon={faGithubAlt} /></a></Link> : <FontAwesomeIcon icon={faGithubAlt} onClick={showGitToast} />}
              </div>
            </Tooltip>
            <Tooltip label="Project link" placement="right">
              <div className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
                {project.projectLink !== '' ? <Link href={project.projectLink}><a><FontAwesomeIcon icon={faTelegramPlane} /></a></Link> : <FontAwesomeIcon icon={faTelegramPlane} onClick={showProjToast} />}
              </div>
            </Tooltip>
          </div>
        </div>
        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkProject
